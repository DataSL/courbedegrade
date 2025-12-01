import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import "../style/visual.less";
export declare class Visual implements IVisual {
    private target;
    private svg;
    private mainGroup;
    private pathArea;
    private pathLine;
    private gradientStopTop;
    private gradientStopBottom;
    private axisGroup;
    private margin;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    private formatNumber;
    private formatDate;
}
