var courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(587);
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(674);




class Visual {
    target;
    svg;
    mainGroup;
    tooltip;
    // Éléments graphiques
    pathArea;
    pathLine;
    gradientStopTop;
    gradientStopBottom;
    axisGroup;
    gradient;
    // Marges (Right 80 pour l'axe Y bis)
    margin = { top: 20, right: 80, bottom: 40, left: 60 };
    // Settings
    formattingSettings;
    formattingSettingsService;
    constructor(options) {
        this.target = options.element;
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* .FormattingSettingsService */ .O();
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
    showTooltip(x, y, content) {
        this.tooltip.innerHTML = content;
        this.tooltip.style.display = "block";
        this.tooltip.style.left = (x + 10) + "px";
        this.tooltip.style.top = (y - 10) + "px";
    }
    hideTooltip() {
        this.tooltip.style.display = "none";
    }
    getNiceStep(maxValue) {
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
    update(options) {
        const ns = "http://www.w3.org/2000/svg";
        // A. Récupération des données
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical)
            return;
        if (!dataView.categorical.categories || !dataView.categorical.values)
            return;
        // Récupération des settings
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(_settings__WEBPACK_IMPORTED_MODULE_0__/* .VisualFormattingSettingsModel */ .S, options.dataViews[0]);
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
        }
        else if (lineStyle === "dotted") {
            this.pathLine.setAttribute("stroke-dasharray", "2,2");
        }
        else {
            this.pathLine.removeAttribute("stroke-dasharray");
        }
        // Appliquer le dégradé
        if (showGradient) {
            this.applyGradientDirection(this.gradient, gradientDirection);
            this.gradientStopTop.setAttribute("stop-color", gradientColor);
            this.gradientStopTop.setAttribute("stop-opacity", Math.max(0, Math.min(1, gradientIntensity)).toString());
            this.gradientStopBottom.setAttribute("stop-color", gradientColor);
            this.pathArea.setAttribute("fill", "url(#axonautGradient)");
        }
        else {
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
        }
        else if (showLegend && (legendPosition === "Bottom" || legendPosition === "BottomCenter")) {
            legendHeight = 30;
            this.margin.bottom = 40 + legendHeight;
        }
        else {
            this.margin.top = 20;
            this.margin.bottom = 40;
        }
        const drawW = width - this.margin.left - this.margin.right;
        const drawH = height - this.margin.top - this.margin.bottom;
        // E. CALCUL ÉCHELLE Y pour courbe 1
        let maxDataVal1 = 0;
        if (vals1)
            vals1.forEach(v => { if (Number(v) > maxDataVal1)
                maxDataVal1 = Number(v); });
        const stepSize1 = this.getNiceStep(maxDataVal1);
        let niceMax1 = Math.ceil(maxDataVal1 / stepSize1) * stepSize1;
        if ((niceMax1 / stepSize1) > 8)
            niceMax1 = stepSize1 * 8;
        if (niceMax1 === 0)
            niceMax1 = stepSize1;
        // F. CALCUL ÉCHELLE Y pour courbe 2
        let maxDataVal2 = 0;
        let stepSize2 = 1;
        let niceMax2 = 1;
        if (vals2 && vals2.length) {
            vals2.forEach(v => { if (Number(v) > maxDataVal2)
                maxDataVal2 = Number(v); });
            stepSize2 = this.getNiceStep(maxDataVal2);
            niceMax2 = Math.ceil(maxDataVal2 / stepSize2) * stepSize2;
            if ((niceMax2 / stepSize2) > 8)
                niceMax2 = stepSize2 * 8;
            if (niceMax2 === 0)
                niceMax2 = stepSize2;
        }
        // G. Calcul des points courbe 1
        const points1 = cats.map((cat, i) => {
            const x = (i / (cats.length - 1)) * drawW;
            const y = drawH - (Number(vals1[i]) / niceMax1 * drawH);
            return [x, y];
        });
        // H. Calcul des points courbe 2
        let points2 = [];
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
            for (let val = 0; val <= niceMax1; val += stepSize1) {
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
            for (let val = 0; val <= niceMax2; val += stepSize2) {
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
                if (i % step !== 0 && i !== cats.length - 1)
                    return;
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
                }
                else if (i === 0) {
                    text.setAttribute("text-anchor", "start");
                }
                else {
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
            const lastX = points1[points1.length - 1][0];
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
            hoverCircle.addEventListener("mouseenter", (e) => {
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
            hoverCircle.addEventListener("mousemove", (e) => {
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
            let gradient2 = this.svg.querySelector("#axonautGradient2");
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
            const areaData2 = `${d2} L ${points2[points2.length - 1][0]},${drawH} L ${points2[0][0]},${drawH} Z`;
            let pathArea2 = this.mainGroup.querySelector(".pathArea2");
            if (!pathArea2) {
                pathArea2 = document.createElementNS(ns, "path");
                pathArea2.classList.add("pathArea2");
                this.mainGroup.insertBefore(pathArea2, this.pathLine);
            }
            pathArea2.setAttribute("d", areaData2);
            if (showGradient2) {
                pathArea2.setAttribute("fill", "url(#axonautGradient2)");
            }
            else {
                pathArea2.setAttribute("fill", "none");
            }
            pathArea2.setAttribute("stroke", "none");
            // Ligne courbe 2
            let pathLine2 = this.mainGroup.querySelector(".pathLine2");
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
            }
            else if (lineStyle2 === "dotted") {
                pathLine2.setAttribute("stroke-dasharray", "2,2");
            }
            else {
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
                hoverCircle.addEventListener("mouseenter", (e) => {
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
                hoverCircle.addEventListener("mousemove", (e) => {
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
            const items = [];
            if (vals1)
                items.push({ name: series1Name, color: lineColor });
            if (vals2 && vals2.length)
                items.push({ name: series2Name, color: lineColor2 });
            let legendX = 0;
            let legendY = 0;
            const itemWidth = 100;
            const itemHeight = 20;
            if (legendPosition === "Top" || legendPosition === "TopCenter") {
                legendX = (width - items.length * itemWidth) / 2;
                legendY = 10;
            }
            else if (legendPosition === "Bottom" || legendPosition === "BottomCenter") {
                legendX = (width - items.length * itemWidth) / 2;
                legendY = height - 20;
            }
            else if (legendPosition === "Left") {
                legendX = 10;
                legendY = height / 2 - (items.length * itemHeight) / 2;
            }
            else if (legendPosition === "Right") {
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
    formatDataLabel(value, displayUnits, precision) {
        let formatted = value;
        let suffix = "";
        if (displayUnits === 0) {
            // Auto
            if (value >= 1000000000) {
                formatted = value / 1000000000;
                suffix = "Md";
            }
            else if (value >= 1000000) {
                formatted = value / 1000000;
                suffix = "M";
            }
            else if (value >= 1000) {
                formatted = value / 1000;
                suffix = "K";
            }
        }
        else if (displayUnits > 1) {
            formatted = value / displayUnits;
            if (displayUnits === 1000)
                suffix = "K";
            else if (displayUnits === 1000000)
                suffix = "M";
            else if (displayUnits === 1000000000)
                suffix = "Md";
        }
        return formatted.toFixed(precision) + suffix;
    }
    buildSmoothPath(points) {
        let d = `M ${points[0][0]},${points[0][1]}`;
        for (let i = 1; i < points.length; i++) {
            d += ` L ${points[i][0]},${points[i][1]}`;
        }
        return d;
    }
    buildSteppedPath(points) {
        let d = `M ${points[0][0]},${points[0][1]}`;
        for (let i = 1; i < points.length; i++) {
            d += ` L ${points[i][0]},${points[i - 1][1]} L ${points[i][0]},${points[i][1]}`;
        }
        return d;
    }
    getFormattingModel() {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }
    applyGradientDirection(gradient, direction) {
        switch (direction) {
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
    formatNumber(num) {
        return Math.round(num).toLocaleString('fr-FR');
    }
    formatDate(value) {
        const date = new Date(value);
        if (isNaN(date.getTime()))
            return value;
        try {
            return new Intl.DateTimeFormat('fr-FR', { month: 'short', year: 'numeric' }).format(date);
        }
        catch (e) {
            return value;
        }
    }
}


/***/ }),

/***/ 587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ VisualFormattingSettingsModel)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(674);
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */


var FormattingSettingsCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.SimpleCard */ .z.Tn;
var FormattingSettingsModel = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.Model */ .z.Kx;
/**
 * Line Settings Card
 */
class LineSettingsCard extends FormattingSettingsCard {
    lineColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "lineColor",
        displayName: "Couleur de la ligne",
        value: { value: "#3B60C4" }
    });
    strokeWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "strokeWidth",
        displayName: "Épaisseur",
        value: 3
    });
    showMarkers = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "showMarkers",
        displayName: "Afficher les marqueurs",
        value: false
    });
    markerSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "markerSize",
        displayName: "Taille des marqueurs",
        value: 5
    });
    lineStyle = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z.PA({
        name: "lineStyle",
        displayName: "Style de ligne",
        items: [
            { value: "solid", displayName: "Continu" },
            { value: "dashed", displayName: "Pointillés" },
            { value: "dotted", displayName: "Points" }
        ],
        value: { value: "solid", displayName: "Continu" }
    });
    stepped = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "stepped",
        displayName: "Ligne en escalier",
        value: false
    });
    name = "lineSettings";
    displayName = "Ligne 1";
    slices = [
        this.lineColor,
        this.strokeWidth,
        this.lineStyle,
        this.showMarkers,
        this.markerSize,
        this.stepped
    ];
}
/**
 * Gradient Settings Card
 */
class GradientSettingsCard extends FormattingSettingsCard {
    showGradient = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "showGradient",
        displayName: "Afficher le dégradé",
        value: true
    });
    gradientColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "gradientColor",
        displayName: "Couleur du dégradé",
        value: { value: "#3B60C4" }
    });
    gradientIntensity = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "gradientIntensity",
        displayName: "Intensité (0-1)",
        value: 0.3
    });
    gradientDirection = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z.PA({
        name: "gradientDirection",
        displayName: "Direction",
        items: [
            { value: "vertical", displayName: "Haut → Bas" },
            { value: "vertical-reverse", displayName: "Bas → Haut" },
            { value: "horizontal", displayName: "Gauche → Droite" },
            { value: "horizontal-reverse", displayName: "Droite → Gauche" },
            { value: "diagonal", displayName: "Diagonale ↘" },
            { value: "diagonal-reverse", displayName: "Diagonale ↙" }
        ],
        value: { value: "vertical", displayName: "Haut → Bas" }
    });
    name = "gradientSettings";
    displayName = "Dégradé 1";
    slices = [
        this.showGradient,
        this.gradientColor,
        this.gradientIntensity,
        this.gradientDirection
    ];
}
/**
 * Second Line Settings Card
 */
