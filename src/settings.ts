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

"use strict";

import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

/**
 * Line Settings Card
 */
class LineSettingsCard extends FormattingSettingsCard {
    lineColor = new formattingSettings.ColorPicker({
        name: "lineColor",
        displayName: "Couleur de la ligne",
        value: { value: "#3B60C4" }
    });

    strokeWidth = new formattingSettings.NumUpDown({
        name: "strokeWidth",
        displayName: "Épaisseur",
        value: 3
    });

    showMarkers = new formattingSettings.ToggleSwitch({
        name: "showMarkers",
        displayName: "Afficher les marqueurs",
        value: false
    });

    markerSize = new formattingSettings.NumUpDown({
        name: "markerSize",
        displayName: "Taille des marqueurs",
        value: 5
    });

    lineStyle = new formattingSettings.ItemDropdown({
        name: "lineStyle",
        displayName: "Style de ligne",
        items: [
            { value: "solid", displayName: "Continu" },
            { value: "dashed", displayName: "Pointillés" },
            { value: "dotted", displayName: "Points" }
        ],
        value: { value: "solid", displayName: "Continu" }
    });

    stepped = new formattingSettings.ToggleSwitch({
        name: "stepped",
        displayName: "Ligne en escalier",
        value: false
    });

    name: string = "lineSettings";
    displayName: string = "Ligne 1";
    slices: Array<FormattingSettingsSlice> = [
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
    showGradient = new formattingSettings.ToggleSwitch({
        name: "showGradient",
        displayName: "Afficher le dégradé",
        value: true
    });

    gradientColor = new formattingSettings.ColorPicker({
        name: "gradientColor",
        displayName: "Couleur du dégradé",
        value: { value: "#3B60C4" }
    });

    gradientIntensity = new formattingSettings.NumUpDown({
        name: "gradientIntensity",
        displayName: "Intensité (0-1)",
        value: 0.3
    });

    gradientDirection = new formattingSettings.ItemDropdown({
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

    name: string = "gradientSettings";
    displayName: string = "Dégradé 1";
    slices: Array<FormattingSettingsSlice> = [
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
    lineColor2 = new formattingSettings.ColorPicker({
        name: "lineColor2",
        displayName: "Couleur de la ligne",
        value: { value: "#E94F37" }
    });

    strokeWidth2 = new formattingSettings.NumUpDown({
        name: "strokeWidth2",
        displayName: "Épaisseur",
        value: 3
    });

    showMarkers2 = new formattingSettings.ToggleSwitch({
        name: "showMarkers2",
        displayName: "Afficher les marqueurs",
        value: false
    });

    markerSize2 = new formattingSettings.NumUpDown({
        name: "markerSize2",
        displayName: "Taille des marqueurs",
        value: 5
    });

    lineStyle2 = new formattingSettings.ItemDropdown({
        name: "lineStyle2",
        displayName: "Style de ligne",
        items: [
            { value: "solid", displayName: "Continu" },
            { value: "dashed", displayName: "Pointillés" },
            { value: "dotted", displayName: "Points" }
        ],
        value: { value: "solid", displayName: "Continu" }
    });

    stepped2 = new formattingSettings.ToggleSwitch({
        name: "stepped2",
        displayName: "Ligne en escalier",
        value: false
    });

    name: string = "secondLineSettings";
    displayName: string = "Ligne 2";
    slices: Array<FormattingSettingsSlice> = [
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
    showGradient2 = new formattingSettings.ToggleSwitch({
        name: "showGradient2",
        displayName: "Afficher le dégradé",
        value: true
    });

    gradientColor2 = new formattingSettings.ColorPicker({
        name: "gradientColor2",
        displayName: "Couleur du dégradé",
        value: { value: "#E94F37" }
    });

    gradientIntensity2 = new formattingSettings.NumUpDown({
        name: "gradientIntensity2",
        displayName: "Intensité (0-1)",
        value: 0.3
    });

    gradientDirection2 = new formattingSettings.ItemDropdown({
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

    name: string = "secondGradientSettings";
    displayName: string = "Dégradé 2";
    slices: Array<FormattingSettingsSlice> = [
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
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher l'axe X",
        value: true
    });

    axisColor = new formattingSettings.ColorPicker({
        name: "axisColor",
        displayName: "Couleur",
        value: { value: "#666666" }
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 11
    });

    fontFamily = new formattingSettings.ItemDropdown({
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

    title = new formattingSettings.ToggleSwitch({
        name: "title",
        displayName: "Afficher le titre",
        value: false
    });

    titleText = new formattingSettings.TextInput({
        name: "titleText",
        displayName: "Texte du titre",
        value: "",
        placeholder: "Titre de l'axe X"
    });

    name: string = "xAxisSettings";
    displayName: string = "Axe X";
    slices: Array<FormattingSettingsSlice> = [
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
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher l'axe Y",
        value: true
    });

    axisColor = new formattingSettings.ColorPicker({
        name: "axisColor",
        displayName: "Couleur",
        value: { value: "#666666" }
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 11
    });

    fontFamily = new formattingSettings.ItemDropdown({
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

    title = new formattingSettings.ToggleSwitch({
        name: "title",
        displayName: "Afficher le titre",
        value: false
    });

    titleText = new formattingSettings.TextInput({
        name: "titleText",
        displayName: "Texte du titre",
        value: "",
        placeholder: "Titre de l'axe Y"
    });

    useYAxisBis = new formattingSettings.ToggleSwitch({
        name: "useYAxisBis",
        displayName: "Afficher axe Y bis",
        value: false
    });

    name: string = "yAxisSettings";
    displayName: string = "Axe Y";
    slices: Array<FormattingSettingsSlice> = [
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
    showHorizontal = new formattingSettings.ToggleSwitch({
        name: "showHorizontal",
        displayName: "Grille horizontale",
        value: true
    });

    showVertical = new formattingSettings.ToggleSwitch({
        name: "showVertical",
        displayName: "Grille verticale",
        value: false
    });

    gridColor = new formattingSettings.ColorPicker({
        name: "gridColor",
        displayName: "Couleur de la grille",
        value: { value: "#f0f0f0" }
    });

    gridThickness = new formattingSettings.NumUpDown({
        name: "gridThickness",
        displayName: "Épaisseur",
        value: 1
    });

    gridStyle = new formattingSettings.ItemDropdown({
        name: "gridStyle",
        displayName: "Style",
        items: [
            { value: "solid", displayName: "Continu" },
            { value: "dashed", displayName: "Pointillés" }
        ],
        value: { value: "dashed", displayName: "Pointillés" }
    });

    name: string = "gridSettings";
    displayName: string = "Grille";
    slices: Array<FormattingSettingsSlice> = [
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
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher les étiquettes",
        value: false
    });

    color = new formattingSettings.ColorPicker({
        name: "color",
        displayName: "Couleur",
        value: { value: "#000000" }
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 9
    });

    fontFamily = new formattingSettings.ItemDropdown({
        name: "fontFamily",
        displayName: "Famille de police",
        items: [
            { value: "Segoe UI", displayName: "Segoe UI" },
            { value: "Arial", displayName: "Arial" },
            { value: "Courier New", displayName: "Courier New" }
        ],
        value: { value: "Segoe UI", displayName: "Segoe UI" }
    });

    displayUnits = new formattingSettings.ItemDropdown({
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

    precision = new formattingSettings.NumUpDown({
        name: "precision",
        displayName: "Décimales",
        value: 0
    });

    name: string = "dataLabels";
    displayName: string = "Étiquettes de données";
    slices: Array<FormattingSettingsSlice> = [
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
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher la légende",
        value: true
    });

    position = new formattingSettings.ItemDropdown({
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

    fontColor = new formattingSettings.ColorPicker({
        name: "fontColor",
        displayName: "Couleur",
        value: { value: "#666666" }
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 10
    });

    fontFamily = new formattingSettings.ItemDropdown({
        name: "fontFamily",
        displayName: "Famille de police",
        items: [
            { value: "Segoe UI", displayName: "Segoe UI" },
            { value: "Arial", displayName: "Arial" },
            { value: "Courier New", displayName: "Courier New" }
        ],
        value: { value: "Segoe UI", displayName: "Segoe UI" }
    });

    name: string = "legend";
    displayName: string = "Légende";
    slices: Array<FormattingSettingsSlice> = [
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
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
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
