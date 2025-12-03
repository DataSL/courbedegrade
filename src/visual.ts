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
    private axisGroup: SVGGElement;
    private linesGroup: SVGGElement; // Nouveau groupe pour contenir toutes les lignes
    private tooltip: HTMLDivElement;
    
    // Marges
    private margin = { top: 20, right: 40, bottom: 40, left: 60 };
    
    // Settings
    private formattingSettings: VisualFormattingSettingsModel;
    private formattingSettingsService: FormattingSettingsService;

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;
        this.formattingSettingsService = new FormattingSettingsService();

        this.target.style.position = "relative";

        // 1. Création du SVG
        const ns = "http://www.w3.org/2000/svg";
        this.svg = document.createElementNS(ns, "svg");
        this.svg.classList.add("chart-container");
        this.target.appendChild(this.svg);

        // 2. Tooltip
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

        // 3. Defs pour les dégradés
        const defs = document.createElementNS(ns, "defs");
        this.svg.appendChild(defs);

        // 4. Groupes
        this.mainGroup = document.createElementNS(ns, "g");
        this.axisGroup = document.createElementNS(ns, "g");
        this.linesGroup = document.createElementNS(ns, "g"); // Groupe dédié aux lignes
        
        this.mainGroup.appendChild(this.axisGroup);
        this.mainGroup.appendChild(this.linesGroup);
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
        if (maxValue === 0) return 1;
        const steps = [1, 2, 2.5, 5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000];
        const minTicks = 4;
        const maxTicks = 8;
        for (let i = 0; i < steps.length; i++) {
            const ticks = Math.ceil(maxValue / steps[i]);
            if (ticks >= minTicks && ticks <= maxTicks) {
                return steps[i];
            }
        }
        // Fallback simple si hors range
        const powerOf10 = Math.pow(10, Math.floor(Math.log10(maxValue)));
        return powerOf10;
    }

    public update(options: VisualUpdateOptions) {
        const ns = "http://www.w3.org/2000/svg";
        
        // A. Récupération des données
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical) return;
        if (!dataView.categorical.categories || !dataView.categorical.values) return;

        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel, options.dataViews[0]);
        
        this.svg.setAttribute("width", options.viewport.width.toString());
        this.svg.setAttribute("height", options.viewport.height.toString());

        const cats = dataView.categorical.categories[0].values;
        const allSeries = dataView.categorical.values; // Toutes les séries de données

        // Paramètres généraux
        const showXAxis = this.formattingSettings.xAxisSettings.show.value;
        const xAxisColor = this.formattingSettings.xAxisSettings.axisColor.value.value;
        const xAxisFontSize = this.formattingSettings.xAxisSettings.fontSize.value;
        const xAxisFontFamily = this.formattingSettings.xAxisSettings.fontFamily.value.value.toString();
        
        const showYAxis = this.formattingSettings.yAxisSettings.show.value;
        const yAxisColor = this.formattingSettings.yAxisSettings.axisColor.value.value;
        const yAxisFontSize = this.formattingSettings.yAxisSettings.fontSize.value;
        const yAxisFontFamily = this.formattingSettings.yAxisSettings.fontFamily.value.value.toString();

        const showHorizontalGrid = this.formattingSettings.gridSettings.showHorizontal.value;
        const showVerticalGrid = this.formattingSettings.gridSettings.showVertical.value;
        const gridColor = this.formattingSettings.gridSettings.gridColor.value.value;
        const gridThickness = this.formattingSettings.gridSettings.gridThickness.value;
        const gridStyle = this.formattingSettings.gridSettings.gridStyle.value.value.toString();

        const showLegend = this.formattingSettings.legend.show.value;
        const legendPosition = this.formattingSettings.legend.position.value.value.toString();
        const legendFontColor = this.formattingSettings.legend.fontColor.value.value;
        const legendFontSize = this.formattingSettings.legend.fontSize.value;
        const legendFontFamily = this.formattingSettings.legend.fontFamily.value.value.toString();

        // B. Calcul des dimensions
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

        // C. CALCUL ÉCHELLE Y GLOBALE (Basé sur le MAX de TOUTES les séries)
        let globalMax = 0;
        allSeries.forEach(series => {
            series.values.forEach(v => {
                const val = Number(v);
                if (!isNaN(val) && val > globalMax) globalMax = val;
            });
        });

        const stepSize = this.getNiceStep(globalMax);
        let niceMax = Math.ceil(globalMax / stepSize) * stepSize;
        if ((niceMax / stepSize) > 10) niceMax = stepSize * 10; // Eviter trop de ticks
        if (niceMax === 0) niceMax = stepSize;

        // D. DESSIN
        this.mainGroup.setAttribute("transform", `translate(${this.margin.left}, ${this.margin.top})`);
        
        // Nettoyage
        this.axisGroup.innerHTML = "";
        this.linesGroup.innerHTML = "";
        this.svg.querySelectorAll(".custom-marker").forEach(m => m.remove());
        this.svg.querySelectorAll(".custom-datalabel").forEach(l => l.remove());
        this.svg.querySelectorAll(".custom-hover").forEach(h => h.remove());
        this.svg.querySelectorAll(".legend").forEach(l => l.remove());

        // 1. GRILLE ET AXE Y
        if (showYAxis) {
            for(let val = 0; val <= niceMax; val += stepSize) {
                const yPos = drawH - (val / niceMax * drawH);

                if (showHorizontalGrid) {
                    const line = document.createElementNS(ns, "line");
                    line.setAttribute("x1", "0");
                    line.setAttribute("x2", drawW.toString());
                    line.setAttribute("y1", yPos.toString());
                    line.setAttribute("y2", yPos.toString());
                    line.setAttribute("stroke", gridColor);
                    line.setAttribute("stroke-width", gridThickness.toString());
                    if (gridStyle === "dashed") line.setAttribute("stroke-dasharray", "4,4");
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

        // 2. AXE X
        if (showXAxis) {
            const step = Math.ceil(cats.length / 10); 
            cats.forEach((cat, i) => {
                if (i % step !== 0 && i !== cats.length - 1) return; 
                
                const xPos = (i / (cats.length - 1)) * drawW;

                if (showVerticalGrid) {
                    const line = document.createElementNS(ns, "line");
                    line.setAttribute("x1", xPos.toString());
                    line.setAttribute("x2", xPos.toString());
                    line.setAttribute("y1", "0");
                    line.setAttribute("y2", drawH.toString());
                    line.setAttribute("stroke", gridColor);
                    line.setAttribute("stroke-width", gridThickness.toString());
                    if (gridStyle === "dashed") line.setAttribute("stroke-dasharray", "4,4");
                    this.axisGroup.appendChild(line);
                }

                const text = document.createElementNS(ns, "text");
                text.setAttribute("x", xPos.toString());
                text.setAttribute("y", (drawH + 20).toString());
                
                if (i === cats.length - 1) text.setAttribute("text-anchor", "end");
                else if (i === 0) text.setAttribute("text-anchor", "start");
                else text.setAttribute("text-anchor", "middle");
                
                text.textContent = this.formatDate(cats[i].toString());
                text.setAttribute("fill", xAxisColor);
                text.setAttribute("font-size", xAxisFontSize.toString());
                text.setAttribute("font-family", xAxisFontFamily);
                this.axisGroup.appendChild(text);
            });
        }

        // 3. BOUCLE SUR LES SÉRIES (LIGNES)
        const legendItems: Array<{name: string, color: string}> = [];

        allSeries.forEach((series, index) => {
            if (index >= 10) return; // Limite de sécurité

            const seriesName = series.source.displayName;
            const vals = series.values;
            
            // Récupération dynamique des settings (lineSettings1, lineSettings2, etc.)
            const lineSettings = this.formattingSettings[`lineSettings${index + 1}`];
            const gradientSettings = this.formattingSettings[`gradientSettings${index + 1}`];

            if (!lineSettings || !gradientSettings) return;

            const lineColor = lineSettings.lineColor.value.value;
            const strokeWidth = lineSettings.strokeWidth.value;
            const lineStyle = lineSettings.lineStyle.value.value.toString();
            const showMarkers = lineSettings.showMarkers.value;
            const markerSize = lineSettings.markerSize.value;
            const stepped = lineSettings.stepped.value;

            const showGradient = gradientSettings.showGradient.value;
            const gradientColor = gradientSettings.gradientColor.value.value;
            const gradientIntensity = gradientSettings.gradientIntensity.value;
            const gradientDirection = gradientSettings.gradientDirection.value.value.toString();

            legendItems.push({ name: seriesName, color: lineColor });

            // Calcul des points
            const points: [number, number][] = cats.map((cat, i) => {
                const x = (i / (cats.length - 1)) * drawW;
                const y = drawH - (Number(vals[i]) / niceMax * drawH);
                return [x, y];
            });

            if (points.length < 2) return;

            // Création du dégradé unique
            const gradientId = `gradient_${index}_${Date.now()}`; // ID unique
            let gradient = document.createElementNS(ns, "linearGradient");
            gradient.setAttribute("id", gradientId);
            
            const stop1 = document.createElementNS(ns, "stop");
            stop1.setAttribute("offset", "0%");
            stop1.setAttribute("stop-color", gradientColor);
            stop1.setAttribute("stop-opacity", Math.max(0, Math.min(1, gradientIntensity)).toString());
            
            const stop2 = document.createElementNS(ns, "stop");
            stop2.setAttribute("offset", "100%");
            stop2.setAttribute("stop-color", gradientColor);
            stop2.setAttribute("stop-opacity", "0");
            
            gradient.appendChild(stop1);
            gradient.appendChild(stop2);
            this.svg.querySelector("defs")?.appendChild(gradient);
            this.applyGradientDirection(gradient, gradientDirection);

            // Construction du chemin
            let d = stepped ? this.buildSteppedPath(points) : this.buildSmoothPath(points);

            // Aire
            const pathArea = document.createElementNS(ns, "path");
            const areaD = `${d} L ${points[points.length-1][0]},${drawH} L ${points[0][0]},${drawH} Z`;
            pathArea.setAttribute("d", areaD);
            pathArea.setAttribute("fill", showGradient ? `url(#${gradientId})` : "none");
            pathArea.setAttribute("stroke", "none");
            this.linesGroup.appendChild(pathArea);

            // Ligne
            const pathLine = document.createElementNS(ns, "path");
            pathLine.setAttribute("d", d);
            pathLine.setAttribute("fill", "none");
            pathLine.setAttribute("stroke", lineColor);
            pathLine.setAttribute("stroke-width", strokeWidth.toString());
            pathLine.setAttribute("stroke-linecap", "round");
            pathLine.setAttribute("stroke-linejoin", "round");
            if (lineStyle === "dashed") pathLine.setAttribute("stroke-dasharray", "8,4");
            else if (lineStyle === "dotted") pathLine.setAttribute("stroke-dasharray", "2,2");
            this.linesGroup.appendChild(pathLine);

            // Marqueurs
            if (showMarkers) {
                points.forEach(p => {
                    const circle = document.createElementNS(ns, "circle");
                    circle.classList.add("custom-marker");
                    circle.setAttribute("cx", (this.margin.left + p[0]).toString());
                    circle.setAttribute("cy", (this.margin.top + p[1]).toString());
                    circle.setAttribute("r", markerSize.toString());
                    circle.setAttribute("fill", lineColor);
                    this.svg.appendChild(circle);
                });
            }

            // Zones de survol (Tooltip)
            points.forEach((p, i) => {
                const hoverCircle = document.createElementNS(ns, "circle");
                hoverCircle.classList.add("custom-hover");
                hoverCircle.setAttribute("cx", (this.margin.left + p[0]).toString());
                hoverCircle.setAttribute("cy", (this.margin.top + p[1]).toString());
                hoverCircle.setAttribute("r", "8");
                hoverCircle.setAttribute("fill", "transparent");
                hoverCircle.setAttribute("cursor", "pointer");
                
                hoverCircle.addEventListener("mouseenter", (e: MouseEvent) => {
                    const tooltipContent = `<div><strong>${this.formatDate(cats[i].toString())}</strong></div><div>${seriesName}: ${this.formatNumber(Number(vals[i]))}</div>`;
                    this.showTooltip(e.pageX, e.pageY, tooltipContent);
                    
                    const tempCircle = document.createElementNS(ns, "circle");
                    tempCircle.classList.add("temp-marker");
                    tempCircle.setAttribute("cx", (this.margin.left + p[0]).toString());
                    tempCircle.setAttribute("cy", (this.margin.top + p[1]).toString());
                    tempCircle.setAttribute("r", "5");
                    tempCircle.setAttribute("fill", lineColor);
                    tempCircle.setAttribute("stroke", "#fff");
                    tempCircle.setAttribute("stroke-width", "2");
                    this.svg.appendChild(tempCircle);
                });
                
                hoverCircle.addEventListener("mousemove", (e: MouseEvent) => {
                    this.tooltip.style.left = (e.pageX + 10) + "px";
                    this.tooltip.style.top = (e.pageY - 10) + "px";
                });
                
                hoverCircle.addEventListener("mouseleave", () => {
                    this.hideTooltip();
                    this.svg.querySelectorAll(".temp-marker").forEach(m => m.remove());
                });
                
                this.svg.appendChild(hoverCircle);
            });

            // Étiquettes de données
            const showDataLabels = this.formattingSettings.dataLabels.show.value;
            if (showDataLabels) {
                const dlColor = this.formattingSettings.dataLabels.color.value.value;
                const dlSize = this.formattingSettings.dataLabels.fontSize.value;
                const dlFamily = this.formattingSettings.dataLabels.fontFamily.value.value.toString();
                const dlUnits = parseInt(this.formattingSettings.dataLabels.displayUnits.value.value.toString());
                const dlPrecision = this.formattingSettings.dataLabels.precision.value;

                points.forEach((p, i) => {
                    const text = document.createElementNS(ns, "text");
                    text.classList.add("custom-datalabel");
                    text.setAttribute("x", (this.margin.left + p[0]).toString());
                    text.setAttribute("y", (this.margin.top + p[1] - 10).toString());
                    text.setAttribute("text-anchor", "middle");
                    text.setAttribute("fill", dlColor);
                    text.setAttribute("font-size", dlSize.toString());
                    text.setAttribute("font-family", dlFamily);
                    text.textContent = this.formatDataLabel(Number(vals[i]), dlUnits, dlPrecision);
                    this.svg.appendChild(text);
                });
            }
        });

        // 4. LÉGENDE
        if (showLegend && legendItems.length > 0) {
            const legendGroup = document.createElementNS(ns, "g");
            legendGroup.classList.add("legend");

            let legendX = 0;
            let legendY = 0;
            const itemWidth = 100;
            const itemHeight = 20;

            if (legendPosition === "Top" || legendPosition === "TopCenter") {
                legendX = (width - legendItems.length * itemWidth) / 2;
                legendY = 10;
            } else if (legendPosition === "Bottom" || legendPosition === "BottomCenter") {
                legendX = (width - legendItems.length * itemWidth) / 2;
                legendY = height - 20;
            } else if (legendPosition === "Left") {
                legendX = 10;
                legendY = height / 2 - (legendItems.length * itemHeight) / 2;
            } else if (legendPosition === "Right") {
                legendX = width - 110;
                legendY = height / 2 - (legendItems.length * itemHeight) / 2;
            }

            legendItems.forEach((item, i) => {
                const xOffset = legendPosition.includes("Center") || legendPosition === "Top" || legendPosition === "Bottom" 
                    ? legendX + i * itemWidth 
                    : legendX;
                const yOffset = legendPosition === "Left" || legendPosition === "Right" 
                    ? legendY + i * itemHeight 
                    : legendY;

                const rect = document.createElementNS(ns, "rect");
                rect.setAttribute("x", xOffset.toString());
                rect.setAttribute("y", yOffset.toString());
                rect.setAttribute("width", "15");
                rect.setAttribute("height", "3");
                rect.setAttribute("fill", item.color);
                legendGroup.appendChild(rect);

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
            if (value >= 1000000000) { formatted = value / 1000000000; suffix = "Md"; }
            else if (value >= 1000000) { formatted = value / 1000000; suffix = "M"; }
            else if (value >= 1000) { formatted = value / 1000; suffix = "K"; }
        } else if (displayUnits > 1) {
            formatted = value / displayUnits;
            if (displayUnits === 1000) suffix = "K";
            else if (displayUnits === 1000000) suffix = "M";
            else if (displayUnits === 1000000000) suffix = "Md";
        }
        return formatted.toFixed(precision) + suffix;
    }

    private buildSmoothPath(points: [number, number][]): string {
        if (points.length === 0) return "";
        let d = `M ${points[0][0]},${points[0][1]}`;
        for (let i = 1; i < points.length; i++) {
            d += ` L ${points[i][0]},${points[i][1]}`;
        }
        return d;
    }

    private buildSteppedPath(points: [number, number][]): string {
        if (points.length === 0) return "";
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
            case "vertical": gradient.setAttribute("x1", "0"); gradient.setAttribute("y1", "0"); gradient.setAttribute("x2", "0"); gradient.setAttribute("y2", "1"); break;
            case "vertical-reverse": gradient.setAttribute("x1", "0"); gradient.setAttribute("y1", "1"); gradient.setAttribute("x2", "0"); gradient.setAttribute("y2", "0"); break;
            case "horizontal": gradient.setAttribute("x1", "0"); gradient.setAttribute("y1", "0"); gradient.setAttribute("x2", "1"); gradient.setAttribute("y2", "0"); break;
            case "horizontal-reverse": gradient.setAttribute("x1", "1"); gradient.setAttribute("y1", "0"); gradient.setAttribute("x2", "0"); gradient.setAttribute("y2", "0"); break;
            case "diagonal": gradient.setAttribute("x1", "0"); gradient.setAttribute("y1", "0"); gradient.setAttribute("x2", "1"); gradient.setAttribute("y2", "1"); break;
            case "diagonal-reverse": gradient.setAttribute("x1", "1"); gradient.setAttribute("y1", "0"); gradient.setAttribute("x2", "0"); gradient.setAttribute("y2", "1"); break;
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