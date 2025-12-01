"use strict";

import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

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

    // Marges (Right 40 pour ne pas couper la fin, Left 60 pour les grands chiffres)
    private margin = { top: 20, right: 40, bottom: 40, left: 60 };

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;

        // 1. Création du SVG
        const ns = "http://www.w3.org/2000/svg";
        this.svg = document.createElementNS(ns, "svg");
        this.svg.classList.add("chart-container");
        this.target.appendChild(this.svg);

        // 2. Définition du Dégradé (Style Axonaut)
        const defs = document.createElementNS(ns, "defs");
        const gradient = document.createElementNS(ns, "linearGradient");
        gradient.setAttribute("id", "axonautGradient");
        gradient.setAttribute("x1", "0");
        gradient.setAttribute("y1", "0");
        gradient.setAttribute("x2", "0");
        gradient.setAttribute("y2", "1"); // Vertical

        // Haut : Bleu semi-transparent
        this.gradientStopTop = document.createElementNS(ns, "stop");
        this.gradientStopTop.setAttribute("offset", "0%");
        this.gradientStopTop.setAttribute("stop-opacity", "0.3");

        // Bas : Transparent
        this.gradientStopBottom = document.createElementNS(ns, "stop");
        this.gradientStopBottom.setAttribute("offset", "100%");
        this.gradientStopBottom.setAttribute("stop-opacity", "0.0");

        gradient.appendChild(this.gradientStopTop);
        gradient.appendChild(this.gradientStopBottom);
        defs.appendChild(gradient);
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
        this.pathLine.setAttribute("stroke-width", "3");
        this.pathLine.setAttribute("stroke-linecap", "round");
        this.pathLine.setAttribute("stroke-linejoin", "round");
        this.mainGroup.appendChild(this.pathLine);

        this.svg.appendChild(this.mainGroup);
    }

    public update(options: VisualUpdateOptions) {
        // Redimensionnement du SVG
        this.svg.setAttribute("width", options.viewport.width.toString());
        this.svg.setAttribute("height", options.viewport.height.toString());

        // A. Récupération des données
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical) return;
        if (!dataView.categorical.categories || !dataView.categorical.values) return;

        const cats = dataView.categorical.categories[0].values;
        const vals = dataView.categorical.values[0].values;

        // B. Gestion de la couleur (Bleu par défaut)
        let color = "#3B60C4"; 
        if(dataView.metadata.objects && dataView.metadata.objects.lineSettings) {
             // Si vous avez gardé le menu de couleur, décommentez ceci :
             // color = (dataView.metadata.objects.lineSettings.lineColor as any).solid.color;
        }
        
        this.pathLine.setAttribute("stroke", color);
        this.gradientStopTop.setAttribute("stop-color", color);
        this.gradientStopBottom.setAttribute("stop-color", color);

        // C. Calcul des dimensions de la zone de dessin
        const width = options.viewport.width;
        const height = options.viewport.height;
        const drawW = width - this.margin.left - this.margin.right;
        const drawH = height - this.margin.top - this.margin.bottom;

        // D. CALCUL DE L'ÉCHELLE Y (PALIERS DE 5000)
        let maxDataVal = 0;
        vals.forEach(v => { if(Number(v) > maxDataVal) maxDataVal = Number(v); });
        
        const stepSize = 5000;
        // On arrondit au multiple de 5000 supérieur (ex: 23000 -> 25000)
        let niceMax = Math.ceil(maxDataVal / stepSize) * stepSize;
        if (niceMax === 0) niceMax = stepSize; 

        // E. Calcul des points (X, Y) en pixels
        const points: [number, number][] = cats.map((cat, i) => {
            const x = (i / (cats.length - 1)) * drawW;
            // Attention : on divise par niceMax pour que la courbe s'aligne sur la grille
            const y = drawH - (Number(vals[i]) / niceMax * drawH);
            return [x, y];
        });

        // F. DESSIN
        this.mainGroup.setAttribute("transform", `translate(${this.margin.left}, ${this.margin.top})`);
        this.axisGroup.innerHTML = ""; // On vide avant de redessiner

        const ns = "http://www.w3.org/2000/svg";

        // 1. DESSINER LA GRILLE Y (Boucle de 5000 en 5000)
        for(let val = 0; val <= niceMax; val += stepSize) {
            
            // Position Y en pixels
            const yPos = drawH - (val / niceMax * drawH);

            // Ligne horizontale pointillée
            const line = document.createElementNS(ns, "line");
            line.setAttribute("x1", "0");
            line.setAttribute("x2", drawW.toString());
            line.setAttribute("y1", yPos.toString());
            line.setAttribute("y2", yPos.toString());
            line.classList.add("grid-line"); // Défini dans visual.less
            this.axisGroup.appendChild(line);

            // Texte (ex: 25 000)
            const text = document.createElementNS(ns, "text");
            text.setAttribute("x", "-10"); // Un peu à gauche de l'axe
            text.setAttribute("y", yPos.toString());
            text.setAttribute("text-anchor", "end"); // Aligné à droite
            text.setAttribute("alignment-baseline", "middle"); // Centré verticalement
            
            text.textContent = this.formatNumber(val); // Fonction perso sans "k"
            
            text.classList.add("axis-text");
            this.axisGroup.appendChild(text);
        }

        // 2. DESSINER L'AXE X (DATES)
        points.forEach((p, i) => {
            // Logique pour ne pas surcharger l'axe si beaucoup de points
            const step = Math.ceil(cats.length / 10); 
            if (i % step !== 0 && i !== cats.length - 1) return; 
            
            const text = document.createElementNS(ns, "text");
            text.setAttribute("x", p[0].toString());
            text.setAttribute("y", (drawH + 20).toString()); // Sous le graphique
            
            // Alignement intelligent pour ne pas couper les bords
            if (i === cats.length - 1) {
                text.setAttribute("text-anchor", "end"); // Le dernier aligné à droite
            } else if (i === 0) {
                text.setAttribute("text-anchor", "start"); // Le premier aligné à gauche
            } else {
                text.setAttribute("text-anchor", "middle");
            }
            
            text.textContent = this.formatDate(cats[i].toString()); // Fonction perso date fr
            
            text.classList.add("axis-text");
            this.axisGroup.appendChild(text);
        });

        // 3. TRACÉ DES LIGNES ET AIRES (Traits droits)
        if (points.length > 1) {
            // Construction du chemin SVG (M = Move, L = Line)
            let d = `M ${points[0][0]},${points[0][1]}`;
            for (let i = 1; i < points.length; i++) {
                d += ` L ${points[i][0]},${points[i][1]}`;
            }
            
            // Appliquer à la ligne
            this.pathLine.setAttribute("d", d);

            // Appliquer à l'aire (on ferme le polygone en bas)
            const firstX = points[0][0];
            const lastX = points[points.length-1][0];
            const areaData = `${d} L ${lastX},${drawH} L ${firstX},${drawH} Z`;
            this.pathArea.setAttribute("d", areaData);
        }
    }

    // --- FONCTIONS UTILITAIRES ---

    private formatNumber(num: number): string {
        // Formate en entier avec espaces (ex: "25 000")
        return Math.round(num).toLocaleString('fr-FR');
    }

    private formatDate(value: string): string {
        // Tente de convertir en date "Janv. 2023"
        const date = new Date(value);
        if (isNaN(date.getTime())) return value;
        try {
            return new Intl.DateTimeFormat('fr-FR', { month: 'short', year: 'numeric' }).format(date);
        } catch (e) {
            return value;
        }
    }
}