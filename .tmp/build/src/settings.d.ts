import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
 * Generic Line Settings Card
 */
declare class LineSettingsCard extends FormattingSettingsCard {
    lineColor: formattingSettings.ColorPicker;
    strokeWidth: formattingSettings.NumUpDown;
    showMarkers: formattingSettings.ToggleSwitch;
    markerSize: formattingSettings.NumUpDown;
    lineStyle: formattingSettings.ItemDropdown;
    stepped: formattingSettings.ToggleSwitch;
    slices: Array<FormattingSettingsSlice>;
    constructor(name: string, displayName: string, defaultColor: string);
}
/**
 * Generic Gradient Settings Card
 */
declare class GradientSettingsCard extends FormattingSettingsCard {
    showGradient: formattingSettings.ToggleSwitch;
    gradientColor: formattingSettings.ColorPicker;
    gradientIntensity: formattingSettings.NumUpDown;
    gradientDirection: formattingSettings.ItemDropdown;
    slices: Array<FormattingSettingsSlice>;
    constructor(name: string, displayName: string, defaultColor: string);
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
    sortOrder: formattingSettings.ItemDropdown;
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
    displayUnits: formattingSettings.ItemDropdown;
    precision: formattingSettings.NumUpDown;
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
    private defaultColors;
    lineSettings1: LineSettingsCard;
    gradientSettings1: GradientSettingsCard;
    lineSettings2: LineSettingsCard;
    gradientSettings2: GradientSettingsCard;
    lineSettings3: LineSettingsCard;
    gradientSettings3: GradientSettingsCard;
    lineSettings4: LineSettingsCard;
    gradientSettings4: GradientSettingsCard;
    lineSettings5: LineSettingsCard;
    gradientSettings5: GradientSettingsCard;
    lineSettings6: LineSettingsCard;
    gradientSettings6: GradientSettingsCard;
    lineSettings7: LineSettingsCard;
    gradientSettings7: GradientSettingsCard;
    lineSettings8: LineSettingsCard;
    gradientSettings8: GradientSettingsCard;
    lineSettings9: LineSettingsCard;
    gradientSettings9: GradientSettingsCard;
    lineSettings10: LineSettingsCard;
    gradientSettings10: GradientSettingsCard;
    xAxisSettings: XAxisSettingsCard;
    yAxisSettings: YAxisSettingsCard;
    gridSettings: GridSettingsCard;
    dataLabels: DataLabelsCard;
    legend: LegendCard;
    cards: (LineSettingsCard | GradientSettingsCard | XAxisSettingsCard | YAxisSettingsCard | GridSettingsCard | DataLabelsCard | LegendCard)[];
}
export {};