class SecondLineSettingsCard extends FormattingSettingsCard {
    lineColor2 = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "lineColor2",
        displayName: "Couleur de la ligne",
        value: { value: "#E94F37" }
    });
    strokeWidth2 = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "strokeWidth2",
        displayName: "Épaisseur",
        value: 3
    });
    showMarkers2 = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "showMarkers2",
        displayName: "Afficher les marqueurs",
        value: false
    });
    markerSize2 = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "markerSize2",
        displayName: "Taille des marqueurs",
        value: 5
    });
    lineStyle2 = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z.PA({
        name: "lineStyle2",
        displayName: "Style de ligne",
        items: [
            { value: "solid", displayName: "Continu" },
            { value: "dashed", displayName: "Pointillés" },
            { value: "dotted", displayName: "Points" }
        ],
        value: { value: "solid", displayName: "Continu" }
    });
    stepped2 = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "stepped2",
        displayName: "Ligne en escalier",
        value: false
    });
    name = "secondLineSettings";
    displayName = "Ligne 2";
    slices = [
        this.lineColor2,
        this.strokeWidth2,
        this.lineStyle2,
        this.showMarkers2,
        this.markerSize2,
        this.stepped2
    ];
}
/**
 * Second Gradient Settings Card
 */
class SecondGradientSettingsCard extends FormattingSettingsCard {
    showGradient2 = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "showGradient2",
        displayName: "Afficher le dégradé",
        value: true
    });
    gradientColor2 = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "gradientColor2",
        displayName: "Couleur du dégradé",
        value: { value: "#E94F37" }
    });
    gradientIntensity2 = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "gradientIntensity2",
        displayName: "Intensité (0-1)",
        value: 0.3
    });
    gradientDirection2 = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z.PA({
        name: "gradientDirection2",
        displayName: "Direction",
        items: [
            { value: "vertical", displayName: "Haut → Bas" },
            { value: "vertical-reverse", displayName: "Bas → Haut" },
            { value: "horizontal", displayName: "Gauche → Droite" },
            { value: "horizontal-reverse", displayName: "Droite → Gauche" },
            { value: "diagonal", displayName: "Diagonale ↘" },
            { value: "diagonal-reverse", displayName: "Diagonale ↙" }
        ],
        value: { value: "vertical", displayName: "Haut → Bas" }
    });
    name = "secondGradientSettings";
    displayName = "Dégradé 2";
    slices = [
        this.showGradient2,
        this.gradientColor2,
        this.gradientIntensity2,
        this.gradientDirection2
    ];
}
/**
 * X Axis Settings Card
 */
