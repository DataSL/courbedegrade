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
 * Visual settings model class
 */
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    lineSettingsCard: LineSettingsCard;
    gradientSettingsCard: GradientSettingsCard;
    cards: (LineSettingsCard | GradientSettingsCard)[];
}
export {};
