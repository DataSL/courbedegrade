import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import "../style/visual.less";
export declare class Visual implements IVisual {
    private target;
    private svg;
    private mainGroup;
    private axisGroup;
    private linesGroup;
    private tooltip;
    private margin;
    private formattingSettings;
    private formattingSettingsService;
    private host;
    private selectionManager;
    private dataView;
    private licenseManager;
    private currentUserValidPlans;
    private hasServicePlans;
    private isLicenseUnsupportedEnv;
    private isNotificationDisplayed;
    private defaultNotificationType;
    constructor(options: VisualConstructorOptions);
    /**
     * Récupère les informations de licence de l'utilisateur via l'API officielle Power BI
     * Utilise getAvailableServicePlans() pour obtenir les plans de service
     */
    private retrieveLicenseInfo;
    /**
     * Vérifie les licences en mode production (AppSource)
     * Cette méthode doit être appelée uniquement après publication sur AppSource
     */
    private checkLicenseInProduction;
    /**
     * Affiche les notifications de licence appropriées selon le statut
     */
    private notifyLicenseStatus;
    /**
     * Affiche la notification pour environnement non supporté
     */
    private showUnsupportedEnvNotification;
    /**
     * Affiche la notification pour licence requise
     * Peut utiliser General (icône) ou VisualIsBlocked (overlay complet)
     */
    private showLicenseRequiredNotification;
    /**
     * Affiche une notification pour une fonctionnalité bloquée
     * @param featureName Nom de la fonctionnalité bloquée
     */
    private notifyFeatureBlocked;
    private showTooltip;
    private hideTooltip;
    private getNiceStep;
    update(options: VisualUpdateOptions): void;
    private formatDataLabel;
    private buildSmoothPath;
    private buildSteppedPath;
    getFormattingModel(): powerbi.visuals.FormattingModel;
    private applyGradientDirection;
    private formatNumber;
    private formatYAxisValue;
    private formatDate;
}
