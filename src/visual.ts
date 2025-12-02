"use strict";

import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import { VisualFormattingSettingsModel } from "./settings";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";

import "../style/visual.less";

export class Visual implements IVisual {
    private target: HTMLElement;
    private svg: SVGSVGElement;
    private mainGroup: SVGGElement;
    private tooltip: HTMLDivElement;
    
    // Éléments graphiques
    private pathArea: SVGPathElement;
    private pathLine: SVGPathElement;
    private gradientStopTop: SVGStopElement;
    private gradientStopBottom: SVGStopElement;
    private axisGroup: SVGGElement;
    private gradient: SVGLinearGradientElement;

    // Marges (Right 80 pour l'axe Y bis)
    private margin = { top: 20, right: 80, bottom: 40, left: 60 };
    
    // Settings
    private formattingSettings: VisualFormattingSettingsModel;
    private formattingSettingsService: FormattingSettingsService;

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;
        this.formattingSettingsService = new FormattingSettingsService();

        // Style du conteneur
        this.target.style.position = "relative";

        // 1. Création du SVG
        const ns = "http://www.w3.org/2000/svg";
        this.svg = document.createElementNS(ns, "svg");
        this.svg.classList.add("chart-container");
        this.target.appendChild(this.svg);

        // 2. Création du tooltip HTML
        this.tooltip = document.createElement("div");
        this.tooltip.className = "custom-tooltip";
        this.tooltip.style.position = "absolute";
        this.tooltip.style.display = "none";
        this.tooltip.style.background = "rgba(0, 0, 0, 0.8)";
        this.tooltip.style.color = "white";
        this.tooltip.style.padding = "8px 12px";
        this.tooltip.style.borderRadius = "4px";
        this.tooltip.style.fontSize = "12px";
        this.tooltip.style.pointerEvents = "none";
        this.tooltip.style.zIndex = "1000";
        this.tooltip.style.whiteSpace = "nowrap";
        this.target.appendChild(this.tooltip);

        // 3. Définition du Dégradé
        const defs = document.createElementNS(ns, "defs");
        this.gradient = document.createElementNS(ns, "linearGradient");
        this.gradient.setAttribute("id", "axonautGradient");
        this.gradient.setAttribute("x1", "0");
        this.gradient.setAttribute("y1", "0");
        this.gradient.setAttribute("x2", "0");
        this.gradient.setAttribute("y2", "1");

        // Haut : Bleu semi-transparent
        this.gradientStopTop = document.createElementNS(ns, "stop");
        this.gradientStopTop.setAttribute("offset", "0%");
        this.gradientStopTop.setAttribute("stop-color", "#3B60C4");
        this.gradientStopTop.setAttribute("stop-opacity", "0.3");

        // Bas : Transparent
        this.gradientStopBottom = document.createElementNS(ns, "stop");
        this.gradientStopBottom.setAttribute("offset", "100%");
        this.gradientStopBottom.setAttribute("stop-opacity", "0.0");

        this.gradient.appendChild(this.gradientStopTop);
        this.gradient.appendChild(this.gradientStopBottom);
        defs.appendChild(this.gradient);
        this.svg.appendChild(defs);

        // 4. Groupes
        this.mainGroup = document.createElementNS(ns, "g");
        this.axisGroup = document.createElementNS(ns, "g");
        
        this.mainGroup.appendChild(this.axisGroup);
        
        // Aire (Fond dégradé)
        this.pathArea = document.createElementNS(ns, "path");
        this.pathArea.setAttribute("fill", "url(#axonautGradient)");
        this.pathArea.setAttribute("stroke", "none");
        this.mainGroup.appendChild(this.pathArea);

        // Ligne (Trait bleu)
        this.pathLine = document.createElementNS(ns, "path");
        this.pathLine.setAttribute("fill", "none");
        this.pathLine.setAttribute("stroke", "#3B60C4");
        this.pathLine.setAttribute("stroke-width", "3");
        this.pathLine.setAttribute("stroke-linecap", "round");
        this.pathLine.setAttribute("stroke-linejoin", "round");
        this.mainGroup.appendChild(this.pathLine);

