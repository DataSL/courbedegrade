import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
 * Line Settings Card
 */
declare class LineSettingsCard extends FormattingSettingsCard {
    lineColor: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Gradient Settings Card
 */
declare class GradientSettingsCard extends FormattingSettingsCard {
    gradientColor: formattingSettings.ColorPicker;
    gradientIntensity: formattingSettings.NumUpDown;
    gradientDirection: formattingSettings.ItemDropdown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Second Line Settings Card
 */
declare class SecondLineSettingsCard extends FormattingSettingsCard {
    lineColor2: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Second Gradient Settings Card
 */
declare class SecondGradientSettingsCard extends FormattingSettingsCard {
    gradientColor2: formattingSettings.ColorPicker;
    gradientIntensity2: formattingSettings.NumUpDown;
    gradientDirection2: formattingSettings.ItemDropdown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Axis Settings Card
 */
declare class AxisSettingsCard extends FormattingSettingsCard {
    useYAxisBis: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Visual settings model class
 */
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    lineSettingsCard: LineSettingsCard;
    gradientSettingsCard: GradientSettingsCard;
    secondLineSettingsCard: SecondLineSettingsCard;
    secondGradientSettingsCard: SecondGradientSettingsCard;
    axisSettingsCard: AxisSettingsCard;
    cards: (LineSettingsCard | GradientSettingsCard | SecondLineSettingsCard | SecondGradientSettingsCard | AxisSettingsCard)[];
}
export {};