class XAxisSettingsCard extends FormattingSettingsCard {
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "show",
        displayName: "Afficher l'axe X",
        value: true
    });
    axisColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "axisColor",
        displayName: "Couleur",
        value: { value: "#666666" }
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 11
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z.PA({
        name: "fontFamily",
        displayName: "Famille de police",
        items: [
            { value: "Segoe UI", displayName: "Segoe UI" },
            { value: "Arial", displayName: "Arial" },
            { value: "Courier New", displayName: "Courier New" },
            { value: "Georgia", displayName: "Georgia" },
            { value: "Verdana", displayName: "Verdana" }
        ],
        value: { value: "Segoe UI", displayName: "Segoe UI" }
    });
    title = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "title",
        displayName: "Afficher le titre",
        value: false
    });
    titleText = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.TextInput */ .z.ks({
        name: "titleText",
        displayName: "Texte du titre",
        value: "",
        placeholder: "Titre de l'axe X"
    });
    name = "xAxisSettings";
    displayName = "Axe X";
    slices = [
        this.show,
        this.axisColor,
        this.fontSize,
        this.fontFamily,
        this.title,
        this.titleText
    ];
}
/**
 * Y Axis Settings Card
 */
class YAxisSettingsCard extends FormattingSettingsCard {
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "show",
        displayName: "Afficher l'axe Y",
        value: true
    });
    axisColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "axisColor",
        displayName: "Couleur",
        value: { value: "#666666" }
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 11
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z.PA({
        name: "fontFamily",
        displayName: "Famille de police",
        items: [
            { value: "Segoe UI", displayName: "Segoe UI" },
            { value: "Arial", displayName: "Arial" },
            { value: "Courier New", displayName: "Courier New" },
            { value: "Georgia", displayName: "Georgia" },
            { value: "Verdana", displayName: "Verdana" }
        ],
        value: { value: "Segoe UI", displayName: "Segoe UI" }
    });
    title = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "title",
        displayName: "Afficher le titre",
        value: false
    });
    titleText = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.TextInput */ .z.ks({
        name: "titleText",
        displayName: "Texte du titre",
        value: "",
        placeholder: "Titre de l'axe Y"
    });
    useYAxisBis = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "useYAxisBis",
        displayName: "Afficher axe Y bis",
        value: false
    });
    name = "yAxisSettings";
    displayName = "Axe Y";
    slices = [
        this.show,
        this.axisColor,
        this.fontSize,
        this.fontFamily,
        this.title,
        this.titleText,
        this.useYAxisBis
    ];
}
/**
 * Grid Settings Card
 */
