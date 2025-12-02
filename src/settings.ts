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

    name: string = "lineSettings";
    displayName: string = "Ligne 1";
    slices: Array<FormattingSettingsSlice> = [this.lineColor];
}

/**
 * Gradient Settings Card
 */
class GradientSettingsCard extends FormattingSettingsCard {
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
    slices: Array<FormattingSettingsSlice> = [this.gradientColor, this.gradientIntensity, this.gradientDirection];
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

    name: string = "secondLineSettings";
    displayName: string = "Ligne 2";
    slices: Array<FormattingSettingsSlice> = [this.lineColor2];
}

/**
 * Second Gradient Settings Card
 */
class SecondGradientSettingsCard extends FormattingSettingsCard {
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
    slices: Array<FormattingSettingsSlice> = [this.gradientColor2, this.gradientIntensity2, this.gradientDirection2];
}

/**
 * Axis Settings Card
 */
class AxisSettingsCard extends FormattingSettingsCard {
    useYAxisBis = new formattingSettings.ToggleSwitch({
        name: "useYAxisBis",
        displayName: "Afficher axe Y bis",
        value: false
    });

    name: string = "axisSettings";
    displayName: string = "Axes";
    slices: Array<FormattingSettingsSlice> = [this.useYAxisBis];
}

/**
 * Visual settings model class
 */
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
    lineSettingsCard = new LineSettingsCard();
    gradientSettingsCard = new GradientSettingsCard();
    secondLineSettingsCard = new SecondLineSettingsCard();
    secondGradientSettingsCard = new SecondGradientSettingsCard();
    axisSettingsCard = new AxisSettingsCard();

    cards = [
        this.lineSettingsCard, 
        this.gradientSettingsCard, 
        this.secondLineSettingsCard, 
        this.secondGradientSettingsCard,
        this.axisSettingsCard
    ];
}