        this.svg.appendChild(this.mainGroup);
    }

    private showTooltip(x: number, y: number, content: string) {
        this.tooltip.innerHTML = content;
        this.tooltip.style.display = "block";
        this.tooltip.style.left = (x + 10) + "px";
        this.tooltip.style.top = (y - 10) + "px";
    }

    private hideTooltip() {
        this.tooltip.style.display = "none";
    }

    private getNiceStep(maxValue: number): number {
        const steps = [1, 2, 2.5, 5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000];
        const minTicks = 4;
        const maxTicks = 8;
        for (let i = 0; i < steps.length; i++) {
            const ticks = Math.ceil(maxValue / steps[i]);
            if (ticks >= minTicks && ticks <= maxTicks) {
                return steps[i];
            }
        }
        return steps[steps.length - 1];
    }

    public update(options: VisualUpdateOptions) {
        const ns = "http://www.w3.org/2000/svg";
        
        // A. Récupération des données
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical) return;
        if (!dataView.categorical.categories || !dataView.categorical.values) return;

        // Récupération des settings
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel, options.dataViews[0]);
        
        // Redimensionnement du SVG
        this.svg.setAttribute("width", options.viewport.width.toString());
        this.svg.setAttribute("height", options.viewport.height.toString());

        const cats = dataView.categorical.categories[0].values;
        const vals1 = dataView.categorical.values[0]?.values;
        const vals2 = dataView.categorical.values[1]?.values;

        // Noms des séries pour la légende
        const series1Name = dataView.categorical.values[0]?.source?.displayName || "Valeur 1";
        const series2Name = dataView.categorical.values[1]?.source?.displayName || "Valeur 2";

        // B. Récupération des paramètres pour la courbe 1
        const lineColor = this.formattingSettings.lineSettingsCard.lineColor.value.value;
        const strokeWidth = this.formattingSettings.lineSettingsCard.strokeWidth.value;
        const lineStyle = this.formattingSettings.lineSettingsCard.lineStyle.value.value.toString();
        const showMarkers = this.formattingSettings.lineSettingsCard.showMarkers.value;
        const markerSize = this.formattingSettings.lineSettingsCard.markerSize.value;
        const stepped = this.formattingSettings.lineSettingsCard.stepped.value;
        
        const showGradient = this.formattingSettings.gradientSettingsCard.showGradient.value;
        const gradientColor = this.formattingSettings.gradientSettingsCard.gradientColor.value.value;
        const gradientIntensity = this.formattingSettings.gradientSettingsCard.gradientIntensity.value;
        const gradientDirection = this.formattingSettings.gradientSettingsCard.gradientDirection.value.value.toString();
        
        // Application style ligne 1
        this.pathLine.setAttribute("stroke", lineColor);
        this.pathLine.setAttribute("stroke-width", strokeWidth.toString());
        
        // Style de ligne (pointillés, etc.)
        if (lineStyle === "dashed") {
            this.pathLine.setAttribute("stroke-dasharray", "8,4");
        } else if (lineStyle === "dotted") {
            this.pathLine.setAttribute("stroke-dasharray", "2,2");
        } else {
            this.pathLine.removeAttribute("stroke-dasharray");
        }
        
        // Appliquer le dégradé
        if (showGradient) {
            this.applyGradientDirection(this.gradient, gradientDirection);
            this.gradientStopTop.setAttribute("stop-color", gradientColor);
            this.gradientStopTop.setAttribute("stop-opacity", Math.max(0, Math.min(1, gradientIntensity)).toString());
            this.gradientStopBottom.setAttribute("stop-color", gradientColor);
            this.pathArea.setAttribute("fill", "url(#axonautGradient)");
        } else {
            this.pathArea.setAttribute("fill", "none");
        }

        // C. Paramètres pour la courbe 2
        const lineColor2 = this.formattingSettings.secondLineSettingsCard.lineColor2.value.value;
        const strokeWidth2 = this.formattingSettings.secondLineSettingsCard.strokeWidth2.value;
        const lineStyle2 = this.formattingSettings.secondLineSettingsCard.lineStyle2.value.value.toString();
        const showMarkers2 = this.formattingSettings.secondLineSettingsCard.showMarkers2.value;
        const markerSize2 = this.formattingSettings.secondLineSettingsCard.markerSize2.value;
        const stepped2 = this.formattingSettings.secondLineSettingsCard.stepped2.value;
        
        const showGradient2 = this.formattingSettings.secondGradientSettingsCard.showGradient2.value;
        const gradientColor2 = this.formattingSettings.secondGradientSettingsCard.gradientColor2.value.value;
        const gradientIntensity2 = this.formattingSettings.secondGradientSettingsCard.gradientIntensity2.value;
        const gradientDirection2 = this.formattingSettings.secondGradientSettingsCard.gradientDirection2.value.value.toString();
        
        const useYAxisBis = this.formattingSettings.yAxisSettings.useYAxisBis.value;

        // Paramètres des axes
        const showXAxis = this.formattingSettings.xAxisSettings.show.value;
        const xAxisColor = this.formattingSettings.xAxisSettings.axisColor.value.value;
        const xAxisFontSize = this.formattingSettings.xAxisSettings.fontSize.value;
        const xAxisFontFamily = this.formattingSettings.xAxisSettings.fontFamily.value.value.toString();
        
        const showYAxis = this.formattingSettings.yAxisSettings.show.value;
        const yAxisColor = this.formattingSettings.yAxisSettings.axisColor.value.value;
        const yAxisFontSize = this.formattingSettings.yAxisSettings.fontSize.value;
        const yAxisFontFamily = this.formattingSettings.yAxisSettings.fontFamily.value.value.toString();

        // Paramètres de la grille
        const showHorizontalGrid = this.formattingSettings.gridSettings.showHorizontal.value;
        const showVerticalGrid = this.formattingSettings.gridSettings.showVertical.value;
        const gridColor = this.formattingSettings.gridSettings.gridColor.value.value;
        const gridThickness = this.formattingSettings.gridSettings.gridThickness.value;
        const gridStyle = this.formattingSettings.gridSettings.gridStyle.value.value.toString();

        // Paramètres des étiquettes de données
        const showDataLabels = this.formattingSettings.dataLabels.show.value;
        const dataLabelsColor = this.formattingSettings.dataLabels.color.value.value;
        const dataLabelsFontSize = this.formattingSettings.dataLabels.fontSize.value;
        const dataLabelsFontFamily = this.formattingSettings.dataLabels.fontFamily.value.value.toString();
        const displayUnits = parseInt(this.formattingSettings.dataLabels.displayUnits.value.value.toString());
        const precision = this.formattingSettings.dataLabels.precision.value;

        // Paramètres de la légende
        const showLegend = this.formattingSettings.legend.show.value;
        const legendPosition = this.formattingSettings.legend.position.value.value.toString();
        const legendFontColor = this.formattingSettings.legend.fontColor.value.value;
        const legendFontSize = this.formattingSettings.legend.fontSize.value;
        const legendFontFamily = this.formattingSettings.legend.fontFamily.value.value.toString();

        // D. Calcul des dimensions avec ajustement pour la légende
        const width = options.viewport.width;
        const height = options.viewport.height;
        let legendHeight = 0;
        
        if (showLegend && (legendPosition === "Top" || legendPosition === "TopCenter")) {
            legendHeight = 30;
            this.margin.top = 20 + legendHeight;
        } else if (showLegend && (legendPosition === "Bottom" || legendPosition === "BottomCenter")) {
            legendHeight = 30;
            this.margin.bottom = 40 + legendHeight;
        } else {
            this.margin.top = 20;
            this.margin.bottom = 40;
        }

        const drawW = width - this.margin.left - this.margin.right;
        const drawH = height - this.margin.top - this.margin.bottom;

        // E. CALCUL ÉCHELLE Y pour courbe 1
        let maxDataVal1 = 0;
        if (vals1) vals1.forEach(v => { if(Number(v) > maxDataVal1) maxDataVal1 = Number(v); });

        const stepSize1 = this.getNiceStep(maxDataVal1);
        let niceMax1 = Math.ceil(maxDataVal1 / stepSize1) * stepSize1;
        if ((niceMax1 / stepSize1) > 8) niceMax1 = stepSize1 * 8;
        if (niceMax1 === 0) niceMax1 = stepSize1;

        // F. CALCUL ÉCHELLE Y pour courbe 2
        let maxDataVal2 = 0;
        let stepSize2 = 1;
        let niceMax2 = 1;
        
        if (vals2 && vals2.length) {
            vals2.forEach(v => { if(Number(v) > maxDataVal2) maxDataVal2 = Number(v); });
            stepSize2 = this.getNiceStep(maxDataVal2);
            niceMax2 = Math.ceil(maxDataVal2 / stepSize2) * stepSize2;
            if ((niceMax2 / stepSize2) > 8) niceMax2 = stepSize2 * 8;
            if (niceMax2 === 0) niceMax2 = stepSize2;
        }

        // G. Calcul des points courbe 1
        const points1: [number, number][] = cats.map((cat, i) => {
            const x = (i / (cats.length - 1)) * drawW;
            const y = drawH - (Number(vals1[i]) / niceMax1 * drawH);
            return [x, y];
        });

        // H. Calcul des points courbe 2
        let points2: [number, number][] = [];
        if (vals2 && vals2.length) {
            points2 = cats.map((cat, i) => {
                const x = (i / (cats.length - 1)) * drawW;
                const yMax = useYAxisBis ? niceMax2 : niceMax1;
                const y = drawH - (Number(vals2[i]) / yMax * drawH);
                return [x, y];
            });
        }

        // I. DESSIN
        this.mainGroup.setAttribute("transform", `translate(${this.margin.left}, ${this.margin.top})`);
        this.axisGroup.innerHTML = "";

        // 1. GRILLE ET AXE Y gauche (courbe 1)
        if (showYAxis) {
            for(let val = 0; val <= niceMax1; val += stepSize1) {
                const yPos = drawH - (val / niceMax1 * drawH);

                // Grille horizontale
                if (showHorizontalGrid) {
                    const line = document.createElementNS(ns, "line");
                    line.setAttribute("x1", "0");
                    line.setAttribute("x2", drawW.toString());
                    line.setAttribute("y1", yPos.toString());
                    line.setAttribute("y2", yPos.toString());
                    line.setAttribute("stroke", gridColor);
                    line.setAttribute("stroke-width", gridThickness.toString());
                    if (gridStyle === "dashed") {
                        line.setAttribute("stroke-dasharray", "4,4");
                    }
                    this.axisGroup.appendChild(line);
                }

                const text = document.createElementNS(ns, "text");
                text.setAttribute("x", "-10");
                text.setAttribute("y", yPos.toString());
                text.setAttribute("text-anchor", "end");
                text.setAttribute("alignment-baseline", "middle");
                text.textContent = this.formatNumber(val);
                text.setAttribute("fill", yAxisColor);
                text.setAttribute("font-size", yAxisFontSize.toString());
                text.setAttribute("font-family", yAxisFontFamily);
                this.axisGroup.appendChild(text);
            }
        }

        // 2. AXE Y bis (courbe 2) si activé
        if (useYAxisBis && vals2 && vals2.length && showYAxis) {
            for(let val = 0; val <= niceMax2; val += stepSize2) {
                const yPos = drawH - (val / niceMax2 * drawH);

                const text = document.createElementNS(ns, "text");
                text.setAttribute("x", (drawW + 10).toString());
                text.setAttribute("y", yPos.toString());
                text.setAttribute("text-anchor", "start");
                text.setAttribute("alignment-baseline", "middle");
                text.textContent = this.formatNumber(val);
                text.setAttribute("fill", lineColor2);
                text.setAttribute("font-size", yAxisFontSize.toString());
                text.setAttribute("font-family", yAxisFontFamily);
                this.axisGroup.appendChild(text);
            }
        }

        // 3. AXE X
        if (showXAxis) {
            points1.forEach((p, i) => {
                const step = Math.ceil(cats.length / 10); 
                if (i % step !== 0 && i !== cats.length - 1) return; 
                
                // Grille verticale
                if (showVerticalGrid) {
                    const line = document.createElementNS(ns, "line");
                    line.setAttribute("x1", p[0].toString());
                    line.setAttribute("x2", p[0].toString());
                    line.setAttribute("y1", "0");
                    line.setAttribute("y2", drawH.toString());
                    line.setAttribute("stroke", gridColor);
                    line.setAttribute("stroke-width", gridThickness.toString());
                    if (gridStyle === "dashed") {
                        line.setAttribute("stroke-dasharray", "4,4");
                    }
                    this.axisGroup.appendChild(line);
                }

                const text = document.createElementNS(ns, "text");
                text.setAttribute("x", p[0].toString());
                text.setAttribute("y", (drawH + 20).toString());
                
                if (i === cats.length - 1) {
                    text.setAttribute("text-anchor", "end");
                } else if (i === 0) {
                    text.setAttribute("text-anchor", "start");
                } else {
                    text.setAttribute("text-anchor", "middle");
                }
                
                text.textContent = this.formatDate(cats[i].toString());
                text.setAttribute("fill", xAxisColor);
                text.setAttribute("font-size", xAxisFontSize.toString());
                text.setAttribute("font-family", xAxisFontFamily);
                this.axisGroup.appendChild(text);
            });
        }

        // 4. COURBE 1 (aire + ligne)
        if (points1.length > 1) {
            let d1 = stepped ? this.buildSteppedPath(points1) : this.buildSmoothPath(points1);
            
            this.pathLine.setAttribute("d", d1);

            const firstX = points1[0][0];
            const lastX = points1[points1.length-1][0];
            const areaData1 = `${d1} L ${lastX},${drawH} L ${firstX},${drawH} Z`;
            this.pathArea.setAttribute("d", areaData1);
        }

        // Marqueurs courbe 1
        this.svg.querySelectorAll(".marker1").forEach(m => m.remove());
        if (showMarkers && points1.length > 0) {
            points1.forEach((p, i) => {
                const circle = document.createElementNS(ns, "circle");
                circle.classList.add("marker1");
                circle.setAttribute("cx", (this.margin.left + p[0]).toString());
                circle.setAttribute("cy", (this.margin.top + p[1]).toString());
                circle.setAttribute("r", markerSize.toString());
                circle.setAttribute("fill", lineColor);
                this.svg.appendChild(circle);
            });
        }

        // Ajouter des zones invisibles pour le survol même sans marqueurs
        this.svg.querySelectorAll(".hoverArea1").forEach(h => h.remove());
        points1.forEach((p, i) => {
            const hoverCircle = document.createElementNS(ns, "circle");
            hoverCircle.classList.add("hoverArea1");
            hoverCircle.setAttribute("cx", (this.margin.left + p[0]).toString());
            hoverCircle.setAttribute("cy", (this.margin.top + p[1]).toString());
            hoverCircle.setAttribute("r", "10");
            hoverCircle.setAttribute("fill", "transparent");
            hoverCircle.setAttribute("cursor", "pointer");
            
            // Tooltip HTML
            hoverCircle.addEventListener("mouseenter", (e: MouseEvent) => {
                const tooltipContent = `<div><strong>${this.formatDate(cats[i].toString())}</strong></div><div>${series1Name}: ${this.formatNumber(Number(vals1[i]))}</div>`;
                this.showTooltip(e.pageX, e.pageY, tooltipContent);
                
                if (!showMarkers) {
                    const tempCircle = document.createElementNS(ns, "circle");
                    tempCircle.classList.add("tempMarker1");
                    tempCircle.setAttribute("cx", (this.margin.left + p[0]).toString());
                    tempCircle.setAttribute("cy", (this.margin.top + p[1]).toString());
                    tempCircle.setAttribute("r", "5");
                    tempCircle.setAttribute("fill", lineColor);
                    tempCircle.setAttribute("stroke", "#fff");
                    tempCircle.setAttribute("stroke-width", "2");
                    this.svg.appendChild(tempCircle);
                }
            });
            
            hoverCircle.addEventListener("mousemove", (e: MouseEvent) => {
                this.tooltip.style.left = (e.pageX + 10) + "px";
                this.tooltip.style.top = (e.pageY - 10) + "px";
            });
            
            hoverCircle.addEventListener("mouseleave", () => {
                this.hideTooltip();
                this.svg.querySelectorAll(".tempMarker1").forEach(m => m.remove());
            });
            
            this.svg.appendChild(hoverCircle);
        });

        // Étiquettes de données courbe 1
        this.svg.querySelectorAll(".dataLabel1").forEach(l => l.remove());
        if (showDataLabels && points1.length > 0) {
            points1.forEach((p, i) => {
                const text = document.createElementNS(ns, "text");
                text.classList.add("dataLabel1");
                text.setAttribute("x", (this.margin.left + p[0]).toString());
                text.setAttribute("y", (this.margin.top + p[1] - 10).toString());
                text.setAttribute("text-anchor", "middle");
                text.setAttribute("fill", dataLabelsColor);
                text.setAttribute("font-size", dataLabelsFontSize.toString());
                text.setAttribute("font-family", dataLabelsFontFamily);
                text.textContent = this.formatDataLabel(Number(vals1[i]), displayUnits, precision);
                this.svg.appendChild(text);
            });
        }

        // 5. COURBE 2 (aire + ligne)
        if (points2.length > 1) {
            // Créer/récupérer le dégradé 2
            let gradient2 = this.svg.querySelector("#axonautGradient2") as SVGLinearGradientElement;
            if (!gradient2) {
                gradient2 = document.createElementNS(ns, "linearGradient");
                gradient2.setAttribute("id", "axonautGradient2");
                
                const stopTop2 = document.createElementNS(ns, "stop");
                stopTop2.setAttribute("offset", "0%");
                stopTop2.classList.add("stop-top-2");
                gradient2.appendChild(stopTop2);

                const stopBottom2 = document.createElementNS(ns, "stop");
                stopBottom2.setAttribute("offset", "100%");
                stopBottom2.setAttribute("stop-opacity", "0.0");
                stopBottom2.classList.add("stop-bottom-2");
                gradient2.appendChild(stopBottom2);

                this.svg.querySelector("defs")?.appendChild(gradient2);
            }

            // Appliquer direction, couleur, intensité
            this.applyGradientDirection(gradient2, gradientDirection2);
            const stops2 = gradient2.querySelectorAll("stop");
            stops2[0].setAttribute("stop-color", gradientColor2);
            stops2[0].setAttribute("stop-opacity", Math.max(0, Math.min(1, gradientIntensity2)).toString());
            stops2[1].setAttribute("stop-color", gradientColor2);

            // Aire sous la courbe 2
            let d2 = stepped2 ? this.buildSteppedPath(points2) : this.buildSmoothPath(points2);
            const areaData2 = `${d2} L ${points2[points2.length-1][0]},${drawH} L ${points2[0][0]},${drawH} Z`;

            let pathArea2 = this.mainGroup.querySelector(".pathArea2") as SVGPathElement;
            if (!pathArea2) {
                pathArea2 = document.createElementNS(ns, "path");
                pathArea2.classList.add("pathArea2");
                this.mainGroup.insertBefore(pathArea2, this.pathLine);
            }
            pathArea2.setAttribute("d", areaData2);
            
            if (showGradient2) {
                pathArea2.setAttribute("fill", "url(#axonautGradient2)");
            } else {
                pathArea2.setAttribute("fill", "none");
            }
            pathArea2.setAttribute("stroke", "none");

            // Ligne courbe 2
            let pathLine2 = this.mainGroup.querySelector(".pathLine2") as SVGPathElement;
            if (!pathLine2) {
                pathLine2 = document.createElementNS(ns, "path");
                pathLine2.classList.add("pathLine2");
                this.mainGroup.appendChild(pathLine2);
            }
            pathLine2.setAttribute("d", d2);
            pathLine2.setAttribute("fill", "none");
            pathLine2.setAttribute("stroke", lineColor2);
            pathLine2.setAttribute("stroke-width", strokeWidth2.toString());
            pathLine2.setAttribute("stroke-linecap", "round");
            pathLine2.setAttribute("stroke-linejoin", "round");
            
            // Style ligne 2
            if (lineStyle2 === "dashed") {
                pathLine2.setAttribute("stroke-dasharray", "8,4");
            } else if (lineStyle2 === "dotted") {
                pathLine2.setAttribute("stroke-dasharray", "2,2");
            } else {
                pathLine2.removeAttribute("stroke-dasharray");
            }

            // Marqueurs courbe 2
            this.svg.querySelectorAll(".marker2").forEach(m => m.remove());
            if (showMarkers2) {
                points2.forEach((p, i) => {
                    const circle = document.createElementNS(ns, "circle");
                    circle.classList.add("marker2");
                    circle.setAttribute("cx", (this.margin.left + p[0]).toString());
                    circle.setAttribute("cy", (this.margin.top + p[1]).toString());
                    circle.setAttribute("r", markerSize2.toString());
                    circle.setAttribute("fill", lineColor2);
                    this.svg.appendChild(circle);
                });
            }

            // Ajouter des zones invisibles pour le survol même sans marqueurs
            this.svg.querySelectorAll(".hoverArea2").forEach(h => h.remove());
            points2.forEach((p, i) => {
                const hoverCircle = document.createElementNS(ns, "circle");
                hoverCircle.classList.add("hoverArea2");
                hoverCircle.setAttribute("cx", (this.margin.left + p[0]).toString());
                hoverCircle.setAttribute("cy", (this.margin.top + p[1]).toString());
                hoverCircle.setAttribute("r", "10");
                hoverCircle.setAttribute("fill", "transparent");
                hoverCircle.setAttribute("cursor", "pointer");
                
                // Tooltip HTML
                hoverCircle.addEventListener("mouseenter", (e: MouseEvent) => {
                    const tooltipContent = `<div><strong>${this.formatDate(cats[i].toString())}</strong></div><div>${series2Name}: ${this.formatNumber(Number(vals2[i]))}</div>`;
                    this.showTooltip(e.pageX, e.pageY, tooltipContent);
                    
                    if (!showMarkers2) {
                        const tempCircle = document.createElementNS(ns, "circle");
                        tempCircle.classList.add("tempMarker2");
                        tempCircle.setAttribute("cx", (this.margin.left + p[0]).toString());
                        tempCircle.setAttribute("cy", (this.margin.top + p[1]).toString());
                        tempCircle.setAttribute("r", "5");
                        tempCircle.setAttribute("fill", lineColor2);
                        tempCircle.setAttribute("stroke", "#fff");
                        tempCircle.setAttribute("stroke-width", "2");
                        this.svg.appendChild(tempCircle);
                    }
                });
                
                hoverCircle.addEventListener("mousemove", (e: MouseEvent) => {
                    this.tooltip.style.left = (e.pageX + 10) + "px";
                    this.tooltip.style.top = (e.pageY - 10) + "px";
                });
                
                hoverCircle.addEventListener("mouseleave", () => {
                    this.hideTooltip();
                    this.svg.querySelectorAll(".tempMarker2").forEach(m => m.remove());
                });
                
                this.svg.appendChild(hoverCircle);
            });

            // Étiquettes de données courbe 2
            this.svg.querySelectorAll(".dataLabel2").forEach(l => l.remove());
            if (showDataLabels && vals2) {
                points2.forEach((p, i) => {
                    const text = document.createElementNS(ns, "text");
                    text.classList.add("dataLabel2");
                    text.setAttribute("x", (this.margin.left + p[0]).toString());
                    text.setAttribute("y", (this.margin.top + p[1] - 10).toString());
                    text.setAttribute("text-anchor", "middle");
                    text.setAttribute("fill", dataLabelsColor);
                    text.setAttribute("font-size", dataLabelsFontSize.toString());
                    text.setAttribute("font-family", dataLabelsFontFamily);
                    text.textContent = this.formatDataLabel(Number(vals2[i]), displayUnits, precision);
                    this.svg.appendChild(text);
                });
            }
        }

        // 6. LÉGENDE
        this.svg.querySelectorAll(".legend").forEach(l => l.remove());
        if (showLegend) {
            const legendGroup = document.createElementNS(ns, "g");
            legendGroup.classList.add("legend");

            const items: Array<{name: string, color: string}> = [];
            if (vals1) items.push({name: series1Name, color: lineColor});
            if (vals2 && vals2.length) items.push({name: series2Name, color: lineColor2});

            let legendX = 0;
            let legendY = 0;
            const itemWidth = 100;
            const itemHeight = 20;

            if (legendPosition === "Top" || legendPosition === "TopCenter") {
                legendX = (width - items.length * itemWidth) / 2;
                legendY = 10;
            } else if (legendPosition === "Bottom" || legendPosition === "BottomCenter") {
                legendX = (width - items.length * itemWidth) / 2;
                legendY = height - 20;
            } else if (legendPosition === "Left") {
                legendX = 10;
                legendY = height / 2 - (items.length * itemHeight) / 2;
            } else if (legendPosition === "Right") {
                legendX = width - 110;
                legendY = height / 2 - (items.length * itemHeight) / 2;
            }

            items.forEach((item, i) => {
                const xOffset = legendPosition.includes("Center") || legendPosition === "Top" || legendPosition === "Bottom" 
                    ? legendX + i * itemWidth 
                    : legendX;
                const yOffset = legendPosition === "Left" || legendPosition === "Right" 
                    ? legendY + i * itemHeight 
                    : legendY;

                // Rectangle coloré
                const rect = document.createElementNS(ns, "rect");
                rect.setAttribute("x", xOffset.toString());
                rect.setAttribute("y", yOffset.toString());
                rect.setAttribute("width", "15");
                rect.setAttribute("height", "3");
                rect.setAttribute("fill", item.color);
                legendGroup.appendChild(rect);

                // Texte
                const text = document.createElementNS(ns, "text");
                text.setAttribute("x", (xOffset + 20).toString());
                text.setAttribute("y", (yOffset + 2).toString());
                text.setAttribute("alignment-baseline", "middle");
                text.setAttribute("fill", legendFontColor);
                text.setAttribute("font-size", legendFontSize.toString());
                text.setAttribute("font-family", legendFontFamily);
                text.textContent = item.name;
                legendGroup.appendChild(text);
            });

            this.svg.appendChild(legendGroup);
        }
    }

    private formatDataLabel(value: number, displayUnits: number, precision: number): string {
        let formatted = value;
        let suffix = "";

        if (displayUnits === 0) {
            // Auto
            if (value >= 1000000000) {
                formatted = value / 1000000000;
                suffix = "Md";
            } else if (value >= 1000000) {
                formatted = value / 1000000;
                suffix = "M";
            } else if (value >= 1000) {
                formatted = value / 1000;
                suffix = "K";
            }
        } else if (displayUnits > 1) {
            formatted = value / displayUnits;
            if (displayUnits === 1000) suffix = "K";
            else if (displayUnits === 1000000) suffix = "M";
            else if (displayUnits === 1000000000) suffix = "Md";
        }

        return formatted.toFixed(precision) + suffix;
    }

    private buildSmoothPath(points: [number, number][]): string {
        let d = `M ${points[0][0]},${points[0][1]}`;
        for (let i = 1; i < points.length; i++) {
            d += ` L ${points[i][0]},${points[i][1]}`;
        }
        return d;
    }

    private buildSteppedPath(points: [number, number][]): string {
        let d = `M ${points[0][0]},${points[0][1]}`;
        for (let i = 1; i < points.length; i++) {
            d += ` L ${points[i][0]},${points[i-1][1]} L ${points[i][0]},${points[i][1]}`;
        }
        return d;
    }

    public getFormattingModel(): powerbi.visuals.FormattingModel {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }

    private applyGradientDirection(gradient: SVGLinearGradientElement, direction: string): void {
        switch(direction) {
            case "vertical":
                gradient.setAttribute("x1", "0");
                gradient.setAttribute("y1", "0");
                gradient.setAttribute("x2", "0");
                gradient.setAttribute("y2", "1");
                break;
            case "vertical-reverse":
                gradient.setAttribute("x1", "0");
                gradient.setAttribute("y1", "1");
                gradient.setAttribute("x2", "0");
                gradient.setAttribute("y2", "0");
                break;
            case "horizontal":
                gradient.setAttribute("x1", "0");
                gradient.setAttribute("y1", "0");
                gradient.setAttribute("x2", "1");
                gradient.setAttribute("y2", "0");
                break;
            case "horizontal-reverse":
                gradient.setAttribute("x1", "1");
                gradient.setAttribute("y1", "0");
                gradient.setAttribute("x2", "0");
                gradient.setAttribute("y2", "0");
                break;
            case "diagonal":
                gradient.setAttribute("x1", "0");
                gradient.setAttribute("y1", "0");
                gradient.setAttribute("x2", "1");
                gradient.setAttribute("y2", "1");
                break;
            case "diagonal-reverse":
                gradient.setAttribute("x1", "1");
                gradient.setAttribute("y1", "0");
                gradient.setAttribute("x2", "0");
                gradient.setAttribute("y2", "1");
                break;
        }
    }

    private formatNumber(num: number): string {
        return Math.round(num).toLocaleString('fr-FR');
    }

    private formatDate(value: string): string {
        const date = new Date(value);
        if (isNaN(date.getTime())) return value;
        try {
            return new Intl.DateTimeFormat('fr-FR', { month: 'short', year: 'numeric' }).format(date);
        } catch (e) {
            return value;
        }
    }
}