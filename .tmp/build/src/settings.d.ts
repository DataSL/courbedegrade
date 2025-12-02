import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
 * Line Settings Card
 */
declare class LineSettingsCard extends FormattingSettingsCard {
    lineColor: formattingSettings.ColorPicker;
    strokeWidth: formattingSettings.NumUpDown;
    showMarkers: formattingSettings.ToggleSwitch;
    markerSize: formattingSettings.NumUpDown;
    lineStyle: formattingSettings.ItemDropdown;
    stepped: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Gradient Settings Card
 */
declare class GradientSettingsCard extends FormattingSettingsCard {
    showGradient: formattingSettings.ToggleSwitch;
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
    strokeWidth2: formattingSettings.NumUpDown;
    showMarkers2: formattingSettings.ToggleSwitch;
    markerSize2: formattingSettings.NumUpDown;
    lineStyle2: formattingSettings.ItemDropdown;
    stepped2: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Second Gradient Settings Card
 */
declare class SecondGradientSettingsCard extends FormattingSettingsCard {
    showGradient2: formattingSettings.ToggleSwitch;
    gradientColor2: formattingSettings.ColorPicker;
    gradientIntensity2: formattingSettings.NumUpDown;
    gradientDirection2: formattingSettings.ItemDropdown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * X Axis Settings Card
 */
declare class XAxisSettingsCard extends FormattingSettingsCard {
    show: formattingSettings.ToggleSwitch;
    axisColor: formattingSettings.ColorPicker;
    fontSize: formattingSettings.NumUpDown;
    fontFamily: formattingSettings.ItemDropdown;
    title: formattingSettings.ToggleSwitch;
    titleText: formattingSettings.TextInput;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Y Axis Settings Card
 */
declare class YAxisSettingsCard extends FormattingSettingsCard {
    show: formattingSettings.ToggleSwitch;
    axisColor: formattingSettings.ColorPicker;
    fontSize: formattingSettings.NumUpDown;
    fontFamily: formattingSettings.ItemDropdown;
    title: formattingSettings.ToggleSwitch;
    titleText: formattingSettings.TextInput;
    useYAxisBis: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Grid Settings Card
 */
declare class GridSettingsCard extends FormattingSettingsCard {
    showHorizontal: formattingSettings.ToggleSwitch;
    showVertical: formattingSettings.ToggleSwitch;
    gridColor: formattingSettings.ColorPicker;
    gridThickness: formattingSettings.NumUpDown;
    gridStyle: formattingSettings.ItemDropdown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Data Labels Settings Card
 */
declare class DataLabelsCard extends FormattingSettingsCard {
    show: formattingSettings.ToggleSwitch;
    color: formattingSettings.ColorPicker;
    fontSize: formattingSettings.NumUpDown;
    fontFamily: formattingSettings.ItemDropdown;
    displayUnits: formattingSettings.ItemDropdown;
    precision: formattingSettings.NumUpDown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Legend Settings Card
 */
declare class LegendCard extends FormattingSettingsCard {
    show: formattingSettings.ToggleSwitch;
    position: formattingSettings.ItemDropdown;
    fontColor: formattingSettings.ColorPicker;
    fontSize: formattingSettings.NumUpDown;
    fontFamily: formattingSettings.ItemDropdown;
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
    xAxisSettings: XAxisSettingsCard;
    yAxisSettings: YAxisSettingsCard;
    gridSettings: GridSettingsCard;
    dataLabels: DataLabelsCard;
    legend: LegendCard;
    cards: (LineSettingsCard | GradientSettingsCard | SecondLineSettingsCard | SecondGradientSettingsCard | XAxisSettingsCard | YAxisSettingsCard | GridSettingsCard | DataLabelsCard | LegendCard)[];
}
export {};
