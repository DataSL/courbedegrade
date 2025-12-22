"use strict";

import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import ISelectionId = powerbi.visuals.ISelectionId;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import IVisualLicenseManager = powerbi.extensibility.IVisualLicenseManager;
import LicenseInfoResult = powerbi.extensibility.visual.LicenseInfoResult;
import ServicePlan = powerbi.extensibility.visual.ServicePlan;
import ServicePlanState = powerbi.ServicePlanState;
import LicenseNotificationType = powerbi.LicenseNotificationType;

import { VisualFormattingSettingsModel } from "./settings";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";

import "../style/visual.less";

export class Visual implements IVisual {
    private target: HTMLElement;
    private svg: SVGSVGElement;
    private mainGroup: SVGGElement;
    private axisGroup: SVGGElement;
    private linesGroup: SVGGElement;
    private tooltip: HTMLDivElement;
    
    // Cached canvas for text measurement (used for label truncation)
    private static _labelMeasureCanvas: HTMLCanvasElement | null = null;
    
    // Marges
    private margin = { top: 20, right: 40, bottom: 40, left: 60 };
    
    // Settings
    private formattingSettings: VisualFormattingSettingsModel;
    private formattingSettingsService: FormattingSettingsService;
    
    // Drill down support
    private host: powerbi.extensibility.visual.IVisualHost;
    private selectionManager: ISelectionManager;
    private dataView: powerbi.DataView;
    
    // Licensing avec l'API officielle Microsoft Power BI
    private licenseManager: IVisualLicenseManager;
    private currentUserValidPlans: ServicePlan[] | undefined;
    private hasServicePlans: boolean | undefined;
    private isLicenseUnsupportedEnv: boolean | undefined;
    private isNotificationDisplayed: boolean = false;
    private defaultNotificationType: LicenseNotificationType = LicenseNotificationType.General;

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;
        this.host = options.host;
        this.selectionManager = this.host.createSelectionManager();
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
        this.linesGroup = document.createElementNS(ns, "g");
        
        this.mainGroup.appendChild(this.axisGroup);
        this.mainGroup.appendChild(this.linesGroup);
        this.svg.appendChild(this.mainGroup);

        // Permettre le context menu (clic droit) sur tout le visuel
        this.svg.addEventListener('contextmenu', (event) => {
            const mouseEvent = event as MouseEvent;
            // Afficher le menu contextuel Power BI avec les options standard
            this.selectionManager.showContextMenu({}, {
                x: mouseEvent.clientX,
                y: mouseEvent.clientY
            });
            event.preventDefault();
        });

        // Désélectionner lors d'un clic sur le fond
        this.svg.addEventListener('click', () => {
            this.selectionManager.clear();
        });
        
        // Initialiser le gestionnaire de licences (API officielle Microsoft Power BI)
        this.licenseManager = this.host.licenseManager;
        
