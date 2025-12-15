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
    // Licensing avec l'API officielle Microsoft Power BI
    licenseManager;
    currentUserValidPlans;
    hasServicePlans;
    isLicenseUnsupportedEnv;
    isNotificationDisplayed = false;
    defaultNotificationType = 0 /* LicenseNotificationType.General */;
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
        // Initialiser le gestionnaire de licences (API officielle Microsoft Power BI)
        this.licenseManager = this.host.licenseManager;
        // Récupérer les plans de service de licence
        this.retrieveLicenseInfo();
    }
    /**
     * Récupère les informations de licence de l'utilisateur via l'API officielle Power BI
     * Utilise getAvailableServicePlans() pour obtenir les plans de service
     */
    retrieveLicenseInfo() {
        // 🧪 MODE TEST : Décommentez les lignes suivantes pour simuler un environnement sans licence
        // this.isLicenseUnsupportedEnv = true;
        // this.notifyLicenseStatus();
        // return;
        // 🧪 MODE TEST : Décommentez les lignes suivantes pour simuler une licence manquante
        // this.hasServicePlans = false;
        // this.isLicenseUnsupportedEnv = false;
        // this.notifyLicenseStatus();
        // return;
        if (!this.licenseManager) {
            console.log("ℹ️ Gestionnaire de licences non disponible - mode Desktop/Dev");
            // En mode développement, considérer que la licence est valide
            this.hasServicePlans = true;
            this.isLicenseUnsupportedEnv = false;
            return;
        }
        // Récupérer les plans de service disponibles pour cet utilisateur
        this.licenseManager.getAvailableServicePlans()
            .then((result) => {
            const { plans, isLicenseUnsupportedEnv, isLicenseInfoAvailable } = result;
            console.log("🔑 Informations de licence récupérées:", {
                plans,
                isLicenseUnsupportedEnv,
                isLicenseInfoAvailable
            });
            if (isLicenseInfoAvailable && !isLicenseUnsupportedEnv) {
                // Filtrer uniquement les plans actifs ou en avertissement
                this.currentUserValidPlans = plans?.filter(({ state }) => state === 1 /* ServicePlanState.Active */ || state === 2 /* ServicePlanState.Warning */);
                this.hasServicePlans = !!this.currentUserValidPlans?.length;
                if (this.hasServicePlans) {
                    console.log(`✅ ${this.currentUserValidPlans.length} plan(s) de service valide(s) trouvé(s)`);
                }
                else {
                    console.warn("⚠️ Aucun plan de service valide trouvé");
                }
            }
            this.isLicenseUnsupportedEnv = isLicenseUnsupportedEnv;
            // Afficher les notifications appropriées
            this.notifyLicenseStatus();
        })
            .catch((error) => {
            console.error("❌ Erreur lors de la récupération des licences:", error);
            // En cas d'erreur, ne pas bloquer le visuel en mode dev
            this.currentUserValidPlans = undefined;
            this.hasServicePlans = undefined;
        });
    }
    /**
     * Affiche les notifications de licence appropriées selon le statut
     */
    notifyLicenseStatus() {
        // Effacer toute notification précédente
        if (this.licenseManager) {
            this.licenseManager.clearLicenseNotification()
                .catch((err) => console.log("Erreur lors du nettoyage des notifications:", err));
        }
        // Si l'environnement ne supporte pas les licences
        if (this.isLicenseUnsupportedEnv) {
            this.showUnsupportedEnvNotification();
            return;
        }
        // Si aucun plan de service valide n'est trouvé
        if (this.hasServicePlans === false) {
            this.showLicenseRequiredNotification();
            return;
        }
        // Si on a des plans valides, ne rien afficher
        if (this.hasServicePlans === true) {
            this.isNotificationDisplayed = false;
            console.log("✅ Licence valide - Visuel fonctionnel");
        }
    }
    /**
     * Affiche la notification pour environnement non supporté
     */
    showUnsupportedEnvNotification() {
        if (!this.licenseManager || this.isNotificationDisplayed)
            return;
        this.licenseManager.notifyLicenseRequired(1 /* LicenseNotificationType.UnsupportedEnv */)
            .then((displayed) => {
            this.isNotificationDisplayed = displayed;
            if (displayed) {
                console.log("📢 Notification affichée : Environnement non supporté");
            }
        })
            .catch((err) => console.error("Erreur lors de l'affichage de la notification:", err));
    }
    /**
     * Affiche la notification pour licence requise
     * Peut utiliser General (icône) ou VisualIsBlocked (overlay complet)
     */
    showLicenseRequiredNotification() {
        if (!this.licenseManager || this.isNotificationDisplayed)
            return;
        // Utiliser VisualIsBlocked pour bloquer complètement le visuel
        // Ou utiliser General pour afficher uniquement une icône
        const notificationType = 2 /* LicenseNotificationType.VisualIsBlocked */;
        this.licenseManager.notifyLicenseRequired(notificationType)
            .then((displayed) => {
            this.isNotificationDisplayed = displayed;
            if (displayed) {
                console.log("📢 Notification affichée : Licence requise");
            }
        })
            .catch((err) => console.error("Erreur lors de l'affichage de la notification:", err));
    }
    /**
     * Affiche une notification pour une fonctionnalité bloquée
     * @param featureName Nom de la fonctionnalité bloquée
     */
    notifyFeatureBlocked(featureName) {
        if (!this.licenseManager)
            return;
        // Créer un message d'info-bulle personnalisé
        const tooltip = `La fonctionnalité "${featureName}" nécessite une licence valide.`;
        this.licenseManager.notifyFeatureBlocked(tooltip)
            .then((displayed) => {
            if (displayed) {
                console.log(`📢 Fonctionnalité bloquée : ${featureName}`);
            }
        })
            .catch((err) => console.error("Erreur lors de l'affichage de la notification:", err));
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
        // Vérifier le statut de la licence
        // Si aucun plan de service valide, le système de notification Power BI gère l'affichage
        if (this.hasServicePlans === false || this.isLicenseUnsupportedEnv === true) {
            // Nettoyer le visuel
            while (this.axisGroup.firstChild)
                this.axisGroup.removeChild(this.axisGroup.firstChild);
            while (this.linesGroup.firstChild)
                this.linesGroup.removeChild(this.linesGroup.firstChild);
            this.svg.setAttribute("width", options.viewport.width.toString());
            this.svg.setAttribute("height", options.viewport.height.toString());
            // Les notifications sont gérées par le système Power BI via notifyLicenseRequired()
            // Pas besoin d'afficher de message personnalisé ici
            return;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7UUFDRCxNQUFNLDJCQUEyQixDQUFDO0lBQ3RDLENBQUM7SUFDRCxpQkFBaUIsRUFBRSxDQUFDLFFBQWdCLEVBQUUsT0FBaUMsRUFBRSxZQUFvQixFQUFFLEVBQUU7UUFDN0YsTUFBTSxjQUFjLEdBQVMsVUFBVyxDQUFDLGNBQWMsQ0FBQztRQUN4RCxJQUFJLFFBQVEsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUM3QixJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDeEQsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFDRixJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDeEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3hELE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHFEQUFxRCxDQUFDLEdBQUcsbURBQW1ELENBQUM7QUFDekksQ0FBQztBQUNELGlFQUFlLG1EQUFtRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL0Zvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL2luZGV4LmpzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi91dGlscy9Gb3JtYXR0aW5nU2V0dGluZ3NVdGlscy5qcyIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9zcmMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHLy4vc3JjL3Zpc3VhbC50cyIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9zdHlsZS92aXN1YWwubGVzcz8xNGIwIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uLy50bXAvcHJlY29tcGlsZS92aXN1YWxQbHVnaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQb3dlcmJpIHV0aWxzIGNvbXBvbmVudHMgY2xhc3NlcyBmb3IgY3VzdG9tIHZpc3VhbCBmb3JtYXR0aW5nIHBhbmUgb2JqZWN0c1xuICpcbiAqL1xuaW1wb3J0ICogYXMgRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyIGZyb20gXCIuL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzXCI7XG5jbGFzcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgQ2FyZEdyb3VwRW50aXR5IGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIE1vZGVsIHtcbn1cbi8qKiBDb21wb3NpdGVDYXJkIGlzIHVzZSB0byBwb3B1bGF0ZSBhIGNhcmQgaW50byB0aGUgZm9ybWF0dGluZyBwYW5lIHdpdGggbXVsdGlwbGUgZ3JvdXBzICovXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlQ2FyZCBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIENhcmRHcm91cEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG4vKiogU2ltcGxlQ2FyZCBpcyB1c2UgdG8gcG9wdWxhdGUgYSBjYXJkIGludG8gdGhlIGZvcm1hdHRpbmcgcGFuZSBpbiBhIHNpbmdsZSBncm91cCAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUNhcmQgZXh0ZW5kcyBDYXJkR3JvdXBFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIFNpbXBsZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IHNsaWNlRGlzcGxheU5hbWUgPSAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRpc3BsYXlOYW1lS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kaXNwbGF5TmFtZUtleSkgOiB0aGlzLmRpc3BsYXlOYW1lO1xuICAgICAgICBjb25zdCBzbGljZURlc2NyaXB0aW9uID0gKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogc2xpY2VEaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzbGljZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdG9yOiBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0RGVzY3JpcHRvcihvYmplY3ROYW1lLCB0aGlzKSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHRoaXMubmFtZVxuICAgICAgICAgICAgfV07XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gKF9hID0gZGF0YVZpZXdPYmplY3RzID09PSBudWxsIHx8IGRhdGFWaWV3T2JqZWN0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YVZpZXdPYmplY3RzW29iamVjdE5hbWVdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbdGhpcy5uYW1lXTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlci5nZXRQcm9wZXJ0eVZhbHVlKHRoaXMsIG5ld1ZhbHVlLCB0aGlzLnZhbHVlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQWxpZ25tZW50R3JvdXAgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiQWxpZ25tZW50R3JvdXBcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuQWxpZ25tZW50R3JvdXAgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBtb2RlOiB0aGlzLm1vZGUsIHN1cHBvcnRzTm9TZWxlY3Rpb246IHRoaXMuc3VwcG9ydHNOb1NlbGVjdGlvbiB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVG9nZ2xlU3dpdGNoIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRvZ2dsZVN3aXRjaFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ub2dnbGVTd2l0Y2ggKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkNvbG9yUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkNvbG9yUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgZGVmYXVsdENvbG9yOiB0aGlzLmRlZmF1bHRDb2xvciwgaXNOb0ZpbGxJdGVtU3VwcG9ydGVkOiB0aGlzLmlzTm9GaWxsSXRlbVN1cHBvcnRlZCB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTnVtVXBEb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk51bVVwRG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5OdW1VcERvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBvcHRpb25zOiB0aGlzLm9wdGlvbnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlciBleHRlbmRzIE51bVVwRG93biB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU2xpZGVyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlNsaWRlciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEYXRlUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRhdGVQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBwbGFjZWhvbGRlcjogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5wbGFjZWhvbGRlcktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMucGxhY2Vob2xkZXJLZXkpIDogdGhpcy5wbGFjZWhvbGRlciwgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJdGVtRHJvcGRvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpdGVtczogdGhpcy5pdGVtcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXV0b0Ryb3Bkb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgbWVyZ2VWYWx1ZXM6IHRoaXMubWVyZ2VWYWx1ZXMsIGZpbHRlclZhbHVlczogdGhpcy5maWx0ZXJWYWx1ZXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkR1cmF0aW9uUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkR1cmF0aW9uUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFcnJvclJhbmdlQ29udHJvbCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJFcnJvclJhbmdlQ29udHJvbFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5FcnJvclJhbmdlQ29udHJvbCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRmllbGRQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmllbGRQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmllbGRQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMsIGFsbG93TXVsdGlwbGVWYWx1ZXM6IHRoaXMuYWxsb3dNdWx0aXBsZVZhbHVlcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSXRlbUZsYWdzU2VsZWN0aW9uIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZsYWdzU2VsZWN0aW9uXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZsYWdzU2VsZWN0aW9uICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXRlbXM6IHRoaXMuaXRlbXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF1dG9GbGFnc1NlbGVjdGlvbiBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGbGFnc1NlbGVjdGlvblwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GbGFnc1NlbGVjdGlvbiAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRJbnB1dFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5UZXh0SW5wdXQgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBUZXh0SW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRBcmVhXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRleHRBcmVhICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb250UGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZvbnRQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRm9udFBpY2tlciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhZGllbnRCYXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiR3JhZGllbnRCYXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuR3JhZGllbnRCYXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkltYWdlVXBsb2FkXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkltYWdlVXBsb2FkICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMaXN0RWRpdG9yIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkxpc3RFZGl0b3JcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTGlzdEVkaXRvciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVhZE9ubHlUZXh0IGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlJlYWRPbmx5VGV4dFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5SZWFkT25seVRleHQgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNoYXBlTWFwU2VsZWN0b3IgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU2hhcGVNYXBTZWxlY3RvclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5TaGFwZU1hcFNlbGVjdG9yICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXNBek1hcFJlZmVyZW5jZVNlbGVjdG9yOiB0aGlzLmlzQXpNYXBSZWZlcmVuY2VTZWxlY3RvciB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlU2xpY2UgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kaXNwbGF5TmFtZUtleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGlzcGxheU5hbWVLZXkpIDogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRlc2NyaXB0aW9uS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kZXNjcmlwdGlvbktleSkgOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9udENvbnRyb2wgZXh0ZW5kcyBDb21wb3NpdGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRm9udENvbnRyb2xcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRm9udENvbnRyb2wgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuZm9udEZhbWlseS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9udFNpemUuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGJvbGQ6IChfYSA9IHRoaXMuYm9sZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBpdGFsaWM6IChfYiA9IHRoaXMuaXRhbGljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHVuZGVybGluZTogKF9jID0gdGhpcy51bmRlcmxpbmUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb250RmFtaWx5LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5mb250U2l6ZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmJvbGQgPyB0aGlzLmJvbGQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLml0YWxpYyA/IHRoaXMuaXRhbGljLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy51bmRlcmxpbmUgPyB0aGlzLnVuZGVybGluZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5mb250U2l6ZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYSA9IHRoaXMuYm9sZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9iID0gdGhpcy5pdGFsaWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYyA9IHRoaXMudW5kZXJsaW5lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Muc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNYXJnaW5QYWRkaW5nIGV4dGVuZHMgQ29tcG9zaXRlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk1hcmdpblBhZGRpbmdcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTWFyZ2luUGFkZGluZyAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMuYm90dG9tLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnJpZ2h0LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMudG9wLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuYm90dG9tLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB0aGlzLmxlZnQuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnJpZ2h0LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy50b3Auc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLmJvdHRvbS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250YWluZXJJdGVtIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcy5tYXAiLCJpbXBvcnQgeyBDb21wb3NpdGVDYXJkLCBTaW1wbGVDYXJkIH0gZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyID0gbG9jYWxpemF0aW9uTWFuYWdlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdmlzdWFsIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWwgZnJvbSBtZXRhZGF0YSBkYXRhVmlld1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFWaWV3cyBtZXRhZGF0YSBkYXRhVmlldyBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB2aXN1YWwgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbFxuICAgICAqL1xuICAgIHBvcHVsYXRlRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwodHlwZUNsYXNzLCBkYXRhVmlldykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBsZXQgZGVmYXVsdFNldHRpbmdzID0gbmV3IHR5cGVDbGFzcygpO1xuICAgICAgICBsZXQgZGF0YVZpZXdPYmplY3RzID0gKF9hID0gZGF0YVZpZXcgPT09IG51bGwgfHwgZGF0YVZpZXcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3Lm1ldGFkYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub2JqZWN0cztcbiAgICAgICAgaWYgKGRhdGFWaWV3T2JqZWN0cykge1xuICAgICAgICAgICAgLy8gbG9vcCBvdmVyIGVhY2ggZm9ybWF0dGluZyBwcm9wZXJ0eSBhbmQgc2V0IGl0cyBuZXcgdmFsdWUgaWYgZXhpc3RzXG4gICAgICAgICAgICAoX2IgPSBkZWZhdWx0U2V0dGluZ3MuY2FyZHMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkIGluc3RhbmNlb2YgQ29tcG9zaXRlQ2FyZClcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID8gW2NhcmRdIDogY2FyZC5ncm91cHMpO1xuICAgICAgICAgICAgICAgIGNhcmRHcm91cEluc3RhbmNlcy5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBjdXJyZW50IHRvcCBsZXZlbCB0b2dnbGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gbnVsbCB8fCBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIChfZCA9IChfYyA9IGNhcmRHcm91cEluc3RhbmNlID09PSBudWxsIHx8IGNhcmRHcm91cEluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGNvbnRhaW5lckl0ZW0gPT09IG51bGwgfHwgY29udGFpbmVySXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGFpbmVySXRlbS5zbGljZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0U2V0dGluZ3M7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGZvcm1hdHRpbmcgbW9kZWwgYnkgcGFyc2luZyBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIG9iamVjdFxuICAgICAqXG4gICAgICogQHJldHVybnMgcG93ZXJiaSB2aXN1YWwgZm9ybWF0dGluZyBtb2RlbFxuICAgICAqL1xuICAgIGJ1aWxkRm9ybWF0dGluZ01vZGVsKGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKSB7XG4gICAgICAgIGxldCBmb3JtYXR0aW5nTW9kZWwgPSB7XG4gICAgICAgICAgICBjYXJkczogW11cbiAgICAgICAgfTtcbiAgICAgICAgZm9ybWF0dGluZ1NldHRpbmdzTW9kZWwuY2FyZHNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGluZ0NhcmQgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZC5kaXNwbGF5TmFtZUtleSkgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZC5kaXNwbGF5TmFtZUtleSkgOiBjYXJkLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGVzY3JpcHRpb25LZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGVzY3JpcHRpb25LZXkpIDogY2FyZC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgICAgIHVpZDogY2FyZC5uYW1lICsgXCItY2FyZFwiLFxuICAgICAgICAgICAgICAgIGFuYWx5dGljc1BhbmU6IGNhcmQuYW5hbHl0aWNzUGFuZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvYmplY3ROYW1lID0gY2FyZC5uYW1lO1xuICAgICAgICAgICAgaWYgKGNhcmQudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgIGxldCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZC50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQudG9wTGV2ZWxUb2dnbGUgPSB0b3BMZXZlbFRvZ2dsZVNsaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9hID0gY2FyZC5vblByZVByb2Nlc3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGNhcmQpO1xuICAgICAgICAgICAgY29uc3QgaXNTaW1wbGVDYXJkID0gY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQ7XG4gICAgICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoaXNTaW1wbGVDYXJkID9cbiAgICAgICAgICAgICAgICBbY2FyZF0uZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpIDpcbiAgICAgICAgICAgICAgICBjYXJkLmdyb3Vwcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkpO1xuICAgICAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBVaWQgPSBjYXJkR3JvdXBJbnN0YW5jZS5uYW1lICsgXCItZ3JvdXBcIjtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGdyb3VwIGZvciBlYWNoIGdyb3VwXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0dyb3VwID0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzbGljZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB1aWQ6IGdyb3VwVWlkLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogY2FyZEdyb3VwSW5zdGFuY2UuY29sbGFwc2libGUsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5U2F2ZVNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2UuZGVsYXlTYXZlU2xpY2VzLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2FyZEdyb3VwSW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkUmVhc29uOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNhYmxlZFJlYXNvbixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLmdyb3Vwcy5wdXNoKGZvcm1hdHRpbmdHcm91cCk7XG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSBmb3JtYXR0aW5nIG1vZGVsIGFkZHMgZGF0YSBwb2ludHMgb3IgdG9wIGNhdGVnb3JpZXMgKExpa2Ugd2hlbiB5b3UgbW9kaWZ5IHNwZWNpZmljIHZpc3VhbCBjYXRlZ29yeSBjb2xvcikuXG4gICAgICAgICAgICAgICAgLy8gdGhlc2UgY2F0ZWdvcmllcyB1c2Ugc2FtZSBvYmplY3QgbmFtZSBhbmQgcHJvcGVydHkgbmFtZSBmcm9tIGNhcGFiaWxpdGllcyBhbmQgdGhlIGdlbmVyYXRlZCB1aWQgd2lsbCBiZSB0aGUgc2FtZSBmb3IgdGhlc2UgZm9ybWF0dGluZyBjYXRlZ29yaWVzIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBTb2x1dGlvbiA9PiBTYXZlIHNsaWNlIG5hbWVzIHRvIG1vZGlmeSBlYWNoIHNsaWNlIHVpZCB0byBiZSB1bmlxdWUgYnkgYWRkaW5nIGNvdW50ZXIgdmFsdWUgdG8gdGhlIG5ldyBzbGljZSB1aWRcbiAgICAgICAgICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgc2xpY2UgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyVWlkID0gZ3JvdXBVaWQgKyBcIi1jb250YWluZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0NvbnRhaW5lciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lci5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXIuZGlzcGxheU5hbWVLZXkpIDogY29udGFpbmVyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVyLmRlc2NyaXB0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lci5kZXNjcmlwdGlvbktleSkgOiBjb250YWluZXIuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lclVpZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY29udGFpbmVySXRlbXMuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbSBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckllbU5hbWUgPSBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5ID8gY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJJdGVtVWlkID0gY29udGFpbmVyVWlkICsgY29udGFpbmVySWVtTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0aW5nQ29udGFpbmVySXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5KSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lckl0ZW1VaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlcyBhbmQgYWRkIHRoZW0gdG8gY3VycmVudCBmb3JtYXR0aW5nIGNvbnRhaW5lciBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlczogY29udGFpbmVySXRlbS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdDb250YWluZXJJdGVtLnNsaWNlcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDb250YWluZXIuY29udGFpbmVySXRlbXMucHVzaChmb3JtYXR0aW5nQ29udGFpbmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nR3JvdXAuY29udGFpbmVyID0gZm9ybWF0dGluZ0NvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcExldmVsVG9nZ2xlU2xpY2UgPSBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wTGV2ZWxUb2dnbGVTbGljZS5zdXBwcmVzc0Rpc3BsYXlOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChmb3JtYXR0aW5nR3JvdXAuZGlzcGxheU5hbWUgPT0gdW5kZWZpbmVkID8gZm9ybWF0dGluZ0NhcmQgOiBmb3JtYXR0aW5nR3JvdXApLnRvcExldmVsVG9nZ2xlID0gdG9wTGV2ZWxUb2dnbGVTbGljZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzOiBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdHcm91cC5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC5yZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKTtcbiAgICAgICAgICAgIGZvcm1hdHRpbmdNb2RlbC5jYXJkcy5wdXNoKGZvcm1hdHRpbmdDYXJkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0aW5nTW9kZWw7XG4gICAgfVxuICAgIGJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlcyB9KSB7XG4gICAgICAgIC8vIEZpbHRlciBzbGljZXMgYmFzZWQgb24gdGhlaXIgdmlzaWJpbGl0eVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGluZ1NsaWNlID0gc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgaWYgKGZvcm1hdHRpbmdTbGljZSkge1xuICAgICAgICAgICAgICAgIC8vIE1vZGlmeSBmb3JtYXR0aW5nIHNsaWNlIHVpZCBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICBpZiAoc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSsrO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nU2xpY2UudWlkID0gYCR7Zm9ybWF0dGluZ1NsaWNlLnVpZH0tJHtzbGljZU5hbWVzW3NsaWNlLm5hbWVdfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdTbGljZXMucHVzaChmb3JtYXR0aW5nU2xpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gUHJvY2VlZGVkIHNsaWNlIG5hbWVzIGFyZSBzYXZlZCB0byBwcmV2ZW50IGR1cGxpY2F0ZWQgZGVmYXVsdCBkZXNjcmlwdG9ycyBpbiBjYXNlIG9mIHVzaW5nIFxuICAgICAgICAvLyBmb3JtYXR0aW5nIGNhdGVnb3JpZXMgJiBzZWxlY3RvcnMsIHNpbmNlIHRoZXkgaGF2ZSB0aGUgc2FtZSBkZXNjcmlwdG9yIG9iamVjdE5hbWUgYW5kIHByb3BlcnR5TmFtZVxuICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgIGxldCByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBsZXQgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICAgICAgbGV0IGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgaWYgKGNhcmQgaW5zdGFuY2VvZiBDb21wb3NpdGVDYXJkICYmIGNhcmQudG9wTGV2ZWxTbGljZSlcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLnB1c2goLi4uKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUpKTtcbiAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID9cbiAgICAgICAgICAgIFtjYXJkXS5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkgOlxuICAgICAgICAgICAgY2FyZC5ncm91cHMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpKTtcbiAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUsIGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcywgc2xpY2VOYW1lcywgY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSk7XG4gICAgICAgICAgICAoX2IgPSAoX2EgPSBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQodGhpcy5nZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSwgY29udGFpbmVySXRlbS5zbGljZXMsIHNsaWNlTmFtZXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMucHVzaCguLi5jYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdChjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgfVxuICAgIGdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUsIHNsaWNlcywgc2xpY2VOYW1lcywgdG9wTGV2ZWxTbGljZSkge1xuICAgICAgICBsZXQgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgaWYgKHRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgIHNsaWNlTmFtZXNbdG9wTGV2ZWxTbGljZS5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdCh0b3BMZXZlbFNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgIGlmIChzbGljZSAmJiAhc2xpY2VOYW1lc1tzbGljZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBmb3JtYXR0aW5nU2V0dGluZ3MgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZVwiO1xuZXhwb3J0IHsgZm9ybWF0dGluZ1NldHRpbmdzLCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEJ1aWxkIGFuZCByZXR1cm4gZm9ybWF0dGluZyBkZXNjcmlwdG9yIGZvciBzaW1wbGUgc2xpY2VcbiAqXG4gKiBAcGFyYW0gb2JqZWN0TmFtZSBPYmplY3QgbmFtZSBmcm9tIGNhcGFiaWxpdGllc1xuICogQHBhcmFtIHNsaWNlIGZvcm1hdHRpbmcgc2ltcGxlIHNsaWNlXG4gKiBAcmV0dXJucyBzaW1wbGUgc2xpY2UgZm9ybWF0dGluZyBkZXNjcmlwdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXNjcmlwdG9yKG9iamVjdE5hbWUsIHNsaWNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgcHJvcGVydHlOYW1lOiBzbGljZS5uYW1lLFxuICAgICAgICBzZWxlY3Rvcjogc2xpY2Uuc2VsZWN0b3IsXG4gICAgICAgIGFsdENvbnN0YW50VmFsdWVTZWxlY3Rvcjogc2xpY2UuYWx0Q29uc3RhbnRTZWxlY3RvcixcbiAgICAgICAgaW5zdGFuY2VLaW5kOiBzbGljZS5pbnN0YW5jZUtpbmRcbiAgICB9O1xufVxuLyoqXG4gKiBHZXQgcHJvcGVydHkgdmFsdWUgZnJvbSBkYXRhdmlldyBvYmplY3RzIGlmIGV4aXN0c1xuICogRWxzZSByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUgZnJvbSBmb3JtYXR0aW5nIHNldHRpbmdzIG9iamVjdFxuICpcbiAqIEBwYXJhbSB2YWx1ZSBkYXRhdmlldyBvYmplY3QgdmFsdWVcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgZm9ybWF0dGluZyBzZXR0aW5ncyBkZWZhdWx0IHZhbHVlXG4gKiBAcmV0dXJucyBmb3JtYXR0aW5nIHByb3BlcnR5IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKHNsaWNlLCB2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiAhdmFsdWUuc29saWQpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLnNvbGlkLmNvbG9yIH07XG4gICAgfVxuICAgIGlmIChzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2UuaXRlbXMpIHtcbiAgICAgICAgbGV0IGl0ZW1zQXJyYXkgPSBzbGljZS5pdGVtcztcbiAgICAgICAgcmV0dXJuIGl0ZW1zQXJyYXkuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT0gdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NVdGlscy5qcy5tYXAiLCIvKlxyXG4gKiAgUG93ZXIgQkkgVmlzdWFsaXphdGlvbnNcclxuICpcclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uXHJcbiAqICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTUlUIExpY2Vuc2VcclxuICpcclxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiXCJTb2Z0d2FyZVwiXCIpLCB0byBkZWFsXHJcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgKkFTIElTKiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiAqICBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbFwiO1xyXG5cclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2ltcGxlQ2FyZDtcclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlID0gZm9ybWF0dGluZ1NldHRpbmdzLlNsaWNlO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwgPSBmb3JtYXR0aW5nU2V0dGluZ3MuTW9kZWw7XHJcblxyXG4vKipcclxuICogR2VuZXJpYyBMaW5lIFNldHRpbmdzIENhcmRcclxuICovXHJcbmNsYXNzIExpbmVTZXR0aW5nc0NhcmQgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIGxpbmVDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwibGluZUNvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ291bGV1ciBkZSBsYSBsaWduZVwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzQjYwQzRcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdHJva2VXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInN0cm9rZVdpZHRoXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiw4lwYWlzc2V1clwiLFxyXG4gICAgICAgIHZhbHVlOiAzXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93TWFya2VycyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dNYXJrZXJzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbGVzIG1hcnF1ZXVyc1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFya2VyU2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm1hcmtlclNpemVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUYWlsbGUgZGVzIG1hcnF1ZXVyc1wiLFxyXG4gICAgICAgIHZhbHVlOiA1XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaW5lU3R5bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJsaW5lU3R5bGVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdHlsZSBkZSBsaWduZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiQ29udGludVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGFzaGVkXCIsIGRpc3BsYXlOYW1lOiBcIlBvaW50aWxsw6lzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkb3R0ZWRcIiwgZGlzcGxheU5hbWU6IFwiUG9pbnRzXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiQ29udGludVwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN0ZXBwZWQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzdGVwcGVkXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTGlnbmUgZW4gZXNjYWxpZXJcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW1xyXG4gICAgICAgIHRoaXMubGluZUNvbG9yLCBcclxuICAgICAgICB0aGlzLnN0cm9rZVdpZHRoLCBcclxuICAgICAgICB0aGlzLmxpbmVTdHlsZSxcclxuICAgICAgICB0aGlzLnNob3dNYXJrZXJzLCBcclxuICAgICAgICB0aGlzLm1hcmtlclNpemUsXHJcbiAgICAgICAgdGhpcy5zdGVwcGVkXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZywgZGVmYXVsdENvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xyXG4gICAgICAgIHRoaXMubGluZUNvbG9yLnZhbHVlLnZhbHVlID0gZGVmYXVsdENvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJpYyBHcmFkaWVudCBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBHcmFkaWVudFNldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvd0dyYWRpZW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic2hvd0dyYWRpZW50XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbGUgZMOpZ3JhZMOpXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGdyYWRpZW50Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImdyYWRpZW50Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDb3VsZXVyIGR1IGTDqWdyYWTDqVwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzQjYwQzRcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBncmFkaWVudEludGVuc2l0eSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImdyYWRpZW50SW50ZW5zaXR5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSW50ZW5zaXTDqSAoMC0xKVwiLFxyXG4gICAgICAgIHZhbHVlOiAwLjNcclxuICAgIH0pO1xyXG5cclxuICAgIGdyYWRpZW50RGlyZWN0aW9uID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZ3JhZGllbnREaXJlY3Rpb25cIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEaXJlY3Rpb25cIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcInZlcnRpY2FsXCIsIGRpc3BsYXlOYW1lOiBcIkhhdXQg4oaSIEJhc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwidmVydGljYWwtcmV2ZXJzZVwiLCBkaXNwbGF5TmFtZTogXCJCYXMg4oaSIEhhdXRcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImhvcml6b250YWxcIiwgZGlzcGxheU5hbWU6IFwiR2F1Y2hlIOKGkiBEcm9pdGVcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImhvcml6b250YWwtcmV2ZXJzZVwiLCBkaXNwbGF5TmFtZTogXCJEcm9pdGUg4oaSIEdhdWNoZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGlhZ29uYWxcIiwgZGlzcGxheU5hbWU6IFwiRGlhZ29uYWxlIOKGmFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGlhZ29uYWwtcmV2ZXJzZVwiLCBkaXNwbGF5TmFtZTogXCJEaWFnb25hbGUg4oaZXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwidmVydGljYWxcIiwgZGlzcGxheU5hbWU6IFwiSGF1dCDihpIgQmFzXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93R3JhZGllbnQsXHJcbiAgICAgICAgdGhpcy5ncmFkaWVudENvbG9yLCBcclxuICAgICAgICB0aGlzLmdyYWRpZW50SW50ZW5zaXR5LCBcclxuICAgICAgICB0aGlzLmdyYWRpZW50RGlyZWN0aW9uXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZywgZGVmYXVsdENvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JhZGllbnRDb2xvci52YWx1ZS52YWx1ZSA9IGRlZmF1bHRDb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFggQXhpcyBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBYQXhpc1NldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsJ2F4ZSBYXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGF4aXNDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYXhpc0NvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ291bGV1clwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiM2NjY2NjZcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGFpbGxlIGR1IHRleHRlXCIsXHJcbiAgICAgICAgdmFsdWU6IDExXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZhbWlsbGUgZGUgcG9saWNlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQXJpYWxcIiwgZGlzcGxheU5hbWU6IFwiQXJpYWxcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkNvdXJpZXIgTmV3XCIsIGRpc3BsYXlOYW1lOiBcIkNvdXJpZXIgTmV3XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJHZW9yZ2lhXCIsIGRpc3BsYXlOYW1lOiBcIkdlb3JnaWFcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlZlcmRhbmFcIiwgZGlzcGxheU5hbWU6IFwiVmVyZGFuYVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyIGxlIHRpdHJlXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aXRsZVRleHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZVRleHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0ZSBkdSB0aXRyZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlRpdHJlIGRlIGwnYXhlIFhcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ4QXhpc1NldHRpbmdzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJBeGUgWFwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LFxyXG4gICAgICAgIHRoaXMuYXhpc0NvbG9yLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LFxyXG4gICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgdGhpcy50aXRsZVRleHRcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBZIEF4aXMgU2V0dGluZ3MgQ2FyZFxyXG4gKi9cclxuY2xhc3MgWUF4aXNTZXR0aW5nc0NhcmQgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIHNob3cgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbCdheGUgWVwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBheGlzQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImF4aXNDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXJcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjNjY2NjY2XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udFNpemUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRhaWxsZSBkdSB0ZXh0ZVwiLFxyXG4gICAgICAgIHZhbHVlOiAxMVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udEZhbWlseSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGYW1pbGxlIGRlIHBvbGljZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiU2Vnb2UgVUlcIiwgZGlzcGxheU5hbWU6IFwiU2Vnb2UgVUlcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkFyaWFsXCIsIGRpc3BsYXlOYW1lOiBcIkFyaWFsXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJDb3VyaWVyIE5ld1wiLCBkaXNwbGF5TmFtZTogXCJDb3VyaWVyIE5ld1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiR2VvcmdpYVwiLCBkaXNwbGF5TmFtZTogXCJHZW9yZ2lhXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJWZXJkYW5hXCIsIGRpc3BsYXlOYW1lOiBcIlZlcmRhbmFcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRpdGxlID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidGl0bGVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsZSB0aXRyZVwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGVUZXh0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwidGl0bGVUZXh0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dGUgZHUgdGl0cmVcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJUaXRyZSBkZSBsJ2F4ZSBZXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGRpc3BsYXlVbml0cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImRpc3BsYXlVbml0c1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlVuaXTDqXMgZCdhZmZpY2hhZ2VcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjBcIiwgZGlzcGxheU5hbWU6IFwiQXV0b1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMVwiLCBkaXNwbGF5TmFtZTogXCJBdWN1blwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMFwiLCBkaXNwbGF5TmFtZTogXCJNaWxsaWVycyAoSylcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDAwMDBcIiwgZGlzcGxheU5hbWU6IFwiTWlsbGlvbnMgKE0pXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIxMDAwMDAwMDAwXCIsIGRpc3BsYXlOYW1lOiBcIk1pbGxpYXJkcyAoTWRzKVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIjBcIiwgZGlzcGxheU5hbWU6IFwiQXV0b1wiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByZWNpc2lvbiA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInByZWNpc2lvblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkTDqWNpbWFsZXNcIixcclxuICAgICAgICB2YWx1ZTogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlWUF4aXNCaXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ1c2VZQXhpc0Jpc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyIGF4ZSBZIGJpc1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ5QXhpc1NldHRpbmdzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJBeGUgWVwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LFxyXG4gICAgICAgIHRoaXMuYXhpc0NvbG9yLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LFxyXG4gICAgICAgIHRoaXMuZGlzcGxheVVuaXRzLFxyXG4gICAgICAgIHRoaXMucHJlY2lzaW9uLFxyXG4gICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgdGhpcy50aXRsZVRleHQsXHJcbiAgICAgICAgdGhpcy51c2VZQXhpc0Jpc1xyXG4gICAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdyaWQgU2V0dGluZ3MgQ2FyZFxyXG4gKi9cclxuY2xhc3MgR3JpZFNldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvd0hvcml6b250YWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93SG9yaXpvbnRhbFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkdyaWxsZSBob3Jpem9udGFsZVwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93VmVydGljYWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93VmVydGljYWxcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJHcmlsbGUgdmVydGljYWxlXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBncmlkQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImdyaWRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgZGUgbGEgZ3JpbGxlXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2YwZjBmMFwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGdyaWRUaGlja25lc3MgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJncmlkVGhpY2tuZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiw4lwYWlzc2V1clwiLFxyXG4gICAgICAgIHZhbHVlOiAxXHJcbiAgICB9KTtcclxuXHJcbiAgICBncmlkU3R5bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJncmlkU3R5bGVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdHlsZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiQ29udGludVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGFzaGVkXCIsIGRpc3BsYXlOYW1lOiBcIlBvaW50aWxsw6lzXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiZGFzaGVkXCIsIGRpc3BsYXlOYW1lOiBcIlBvaW50aWxsw6lzXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJncmlkU2V0dGluZ3NcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkdyaWxsZVwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93SG9yaXpvbnRhbCxcclxuICAgICAgICB0aGlzLnNob3dWZXJ0aWNhbCxcclxuICAgICAgICB0aGlzLmdyaWRDb2xvcixcclxuICAgICAgICB0aGlzLmdyaWRUaGlja25lc3MsXHJcbiAgICAgICAgdGhpcy5ncmlkU3R5bGVcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEYXRhIExhYmVscyBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBEYXRhTGFiZWxzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsZXMgw6l0aXF1ZXR0ZXNcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJjb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXJcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMDAwMDAwXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udFNpemUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRhaWxsZSBkdSB0ZXh0ZVwiLFxyXG4gICAgICAgIHZhbHVlOiA5XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZhbWlsbGUgZGUgcG9saWNlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQXJpYWxcIiwgZGlzcGxheU5hbWU6IFwiQXJpYWxcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkNvdXJpZXIgTmV3XCIsIGRpc3BsYXlOYW1lOiBcIkNvdXJpZXIgTmV3XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiU2Vnb2UgVUlcIiwgZGlzcGxheU5hbWU6IFwiU2Vnb2UgVUlcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaXNwbGF5VW5pdHMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJkaXNwbGF5VW5pdHNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJVbml0w6lzIGQnYWZmaWNoYWdlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIwXCIsIGRpc3BsYXlOYW1lOiBcIkF1dG9cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjFcIiwgZGlzcGxheU5hbWU6IFwiQXVjdW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDBcIiwgZGlzcGxheU5hbWU6IFwiTWlsbGllcnMgKEspXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIxMDAwMDAwXCIsIGRpc3BsYXlOYW1lOiBcIk1pbGxpb25zIChNKVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMDAwMDAwMFwiLCBkaXNwbGF5TmFtZTogXCJNaWxsaWFyZHMgKE1kcylcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIwXCIsIGRpc3BsYXlOYW1lOiBcIkF1dG9cIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcmVjaXNpb24gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJwcmVjaXNpb25cIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEw6ljaW1hbGVzXCIsXHJcbiAgICAgICAgdmFsdWU6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIG5hbWU6IHN0cmluZyA9IFwiZGF0YUxhYmVsc1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiw4l0aXF1ZXR0ZXMgZGUgZG9ubsOpZXNcIjtcclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW1xyXG4gICAgICAgIHRoaXMuc2hvdyxcclxuICAgICAgICB0aGlzLmNvbG9yLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LFxyXG4gICAgICAgIHRoaXMuZGlzcGxheVVuaXRzLFxyXG4gICAgICAgIHRoaXMucHJlY2lzaW9uXHJcbiAgICBdO1xyXG59XHJcblxyXG4vKipcclxuICogTGVnZW5kIFNldHRpbmdzIENhcmRcclxuICovXHJcbmNsYXNzIExlZ2VuZENhcmQgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIHNob3cgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbGEgbMOpZ2VuZGVcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcG9zaXRpb24gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJwb3NpdGlvblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlBvc2l0aW9uXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJUb3BcIiwgZGlzcGxheU5hbWU6IFwiSGF1dFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQm90dG9tXCIsIGRpc3BsYXlOYW1lOiBcIkJhc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiTGVmdFwiLCBkaXNwbGF5TmFtZTogXCJHYXVjaGVcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlJpZ2h0XCIsIGRpc3BsYXlOYW1lOiBcIkRyb2l0ZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiVG9wQ2VudGVyXCIsIGRpc3BsYXlOYW1lOiBcIkhhdXQgY2VudHJlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJCb3R0b21DZW50ZXJcIiwgZGlzcGxheU5hbWU6IFwiQmFzIGNlbnRyZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlRvcFwiLCBkaXNwbGF5TmFtZTogXCJIYXV0XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJmb250Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDb3VsZXVyXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzY2NjY2NlwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRTaXplID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUYWlsbGUgZHUgdGV4dGVcIixcclxuICAgICAgICB2YWx1ZTogMTBcclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRGYW1pbHkgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRmFtaWxsZSBkZSBwb2xpY2VcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJBcmlhbFwiLCBkaXNwbGF5TmFtZTogXCJBcmlhbFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291cmllciBOZXdcIiwgZGlzcGxheU5hbWU6IFwiQ291cmllciBOZXdcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG5hbWU6IHN0cmluZyA9IFwibGVnZW5kXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJMw6lnZW5kZVwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgdGhpcy5mb250Q29sb3IsXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSxcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHlcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWaXN1YWwgc2V0dGluZ3MgbW9kZWwgY2xhc3NcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIHtcclxuICAgIC8vIFBhbGV0dGUgcGFyIGTDqWZhdXRcclxuICAgIHByaXZhdGUgZGVmYXVsdENvbG9ycyA9IFtcIiMzQjYwQzRcIiwgXCIjRTk0RjM3XCIsIFwiIzQ0QkJBNFwiLCBcIiNGN0I1MzhcIiwgXCIjREI1NDYxXCIsIFwiIzNGODhDNVwiLCBcIiM3RDRFNTdcIiwgXCIjRDY2ODUzXCIsIFwiIzIxMkQ0MFwiLCBcIiMxMTE1MUNcIl07XHJcblxyXG4gICAgbGluZVNldHRpbmdzMSA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzMVwiLCBcIkxpZ25lIDFcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzBdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3MxID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczFcIiwgXCJEw6lncmFkw6kgMVwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbMF0pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczIgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczJcIiwgXCJMaWduZSAyXCIsIHRoaXMuZGVmYXVsdENvbG9yc1sxXSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzMiA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3MyXCIsIFwiRMOpZ3JhZMOpIDJcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzFdKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3MzID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3MzXCIsIFwiTGlnbmUgM1wiLCB0aGlzLmRlZmF1bHRDb2xvcnNbMl0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczMgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzM1wiLCBcIkTDqWdyYWTDqSAzXCIsIHRoaXMuZGVmYXVsdENvbG9yc1syXSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzNCA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzNFwiLCBcIkxpZ25lIDRcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzNdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3M0ID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczRcIiwgXCJEw6lncmFkw6kgNFwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbM10pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczUgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczVcIiwgXCJMaWduZSA1XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s0XSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzNSA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3M1XCIsIFwiRMOpZ3JhZMOpIDVcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzRdKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3M2ID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3M2XCIsIFwiTGlnbmUgNlwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbNV0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczYgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzNlwiLCBcIkTDqWdyYWTDqSA2XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s1XSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzNyA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzN1wiLCBcIkxpZ25lIDdcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzZdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3M3ID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczdcIiwgXCJEw6lncmFkw6kgN1wiLCB0aGlzLmRlZmF1bHRDb2xvcnNbNl0pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczggPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczhcIiwgXCJMaWduZSA4XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s3XSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzOCA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3M4XCIsIFwiRMOpZ3JhZMOpIDhcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzddKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3M5ID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3M5XCIsIFwiTGlnbmUgOVwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbOF0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczkgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzOVwiLCBcIkTDqWdyYWTDqSA5XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s4XSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzMTAgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczEwXCIsIFwiTGlnbmUgMTBcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzldKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3MxMCA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3MxMFwiLCBcIkTDqWdyYWTDqSAxMFwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbOV0pO1xyXG5cclxuICAgIHhBeGlzU2V0dGluZ3MgPSBuZXcgWEF4aXNTZXR0aW5nc0NhcmQoKTtcclxuICAgIHlBeGlzU2V0dGluZ3MgPSBuZXcgWUF4aXNTZXR0aW5nc0NhcmQoKTtcclxuICAgIGdyaWRTZXR0aW5ncyA9IG5ldyBHcmlkU2V0dGluZ3NDYXJkKCk7XHJcbiAgICBkYXRhTGFiZWxzID0gbmV3IERhdGFMYWJlbHNDYXJkKCk7XHJcbiAgICBsZWdlbmQgPSBuZXcgTGVnZW5kQ2FyZCgpO1xyXG5cclxuICAgIGNhcmRzID0gW1xyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzMSwgdGhpcy5ncmFkaWVudFNldHRpbmdzMSxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczIsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczIsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3MzLCB0aGlzLmdyYWRpZW50U2V0dGluZ3MzLFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzNCwgdGhpcy5ncmFkaWVudFNldHRpbmdzNCxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczUsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczUsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3M2LCB0aGlzLmdyYWRpZW50U2V0dGluZ3M2LFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzNywgdGhpcy5ncmFkaWVudFNldHRpbmdzNyxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczgsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczgsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3M5LCB0aGlzLmdyYWRpZW50U2V0dGluZ3M5LFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzMTAsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczEwLFxyXG4gICAgICAgIHRoaXMueEF4aXNTZXR0aW5ncyxcclxuICAgICAgICB0aGlzLnlBeGlzU2V0dGluZ3MsXHJcbiAgICAgICAgdGhpcy5ncmlkU2V0dGluZ3MsXHJcbiAgICAgICAgdGhpcy5kYXRhTGFiZWxzLFxyXG4gICAgICAgIHRoaXMubGVnZW5kXHJcbiAgICBdO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHBvd2VyYmkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcclxuaW1wb3J0IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xyXG5pbXBvcnQgVmlzdWFsVXBkYXRlT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsVXBkYXRlT3B0aW9ucztcclxuaW1wb3J0IElWaXN1YWwgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLklWaXN1YWw7XHJcbmltcG9ydCBJU2VsZWN0aW9uSWQgPSBwb3dlcmJpLnZpc3VhbHMuSVNlbGVjdGlvbklkO1xyXG5pbXBvcnQgSVNlbGVjdGlvbk1hbmFnZXIgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkuSVNlbGVjdGlvbk1hbmFnZXI7XHJcbmltcG9ydCBJVmlzdWFsTGljZW5zZU1hbmFnZXIgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkuSVZpc3VhbExpY2Vuc2VNYW5hZ2VyO1xyXG5pbXBvcnQgTGljZW5zZUluZm9SZXN1bHQgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLkxpY2Vuc2VJbmZvUmVzdWx0O1xyXG5pbXBvcnQgU2VydmljZVBsYW4gPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLlNlcnZpY2VQbGFuO1xyXG5pbXBvcnQgU2VydmljZVBsYW5TdGF0ZSA9IHBvd2VyYmkuU2VydmljZVBsYW5TdGF0ZTtcclxuaW1wb3J0IExpY2Vuc2VOb3RpZmljYXRpb25UeXBlID0gcG93ZXJiaS5MaWNlbnNlTm90aWZpY2F0aW9uVHlwZTtcclxuXHJcbmltcG9ydCB7IFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZS92aXN1YWwubGVzc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpc3VhbCBpbXBsZW1lbnRzIElWaXN1YWwge1xyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzdmc6IFNWR1NWR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1haW5Hcm91cDogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGF4aXNHcm91cDogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGxpbmVzR3JvdXA6IFNWR0dFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0b29sdGlwOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIFxyXG4gICAgLy8gTWFyZ2VzXHJcbiAgICBwcml2YXRlIG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDQwLCBib3R0b206IDQwLCBsZWZ0OiA2MCB9O1xyXG4gICAgXHJcbiAgICAvLyBTZXR0aW5nc1xyXG4gICAgcHJpdmF0ZSBmb3JtYXR0aW5nU2V0dGluZ3M6IFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsO1xyXG4gICAgcHJpdmF0ZSBmb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlOiBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xyXG4gICAgXHJcbiAgICAvLyBEcmlsbCBkb3duIHN1cHBvcnRcclxuICAgIHByaXZhdGUgaG9zdDogcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5JVmlzdWFsSG9zdDtcclxuICAgIHByaXZhdGUgc2VsZWN0aW9uTWFuYWdlcjogSVNlbGVjdGlvbk1hbmFnZXI7XHJcbiAgICBwcml2YXRlIGRhdGFWaWV3OiBwb3dlcmJpLkRhdGFWaWV3O1xyXG4gICAgXHJcbiAgICAvLyBMaWNlbnNpbmcgYXZlYyBsJ0FQSSBvZmZpY2llbGxlIE1pY3Jvc29mdCBQb3dlciBCSVxyXG4gICAgcHJpdmF0ZSBsaWNlbnNlTWFuYWdlcjogSVZpc3VhbExpY2Vuc2VNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlclZhbGlkUGxhbnM6IFNlcnZpY2VQbGFuW10gfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGhhc1NlcnZpY2VQbGFuczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnY6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGlzTm90aWZpY2F0aW9uRGlzcGxheWVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGRlZmF1bHROb3RpZmljYXRpb25UeXBlOiBMaWNlbnNlTm90aWZpY2F0aW9uVHlwZSA9IExpY2Vuc2VOb3RpZmljYXRpb25UeXBlLkdlbmVyYWw7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBvcHRpb25zLmVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gb3B0aW9ucy5ob3N0O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlciA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlID0gbmV3IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcblxyXG4gICAgICAgIC8vIDEuIENyw6lhdGlvbiBkdSBTVkdcclxuICAgICAgICBjb25zdCBucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuICAgICAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJzdmdcIik7XHJcbiAgICAgICAgdGhpcy5zdmcuY2xhc3NMaXN0LmFkZChcImNoYXJ0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLnRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLnN2Zyk7XHJcblxyXG4gICAgICAgIC8vIDIuIFRvb2x0aXBcclxuICAgICAgICB0aGlzLnRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5jbGFzc05hbWUgPSBcImN1c3RvbS10b29sdGlwXCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwgMCwgMCwgMC44KVwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUucGFkZGluZyA9IFwiOHB4IDEycHhcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI0cHhcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy50b29sdGlwKTtcclxuXHJcbiAgICAgICAgLy8gMy4gRGVmcyBwb3VyIGxlcyBkw6lncmFkw6lzXHJcbiAgICAgICAgY29uc3QgZGVmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJkZWZzXCIpO1xyXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGRlZnMpO1xyXG5cclxuICAgICAgICAvLyA0LiBHcm91cGVzXHJcbiAgICAgICAgdGhpcy5tYWluR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZ1wiKTtcclxuICAgICAgICB0aGlzLmF4aXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJnXCIpO1xyXG4gICAgICAgIHRoaXMubGluZXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJnXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWFpbkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYXhpc0dyb3VwKTtcclxuICAgICAgICB0aGlzLm1haW5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmxpbmVzR3JvdXApO1xyXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHRoaXMubWFpbkdyb3VwKTtcclxuXHJcbiAgICAgICAgLy8gUGVybWV0dHJlIGxlIGNvbnRleHQgbWVudSAoY2xpYyBkcm9pdCkgc3VyIHRvdXQgbGUgdmlzdWVsXHJcbiAgICAgICAgdGhpcy5zdmcuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50IGFzIE1vdXNlRXZlbnQ7XHJcbiAgICAgICAgICAgIC8vIEFmZmljaGVyIGxlIG1lbnUgY29udGV4dHVlbCBQb3dlciBCSSBhdmVjIGxlcyBvcHRpb25zIHN0YW5kYXJkXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zaG93Q29udGV4dE1lbnUoe30sIHtcclxuICAgICAgICAgICAgICAgIHg6IG1vdXNlRXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgIHk6IG1vdXNlRXZlbnQuY2xpZW50WVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRMOpc8OpbGVjdGlvbm5lciBsb3JzIGQndW4gY2xpYyBzdXIgbGUgZm9uZFxyXG4gICAgICAgIHRoaXMuc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbml0aWFsaXNlciBsZSBnZXN0aW9ubmFpcmUgZGUgbGljZW5jZXMgKEFQSSBvZmZpY2llbGxlIE1pY3Jvc29mdCBQb3dlciBCSSlcclxuICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyID0gdGhpcy5ob3N0LmxpY2Vuc2VNYW5hZ2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBwbGFucyBkZSBzZXJ2aWNlIGRlIGxpY2VuY2VcclxuICAgICAgICB0aGlzLnJldHJpZXZlTGljZW5zZUluZm8oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSw6ljdXDDqHJlIGxlcyBpbmZvcm1hdGlvbnMgZGUgbGljZW5jZSBkZSBsJ3V0aWxpc2F0ZXVyIHZpYSBsJ0FQSSBvZmZpY2llbGxlIFBvd2VyIEJJXHJcbiAgICAgKiBVdGlsaXNlIGdldEF2YWlsYWJsZVNlcnZpY2VQbGFucygpIHBvdXIgb2J0ZW5pciBsZXMgcGxhbnMgZGUgc2VydmljZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJldHJpZXZlTGljZW5zZUluZm8oKSB7XHJcbiAgICAgICAgLy8g8J+nqiBNT0RFIFRFU1QgOiBEw6ljb21tZW50ZXogbGVzIGxpZ25lcyBzdWl2YW50ZXMgcG91ciBzaW11bGVyIHVuIGVudmlyb25uZW1lbnQgc2FucyBsaWNlbmNlXHJcbiAgICAgICAgLy8gdGhpcy5pc0xpY2Vuc2VVbnN1cHBvcnRlZEVudiA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5ub3RpZnlMaWNlbnNlU3RhdHVzKCk7XHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIPCfp6ogTU9ERSBURVNUIDogRMOpY29tbWVudGV6IGxlcyBsaWduZXMgc3VpdmFudGVzIHBvdXIgc2ltdWxlciB1bmUgbGljZW5jZSBtYW5xdWFudGVcclxuICAgICAgICAvLyB0aGlzLmhhc1NlcnZpY2VQbGFucyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLm5vdGlmeUxpY2Vuc2VTdGF0dXMoKTtcclxuICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLmxpY2Vuc2VNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4oS577iPIEdlc3Rpb25uYWlyZSBkZSBsaWNlbmNlcyBub24gZGlzcG9uaWJsZSAtIG1vZGUgRGVza3RvcC9EZXZcIik7XHJcbiAgICAgICAgICAgIC8vIEVuIG1vZGUgZMOpdmVsb3BwZW1lbnQsIGNvbnNpZMOpcmVyIHF1ZSBsYSBsaWNlbmNlIGVzdCB2YWxpZGVcclxuICAgICAgICAgICAgdGhpcy5oYXNTZXJ2aWNlUGxhbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTGljZW5zZVVuc3VwcG9ydGVkRW52ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUsOpY3Vww6lyZXIgbGVzIHBsYW5zIGRlIHNlcnZpY2UgZGlzcG9uaWJsZXMgcG91ciBjZXQgdXRpbGlzYXRldXJcclxuICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyLmdldEF2YWlsYWJsZVNlcnZpY2VQbGFucygpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IExpY2Vuc2VJbmZvUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBsYW5zLCBpc0xpY2Vuc2VVbnN1cHBvcnRlZEVudiwgaXNMaWNlbnNlSW5mb0F2YWlsYWJsZSB9ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCflJEgSW5mb3JtYXRpb25zIGRlIGxpY2VuY2UgcsOpY3Vww6lyw6llczpcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5zLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTGljZW5zZVVuc3VwcG9ydGVkRW52LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTGljZW5zZUluZm9BdmFpbGFibGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMaWNlbnNlSW5mb0F2YWlsYWJsZSAmJiAhaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGaWx0cmVyIHVuaXF1ZW1lbnQgbGVzIHBsYW5zIGFjdGlmcyBvdSBlbiBhdmVydGlzc2VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclZhbGlkUGxhbnMgPSBwbGFucz8uZmlsdGVyKCh7IHN0YXRlIH0pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9PT0gU2VydmljZVBsYW5TdGF0ZS5BY3RpdmUgfHwgc3RhdGUgPT09IFNlcnZpY2VQbGFuU3RhdGUuV2FybmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNTZXJ2aWNlUGxhbnMgPSAhIXRoaXMuY3VycmVudFVzZXJWYWxpZFBsYW5zPy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzU2VydmljZVBsYW5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDinIUgJHt0aGlzLmN1cnJlbnRVc2VyVmFsaWRQbGFucy5sZW5ndGh9IHBsYW4ocykgZGUgc2VydmljZSB2YWxpZGUocykgdHJvdXbDqShzKWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKaoO+4jyBBdWN1biBwbGFuIGRlIHNlcnZpY2UgdmFsaWRlIHRyb3V2w6lcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTGljZW5zZVVuc3VwcG9ydGVkRW52ID0gaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnY7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFmZmljaGVyIGxlcyBub3RpZmljYXRpb25zIGFwcHJvcHJpw6llc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlMaWNlbnNlU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGxpY2VuY2VzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAvLyBFbiBjYXMgZCdlcnJldXIsIG5lIHBhcyBibG9xdWVyIGxlIHZpc3VlbCBlbiBtb2RlIGRldlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclZhbGlkUGxhbnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1NlcnZpY2VQbGFucyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQWZmaWNoZSBsZXMgbm90aWZpY2F0aW9ucyBkZSBsaWNlbmNlIGFwcHJvcHJpw6llcyBzZWxvbiBsZSBzdGF0dXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBub3RpZnlMaWNlbnNlU3RhdHVzKCkge1xyXG4gICAgICAgIC8vIEVmZmFjZXIgdG91dGUgbm90aWZpY2F0aW9uIHByw6ljw6lkZW50ZVxyXG4gICAgICAgIGlmICh0aGlzLmxpY2Vuc2VNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGljZW5zZU1hbmFnZXIuY2xlYXJMaWNlbnNlTm90aWZpY2F0aW9uKClcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcIkVycmV1ciBsb3JzIGR1IG5ldHRveWFnZSBkZXMgbm90aWZpY2F0aW9uczpcIiwgZXJyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpIGwnZW52aXJvbm5lbWVudCBuZSBzdXBwb3J0ZSBwYXMgbGVzIGxpY2VuY2VzXHJcbiAgICAgICAgaWYgKHRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VW5zdXBwb3J0ZWRFbnZOb3RpZmljYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBTaSBhdWN1biBwbGFuIGRlIHNlcnZpY2UgdmFsaWRlIG4nZXN0IHRyb3V2w6lcclxuICAgICAgICBpZiAodGhpcy5oYXNTZXJ2aWNlUGxhbnMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpY2Vuc2VSZXF1aXJlZE5vdGlmaWNhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpIG9uIGEgZGVzIHBsYW5zIHZhbGlkZXMsIG5lIHJpZW4gYWZmaWNoZXJcclxuICAgICAgICBpZiAodGhpcy5oYXNTZXJ2aWNlUGxhbnMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc05vdGlmaWNhdGlvbkRpc3BsYXllZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBMaWNlbmNlIHZhbGlkZSAtIFZpc3VlbCBmb25jdGlvbm5lbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQWZmaWNoZSBsYSBub3RpZmljYXRpb24gcG91ciBlbnZpcm9ubmVtZW50IG5vbiBzdXBwb3J0w6lcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzaG93VW5zdXBwb3J0ZWRFbnZOb3RpZmljYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpY2Vuc2VNYW5hZ2VyIHx8IHRoaXMuaXNOb3RpZmljYXRpb25EaXNwbGF5ZWQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyLm5vdGlmeUxpY2Vuc2VSZXF1aXJlZChMaWNlbnNlTm90aWZpY2F0aW9uVHlwZS5VbnN1cHBvcnRlZEVudilcclxuICAgICAgICAgICAgLnRoZW4oKGRpc3BsYXllZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc05vdGlmaWNhdGlvbkRpc3BsYXllZCA9IGRpc3BsYXllZDtcclxuICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfk6IgTm90aWZpY2F0aW9uIGFmZmljaMOpZSA6IEVudmlyb25uZW1lbnQgbm9uIHN1cHBvcnTDqVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2FmZmljaGFnZSBkZSBsYSBub3RpZmljYXRpb246XCIsIGVycikpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEFmZmljaGUgbGEgbm90aWZpY2F0aW9uIHBvdXIgbGljZW5jZSByZXF1aXNlXHJcbiAgICAgKiBQZXV0IHV0aWxpc2VyIEdlbmVyYWwgKGljw7RuZSkgb3UgVmlzdWFsSXNCbG9ja2VkIChvdmVybGF5IGNvbXBsZXQpXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2hvd0xpY2Vuc2VSZXF1aXJlZE5vdGlmaWNhdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGljZW5zZU1hbmFnZXIgfHwgdGhpcy5pc05vdGlmaWNhdGlvbkRpc3BsYXllZCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFV0aWxpc2VyIFZpc3VhbElzQmxvY2tlZCBwb3VyIGJsb3F1ZXIgY29tcGzDqHRlbWVudCBsZSB2aXN1ZWxcclxuICAgICAgICAvLyBPdSB1dGlsaXNlciBHZW5lcmFsIHBvdXIgYWZmaWNoZXIgdW5pcXVlbWVudCB1bmUgaWPDtG5lXHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uVHlwZSA9IExpY2Vuc2VOb3RpZmljYXRpb25UeXBlLlZpc3VhbElzQmxvY2tlZDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyLm5vdGlmeUxpY2Vuc2VSZXF1aXJlZChub3RpZmljYXRpb25UeXBlKVxyXG4gICAgICAgICAgICAudGhlbigoZGlzcGxheWVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTm90aWZpY2F0aW9uRGlzcGxheWVkID0gZGlzcGxheWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3BsYXllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+ToiBOb3RpZmljYXRpb24gYWZmaWNow6llIDogTGljZW5jZSByZXF1aXNlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGwnYWZmaWNoYWdlIGRlIGxhIG5vdGlmaWNhdGlvbjpcIiwgZXJyKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQWZmaWNoZSB1bmUgbm90aWZpY2F0aW9uIHBvdXIgdW5lIGZvbmN0aW9ubmFsaXTDqSBibG9xdcOpZVxyXG4gICAgICogQHBhcmFtIGZlYXR1cmVOYW1lIE5vbSBkZSBsYSBmb25jdGlvbm5hbGl0w6kgYmxvcXXDqWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBub3RpZnlGZWF0dXJlQmxvY2tlZChmZWF0dXJlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpY2Vuc2VNYW5hZ2VyKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3LDqWVyIHVuIG1lc3NhZ2UgZCdpbmZvLWJ1bGxlIHBlcnNvbm5hbGlzw6lcclxuICAgICAgICBjb25zdCB0b29sdGlwID0gYExhIGZvbmN0aW9ubmFsaXTDqSBcIiR7ZmVhdHVyZU5hbWV9XCIgbsOpY2Vzc2l0ZSB1bmUgbGljZW5jZSB2YWxpZGUuYDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyLm5vdGlmeUZlYXR1cmVCbG9ja2VkKHRvb2x0aXApXHJcbiAgICAgICAgICAgIC50aGVuKChkaXNwbGF5ZWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg8J+ToiBGb25jdGlvbm5hbGl0w6kgYmxvcXXDqWUgOiAke2ZlYXR1cmVOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGwnYWZmaWNoYWdlIGRlIGxhIG5vdGlmaWNhdGlvbjpcIiwgZXJyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93VG9vbHRpcCh4OiBudW1iZXIsIHk6IG51bWJlciwgY29udGVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gTmV0dG95ZXIgbGUgY29udGVudSBwcsOpY8OpZGVudFxyXG4gICAgICAgIHdoaWxlICh0aGlzLnRvb2x0aXAuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAucmVtb3ZlQ2hpbGQodGhpcy50b29sdGlwLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRMOpY291cGVyIGxlIGNvbnRlbnUgZW4gbGlnbmVzIChzdXBwb3NlIGxlIGZvcm1hdCBcIjxkaXY+Li4uPC9kaXY+PGRpdj4uLi48L2Rpdj5cIilcclxuICAgICAgICAvLyBPbiBleHRyYWl0IGxlIHRleHRlIGVudHJlIGxlcyBiYWxpc2VzIDxkaXY+Li4uPC9kaXY+XHJcbiAgICAgICAgY29uc3QgZGl2UmVnZXggPSAvPGRpdltePl0qPiguKj8pPFxcL2Rpdj4vZztcclxuICAgICAgICBsZXQgbWF0Y2g7XHJcbiAgICAgICAgd2hpbGUgKChtYXRjaCA9IGRpdlJlZ2V4LmV4ZWMoY29udGVudCkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIC8vIFNpIGxlIGNvbnRlbnUgY29udGllbnQgPHN0cm9uZz4uLi48L3N0cm9uZz4sIG9uIGxlIGfDqHJlIGF1c3NpXHJcbiAgICAgICAgICAgIGNvbnN0IHN0cm9uZ1JlZ2V4ID0gLzxzdHJvbmdbXj5dKj4oLio/KTxcXC9zdHJvbmc+LztcclxuICAgICAgICAgICAgY29uc3Qgc3Ryb25nTWF0Y2ggPSBzdHJvbmdSZWdleC5leGVjKG1hdGNoWzFdKTtcclxuICAgICAgICAgICAgaWYgKHN0cm9uZ01hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJvbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIpO1xyXG4gICAgICAgICAgICAgICAgc3Ryb25nLnRleHRDb250ZW50ID0gc3Ryb25nTWF0Y2hbMV07XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Ryb25nKTtcclxuICAgICAgICAgICAgICAgIC8vIEFqb3V0ZSBsZSByZXN0ZSBkdSB0ZXh0ZSBhcHLDqHMgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZnRlclN0cm9uZyA9IG1hdGNoWzFdLnJlcGxhY2Uoc3Ryb25nUmVnZXgsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFmdGVyU3Ryb25nLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhZnRlclN0cm9uZykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gbWF0Y2hbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50b29sdGlwLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUubGVmdCA9ICh4ICsgMTApICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS50b3AgPSAoeSAtIDEwKSArIFwicHhcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGVUb29sdGlwKCkge1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROaWNlU3RlcChtYXhWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAobWF4VmFsdWUgPT09IDApIHJldHVybiAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIETDqXRlcm1pbmVyIGwnb3JkcmUgZGUgZ3JhbmRldXJcclxuICAgICAgICBjb25zdCBtYWduaXR1ZGUgPSBNYXRoLmZsb29yKE1hdGgubG9nMTAobWF4VmFsdWUpKTtcclxuICAgICAgICBjb25zdCBwb3dlck9mMTAgPSBNYXRoLnBvdygxMCwgbWFnbml0dWRlKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBHYW1tZSBkZSBtdWx0aXBsaWNhdGV1cnMgcG91ciBhdm9pciBkZXMgZGl2aXNpb25zIFwicHJvcHJlc1wiXHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGllcnMgPSBbMSwgMiwgMi41LCA1LCAxMF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTm9tYnJlIGRlIGRpdmlzaW9ucyBzb3VoYWl0w6llc1xyXG4gICAgICAgIGNvbnN0IG1pblRpY2tzID0gNDtcclxuICAgICAgICBjb25zdCBtYXhUaWNrcyA9IDg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVGVzdGVyIGNoYXF1ZSBtdWx0aXBsaWNhdGV1clxyXG4gICAgICAgIGZvciAobGV0IG11bHQgb2YgbXVsdGlwbGllcnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcCA9IG11bHQgKiBwb3dlck9mMTA7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpY2tzID0gTWF0aC5jZWlsKG1heFZhbHVlIC8gc3RlcCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGlja3MgPj0gbWluVGlja3MgJiYgdGlja3MgPD0gbWF4VGlja3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGVwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpIGF1Y3VuIG5lIGNvbnZpZW50LCByZXRvdXJuZXIgcG93ZXJPZjEwXHJcbiAgICAgICAgcmV0dXJuIHBvd2VyT2YxMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKG9wdGlvbnM6IFZpc3VhbFVwZGF0ZU9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBWw6lyaWZpZXIgbGUgc3RhdHV0IGRlIGxhIGxpY2VuY2VcclxuICAgICAgICAvLyBTaSBhdWN1biBwbGFuIGRlIHNlcnZpY2UgdmFsaWRlLCBsZSBzeXN0w6htZSBkZSBub3RpZmljYXRpb24gUG93ZXIgQkkgZ8OocmUgbCdhZmZpY2hhZ2VcclxuICAgICAgICBpZiAodGhpcy5oYXNTZXJ2aWNlUGxhbnMgPT09IGZhbHNlIHx8IHRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gTmV0dG95ZXIgbGUgdmlzdWVsXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmF4aXNHcm91cC5maXJzdENoaWxkKSB0aGlzLmF4aXNHcm91cC5yZW1vdmVDaGlsZCh0aGlzLmF4aXNHcm91cC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMubGluZXNHcm91cC5maXJzdENoaWxkKSB0aGlzLmxpbmVzR3JvdXAucmVtb3ZlQ2hpbGQodGhpcy5saW5lc0dyb3VwLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgb3B0aW9ucy52aWV3cG9ydC53aWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIG9wdGlvbnMudmlld3BvcnQuaGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gTGVzIG5vdGlmaWNhdGlvbnMgc29udCBnw6lyw6llcyBwYXIgbGUgc3lzdMOobWUgUG93ZXIgQkkgdmlhIG5vdGlmeUxpY2Vuc2VSZXF1aXJlZCgpXHJcbiAgICAgICAgICAgIC8vIFBhcyBiZXNvaW4gZCdhZmZpY2hlciBkZSBtZXNzYWdlIHBlcnNvbm5hbGlzw6kgaWNpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQS4gUsOpY3Vww6lyYXRpb24gZGVzIGRvbm7DqWVzXHJcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBvcHRpb25zLmRhdGFWaWV3c1swXTtcclxuICAgICAgICBpZiAoIWRhdGFWaWV3IHx8ICFkYXRhVmlldy5jYXRlZ29yaWNhbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllcyB8fCAhZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YVZpZXcgPSBkYXRhVmlldztcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUNvbHVtbnMgPSBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcnlDb2x1bW5zWzBdO1xyXG5cclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5wb3B1bGF0ZUZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsLCBvcHRpb25zLmRhdGFWaWV3c1swXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgb3B0aW9ucy52aWV3cG9ydC53aWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgb3B0aW9ucy52aWV3cG9ydC5oZWlnaHQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhdHMgPSBjYXRlZ29yeUNvbHVtbnNbMF0udmFsdWVzO1xyXG4gICAgICAgIGNvbnN0IGFsbFNlcmllcyA9IGRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlcztcclxuXHJcbiAgICAgICAgLy8gUGFyYW3DqHRyZXMgZ8OpbsOpcmF1eFxyXG4gICAgICAgIGNvbnN0IHNob3dYQXhpcyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnhBeGlzU2V0dGluZ3Muc2hvdy52YWx1ZTtcclxuICAgICAgICBjb25zdCB4QXhpc0NvbG9yID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueEF4aXNTZXR0aW5ncy5heGlzQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgeEF4aXNGb250U2l6ZSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnhBeGlzU2V0dGluZ3MuZm9udFNpemUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgeEF4aXNGb250RmFtaWx5ID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueEF4aXNTZXR0aW5ncy5mb250RmFtaWx5LnZhbHVlLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2hvd1lBeGlzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueUF4aXNTZXR0aW5ncy5zaG93LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzQ29sb3IgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy55QXhpc1NldHRpbmdzLmF4aXNDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB5QXhpc0ZvbnRTaXplID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueUF4aXNTZXR0aW5ncy5mb250U2l6ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB5QXhpc0ZvbnRGYW1pbHkgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy55QXhpc1NldHRpbmdzLmZvbnRGYW1pbHkudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB5QXhpc0Rpc3BsYXlVbml0cyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3MuZGlzcGxheVVuaXRzLnZhbHVlLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgeUF4aXNQcmVjaXNpb24gPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy55QXhpc1NldHRpbmdzLnByZWNpc2lvbi52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd0hvcml6b250YWxHcmlkID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLnNob3dIb3Jpem9udGFsLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHNob3dWZXJ0aWNhbEdyaWQgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5ncmlkU2V0dGluZ3Muc2hvd1ZlcnRpY2FsLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGdyaWRDb2xvciA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmdyaWRTZXR0aW5ncy5ncmlkQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ3JpZFRoaWNrbmVzcyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmdyaWRTZXR0aW5ncy5ncmlkVGhpY2tuZXNzLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGdyaWRTdHlsZSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmdyaWRTZXR0aW5ncy5ncmlkU3R5bGUudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd0xlZ2VuZCA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmxlZ2VuZC5zaG93LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGxlZ2VuZFBvc2l0aW9uID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGVnZW5kLnBvc2l0aW9uLnZhbHVlLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgbGVnZW5kRm9udENvbG9yID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGVnZW5kLmZvbnRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBsZWdlbmRGb250U2l6ZSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmxlZ2VuZC5mb250U2l6ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBsZWdlbmRGb250RmFtaWx5ID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGVnZW5kLmZvbnRGYW1pbHkudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gQi4gQ2FsY3VsIGRlcyBkaW1lbnNpb25zXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLnZpZXdwb3J0LndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9wdGlvbnMudmlld3BvcnQuaGVpZ2h0O1xyXG4gICAgICAgIGxldCBsZWdlbmRIZWlnaHQgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzaG93TGVnZW5kICYmIChsZWdlbmRQb3NpdGlvbiA9PT0gXCJUb3BcIiB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJUb3BDZW50ZXJcIikpIHtcclxuICAgICAgICAgICAgbGVnZW5kSGVpZ2h0ID0gMzA7XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luLnRvcCA9IDIwICsgbGVnZW5kSGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2hvd0xlZ2VuZCAmJiAobGVnZW5kUG9zaXRpb24gPT09IFwiQm90dG9tXCIgfHwgbGVnZW5kUG9zaXRpb24gPT09IFwiQm90dG9tQ2VudGVyXCIpKSB7XHJcbiAgICAgICAgICAgIGxlZ2VuZEhlaWdodCA9IDMwO1xyXG4gICAgICAgICAgICB0aGlzLm1hcmdpbi5ib3R0b20gPSA0MCArIGxlZ2VuZEhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmdpbi50b3AgPSAyMDtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4uYm90dG9tID0gNDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBanVzdGVtZW50IGR5bmFtaXF1ZSBkZSBsYSBtYXJnZSBiYXNzZSBzaSBvbiBhIDMgbml2ZWF1eCBvdSBwbHVzIChwb3VyIGFmZmljaGVyIEFubsOpZS9Nb2lzL0pvdXIpXHJcbiAgICAgICAgaWYgKGNhdGVnb3J5Q29sdW1ucy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luLmJvdHRvbSArPSAyNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRyYXdXID0gd2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgZHJhd0ggPSBoZWlnaHQgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XHJcbiAgICAgICAgY29uc3QgZ2V0WVBvcyA9ICh2YWw6IG51bWJlcikgPT4gZHJhd0ggLSAoKHZhbCAtIG5pY2VNaW4pIC8gKG5pY2VNYXggLSBuaWNlTWluKSAqIGRyYXdIKTtcclxuXHJcbiAgICAgICAgLy8gQy4gQ0FMQ1VMIMOJQ0hFTExFIFkgR0xPQkFMRSAoQmFzw6kgc3VyIGxlIE1JTiBldCBNQVggZGUgVE9VVEVTIGxlcyBzw6lyaWVzKVxyXG4gICAgICAgIGxldCBnbG9iYWxNYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XHJcbiAgICAgICAgbGV0IGdsb2JhbE1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcclxuICAgICAgICBhbGxTZXJpZXMuZm9yRWFjaChzZXJpZXMgPT4ge1xyXG4gICAgICAgICAgICBzZXJpZXMudmFsdWVzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBOdW1iZXIodik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID4gZ2xvYmFsTWF4KSBnbG9iYWxNYXggPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA8IGdsb2JhbE1pbikgZ2xvYmFsTWluID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2kgdG91dCBlc3QgTmFOLCBmYWxsYmFjayDDoCAwXHJcbiAgICAgICAgaWYgKCFpc0Zpbml0ZShnbG9iYWxNYXgpKSBnbG9iYWxNYXggPSAwO1xyXG4gICAgICAgIGlmICghaXNGaW5pdGUoZ2xvYmFsTWluKSkgZ2xvYmFsTWluID0gMDtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsIGR1IHN0ZXBcclxuICAgICAgICBjb25zdCBhYnNNYXggPSBNYXRoLm1heChNYXRoLmFicyhnbG9iYWxNYXgpLCBNYXRoLmFicyhnbG9iYWxNaW4pKTtcclxuICAgICAgICBjb25zdCBzdGVwU2l6ZSA9IHRoaXMuZ2V0TmljZVN0ZXAoYWJzTWF4KTtcclxuXHJcbiAgICAgICAgLy8gQm9ybmVzIFwicHJvcHJlc1wiXHJcbiAgICAgICAgbGV0IG5pY2VNaW4gPSBNYXRoLmZsb29yKGdsb2JhbE1pbiAvIHN0ZXBTaXplKSAqIHN0ZXBTaXplO1xyXG4gICAgICAgIGxldCBuaWNlTWF4ID0gTWF0aC5jZWlsKGdsb2JhbE1heCAvIHN0ZXBTaXplKSAqIHN0ZXBTaXplO1xyXG4gICAgICAgIGlmIChuaWNlTWluID09PSBuaWNlTWF4KSB7XHJcbiAgICAgICAgICAgIC8vIENhcyBwbGF0XHJcbiAgICAgICAgICAgIG5pY2VNaW4gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKG5pY2VNYXggLSBuaWNlTWluKSAvIHN0ZXBTaXplID4gMTApIHtcclxuICAgICAgICAgICAgbmljZU1heCA9IG5pY2VNaW4gKyBzdGVwU2l6ZSAqIDEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRC4gREVTU0lOXHJcbiAgICAgICAgdGhpcy5tYWluR3JvdXAuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt0aGlzLm1hcmdpbi5sZWZ0fSwgJHt0aGlzLm1hcmdpbi50b3B9KWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE5ldHRveWFnZVxyXG4gICAgICAgIHdoaWxlICh0aGlzLmF4aXNHcm91cC5maXJzdENoaWxkKSB0aGlzLmF4aXNHcm91cC5yZW1vdmVDaGlsZCh0aGlzLmF4aXNHcm91cC5maXJzdENoaWxkKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5saW5lc0dyb3VwLmZpcnN0Q2hpbGQpIHRoaXMubGluZXNHcm91cC5yZW1vdmVDaGlsZCh0aGlzLmxpbmVzR3JvdXAuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3RvckFsbChcIi5jdXN0b20tbWFya2VyXCIpLmZvckVhY2gobSA9PiBtLnJlbW92ZSgpKTtcclxuICAgICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1c3RvbS1kYXRhbGFiZWxcIikuZm9yRWFjaChsID0+IGwucmVtb3ZlKCkpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VzdG9tLWhvdmVyXCIpLmZvckVhY2goaCA9PiBoLnJlbW92ZSgpKTtcclxuICAgICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yQWxsKFwiLmxlZ2VuZFwiKS5mb3JFYWNoKGwgPT4gbC5yZW1vdmUoKSk7XHJcblxyXG4gICAgICAgIC8vIDEuIEdSSUxMRSBFVCBBWEUgWVxyXG4gICAgICAgIGlmIChzaG93WUF4aXMpIHtcclxuICAgICAgICAgICAgZm9yKGxldCB2YWwgPSBuaWNlTWluOyB2YWwgPD0gbmljZU1heDsgdmFsICs9IHN0ZXBTaXplKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5UG9zID0gZHJhd0ggLSAoKHZhbCAtIG5pY2VNaW4pIC8gKG5pY2VNYXggLSBuaWNlTWluKSAqIGRyYXdIKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd0hvcml6b250YWxHcmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJsaW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDFcIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDJcIiwgZHJhd1cudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCB5UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieTJcIiwgeVBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBncmlkQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIGdyaWRUaGlja25lc3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyaWRTdHlsZSA9PT0gXCJkYXNoZWRcIikgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiNCw0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpc0dyb3VwLmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieFwiLCBcIi0xMFwiKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieVwiLCB5UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHRoaXMuZm9ybWF0WUF4aXNWYWx1ZSh2YWwsIHlBeGlzRGlzcGxheVVuaXRzLCB5QXhpc1ByZWNpc2lvbik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgeUF4aXNDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCB5QXhpc0ZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCB5QXhpc0ZvbnRGYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5heGlzR3JvdXAuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDIuIEFYRSBYXHJcbiAgICAgICAgaWYgKHNob3dYQXhpcykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwID0gTWF0aC5jZWlsKGNhdHMubGVuZ3RoIC8gMTApOyBcclxuICAgICAgICAgICAgY2F0cy5mb3JFYWNoKChjYXQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpICUgc3RlcCAhPT0gMCAmJiBpICE9PSBjYXRzLmxlbmd0aCAtIDEpIHJldHVybjsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHhQb3MgPSAoaSAvIChjYXRzLmxlbmd0aCAtIDEpKSAqIGRyYXdXO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaG93VmVydGljYWxHcmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJsaW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDFcIiwgeFBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIngyXCIsIHhQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBkcmF3SC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBncmlkQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIGdyaWRUaGlja25lc3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyaWRTdHlsZSA9PT0gXCJkYXNoZWRcIikgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiNCw0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpc0dyb3VwLmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieFwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIChkcmF3SCArIDIwKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGNhdHMubGVuZ3RoIC0gMSkgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT09IDApIHRleHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHhBeGlzQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgeEF4aXNGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgeEF4aXNGb250RmFtaWx5KTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBam91dGVyIGxlIG1lbnUgY29udGV4dHVlbCBzdXIgbGVzIGxhYmVscyBkZSBsJ2F4ZSBYXHJcbiAgICAgICAgICAgICAgICB0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhDYXRlZ29yeShjYXRlZ29yeSwgaSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNob3dDb250ZXh0TWVudShzZWxlY3Rpb25JZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFBlcm1ldHRyZSBsYSBzw6lsZWN0aW9uIGF1IGNsaWMgc3VyIGxlcyBsYWJlbHNcclxuICAgICAgICAgICAgICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAud2l0aENhdGVnb3J5KGNhdGVnb3J5LCBpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2VsZWN0KHNlbGVjdGlvbklkLCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5Q29sdW1ucy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWZmaWNoYWdlIGhpw6lyYXJjaGlxdWVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdExldmVsID0gY2F0ZWdvcnlDb2x1bW5zWzBdLnZhbHVlc1tpXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RMZXZlbCA9IGNhdGVnb3J5Q29sdW1uc1tjYXRlZ29yeUNvbHVtbnMubGVuZ3RoIC0gMV0udmFsdWVzW2ldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRzcGFuMS50ZXh0Q29udGVudCA9IGZpcnN0TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdHNwYW4xLnNldEF0dHJpYnV0ZShcInhcIiwgeFBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB0c3BhbjEuc2V0QXR0cmlidXRlKFwiZHlcIiwgXCIwZW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5hcHBlbmRDaGlsZCh0c3BhbjEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlDb2x1bW5zLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FzIGF2ZWMgMyBuaXZlYXV4IG91IHBsdXMgKGV4OiBBbm7DqWUsIE1vaXMsIEpvdXIpIC0+IE9uIGFmZmljaGUgQW5uw6llLCBNb2lzLCBKb3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9uIHN1cHBvc2UgcXVlIGwnYXZhbnQtZGVybmllciBuaXZlYXUgZXN0IGxlIG1vaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlkZGxlTGV2ZWwgPSBjYXRlZ29yeUNvbHVtbnNbY2F0ZWdvcnlDb2x1bW5zLmxlbmd0aCAtIDJdLnZhbHVlc1tpXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIudGV4dENvbnRlbnQgPSBtaWRkbGVMZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHNwYW4yLnNldEF0dHJpYnV0ZShcInhcIiwgeFBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHNwYW4yLnNldEF0dHJpYnV0ZShcImR5XCIsIFwiMS4yZW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQuYXBwZW5kQ2hpbGQodHNwYW4yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0c3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHNwYW4zLnRleHRDb250ZW50ID0gbGFzdExldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjMuc2V0QXR0cmlidXRlKFwieFwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjMuc2V0QXR0cmlidXRlKFwiZHlcIiwgXCIxLjJlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC5hcHBlbmRDaGlsZCh0c3BhbjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhcyBzdGFuZGFyZCAyIG5pdmVhdXggKGV4OiBBbm7DqWUsIE1vaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0c3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHNwYW4yLnRleHRDb250ZW50ID0gbGFzdExldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIuc2V0QXR0cmlidXRlKFwieFwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIuc2V0QXR0cmlidXRlKFwiZHlcIiwgXCIxLjJlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC5hcHBlbmRDaGlsZCh0c3BhbjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHRoaXMuZm9ybWF0RGF0ZShjYXRzW2ldLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF4aXNHcm91cC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAzLiBCT1VDTEUgU1VSIExFUyBTw4lSSUVTIChMSUdORVMpXHJcbiAgICAgICAgY29uc3QgbGVnZW5kSXRlbXM6IEFycmF5PHtuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmd9PiA9IFtdO1xyXG5cclxuICAgICAgICAvLyBSw6ljdXDDqXJhdGlvbiBkZXMgcGFyYW3DqHRyZXMgZGVzIMOpdGlxdWV0dGVzIGRlIGRvbm7DqWVzXHJcbiAgICAgICAgY29uc3Qgc2hvd0RhdGFMYWJlbHMgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5kYXRhTGFiZWxzLnNob3cudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0YUxhYmVsc0NvbG9yID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZGF0YUxhYmVscy5jb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkYXRhTGFiZWxzRm9udFNpemUgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5kYXRhTGFiZWxzLmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGFMYWJlbHNGb250RmFtaWx5ID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZGF0YUxhYmVscy5mb250RmFtaWx5LnZhbHVlLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YUxhYmVsc0Rpc3BsYXlVbml0cyA9IHBhcnNlSW50KHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmRhdGFMYWJlbHMuZGlzcGxheVVuaXRzLnZhbHVlLnZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFMYWJlbHNQcmVjaXNpb24gPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5kYXRhTGFiZWxzLnByZWNpc2lvbi52YWx1ZTtcclxuXHJcbiAgICAgICAgYWxsU2VyaWVzLmZvckVhY2goKHNlcmllcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDEwKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZXJpZXNOYW1lID0gc2VyaWVzLnNvdXJjZS5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgY29uc3QgdmFscyA9IHNlcmllcy52YWx1ZXM7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBsaW5lU2V0dGluZ3MgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1tgbGluZVNldHRpbmdzJHtpbmRleCArIDF9YF07XHJcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50U2V0dGluZ3MgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1tgZ3JhZGllbnRTZXR0aW5ncyR7aW5kZXggKyAxfWBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFsaW5lU2V0dGluZ3MgfHwgIWdyYWRpZW50U2V0dGluZ3MpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVDb2xvciA9IGxpbmVTZXR0aW5ncy5saW5lQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cm9rZVdpZHRoID0gbGluZVNldHRpbmdzLnN0cm9rZVdpZHRoLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lU3R5bGUgPSBsaW5lU2V0dGluZ3MubGluZVN0eWxlLnZhbHVlLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dNYXJrZXJzID0gbGluZVNldHRpbmdzLnNob3dNYXJrZXJzLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrZXJTaXplID0gbGluZVNldHRpbmdzLm1hcmtlclNpemUudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBwZWQgPSBsaW5lU2V0dGluZ3Muc3RlcHBlZC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dHcmFkaWVudCA9IGdyYWRpZW50U2V0dGluZ3Muc2hvd0dyYWRpZW50LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudENvbG9yID0gZ3JhZGllbnRTZXR0aW5ncy5ncmFkaWVudENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudEludGVuc2l0eSA9IGdyYWRpZW50U2V0dGluZ3MuZ3JhZGllbnRJbnRlbnNpdHkudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50RGlyZWN0aW9uID0gZ3JhZGllbnRTZXR0aW5ncy5ncmFkaWVudERpcmVjdGlvbi52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgbGVnZW5kSXRlbXMucHVzaCh7IG5hbWU6IHNlcmllc05hbWUsIGNvbG9yOiBsaW5lQ29sb3IgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWwgZGVzIHBvaW50c1xyXG4gICAgICAgICAgICBjb25zdCBwb2ludHM6IFtudW1iZXIsIG51bWJlcl1bXSA9IGNhdHMubWFwKChjYXQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSAoaSAvIChjYXRzLmxlbmd0aCAtIDEpKSAqIGRyYXdXO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGdldFlQb3MoTnVtYmVyKHZhbHNbaV0pKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPCAyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAvLyBDcsOpYXRpb24gZHUgZMOpZ3JhZMOpIHVuaXF1ZVxyXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudElkID0gYGdyYWRpZW50XyR7aW5kZXh9XyR7RGF0ZS5ub3coKX1gOyAvLyBJRCB1bmlxdWVcclxuICAgICAgICAgICAgbGV0IGdyYWRpZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImxpbmVhckdyYWRpZW50XCIpO1xyXG4gICAgICAgICAgICBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBncmFkaWVudElkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3AxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInN0b3BcIik7XHJcbiAgICAgICAgICAgIHN0b3AxLnNldEF0dHJpYnV0ZShcIm9mZnNldFwiLCBcIjAlXCIpO1xyXG4gICAgICAgICAgICBzdG9wMS5zZXRBdHRyaWJ1dGUoXCJzdG9wLWNvbG9yXCIsIGdyYWRpZW50Q29sb3IpO1xyXG4gICAgICAgICAgICBzdG9wMS5zZXRBdHRyaWJ1dGUoXCJzdG9wLW9wYWNpdHlcIiwgTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgZ3JhZGllbnRJbnRlbnNpdHkpKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3AyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInN0b3BcIik7XHJcbiAgICAgICAgICAgIHN0b3AyLnNldEF0dHJpYnV0ZShcIm9mZnNldFwiLCBcIjEwMCVcIik7XHJcbiAgICAgICAgICAgIHN0b3AyLnNldEF0dHJpYnV0ZShcInN0b3AtY29sb3JcIiwgZ3JhZGllbnRDb2xvcik7XHJcbiAgICAgICAgICAgIHN0b3AyLnNldEF0dHJpYnV0ZShcInN0b3Atb3BhY2l0eVwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBncmFkaWVudC5hcHBlbmRDaGlsZChzdG9wMSk7XHJcbiAgICAgICAgICAgIGdyYWRpZW50LmFwcGVuZENoaWxkKHN0b3AyKTtcclxuICAgICAgICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3RvcihcImRlZnNcIik/LmFwcGVuZENoaWxkKGdyYWRpZW50KTtcclxuICAgICAgICAgICAgdGhpcy5hcHBseUdyYWRpZW50RGlyZWN0aW9uKGdyYWRpZW50LCBncmFkaWVudERpcmVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAvLyBDb25zdHJ1Y3Rpb24gZHUgY2hlbWluXHJcbiAgICAgICAgICAgIGxldCBkID0gc3RlcHBlZCA/IHRoaXMuYnVpbGRTdGVwcGVkUGF0aChwb2ludHMpIDogdGhpcy5idWlsZFNtb290aFBhdGgocG9pbnRzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFpcmVcclxuICAgICAgICAgICAgY29uc3QgcGF0aEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwicGF0aFwiKTtcclxuICAgICAgICAgICAgY29uc3QgeVplcm8gPSBnZXRZUG9zKDApO1xyXG4gICAgICAgICAgICBjb25zdCBhcmVhRCA9IGAke2R9IEwgJHtwb2ludHNbcG9pbnRzLmxlbmd0aC0xXVswXX0sJHt5WmVyb30gTCAke3BvaW50c1swXVswXX0sJHt5WmVyb30gWmA7XHJcbiAgICAgICAgICAgIHBhdGhBcmVhLnNldEF0dHJpYnV0ZShcImRcIiwgYXJlYUQpO1xyXG4gICAgICAgICAgICBwYXRoQXJlYS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHNob3dHcmFkaWVudCA/IGB1cmwoIyR7Z3JhZGllbnRJZH0pYCA6IFwibm9uZVwiKTtcclxuICAgICAgICAgICAgcGF0aEFyZWEuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lc0dyb3VwLmFwcGVuZENoaWxkKHBhdGhBcmVhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIExpZ25lXHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGhMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInBhdGhcIik7XHJcbiAgICAgICAgICAgIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcImRcIiwgZCk7XHJcbiAgICAgICAgICAgIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICBwYXRoTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgbGluZUNvbG9yKTtcclxuICAgICAgICAgICAgcGF0aExpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIHN0cm9rZVdpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBwYXRoTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xyXG4gICAgICAgICAgICBwYXRoTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJyb3VuZFwiKTtcclxuICAgICAgICAgICAgaWYgKGxpbmVTdHlsZSA9PT0gXCJkYXNoZWRcIikgcGF0aExpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcIjgsNFwiKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAobGluZVN0eWxlID09PSBcImRvdHRlZFwiKSBwYXRoTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiMiwyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVzR3JvdXAuYXBwZW5kQ2hpbGQocGF0aExpbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gTWFycXVldXJzXHJcbiAgICAgICAgICAgIGlmIChzaG93TWFya2Vycykge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzLmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1tYXJrZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsICh0aGlzLm1hcmdpbi5sZWZ0ICsgcFswXSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZShcImN5XCIsICh0aGlzLm1hcmdpbi50b3AgKyBwWzFdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBtYXJrZXJTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGxpbmVDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDDiXRpcXVldHRlcyBkZSBkb25uw6llc1xyXG4gICAgICAgICAgICBpZiAoc2hvd0RhdGFMYWJlbHMpIHtcclxuICAgICAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKChwLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIodmFsc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5mb3JtYXREYXRhTGFiZWwodmFsdWUsIGRhdGFMYWJlbHNEaXNwbGF5VW5pdHMsIGRhdGFMYWJlbHNQcmVjaXNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRleHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1kYXRhbGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwieFwiLCAodGhpcy5tYXJnaW4ubGVmdCArIHBbMF0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcInlcIiwgKHRoaXMubWFyZ2luLnRvcCArIHBbMV0gLSAxMCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBkYXRhTGFiZWxzQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBkYXRhTGFiZWxzRm9udFNpemUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgZGF0YUxhYmVsc0ZvbnRGYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvbnQtd2VpZ2h0XCIsIFwiNTAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBab25lcyBkZSBzdXJ2b2wgKFRvb2x0aXApIGF2ZWMgc3VwcG9ydCBkdSBkcmlsbFxyXG4gICAgICAgICAgICBwb2ludHMuZm9yRWFjaCgocCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3LDqWVyIGwnSUQgZGUgc8OpbGVjdGlvbiBwb3VyIGNlIHBvaW50XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIC53aXRoQ2F0ZWdvcnkoY2F0ZWdvcnksIGkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaG92ZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1ob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsICh0aGlzLm1hcmdpbi5sZWZ0ICsgcFswXSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCAodGhpcy5tYXJnaW4udG9wICsgcFsxXSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIFwiOFwiKTtcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJ0cmFuc3BhcmVudFwiKTtcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvb2x0aXBUaXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5Q29sdW1ucy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUaXRsZSA9IGNhdGVnb3J5Q29sdW1ucy5tYXAoYyA9PiBjLnZhbHVlc1tpXS50b1N0cmluZygpKS5qb2luKFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGl0bGUgPSB0aGlzLmZvcm1hdERhdGUoY2F0c1tpXS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXBDb250ZW50ID0gYDxkaXY+PHN0cm9uZz4ke3Rvb2x0aXBUaXRsZX08L3N0cm9uZz48L2Rpdj48ZGl2PiR7c2VyaWVzTmFtZX06ICR7dGhpcy5mb3JtYXROdW1iZXIoTnVtYmVyKHZhbHNbaV0pKX08L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAoZS5wYWdlWCwgZS5wYWdlWSwgdG9vbHRpcENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuY2xhc3NMaXN0LmFkZChcInRlbXAtbWFya2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgKHRoaXMubWFyZ2luLmxlZnQgKyBwWzBdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN5XCIsICh0aGlzLm1hcmdpbi50b3AgKyBwWzFdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgXCI1XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBsaW5lQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiI2ZmZlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQodGVtcENpcmNsZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5sZWZ0ID0gKGUucGFnZVggKyAxMCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLnRvcCA9IChlLnBhZ2VZIC0gMTApICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVUb29sdGlwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3RvckFsbChcIi50ZW1wLW1hcmtlclwiKS5mb3JFYWNoKG0gPT4gbS5yZW1vdmUoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBHZXN0aW9uIGR1IGNsaWMgcG91ciBsYSBzw6lsZWN0aW9uIChuw6ljZXNzYWlyZSBwb3VyIGxlIGRyaWxsKVxyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFPDqWxlY3Rpb25uZXIgY2UgcG9pbnQgZGUgZG9ubsOpZXNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2VsZWN0KHNlbGVjdGlvbklkLCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29udGV4dCBtZW51IChjbGljIGRyb2l0KSBwb3VyIGFmZmljaGVyIGxlcyBvcHRpb25zIGRlIGRyaWxsXHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNob3dDb250ZXh0TWVudShzZWxlY3Rpb25JZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChob3ZlckNpcmNsZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyA0LiBMw4lHRU5ERVxyXG4gICAgICAgIGlmIChzaG93TGVnZW5kICYmIGxlZ2VuZEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbGVnZW5kR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZ1wiKTtcclxuICAgICAgICAgICAgbGVnZW5kR3JvdXAuY2xhc3NMaXN0LmFkZChcImxlZ2VuZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsZWdlbmRYID0gMDtcclxuICAgICAgICAgICAgbGV0IGxlZ2VuZFkgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtV2lkdGggPSAxMDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSAyMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChsZWdlbmRQb3NpdGlvbiA9PT0gXCJUb3BcIiB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJUb3BDZW50ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kWCA9ICh3aWR0aCAtIGxlZ2VuZEl0ZW1zLmxlbmd0aCAqIGl0ZW1XaWR0aCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kWSA9IDEwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlZ2VuZFBvc2l0aW9uID09PSBcIkJvdHRvbVwiIHx8IGxlZ2VuZFBvc2l0aW9uID09PSBcIkJvdHRvbUNlbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRYID0gKHdpZHRoIC0gbGVnZW5kSXRlbXMubGVuZ3RoICogaXRlbVdpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRZID0gaGVpZ2h0IC0gMjA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVnZW5kUG9zaXRpb24gPT09IFwiTGVmdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRYID0gMTA7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRZID0gaGVpZ2h0IC8gMiAtIChsZWdlbmRJdGVtcy5sZW5ndGggKiBpdGVtSGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVnZW5kUG9zaXRpb24gPT09IFwiUmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kWCA9IHdpZHRoIC0gMTEwO1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kWSA9IGhlaWdodCAvIDIgLSAobGVnZW5kSXRlbXMubGVuZ3RoICogaXRlbUhlaWdodCkgLyAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZWdlbmRJdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4T2Zmc2V0ID0gbGVnZW5kUG9zaXRpb24uaW5jbHVkZXMoXCJDZW50ZXJcIikgfHwgbGVnZW5kUG9zaXRpb24gPT09IFwiVG9wXCIgfHwgbGVnZW5kUG9zaXRpb24gPT09IFwiQm90dG9tXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgPyBsZWdlbmRYICsgaSAqIGl0ZW1XaWR0aCBcclxuICAgICAgICAgICAgICAgICAgICA6IGxlZ2VuZFg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5T2Zmc2V0ID0gbGVnZW5kUG9zaXRpb24gPT09IFwiTGVmdFwiIHx8IGxlZ2VuZFBvc2l0aW9uID09PSBcIlJpZ2h0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgPyBsZWdlbmRZICsgaSAqIGl0ZW1IZWlnaHQgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBsZWdlbmRZO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENyw6llciB1biBncm91cGUgcG91ciBjaGFxdWUgw6lsw6ltZW50IGRlIGzDqWdlbmRlIHBvdXIgZmFjaWxpdGVyIGxlcyBpbnRlcmFjdGlvbnNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlZ2VuZEl0ZW1Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJnXCIpO1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kSXRlbUdyb3VwLnNldEF0dHJpYnV0ZShcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJyZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHhPZmZzZXQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgeU9mZnNldC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxNVwiKTtcclxuICAgICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiM1wiKTtcclxuICAgICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBpdGVtLmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZEl0ZW1Hcm91cC5hcHBlbmRDaGlsZChyZWN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRleHRcIik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInhcIiwgKHhPZmZzZXQgKyAyMCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInlcIiwgKHlPZmZzZXQgKyAyKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGxlZ2VuZEZvbnRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBsZWdlbmRGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgbGVnZW5kRm9udEZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kSXRlbUdyb3VwLmFwcGVuZENoaWxkKHRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFqb3V0ZXIgdW4gcmVjdGFuZ2xlIGludmlzaWJsZSBwb3VyIGFncmFuZGlyIGxhIHpvbmUgY2xpcXVhYmxlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBoaXRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInJlY3RcIik7XHJcbiAgICAgICAgICAgICAgICBoaXRBcmVhLnNldEF0dHJpYnV0ZShcInhcIiwgeE9mZnNldC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGhpdEFyZWEuc2V0QXR0cmlidXRlKFwieVwiLCAoeU9mZnNldCAtIDUpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgaGl0QXJlYS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjkwXCIpO1xyXG4gICAgICAgICAgICAgICAgaGl0QXJlYS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNVwiKTtcclxuICAgICAgICAgICAgICAgIGhpdEFyZWEuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kSXRlbUdyb3VwLmFwcGVuZENoaWxkKGhpdEFyZWEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1lbnUgY29udGV4dHVlbCBzdXIgbGVzIMOpbMOpbWVudHMgZGUgbMOpZ2VuZGVcclxuICAgICAgICAgICAgICAgIGxlZ2VuZEl0ZW1Hcm91cC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENyw6llciB1biBTZWxlY3Rpb25JZCBiYXPDqSBzdXIgbGEgc8OpcmllIChtZWFzdXJlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcmllc0RhdGEgPSBhbGxTZXJpZXMuZ3JvdXBlZCgpWzBdLnZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VyaWVzRGF0YSAmJiBzZXJpZXNEYXRhLmlkZW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAud2l0aFNlcmllcyhkYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMsIHNlcmllc0RhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNob3dDb250ZXh0TWVudShzZWxlY3Rpb25JZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDbGljIHBvdXIgZmlsdHJlci9zw6lsZWN0aW9ubmVyIGxhIHPDqXJpZVxyXG4gICAgICAgICAgICAgICAgbGVnZW5kSXRlbUdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VyaWVzRGF0YSA9IGFsbFNlcmllcy5ncm91cGVkKClbMF0udmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXJpZXNEYXRhICYmIHNlcmllc0RhdGEuaWRlbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoU2VyaWVzKGRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlcywgc2VyaWVzRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2VsZWN0KHNlbGVjdGlvbklkLCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxlZ2VuZEdyb3VwLmFwcGVuZENoaWxkKGxlZ2VuZEl0ZW1Hcm91cCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQobGVnZW5kR3JvdXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdERhdGFMYWJlbCh2YWx1ZTogbnVtYmVyLCBkaXNwbGF5VW5pdHM6IG51bWJlciwgcHJlY2lzaW9uOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSB2YWx1ZTtcclxuICAgICAgICBsZXQgc3VmZml4ID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKGRpc3BsYXlVbml0cyA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBBdXRvXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMDAwMDAwMCkgeyBcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDAwMDsgXHJcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBcIiBNZHNcIjsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnModmFsdWUpID49IDEwMDAwMDApIHsgXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDAwMDA7IFxyXG4gICAgICAgICAgICAgICAgc3VmZml4ID0gXCIgTVwiOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMCkgeyBcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDsgXHJcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBcIiBLXCI7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXNwbGF5VW5pdHMgPT09IDEwMDApIHtcclxuICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwO1xyXG4gICAgICAgICAgICBzdWZmaXggPSBcIiBLXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXNwbGF5VW5pdHMgPT09IDEwMDAwMDApIHtcclxuICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwO1xyXG4gICAgICAgICAgICBzdWZmaXggPSBcIiBNXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXNwbGF5VW5pdHMgPT09IDEwMDAwMDAwMDApIHtcclxuICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICBzdWZmaXggPSBcIiBNZHNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZC50b0ZpeGVkKHByZWNpc2lvbikgKyBzdWZmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFNtb290aFBhdGgocG9pbnRzOiBbbnVtYmVyLCBudW1iZXJdW10pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoID09PSAwKSByZXR1cm4gXCJcIjtcclxuICAgICAgICBsZXQgZCA9IGBNICR7cG9pbnRzWzBdWzBdfSwke3BvaW50c1swXVsxXX1gO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGQgKz0gYCBMICR7cG9pbnRzW2ldWzBdfSwke3BvaW50c1tpXVsxXX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkU3RlcHBlZFBhdGgocG9pbnRzOiBbbnVtYmVyLCBudW1iZXJdW10pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoID09PSAwKSByZXR1cm4gXCJcIjtcclxuICAgICAgICBsZXQgZCA9IGBNICR7cG9pbnRzWzBdWzBdfSwke3BvaW50c1swXVsxXX1gO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGQgKz0gYCBMICR7cG9pbnRzW2ldWzBdfSwke3BvaW50c1tpLTFdWzFdfSBMICR7cG9pbnRzW2ldWzBdfSwke3BvaW50c1tpXVsxXX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Rm9ybWF0dGluZ01vZGVsKCk6IHBvd2VyYmkudmlzdWFscy5Gb3JtYXR0aW5nTW9kZWwge1xyXG4gICAgICAgIC8vIENvbXB0ZXIgbGUgbm9tYnJlIGRlIHPDqXJpZXMgKGNoYW1wcyBWYWx1ZXMpXHJcbiAgICAgICAgbGV0IG5iU2VyaWVzID0gMTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhVmlldyAmJiB0aGlzLmRhdGFWaWV3LmNhdGVnb3JpY2FsICYmIHRoaXMuZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzKSB7XHJcbiAgICAgICAgICAgIG5iU2VyaWVzID0gdGhpcy5kYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTGlzdGUgZHluYW1pcXVlIGRlcyBjYXJkcyDDoCBhZmZpY2hlclxyXG4gICAgICAgIGNvbnN0IGNhcmRzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBBam91dGVyIHNldWxlbWVudCBsZXMgZ3JvdXBlcyBuw6ljZXNzYWlyZXNcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuYlNlcmllczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNhcmRzLnB1c2godGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NbYGxpbmVTZXR0aW5ncyR7aX1gXSk7XHJcbiAgICAgICAgICAgIGNhcmRzLnB1c2godGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NbYGdyYWRpZW50U2V0dGluZ3Mke2l9YF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWpvdXRlciBsZXMgYXV0cmVzIGdyb3VwZXMgZ8OpbsOpcmF1eFxyXG4gICAgICAgIGNhcmRzLnB1c2goXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnhBeGlzU2V0dGluZ3MsXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3MsXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmdyaWRTZXR0aW5ncyxcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZGF0YUxhYmVscyxcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGVnZW5kXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gR8OpbsOpcmVyIGxlIG1vZMOobGUgYXZlYyB1bmlxdWVtZW50IGxlcyBjYXJkcyB1dGlsZXNcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmJ1aWxkRm9ybWF0dGluZ01vZGVsKHsgY2FyZHMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseUdyYWRpZW50RGlyZWN0aW9uKGdyYWRpZW50OiBTVkdMaW5lYXJHcmFkaWVudEVsZW1lbnQsIGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFwidmVydGljYWxcIjogZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDFcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngyXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTJcIiwgXCIxXCIpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInZlcnRpY2FsLXJldmVyc2VcIjogZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDFcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCBcIjFcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngyXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTJcIiwgXCIwXCIpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxcIjogZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDFcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngyXCIsIFwiMVwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTJcIiwgXCIwXCIpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWwtcmV2ZXJzZVwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjFcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjBcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGlhZ29uYWxcIjogZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDFcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngyXCIsIFwiMVwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTJcIiwgXCIxXCIpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRpYWdvbmFsLXJldmVyc2VcIjogZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDFcIiwgXCIxXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngyXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTJcIiwgXCIxXCIpOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXROdW1iZXIobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIETDqXRlcm1pbmVyIGxlIG5vbWJyZSBkZSBkw6ljaW1hbGVzIG7DqWNlc3NhaXJlc1xyXG4gICAgICAgIGlmIChudW0gPT09IDApIHJldHVybiBcIjBcIjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhYnNOdW0gPSBNYXRoLmFicyhudW0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBvdXIgbGVzIGdyYW5kcyBub21icmVzICg+PSAxMDAwKSwgcGFzIGRlIGTDqWNpbWFsZXNcclxuICAgICAgICBpZiAoYWJzTnVtID49IDEwMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtKS50b0xvY2FsZVN0cmluZygnZnItRlInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG91ciBsZXMgbm9tYnJlcyBlbnRyZSAxIGV0IDk5OSwgbWF4IDIgZMOpY2ltYWxlcyBzaSBuw6ljZXNzYWlyZVxyXG4gICAgICAgIGlmIChhYnNOdW0gPj0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCByb3VuZGVkID0gTWF0aC5yb3VuZChudW0gKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICByZXR1cm4gcm91bmRlZC50b0xvY2FsZVN0cmluZygnZnItRlInLCB7IFxyXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLCBcclxuICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBvdXIgbGVzIHBldGl0cyBub21icmVzICg8IDEpLCBhZmZpY2hlciBqdXNxdSfDoCA0IGTDqWNpbWFsZXNcclxuICAgICAgICBjb25zdCBtYWduaXR1ZGUgPSBNYXRoLmZsb29yKE1hdGgubG9nMTAoYWJzTnVtKSk7XHJcbiAgICAgICAgY29uc3QgZGVjaW1hbHMgPSBNYXRoLm1pbig0LCBNYXRoLmFicyhtYWduaXR1ZGUpICsgMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZnItRlInLCB7IFxyXG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IGRlY2ltYWxzLFxyXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGRlY2ltYWxzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXRZQXhpc1ZhbHVlKHZhbHVlOiBudW1iZXIsIGRpc3BsYXlVbml0czogc3RyaW5nLCBwcmVjaXNpb246IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZCA9IHZhbHVlO1xyXG4gICAgICAgIGxldCBzdWZmaXggPSBcIlwiO1xyXG5cclxuICAgICAgICBjb25zdCB1bml0cyA9IHBhcnNlSW50KGRpc3BsYXlVbml0cyk7XHJcblxyXG4gICAgICAgIGlmICh1bml0cyA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBBdXRvIDogZMOpdGVjdGlvbiBhdXRvbWF0aXF1ZVxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModmFsdWUpID49IDEwMDAwMDAwMDApIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDAwMDtcclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1kc1wiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKHZhbHVlKSA+PSAxMDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBcIiBNXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnModmFsdWUpID49IDEwMDApIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IFwiIEtcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pdHMgPT09IDEwMDApIHtcclxuICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwO1xyXG4gICAgICAgICAgICBzdWZmaXggPSBcIiBLXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1bml0cyA9PT0gMTAwMDAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDAwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXRzID09PSAxMDAwMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDAwMDtcclxuICAgICAgICAgICAgc3VmZml4ID0gXCIgTWRzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBcHBsaXF1ZXIgbGEgcHLDqWNpc2lvblxyXG4gICAgICAgIGlmIChwcmVjaXNpb24gPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoZm9ybWF0dGVkKS50b0xvY2FsZVN0cmluZygnZnItRlInKSArIHN1ZmZpeDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0dGVkLnRvTG9jYWxlU3RyaW5nKCdmci1GUicsIHtcclxuICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlY2lzaW9uLFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb25cclxuICAgICAgICAgICAgfSkgKyBzdWZmaXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0RGF0ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBTaW1wbGVtZW50IHJldG91cm5lciBsYSB2YWxldXIgdGVsbGUgcXVlbGxlXHJcbiAgICAgICAgLy8gUG93ZXIgQkkgZW52b2llIGTDqWrDoCBsZSBib24gZm9ybWF0IHNlbG9uIGxlIG5pdmVhdSBkZSBkcmlsbFxyXG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBWaXN1YWwgfSBmcm9tIFwiLi4vLi4vc3JjL3Zpc3VhbFwiO1xuaW1wb3J0IHBvd2VyYmlWaXN1YWxzQXBpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7XG5pbXBvcnQgSVZpc3VhbFBsdWdpbiA9IHBvd2VyYmlWaXN1YWxzQXBpLnZpc3VhbHMucGx1Z2lucy5JVmlzdWFsUGx1Z2luO1xuaW1wb3J0IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmlWaXN1YWxzQXBpLmV4dGVuc2liaWxpdHkudmlzdWFsLlZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucztcbmltcG9ydCBEaWFsb2dDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpVmlzdWFsc0FwaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5EaWFsb2dDb25zdHJ1Y3Rvck9wdGlvbnM7XG52YXIgcG93ZXJiaUtleTogYW55ID0gXCJwb3dlcmJpXCI7XG52YXIgcG93ZXJiaTogYW55ID0gd2luZG93W3Bvd2VyYmlLZXldO1xudmFyIGNvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRzogSVZpc3VhbFBsdWdpbiA9IHtcbiAgICBuYW1lOiAnY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHJyxcbiAgICBkaXNwbGF5TmFtZTogJ2NvdXJiZWRlZ3JhZGUnLFxuICAgIGNsYXNzOiAnVmlzdWFsJyxcbiAgICBhcGlWZXJzaW9uOiAnNS4zLjAnLFxuICAgIGNyZWF0ZTogKG9wdGlvbnM/OiBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMpID0+IHtcbiAgICAgICAgaWYgKFZpc3VhbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWaXN1YWwob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgJ1Zpc3VhbCBpbnN0YW5jZSBub3QgZm91bmQnO1xuICAgIH0sXG4gICAgY3JlYXRlTW9kYWxEaWFsb2c6IChkaWFsb2dJZDogc3RyaW5nLCBvcHRpb25zOiBEaWFsb2dDb25zdHJ1Y3Rvck9wdGlvbnMsIGluaXRpYWxTdGF0ZTogb2JqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZ2lzdHJ5ID0gKDxhbnk+Z2xvYmFsVGhpcykuZGlhbG9nUmVnaXN0cnk7XG4gICAgICAgIGlmIChkaWFsb2dJZCBpbiBkaWFsb2dSZWdpc3RyeSkge1xuICAgICAgICAgICAgbmV3IGRpYWxvZ1JlZ2lzdHJ5W2RpYWxvZ0lkXShvcHRpb25zLCBpbml0aWFsU3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjdXN0b206IHRydWVcbn07XG5pZiAodHlwZW9mIHBvd2VyYmkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBwb3dlcmJpLnZpc3VhbHMgPSBwb3dlcmJpLnZpc3VhbHMgfHwge307XG4gICAgcG93ZXJiaS52aXN1YWxzLnBsdWdpbnMgPSBwb3dlcmJpLnZpc3VhbHMucGx1Z2lucyB8fCB7fTtcbiAgICBwb3dlcmJpLnZpc3VhbHMucGx1Z2luc1tcImNvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVR1wiXSA9IGNvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRztcbn1cbmV4cG9ydCBkZWZhdWx0IGNvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRzsiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9