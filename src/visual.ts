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

    // Marges
    private margin = { top: 20, right: 40, bottom: 40, left: 60 };
    
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

    // Ajoutez cette fonction dans votre classe Visual
    private getNiceStep(maxValue: number): number {
        // Liste des pas "humains"
        const steps = [1, 2, 2.5, 5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000];
        const minTicks = 4;
        const maxTicks = 8;
        for (let i = 0; i < steps.length; i++) {
            const ticks = Math.ceil(maxValue / steps[i]);
            if (ticks >= minTicks && ticks <= maxTicks) {
                return steps[i];
            }
        }
        // Si rien trouvé, retourne le plus grand pas
        return steps[steps.length - 1];
    }

    public update(options: VisualUpdateOptions) {
        // A. Récupération des données
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical) return;
        if (!dataView.categorical.categories || !dataView.categorical.values) return;

        // Récupération des settings APRÈS avoir vérifié que dataView existe
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel, options.dataViews[0]);
        
        // Redimensionnement du SVG
        this.svg.setAttribute("width", options.viewport.width.toString());
        this.svg.setAttribute("height", options.viewport.height.toString());

        const cats = dataView.categorical.categories[0].values;
        const vals = dataView.categorical.values[0].values;

        // B. Appliquer les paramètres de couleur et dégradé
        const lineColor = this.formattingSettings.lineSettingsCard.lineColor.value.value;
        const gradientColor = this.formattingSettings.gradientSettingsCard.gradientColor.value.value;
        const gradientIntensity = this.formattingSettings.gradientSettingsCard.gradientIntensity.value;
        const gradientDirection = this.formattingSettings.gradientSettingsCard.gradientDirection.value.value.toString();
        
        // Appliquer la couleur de ligne
        this.pathLine.setAttribute("stroke", lineColor);
        
        // Appliquer la direction du dégradé
        this.applyGradientDirection(gradientDirection);
        
        // Appliquer la couleur et l'intensité du dégradé
        this.gradientStopTop.setAttribute("stop-color", gradientColor);
        this.gradientStopTop.setAttribute("stop-opacity", Math.max(0, Math.min(1, gradientIntensity)).toString());
        this.gradientStopBottom.setAttribute("stop-color", gradientColor);
        this.gradientStopBottom.setAttribute("stop-opacity", "0.0");

        // C. Calcul des dimensions de la zone de dessin
        const width = options.viewport.width;
        const height = options.viewport.height;
        const drawW = width - this.margin.left - this.margin.right;
        const drawH = height - this.margin.top - this.margin.bottom;

        // D. CALCUL DE L'ÉCHELLE Y (step intelligent)
        let maxDataVal = 0;
        vals.forEach(v => { if(Number(v) > maxDataVal) maxDataVal = Number(v); });

        const stepSize = this.getNiceStep(maxDataVal);
        let niceMax = Math.ceil(maxDataVal / stepSize) * stepSize;
        // Si le nombre de ticks est trop grand, réduit niceMax
        if ((niceMax / stepSize) > 8) {
            niceMax = stepSize * 8;
        }
        if (niceMax === 0) niceMax = stepSize; 

        // E. Calcul des points (X, Y) en pixels
        const points: [number, number][] = cats.map((cat, i) => {
            const x = (i / (cats.length - 1)) * drawW;
            const y = drawH - (Number(vals[i]) / niceMax * drawH);
            return [x, y];
        });

        // F. DESSIN
        this.mainGroup.setAttribute("transform", `translate(${this.margin.left}, ${this.margin.top})`);
        this.axisGroup.innerHTML = "";

        const ns = "http://www.w3.org/2000/svg";

        // 1. DESSINER LA GRILLE Y
        for(let val = 0; val <= niceMax; val += stepSize) {
            const yPos = drawH - (val / niceMax * drawH);

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
            this.axisGroup.appendChild(text);
        }

        // 2. DESSINER L'AXE X
        points.forEach((p, i) => {
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

        // 3. TRACÉ DES LIGNES ET AIRES
        if (points.length > 1) {
            let d = `M ${points[0][0]},${points[0][1]}`;
            for (let i = 1; i < points.length; i++) {
                d += ` L ${points[i][0]},${points[i][1]}`;
            }
            
            this.pathLine.setAttribute("d", d);

            const firstX = points[0][0];
            const lastX = points[points.length-1][0];
            const areaData = `${d} L ${lastX},${drawH} L ${firstX},${drawH} Z`;
            this.pathArea.setAttribute("d", areaData);
        }
    }

    public getFormattingModel(): powerbi.visuals.FormattingModel {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }

    private applyGradientDirection(direction: string): void {
        switch(direction) {
            case "vertical":
                this.gradient.setAttribute("x1", "0");
                this.gradient.setAttribute("y1", "0");
                this.gradient.setAttribute("x2", "0");
                this.gradient.setAttribute("y2", "1");
                break;
            case "vertical-reverse":
                this.gradient.setAttribute("x1", "0");
                this.gradient.setAttribute("y1", "1");
                this.gradient.setAttribute("x2", "0");
                this.gradient.setAttribute("y2", "0");
                break;
            case "horizontal":
                this.gradient.setAttribute("x1", "0");
                this.gradient.setAttribute("y1", "0");
                this.gradient.setAttribute("x2", "1");
                this.gradient.setAttribute("y2", "0");
                break;
            case "horizontal-reverse":
                this.gradient.setAttribute("x1", "1");
                this.gradient.setAttribute("y1", "0");
                this.gradient.setAttribute("x2", "0");
                this.gradient.setAttribute("y2", "0");
                break;
            case "diagonal":
                this.gradient.setAttribute("x1", "0");
                this.gradient.setAttribute("y1", "0");
                this.gradient.setAttribute("x2", "1");
                this.gradient.setAttribute("y2", "1");
                break;
            case "diagonal-reverse":
                this.gradient.setAttribute("x1", "1");
                this.gradient.setAttribute("y1", "0");
                this.gradient.setAttribute("x2", "0");
                this.gradient.setAttribute("y2", "1");
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