class GridSettingsCard extends FormattingSettingsCard {
    showHorizontal = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "showHorizontal",
        displayName: "Grille horizontale",
        value: true
    });
    showVertical = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "showVertical",
        displayName: "Grille verticale",
        value: false
    });
    gridColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "gridColor",
        displayName: "Couleur de la grille",
        value: { value: "#f0f0f0" }
    });
    gridThickness = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "gridThickness",
        displayName: "Épaisseur",
        value: 1
    });
    gridStyle = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z.PA({
        name: "gridStyle",
        displayName: "Style",
        items: [
            { value: "solid", displayName: "Continu" },
            { value: "dashed", displayName: "Pointillés" }
        ],
        value: { value: "dashed", displayName: "Pointillés" }
    });
    name = "gridSettings";
    displayName = "Grille";
    slices = [
        this.showHorizontal,
        this.showVertical,
        this.gridColor,
        this.gridThickness,
        this.gridStyle
    ];
}
/**
 * Data Labels Settings Card
 */
class DataLabelsCard extends FormattingSettingsCard {
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "show",
        displayName: "Afficher les étiquettes",
        value: false
    });
    color = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "color",
        displayName: "Couleur",
        value: { value: "#000000" }
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 9
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z.PA({
        name: "fontFamily",
        displayName: "Famille de police",
        items: [
            { value: "Segoe UI", displayName: "Segoe UI" },
            { value: "Arial", displayName: "Arial" },
            { value: "Courier New", displayName: "Courier New" }
        ],
        value: { value: "Segoe UI", displayName: "Segoe UI" }
    });
    displayUnits = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z.PA({
        name: "displayUnits",
        displayName: "Unités d'affichage",
        items: [
            { value: "0", displayName: "Auto" },
            { value: "1", displayName: "Aucun" },
            { value: "1000", displayName: "Milliers (K)" },
            { value: "1000000", displayName: "Millions (M)" },
            { value: "1000000000", displayName: "Milliards (Md)" }
        ],
        value: { value: "0", displayName: "Auto" }
    });
    precision = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "precision",
        displayName: "Décimales",
        value: 0
    });
    name = "dataLabels";
    displayName = "Étiquettes de données";
    slices = [
        this.show,
        this.color,
        this.fontSize,
        this.fontFamily,
        this.displayUnits,
        this.precision
    ];
}
/**
 * Legend Settings Card
 */
class LegendCard extends FormattingSettingsCard {
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "show",
        displayName: "Afficher la légende",
        value: true
    });
    position = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z.PA({
        name: "position",
        displayName: "Position",
        items: [
            { value: "Top", displayName: "Haut" },
            { value: "Bottom", displayName: "Bas" },
            { value: "Left", displayName: "Gauche" },
            { value: "Right", displayName: "Droite" },
            { value: "TopCenter", displayName: "Haut centre" },
            { value: "BottomCenter", displayName: "Bas centre" }
        ],
        value: { value: "Top", displayName: "Haut" }
    });
    fontColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "fontColor",
        displayName: "Couleur",
        value: { value: "#666666" }
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 10
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z.PA({
        name: "fontFamily",
        displayName: "Famille de police",
        items: [
            { value: "Segoe UI", displayName: "Segoe UI" },
            { value: "Arial", displayName: "Arial" },
            { value: "Courier New", displayName: "Courier New" }
        ],
        value: { value: "Segoe UI", displayName: "Segoe UI" }
    });
    name = "legend";
    displayName = "Légende";
    slices = [
        this.show,
        this.position,
        this.fontColor,
        this.fontSize,
        this.fontFamily
    ];
}
/**
 * Visual settings model class
 */
