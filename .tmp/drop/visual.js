var courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignmentGroup: () => (/* binding */ AlignmentGroup),
/* harmony export */   AutoDropdown: () => (/* binding */ AutoDropdown),
/* harmony export */   AutoFlagsSelection: () => (/* binding */ AutoFlagsSelection),
/* harmony export */   CardGroupEntity: () => (/* binding */ CardGroupEntity),
/* harmony export */   ColorPicker: () => (/* binding */ ColorPicker),
/* harmony export */   CompositeCard: () => (/* binding */ CompositeCard),
/* harmony export */   CompositeSlice: () => (/* binding */ CompositeSlice),
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   ContainerItem: () => (/* binding */ ContainerItem),
/* harmony export */   DatePicker: () => (/* binding */ DatePicker),
/* harmony export */   DurationPicker: () => (/* binding */ DurationPicker),
/* harmony export */   ErrorRangeControl: () => (/* binding */ ErrorRangeControl),
/* harmony export */   FieldPicker: () => (/* binding */ FieldPicker),
/* harmony export */   FontControl: () => (/* binding */ FontControl),
/* harmony export */   FontPicker: () => (/* binding */ FontPicker),
/* harmony export */   GradientBar: () => (/* binding */ GradientBar),
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   ImageUpload: () => (/* binding */ ImageUpload),
/* harmony export */   ItemDropdown: () => (/* binding */ ItemDropdown),
/* harmony export */   ItemFlagsSelection: () => (/* binding */ ItemFlagsSelection),
/* harmony export */   ListEditor: () => (/* binding */ ListEditor),
/* harmony export */   MarginPadding: () => (/* binding */ MarginPadding),
/* harmony export */   Model: () => (/* binding */ Model),
/* harmony export */   NumUpDown: () => (/* binding */ NumUpDown),
/* harmony export */   ReadOnlyText: () => (/* binding */ ReadOnlyText),
/* harmony export */   ShapeMapSelector: () => (/* binding */ ShapeMapSelector),
/* harmony export */   SimpleCard: () => (/* binding */ SimpleCard),
/* harmony export */   SimpleSlice: () => (/* binding */ SimpleSlice),
/* harmony export */   Slider: () => (/* binding */ Slider),
/* harmony export */   TextArea: () => (/* binding */ TextArea),
/* harmony export */   TextInput: () => (/* binding */ TextInput),
/* harmony export */   ToggleSwitch: () => (/* binding */ ToggleSwitch)
/* harmony export */ });
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/FormattingSettingsUtils */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js");
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
            descriptor: _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__.getDescriptor(objectName, this),
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
        this.value = _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__.getPropertyValue(this, newValue, this.value);
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
class ContainerItem extends NamedEntity {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattingSettingsService: () => (/* binding */ FormattingSettingsService),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingSettingsComponents */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js");

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
                if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.CompositeCard)
                    (_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard ? [card] : card.groups);
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
            const isSimpleCard = card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard;
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
        if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.CompositeCard && card.topLevelSlice)
            revertToDefaultDescriptors.push(...(_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.getRevertToDefaultDescriptor(card.name));
        const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard ?
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

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattingSettingsService: () => (/* reexport safe */ _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   formattingSettings: () => (/* reexport module object */ _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingSettingsComponents */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js");
/* harmony import */ var _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormattingSettingsService */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDescriptor: () => (/* binding */ getDescriptor),
/* harmony export */   getPropertyValue: () => (/* binding */ getPropertyValue)
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

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualFormattingSettingsModel: () => (/* binding */ VisualFormattingSettingsModel)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! powerbi-visuals-utils-formattingmodel */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js");
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


var FormattingSettingsCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.SimpleCard;
var FormattingSettingsModel = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.Model;
/**
 * Generic Line Settings Card
 */
class LineSettingsCard extends FormattingSettingsCard {
    lineColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "lineColor",
        displayName: "Couleur de la ligne",
        value: { value: "#3B60C4" }
    });
    strokeWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "strokeWidth",
        displayName: "Épaisseur",
        value: 3
    });
    showMarkers = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "showMarkers",
        displayName: "Afficher les marqueurs",
        value: false
    });
    markerSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "markerSize",
        displayName: "Taille des marqueurs",
        value: 5
    });
    lineStyle = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
        name: "lineStyle",
        displayName: "Style de ligne",
        items: [
            { value: "solid", displayName: "Continu" },
            { value: "dashed", displayName: "Pointillés" },
            { value: "dotted", displayName: "Points" }
        ],
        value: { value: "solid", displayName: "Continu" }
    });
    stepped = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "stepped",
        displayName: "Ligne en escalier",
        value: false
    });
    slices = [
        this.lineColor,
        this.strokeWidth,
        this.lineStyle,
        this.showMarkers,
        this.markerSize,
        this.stepped
    ];
    constructor(name, displayName, defaultColor) {
        super();
        this.name = name;
        this.displayName = displayName;
        this.lineColor.value.value = defaultColor;
    }
}
/**
 * Generic Gradient Settings Card
 */
class GradientSettingsCard extends FormattingSettingsCard {
    showGradient = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "showGradient",
        displayName: "Afficher le dégradé",
        value: true
    });
    gradientColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "gradientColor",
        displayName: "Couleur du dégradé",
        value: { value: "#3B60C4" }
    });
    gradientIntensity = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "gradientIntensity",
        displayName: "Intensité (0-1)",
        value: 0.3
    });
    gradientDirection = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
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
    slices = [
        this.showGradient,
        this.gradientColor,
        this.gradientIntensity,
        this.gradientDirection
    ];
    constructor(name, displayName, defaultColor) {
        super();
        this.name = name;
        this.displayName = displayName;
        this.gradientColor.value.value = defaultColor;
    }
}
/**
 * X Axis Settings Card
 */
class XAxisSettingsCard extends FormattingSettingsCard {
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher l'axe X",
        value: true
    });
    axisColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "axisColor",
        displayName: "Couleur",
        value: { value: "#666666" }
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 11
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
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
    title = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "title",
        displayName: "Afficher le titre",
        value: false
    });
    titleText = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
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
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher l'axe Y",
        value: true
    });
    axisColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "axisColor",
        displayName: "Couleur",
        value: { value: "#666666" }
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 11
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
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
    title = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "title",
        displayName: "Afficher le titre",
        value: false
    });
    titleText = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
        name: "titleText",
        displayName: "Texte du titre",
        value: "",
        placeholder: "Titre de l'axe Y"
    });
    displayUnits = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
        name: "displayUnits",
        displayName: "Unités d'affichage",
        items: [
            { value: "0", displayName: "Auto" },
            { value: "1", displayName: "Aucun" },
            { value: "1000", displayName: "Milliers (K)" },
            { value: "1000000", displayName: "Millions (M)" },
            { value: "1000000000", displayName: "Milliards (Mds)" }
        ],
        value: { value: "0", displayName: "Auto" }
    });
    precision = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "precision",
        displayName: "Décimales",
        value: 0
    });
    useYAxisBis = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
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
        this.displayUnits,
        this.precision,
        this.title,
        this.titleText,
        this.useYAxisBis
    ];
}
/**
 * Grid Settings Card
 */
class GridSettingsCard extends FormattingSettingsCard {
    showHorizontal = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "showHorizontal",
        displayName: "Grille horizontale",
        value: true
    });
    showVertical = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "showVertical",
        displayName: "Grille verticale",
        value: false
    });
    gridColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "gridColor",
        displayName: "Couleur de la grille",
        value: { value: "#f0f0f0" }
    });
    gridThickness = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "gridThickness",
        displayName: "Épaisseur",
        value: 1
    });
    gridStyle = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
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
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher les étiquettes",
        value: false
    });
    color = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "color",
        displayName: "Couleur",
        value: { value: "#000000" }
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 9
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
        name: "fontFamily",
        displayName: "Famille de police",
        items: [
            { value: "Segoe UI", displayName: "Segoe UI" },
            { value: "Arial", displayName: "Arial" },
            { value: "Courier New", displayName: "Courier New" }
        ],
        value: { value: "Segoe UI", displayName: "Segoe UI" }
    });
    displayUnits = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
        name: "displayUnits",
        displayName: "Unités d'affichage",
        items: [
            { value: "0", displayName: "Auto" },
            { value: "1", displayName: "Aucun" },
            { value: "1000", displayName: "Milliers (K)" },
            { value: "1000000", displayName: "Millions (M)" },
            { value: "1000000000", displayName: "Milliards (Mds)" }
        ],
        value: { value: "0", displayName: "Auto" }
    });
    precision = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
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
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher la légende",
        value: true
    });
    position = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
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
    fontColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "fontColor",
        displayName: "Couleur",
        value: { value: "#666666" }
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 10
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
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
    // Palette par défaut
    defaultColors = ["#3B60C4", "#E94F37", "#44BBA4", "#F7B538", "#DB5461", "#3F88C5", "#7D4E57", "#D66853", "#212D40", "#11151C"];
    lineSettings1 = new LineSettingsCard("lineSettings1", "Ligne 1", this.defaultColors[0]);
    gradientSettings1 = new GradientSettingsCard("gradientSettings1", "Dégradé 1", this.defaultColors[0]);
    lineSettings2 = new LineSettingsCard("lineSettings2", "Ligne 2", this.defaultColors[1]);
    gradientSettings2 = new GradientSettingsCard("gradientSettings2", "Dégradé 2", this.defaultColors[1]);
    lineSettings3 = new LineSettingsCard("lineSettings3", "Ligne 3", this.defaultColors[2]);
    gradientSettings3 = new GradientSettingsCard("gradientSettings3", "Dégradé 3", this.defaultColors[2]);
    lineSettings4 = new LineSettingsCard("lineSettings4", "Ligne 4", this.defaultColors[3]);
    gradientSettings4 = new GradientSettingsCard("gradientSettings4", "Dégradé 4", this.defaultColors[3]);
    lineSettings5 = new LineSettingsCard("lineSettings5", "Ligne 5", this.defaultColors[4]);
    gradientSettings5 = new GradientSettingsCard("gradientSettings5", "Dégradé 5", this.defaultColors[4]);
    lineSettings6 = new LineSettingsCard("lineSettings6", "Ligne 6", this.defaultColors[5]);
    gradientSettings6 = new GradientSettingsCard("gradientSettings6", "Dégradé 6", this.defaultColors[5]);
    lineSettings7 = new LineSettingsCard("lineSettings7", "Ligne 7", this.defaultColors[6]);
    gradientSettings7 = new GradientSettingsCard("gradientSettings7", "Dégradé 7", this.defaultColors[6]);
    lineSettings8 = new LineSettingsCard("lineSettings8", "Ligne 8", this.defaultColors[7]);
    gradientSettings8 = new GradientSettingsCard("gradientSettings8", "Dégradé 8", this.defaultColors[7]);
    lineSettings9 = new LineSettingsCard("lineSettings9", "Ligne 9", this.defaultColors[8]);
    gradientSettings9 = new GradientSettingsCard("gradientSettings9", "Dégradé 9", this.defaultColors[8]);
    lineSettings10 = new LineSettingsCard("lineSettings10", "Ligne 10", this.defaultColors[9]);
    gradientSettings10 = new GradientSettingsCard("gradientSettings10", "Dégradé 10", this.defaultColors[9]);
    xAxisSettings = new XAxisSettingsCard();
    yAxisSettings = new YAxisSettingsCard();
    gridSettings = new GridSettingsCard();
    dataLabels = new DataLabelsCard();
    legend = new LegendCard();
    cards = [
        this.lineSettings1, this.gradientSettings1,
        this.lineSettings2, this.gradientSettings2,
        this.lineSettings3, this.gradientSettings3,
        this.lineSettings4, this.gradientSettings4,
        this.lineSettings5, this.gradientSettings5,
        this.lineSettings6, this.gradientSettings6,
        this.lineSettings7, this.gradientSettings7,
        this.lineSettings8, this.gradientSettings8,
        this.lineSettings9, this.gradientSettings9,
        this.lineSettings10, this.gradientSettings10,
        this.xAxisSettings,
        this.yAxisSettings,
        this.gridSettings,
        this.dataLabels,
        this.legend
    ];
}


/***/ }),

/***/ "./src/visual.ts":
/*!***********************!*\
  !*** ./src/visual.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Visual: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/settings.ts");
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! powerbi-visuals-utils-formattingmodel */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js");
/* harmony import */ var _style_visual_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/visual.less */ "./style/visual.less");