        // Récupérer les plans de service de licence
        this.retrieveLicenseInfo();
    }
    
    /**
     * Récupère les informations de licence de l'utilisateur via l'API officielle Power BI
     * Utilise getAvailableServicePlans() pour obtenir les plans de service
     */
    private retrieveLicenseInfo() {
        // 🔓 MODE DÉVELOPPEMENT : Désactiver complètement la vérification de licence
        // Décommentez la ligne suivante pour activer le système de licensing en production
        //this.checkLicenseInProduction();
        
        // En mode développement, toujours considérer que la licence est valide
        console.log("🔓 Mode développement : Vérification de licence désactivée");
        this.hasServicePlans = true;
        this.isLicenseUnsupportedEnv = false;
    }
    
    /**
     * Vérifie les licences en mode production (AppSource)
     * Cette méthode doit être appelée uniquement après publication sur AppSource
     */
    private checkLicenseInProduction() {
        // 🧪 MODE TEST : Décommentez les lignes suivantes pour simuler un environnement sans licence
        // this.isLicenseUnsupportedEnv = true;
        // this.notifyLicenseStatus();
        // return;
        
        // 🧪 MODE TEST : Décommentez les lignes suivantes pour simuler une licence manquante
        // this.hasServicePlans = false;
        // this.isLicenseUnsupportedEnv = false;
        // this.notifyLicenseStatus();
        // return;
        
        if (!this.licenseManager) {
            console.log("ℹ️ Gestionnaire de licences non disponible - mode Desktop/Dev");
            // En mode développement, considérer que la licence est valide
            this.hasServicePlans = true;
            this.isLicenseUnsupportedEnv = false;
            return;
        }
        
        // Récupérer les plans de service disponibles pour cet utilisateur
        this.licenseManager.getAvailableServicePlans()
            .then((result: LicenseInfoResult) => {
                const { plans, isLicenseUnsupportedEnv, isLicenseInfoAvailable } = result;
                
                console.log("🔑 Informations de licence récupérées:", {
                    plans,
                    isLicenseUnsupportedEnv,
                    isLicenseInfoAvailable
                });
                
                if (isLicenseInfoAvailable && !isLicenseUnsupportedEnv) {
                    // Filtrer uniquement les plans actifs
                    this.currentUserValidPlans = plans?.filter(({ state, spIdentifier }) => {
                        // Vérifier que c'est bien un de VOS plans
                        const validIdentifiers = [
                            "customtableplan"   // ← Remplacer par votre vrai ID
                        ];
                        
                        return validIdentifiers.includes(spIdentifier) && 
                               (state === ServicePlanState.Active || state === ServicePlanState.Warning);
                    });
                    this.hasServicePlans = !!this.currentUserValidPlans?.length;
                    
                    if (this.hasServicePlans) {
                        console.log(`✅ ${this.currentUserValidPlans.length} plan(s) de service valide(s) trouvé(s)`);
                    } else {
                        console.warn("⚠️ Aucun plan de service valide trouvé");
                    }
                }
                
                this.isLicenseUnsupportedEnv = isLicenseUnsupportedEnv;
                
                // Afficher les notifications appropriées
                this.notifyLicenseStatus();
            })
            .catch((error) => {
                console.error("❌ Erreur lors de la récupération des licences:", error);
                // En cas d'erreur, ne pas bloquer le visuel en mode dev
                this.currentUserValidPlans = undefined;
                this.hasServicePlans = undefined;
            });
    }
    
    /**
     * Affiche les notifications de licence appropriées selon le statut
     */
    private notifyLicenseStatus() {
        // Effacer toute notification précédente
        if (this.licenseManager) {
            this.licenseManager.clearLicenseNotification()
                .catch((err) => console.log("Erreur lors du nettoyage des notifications:", err));
        }
        
        // Si l'environnement ne supporte pas les licences
        if (this.isLicenseUnsupportedEnv) {
            this.showUnsupportedEnvNotification();
            return;
        }
        
        // Si aucun plan de service valide n'est trouvé
        if (this.hasServicePlans === false) {
            this.showLicenseRequiredNotification();
            return;
        }
        
        // Si on a des plans valides, ne rien afficher
        if (this.hasServicePlans === true) {
            this.isNotificationDisplayed = false;
            console.log("✅ Licence valide - Visuel fonctionnel");
        }
    }
    
    /**
     * Affiche la notification pour environnement non supporté
     */
    private showUnsupportedEnvNotification() {
        if (!this.licenseManager || this.isNotificationDisplayed) return;
        
        this.licenseManager.notifyLicenseRequired(LicenseNotificationType.UnsupportedEnv)
            .then((displayed) => {
                this.isNotificationDisplayed = displayed;
                if (displayed) {
                    console.log("📢 Notification affichée : Environnement non supporté");
                }
            })
            .catch((err) => console.error("Erreur lors de l'affichage de la notification:", err));
    }
    
    /**
     * Affiche la notification pour licence requise
     * Peut utiliser General (icône) ou VisualIsBlocked (overlay complet)
     */
    private showLicenseRequiredNotification() {
        if (!this.licenseManager || this.isNotificationDisplayed) return;
        
        // Utiliser VisualIsBlocked pour bloquer complètement le visuel
        // Ou utiliser General pour afficher uniquement une icône
        const notificationType = LicenseNotificationType.VisualIsBlocked;
        
        this.licenseManager.notifyLicenseRequired(notificationType)
            .then((displayed) => {
                this.isNotificationDisplayed = displayed;
                if (displayed) {
                    console.log("📢 Notification affichée : Licence requise");
                }
            })
            .catch((err) => console.error("Erreur lors de l'affichage de la notification:", err));
    }
    
    /**
     * Affiche une notification pour une fonctionnalité bloquée
     * @param featureName Nom de la fonctionnalité bloquée
     */
    private notifyFeatureBlocked(featureName: string) {
        if (!this.licenseManager) return;
        
        // Créer un message d'info-bulle personnalisé
        const tooltip = `La fonctionnalité "${featureName}" nécessite une licence valide.`;
        
        this.licenseManager.notifyFeatureBlocked(tooltip)
            .then((displayed) => {
                if (displayed) {
                    console.log(`📢 Fonctionnalité bloquée : ${featureName}`);
                }
            })
            .catch((err) => console.error("Erreur lors de l'affichage de la notification:", err));
    }

    private showTooltip(x: number, y: number, content: string) {
        // Nettoyer le contenu précédent
        while (this.tooltip.firstChild) {
            this.tooltip.removeChild(this.tooltip.firstChild);
        }

        // Découper le contenu en lignes (suppose le format "<div>...</div><div>...</div>")
        // On extrait le texte entre les balises <div>...</div>
        const divRegex = /<div[^>]*>(.*?)<\/div>/g;
        let match;
        while ((match = divRegex.exec(content)) !== null) {
            const div = document.createElement("div");
            // Si le contenu contient <strong>...</strong>, on le gère aussi
            const strongRegex = /<strong[^>]*>(.*?)<\/strong>/;
            const strongMatch = strongRegex.exec(match[1]);
            if (strongMatch) {
                const strong = document.createElement("strong");
                strong.textContent = strongMatch[1];
                div.appendChild(strong);
                // Ajoute le reste du texte après </strong>
                const afterStrong = match[1].replace(strongRegex, "");
                if (afterStrong.trim()) {
                    div.appendChild(document.createTextNode(afterStrong));
                }
            } else {
                div.textContent = match[1];
            }
            this.tooltip.appendChild(div);
        }

        this.tooltip.style.display = "block";
        this.tooltip.style.left = (x + 10) + "px";
        this.tooltip.style.top = (y + 10) + "px";
    }

    private hideTooltip() {
        this.tooltip.style.display = "none";
    }

    private getNiceStep(maxValue: number): number {
        if (maxValue === 0) return 1;
        
        // Déterminer l'ordre de grandeur
        const magnitude = Math.floor(Math.log10(maxValue));
        const powerOf10 = Math.pow(10, magnitude);
        
        // Gamme de multiplicateurs pour avoir des divisions "propres"
        const multipliers = [1, 2, 2.5, 5, 10];
        
        // Nombre de divisions souhaitées
        const minTicks = 4;
        const maxTicks = 8;
        
        // Tester chaque multiplicateur
        for (let mult of multipliers) {
            const step = mult * powerOf10;
            const ticks = Math.ceil(maxValue / step);
            
            if (ticks >= minTicks && ticks <= maxTicks) {
                return step;
            }
        }
        
        // Si aucun ne convient, retourner powerOf10
        return powerOf10;
    }

    public update(options: VisualUpdateOptions) {
        const ns = "http://www.w3.org/2000/svg";
        
        // Vérifier le statut de la licence
        // Si aucun plan de service valide, le système de notification Power BI gère l'affichage
        if (this.hasServicePlans === false || this.isLicenseUnsupportedEnv === true) {
            // Nettoyer le visuel
            while (this.axisGroup.firstChild) this.axisGroup.removeChild(this.axisGroup.firstChild);
            while (this.linesGroup.firstChild) this.linesGroup.removeChild(this.linesGroup.firstChild);
            
            this.svg.setAttribute("width", options.viewport.width.toString());
            this.svg.setAttribute("height", options.viewport.height.toString());
            
            // Les notifications sont gérées par le système Power BI via notifyLicenseRequired()
            // Pas besoin d'afficher de message personnalisé ici
            return;
        }
        
        // A. Récupération des données
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical) return;
        if (!dataView.categorical.categories || !dataView.categorical.values) return;

        this.dataView = dataView;
        const categoryColumns = dataView.categorical.categories;
        const category = categoryColumns[0];

        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel, options.dataViews[0]);
        
        this.svg.setAttribute("width", options.viewport.width.toString());
        this.svg.setAttribute("height", options.viewport.height.toString());

        const cats = categoryColumns[0].values;
        const allSeries = dataView.categorical.values;

        // Paramètres généraux
        const showXAxis = this.formattingSettings.xAxisSettings.show.value;
        const xAxisColor = this.formattingSettings.xAxisSettings.axisColor.value.value;
        const xAxisFontSize = this.formattingSettings.xAxisSettings.fontSize.value;
        const xAxisFontFamily = this.formattingSettings.xAxisSettings.fontFamily.value.value.toString();
        const sortOrder = this.formattingSettings.xAxisSettings.sortOrder.value.value.toString();
        
        // Appliquer le tri sur les données
        let sortedIndices = Array.from({ length: cats.length }, (_, i) => i);
        
        if (sortOrder === "ascending") {
            // Tri croissant par catégorie
            sortedIndices.sort((a, b) => {
                const valA = cats[a];
                const valB = cats[b];
                if (valA < valB) return -1;
                if (valA > valB) return 1;
                return 0;
            });
        } else if (sortOrder === "descending") {
            // Tri décroissant par catégorie
            sortedIndices.sort((a, b) => {
                const valA = cats[a];
                const valB = cats[b];
                if (valA > valB) return -1;
                if (valA < valB) return 1;
                return 0;
            });
        } else if (sortOrder === "byValue") {
            // Tri par la valeur Y la plus haute (max de toutes les séries pour chaque catégorie)
            sortedIndices.sort((a, b) => {
                let maxA = Number.NEGATIVE_INFINITY;
                let maxB = Number.NEGATIVE_INFINITY;
                
                // Trouver la valeur max pour la catégorie a
                allSeries.forEach(series => {
                    const val = Number(series.values[a]);
                    if (!isNaN(val) && val > maxA) maxA = val;
                });
                
                // Trouver la valeur max pour la catégorie b
                allSeries.forEach(series => {
                    const val = Number(series.values[b]);
                    if (!isNaN(val) && val > maxB) maxB = val;
                });
                
                // Trier par valeur décroissante (plus haute en premier)
                return maxB - maxA;
            });
        }
        
        // Réorganiser les catégories et les valeurs selon l'ordre de tri
        const sortedCats = sortedIndices.map(i => cats[i]);
        const sortedAllSeries = allSeries.map(series => ({
            ...series,
            values: sortedIndices.map(i => series.values[i])
        }));
        
        // Remplacer les données par les données triées
        const originalCats = cats;
        const originalAllSeries = allSeries;
        
        // Utiliser les données triées pour le reste du code
        const catsToUse = sortedCats;
        const allSeriesToUse = sortedAllSeries;
        
        const showYAxis = this.formattingSettings.yAxisSettings.show.value;
        const yAxisColor = this.formattingSettings.yAxisSettings.axisColor.value.value;
        const yAxisFontSize = this.formattingSettings.yAxisSettings.fontSize.value;
        const yAxisFontFamily = this.formattingSettings.yAxisSettings.fontFamily.value.value.toString();
        const yAxisDisplayUnits = this.formattingSettings.yAxisSettings.displayUnits.value.value.toString();
        const yAxisPrecision = this.formattingSettings.yAxisSettings.precision.value;

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
        
        // Réinitialiser les marges à chaque update pour éviter l'accumulation
        this.margin = { top: 20, right: 40, bottom: 40, left: 60 };
        
        let legendHeight = 0;
        
        if (showLegend && (legendPosition === "Top" || legendPosition === "TopCenter")) {
            legendHeight = 30;
            this.margin.top = 20 + legendHeight;
        } else if (showLegend && (legendPosition === "Bottom" || legendPosition === "BottomCenter")) {
            legendHeight = 30;
            this.margin.bottom = 40 + legendHeight;
        }

        // Ajustement pour les labels rotés à 45° (toujours appliqué maintenant)
        this.margin.bottom += 30;

        // Ajustement dynamique de la marge basse si on a 3 niveaux ou plus (pour afficher Année/Mois/Jour)
        if (categoryColumns.length > 2) {
            this.margin.bottom += 25;
        }

        const drawW = width - this.margin.left - this.margin.right;
        const drawH = height - this.margin.top - this.margin.bottom;
        const getYPos = (val: number) => drawH - ((val - niceMin) / (niceMax - niceMin) * drawH);

        // C. CALCUL ÉCHELLE Y GLOBALE (Basé sur le MIN et MAX de TOUTES les séries)
        let globalMax = Number.NEGATIVE_INFINITY;
        let globalMin = Number.POSITIVE_INFINITY;
        allSeriesToUse.forEach(series => {
            series.values.forEach(v => {
                const val = Number(v);
                if (!isNaN(val)) {
                    if (val > globalMax) globalMax = val;
                    if (val < globalMin) globalMin = val;
                }
            });
        });

        // Si tout est NaN, fallback à 0
        if (!isFinite(globalMax)) globalMax = 0;
        if (!isFinite(globalMin)) globalMin = 0;

        // Calcul du step
        const absMax = Math.max(Math.abs(globalMax), Math.abs(globalMin));
        const stepSize = this.getNiceStep(absMax);

        // Bornes "propres"
        let niceMin = Math.floor(globalMin / stepSize) * stepSize;
        let niceMax = Math.ceil(globalMax / stepSize) * stepSize;
        if (niceMin === niceMax) {
            // Cas plat
            niceMin = 0;
        }
        if ((niceMax - niceMin) / stepSize > 10) {
            niceMax = niceMin + stepSize * 10;
        }

        // D. DESSIN
        this.mainGroup.setAttribute("transform", `translate(${this.margin.left}, ${this.margin.top})`);
        
        // Nettoyage
        while (this.axisGroup.firstChild) this.axisGroup.removeChild(this.axisGroup.firstChild);
        while (this.linesGroup.firstChild) this.linesGroup.removeChild(this.linesGroup.firstChild);
        this.svg.querySelectorAll(".custom-marker").forEach(m => m.remove());
        this.svg.querySelectorAll(".custom-datalabel").forEach(l => l.remove());
        this.svg.querySelectorAll(".custom-hover").forEach(h => h.remove());
        this.svg.querySelectorAll(".legend").forEach(l => l.remove());

        // 1. GRILLE ET AXE Y
        if (showYAxis) {
            for(let val = niceMin; val <= niceMax; val += stepSize) {
                const yPos = drawH - ((val - niceMin) / (niceMax - niceMin) * drawH);

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
                text.textContent = this.formatYAxisValue(val, yAxisDisplayUnits, yAxisPrecision);
                text.setAttribute("fill", yAxisColor);
                text.setAttribute("font-size", yAxisFontSize.toString());
                text.setAttribute("font-family", yAxisFontFamily);
                this.axisGroup.appendChild(text);
            }
        }

        // 2. AXE X
        if (showXAxis) {
            const step = Math.ceil(catsToUse.length / 10);
            const createdTexts: SVGTextElement[] = [];
            const labelIndices: number[] = [];

            catsToUse.forEach((cat, i) => {
                if (i % step !== 0 && i !== catsToUse.length - 1) return; 
                
                const xPos = (i / (catsToUse.length - 1)) * drawW;

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

                const text = document.createElementNS(ns, "text") as SVGTextElement;
                text.setAttribute("x", xPos.toString());
                text.setAttribute("y", (drawH + 20).toString());
                text.setAttribute('data-x', xPos.toString());
                
                if (i === catsToUse.length - 1) text.setAttribute("text-anchor", "end");
                else if (i === 0) text.setAttribute("text-anchor", "start");
                else text.setAttribute("text-anchor", "middle");
                
                text.setAttribute("fill", xAxisColor);
                text.setAttribute("font-size", xAxisFontSize.toString());
                text.setAttribute("font-family", xAxisFontFamily);
                text.setAttribute("cursor", "pointer");

                // Ajouter le menu contextuel sur les labels de l'axe X
                // Note: utiliser l'index original pour la sélection
                const originalIndex = sortedIndices[i];
                text.addEventListener('contextmenu', (event: MouseEvent) => {
                    const selectionId = this.host.createSelectionIdBuilder()
                        .withCategory(category, originalIndex)
                        .createSelectionId();
                    this.selectionManager.showContextMenu(selectionId, {
                        x: event.clientX,
                        y: event.clientY
                    });
                    event.preventDefault();
                    event.stopPropagation();
                });

                // Permettre la sélection au clic sur les labels
                text.addEventListener('click', (event: MouseEvent) => {
                    const selectionId = this.host.createSelectionIdBuilder()
                        .withCategory(category, originalIndex)
                        .createSelectionId();
                    this.selectionManager.select(selectionId, event.ctrlKey || event.metaKey);
                    event.stopPropagation();
                });

                if (categoryColumns.length > 1) {
                    // Affichage hiérarchique
                    const firstLevel = categoryColumns[0].values[i].toString();
                    const lastLevel = categoryColumns[categoryColumns.length - 1].values[i].toString();
                    
                    const tspan1 = document.createElementNS(ns, "tspan");
                    tspan1.textContent = firstLevel;
                    tspan1.setAttribute("x", xPos.toString());
                    tspan1.setAttribute("dy", "0em");
                    text.appendChild(tspan1);

                    if (categoryColumns.length > 2) {
                        // Cas avec 3 niveaux ou plus (ex: Année, Mois, Jour) -> On affiche Année, Mois, Jour
                        // On suppose que l'avant-dernier niveau est le mois
                        const middleLevel = categoryColumns[categoryColumns.length - 2].values[i].toString();
                        
                        const tspan2 = document.createElementNS(ns, "tspan");
                        tspan2.textContent = middleLevel;
                        tspan2.setAttribute("x", xPos.toString());
                        tspan2.setAttribute("dy", "1.2em");
                        text.appendChild(tspan2);

                        const tspan3 = document.createElementNS(ns, "tspan");
                        tspan3.textContent = lastLevel;
                        tspan3.setAttribute("x", xPos.toString());
                        tspan3.setAttribute("dy", "1.2em");
                        text.appendChild(tspan3);
                    } else {
                        // Cas standard 2 niveaux (ex: Année, Mois)
                        const tspan2 = document.createElementNS(ns, "tspan");
                        tspan2.textContent = lastLevel;
                        tspan2.setAttribute("x", xPos.toString());
                        tspan2.setAttribute("dy", "1.2em");
                        text.appendChild(tspan2);
                    }
                } else {
                    const label = this.formatDate(catsToUse[i].toString());
                    text.textContent = label;
                    text.setAttribute('data-label', label);
                }
                
                this.axisGroup.appendChild(text);
                createdTexts.push(text);
                labelIndices.push(i);
            });

            // Intelligent truncation with 45° rotation
            try {
                const padding = 6; // px padding between labels
                const canvas = Visual._labelMeasureCanvas || (Visual._labelMeasureCanvas = document.createElement('canvas'));
                const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
                ctx.font = `${xAxisFontSize}px ${xAxisFontFamily}`;

                const xs = createdTexts.map(t => parseFloat(t.getAttribute('data-x') || t.getAttribute('x') || '0'));
                const angle = -45; // Rotation angle in degrees

                // Step 1: Truncate labels that are too wide and apply 45° rotation
                for (let i = 0; i < createdTexts.length; i++) {
                    const t = createdTexts[i];
                    // Skip multi-line hierarchical labels (they use tspans)
                    if (t.childNodes.length > 1) continue;

                    const raw = t.getAttribute('data-label') || t.textContent || '';
                    const x = xs[i];
                    const left = (i === 0) ? 0 : (xs[i - 1] + x) / 2;
                    const right = (i === createdTexts.length - 1) ? drawW : (x + xs[i + 1]) / 2;
                    
                    // With 45° rotation, labels can be much longer
                    // Calculate available space considering rotation: diagonal space is ~1.4x horizontal space
                    const horizontalSpace = right - left - padding * 2;
                    const avail = Math.max(30, horizontalSpace * 2.5); // More generous space for rotated labels

                    // Measure and truncate if necessary (keep beginning, add '...' at end)
                    let width = ctx.measureText(raw).width;
                    if (width > avail) {
                        let startLen = raw.length;
                        let candidate = raw;
                        const ellipsis = '...';
                        // Keep reducing from the end until it fits
                        while (startLen > 0) {
                            candidate = raw.slice(0, startLen) + ellipsis;
                            width = ctx.measureText(candidate).width;
                            if (width <= avail) break;
                            startLen--;
                        }
                        t.textContent = candidate;
                    }

                    // Apply 45° rotation to all labels
                    const origX = parseFloat(t.getAttribute('data-x') || '0');
                    const origY = parseFloat(t.getAttribute('y') || (drawH + 20).toString());
                    t.setAttribute('text-anchor', 'end');
                    t.setAttribute('transform', `translate(${origX}, ${origY}) rotate(${angle})`);
                    t.setAttribute('x', '0');
                    t.setAttribute('y', '0');
                }

                // Step 2: Check for overlaps using bounding boxes (after rotation)
                let hasOverlap = false;
                const boxes = createdTexts.map(t => t.getBBox());

                for (let k = 1; k < boxes.length; k++) {
                    const prev = boxes[k - 1];
                    const curr = boxes[k];
                    if (curr.x < prev.x + prev.width + padding) {
                        hasOverlap = true;
                        break;
                    }
                }

                // Step 3: If overlap detected, hide the last label (the one at the right edge)
                if (hasOverlap && createdTexts.length > 1) {
                    const last = createdTexts[createdTexts.length - 1];
                    if (last) last.style.display = 'none';
                }
            } catch (err) {
                // getBBox/canvas might fail in some non-rendering environments; ignore silently
                console.warn('X-axis label truncation/overlap detection skipped:', err);
            }
        }

        // 3. BOUCLE SUR LES SÉRIES (LIGNES)
        const legendItems: Array<{name: string, color: string}> = [];

        // Récupération des paramètres des étiquettes de données
        const showDataLabels = this.formattingSettings.dataLabels.show.value;
        const dataLabelsColor = this.formattingSettings.dataLabels.color.value.value;
        const dataLabelsFontSize = this.formattingSettings.dataLabels.fontSize.value;
        const dataLabelsFontFamily = this.formattingSettings.dataLabels.fontFamily.value.value.toString();
        const dataLabelsDisplayUnits = parseInt(this.formattingSettings.dataLabels.displayUnits.value.value.toString());
        const dataLabelsPrecision = this.formattingSettings.dataLabels.precision.value;

        allSeriesToUse.forEach((series, index) => {
            if (index >= 10) return;

            const seriesName = series.source.displayName;
            const vals = series.values;
            
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
            const points: [number, number][] = catsToUse.map((cat, i) => {
                const x = (i / (catsToUse.length - 1)) * drawW;
                const y = getYPos(Number(vals[i]));
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

            // Aire - Le dégradé s'arrête au bas de la zone de dessin, juste avant les labels de l'axe X
            const pathArea = document.createElementNS(ns, "path");
            const gradientBottom = drawH ; // S'arrête 5px avant le bas pour ne pas toucher les labels
            const areaD = `${d} L ${points[points.length-1][0]},${gradientBottom} L ${points[0][0]},${gradientBottom} Z`;
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

            // Étiquettes de données
            if (showDataLabels) {
                points.forEach((p, i) => {
                    const value = Number(vals[i]);
                    const labelText = this.formatDataLabel(value, dataLabelsDisplayUnits, dataLabelsPrecision);
                    
                    const label = document.createElementNS(ns, "text");
                    label.classList.add("custom-datalabel");
                    label.setAttribute("x", (this.margin.left + p[0]).toString());
                    label.setAttribute("y", (this.margin.top + p[1] - 10).toString());
                    label.setAttribute("text-anchor", "middle");
                    label.setAttribute("fill", dataLabelsColor);
                    label.setAttribute("font-size", dataLabelsFontSize.toString());
                    label.setAttribute("font-family", dataLabelsFontFamily);
                    label.setAttribute("font-weight", "500");
                    label.textContent = labelText;
                    
                    this.svg.appendChild(label);
                });
            }

            // Zones de survol (Tooltip) avec support du drill
            points.forEach((p, i) => {
                // Créer l'ID de sélection pour ce point - utiliser l'index original
                const originalIndex = sortedIndices[i];
                const selectionId = this.host.createSelectionIdBuilder()
                    .withCategory(category, originalIndex)
                    .createSelectionId();

                const hoverCircle = document.createElementNS(ns, "circle");
                hoverCircle.classList.add("custom-hover");
                hoverCircle.setAttribute("cx", (this.margin.left + p[0]).toString());
                hoverCircle.setAttribute("cy", (this.margin.top + p[1]).toString());
                hoverCircle.setAttribute("r", "8");
                hoverCircle.setAttribute("fill", "transparent");
                hoverCircle.setAttribute("cursor", "pointer");
                
                hoverCircle.addEventListener("mouseenter", (e: MouseEvent) => {
                    let tooltipTitle = "";
                    if (categoryColumns.length > 1) {
                        tooltipTitle = categoryColumns.map(c => c.values[originalIndex].toString()).join(" ");
                    } else {
                        tooltipTitle = this.formatDate(catsToUse[i].toString());
                    }

                    const tooltipContent = `<div><strong>${tooltipTitle}</strong></div><div>${seriesName}: ${this.formatNumber(Number(vals[i]))}</div>`;
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

                // Gestion du clic pour la sélection (nécessaire pour le drill)
                hoverCircle.addEventListener("click", (event: MouseEvent) => {
                    // Sélectionner ce point de données
                    this.selectionManager.select(selectionId, event.ctrlKey || event.metaKey);
                    event.stopPropagation();
                });

                // Context menu (clic droit) pour afficher les options de drill
                hoverCircle.addEventListener("contextmenu", (event: MouseEvent) => {
                    this.selectionManager.showContextMenu(selectionId, {
                        x: event.clientX,
                        y: event.clientY
                    });
                    event.preventDefault();
                    event.stopPropagation();
                });
                
                this.svg.appendChild(hoverCircle);
            });
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

                // Créer un groupe pour chaque élément de légende pour faciliter les interactions
                const legendItemGroup = document.createElementNS(ns, "g");
                legendItemGroup.setAttribute("cursor", "pointer");

                const rect = document.createElementNS(ns, "rect");
                rect.setAttribute("x", xOffset.toString());
                rect.setAttribute("y", yOffset.toString());
                rect.setAttribute("width", "15");
                rect.setAttribute("height", "3");
                rect.setAttribute("fill", item.color);
                legendItemGroup.appendChild(rect);

                const text = document.createElementNS(ns, "text");
                text.setAttribute("x", (xOffset + 20).toString());
                text.setAttribute("y", (yOffset + 2).toString());
                text.setAttribute("alignment-baseline", "middle");
                text.setAttribute("fill", legendFontColor);
                text.setAttribute("font-size", legendFontSize.toString());
                text.setAttribute("font-family", legendFontFamily);
                text.textContent = item.name;
                legendItemGroup.appendChild(text);

                // Ajouter un rectangle invisible pour agrandir la zone cliquable
                const hitArea = document.createElementNS(ns, "rect");
                hitArea.setAttribute("x", xOffset.toString());
                hitArea.setAttribute("y", (yOffset - 5).toString());
                hitArea.setAttribute("width", "90");
                hitArea.setAttribute("height", "15");
                hitArea.setAttribute("fill", "transparent");
                legendItemGroup.appendChild(hitArea);

                // Menu contextuel sur les éléments de légende
                legendItemGroup.addEventListener('contextmenu', (event: MouseEvent) => {
                    // Créer un SelectionId basé sur la série (measure)
                    const seriesData = allSeries.grouped()[0].values[i];
                    if (seriesData && seriesData.identity) {
                        const selectionId = this.host.createSelectionIdBuilder()
                            .withSeries(dataView.categorical.values, seriesData)
                            .createSelectionId();
                        this.selectionManager.showContextMenu(selectionId, {
                            x: event.clientX,
                            y: event.clientY
                        });
                    }
                    event.preventDefault();
                    event.stopPropagation();
                });

                // Clic pour filtrer/sélectionner la série
                legendItemGroup.addEventListener('click', (event: MouseEvent) => {
                    const seriesData = allSeries.grouped()[0].values[i];
                    if (seriesData && seriesData.identity) {
                        const selectionId = this.host.createSelectionIdBuilder()
                            .withSeries(dataView.categorical.values, seriesData)
                            .createSelectionId();
                        this.selectionManager.select(selectionId, event.ctrlKey || event.metaKey);
                    }
                    event.stopPropagation();
                });

                legendGroup.appendChild(legendItemGroup);
            });

            this.svg.appendChild(legendGroup);
        }
    }

    private formatDataLabel(value: number, displayUnits: number, precision: number): string {
        let formatted = value;
        let suffix = "";

        if (displayUnits === 0) {
            // Auto
            if (Math.abs(value) >= 1000000000) { 
                formatted = value / 1000000000; 
                suffix = " Mds"; 
            }
            else if (Math.abs(value) >= 1000000) { 
                formatted = value / 1000000; 
                suffix = " M"; 
            }
            else if (Math.abs(value) >= 1000) { 
                formatted = value / 1000; 
                suffix = " K"; 
            }
        } else if (displayUnits === 1000) {
            formatted = value / 1000;
            suffix = " K";
        } else if (displayUnits === 1000000) {
            formatted = value / 1000000;
            suffix = " M";
        } else if (displayUnits === 1000000000) {
            formatted = value / 1000000000;
            suffix = " Mds";
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
        // Compter le nombre de séries (champs Values)
        let nbSeries = 1;
        if (this.dataView && this.dataView.categorical && this.dataView.categorical.values) {
            nbSeries = this.dataView.categorical.values.length;
        }

        // Liste dynamique des cards à afficher
        const cards: any[] = [];

        // Ajouter seulement les groupes nécessaires
        for (let i = 1; i <= nbSeries; i++) {
            cards.push(this.formattingSettings[`lineSettings${i}`]);
            cards.push(this.formattingSettings[`gradientSettings${i}`]);
        }

        // Ajouter les autres groupes généraux
        cards.push(
            this.formattingSettings.xAxisSettings,
            this.formattingSettings.yAxisSettings,
            this.formattingSettings.gridSettings,
            this.formattingSettings.dataLabels,
            this.formattingSettings.legend
        );

        // Générer le modèle avec uniquement les cards utiles
        return this.formattingSettingsService.buildFormattingModel({ cards });
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
        // Déterminer le nombre de décimales nécessaires
        if (num === 0) return "0";
        
        const absNum = Math.abs(num);
        
        // Pour les grands nombres (>= 1000), pas de décimales
        if (absNum >= 1000) {
            return Math.round(num).toLocaleString('fr-FR');
        }
        
        // Pour les nombres entre 1 et 999, max 2 décimales si nécessaire
        if (absNum >= 1) {
            const rounded = Math.round(num * 100) / 100;
            return rounded.toLocaleString('fr-FR', { 
                minimumFractionDigits: 0, 
                maximumFractionDigits: 2 
            });
        }
        
        // Pour les petits nombres (< 1), afficher jusqu'à 4 décimales
        const magnitude = Math.floor(Math.log10(absNum));
        const decimals = Math.min(4, Math.abs(magnitude) + 1);
        
        return num.toLocaleString('fr-FR', { 
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    }

    private formatYAxisValue(value: number, displayUnits: string, precision: number): string {
        let formatted = value;
        let suffix = "";

        const units = parseInt(displayUnits);

        if (units === 0) {
            // Auto : détection automatique
            if (Math.abs(value) >= 1000000000) {
                formatted = value / 1000000000;
                suffix = " Mds";
            } else if (Math.abs(value) >= 1000000) {
                formatted = value / 1000000;
                suffix = " M";
            } else if (Math.abs(value) >= 1000) {
                formatted = value / 1000;
                suffix = " K";
            }
        } else if (units === 1000) {
            formatted = value / 1000;
            suffix = " K";
        } else if (units === 1000000) {
            formatted = value / 1000000;
            suffix = " M";
        } else if (units === 1000000000) {
            formatted = value / 1000000000;
            suffix = " Mds";
        }

        // Appliquer la précision
        if (precision === 0) {
            return Math.round(formatted).toLocaleString('fr-FR') + suffix;
        } else {
            return formatted.toLocaleString('fr-FR', {
                minimumFractionDigits: precision,
                maximumFractionDigits: precision
            }) + suffix;
        }
    }

    private formatDate(value: string): string {
        // Simplement retourner la valeur telle quelle
        // Power BI envoie déjà le bon format selon le niveau de drill
        return value.toString();
    }
}