class VisualFormattingSettingsModel extends FormattingSettingsModel {
    lineSettingsCard = new LineSettingsCard();
    gradientSettingsCard = new GradientSettingsCard();
    secondLineSettingsCard = new SecondLineSettingsCard();
    secondGradientSettingsCard = new SecondGradientSettingsCard();
    xAxisSettings = new XAxisSettingsCard();
    yAxisSettings = new YAxisSettingsCard();
    gridSettings = new GridSettingsCard();
    dataLabels = new DataLabelsCard();
    legend = new LegendCard();
    cards = [
        this.lineSettingsCard,
        this.gradientSettingsCard,
        this.secondLineSettingsCard,
        this.secondGradientSettingsCard,
        this.xAxisSettings,
        this.yAxisSettings,
        this.gridSettings,
        this.dataLabels,
        this.legend
    ];
}


/***/ }),

/***/ 639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ getPropertyValue),
/* harmony export */   y: () => (/* binding */ getDescriptor)
/* harmony export */ });
/**
 * Build and return formatting descriptor for simple slice
 *
 * @param objectName Object name from capabilities
 * @param slice formatting simple slice
 * @returns simple slice formatting descriptor
 */
function getDescriptor(objectName, slice) {
    return {
        objectName: objectName,
        propertyName: slice.name,
        selector: slice.selector,
        altConstantValueSelector: slice.altConstantSelector,
        instanceKind: slice.instanceKind
    };
}
/**
 * Get property value from dataview objects if exists
 * Else return the default value from formatting settings object
 *
 * @param value dataview object value
 * @param defaultValue formatting settings default value
 * @returns formatting property value
 */
function getPropertyValue(slice, value, defaultValue) {
    if (value == null || (typeof value === "object" && !value.solid)) {
        return defaultValue;
    }
    if (value.solid) {
        return { value: value === null || value === void 0 ? void 0 : value.solid.color };
    }
    if (slice === null || slice === void 0 ? void 0 : slice.items) {
        let itemsArray = slice.items;
        return itemsArray.find(item => item.value == value);
    }
    return value;
}
//# sourceMappingURL=FormattingSettingsUtils.js.map

/***/ }),

/***/ 667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormattingSettingsService */
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);