class Visual {
    target;
    svg;
    mainGroup;
    axisGroup;
    linesGroup;
    tooltip;
    // Marges
    margin = { top: 20, right: 40, bottom: 40, left: 60 };
    // Settings
    formattingSettings;
    formattingSettingsService;
    // Drill down support
    host;
    selectionManager;
    dataView;
    constructor(options) {
        this.target = options.element;
        this.host = options.host;
        this.selectionManager = this.host.createSelectionManager();
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__.FormattingSettingsService();
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
            const mouseEvent = event;
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
    }
    showTooltip(x, y, content) {
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
            }
            else {
                div.textContent = match[1];
            }
            this.tooltip.appendChild(div);
        }
        this.tooltip.style.display = "block";
        this.tooltip.style.left = (x + 10) + "px";
        this.tooltip.style.top = (y - 10) + "px";
    }
    hideTooltip() {
        this.tooltip.style.display = "none";
    }
    getNiceStep(maxValue) {
        if (maxValue === 0)
            return 1;
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
    update(options) {
        const ns = "http://www.w3.org/2000/svg";
        // A. Récupération des données
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical)
            return;
        if (!dataView.categorical.categories || !dataView.categorical.values)
            return;
        this.dataView = dataView;
        const categoryColumns = dataView.categorical.categories;
        const category = categoryColumns[0];
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(_settings__WEBPACK_IMPORTED_MODULE_0__.VisualFormattingSettingsModel, options.dataViews[0]);
        this.svg.setAttribute("width", options.viewport.width.toString());
        this.svg.setAttribute("height", options.viewport.height.toString());
        const cats = categoryColumns[0].values;
        const allSeries = dataView.categorical.values;
        // Paramètres généraux
        const showXAxis = this.formattingSettings.xAxisSettings.show.value;
        const xAxisColor = this.formattingSettings.xAxisSettings.axisColor.value.value;
        const xAxisFontSize = this.formattingSettings.xAxisSettings.fontSize.value;
        const xAxisFontFamily = this.formattingSettings.xAxisSettings.fontFamily.value.value.toString();
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
        // Ajustement dynamique de la marge basse si on a 3 niveaux ou plus (pour afficher Année/Mois/Jour)
        if (categoryColumns.length > 2) {
            this.margin.bottom += 25;
        }
        const drawW = width - this.margin.left - this.margin.right;
        const drawH = height - this.margin.top - this.margin.bottom;
        const getYPos = (val) => drawH - ((val - niceMin) / (niceMax - niceMin) * drawH);
        // C. CALCUL ÉCHELLE Y GLOBALE (Basé sur le MIN et MAX de TOUTES les séries)
        let globalMax = Number.NEGATIVE_INFINITY;
        let globalMin = Number.POSITIVE_INFINITY;
        allSeries.forEach(series => {
            series.values.forEach(v => {
                const val = Number(v);
                if (!isNaN(val)) {
                    if (val > globalMax)
                        globalMax = val;
                    if (val < globalMin)
                        globalMin = val;
                }
            });
        });
        // Si tout est NaN, fallback à 0
        if (!isFinite(globalMax))
            globalMax = 0;
        if (!isFinite(globalMin))
            globalMin = 0;
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
        while (this.axisGroup.firstChild)
            this.axisGroup.removeChild(this.axisGroup.firstChild);
        while (this.linesGroup.firstChild)
            this.linesGroup.removeChild(this.linesGroup.firstChild);
        this.svg.querySelectorAll(".custom-marker").forEach(m => m.remove());
        this.svg.querySelectorAll(".custom-datalabel").forEach(l => l.remove());
        this.svg.querySelectorAll(".custom-hover").forEach(h => h.remove());
        this.svg.querySelectorAll(".legend").forEach(l => l.remove());
        // 1. GRILLE ET AXE Y
        if (showYAxis) {
            for (let val = niceMin; val <= niceMax; val += stepSize) {
                const yPos = drawH - ((val - niceMin) / (niceMax - niceMin) * drawH);
                if (showHorizontalGrid) {
                    const line = document.createElementNS(ns, "line");
                    line.setAttribute("x1", "0");
                    line.setAttribute("x2", drawW.toString());
                    line.setAttribute("y1", yPos.toString());
                    line.setAttribute("y2", yPos.toString());
                    line.setAttribute("stroke", gridColor);
                    line.setAttribute("stroke-width", gridThickness.toString());
                    if (gridStyle === "dashed")
                        line.setAttribute("stroke-dasharray", "4,4");
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
            const step = Math.ceil(cats.length / 10);
            cats.forEach((cat, i) => {
                if (i % step !== 0 && i !== cats.length - 1)
                    return;
                const xPos = (i / (cats.length - 1)) * drawW;
                if (showVerticalGrid) {
                    const line = document.createElementNS(ns, "line");
                    line.setAttribute("x1", xPos.toString());
                    line.setAttribute("x2", xPos.toString());
                    line.setAttribute("y1", "0");
                    line.setAttribute("y2", drawH.toString());
                    line.setAttribute("stroke", gridColor);
                    line.setAttribute("stroke-width", gridThickness.toString());
                    if (gridStyle === "dashed")
                        line.setAttribute("stroke-dasharray", "4,4");
                    this.axisGroup.appendChild(line);
                }
                const text = document.createElementNS(ns, "text");
                text.setAttribute("x", xPos.toString());
                text.setAttribute("y", (drawH + 20).toString());
                if (i === cats.length - 1)
                    text.setAttribute("text-anchor", "end");
                else if (i === 0)
                    text.setAttribute("text-anchor", "start");
                else
                    text.setAttribute("text-anchor", "middle");
                text.setAttribute("fill", xAxisColor);
                text.setAttribute("font-size", xAxisFontSize.toString());
                text.setAttribute("font-family", xAxisFontFamily);
                text.setAttribute("cursor", "pointer");
                // Ajouter le menu contextuel sur les labels de l'axe X
                text.addEventListener('contextmenu', (event) => {
                    const selectionId = this.host.createSelectionIdBuilder()
                        .withCategory(category, i)
                        .createSelectionId();
                    this.selectionManager.showContextMenu(selectionId, {
                        x: event.clientX,
                        y: event.clientY
                    });
                    event.preventDefault();
                    event.stopPropagation();
                });
                // Permettre la sélection au clic sur les labels
                text.addEventListener('click', (event) => {
                    const selectionId = this.host.createSelectionIdBuilder()
                        .withCategory(category, i)
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
                    }
                    else {
                        // Cas standard 2 niveaux (ex: Année, Mois)
                        const tspan2 = document.createElementNS(ns, "tspan");
                        tspan2.textContent = lastLevel;
                        tspan2.setAttribute("x", xPos.toString());
                        tspan2.setAttribute("dy", "1.2em");
                        text.appendChild(tspan2);
                    }
                }
                else {
                    text.textContent = this.formatDate(cats[i].toString());
                }
                this.axisGroup.appendChild(text);
            });
        }
        // 3. BOUCLE SUR LES SÉRIES (LIGNES)
        const legendItems = [];
        // Récupération des paramètres des étiquettes de données
        const showDataLabels = this.formattingSettings.dataLabels.show.value;
        const dataLabelsColor = this.formattingSettings.dataLabels.color.value.value;
        const dataLabelsFontSize = this.formattingSettings.dataLabels.fontSize.value;
        const dataLabelsFontFamily = this.formattingSettings.dataLabels.fontFamily.value.value.toString();
        const dataLabelsDisplayUnits = parseInt(this.formattingSettings.dataLabels.displayUnits.value.value.toString());
        const dataLabelsPrecision = this.formattingSettings.dataLabels.precision.value;
        allSeries.forEach((series, index) => {
            if (index >= 10)
                return;
            const seriesName = series.source.displayName;
            const vals = series.values;
            const lineSettings = this.formattingSettings[`lineSettings${index + 1}`];
            const gradientSettings = this.formattingSettings[`gradientSettings${index + 1}`];
            if (!lineSettings || !gradientSettings)
                return;
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
            const points = cats.map((cat, i) => {
                const x = (i / (cats.length - 1)) * drawW;
                const y = getYPos(Number(vals[i]));
                return [x, y];
            });
            if (points.length < 2)
                return;
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
            // Aire
            const pathArea = document.createElementNS(ns, "path");
            const yZero = getYPos(0);
            const areaD = `${d} L ${points[points.length - 1][0]},${yZero} L ${points[0][0]},${yZero} Z`;
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
            if (lineStyle === "dashed")
                pathLine.setAttribute("stroke-dasharray", "8,4");
            else if (lineStyle === "dotted")
                pathLine.setAttribute("stroke-dasharray", "2,2");
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
                // Créer l'ID de sélection pour ce point
                const selectionId = this.host.createSelectionIdBuilder()
                    .withCategory(category, i)
                    .createSelectionId();
                const hoverCircle = document.createElementNS(ns, "circle");
                hoverCircle.classList.add("custom-hover");
                hoverCircle.setAttribute("cx", (this.margin.left + p[0]).toString());
                hoverCircle.setAttribute("cy", (this.margin.top + p[1]).toString());
                hoverCircle.setAttribute("r", "8");
                hoverCircle.setAttribute("fill", "transparent");
                hoverCircle.setAttribute("cursor", "pointer");
                hoverCircle.addEventListener("mouseenter", (e) => {
                    let tooltipTitle = "";
                    if (categoryColumns.length > 1) {
                        tooltipTitle = categoryColumns.map(c => c.values[i].toString()).join(" ");
                    }
                    else {
                        tooltipTitle = this.formatDate(cats[i].toString());
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
                hoverCircle.addEventListener("mousemove", (e) => {
                    this.tooltip.style.left = (e.pageX + 10) + "px";
                    this.tooltip.style.top = (e.pageY - 10) + "px";
                });
                hoverCircle.addEventListener("mouseleave", () => {
                    this.hideTooltip();
                    this.svg.querySelectorAll(".temp-marker").forEach(m => m.remove());
                });
                // Gestion du clic pour la sélection (nécessaire pour le drill)
                hoverCircle.addEventListener("click", (event) => {
                    // Sélectionner ce point de données
                    this.selectionManager.select(selectionId, event.ctrlKey || event.metaKey);
                    event.stopPropagation();
                });
                // Context menu (clic droit) pour afficher les options de drill
                hoverCircle.addEventListener("contextmenu", (event) => {
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
            }
            else if (legendPosition === "Bottom" || legendPosition === "BottomCenter") {
                legendX = (width - legendItems.length * itemWidth) / 2;
                legendY = height - 20;
            }
            else if (legendPosition === "Left") {
                legendX = 10;
                legendY = height / 2 - (legendItems.length * itemHeight) / 2;
            }
            else if (legendPosition === "Right") {
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
                legendItemGroup.addEventListener('contextmenu', (event) => {
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
                legendItemGroup.addEventListener('click', (event) => {
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
    formatDataLabel(value, displayUnits, precision) {
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
        }
        else if (displayUnits === 1000) {
            formatted = value / 1000;
            suffix = " K";
        }
        else if (displayUnits === 1000000) {
            formatted = value / 1000000;
            suffix = " M";
        }
        else if (displayUnits === 1000000000) {
            formatted = value / 1000000000;
            suffix = " Mds";
        }
        return formatted.toFixed(precision) + suffix;
    }
    buildSmoothPath(points) {
        if (points.length === 0)
            return "";
        let d = `M ${points[0][0]},${points[0][1]}`;
        for (let i = 1; i < points.length; i++) {
            d += ` L ${points[i][0]},${points[i][1]}`;
        }
        return d;
    }
    buildSteppedPath(points) {
        if (points.length === 0)
            return "";
        let d = `M ${points[0][0]},${points[0][1]}`;
        for (let i = 1; i < points.length; i++) {
            d += ` L ${points[i][0]},${points[i - 1][1]} L ${points[i][0]},${points[i][1]}`;
        }
        return d;
    }
    getFormattingModel() {
        // Compter le nombre de séries (champs Values)
        let nbSeries = 1;
        if (this.dataView && this.dataView.categorical && this.dataView.categorical.values) {
            nbSeries = this.dataView.categorical.values.length;
        }
        // Liste dynamique des cards à afficher
        const cards = [];
        // Ajouter seulement les groupes nécessaires
        for (let i = 1; i <= nbSeries; i++) {
            cards.push(this.formattingSettings[`lineSettings${i}`]);
            cards.push(this.formattingSettings[`gradientSettings${i}`]);
        }
        // Ajouter les autres groupes généraux
        cards.push(this.formattingSettings.xAxisSettings, this.formattingSettings.yAxisSettings, this.formattingSettings.gridSettings, this.formattingSettings.dataLabels, this.formattingSettings.legend);
        // Générer le modèle avec uniquement les cards utiles
        return this.formattingSettingsService.buildFormattingModel({ cards });
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
        // Déterminer le nombre de décimales nécessaires
        if (num === 0)
            return "0";
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
    formatYAxisValue(value, displayUnits, precision) {
        let formatted = value;
        let suffix = "";
        const units = parseInt(displayUnits);
        if (units === 0) {
            // Auto : détection automatique
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
        }
        else if (units === 1000) {
            formatted = value / 1000;
            suffix = " K";
        }
        else if (units === 1000000) {
            formatted = value / 1000000;
            suffix = " M";
        }
        else if (units === 1000000000) {
            formatted = value / 1000000000;
            suffix = " Mds";
        }
        // Appliquer la précision
        if (precision === 0) {
            return Math.round(formatted).toLocaleString('fr-FR') + suffix;
        }
        else {
            return formatted.toLocaleString('fr-FR', {
                minimumFractionDigits: precision,
                maximumFractionDigits: precision
            }) + suffix;
        }
    }
    formatDate(value) {
        // Simplement retourner la valeur telle quelle
        // Power BI envoie déjà le bon format selon le niveau de drill
        return value.toString();
    }
}


/***/ }),

/***/ "./style/visual.less":
/*!***************************!*\
  !*** ./style/visual.less ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./.tmp/precompile/visualPlugin.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/visual */ "./src/visual.ts");

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG = {
    name: 'courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG',
    displayName: 'courbedegrade',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__.Visual) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__.Visual(options);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG);

})();

courbedegrade0E5B94303DBB4B71884B9B500B8496FB_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDeEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMscURBQXFELENBQUMsR0FBRyxtREFBbUQsQ0FBQztBQUN6SSxDQUFDO0FBQ0QsaUVBQWUsbURBQW1ELEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5qcyIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uL3NyYy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9zcmMvdmlzdWFsLnRzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uL3N0eWxlL3Zpc3VhbC5sZXNzPzE0YjAiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHLy4vLnRtcC9wcmVjb21waWxlL3Zpc3VhbFBsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBvd2VyYmkgdXRpbHMgY29tcG9uZW50cyBjbGFzc2VzIGZvciBjdXN0b20gdmlzdWFsIGZvcm1hdHRpbmcgcGFuZSBvYmplY3RzXG4gKlxuICovXG5pbXBvcnQgKiBhcyBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIgZnJvbSBcIi4vdXRpbHMvRm9ybWF0dGluZ1NldHRpbmdzVXRpbHNcIjtcbmNsYXNzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBDYXJkR3JvdXBFbnRpdHkgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgTW9kZWwge1xufVxuLyoqIENvbXBvc2l0ZUNhcmQgaXMgdXNlIHRvIHBvcHVsYXRlIGEgY2FyZCBpbnRvIHRoZSBmb3JtYXR0aW5nIHBhbmUgd2l0aCBtdWx0aXBsZSBncm91cHMgKi9cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVDYXJkIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgQ2FyZEdyb3VwRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbn1cbi8qKiBTaW1wbGVDYXJkIGlzIHVzZSB0byBwb3B1bGF0ZSBhIGNhcmQgaW50byB0aGUgZm9ybWF0dGluZyBwYW5lIGluIGEgc2luZ2xlIGdyb3VwICovXG5leHBvcnQgY2xhc3MgU2ltcGxlQ2FyZCBleHRlbmRzIENhcmRHcm91cEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgU2ltcGxlU2xpY2UgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgY29uc3Qgc2xpY2VEaXNwbGF5TmFtZSA9IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGlzcGxheU5hbWVLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRpc3BsYXlOYW1lS2V5KSA6IHRoaXMuZGlzcGxheU5hbWU7XG4gICAgICAgIGNvbnN0IHNsaWNlRGVzY3JpcHRpb24gPSAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRlc2NyaXB0aW9uS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kZXNjcmlwdGlvbktleSkgOiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCBjb21wb25lbnREaXNwbGF5TmFtZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBzbGljZURpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNsaWNlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1aWQ6IG9iamVjdE5hbWUgKyAnLScgKyBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudERpc3BsYXlOYW1lKSwgeyBjb250cm9sOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogY29udHJvbFR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogdGhpcy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpXG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3I6IEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlci5nZXREZXNjcmlwdG9yKG9iamVjdE5hbWUsIHRoaXMpLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogdGhpcy5uYW1lXG4gICAgICAgICAgICB9XTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSAoX2EgPSBkYXRhVmlld09iamVjdHMgPT09IG51bGwgfHwgZGF0YVZpZXdPYmplY3RzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhVmlld09iamVjdHNbb2JqZWN0TmFtZV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVt0aGlzLm5hbWVdO1xuICAgICAgICB0aGlzLnZhbHVlID0gRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyLmdldFByb3BlcnR5VmFsdWUodGhpcywgbmV3VmFsdWUsIHRoaXMudmFsdWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBbGlnbm1lbnRHcm91cCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJBbGlnbm1lbnRHcm91cFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5BbGlnbm1lbnRHcm91cCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG1vZGU6IHRoaXMubW9kZSwgc3VwcG9ydHNOb1NlbGVjdGlvbjogdGhpcy5zdXBwb3J0c05vU2VsZWN0aW9uIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUb2dnbGVTd2l0Y2ggZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVG9nZ2xlU3dpdGNoXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRvZ2dsZVN3aXRjaCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiQ29sb3JQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuQ29sb3JQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBkZWZhdWx0Q29sb3I6IHRoaXMuZGVmYXVsdENvbG9yLCBpc05vRmlsbEl0ZW1TdXBwb3J0ZWQ6IHRoaXMuaXNOb0ZpbGxJdGVtU3VwcG9ydGVkIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOdW1VcERvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTnVtVXBEb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lk51bVVwRG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG9wdGlvbnM6IHRoaXMub3B0aW9ucyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgTnVtVXBEb3duIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJTbGlkZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuU2xpZGVyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRhdGVQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRGF0ZVBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHBsYWNlaG9sZGVyOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLnBsYWNlaG9sZGVyS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5wbGFjZWhvbGRlcktleSkgOiB0aGlzLnBsYWNlaG9sZGVyLCB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEl0ZW1Ecm9wZG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEcm9wZG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ecm9wZG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGl0ZW1zOiB0aGlzLml0ZW1zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBdXRvRHJvcGRvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBtZXJnZVZhbHVlczogdGhpcy5tZXJnZVZhbHVlcywgZmlsdGVyVmFsdWVzOiB0aGlzLmZpbHRlclZhbHVlcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRHVyYXRpb25QaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHVyYXRpb25QaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHVyYXRpb25QaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEVycm9yUmFuZ2VDb250cm9sIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkVycm9yUmFuZ2VDb250cm9sXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkVycm9yUmFuZ2VDb250cm9sICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGaWVsZFBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGaWVsZFBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GaWVsZFBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycywgYWxsb3dNdWx0aXBsZVZhbHVlczogdGhpcy5hbGxvd011bHRpcGxlVmFsdWVzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJdGVtRmxhZ3NTZWxlY3Rpb24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmxhZ3NTZWxlY3Rpb25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmxhZ3NTZWxlY3Rpb24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpdGVtczogdGhpcy5pdGVtcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXV0b0ZsYWdzU2VsZWN0aW9uIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZsYWdzU2VsZWN0aW9uXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZsYWdzU2VsZWN0aW9uICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGV4dElucHV0XCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRleHRJbnB1dCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZXh0QXJlYSBleHRlbmRzIFRleHRJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGV4dEFyZWFcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVGV4dEFyZWEgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZvbnRQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRm9udFBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Gb250UGlja2VyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcmFkaWVudEJhciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJHcmFkaWVudEJhclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5HcmFkaWVudEJhciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiSW1hZ2VVcGxvYWRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuSW1hZ2VVcGxvYWQgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIExpc3RFZGl0b3IgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTGlzdEVkaXRvclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5MaXN0RWRpdG9yICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZWFkT25seVRleHQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiUmVhZE9ubHlUZXh0XCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlJlYWRPbmx5VGV4dCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2hhcGVNYXBTZWxlY3RvciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJTaGFwZU1hcFNlbGVjdG9yXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlNoYXBlTWFwU2VsZWN0b3IgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpc0F6TWFwUmVmZXJlbmNlU2VsZWN0b3I6IHRoaXMuaXNBek1hcFJlZmVyZW5jZVNlbGVjdG9yIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVTbGljZSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICBjb25zdCBjb250cm9sVHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBjb25zdCBjb21wb25lbnREaXNwbGF5TmFtZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRpc3BsYXlOYW1lS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kaXNwbGF5TmFtZUtleSkgOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGVzY3JpcHRpb25LZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRlc2NyaXB0aW9uS2V5KSA6IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1aWQ6IG9iamVjdE5hbWUgKyAnLScgKyBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudERpc3BsYXlOYW1lKSwgeyBjb250cm9sOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogY29udHJvbFR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogdGhpcy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb250Q29udHJvbCBleHRlbmRzIENvbXBvc2l0ZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGb250Q29udHJvbFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Gb250Q29udHJvbCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9udEZhbWlseTogdGhpcy5mb250RmFtaWx5LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBmb250U2l6ZTogdGhpcy5mb250U2l6ZS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgYm9sZDogKF9hID0gdGhpcy5ib2xkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGl0YWxpYzogKF9iID0gdGhpcy5pdGFsaWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgdW5kZXJsaW5lOiAoX2MgPSB0aGlzLnVuZGVybGluZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvbnRGYW1pbHkuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmZvbnRTaXplLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuYm9sZCA/IHRoaXMuYm9sZC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuaXRhbGljID8gdGhpcy5pdGFsaWMuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnVuZGVybGluZSA/IHRoaXMudW5kZXJsaW5lLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSk7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICB0aGlzLmZvbnRGYW1pbHkuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLmZvbnRTaXplLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9hID0gdGhpcy5ib2xkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2IgPSB0aGlzLml0YWxpYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9jID0gdGhpcy51bmRlcmxpbmUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1hcmdpblBhZGRpbmcgZXh0ZW5kcyBDb21wb3NpdGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTWFyZ2luUGFkZGluZ1wiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5NYXJnaW5QYWRkaW5nICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucmlnaHQuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20uZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMucmlnaHQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy50b3AuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5ib3R0b20uZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSk7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHRoaXMubGVmdC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMucmlnaHQuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnRvcC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuYm90dG9tLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckl0ZW0gZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzLmpzLm1hcCIsImltcG9ydCB7IENvbXBvc2l0ZUNhcmQsIFNpbXBsZUNhcmQgfSBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzXCI7XG5leHBvcnQgY2xhc3MgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IobG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgPSBsb2NhbGl6YXRpb25NYW5hZ2VyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCB2aXN1YWwgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbCBmcm9tIG1ldGFkYXRhIGRhdGFWaWV3XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVZpZXdzIG1ldGFkYXRhIGRhdGFWaWV3IG9iamVjdFxuICAgICAqIEByZXR1cm5zIHZpc3VhbCBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsXG4gICAgICovXG4gICAgcG9wdWxhdGVGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCh0eXBlQ2xhc3MsIGRhdGFWaWV3KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGxldCBkZWZhdWx0U2V0dGluZ3MgPSBuZXcgdHlwZUNsYXNzKCk7XG4gICAgICAgIGxldCBkYXRhVmlld09iamVjdHMgPSAoX2EgPSBkYXRhVmlldyA9PT0gbnVsbCB8fCBkYXRhVmlldyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YVZpZXcubWV0YWRhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vYmplY3RzO1xuICAgICAgICBpZiAoZGF0YVZpZXdPYmplY3RzKSB7XG4gICAgICAgICAgICAvLyBsb29wIG92ZXIgZWFjaCBmb3JtYXR0aW5nIHByb3BlcnR5IGFuZCBzZXQgaXRzIG5ldyB2YWx1ZSBpZiBleGlzdHNcbiAgICAgICAgICAgIChfYiA9IGRlZmF1bHRTZXR0aW5ncy5jYXJkcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmQgaW5zdGFuY2VvZiBDb21wb3NpdGVDYXJkKVxuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjYXJkLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQgPyBbY2FyZF0gOiBjYXJkLmdyb3Vwcyk7XG4gICAgICAgICAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGN1cnJlbnQgdG9wIGxldmVsIHRvZ2dsZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IGNhcmRHcm91cEluc3RhbmNlID09PSBudWxsIHx8IGNhcmRHcm91cEluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgKF9kID0gKF9jID0gY2FyZEdyb3VwSW5zdGFuY2UgPT09IG51bGwgfHwgY2FyZEdyb3VwSW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNvbnRhaW5lckl0ZW1zKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gY29udGFpbmVySXRlbSA9PT0gbnVsbCB8fCBjb250YWluZXJJdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250YWluZXJJdGVtLnNsaWNlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTZXR0aW5ncztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgZm9ybWF0dGluZyBtb2RlbCBieSBwYXJzaW5nIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWwgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBwb3dlcmJpIHZpc3VhbCBmb3JtYXR0aW5nIG1vZGVsXG4gICAgICovXG4gICAgYnVpbGRGb3JtYXR0aW5nTW9kZWwoZm9ybWF0dGluZ1NldHRpbmdzTW9kZWwpIHtcbiAgICAgICAgbGV0IGZvcm1hdHRpbmdNb2RlbCA9IHtcbiAgICAgICAgICAgIGNhcmRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBmb3JtYXR0aW5nU2V0dGluZ3NNb2RlbC5jYXJkc1xuICAgICAgICAgICAgLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKVxuICAgICAgICAgICAgLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGxldCBmb3JtYXR0aW5nQ2FyZCA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkLmRpc3BsYXlOYW1lS2V5KSA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkLmRpc3BsYXlOYW1lS2V5KSA6IGNhcmQuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZC5kZXNjcmlwdGlvbktleSkgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZC5kZXNjcmlwdGlvbktleSkgOiBjYXJkLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICAgICAgdWlkOiBjYXJkLm5hbWUgKyBcIi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgYW5hbHl0aWNzUGFuZTogY2FyZC5hbmFseXRpY3NQYW5lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdE5hbWUgPSBjYXJkLm5hbWU7XG4gICAgICAgICAgICBpZiAoY2FyZC50b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcExldmVsVG9nZ2xlU2xpY2UgPSBjYXJkLnRvcExldmVsU2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgdG9wTGV2ZWxUb2dnbGVTbGljZS5zdXBwcmVzc0Rpc3BsYXlOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC50b3BMZXZlbFRvZ2dsZSA9IHRvcExldmVsVG9nZ2xlU2xpY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSBjYXJkLm9uUHJlUHJvY2VzcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoY2FyZCk7XG4gICAgICAgICAgICBjb25zdCBpc1NpbXBsZUNhcmQgPSBjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZDtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChpc1NpbXBsZUNhcmQgP1xuICAgICAgICAgICAgICAgIFtjYXJkXS5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkgOlxuICAgICAgICAgICAgICAgIGNhcmQuZ3JvdXBzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSk7XG4gICAgICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXNcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cFVpZCA9IGNhcmRHcm91cEluc3RhbmNlLm5hbWUgKyBcIi1ncm91cFwiO1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgZ3JvdXAgZm9yIGVhY2ggZ3JvdXBcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nR3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBpc1NpbXBsZUNhcmQgPyB1bmRlZmluZWQgOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWVLZXkpIDogY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpc1NpbXBsZUNhcmQgPyB1bmRlZmluZWQgOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb25LZXkpIDogY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHNsaWNlczogW10sXG4gICAgICAgICAgICAgICAgICAgIHVpZDogZ3JvdXBVaWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiBjYXJkR3JvdXBJbnN0YW5jZS5jb2xsYXBzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXlTYXZlU2xpY2VzOiBjYXJkR3JvdXBJbnN0YW5jZS5kZWxheVNhdmVTbGljZXMsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRSZWFzb246IGNhcmRHcm91cEluc3RhbmNlLmRpc2FibGVkUmVhc29uLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQuZ3JvdXBzLnB1c2goZm9ybWF0dGluZ0dyb3VwKTtcbiAgICAgICAgICAgICAgICAvLyBJbiBjYXNlIGZvcm1hdHRpbmcgbW9kZWwgYWRkcyBkYXRhIHBvaW50cyBvciB0b3AgY2F0ZWdvcmllcyAoTGlrZSB3aGVuIHlvdSBtb2RpZnkgc3BlY2lmaWMgdmlzdWFsIGNhdGVnb3J5IGNvbG9yKS5cbiAgICAgICAgICAgICAgICAvLyB0aGVzZSBjYXRlZ29yaWVzIHVzZSBzYW1lIG9iamVjdCBuYW1lIGFuZCBwcm9wZXJ0eSBuYW1lIGZyb20gY2FwYWJpbGl0aWVzIGFuZCB0aGUgZ2VuZXJhdGVkIHVpZCB3aWxsIGJlIHRoZSBzYW1lIGZvciB0aGVzZSBmb3JtYXR0aW5nIGNhdGVnb3JpZXMgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIC8vIFNvbHV0aW9uID0+IFNhdmUgc2xpY2UgbmFtZXMgdG8gbW9kaWZ5IGVhY2ggc2xpY2UgdWlkIHRvIGJlIHVuaXF1ZSBieSBhZGRpbmcgY291bnRlciB2YWx1ZSB0byB0aGUgbmV3IHNsaWNlIHVpZFxuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWNlTmFtZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGNvbnRhaW5lciBzbGljZSBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJVaWQgPSBncm91cFVpZCArIFwiLWNvbnRhaW5lclwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nQ29udGFpbmVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVyLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lci5kaXNwbGF5TmFtZUtleSkgOiBjb250YWluZXIuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXIuZGVzY3JpcHRpb25LZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVyLmRlc2NyaXB0aW9uS2V5KSA6IGNvbnRhaW5lci5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogY29udGFpbmVyVWlkXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jb250YWluZXJJdGVtcy5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGNvbnRhaW5lciBpdGVtIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVySWVtTmFtZSA9IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkgPyBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5IDogY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckl0ZW1VaWQgPSBjb250YWluZXJVaWQgKyBjb250YWluZXJJZW1OYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRpbmdDb250YWluZXJJdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkpIDogY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogY29udGFpbmVySXRlbVVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgc2xpY2VzIGFuZCBhZGQgdGhlbSB0byBjdXJyZW50IGZvcm1hdHRpbmcgY29udGFpbmVyIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzOiBjb250YWluZXJJdGVtLnNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlczogZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0uc2xpY2VzIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NvbnRhaW5lci5jb250YWluZXJJdGVtcy5wdXNoKGZvcm1hdHRpbmdDb250YWluZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdHcm91cC5jb250YWluZXIgPSBmb3JtYXR0aW5nQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wTGV2ZWxUb2dnbGVTbGljZSA9IGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BMZXZlbFRvZ2dsZVNsaWNlLnN1cHByZXNzRGlzcGxheU5hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGZvcm1hdHRpbmdHcm91cC5kaXNwbGF5TmFtZSA9PSB1bmRlZmluZWQgPyBmb3JtYXR0aW5nQ2FyZCA6IGZvcm1hdHRpbmdHcm91cCkudG9wTGV2ZWxUb2dnbGUgPSB0b3BMZXZlbFRvZ2dsZVNsaWNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgc2xpY2UgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXM6IGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlczogZm9ybWF0dGluZ0dyb3VwLnNsaWNlcyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLnJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gdGhpcy5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQpO1xuICAgICAgICAgICAgZm9ybWF0dGluZ01vZGVsLmNhcmRzLnB1c2goZm9ybWF0dGluZ0NhcmQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRpbmdNb2RlbDtcbiAgICB9XG4gICAgYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzIH0pIHtcbiAgICAgICAgLy8gRmlsdGVyIHNsaWNlcyBiYXNlZCBvbiB0aGVpciB2aXNpYmlsaXR5XG4gICAgICAgIHNsaWNlcyA9PT0gbnVsbCB8fCBzbGljZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtYXR0aW5nU2xpY2UgPSBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICBpZiAoZm9ybWF0dGluZ1NsaWNlKSB7XG4gICAgICAgICAgICAgICAgLy8gTW9kaWZ5IGZvcm1hdHRpbmcgc2xpY2UgdWlkIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgIGlmIChzbGljZU5hbWVzW3NsaWNlLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdKys7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdTbGljZS51aWQgPSBgJHtmb3JtYXR0aW5nU2xpY2UudWlkfS0ke3NsaWNlTmFtZXNbc2xpY2UubmFtZV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ1NsaWNlcy5wdXNoKGZvcm1hdHRpbmdTbGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBQcm9jZWVkZWQgc2xpY2UgbmFtZXMgYXJlIHNhdmVkIHRvIHByZXZlbnQgZHVwbGljYXRlZCBkZWZhdWx0IGRlc2NyaXB0b3JzIGluIGNhc2Ugb2YgdXNpbmcgXG4gICAgICAgIC8vIGZvcm1hdHRpbmcgY2F0ZWdvcmllcyAmIHNlbGVjdG9ycywgc2luY2UgdGhleSBoYXZlIHRoZSBzYW1lIGRlc2NyaXB0b3Igb2JqZWN0TmFtZSBhbmQgcHJvcGVydHlOYW1lXG4gICAgICAgIGNvbnN0IHNsaWNlTmFtZXMgPSB7fTtcbiAgICAgICAgbGV0IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGxldCBjYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgICAgICBsZXQgY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBpZiAoY2FyZCBpbnN0YW5jZW9mIENvbXBvc2l0ZUNhcmQgJiYgY2FyZC50b3BMZXZlbFNsaWNlKVxuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMucHVzaCguLi4oX2EgPSBjYXJkLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSkpO1xuICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQgP1xuICAgICAgICAgICAgW2NhcmRdLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSA6XG4gICAgICAgICAgICBjYXJkLmdyb3Vwcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkpO1xuICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXMuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBjYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gdGhpcy5nZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSwgY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzLCBzbGljZU5hbWVzLCBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKTtcbiAgICAgICAgICAgIChfYiA9IChfYSA9IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbnRhaW5lckl0ZW1zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdCh0aGlzLmdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lLCBjb250YWluZXJJdGVtLnNsaWNlcywgc2xpY2VOYW1lcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5wdXNoKC4uLmNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICB9XG4gICAgZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSwgc2xpY2VzLCBzbGljZU5hbWVzLCB0b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgIGxldCByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBpZiAodG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgc2xpY2VOYW1lc1t0b3BMZXZlbFNsaWNlLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHRvcExldmVsU2xpY2UuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHNsaWNlcyA9PT0gbnVsbCB8fCBzbGljZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlcy5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNsaWNlICYmICFzbGljZU5hbWVzW3NsaWNlLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQoc2xpY2UuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzLm1hcCIsImltcG9ydCAqIGFzIGZvcm1hdHRpbmdTZXR0aW5ncyBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzXCI7XG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlXCI7XG5leHBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MsIEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQnVpbGQgYW5kIHJldHVybiBmb3JtYXR0aW5nIGRlc2NyaXB0b3IgZm9yIHNpbXBsZSBzbGljZVxuICpcbiAqIEBwYXJhbSBvYmplY3ROYW1lIE9iamVjdCBuYW1lIGZyb20gY2FwYWJpbGl0aWVzXG4gKiBAcGFyYW0gc2xpY2UgZm9ybWF0dGluZyBzaW1wbGUgc2xpY2VcbiAqIEByZXR1cm5zIHNpbXBsZSBzbGljZSBmb3JtYXR0aW5nIGRlc2NyaXB0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlc2NyaXB0b3Iob2JqZWN0TmFtZSwgc2xpY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICBwcm9wZXJ0eU5hbWU6IHNsaWNlLm5hbWUsXG4gICAgICAgIHNlbGVjdG9yOiBzbGljZS5zZWxlY3RvcixcbiAgICAgICAgYWx0Q29uc3RhbnRWYWx1ZVNlbGVjdG9yOiBzbGljZS5hbHRDb25zdGFudFNlbGVjdG9yLFxuICAgICAgICBpbnN0YW5jZUtpbmQ6IHNsaWNlLmluc3RhbmNlS2luZFxuICAgIH07XG59XG4vKipcbiAqIEdldCBwcm9wZXJ0eSB2YWx1ZSBmcm9tIGRhdGF2aWV3IG9iamVjdHMgaWYgZXhpc3RzXG4gKiBFbHNlIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZSBmcm9tIGZvcm1hdHRpbmcgc2V0dGluZ3Mgb2JqZWN0XG4gKlxuICogQHBhcmFtIHZhbHVlIGRhdGF2aWV3IG9iamVjdCB2YWx1ZVxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBmb3JtYXR0aW5nIHNldHRpbmdzIGRlZmF1bHQgdmFsdWVcbiAqIEByZXR1cm5zIGZvcm1hdHRpbmcgcHJvcGVydHkgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUoc2xpY2UsIHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmICF2YWx1ZS5zb2xpZCkpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLnNvbGlkKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWUuc29saWQuY29sb3IgfTtcbiAgICB9XG4gICAgaWYgKHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5pdGVtcykge1xuICAgICAgICBsZXQgaXRlbXNBcnJheSA9IHNsaWNlLml0ZW1zO1xuICAgICAgICByZXR1cm4gaXRlbXNBcnJheS5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PSB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzLm1hcCIsIi8qXHJcbiAqICBQb3dlciBCSSBWaXN1YWxpemF0aW9uc1xyXG4gKlxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb25cclxuICogIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBNSVQgTGljZW5zZVxyXG4gKlxyXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJcIlNvZnR3YXJlXCJcIiksIHRvIGRlYWxcclxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAqQVMgSVMqLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuICogIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncyB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcblxyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5TaW1wbGVDYXJkO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzU2xpY2UgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2xpY2U7XHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5Nb2RlbDtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmljIExpbmUgU2V0dGluZ3MgQ2FyZFxyXG4gKi9cclxuY2xhc3MgTGluZVNldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbGluZUNvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJsaW5lQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDb3VsZXVyIGRlIGxhIGxpZ25lXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzNCNjBDNFwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN0cm9rZVdpZHRoID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwic3Ryb2tlV2lkdGhcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLDiXBhaXNzZXVyXCIsXHJcbiAgICAgICAgdmFsdWU6IDNcclxuICAgIH0pO1xyXG5cclxuICAgIHNob3dNYXJrZXJzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic2hvd01hcmtlcnNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsZXMgbWFycXVldXJzXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXJrZXJTaXplID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwibWFya2VyU2l6ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRhaWxsZSBkZXMgbWFycXVldXJzXCIsXHJcbiAgICAgICAgdmFsdWU6IDVcclxuICAgIH0pO1xyXG5cclxuICAgIGxpbmVTdHlsZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImxpbmVTdHlsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN0eWxlIGRlIGxpZ25lXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJzb2xpZFwiLCBkaXNwbGF5TmFtZTogXCJDb250aW51XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkYXNoZWRcIiwgZGlzcGxheU5hbWU6IFwiUG9pbnRpbGzDqXNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImRvdHRlZFwiLCBkaXNwbGF5TmFtZTogXCJQb2ludHNcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJzb2xpZFwiLCBkaXNwbGF5TmFtZTogXCJDb250aW51XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc3RlcHBlZCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInN0ZXBwZWRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJMaWduZSBlbiBlc2NhbGllclwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5saW5lQ29sb3IsIFxyXG4gICAgICAgIHRoaXMuc3Ryb2tlV2lkdGgsIFxyXG4gICAgICAgIHRoaXMubGluZVN0eWxlLFxyXG4gICAgICAgIHRoaXMuc2hvd01hcmtlcnMsIFxyXG4gICAgICAgIHRoaXMubWFya2VyU2l6ZSxcclxuICAgICAgICB0aGlzLnN0ZXBwZWRcclxuICAgIF07XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nLCBkZWZhdWx0Q29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XHJcbiAgICAgICAgdGhpcy5saW5lQ29sb3IudmFsdWUudmFsdWUgPSBkZWZhdWx0Q29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmljIEdyYWRpZW50IFNldHRpbmdzIENhcmRcclxuICovXHJcbmNsYXNzIEdyYWRpZW50U2V0dGluZ3NDYXJkIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBzaG93R3JhZGllbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93R3JhZGllbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsZSBkw6lncmFkw6lcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgZ3JhZGllbnRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiZ3JhZGllbnRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgZHUgZMOpZ3JhZMOpXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzNCNjBDNFwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGdyYWRpZW50SW50ZW5zaXR5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZ3JhZGllbnRJbnRlbnNpdHlcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJJbnRlbnNpdMOpICgwLTEpXCIsXHJcbiAgICAgICAgdmFsdWU6IDAuM1xyXG4gICAgfSk7XHJcblxyXG4gICAgZ3JhZGllbnREaXJlY3Rpb24gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJncmFkaWVudERpcmVjdGlvblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkRpcmVjdGlvblwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwidmVydGljYWxcIiwgZGlzcGxheU5hbWU6IFwiSGF1dCDihpIgQmFzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJ2ZXJ0aWNhbC1yZXZlcnNlXCIsIGRpc3BsYXlOYW1lOiBcIkJhcyDihpIgSGF1dFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiaG9yaXpvbnRhbFwiLCBkaXNwbGF5TmFtZTogXCJHYXVjaGUg4oaSIERyb2l0ZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiaG9yaXpvbnRhbC1yZXZlcnNlXCIsIGRpc3BsYXlOYW1lOiBcIkRyb2l0ZSDihpIgR2F1Y2hlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkaWFnb25hbFwiLCBkaXNwbGF5TmFtZTogXCJEaWFnb25hbGUg4oaYXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkaWFnb25hbC1yZXZlcnNlXCIsIGRpc3BsYXlOYW1lOiBcIkRpYWdvbmFsZSDihplcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJ2ZXJ0aWNhbFwiLCBkaXNwbGF5TmFtZTogXCJIYXV0IOKGkiBCYXNcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3dHcmFkaWVudCxcclxuICAgICAgICB0aGlzLmdyYWRpZW50Q29sb3IsIFxyXG4gICAgICAgIHRoaXMuZ3JhZGllbnRJbnRlbnNpdHksIFxyXG4gICAgICAgIHRoaXMuZ3JhZGllbnREaXJlY3Rpb25cclxuICAgIF07XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nLCBkZWZhdWx0Q29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XHJcbiAgICAgICAgdGhpcy5ncmFkaWVudENvbG9yLnZhbHVlLnZhbHVlID0gZGVmYXVsdENvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogWCBBeGlzIFNldHRpbmdzIENhcmRcclxuICovXHJcbmNsYXNzIFhBeGlzU2V0dGluZ3NDYXJkIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBzaG93ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic2hvd1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyIGwnYXhlIFhcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXhpc0NvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJheGlzQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDb3VsZXVyXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzY2NjY2NlwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRTaXplID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUYWlsbGUgZHUgdGV4dGVcIixcclxuICAgICAgICB2YWx1ZTogMTFcclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRGYW1pbHkgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRmFtaWxsZSBkZSBwb2xpY2VcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJBcmlhbFwiLCBkaXNwbGF5TmFtZTogXCJBcmlhbFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291cmllciBOZXdcIiwgZGlzcGxheU5hbWU6IFwiQ291cmllciBOZXdcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkdlb3JnaWFcIiwgZGlzcGxheU5hbWU6IFwiR2VvcmdpYVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiVmVyZGFuYVwiLCBkaXNwbGF5TmFtZTogXCJWZXJkYW5hXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiU2Vnb2UgVUlcIiwgZGlzcGxheU5hbWU6IFwiU2Vnb2UgVUlcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aXRsZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInRpdGxlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbGUgdGl0cmVcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRpdGxlVGV4dCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICBuYW1lOiBcInRpdGxlVGV4dFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHRlIGR1IHRpdHJlXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiVGl0cmUgZGUgbCdheGUgWFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcInhBeGlzU2V0dGluZ3NcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkF4ZSBYXCI7XHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3csXHJcbiAgICAgICAgdGhpcy5heGlzQ29sb3IsXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSxcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHksXHJcbiAgICAgICAgdGhpcy50aXRsZSxcclxuICAgICAgICB0aGlzLnRpdGxlVGV4dFxyXG4gICAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFkgQXhpcyBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBZQXhpc1NldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsJ2F4ZSBZXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGF4aXNDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYXhpc0NvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ291bGV1clwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiM2NjY2NjZcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGFpbGxlIGR1IHRleHRlXCIsXHJcbiAgICAgICAgdmFsdWU6IDExXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZhbWlsbGUgZGUgcG9saWNlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQXJpYWxcIiwgZGlzcGxheU5hbWU6IFwiQXJpYWxcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkNvdXJpZXIgTmV3XCIsIGRpc3BsYXlOYW1lOiBcIkNvdXJpZXIgTmV3XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJHZW9yZ2lhXCIsIGRpc3BsYXlOYW1lOiBcIkdlb3JnaWFcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlZlcmRhbmFcIiwgZGlzcGxheU5hbWU6IFwiVmVyZGFuYVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyIGxlIHRpdHJlXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aXRsZVRleHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZVRleHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0ZSBkdSB0aXRyZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlRpdHJlIGRlIGwnYXhlIFlcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlzcGxheVVuaXRzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZGlzcGxheVVuaXRzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVW5pdMOpcyBkJ2FmZmljaGFnZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMFwiLCBkaXNwbGF5TmFtZTogXCJBdXRvXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIxXCIsIGRpc3BsYXlOYW1lOiBcIkF1Y3VuXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIxMDAwXCIsIGRpc3BsYXlOYW1lOiBcIk1pbGxpZXJzIChLKVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMDAwMFwiLCBkaXNwbGF5TmFtZTogXCJNaWxsaW9ucyAoTSlcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDAwMDAwMDBcIiwgZGlzcGxheU5hbWU6IFwiTWlsbGlhcmRzIChNZHMpXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiMFwiLCBkaXNwbGF5TmFtZTogXCJBdXRvXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJlY2lzaW9uID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwicHJlY2lzaW9uXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRMOpY2ltYWxlc1wiLFxyXG4gICAgICAgIHZhbHVlOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VZQXhpc0JpcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInVzZVlBeGlzQmlzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgYXhlIFkgYmlzXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcInlBeGlzU2V0dGluZ3NcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkF4ZSBZXCI7XHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3csXHJcbiAgICAgICAgdGhpcy5heGlzQ29sb3IsXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSxcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHksXHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VW5pdHMsXHJcbiAgICAgICAgdGhpcy5wcmVjaXNpb24sXHJcbiAgICAgICAgdGhpcy50aXRsZSxcclxuICAgICAgICB0aGlzLnRpdGxlVGV4dCxcclxuICAgICAgICB0aGlzLnVzZVlBeGlzQmlzXHJcbiAgICBdO1xyXG59XHJcblxyXG4vKipcclxuICogR3JpZCBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBHcmlkU2V0dGluZ3NDYXJkIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBzaG93SG9yaXpvbnRhbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dIb3Jpem9udGFsXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiR3JpbGxlIGhvcml6b250YWxlXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHNob3dWZXJ0aWNhbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dWZXJ0aWNhbFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkdyaWxsZSB2ZXJ0aWNhbGVcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGdyaWRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiZ3JpZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ291bGV1ciBkZSBsYSBncmlsbGVcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZjBmMGYwXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZ3JpZFRoaWNrbmVzcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImdyaWRUaGlja25lc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLDiXBhaXNzZXVyXCIsXHJcbiAgICAgICAgdmFsdWU6IDFcclxuICAgIH0pO1xyXG5cclxuICAgIGdyaWRTdHlsZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImdyaWRTdHlsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN0eWxlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJzb2xpZFwiLCBkaXNwbGF5TmFtZTogXCJDb250aW51XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkYXNoZWRcIiwgZGlzcGxheU5hbWU6IFwiUG9pbnRpbGzDqXNcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJkYXNoZWRcIiwgZGlzcGxheU5hbWU6IFwiUG9pbnRpbGzDqXNcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImdyaWRTZXR0aW5nc1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiR3JpbGxlXCI7XHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3dIb3Jpem9udGFsLFxyXG4gICAgICAgIHRoaXMuc2hvd1ZlcnRpY2FsLFxyXG4gICAgICAgIHRoaXMuZ3JpZENvbG9yLFxyXG4gICAgICAgIHRoaXMuZ3JpZFRoaWNrbmVzcyxcclxuICAgICAgICB0aGlzLmdyaWRTdHlsZVxyXG4gICAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERhdGEgTGFiZWxzIFNldHRpbmdzIENhcmRcclxuICovXHJcbmNsYXNzIERhdGFMYWJlbHNDYXJkIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBzaG93ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic2hvd1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyIGxlcyDDqXRpcXVldHRlc1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImNvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ291bGV1clwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMwMDAwMDBcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGFpbGxlIGR1IHRleHRlXCIsXHJcbiAgICAgICAgdmFsdWU6IDlcclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRGYW1pbHkgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRmFtaWxsZSBkZSBwb2xpY2VcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJBcmlhbFwiLCBkaXNwbGF5TmFtZTogXCJBcmlhbFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291cmllciBOZXdcIiwgZGlzcGxheU5hbWU6IFwiQ291cmllciBOZXdcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRpc3BsYXlVbml0cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImRpc3BsYXlVbml0c1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlVuaXTDqXMgZCdhZmZpY2hhZ2VcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjBcIiwgZGlzcGxheU5hbWU6IFwiQXV0b1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMVwiLCBkaXNwbGF5TmFtZTogXCJBdWN1blwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMFwiLCBkaXNwbGF5TmFtZTogXCJNaWxsaWVycyAoSylcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDAwMDBcIiwgZGlzcGxheU5hbWU6IFwiTWlsbGlvbnMgKE0pXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIxMDAwMDAwMDAwXCIsIGRpc3BsYXlOYW1lOiBcIk1pbGxpYXJkcyAoTWRzKVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIjBcIiwgZGlzcGxheU5hbWU6IFwiQXV0b1wiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByZWNpc2lvbiA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInByZWNpc2lvblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkTDqWNpbWFsZXNcIixcclxuICAgICAgICB2YWx1ZTogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJkYXRhTGFiZWxzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCLDiXRpcXVldHRlcyBkZSBkb25uw6llc1wiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LFxyXG4gICAgICAgIHRoaXMuY29sb3IsXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSxcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHksXHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VW5pdHMsXHJcbiAgICAgICAgdGhpcy5wcmVjaXNpb25cclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMZWdlbmQgU2V0dGluZ3MgQ2FyZFxyXG4gKi9cclxuY2xhc3MgTGVnZW5kQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsYSBsw6lnZW5kZVwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwb3NpdGlvbiA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcInBvc2l0aW9uXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiUG9zaXRpb25cIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlRvcFwiLCBkaXNwbGF5TmFtZTogXCJIYXV0XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJCb3R0b21cIiwgZGlzcGxheU5hbWU6IFwiQmFzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJMZWZ0XCIsIGRpc3BsYXlOYW1lOiBcIkdhdWNoZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiUmlnaHRcIiwgZGlzcGxheU5hbWU6IFwiRHJvaXRlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJUb3BDZW50ZXJcIiwgZGlzcGxheU5hbWU6IFwiSGF1dCBjZW50cmVcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkJvdHRvbUNlbnRlclwiLCBkaXNwbGF5TmFtZTogXCJCYXMgY2VudHJlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiVG9wXCIsIGRpc3BsYXlOYW1lOiBcIkhhdXRcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXJcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjNjY2NjY2XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udFNpemUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRhaWxsZSBkdSB0ZXh0ZVwiLFxyXG4gICAgICAgIHZhbHVlOiAxMFxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udEZhbWlseSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGYW1pbGxlIGRlIHBvbGljZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiU2Vnb2UgVUlcIiwgZGlzcGxheU5hbWU6IFwiU2Vnb2UgVUlcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkFyaWFsXCIsIGRpc3BsYXlOYW1lOiBcIkFyaWFsXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJDb3VyaWVyIE5ld1wiLCBkaXNwbGF5TmFtZTogXCJDb3VyaWVyIE5ld1wiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJsZWdlbmRcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkzDqWdlbmRlXCI7XHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3csXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbixcclxuICAgICAgICB0aGlzLmZvbnRDb2xvcixcclxuICAgICAgICB0aGlzLmZvbnRTaXplLFxyXG4gICAgICAgIHRoaXMuZm9udEZhbWlseVxyXG4gICAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZpc3VhbCBzZXR0aW5ncyBtb2RlbCBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwge1xyXG4gICAgLy8gUGFsZXR0ZSBwYXIgZMOpZmF1dFxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0Q29sb3JzID0gW1wiIzNCNjBDNFwiLCBcIiNFOTRGMzdcIiwgXCIjNDRCQkE0XCIsIFwiI0Y3QjUzOFwiLCBcIiNEQjU0NjFcIiwgXCIjM0Y4OEM1XCIsIFwiIzdENEU1N1wiLCBcIiNENjY4NTNcIiwgXCIjMjEyRDQwXCIsIFwiIzExMTUxQ1wiXTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3MxID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3MxXCIsIFwiTGlnbmUgMVwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbMF0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczEgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzMVwiLCBcIkTDqWdyYWTDqSAxXCIsIHRoaXMuZGVmYXVsdENvbG9yc1swXSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzMiA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzMlwiLCBcIkxpZ25lIDJcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzFdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3MyID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczJcIiwgXCJEw6lncmFkw6kgMlwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbMV0pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczMgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczNcIiwgXCJMaWduZSAzXCIsIHRoaXMuZGVmYXVsdENvbG9yc1syXSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzMyA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3MzXCIsIFwiRMOpZ3JhZMOpIDNcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzJdKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3M0ID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3M0XCIsIFwiTGlnbmUgNFwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbM10pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczQgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzNFwiLCBcIkTDqWdyYWTDqSA0XCIsIHRoaXMuZGVmYXVsdENvbG9yc1szXSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzNSA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzNVwiLCBcIkxpZ25lIDVcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzRdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3M1ID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczVcIiwgXCJEw6lncmFkw6kgNVwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbNF0pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczYgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczZcIiwgXCJMaWduZSA2XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s1XSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzNiA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3M2XCIsIFwiRMOpZ3JhZMOpIDZcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzVdKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3M3ID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3M3XCIsIFwiTGlnbmUgN1wiLCB0aGlzLmRlZmF1bHRDb2xvcnNbNl0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczcgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzN1wiLCBcIkTDqWdyYWTDqSA3XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s2XSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzOCA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzOFwiLCBcIkxpZ25lIDhcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzddKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3M4ID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczhcIiwgXCJEw6lncmFkw6kgOFwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbN10pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczkgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczlcIiwgXCJMaWduZSA5XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s4XSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzOSA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3M5XCIsIFwiRMOpZ3JhZMOpIDlcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzhdKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3MxMCA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzMTBcIiwgXCJMaWduZSAxMFwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbOV0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczEwID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczEwXCIsIFwiRMOpZ3JhZMOpIDEwXCIsIHRoaXMuZGVmYXVsdENvbG9yc1s5XSk7XHJcblxyXG4gICAgeEF4aXNTZXR0aW5ncyA9IG5ldyBYQXhpc1NldHRpbmdzQ2FyZCgpO1xyXG4gICAgeUF4aXNTZXR0aW5ncyA9IG5ldyBZQXhpc1NldHRpbmdzQ2FyZCgpO1xyXG4gICAgZ3JpZFNldHRpbmdzID0gbmV3IEdyaWRTZXR0aW5nc0NhcmQoKTtcclxuICAgIGRhdGFMYWJlbHMgPSBuZXcgRGF0YUxhYmVsc0NhcmQoKTtcclxuICAgIGxlZ2VuZCA9IG5ldyBMZWdlbmRDYXJkKCk7XHJcblxyXG4gICAgY2FyZHMgPSBbXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3MxLCB0aGlzLmdyYWRpZW50U2V0dGluZ3MxLFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzMiwgdGhpcy5ncmFkaWVudFNldHRpbmdzMixcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczMsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczMsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3M0LCB0aGlzLmdyYWRpZW50U2V0dGluZ3M0LFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzNSwgdGhpcy5ncmFkaWVudFNldHRpbmdzNSxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczYsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczYsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3M3LCB0aGlzLmdyYWRpZW50U2V0dGluZ3M3LFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzOCwgdGhpcy5ncmFkaWVudFNldHRpbmdzOCxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczksIHRoaXMuZ3JhZGllbnRTZXR0aW5nczksXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3MxMCwgdGhpcy5ncmFkaWVudFNldHRpbmdzMTAsXHJcbiAgICAgICAgdGhpcy54QXhpc1NldHRpbmdzLFxyXG4gICAgICAgIHRoaXMueUF4aXNTZXR0aW5ncyxcclxuICAgICAgICB0aGlzLmdyaWRTZXR0aW5ncyxcclxuICAgICAgICB0aGlzLmRhdGFMYWJlbHMsXHJcbiAgICAgICAgdGhpcy5sZWdlbmRcclxuICAgIF07XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgcG93ZXJiaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xyXG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XHJcbmltcG9ydCBWaXN1YWxVcGRhdGVPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxVcGRhdGVPcHRpb25zO1xyXG5pbXBvcnQgSVZpc3VhbCA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuSVZpc3VhbDtcclxuaW1wb3J0IElTZWxlY3Rpb25JZCA9IHBvd2VyYmkudmlzdWFscy5JU2VsZWN0aW9uSWQ7XHJcbmltcG9ydCBJU2VsZWN0aW9uTWFuYWdlciA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS5JU2VsZWN0aW9uTWFuYWdlcjtcclxuXHJcbmltcG9ydCB7IFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZS92aXN1YWwubGVzc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpc3VhbCBpbXBsZW1lbnRzIElWaXN1YWwge1xyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzdmc6IFNWR1NWR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1haW5Hcm91cDogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGF4aXNHcm91cDogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGxpbmVzR3JvdXA6IFNWR0dFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0b29sdGlwOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIFxyXG4gICAgLy8gTWFyZ2VzXHJcbiAgICBwcml2YXRlIG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDQwLCBib3R0b206IDQwLCBsZWZ0OiA2MCB9O1xyXG4gICAgXHJcbiAgICAvLyBTZXR0aW5nc1xyXG4gICAgcHJpdmF0ZSBmb3JtYXR0aW5nU2V0dGluZ3M6IFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsO1xyXG4gICAgcHJpdmF0ZSBmb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlOiBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xyXG4gICAgXHJcbiAgICAvLyBEcmlsbCBkb3duIHN1cHBvcnRcclxuICAgIHByaXZhdGUgaG9zdDogcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5JVmlzdWFsSG9zdDtcclxuICAgIHByaXZhdGUgc2VsZWN0aW9uTWFuYWdlcjogSVNlbGVjdGlvbk1hbmFnZXI7XHJcbiAgICBwcml2YXRlIGRhdGFWaWV3OiBwb3dlcmJpLkRhdGFWaWV3O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gb3B0aW9ucy5lbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IG9wdGlvbnMuaG9zdDtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSA9IG5ldyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG5cclxuICAgICAgICAvLyAxLiBDcsOpYXRpb24gZHUgU1ZHXHJcbiAgICAgICAgY29uc3QgbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbiAgICAgICAgdGhpcy5zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwic3ZnXCIpO1xyXG4gICAgICAgIHRoaXMuc3ZnLmNsYXNzTGlzdC5hZGQoXCJjaGFydC1jb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5zdmcpO1xyXG5cclxuICAgICAgICAvLyAyLiBUb29sdGlwXHJcbiAgICAgICAgdGhpcy50b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuY2xhc3NOYW1lID0gXCJjdXN0b20tdG9vbHRpcFwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsIDAsIDAsIDAuOClcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLnBhZGRpbmcgPSBcIjhweCAxMnB4XCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNHB4XCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMudG9vbHRpcCk7XHJcblxyXG4gICAgICAgIC8vIDMuIERlZnMgcG91ciBsZXMgZMOpZ3JhZMOpc1xyXG4gICAgICAgIGNvbnN0IGRlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZGVmc1wiKTtcclxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChkZWZzKTtcclxuXHJcbiAgICAgICAgLy8gNC4gR3JvdXBlc1xyXG4gICAgICAgIHRoaXMubWFpbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImdcIik7XHJcbiAgICAgICAgdGhpcy5heGlzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZ1wiKTtcclxuICAgICAgICB0aGlzLmxpbmVzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZ1wiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1haW5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmF4aXNHcm91cCk7XHJcbiAgICAgICAgdGhpcy5tYWluR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5saW5lc0dyb3VwKTtcclxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0aGlzLm1haW5Hcm91cCk7XHJcblxyXG4gICAgICAgIC8vIFBlcm1ldHRyZSBsZSBjb250ZXh0IG1lbnUgKGNsaWMgZHJvaXQpIHN1ciB0b3V0IGxlIHZpc3VlbFxyXG4gICAgICAgIHRoaXMuc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCBhcyBNb3VzZUV2ZW50O1xyXG4gICAgICAgICAgICAvLyBBZmZpY2hlciBsZSBtZW51IGNvbnRleHR1ZWwgUG93ZXIgQkkgYXZlYyBsZXMgb3B0aW9ucyBzdGFuZGFyZFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHt9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiBtb3VzZUV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICB5OiBtb3VzZUV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIETDqXPDqWxlY3Rpb25uZXIgbG9ycyBkJ3VuIGNsaWMgc3VyIGxlIGZvbmRcclxuICAgICAgICB0aGlzLnN2Zy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93VG9vbHRpcCh4OiBudW1iZXIsIHk6IG51bWJlciwgY29udGVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gTmV0dG95ZXIgbGUgY29udGVudSBwcsOpY8OpZGVudFxyXG4gICAgICAgIHdoaWxlICh0aGlzLnRvb2x0aXAuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAucmVtb3ZlQ2hpbGQodGhpcy50b29sdGlwLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRMOpY291cGVyIGxlIGNvbnRlbnUgZW4gbGlnbmVzIChzdXBwb3NlIGxlIGZvcm1hdCBcIjxkaXY+Li4uPC9kaXY+PGRpdj4uLi48L2Rpdj5cIilcclxuICAgICAgICAvLyBPbiBleHRyYWl0IGxlIHRleHRlIGVudHJlIGxlcyBiYWxpc2VzIDxkaXY+Li4uPC9kaXY+XHJcbiAgICAgICAgY29uc3QgZGl2UmVnZXggPSAvPGRpdltePl0qPiguKj8pPFxcL2Rpdj4vZztcclxuICAgICAgICBsZXQgbWF0Y2g7XHJcbiAgICAgICAgd2hpbGUgKChtYXRjaCA9IGRpdlJlZ2V4LmV4ZWMoY29udGVudCkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIC8vIFNpIGxlIGNvbnRlbnUgY29udGllbnQgPHN0cm9uZz4uLi48L3N0cm9uZz4sIG9uIGxlIGfDqHJlIGF1c3NpXHJcbiAgICAgICAgICAgIGNvbnN0IHN0cm9uZ1JlZ2V4ID0gLzxzdHJvbmdbXj5dKj4oLio/KTxcXC9zdHJvbmc+LztcclxuICAgICAgICAgICAgY29uc3Qgc3Ryb25nTWF0Y2ggPSBzdHJvbmdSZWdleC5leGVjKG1hdGNoWzFdKTtcclxuICAgICAgICAgICAgaWYgKHN0cm9uZ01hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJvbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIpO1xyXG4gICAgICAgICAgICAgICAgc3Ryb25nLnRleHRDb250ZW50ID0gc3Ryb25nTWF0Y2hbMV07XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Ryb25nKTtcclxuICAgICAgICAgICAgICAgIC8vIEFqb3V0ZSBsZSByZXN0ZSBkdSB0ZXh0ZSBhcHLDqHMgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZnRlclN0cm9uZyA9IG1hdGNoWzFdLnJlcGxhY2Uoc3Ryb25nUmVnZXgsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFmdGVyU3Ryb25nLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhZnRlclN0cm9uZykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gbWF0Y2hbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50b29sdGlwLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUubGVmdCA9ICh4ICsgMTApICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS50b3AgPSAoeSAtIDEwKSArIFwicHhcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGVUb29sdGlwKCkge1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROaWNlU3RlcChtYXhWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAobWF4VmFsdWUgPT09IDApIHJldHVybiAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIETDqXRlcm1pbmVyIGwnb3JkcmUgZGUgZ3JhbmRldXJcclxuICAgICAgICBjb25zdCBtYWduaXR1ZGUgPSBNYXRoLmZsb29yKE1hdGgubG9nMTAobWF4VmFsdWUpKTtcclxuICAgICAgICBjb25zdCBwb3dlck9mMTAgPSBNYXRoLnBvdygxMCwgbWFnbml0dWRlKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBHYW1tZSBkZSBtdWx0aXBsaWNhdGV1cnMgcG91ciBhdm9pciBkZXMgZGl2aXNpb25zIFwicHJvcHJlc1wiXHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGllcnMgPSBbMSwgMiwgMi41LCA1LCAxMF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTm9tYnJlIGRlIGRpdmlzaW9ucyBzb3VoYWl0w6llc1xyXG4gICAgICAgIGNvbnN0IG1pblRpY2tzID0gNDtcclxuICAgICAgICBjb25zdCBtYXhUaWNrcyA9IDg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVGVzdGVyIGNoYXF1ZSBtdWx0aXBsaWNhdGV1clxyXG4gICAgICAgIGZvciAobGV0IG11bHQgb2YgbXVsdGlwbGllcnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcCA9IG11bHQgKiBwb3dlck9mMTA7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpY2tzID0gTWF0aC5jZWlsKG1heFZhbHVlIC8gc3RlcCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGlja3MgPj0gbWluVGlja3MgJiYgdGlja3MgPD0gbWF4VGlja3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGVwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpIGF1Y3VuIG5lIGNvbnZpZW50LCByZXRvdXJuZXIgcG93ZXJPZjEwXHJcbiAgICAgICAgcmV0dXJuIHBvd2VyT2YxMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKG9wdGlvbnM6IFZpc3VhbFVwZGF0ZU9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBLiBSw6ljdXDDqXJhdGlvbiBkZXMgZG9ubsOpZXNcclxuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG9wdGlvbnMuZGF0YVZpZXdzWzBdO1xyXG4gICAgICAgIGlmICghZGF0YVZpZXcgfHwgIWRhdGFWaWV3LmNhdGVnb3JpY2FsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzIHx8ICFkYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhVmlldyA9IGRhdGFWaWV3O1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5Q29sdW1ucyA9IGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXM7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yeUNvbHVtbnNbMF07XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLnBvcHVsYXRlRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwoVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwsIG9wdGlvbnMuZGF0YVZpZXdzWzBdKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBvcHRpb25zLnZpZXdwb3J0LndpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBvcHRpb25zLnZpZXdwb3J0LmhlaWdodC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2F0cyA9IGNhdGVnb3J5Q29sdW1uc1swXS52YWx1ZXM7XHJcbiAgICAgICAgY29uc3QgYWxsU2VyaWVzID0gZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzO1xyXG5cclxuICAgICAgICAvLyBQYXJhbcOodHJlcyBnw6luw6lyYXV4XHJcbiAgICAgICAgY29uc3Qgc2hvd1hBeGlzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueEF4aXNTZXR0aW5ncy5zaG93LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHhBeGlzQ29sb3IgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy54QXhpc1NldHRpbmdzLmF4aXNDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB4QXhpc0ZvbnRTaXplID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueEF4aXNTZXR0aW5ncy5mb250U2l6ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB4QXhpc0ZvbnRGYW1pbHkgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy54QXhpc1NldHRpbmdzLmZvbnRGYW1pbHkudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzaG93WUF4aXMgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy55QXhpc1NldHRpbmdzLnNob3cudmFsdWU7XHJcbiAgICAgICAgY29uc3QgeUF4aXNDb2xvciA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3MuYXhpc0NvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzRm9udFNpemUgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy55QXhpc1NldHRpbmdzLmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzRm9udEZhbWlseSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3MuZm9udEZhbWlseS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzRGlzcGxheVVuaXRzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueUF4aXNTZXR0aW5ncy5kaXNwbGF5VW5pdHMudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB5QXhpc1ByZWNpc2lvbiA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3MucHJlY2lzaW9uLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93SG9yaXpvbnRhbEdyaWQgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5ncmlkU2V0dGluZ3Muc2hvd0hvcml6b250YWwudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc2hvd1ZlcnRpY2FsR3JpZCA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmdyaWRTZXR0aW5ncy5zaG93VmVydGljYWwudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ3JpZENvbG9yID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLmdyaWRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBncmlkVGhpY2tuZXNzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLmdyaWRUaGlja25lc3MudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ3JpZFN0eWxlID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLmdyaWRTdHlsZS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93TGVnZW5kID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGVnZW5kLnNob3cudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbGVnZW5kUG9zaXRpb24gPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmQucG9zaXRpb24udmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBsZWdlbmRGb250Q29sb3IgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmQuZm9udENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGxlZ2VuZEZvbnRTaXplID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGVnZW5kLmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGxlZ2VuZEZvbnRGYW1pbHkgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmQuZm9udEZhbWlseS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBCLiBDYWxjdWwgZGVzIGRpbWVuc2lvbnNcclxuICAgICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMudmlld3BvcnQud2lkdGg7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb3B0aW9ucy52aWV3cG9ydC5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IGxlZ2VuZEhlaWdodCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHNob3dMZWdlbmQgJiYgKGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcFwiIHx8IGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcENlbnRlclwiKSkge1xyXG4gICAgICAgICAgICBsZWdlbmRIZWlnaHQgPSAzMDtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4udG9wID0gMjAgKyBsZWdlbmRIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaG93TGVnZW5kICYmIChsZWdlbmRQb3NpdGlvbiA9PT0gXCJCb3R0b21cIiB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJCb3R0b21DZW50ZXJcIikpIHtcclxuICAgICAgICAgICAgbGVnZW5kSGVpZ2h0ID0gMzA7XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luLmJvdHRvbSA9IDQwICsgbGVnZW5kSGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luLnRvcCA9IDIwO1xyXG4gICAgICAgICAgICB0aGlzLm1hcmdpbi5ib3R0b20gPSA0MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFqdXN0ZW1lbnQgZHluYW1pcXVlIGRlIGxhIG1hcmdlIGJhc3NlIHNpIG9uIGEgMyBuaXZlYXV4IG91IHBsdXMgKHBvdXIgYWZmaWNoZXIgQW5uw6llL01vaXMvSm91cilcclxuICAgICAgICBpZiAoY2F0ZWdvcnlDb2x1bW5zLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4uYm90dG9tICs9IDI1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZHJhd1cgPSB3aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcclxuICAgICAgICBjb25zdCBkcmF3SCA9IGhlaWdodCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcclxuICAgICAgICBjb25zdCBnZXRZUG9zID0gKHZhbDogbnVtYmVyKSA9PiBkcmF3SCAtICgodmFsIC0gbmljZU1pbikgLyAobmljZU1heCAtIG5pY2VNaW4pICogZHJhd0gpO1xyXG5cclxuICAgICAgICAvLyBDLiBDQUxDVUwgw4lDSEVMTEUgWSBHTE9CQUxFIChCYXPDqSBzdXIgbGUgTUlOIGV0IE1BWCBkZSBUT1VURVMgbGVzIHPDqXJpZXMpXHJcbiAgICAgICAgbGV0IGdsb2JhbE1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcclxuICAgICAgICBsZXQgZ2xvYmFsTWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xyXG4gICAgICAgIGFsbFNlcmllcy5mb3JFYWNoKHNlcmllcyA9PiB7XHJcbiAgICAgICAgICAgIHNlcmllcy52YWx1ZXMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IE51bWJlcih2KTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPiBnbG9iYWxNYXgpIGdsb2JhbE1heCA9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsIDwgZ2xvYmFsTWluKSBnbG9iYWxNaW4gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTaSB0b3V0IGVzdCBOYU4sIGZhbGxiYWNrIMOgIDBcclxuICAgICAgICBpZiAoIWlzRmluaXRlKGdsb2JhbE1heCkpIGdsb2JhbE1heCA9IDA7XHJcbiAgICAgICAgaWYgKCFpc0Zpbml0ZShnbG9iYWxNaW4pKSBnbG9iYWxNaW4gPSAwO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWwgZHUgc3RlcFxyXG4gICAgICAgIGNvbnN0IGFic01heCA9IE1hdGgubWF4KE1hdGguYWJzKGdsb2JhbE1heCksIE1hdGguYWJzKGdsb2JhbE1pbikpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBTaXplID0gdGhpcy5nZXROaWNlU3RlcChhYnNNYXgpO1xyXG5cclxuICAgICAgICAvLyBCb3JuZXMgXCJwcm9wcmVzXCJcclxuICAgICAgICBsZXQgbmljZU1pbiA9IE1hdGguZmxvb3IoZ2xvYmFsTWluIC8gc3RlcFNpemUpICogc3RlcFNpemU7XHJcbiAgICAgICAgbGV0IG5pY2VNYXggPSBNYXRoLmNlaWwoZ2xvYmFsTWF4IC8gc3RlcFNpemUpICogc3RlcFNpemU7XHJcbiAgICAgICAgaWYgKG5pY2VNaW4gPT09IG5pY2VNYXgpIHtcclxuICAgICAgICAgICAgLy8gQ2FzIHBsYXRcclxuICAgICAgICAgICAgbmljZU1pbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgobmljZU1heCAtIG5pY2VNaW4pIC8gc3RlcFNpemUgPiAxMCkge1xyXG4gICAgICAgICAgICBuaWNlTWF4ID0gbmljZU1pbiArIHN0ZXBTaXplICogMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBELiBERVNTSU5cclxuICAgICAgICB0aGlzLm1haW5Hcm91cC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luLmxlZnR9LCAke3RoaXMubWFyZ2luLnRvcH0pYCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTmV0dG95YWdlXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXhpc0dyb3VwLmZpcnN0Q2hpbGQpIHRoaXMuYXhpc0dyb3VwLnJlbW92ZUNoaWxkKHRoaXMuYXhpc0dyb3VwLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmxpbmVzR3JvdXAuZmlyc3RDaGlsZCkgdGhpcy5saW5lc0dyb3VwLnJlbW92ZUNoaWxkKHRoaXMubGluZXNHcm91cC5maXJzdENoaWxkKTtcclxuICAgICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1c3RvbS1tYXJrZXJcIikuZm9yRWFjaChtID0+IG0ucmVtb3ZlKCkpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VzdG9tLWRhdGFsYWJlbFwiKS5mb3JFYWNoKGwgPT4gbC5yZW1vdmUoKSk7XHJcbiAgICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3RvckFsbChcIi5jdXN0b20taG92ZXJcIikuZm9yRWFjaChoID0+IGgucmVtb3ZlKCkpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGVnZW5kXCIpLmZvckVhY2gobCA9PiBsLnJlbW92ZSgpKTtcclxuXHJcbiAgICAgICAgLy8gMS4gR1JJTExFIEVUIEFYRSBZXHJcbiAgICAgICAgaWYgKHNob3dZQXhpcykge1xyXG4gICAgICAgICAgICBmb3IobGV0IHZhbCA9IG5pY2VNaW47IHZhbCA8PSBuaWNlTWF4OyB2YWwgKz0gc3RlcFNpemUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlQb3MgPSBkcmF3SCAtICgodmFsIC0gbmljZU1pbikgLyAobmljZU1heCAtIG5pY2VNaW4pICogZHJhd0gpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaG93SG9yaXpvbnRhbEdyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBkcmF3Vy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInkxXCIsIHlQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCB5UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGdyaWRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgZ3JpZFRoaWNrbmVzcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JpZFN0eWxlID09PSBcImRhc2hlZFwiKSBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCI0LDRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlzR3JvdXAuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiLTEwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHlQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdGhpcy5mb3JtYXRZQXhpc1ZhbHVlKHZhbCwgeUF4aXNEaXNwbGF5VW5pdHMsIHlBeGlzUHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCB5QXhpc0NvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIHlBeGlzRm9udFNpemUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIHlBeGlzRm9udEZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF4aXNHcm91cC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMi4gQVhFIFhcclxuICAgICAgICBpZiAoc2hvd1hBeGlzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBNYXRoLmNlaWwoY2F0cy5sZW5ndGggLyAxMCk7IFxyXG4gICAgICAgICAgICBjYXRzLmZvckVhY2goKGNhdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgJSBzdGVwICE9PSAwICYmIGkgIT09IGNhdHMubGVuZ3RoIC0gMSkgcmV0dXJuOyBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgeFBvcyA9IChpIC8gKGNhdHMubGVuZ3RoIC0gMSkpICogZHJhd1c7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dWZXJ0aWNhbEdyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDJcIiwgeFBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInkyXCIsIGRyYXdILnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGdyaWRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgZ3JpZFRoaWNrbmVzcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JpZFN0eWxlID09PSBcImRhc2hlZFwiKSBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCI0LDRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlzR3JvdXAuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHhQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInlcIiwgKGRyYXdIICsgMjApLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gY2F0cy5sZW5ndGggLSAxKSB0ZXh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PT0gMCkgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0ZXh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgeEF4aXNDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCB4QXhpc0ZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCB4QXhpc0ZvbnRGYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFqb3V0ZXIgbGUgbWVudSBjb250ZXh0dWVsIHN1ciBsZXMgbGFiZWxzIGRlIGwnYXhlIFhcclxuICAgICAgICAgICAgICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAud2l0aENhdGVnb3J5KGNhdGVnb3J5LCBpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHNlbGVjdGlvbklkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUGVybWV0dHJlIGxhIHPDqWxlY3Rpb24gYXUgY2xpYyBzdXIgbGVzIGxhYmVsc1xyXG4gICAgICAgICAgICAgICAgdGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoQ2F0ZWdvcnkoY2F0ZWdvcnksIGkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZWxlY3Qoc2VsZWN0aW9uSWQsIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlDb2x1bW5zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZmZpY2hhZ2UgaGnDqXJhcmNoaXF1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0TGV2ZWwgPSBjYXRlZ29yeUNvbHVtbnNbMF0udmFsdWVzW2ldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdExldmVsID0gY2F0ZWdvcnlDb2x1bW5zW2NhdGVnb3J5Q29sdW1ucy5sZW5ndGggLSAxXS52YWx1ZXNbaV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0c3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidHNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdHNwYW4xLnRleHRDb250ZW50ID0gZmlyc3RMZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICB0c3BhbjEuc2V0QXR0cmlidXRlKFwieFwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRzcGFuMS5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjBlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHRzcGFuMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUNvbHVtbnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXMgYXZlYyAzIG5pdmVhdXggb3UgcGx1cyAoZXg6IEFubsOpZSwgTW9pcywgSm91cikgLT4gT24gYWZmaWNoZSBBbm7DqWUsIE1vaXMsIEpvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT24gc3VwcG9zZSBxdWUgbCdhdmFudC1kZXJuaWVyIG5pdmVhdSBlc3QgbGUgbW9pc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaWRkbGVMZXZlbCA9IGNhdGVnb3J5Q29sdW1uc1tjYXRlZ29yeUNvbHVtbnMubGVuZ3RoIC0gMl0udmFsdWVzW2ldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0c3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidHNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMi50ZXh0Q29udGVudCA9IG1pZGRsZUxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIuc2V0QXR0cmlidXRlKFwieFwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIuc2V0QXR0cmlidXRlKFwiZHlcIiwgXCIxLjJlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC5hcHBlbmRDaGlsZCh0c3BhbjIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjMudGV4dENvbnRlbnQgPSBsYXN0TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMy5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHhQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMy5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjEuMmVtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHRzcGFuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FzIHN0YW5kYXJkIDIgbml2ZWF1eCAoZXg6IEFubsOpZSwgTW9pcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIudGV4dENvbnRlbnQgPSBsYXN0TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMi5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHhQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMi5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjEuMmVtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHRzcGFuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdGhpcy5mb3JtYXREYXRlKGNhdHNbaV0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuYXhpc0dyb3VwLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDMuIEJPVUNMRSBTVVIgTEVTIFPDiVJJRVMgKExJR05FUylcclxuICAgICAgICBjb25zdCBsZWdlbmRJdGVtczogQXJyYXk8e25hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZ30+ID0gW107XHJcblxyXG4gICAgICAgIC8vIFLDqWN1cMOpcmF0aW9uIGRlcyBwYXJhbcOodHJlcyBkZXMgw6l0aXF1ZXR0ZXMgZGUgZG9ubsOpZXNcclxuICAgICAgICBjb25zdCBzaG93RGF0YUxhYmVscyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmRhdGFMYWJlbHMuc2hvdy52YWx1ZTtcclxuICAgICAgICBjb25zdCBkYXRhTGFiZWxzQ29sb3IgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5kYXRhTGFiZWxzLmNvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGFMYWJlbHNGb250U2l6ZSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmRhdGFMYWJlbHMuZm9udFNpemUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0YUxhYmVsc0ZvbnRGYW1pbHkgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5kYXRhTGFiZWxzLmZvbnRGYW1pbHkudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBkYXRhTGFiZWxzRGlzcGxheVVuaXRzID0gcGFyc2VJbnQodGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZGF0YUxhYmVscy5kaXNwbGF5VW5pdHMudmFsdWUudmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YUxhYmVsc1ByZWNpc2lvbiA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmRhdGFMYWJlbHMucHJlY2lzaW9uLnZhbHVlO1xyXG5cclxuICAgICAgICBhbGxTZXJpZXMuZm9yRWFjaCgoc2VyaWVzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMTApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlcmllc05hbWUgPSBzZXJpZXMuc291cmNlLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCB2YWxzID0gc2VyaWVzLnZhbHVlcztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVTZXR0aW5ncyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzW2BsaW5lU2V0dGluZ3Mke2luZGV4ICsgMX1gXTtcclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRTZXR0aW5ncyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzW2BncmFkaWVudFNldHRpbmdzJHtpbmRleCArIDF9YF07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxpbmVTZXR0aW5ncyB8fCAhZ3JhZGllbnRTZXR0aW5ncykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGluZUNvbG9yID0gbGluZVNldHRpbmdzLmxpbmVDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc3Ryb2tlV2lkdGggPSBsaW5lU2V0dGluZ3Muc3Ryb2tlV2lkdGgudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVTdHlsZSA9IGxpbmVTZXR0aW5ncy5saW5lU3R5bGUudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd01hcmtlcnMgPSBsaW5lU2V0dGluZ3Muc2hvd01hcmtlcnMudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlclNpemUgPSBsaW5lU2V0dGluZ3MubWFya2VyU2l6ZS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcHBlZCA9IGxpbmVTZXR0aW5ncy5zdGVwcGVkLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvd0dyYWRpZW50ID0gZ3JhZGllbnRTZXR0aW5ncy5zaG93R3JhZGllbnQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50Q29sb3IgPSBncmFkaWVudFNldHRpbmdzLmdyYWRpZW50Q29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50SW50ZW5zaXR5ID0gZ3JhZGllbnRTZXR0aW5ncy5ncmFkaWVudEludGVuc2l0eS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnREaXJlY3Rpb24gPSBncmFkaWVudFNldHRpbmdzLmdyYWRpZW50RGlyZWN0aW9uLnZhbHVlLnZhbHVlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBsZWdlbmRJdGVtcy5wdXNoKHsgbmFtZTogc2VyaWVzTmFtZSwgY29sb3I6IGxpbmVDb2xvciB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bCBkZXMgcG9pbnRzXHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50czogW251bWJlciwgbnVtYmVyXVtdID0gY2F0cy5tYXAoKGNhdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IChpIC8gKGNhdHMubGVuZ3RoIC0gMSkpICogZHJhd1c7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gZ2V0WVBvcyhOdW1iZXIodmFsc1tpXSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIC8vIENyw6lhdGlvbiBkdSBkw6lncmFkw6kgdW5pcXVlXHJcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50SWQgPSBgZ3JhZGllbnRfJHtpbmRleH1fJHtEYXRlLm5vdygpfWA7IC8vIElEIHVuaXF1ZVxyXG4gICAgICAgICAgICBsZXQgZ3JhZGllbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwibGluZWFyR3JhZGllbnRcIik7XHJcbiAgICAgICAgICAgIGdyYWRpZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGdyYWRpZW50SWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc3RvcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwic3RvcFwiKTtcclxuICAgICAgICAgICAgc3RvcDEuc2V0QXR0cmlidXRlKFwib2Zmc2V0XCIsIFwiMCVcIik7XHJcbiAgICAgICAgICAgIHN0b3AxLnNldEF0dHJpYnV0ZShcInN0b3AtY29sb3JcIiwgZ3JhZGllbnRDb2xvcik7XHJcbiAgICAgICAgICAgIHN0b3AxLnNldEF0dHJpYnV0ZShcInN0b3Atb3BhY2l0eVwiLCBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBncmFkaWVudEludGVuc2l0eSkpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc3RvcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwic3RvcFwiKTtcclxuICAgICAgICAgICAgc3RvcDIuc2V0QXR0cmlidXRlKFwib2Zmc2V0XCIsIFwiMTAwJVwiKTtcclxuICAgICAgICAgICAgc3RvcDIuc2V0QXR0cmlidXRlKFwic3RvcC1jb2xvclwiLCBncmFkaWVudENvbG9yKTtcclxuICAgICAgICAgICAgc3RvcDIuc2V0QXR0cmlidXRlKFwic3RvcC1vcGFjaXR5XCIsIFwiMFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGdyYWRpZW50LmFwcGVuZENoaWxkKHN0b3AxKTtcclxuICAgICAgICAgICAgZ3JhZGllbnQuYXBwZW5kQ2hpbGQoc3RvcDIpO1xyXG4gICAgICAgICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKFwiZGVmc1wiKT8uYXBwZW5kQ2hpbGQoZ3JhZGllbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5R3JhZGllbnREaXJlY3Rpb24oZ3JhZGllbnQsIGdyYWRpZW50RGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbnN0cnVjdGlvbiBkdSBjaGVtaW5cclxuICAgICAgICAgICAgbGV0IGQgPSBzdGVwcGVkID8gdGhpcy5idWlsZFN0ZXBwZWRQYXRoKHBvaW50cykgOiB0aGlzLmJ1aWxkU21vb3RoUGF0aChwb2ludHMpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWlyZVxyXG4gICAgICAgICAgICBjb25zdCBwYXRoQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJwYXRoXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB5WmVybyA9IGdldFlQb3MoMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyZWFEID0gYCR7ZH0gTCAke3BvaW50c1twb2ludHMubGVuZ3RoLTFdWzBdfSwke3laZXJvfSBMICR7cG9pbnRzWzBdWzBdfSwke3laZXJvfSBaYDtcclxuICAgICAgICAgICAgcGF0aEFyZWEuc2V0QXR0cmlidXRlKFwiZFwiLCBhcmVhRCk7XHJcbiAgICAgICAgICAgIHBhdGhBcmVhLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgc2hvd0dyYWRpZW50ID8gYHVybCgjJHtncmFkaWVudElkfSlgIDogXCJub25lXCIpO1xyXG4gICAgICAgICAgICBwYXRoQXJlYS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVzR3JvdXAuYXBwZW5kQ2hpbGQocGF0aEFyZWEpO1xyXG5cclxuICAgICAgICAgICAgLy8gTGlnbmVcclxuICAgICAgICAgICAgY29uc3QgcGF0aExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwicGF0aFwiKTtcclxuICAgICAgICAgICAgcGF0aExpbmUuc2V0QXR0cmlidXRlKFwiZFwiLCBkKTtcclxuICAgICAgICAgICAgcGF0aExpbmUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBsaW5lQ29sb3IpO1xyXG4gICAgICAgICAgICBwYXRoTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgc3Ryb2tlV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XHJcbiAgICAgICAgICAgIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lam9pblwiLCBcInJvdW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAobGluZVN0eWxlID09PSBcImRhc2hlZFwiKSBwYXRoTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiOCw0XCIpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChsaW5lU3R5bGUgPT09IFwiZG90dGVkXCIpIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCIyLDJcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGluZXNHcm91cC5hcHBlbmRDaGlsZChwYXRoTGluZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBNYXJxdWV1cnNcclxuICAgICAgICAgICAgaWYgKHNob3dNYXJrZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLW1hcmtlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgKHRoaXMubWFyZ2luLmxlZnQgKyBwWzBdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgKHRoaXMubWFyZ2luLnRvcCArIHBbMV0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIG1hcmtlclNpemUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgbGluZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChjaXJjbGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIMOJdGlxdWV0dGVzIGRlIGRvbm7DqWVzXHJcbiAgICAgICAgICAgIGlmIChzaG93RGF0YUxhYmVscykge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzLmZvckVhY2goKHAsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcih2YWxzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLmZvcm1hdERhdGFMYWJlbCh2YWx1ZSwgZGF0YUxhYmVsc0Rpc3BsYXlVbml0cywgZGF0YUxhYmVsc1ByZWNpc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWRhdGFsYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJ4XCIsICh0aGlzLm1hcmdpbi5sZWZ0ICsgcFswXSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwieVwiLCAodGhpcy5tYXJnaW4udG9wICsgcFsxXSAtIDEwKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGRhdGFMYWJlbHNDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIGRhdGFMYWJlbHNGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCBkYXRhTGFiZWxzRm9udEZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9udC13ZWlnaHRcIiwgXCI1MDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFpvbmVzIGRlIHN1cnZvbCAoVG9vbHRpcCkgYXZlYyBzdXBwb3J0IGR1IGRyaWxsXHJcbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKChwLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcsOpZXIgbCdJRCBkZSBzw6lsZWN0aW9uIHBvdXIgY2UgcG9pbnRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgLndpdGhDYXRlZ29yeShjYXRlZ29yeSwgaSlcclxuICAgICAgICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3ZlckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgKHRoaXMubWFyZ2luLmxlZnQgKyBwWzBdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN5XCIsICh0aGlzLm1hcmdpbi50b3AgKyBwWzFdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgXCI4XCIpO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcFRpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlDb2x1bW5zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRpdGxlID0gY2F0ZWdvcnlDb2x1bW5zLm1hcChjID0+IGMudmFsdWVzW2ldLnRvU3RyaW5nKCkpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUaXRsZSA9IHRoaXMuZm9ybWF0RGF0ZShjYXRzW2ldLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcENvbnRlbnQgPSBgPGRpdj48c3Ryb25nPiR7dG9vbHRpcFRpdGxlfTwvc3Ryb25nPjwvZGl2PjxkaXY+JHtzZXJpZXNOYW1lfTogJHt0aGlzLmZvcm1hdE51bWJlcihOdW1iZXIodmFsc1tpXSkpfTwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcChlLnBhZ2VYLCBlLnBhZ2VZLCB0b29sdGlwQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5jbGFzc0xpc3QuYWRkKFwidGVtcC1tYXJrZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCAodGhpcy5tYXJnaW4ubGVmdCArIHBbMF0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgKHRoaXMubWFyZ2luLnRvcCArIHBbMV0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBcIjVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGxpbmVDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCIjZmZmXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0ZW1wQ2lyY2xlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmxlZnQgPSAoZS5wYWdlWCArIDEwKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUudG9wID0gKGUucGFnZVkgLSAxMCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXAtbWFya2VyXCIpLmZvckVhY2gobSA9PiBtLnJlbW92ZSgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEdlc3Rpb24gZHUgY2xpYyBwb3VyIGxhIHPDqWxlY3Rpb24gKG7DqWNlc3NhaXJlIHBvdXIgbGUgZHJpbGwpXHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU8OpbGVjdGlvbm5lciBjZSBwb2ludCBkZSBkb25uw6llc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZWxlY3Qoc2VsZWN0aW9uSWQsIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDb250ZXh0IG1lbnUgKGNsaWMgZHJvaXQpIHBvdXIgYWZmaWNoZXIgbGVzIG9wdGlvbnMgZGUgZHJpbGxcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHNlbGVjdGlvbklkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGhvdmVyQ2lyY2xlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDQuIEzDiUdFTkRFXHJcbiAgICAgICAgaWYgKHNob3dMZWdlbmQgJiYgbGVnZW5kSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBsZWdlbmRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJnXCIpO1xyXG4gICAgICAgICAgICBsZWdlbmRHcm91cC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxlZ2VuZFggPSAwO1xyXG4gICAgICAgICAgICBsZXQgbGVnZW5kWSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1XaWR0aCA9IDEwMDtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IDIwO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcFwiIHx8IGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcENlbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRYID0gKHdpZHRoIC0gbGVnZW5kSXRlbXMubGVuZ3RoICogaXRlbVdpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRZID0gMTA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVnZW5kUG9zaXRpb24gPT09IFwiQm90dG9tXCIgfHwgbGVnZW5kUG9zaXRpb24gPT09IFwiQm90dG9tQ2VudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFggPSAod2lkdGggLSBsZWdlbmRJdGVtcy5sZW5ndGggKiBpdGVtV2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFkgPSBoZWlnaHQgLSAyMDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsZWdlbmRQb3NpdGlvbiA9PT0gXCJMZWZ0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFggPSAxMDtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFkgPSBoZWlnaHQgLyAyIC0gKGxlZ2VuZEl0ZW1zLmxlbmd0aCAqIGl0ZW1IZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsZWdlbmRQb3NpdGlvbiA9PT0gXCJSaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRYID0gd2lkdGggLSAxMTA7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRZID0gaGVpZ2h0IC8gMiAtIChsZWdlbmRJdGVtcy5sZW5ndGggKiBpdGVtSGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxlZ2VuZEl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHhPZmZzZXQgPSBsZWdlbmRQb3NpdGlvbi5pbmNsdWRlcyhcIkNlbnRlclwiKSB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJUb3BcIiB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJCb3R0b21cIiBcclxuICAgICAgICAgICAgICAgICAgICA/IGxlZ2VuZFggKyBpICogaXRlbVdpZHRoIFxyXG4gICAgICAgICAgICAgICAgICAgIDogbGVnZW5kWDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlPZmZzZXQgPSBsZWdlbmRQb3NpdGlvbiA9PT0gXCJMZWZ0XCIgfHwgbGVnZW5kUG9zaXRpb24gPT09IFwiUmlnaHRcIiBcclxuICAgICAgICAgICAgICAgICAgICA/IGxlZ2VuZFkgKyBpICogaXRlbUhlaWdodCBcclxuICAgICAgICAgICAgICAgICAgICA6IGxlZ2VuZFk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ3LDqWVyIHVuIGdyb3VwZSBwb3VyIGNoYXF1ZSDDqWzDqW1lbnQgZGUgbMOpZ2VuZGUgcG91ciBmYWNpbGl0ZXIgbGVzIGludGVyYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVnZW5kSXRlbUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImdcIik7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuc2V0QXR0cmlidXRlKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInJlY3RcIik7XHJcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgeE9mZnNldC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlKFwieVwiLCB5T2Zmc2V0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE1XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIzXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGl0ZW0uY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kSXRlbUdyb3VwLmFwcGVuZENoaWxkKHJlY3QpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieFwiLCAoeE9mZnNldCArIDIwKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieVwiLCAoeU9mZnNldCArIDIpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgbGVnZW5kRm9udENvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIGxlZ2VuZEZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCBsZWdlbmRGb250RmFtaWx5KTtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuYXBwZW5kQ2hpbGQodGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWpvdXRlciB1biByZWN0YW5nbGUgaW52aXNpYmxlIHBvdXIgYWdyYW5kaXIgbGEgem9uZSBjbGlxdWFibGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhpdEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwicmVjdFwiKTtcclxuICAgICAgICAgICAgICAgIGhpdEFyZWEuc2V0QXR0cmlidXRlKFwieFwiLCB4T2Zmc2V0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgaGl0QXJlYS5zZXRBdHRyaWJ1dGUoXCJ5XCIsICh5T2Zmc2V0IC0gNSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBoaXRBcmVhLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiOTBcIik7XHJcbiAgICAgICAgICAgICAgICBoaXRBcmVhLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjE1XCIpO1xyXG4gICAgICAgICAgICAgICAgaGl0QXJlYS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwidHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuYXBwZW5kQ2hpbGQoaGl0QXJlYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTWVudSBjb250ZXh0dWVsIHN1ciBsZXMgw6lsw6ltZW50cyBkZSBsw6lnZW5kZVxyXG4gICAgICAgICAgICAgICAgbGVnZW5kSXRlbUdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3LDqWVyIHVuIFNlbGVjdGlvbklkIGJhc8OpIHN1ciBsYSBzw6lyaWUgKG1lYXN1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VyaWVzRGF0YSA9IGFsbFNlcmllcy5ncm91cGVkKClbMF0udmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXJpZXNEYXRhICYmIHNlcmllc0RhdGEuaWRlbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoU2VyaWVzKGRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlcywgc2VyaWVzRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHNlbGVjdGlvbklkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENsaWMgcG91ciBmaWx0cmVyL3PDqWxlY3Rpb25uZXIgbGEgc8OpcmllXHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJpZXNEYXRhID0gYWxsU2VyaWVzLmdyb3VwZWQoKVswXS52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcmllc0RhdGEgJiYgc2VyaWVzRGF0YS5pZGVudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhTZXJpZXMoZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzLCBzZXJpZXNEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZWxlY3Qoc2VsZWN0aW9uSWQsIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGVnZW5kR3JvdXAuYXBwZW5kQ2hpbGQobGVnZW5kSXRlbUdyb3VwKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChsZWdlbmRHcm91cCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0RGF0YUxhYmVsKHZhbHVlOiBudW1iZXIsIGRpc3BsYXlVbml0czogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZCA9IHZhbHVlO1xyXG4gICAgICAgIGxldCBzdWZmaXggPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoZGlzcGxheVVuaXRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEF1dG9cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHZhbHVlKSA+PSAxMDAwMDAwMDAwKSB7IFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwMDAwOyBcclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1kc1wiOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMDAwMCkgeyBcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDsgXHJcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBcIiBNXCI7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKHZhbHVlKSA+PSAxMDAwKSB7IFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwOyBcclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IFwiIEtcIjsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRpc3BsYXlVbml0cyA9PT0gMTAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIEtcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpc3BsYXlVbml0cyA9PT0gMTAwMDAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDAwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpc3BsYXlVbml0cyA9PT0gMTAwMDAwMDAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDAwMDAwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1kc1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkLnRvRml4ZWQocHJlY2lzaW9uKSArIHN1ZmZpeDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkU21vb3RoUGF0aChwb2ludHM6IFtudW1iZXIsIG51bWJlcl1bXSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGxldCBkID0gYE0gJHtwb2ludHNbMF1bMF19LCR7cG9pbnRzWzBdWzFdfWA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZCArPSBgIEwgJHtwb2ludHNbaV1bMF19LCR7cG9pbnRzW2ldWzFdfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRTdGVwcGVkUGF0aChwb2ludHM6IFtudW1iZXIsIG51bWJlcl1bXSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGxldCBkID0gYE0gJHtwb2ludHNbMF1bMF19LCR7cG9pbnRzWzBdWzFdfWA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZCArPSBgIEwgJHtwb2ludHNbaV1bMF19LCR7cG9pbnRzW2ktMV1bMV19IEwgJHtwb2ludHNbaV1bMF19LCR7cG9pbnRzW2ldWzFdfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGb3JtYXR0aW5nTW9kZWwoKTogcG93ZXJiaS52aXN1YWxzLkZvcm1hdHRpbmdNb2RlbCB7XHJcbiAgICAgICAgLy8gQ29tcHRlciBsZSBub21icmUgZGUgc8OpcmllcyAoY2hhbXBzIFZhbHVlcylcclxuICAgICAgICBsZXQgbmJTZXJpZXMgPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFWaWV3ICYmIHRoaXMuZGF0YVZpZXcuY2F0ZWdvcmljYWwgJiYgdGhpcy5kYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMpIHtcclxuICAgICAgICAgICAgbmJTZXJpZXMgPSB0aGlzLmRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaXN0ZSBkeW5hbWlxdWUgZGVzIGNhcmRzIMOgIGFmZmljaGVyXHJcbiAgICAgICAgY29uc3QgY2FyZHM6IGFueVtdID0gW107XHJcblxyXG4gICAgICAgIC8vIEFqb3V0ZXIgc2V1bGVtZW50IGxlcyBncm91cGVzIG7DqWNlc3NhaXJlc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG5iU2VyaWVzOyBpKyspIHtcclxuICAgICAgICAgICAgY2FyZHMucHVzaCh0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1tgbGluZVNldHRpbmdzJHtpfWBdKTtcclxuICAgICAgICAgICAgY2FyZHMucHVzaCh0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1tgZ3JhZGllbnRTZXR0aW5ncyR7aX1gXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBam91dGVyIGxlcyBhdXRyZXMgZ3JvdXBlcyBnw6luw6lyYXV4XHJcbiAgICAgICAgY2FyZHMucHVzaChcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueEF4aXNTZXR0aW5ncyxcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueUF4aXNTZXR0aW5ncyxcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLFxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5kYXRhTGFiZWxzLFxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBHw6luw6lyZXIgbGUgbW9kw6hsZSBhdmVjIHVuaXF1ZW1lbnQgbGVzIGNhcmRzIHV0aWxlc1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuYnVpbGRGb3JtYXR0aW5nTW9kZWwoeyBjYXJkcyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5R3JhZGllbnREaXJlY3Rpb24oZ3JhZGllbnQ6IFNWR0xpbmVhckdyYWRpZW50RWxlbWVudCwgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjFcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidmVydGljYWwtcmV2ZXJzZVwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMVwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjBcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIxXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjBcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbC1yZXZlcnNlXCI6IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngxXCIsIFwiMVwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTFcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkyXCIsIFwiMFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkaWFnb25hbFwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIxXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjFcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGlhZ29uYWwtcmV2ZXJzZVwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjFcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjFcIik7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdE51bWJlcihudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gRMOpdGVybWluZXIgbGUgbm9tYnJlIGRlIGTDqWNpbWFsZXMgbsOpY2Vzc2FpcmVzXHJcbiAgICAgICAgaWYgKG51bSA9PT0gMCkgcmV0dXJuIFwiMFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFic051bSA9IE1hdGguYWJzKG51bSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG91ciBsZXMgZ3JhbmRzIG5vbWJyZXMgKD49IDEwMDApLCBwYXMgZGUgZMOpY2ltYWxlc1xyXG4gICAgICAgIGlmIChhYnNOdW0gPj0gMTAwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChudW0pLnRvTG9jYWxlU3RyaW5nKCdmci1GUicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQb3VyIGxlcyBub21icmVzIGVudHJlIDEgZXQgOTk5LCBtYXggMiBkw6ljaW1hbGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgaWYgKGFic051bSA+PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKG51bSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgIHJldHVybiByb3VuZGVkLnRvTG9jYWxlU3RyaW5nKCdmci1GUicsIHsgXHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG91ciBsZXMgcGV0aXRzIG5vbWJyZXMgKDwgMSksIGFmZmljaGVyIGp1c3F1J8OgIDQgZMOpY2ltYWxlc1xyXG4gICAgICAgIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChhYnNOdW0pKTtcclxuICAgICAgICBjb25zdCBkZWNpbWFscyA9IE1hdGgubWluKDQsIE1hdGguYWJzKG1hZ25pdHVkZSkgKyAxKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbnVtLnRvTG9jYWxlU3RyaW5nKCdmci1GUicsIHsgXHJcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHMsXHJcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdFlBeGlzVmFsdWUodmFsdWU6IG51bWJlciwgZGlzcGxheVVuaXRzOiBzdHJpbmcsIHByZWNpc2lvbjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZm9ybWF0dGVkID0gdmFsdWU7XHJcbiAgICAgICAgbGV0IHN1ZmZpeCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHVuaXRzID0gcGFyc2VJbnQoZGlzcGxheVVuaXRzKTtcclxuXHJcbiAgICAgICAgaWYgKHVuaXRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEF1dG8gOiBkw6l0ZWN0aW9uIGF1dG9tYXRpcXVlXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMDAwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgc3VmZml4ID0gXCIgTWRzXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnModmFsdWUpID49IDEwMDAwMDApIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDtcclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1cIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgc3VmZml4ID0gXCIgS1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh1bml0cyA9PT0gMTAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIEtcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXRzID09PSAxMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDtcclxuICAgICAgICAgICAgc3VmZml4ID0gXCIgTVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pdHMgPT09IDEwMDAwMDAwMDApIHtcclxuICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICBzdWZmaXggPSBcIiBNZHNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFwcGxpcXVlciBsYSBwcsOpY2lzaW9uXHJcbiAgICAgICAgaWYgKHByZWNpc2lvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChmb3JtYXR0ZWQpLnRvTG9jYWxlU3RyaW5nKCdmci1GUicpICsgc3VmZml4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXR0ZWQudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJywge1xyXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb24sXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNpc2lvblxyXG4gICAgICAgICAgICB9KSArIHN1ZmZpeDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXREYXRlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFNpbXBsZW1lbnQgcmV0b3VybmVyIGxhIHZhbGV1ciB0ZWxsZSBxdWVsbGVcclxuICAgICAgICAvLyBQb3dlciBCSSBlbnZvaWUgZMOpasOgIGxlIGJvbiBmb3JtYXQgc2Vsb24gbGUgbml2ZWF1IGRlIGRyaWxsXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFZpc3VhbCB9IGZyb20gXCIuLi8uLi9zcmMvdmlzdWFsXCI7XG5pbXBvcnQgcG93ZXJiaVZpc3VhbHNBcGkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcbmltcG9ydCBJVmlzdWFsUGx1Z2luID0gcG93ZXJiaVZpc3VhbHNBcGkudmlzdWFscy5wbHVnaW5zLklWaXN1YWxQbHVnaW47XG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xuaW1wb3J0IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmlWaXN1YWxzQXBpLmV4dGVuc2liaWxpdHkudmlzdWFsLkRpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucztcbnZhciBwb3dlcmJpS2V5OiBhbnkgPSBcInBvd2VyYmlcIjtcbnZhciBwb3dlcmJpOiBhbnkgPSB3aW5kb3dbcG93ZXJiaUtleV07XG52YXIgY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHOiBJVmlzdWFsUGx1Z2luID0ge1xuICAgIG5hbWU6ICdjb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcnLFxuICAgIGRpc3BsYXlOYW1lOiAnY291cmJlZGVncmFkZScsXG4gICAgY2xhc3M6ICdWaXN1YWwnLFxuICAgIGFwaVZlcnNpb246ICc1LjMuMCcsXG4gICAgY3JlYXRlOiAob3B0aW9ucz86IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykgPT4ge1xuICAgICAgICBpZiAoVmlzdWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZpc3VhbChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyAnVmlzdWFsIGluc3RhbmNlIG5vdCBmb3VuZCc7XG4gICAgfSxcbiAgICBjcmVhdGVNb2RhbERpYWxvZzogKGRpYWxvZ0lkOiBzdHJpbmcsIG9wdGlvbnM6IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucywgaW5pdGlhbFN0YXRlOiBvYmplY3QpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVnaXN0cnkgPSAoPGFueT5nbG9iYWxUaGlzKS5kaWFsb2dSZWdpc3RyeTtcbiAgICAgICAgaWYgKGRpYWxvZ0lkIGluIGRpYWxvZ1JlZ2lzdHJ5KSB7XG4gICAgICAgICAgICBuZXcgZGlhbG9nUmVnaXN0cnlbZGlhbG9nSWRdKG9wdGlvbnMsIGluaXRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGN1c3RvbTogdHJ1ZVxufTtcbmlmICh0eXBlb2YgcG93ZXJiaSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHBvd2VyYmkudmlzdWFscyA9IHBvd2VyYmkudmlzdWFscyB8fCB7fTtcbiAgICBwb3dlcmJpLnZpc3VhbHMucGx1Z2lucyA9IHBvd2VyYmkudmlzdWFscy5wbHVnaW5zIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zW1wiY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHXCJdID0gY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHO1xufVxuZXhwb3J0IGRlZmF1bHQgY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHOyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=