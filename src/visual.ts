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

        // 1. Création du SVG
        const ns = "http://www.w3.org/2000/svg";
        this.svg = document.createElementNS(ns, "svg");
        this.svg.classList.add("chart-container");
        this.target.appendChild(this.svg);

        // 2. Définition du Dégradé
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

        // 3. Groupes
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

        // B. Appliquer les paramètres pour la courbe 1
        const lineColor = this.formattingSettings.lineSettingsCard.lineColor.value.value;
        const gradientColor = this.formattingSettings.gradientSettingsCard.gradientColor.value.value;
        const gradientIntensity = this.formattingSettings.gradientSettingsCard.gradientIntensity.value;
        const gradientDirection = this.formattingSettings.gradientSettingsCard.gradientDirection.value.value.toString();
        
        this.pathLine.setAttribute("stroke", lineColor);
        this.applyGradientDirection(this.gradient, gradientDirection);
        this.gradientStopTop.setAttribute("stop-color", gradientColor);
        this.gradientStopTop.setAttribute("stop-opacity", Math.max(0, Math.min(1, gradientIntensity)).toString());
        this.gradientStopBottom.setAttribute("stop-color", gradientColor);

        // C. Paramètres pour la courbe 2
        const lineColor2 = this.formattingSettings.secondLineSettingsCard.lineColor2.value.value;
        const gradientColor2 = this.formattingSettings.secondGradientSettingsCard.gradientColor2.value.value;
        const gradientIntensity2 = this.formattingSettings.secondGradientSettingsCard.gradientIntensity2.value;
        const gradientDirection2 = this.formattingSettings.secondGradientSettingsCard.gradientDirection2.value.value.toString();
        const useYAxisBis = this.formattingSettings.axisSettingsCard.useYAxisBis.value;

        // D. Calcul des dimensions
        const width = options.viewport.width;
        const height = options.viewport.height;
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
        for(let val = 0; val <= niceMax1; val += stepSize1) {
            const yPos = drawH - (val / niceMax1 * drawH);

            const line = document.createElementNS(ns, "line");
            line.setAttribute("x1", "0");
            line.setAttribute("x2", drawW.toString());
            line.setAttribute("y1", yPos.toString());
            line.setAttribute("y2", yPos.toString());
            line.classList.add("grid-line");
            this.axisGroup.appendChild(line);

            const text = document.createElementNS(ns, "text");
            text.setAttribute("x", "-10");
            text.setAttribute("y", yPos.toString());
            text.setAttribute("text-anchor", "end");
            text.setAttribute("alignment-baseline", "middle");
            text.textContent = this.formatNumber(val);
            text.classList.add("axis-text");
            text.setAttribute("fill", lineColor);
            this.axisGroup.appendChild(text);
        }

        // 2. AXE Y bis (courbe 2) si activé
        if (useYAxisBis && vals2 && vals2.length) {
            for(let val = 0; val <= niceMax2; val += stepSize2) {
                const yPos = drawH - (val / niceMax2 * drawH);

                const text = document.createElementNS(ns, "text");
                text.setAttribute("x", (drawW + 10).toString());
                text.setAttribute("y", yPos.toString());
                text.setAttribute("text-anchor", "start");
                text.setAttribute("alignment-baseline", "middle");
                text.textContent = this.formatNumber(val);
                text.classList.add("axis-text");
                text.setAttribute("fill", lineColor2);
                this.axisGroup.appendChild(text);
            }
        }

        // 3. AXE X
        points1.forEach((p, i) => {
            const step = Math.ceil(cats.length / 10); 
            if (i % step !== 0 && i !== cats.length - 1) return; 
            
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
            text.classList.add("axis-text");
            this.axisGroup.appendChild(text);
        });

        // 4. COURBE 1 (aire + ligne)
        if (points1.length > 1) {
            let d1 = `M ${points1[0][0]},${points1[0][1]}`;
            for (let i = 1; i < points1.length; i++) {
                d1 += ` L ${points1[i][0]},${points1[i][1]}`;
            }
            
            this.pathLine.setAttribute("d", d1);

            const firstX = points1[0][0];
            const lastX = points1[points1.length-1][0];
            const areaData1 = `${d1} L ${lastX},${drawH} L ${firstX},${drawH} Z`;
            this.pathArea.setAttribute("d", areaData1);
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
            let d2 = `M ${points2[0][0]},${points2[0][1]}`;
            for (let i = 1; i < points2.length; i++) {
                d2 += ` L ${points2[i][0]},${points2[i][1]}`;
            }
            const areaData2 = `${d2} L ${points2[points2.length-1][0]},${drawH} L ${points2[0][0]},${drawH} Z`;

            let pathArea2 = this.mainGroup.querySelector(".pathArea2") as SVGPathElement;
            if (!pathArea2) {
                pathArea2 = document.createElementNS(ns, "path");
                pathArea2.classList.add("pathArea2");
                this.mainGroup.insertBefore(pathArea2, this.pathLine);
            }
            pathArea2.setAttribute("d", areaData2);
            pathArea2.setAttribute("fill", "url(#axonautGradient2)");
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
            pathLine2.setAttribute("stroke-width", "3");
            pathLine2.setAttribute("stroke-linecap", "round");
            pathLine2.setAttribute("stroke-linejoin", "round");
        }
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