class FormattingSettingsService {
    constructor(localizationManager) {
        this.localizationManager = localizationManager;
    }
    /**
     * Build visual formatting settings model from metadata dataView
     *
     * @param dataViews metadata dataView object
     * @returns visual formatting settings model
     */
    populateFormattingSettingsModel(typeClass, dataView) {
        var _a, _b;
        let defaultSettings = new typeClass();
        let dataViewObjects = (_a = dataView === null || dataView === void 0 ? void 0 : dataView.metadata) === null || _a === void 0 ? void 0 : _a.objects;
        if (dataViewObjects) {
            // loop over each formatting property and set its new value if exists
            (_b = defaultSettings.cards) === null || _b === void 0 ? void 0 : _b.forEach((card) => {
                var _a;
                if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .CompositeCard */ .St)
                    (_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .Tn ? [card] : card.groups);
                cardGroupInstances.forEach((cardGroupInstance) => {
                    var _a, _b, _c, _d;
                    // Set current top level toggle value
                    (_a = cardGroupInstance.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                    (_b = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.slices) === null || _b === void 0 ? void 0 : _b.forEach((slice) => {
                        slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                    });
                    (_d = (_c = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.container) === null || _c === void 0 ? void 0 : _c.containerItems) === null || _d === void 0 ? void 0 : _d.forEach((containerItem) => {
                        var _a;
                        (_a = containerItem === null || containerItem === void 0 ? void 0 : containerItem.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                            slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                        });
                    });
                });
            });
        }
        return defaultSettings;
    }
    /**
     * Build formatting model by parsing formatting settings model object
     *
     * @returns powerbi visual formatting model
     */
    buildFormattingModel(formattingSettingsModel) {
        let formattingModel = {
            cards: []
        };
        formattingSettingsModel.cards
            .filter(({ visible = true }) => visible)
            .forEach((card) => {
            var _a;
            let formattingCard = {
                displayName: (this.localizationManager && card.displayNameKey) ? this.localizationManager.getDisplayName(card.displayNameKey) : card.displayName,
                description: (this.localizationManager && card.descriptionKey) ? this.localizationManager.getDisplayName(card.descriptionKey) : card.description,
                groups: [],
                uid: card.name + "-card",
                analyticsPane: card.analyticsPane,
            };
            const objectName = card.name;
            if (card.topLevelSlice) {
                let topLevelToggleSlice = card.topLevelSlice.getFormattingSlice(objectName, this.localizationManager);
                topLevelToggleSlice.suppressDisplayName = true;
                formattingCard.topLevelToggle = topLevelToggleSlice;
            }
            (_a = card.onPreProcess) === null || _a === void 0 ? void 0 : _a.call(card);
            const isSimpleCard = card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .Tn;
            const cardGroupInstances = (isSimpleCard ?
                [card].filter(({ visible = true }) => visible) :
                card.groups.filter(({ visible = true }) => visible));
            cardGroupInstances
                .forEach((cardGroupInstance) => {
                const groupUid = cardGroupInstance.name + "-group";
                // Build formatting group for each group
                const formattingGroup = {
                    displayName: isSimpleCard ? undefined : (this.localizationManager && cardGroupInstance.displayNameKey)
                        ? this.localizationManager.getDisplayName(cardGroupInstance.displayNameKey) : cardGroupInstance.displayName,
                    description: isSimpleCard ? undefined : (this.localizationManager && cardGroupInstance.descriptionKey)
                        ? this.localizationManager.getDisplayName(cardGroupInstance.descriptionKey) : cardGroupInstance.description,
                    slices: [],
                    uid: groupUid,
                    collapsible: cardGroupInstance.collapsible,
                    delaySaveSlices: cardGroupInstance.delaySaveSlices,
                    disabled: cardGroupInstance.disabled,
                    disabledReason: cardGroupInstance.disabledReason,
                };
                formattingCard.groups.push(formattingGroup);
                // In case formatting model adds data points or top categories (Like when you modify specific visual category color).
                // these categories use same object name and property name from capabilities and the generated uid will be the same for these formatting categories properties
                // Solution => Save slice names to modify each slice uid to be unique by adding counter value to the new slice uid
                const sliceNames = {};
                // Build formatting container slice for each property
                if (cardGroupInstance.container) {
                    const container = cardGroupInstance.container;
                    const containerUid = groupUid + "-container";
                    const formattingContainer = {
                        displayName: (this.localizationManager && container.displayNameKey)
                            ? this.localizationManager.getDisplayName(container.displayNameKey) : container.displayName,
                        description: (this.localizationManager && container.descriptionKey)
                            ? this.localizationManager.getDisplayName(container.descriptionKey) : container.description,
                        containerItems: [],
                        uid: containerUid
                    };
                    container.containerItems.forEach((containerItem) => {
                        // Build formatting container item object
                        const containerIemName = containerItem.displayNameKey ? containerItem.displayNameKey : containerItem.displayName;
                        const containerItemUid = containerUid + containerIemName;
                        let formattingContainerItem = {
                            displayName: (this.localizationManager && containerItem.displayNameKey)
                                ? this.localizationManager.getDisplayName(containerItem.displayNameKey) : containerItem.displayName,
                            slices: [],
                            uid: containerItemUid
                        };
                        // Build formatting slices and add them to current formatting container item
                        this.buildFormattingSlices({ slices: containerItem.slices, objectName, sliceNames, formattingSlices: formattingContainerItem.slices });
                        formattingContainer.containerItems.push(formattingContainerItem);
                    });
                    formattingGroup.container = formattingContainer;
                }
                if (cardGroupInstance.slices) {
                    if (cardGroupInstance.topLevelSlice) {
                        let topLevelToggleSlice = cardGroupInstance.topLevelSlice.getFormattingSlice(objectName, this.localizationManager);
                        topLevelToggleSlice.suppressDisplayName = true;
                        (formattingGroup.displayName == undefined ? formattingCard : formattingGroup).topLevelToggle = topLevelToggleSlice;
                    }
                    // Build formatting slice for each property
                    this.buildFormattingSlices({ slices: cardGroupInstance.slices, objectName, sliceNames, formattingSlices: formattingGroup.slices });
                }
            });
            formattingCard.revertToDefaultDescriptors = this.getRevertToDefaultDescriptor(card);
            formattingModel.cards.push(formattingCard);
        });
        return formattingModel;
    }
    buildFormattingSlices({ slices, objectName, sliceNames, formattingSlices }) {
        // Filter slices based on their visibility
        slices === null || slices === void 0 ? void 0 : slices.filter(({ visible = true }) => visible).forEach((slice) => {
            let formattingSlice = slice === null || slice === void 0 ? void 0 : slice.getFormattingSlice(objectName, this.localizationManager);
            if (formattingSlice) {
                // Modify formatting slice uid if needed
                if (sliceNames[slice.name] === undefined) {
                    sliceNames[slice.name] = 0;
                }
                else {
                    sliceNames[slice.name]++;
                    formattingSlice.uid = `${formattingSlice.uid}-${sliceNames[slice.name]}`;
                }
                formattingSlices.push(formattingSlice);
            }
        });
    }
    getRevertToDefaultDescriptor(card) {
        var _a;
        // Proceeded slice names are saved to prevent duplicated default descriptors in case of using 
        // formatting categories & selectors, since they have the same descriptor objectName and propertyName
        const sliceNames = {};
        let revertToDefaultDescriptors = [];
        let cardSlicesDefaultDescriptors;
        let cardContainerSlicesDefaultDescriptors = [];
        if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .CompositeCard */ .St && card.topLevelSlice)
            revertToDefaultDescriptors.push(...(_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.getRevertToDefaultDescriptor(card.name));
        const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .Tn ?
            [card].filter(({ visible = true }) => visible) :
            card.groups.filter(({ visible = true }) => visible));
        cardGroupInstances.forEach((cardGroupInstance) => {
            var _a, _b;
            cardSlicesDefaultDescriptors = this.getSlicesRevertToDefaultDescriptor(card.name, cardGroupInstance.slices, sliceNames, cardGroupInstance.topLevelSlice);
            (_b = (_a = cardGroupInstance.container) === null || _a === void 0 ? void 0 : _a.containerItems) === null || _b === void 0 ? void 0 : _b.forEach((containerItem) => {
                cardContainerSlicesDefaultDescriptors = cardContainerSlicesDefaultDescriptors.concat(this.getSlicesRevertToDefaultDescriptor(card.name, containerItem.slices, sliceNames));
            });
            revertToDefaultDescriptors.push(...cardSlicesDefaultDescriptors.concat(cardContainerSlicesDefaultDescriptors));
        });
        return revertToDefaultDescriptors;
    }
    getSlicesRevertToDefaultDescriptor(cardName, slices, sliceNames, topLevelSlice) {
        let revertToDefaultDescriptors = [];
        if (topLevelSlice) {
            sliceNames[topLevelSlice.name] = true;
            revertToDefaultDescriptors = revertToDefaultDescriptors.concat(topLevelSlice.getRevertToDefaultDescriptor(cardName));
        }
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
            if (slice && !sliceNames[slice.name]) {
                sliceNames[slice.name] = true;
                revertToDefaultDescriptors = revertToDefaultDescriptors.concat(slice.getRevertToDefaultDescriptor(cardName));
            }
        });
        return revertToDefaultDescriptors;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattingSettingsService);
//# sourceMappingURL=FormattingSettingsService.js.map

/***/ }),

/***/ 674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* reexport safe */ _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   z: () => (/* reexport module object */ _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);
/* harmony import */ var _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kx: () => (/* binding */ Model),
/* harmony export */   PA: () => (/* binding */ ItemDropdown),
/* harmony export */   St: () => (/* binding */ CompositeCard),
/* harmony export */   Tn: () => (/* binding */ SimpleCard),
/* harmony export */   iB: () => (/* binding */ NumUpDown),
/* harmony export */   jF: () => (/* binding */ ToggleSwitch),
/* harmony export */   ks: () => (/* binding */ TextInput),
/* harmony export */   sk: () => (/* binding */ ColorPicker)
/* harmony export */ });
/* unused harmony exports CardGroupEntity, Group, SimpleSlice, AlignmentGroup, Slider, DatePicker, AutoDropdown, DurationPicker, ErrorRangeControl, FieldPicker, ItemFlagsSelection, AutoFlagsSelection, TextArea, FontPicker, GradientBar, ImageUpload, ListEditor, ReadOnlyText, ShapeMapSelector, CompositeSlice, FontControl, MarginPadding, Container, ContainerItem */
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(639);
/**
 * Powerbi utils components classes for custom visual formatting pane objects
 *
 */

class NamedEntity {
}
class CardGroupEntity extends NamedEntity {
}
class Model {
}
/** CompositeCard is use to populate a card into the formatting pane with multiple groups */
class CompositeCard extends NamedEntity {
}
class Group extends CardGroupEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
}
/** SimpleCard is use to populate a card into the formatting pane in a single group */
class SimpleCard extends CardGroupEntity {
}
class SimpleSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const sliceDisplayName = (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName;
        const sliceDescription = (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description;
        const componentDisplayName = {
            displayName: sliceDisplayName,
            description: sliceDescription,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName, localizationManager)
            } });
    }
    getFormattingComponent(objectName, localizationManager) {
        return {
            descriptor: _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getDescriptor */ .y(objectName, this),
            value: this.value,
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return [{
                objectName: objectName,
                propertyName: this.name
            }];
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a;
        let newValue = (_a = dataViewObjects === null || dataViewObjects === void 0 ? void 0 : dataViewObjects[objectName]) === null || _a === void 0 ? void 0 : _a[this.name];
        this.value = _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getPropertyValue */ .D(this, newValue, this.value);
    }
}
class AlignmentGroup extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "AlignmentGroup" /* visuals.FormattingComponent.AlignmentGroup */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mode: this.mode, supportsNoSelection: this.supportsNoSelection });
    }
}
class ToggleSwitch extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ToggleSwitch" /* visuals.FormattingComponent.ToggleSwitch */;
    }
}
class ColorPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ColorPicker" /* visuals.FormattingComponent.ColorPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { defaultColor: this.defaultColor, isNoFillItemSupported: this.isNoFillItemSupported });
    }
}
class NumUpDown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "NumUpDown" /* visuals.FormattingComponent.NumUpDown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { options: this.options });
    }
}
class Slider extends NumUpDown {
    constructor() {
        super(...arguments);
        this.type = "Slider" /* visuals.FormattingComponent.Slider */;
    }
}
class DatePicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "DatePicker" /* visuals.FormattingComponent.DatePicker */;
    }
    getFormattingComponent(objectName, localizationManager) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: (localizationManager && this.placeholderKey) ? localizationManager.getDisplayName(this.placeholderKey) : this.placeholder, validators: this.validators });
    }
}
class ItemDropdown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoDropdown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mergeValues: this.mergeValues, filterValues: this.filterValues });
    }
}
class DurationPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "DurationPicker" /* visuals.FormattingComponent.DurationPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class ErrorRangeControl extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ErrorRangeControl" /* visuals.FormattingComponent.ErrorRangeControl */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class FieldPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "FieldPicker" /* visuals.FormattingComponent.FieldPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators, allowMultipleValues: this.allowMultipleValues });
    }
}
class ItemFlagsSelection extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoFlagsSelection extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
}
class TextInput extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "TextInput" /* visuals.FormattingComponent.TextInput */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: this.placeholder });
    }
}
class TextArea extends TextInput {
    constructor() {
        super(...arguments);
        this.type = "TextArea" /* visuals.FormattingComponent.TextArea */;
    }
}
class FontPicker extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "FontPicker" /* visuals.FormattingComponent.FontPicker */;
    }
}
class GradientBar extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "GradientBar" /* visuals.FormattingComponent.GradientBar */;
    }
}
class ImageUpload extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ImageUpload" /* visuals.FormattingComponent.ImageUpload */;
    }
}
class ListEditor extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ListEditor" /* visuals.FormattingComponent.ListEditor */;
    }
}
class ReadOnlyText extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ReadOnlyText" /* visuals.FormattingComponent.ReadOnlyText */;
    }
}
class ShapeMapSelector extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ShapeMapSelector" /* visuals.FormattingComponent.ShapeMapSelector */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { isAzMapReferenceSelector: this.isAzMapReferenceSelector });
    }
}
class CompositeSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const componentDisplayName = {
            displayName: (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName,
            description: (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName)
            } });
    }
}
class FontControl extends CompositeSlice {
    constructor(object) {
        super(object);
        this.type = "FontControl" /* visuals.FormattingComponent.FontControl */;
    }
    getFormattingComponent(objectName) {
        var _a, _b, _c;
        return {
            fontFamily: this.fontFamily.getFormattingComponent(objectName),
            fontSize: this.fontSize.getFormattingComponent(objectName),
            bold: (_a = this.bold) === null || _a === void 0 ? void 0 : _a.getFormattingComponent(objectName),
            italic: (_b = this.italic) === null || _b === void 0 ? void 0 : _b.getFormattingComponent(objectName),
            underline: (_c = this.underline) === null || _c === void 0 ? void 0 : _c.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.fontFamily.getRevertToDefaultDescriptor(objectName)
            .concat(this.fontSize.getRevertToDefaultDescriptor(objectName))
            .concat(this.bold ? this.bold.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.italic ? this.italic.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.underline ? this.underline.getRevertToDefaultDescriptor(objectName) : []);
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a, _b, _c;
        this.fontFamily.setPropertiesValues(dataViewObjects, objectName);
        this.fontSize.setPropertiesValues(dataViewObjects, objectName);
        (_a = this.bold) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, objectName);
        (_b = this.italic) === null || _b === void 0 ? void 0 : _b.setPropertiesValues(dataViewObjects, objectName);
        (_c = this.underline) === null || _c === void 0 ? void 0 : _c.setPropertiesValues(dataViewObjects, objectName);
    }
}
class MarginPadding extends CompositeSlice {
    constructor(object) {
        super(object);
        this.type = "MarginPadding" /* visuals.FormattingComponent.MarginPadding */;
    }
    getFormattingComponent(objectName) {
        return {
            left: this.left.getFormattingComponent(objectName),
            right: this.right.getFormattingComponent(objectName),
            top: this.top.getFormattingComponent(objectName),
            bottom: this.bottom.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.left.getRevertToDefaultDescriptor(objectName)
            .concat(this.right.getRevertToDefaultDescriptor(objectName))
            .concat(this.top.getRevertToDefaultDescriptor(objectName))
            .concat(this.bottom.getRevertToDefaultDescriptor(objectName));
    }
    setPropertiesValues(dataViewObjects, objectName) {
        this.left.setPropertiesValues(dataViewObjects, objectName);
        this.right.setPropertiesValues(dataViewObjects, objectName);
        this.top.setPropertiesValues(dataViewObjects, objectName);
        this.bottom.setPropertiesValues(dataViewObjects, objectName);
    }
}
class Container extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
}
class ContainerItem extends (/* unused pure expression or super */ null && (NamedEntity)) {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it declares 'courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG' on top-level, which conflicts with the current library output.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (visualPlugin)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG = {
    name: 'courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG',
    displayName: 'courbedegrade',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .b) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .b(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId, options, initialState) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG"] = courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG;
}
/* harmony default export */ const visualPlugin = (courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG);

})();

courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=https://localhost:8080/assets/visual.js.map