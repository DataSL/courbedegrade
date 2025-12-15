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
    // Licensing
    isLicenseValid = false;
    licenseCheckMessage;
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
        // Message de licence
        this.licenseCheckMessage = document.createElement("div");
        this.licenseCheckMessage.style.position = "absolute";
        this.licenseCheckMessage.style.top = "10px";
        this.licenseCheckMessage.style.left = "10px";
        this.licenseCheckMessage.style.padding = "10px";
        this.licenseCheckMessage.style.background = "#fff3cd";
        this.licenseCheckMessage.style.border = "1px solid #ffc107";
        this.licenseCheckMessage.style.borderRadius = "4px";
        this.licenseCheckMessage.style.color = "#856404";
        this.licenseCheckMessage.style.fontSize = "12px";
        this.licenseCheckMessage.style.display = "none";
        this.licenseCheckMessage.style.zIndex = "1001";
        this.target.appendChild(this.licenseCheckMessage);
        // Vérifier la licence
        this.checkLicense();
    }
    checkLicense() {
        // 🧪 MODE TEST : Décommentez la ligne suivante pour simuler une licence invalide
        // this.isLicenseValid = false;
        // this.licenseCheckMessage.textContent = "⚠️ [MODE TEST] Licence non valide simulée";
        // this.licenseCheckMessage.style.display = "block";
        // return;
        try {
            // Vérifier si on a accès aux privilèges via l'interface étendue
            const hostWithPrivileges = this.host;
            if (hostWithPrivileges.getPrivileges) {
                const privileges = hostWithPrivileges.getPrivileges();
                console.log("🔑 Privilèges détectés:", privileges); // Pour debug
                // Vérifier si WebAccess est accordé
                if (privileges && privileges.indexOf('WebAccess') !== -1) {
                    this.isLicenseValid = true;
                    this.licenseCheckMessage.style.display = "none";
                    console.log("✅ Licence valide - WebAccess accordé");
                }
                else {
                    this.isLicenseValid = false;
                    this.licenseCheckMessage.textContent = "⚠️ Licence non valide : Ce visuel nécessite une licence Power BI appropriée.";
                    this.licenseCheckMessage.style.display = "block";
                    console.warn("⚠️ Licence invalide - WebAccess non accordé");
                }
            }
            else {
                // Si getPrivileges n'est pas disponible, vérifier l'environnement
                // En production Power BI Service, on peut vérifier d'autres propriétés
                console.log("ℹ️ getPrivileges() non disponible - mode Desktop/Dev");
                const hostCapabilities = this.host.createSelectionIdBuilder ? true : false;
                this.isLicenseValid = hostCapabilities;
                if (!this.isLicenseValid) {
                    this.licenseCheckMessage.textContent = "⚠️ Environnement non supporté ou licence non valide.";
                    this.licenseCheckMessage.style.display = "block";
                    console.warn("⚠️ Licence invalide - Environnement non supporté");
                }
                else {
                    this.licenseCheckMessage.style.display = "none";
                    console.log("✅ Licence valide - Mode Desktop/Dev");
                }
            }
        }
        catch (error) {
            // En cas d'erreur, considérer que la licence est valide (mode développement)
            console.log("🔧 Erreur vérification licence (mode développement):", error);
            this.isLicenseValid = true;
            this.licenseCheckMessage.style.display = "none";
        }
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
        // Vérifier la licence avant de continuer
        this.checkLicense();
        // Si la licence n'est pas valide, afficher un message et arrêter
        if (!this.isLicenseValid) {
            // Nettoyer le visuel
            while (this.axisGroup.firstChild)
                this.axisGroup.removeChild(this.axisGroup.firstChild);
            while (this.linesGroup.firstChild)
                this.linesGroup.removeChild(this.linesGroup.firstChild);
            this.svg.setAttribute("width", options.viewport.width.toString());
            this.svg.setAttribute("height", options.viewport.height.toString());
            // Créer un message au centre
            const centerMessage = document.createElementNS(ns, "text");
            centerMessage.setAttribute("x", (options.viewport.width / 2).toString());
            centerMessage.setAttribute("y", (options.viewport.height / 2).toString());
            centerMessage.setAttribute("text-anchor", "middle");
            centerMessage.setAttribute("fill", "#856404");
            centerMessage.setAttribute("font-size", "14px");
            centerMessage.textContent = "Licence Power BI requise";
            this.axisGroup.appendChild(centerMessage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWUsbURBQW1ELEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5qcyIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uL3NyYy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9zcmMvdmlzdWFsLnRzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uL3N0eWxlL3Zpc3VhbC5sZXNzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uLy50bXAvcHJlY29tcGlsZS92aXN1YWxQbHVnaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQb3dlcmJpIHV0aWxzIGNvbXBvbmVudHMgY2xhc3NlcyBmb3IgY3VzdG9tIHZpc3VhbCBmb3JtYXR0aW5nIHBhbmUgb2JqZWN0c1xuICpcbiAqL1xuaW1wb3J0ICogYXMgRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyIGZyb20gXCIuL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzXCI7XG5jbGFzcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgQ2FyZEdyb3VwRW50aXR5IGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIE1vZGVsIHtcbn1cbi8qKiBDb21wb3NpdGVDYXJkIGlzIHVzZSB0byBwb3B1bGF0ZSBhIGNhcmQgaW50byB0aGUgZm9ybWF0dGluZyBwYW5lIHdpdGggbXVsdGlwbGUgZ3JvdXBzICovXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlQ2FyZCBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIENhcmRHcm91cEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG4vKiogU2ltcGxlQ2FyZCBpcyB1c2UgdG8gcG9wdWxhdGUgYSBjYXJkIGludG8gdGhlIGZvcm1hdHRpbmcgcGFuZSBpbiBhIHNpbmdsZSBncm91cCAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUNhcmQgZXh0ZW5kcyBDYXJkR3JvdXBFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIFNpbXBsZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IHNsaWNlRGlzcGxheU5hbWUgPSAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRpc3BsYXlOYW1lS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kaXNwbGF5TmFtZUtleSkgOiB0aGlzLmRpc3BsYXlOYW1lO1xuICAgICAgICBjb25zdCBzbGljZURlc2NyaXB0aW9uID0gKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogc2xpY2VEaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzbGljZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdG9yOiBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0RGVzY3JpcHRvcihvYmplY3ROYW1lLCB0aGlzKSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHRoaXMubmFtZVxuICAgICAgICAgICAgfV07XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gKF9hID0gZGF0YVZpZXdPYmplY3RzID09PSBudWxsIHx8IGRhdGFWaWV3T2JqZWN0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YVZpZXdPYmplY3RzW29iamVjdE5hbWVdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbdGhpcy5uYW1lXTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlci5nZXRQcm9wZXJ0eVZhbHVlKHRoaXMsIG5ld1ZhbHVlLCB0aGlzLnZhbHVlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQWxpZ25tZW50R3JvdXAgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiQWxpZ25tZW50R3JvdXBcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuQWxpZ25tZW50R3JvdXAgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBtb2RlOiB0aGlzLm1vZGUsIHN1cHBvcnRzTm9TZWxlY3Rpb246IHRoaXMuc3VwcG9ydHNOb1NlbGVjdGlvbiB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVG9nZ2xlU3dpdGNoIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRvZ2dsZVN3aXRjaFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ub2dnbGVTd2l0Y2ggKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkNvbG9yUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkNvbG9yUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgZGVmYXVsdENvbG9yOiB0aGlzLmRlZmF1bHRDb2xvciwgaXNOb0ZpbGxJdGVtU3VwcG9ydGVkOiB0aGlzLmlzTm9GaWxsSXRlbVN1cHBvcnRlZCB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTnVtVXBEb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk51bVVwRG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5OdW1VcERvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBvcHRpb25zOiB0aGlzLm9wdGlvbnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlciBleHRlbmRzIE51bVVwRG93biB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU2xpZGVyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlNsaWRlciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEYXRlUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRhdGVQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBwbGFjZWhvbGRlcjogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5wbGFjZWhvbGRlcktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMucGxhY2Vob2xkZXJLZXkpIDogdGhpcy5wbGFjZWhvbGRlciwgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJdGVtRHJvcGRvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpdGVtczogdGhpcy5pdGVtcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXV0b0Ryb3Bkb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgbWVyZ2VWYWx1ZXM6IHRoaXMubWVyZ2VWYWx1ZXMsIGZpbHRlclZhbHVlczogdGhpcy5maWx0ZXJWYWx1ZXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkR1cmF0aW9uUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkR1cmF0aW9uUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFcnJvclJhbmdlQ29udHJvbCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJFcnJvclJhbmdlQ29udHJvbFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5FcnJvclJhbmdlQ29udHJvbCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRmllbGRQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmllbGRQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmllbGRQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMsIGFsbG93TXVsdGlwbGVWYWx1ZXM6IHRoaXMuYWxsb3dNdWx0aXBsZVZhbHVlcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSXRlbUZsYWdzU2VsZWN0aW9uIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZsYWdzU2VsZWN0aW9uXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZsYWdzU2VsZWN0aW9uICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXRlbXM6IHRoaXMuaXRlbXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF1dG9GbGFnc1NlbGVjdGlvbiBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGbGFnc1NlbGVjdGlvblwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GbGFnc1NlbGVjdGlvbiAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRJbnB1dFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5UZXh0SW5wdXQgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBUZXh0SW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRBcmVhXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRleHRBcmVhICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb250UGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZvbnRQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRm9udFBpY2tlciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhZGllbnRCYXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiR3JhZGllbnRCYXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuR3JhZGllbnRCYXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkltYWdlVXBsb2FkXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkltYWdlVXBsb2FkICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMaXN0RWRpdG9yIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkxpc3RFZGl0b3JcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTGlzdEVkaXRvciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVhZE9ubHlUZXh0IGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlJlYWRPbmx5VGV4dFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5SZWFkT25seVRleHQgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNoYXBlTWFwU2VsZWN0b3IgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU2hhcGVNYXBTZWxlY3RvclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5TaGFwZU1hcFNlbGVjdG9yICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXNBek1hcFJlZmVyZW5jZVNlbGVjdG9yOiB0aGlzLmlzQXpNYXBSZWZlcmVuY2VTZWxlY3RvciB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlU2xpY2UgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kaXNwbGF5TmFtZUtleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGlzcGxheU5hbWVLZXkpIDogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRlc2NyaXB0aW9uS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kZXNjcmlwdGlvbktleSkgOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9udENvbnRyb2wgZXh0ZW5kcyBDb21wb3NpdGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRm9udENvbnRyb2xcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRm9udENvbnRyb2wgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuZm9udEZhbWlseS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9udFNpemUuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGJvbGQ6IChfYSA9IHRoaXMuYm9sZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBpdGFsaWM6IChfYiA9IHRoaXMuaXRhbGljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHVuZGVybGluZTogKF9jID0gdGhpcy51bmRlcmxpbmUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb250RmFtaWx5LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5mb250U2l6ZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmJvbGQgPyB0aGlzLmJvbGQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLml0YWxpYyA/IHRoaXMuaXRhbGljLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy51bmRlcmxpbmUgPyB0aGlzLnVuZGVybGluZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5mb250U2l6ZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYSA9IHRoaXMuYm9sZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9iID0gdGhpcy5pdGFsaWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYyA9IHRoaXMudW5kZXJsaW5lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Muc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNYXJnaW5QYWRkaW5nIGV4dGVuZHMgQ29tcG9zaXRlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk1hcmdpblBhZGRpbmdcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTWFyZ2luUGFkZGluZyAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMuYm90dG9tLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnJpZ2h0LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMudG9wLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuYm90dG9tLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB0aGlzLmxlZnQuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnJpZ2h0LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy50b3Auc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLmJvdHRvbS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250YWluZXJJdGVtIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcy5tYXAiLCJpbXBvcnQgeyBDb21wb3NpdGVDYXJkLCBTaW1wbGVDYXJkIH0gZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyID0gbG9jYWxpemF0aW9uTWFuYWdlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdmlzdWFsIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWwgZnJvbSBtZXRhZGF0YSBkYXRhVmlld1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFWaWV3cyBtZXRhZGF0YSBkYXRhVmlldyBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB2aXN1YWwgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbFxuICAgICAqL1xuICAgIHBvcHVsYXRlRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwodHlwZUNsYXNzLCBkYXRhVmlldykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBsZXQgZGVmYXVsdFNldHRpbmdzID0gbmV3IHR5cGVDbGFzcygpO1xuICAgICAgICBsZXQgZGF0YVZpZXdPYmplY3RzID0gKF9hID0gZGF0YVZpZXcgPT09IG51bGwgfHwgZGF0YVZpZXcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3Lm1ldGFkYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub2JqZWN0cztcbiAgICAgICAgaWYgKGRhdGFWaWV3T2JqZWN0cykge1xuICAgICAgICAgICAgLy8gbG9vcCBvdmVyIGVhY2ggZm9ybWF0dGluZyBwcm9wZXJ0eSBhbmQgc2V0IGl0cyBuZXcgdmFsdWUgaWYgZXhpc3RzXG4gICAgICAgICAgICAoX2IgPSBkZWZhdWx0U2V0dGluZ3MuY2FyZHMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkIGluc3RhbmNlb2YgQ29tcG9zaXRlQ2FyZClcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID8gW2NhcmRdIDogY2FyZC5ncm91cHMpO1xuICAgICAgICAgICAgICAgIGNhcmRHcm91cEluc3RhbmNlcy5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBjdXJyZW50IHRvcCBsZXZlbCB0b2dnbGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gbnVsbCB8fCBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIChfZCA9IChfYyA9IGNhcmRHcm91cEluc3RhbmNlID09PSBudWxsIHx8IGNhcmRHcm91cEluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGNvbnRhaW5lckl0ZW0gPT09IG51bGwgfHwgY29udGFpbmVySXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGFpbmVySXRlbS5zbGljZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0U2V0dGluZ3M7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGZvcm1hdHRpbmcgbW9kZWwgYnkgcGFyc2luZyBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIG9iamVjdFxuICAgICAqXG4gICAgICogQHJldHVybnMgcG93ZXJiaSB2aXN1YWwgZm9ybWF0dGluZyBtb2RlbFxuICAgICAqL1xuICAgIGJ1aWxkRm9ybWF0dGluZ01vZGVsKGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKSB7XG4gICAgICAgIGxldCBmb3JtYXR0aW5nTW9kZWwgPSB7XG4gICAgICAgICAgICBjYXJkczogW11cbiAgICAgICAgfTtcbiAgICAgICAgZm9ybWF0dGluZ1NldHRpbmdzTW9kZWwuY2FyZHNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGluZ0NhcmQgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZC5kaXNwbGF5TmFtZUtleSkgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZC5kaXNwbGF5TmFtZUtleSkgOiBjYXJkLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGVzY3JpcHRpb25LZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGVzY3JpcHRpb25LZXkpIDogY2FyZC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgICAgIHVpZDogY2FyZC5uYW1lICsgXCItY2FyZFwiLFxuICAgICAgICAgICAgICAgIGFuYWx5dGljc1BhbmU6IGNhcmQuYW5hbHl0aWNzUGFuZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvYmplY3ROYW1lID0gY2FyZC5uYW1lO1xuICAgICAgICAgICAgaWYgKGNhcmQudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgIGxldCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZC50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQudG9wTGV2ZWxUb2dnbGUgPSB0b3BMZXZlbFRvZ2dsZVNsaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9hID0gY2FyZC5vblByZVByb2Nlc3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGNhcmQpO1xuICAgICAgICAgICAgY29uc3QgaXNTaW1wbGVDYXJkID0gY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQ7XG4gICAgICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoaXNTaW1wbGVDYXJkID9cbiAgICAgICAgICAgICAgICBbY2FyZF0uZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpIDpcbiAgICAgICAgICAgICAgICBjYXJkLmdyb3Vwcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkpO1xuICAgICAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBVaWQgPSBjYXJkR3JvdXBJbnN0YW5jZS5uYW1lICsgXCItZ3JvdXBcIjtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGdyb3VwIGZvciBlYWNoIGdyb3VwXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0dyb3VwID0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzbGljZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB1aWQ6IGdyb3VwVWlkLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogY2FyZEdyb3VwSW5zdGFuY2UuY29sbGFwc2libGUsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5U2F2ZVNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2UuZGVsYXlTYXZlU2xpY2VzLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2FyZEdyb3VwSW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkUmVhc29uOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNhYmxlZFJlYXNvbixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLmdyb3Vwcy5wdXNoKGZvcm1hdHRpbmdHcm91cCk7XG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSBmb3JtYXR0aW5nIG1vZGVsIGFkZHMgZGF0YSBwb2ludHMgb3IgdG9wIGNhdGVnb3JpZXMgKExpa2Ugd2hlbiB5b3UgbW9kaWZ5IHNwZWNpZmljIHZpc3VhbCBjYXRlZ29yeSBjb2xvcikuXG4gICAgICAgICAgICAgICAgLy8gdGhlc2UgY2F0ZWdvcmllcyB1c2Ugc2FtZSBvYmplY3QgbmFtZSBhbmQgcHJvcGVydHkgbmFtZSBmcm9tIGNhcGFiaWxpdGllcyBhbmQgdGhlIGdlbmVyYXRlZCB1aWQgd2lsbCBiZSB0aGUgc2FtZSBmb3IgdGhlc2UgZm9ybWF0dGluZyBjYXRlZ29yaWVzIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBTb2x1dGlvbiA9PiBTYXZlIHNsaWNlIG5hbWVzIHRvIG1vZGlmeSBlYWNoIHNsaWNlIHVpZCB0byBiZSB1bmlxdWUgYnkgYWRkaW5nIGNvdW50ZXIgdmFsdWUgdG8gdGhlIG5ldyBzbGljZSB1aWRcbiAgICAgICAgICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgc2xpY2UgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyVWlkID0gZ3JvdXBVaWQgKyBcIi1jb250YWluZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0NvbnRhaW5lciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lci5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXIuZGlzcGxheU5hbWVLZXkpIDogY29udGFpbmVyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVyLmRlc2NyaXB0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lci5kZXNjcmlwdGlvbktleSkgOiBjb250YWluZXIuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lclVpZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY29udGFpbmVySXRlbXMuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbSBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckllbU5hbWUgPSBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5ID8gY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJJdGVtVWlkID0gY29udGFpbmVyVWlkICsgY29udGFpbmVySWVtTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0aW5nQ29udGFpbmVySXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5KSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lckl0ZW1VaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlcyBhbmQgYWRkIHRoZW0gdG8gY3VycmVudCBmb3JtYXR0aW5nIGNvbnRhaW5lciBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlczogY29udGFpbmVySXRlbS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdDb250YWluZXJJdGVtLnNsaWNlcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDb250YWluZXIuY29udGFpbmVySXRlbXMucHVzaChmb3JtYXR0aW5nQ29udGFpbmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nR3JvdXAuY29udGFpbmVyID0gZm9ybWF0dGluZ0NvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcExldmVsVG9nZ2xlU2xpY2UgPSBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wTGV2ZWxUb2dnbGVTbGljZS5zdXBwcmVzc0Rpc3BsYXlOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChmb3JtYXR0aW5nR3JvdXAuZGlzcGxheU5hbWUgPT0gdW5kZWZpbmVkID8gZm9ybWF0dGluZ0NhcmQgOiBmb3JtYXR0aW5nR3JvdXApLnRvcExldmVsVG9nZ2xlID0gdG9wTGV2ZWxUb2dnbGVTbGljZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzOiBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdHcm91cC5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC5yZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKTtcbiAgICAgICAgICAgIGZvcm1hdHRpbmdNb2RlbC5jYXJkcy5wdXNoKGZvcm1hdHRpbmdDYXJkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0aW5nTW9kZWw7XG4gICAgfVxuICAgIGJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlcyB9KSB7XG4gICAgICAgIC8vIEZpbHRlciBzbGljZXMgYmFzZWQgb24gdGhlaXIgdmlzaWJpbGl0eVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGluZ1NsaWNlID0gc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgaWYgKGZvcm1hdHRpbmdTbGljZSkge1xuICAgICAgICAgICAgICAgIC8vIE1vZGlmeSBmb3JtYXR0aW5nIHNsaWNlIHVpZCBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICBpZiAoc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSsrO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nU2xpY2UudWlkID0gYCR7Zm9ybWF0dGluZ1NsaWNlLnVpZH0tJHtzbGljZU5hbWVzW3NsaWNlLm5hbWVdfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdTbGljZXMucHVzaChmb3JtYXR0aW5nU2xpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gUHJvY2VlZGVkIHNsaWNlIG5hbWVzIGFyZSBzYXZlZCB0byBwcmV2ZW50IGR1cGxpY2F0ZWQgZGVmYXVsdCBkZXNjcmlwdG9ycyBpbiBjYXNlIG9mIHVzaW5nIFxuICAgICAgICAvLyBmb3JtYXR0aW5nIGNhdGVnb3JpZXMgJiBzZWxlY3RvcnMsIHNpbmNlIHRoZXkgaGF2ZSB0aGUgc2FtZSBkZXNjcmlwdG9yIG9iamVjdE5hbWUgYW5kIHByb3BlcnR5TmFtZVxuICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgIGxldCByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBsZXQgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICAgICAgbGV0IGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgaWYgKGNhcmQgaW5zdGFuY2VvZiBDb21wb3NpdGVDYXJkICYmIGNhcmQudG9wTGV2ZWxTbGljZSlcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLnB1c2goLi4uKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUpKTtcbiAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID9cbiAgICAgICAgICAgIFtjYXJkXS5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkgOlxuICAgICAgICAgICAgY2FyZC5ncm91cHMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpKTtcbiAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUsIGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcywgc2xpY2VOYW1lcywgY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSk7XG4gICAgICAgICAgICAoX2IgPSAoX2EgPSBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQodGhpcy5nZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSwgY29udGFpbmVySXRlbS5zbGljZXMsIHNsaWNlTmFtZXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMucHVzaCguLi5jYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdChjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgfVxuICAgIGdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUsIHNsaWNlcywgc2xpY2VOYW1lcywgdG9wTGV2ZWxTbGljZSkge1xuICAgICAgICBsZXQgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgaWYgKHRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgIHNsaWNlTmFtZXNbdG9wTGV2ZWxTbGljZS5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdCh0b3BMZXZlbFNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgIGlmIChzbGljZSAmJiAhc2xpY2VOYW1lc1tzbGljZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBmb3JtYXR0aW5nU2V0dGluZ3MgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZVwiO1xuZXhwb3J0IHsgZm9ybWF0dGluZ1NldHRpbmdzLCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEJ1aWxkIGFuZCByZXR1cm4gZm9ybWF0dGluZyBkZXNjcmlwdG9yIGZvciBzaW1wbGUgc2xpY2VcbiAqXG4gKiBAcGFyYW0gb2JqZWN0TmFtZSBPYmplY3QgbmFtZSBmcm9tIGNhcGFiaWxpdGllc1xuICogQHBhcmFtIHNsaWNlIGZvcm1hdHRpbmcgc2ltcGxlIHNsaWNlXG4gKiBAcmV0dXJucyBzaW1wbGUgc2xpY2UgZm9ybWF0dGluZyBkZXNjcmlwdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXNjcmlwdG9yKG9iamVjdE5hbWUsIHNsaWNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgcHJvcGVydHlOYW1lOiBzbGljZS5uYW1lLFxuICAgICAgICBzZWxlY3Rvcjogc2xpY2Uuc2VsZWN0b3IsXG4gICAgICAgIGFsdENvbnN0YW50VmFsdWVTZWxlY3Rvcjogc2xpY2UuYWx0Q29uc3RhbnRTZWxlY3RvcixcbiAgICAgICAgaW5zdGFuY2VLaW5kOiBzbGljZS5pbnN0YW5jZUtpbmRcbiAgICB9O1xufVxuLyoqXG4gKiBHZXQgcHJvcGVydHkgdmFsdWUgZnJvbSBkYXRhdmlldyBvYmplY3RzIGlmIGV4aXN0c1xuICogRWxzZSByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUgZnJvbSBmb3JtYXR0aW5nIHNldHRpbmdzIG9iamVjdFxuICpcbiAqIEBwYXJhbSB2YWx1ZSBkYXRhdmlldyBvYmplY3QgdmFsdWVcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgZm9ybWF0dGluZyBzZXR0aW5ncyBkZWZhdWx0IHZhbHVlXG4gKiBAcmV0dXJucyBmb3JtYXR0aW5nIHByb3BlcnR5IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKHNsaWNlLCB2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiAhdmFsdWUuc29saWQpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLnNvbGlkLmNvbG9yIH07XG4gICAgfVxuICAgIGlmIChzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2UuaXRlbXMpIHtcbiAgICAgICAgbGV0IGl0ZW1zQXJyYXkgPSBzbGljZS5pdGVtcztcbiAgICAgICAgcmV0dXJuIGl0ZW1zQXJyYXkuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT0gdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NVdGlscy5qcy5tYXAiLCIvKlxyXG4gKiAgUG93ZXIgQkkgVmlzdWFsaXphdGlvbnNcclxuICpcclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uXHJcbiAqICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTUlUIExpY2Vuc2VcclxuICpcclxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiXCJTb2Z0d2FyZVwiXCIpLCB0byBkZWFsXHJcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgKkFTIElTKiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiAqICBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbFwiO1xyXG5cclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2ltcGxlQ2FyZDtcclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlID0gZm9ybWF0dGluZ1NldHRpbmdzLlNsaWNlO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwgPSBmb3JtYXR0aW5nU2V0dGluZ3MuTW9kZWw7XHJcblxyXG4vKipcclxuICogR2VuZXJpYyBMaW5lIFNldHRpbmdzIENhcmRcclxuICovXHJcbmNsYXNzIExpbmVTZXR0aW5nc0NhcmQgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIGxpbmVDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwibGluZUNvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ291bGV1ciBkZSBsYSBsaWduZVwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzQjYwQzRcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdHJva2VXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInN0cm9rZVdpZHRoXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiw4lwYWlzc2V1clwiLFxyXG4gICAgICAgIHZhbHVlOiAzXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93TWFya2VycyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dNYXJrZXJzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbGVzIG1hcnF1ZXVyc1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFya2VyU2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm1hcmtlclNpemVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUYWlsbGUgZGVzIG1hcnF1ZXVyc1wiLFxyXG4gICAgICAgIHZhbHVlOiA1XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaW5lU3R5bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJsaW5lU3R5bGVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdHlsZSBkZSBsaWduZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiQ29udGludVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGFzaGVkXCIsIGRpc3BsYXlOYW1lOiBcIlBvaW50aWxsw6lzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkb3R0ZWRcIiwgZGlzcGxheU5hbWU6IFwiUG9pbnRzXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiQ29udGludVwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN0ZXBwZWQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzdGVwcGVkXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTGlnbmUgZW4gZXNjYWxpZXJcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW1xyXG4gICAgICAgIHRoaXMubGluZUNvbG9yLCBcclxuICAgICAgICB0aGlzLnN0cm9rZVdpZHRoLCBcclxuICAgICAgICB0aGlzLmxpbmVTdHlsZSxcclxuICAgICAgICB0aGlzLnNob3dNYXJrZXJzLCBcclxuICAgICAgICB0aGlzLm1hcmtlclNpemUsXHJcbiAgICAgICAgdGhpcy5zdGVwcGVkXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZywgZGVmYXVsdENvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xyXG4gICAgICAgIHRoaXMubGluZUNvbG9yLnZhbHVlLnZhbHVlID0gZGVmYXVsdENvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJpYyBHcmFkaWVudCBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBHcmFkaWVudFNldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvd0dyYWRpZW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic2hvd0dyYWRpZW50XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbGUgZMOpZ3JhZMOpXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGdyYWRpZW50Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImdyYWRpZW50Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDb3VsZXVyIGR1IGTDqWdyYWTDqVwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzQjYwQzRcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBncmFkaWVudEludGVuc2l0eSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImdyYWRpZW50SW50ZW5zaXR5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSW50ZW5zaXTDqSAoMC0xKVwiLFxyXG4gICAgICAgIHZhbHVlOiAwLjNcclxuICAgIH0pO1xyXG5cclxuICAgIGdyYWRpZW50RGlyZWN0aW9uID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZ3JhZGllbnREaXJlY3Rpb25cIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEaXJlY3Rpb25cIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcInZlcnRpY2FsXCIsIGRpc3BsYXlOYW1lOiBcIkhhdXQg4oaSIEJhc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwidmVydGljYWwtcmV2ZXJzZVwiLCBkaXNwbGF5TmFtZTogXCJCYXMg4oaSIEhhdXRcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImhvcml6b250YWxcIiwgZGlzcGxheU5hbWU6IFwiR2F1Y2hlIOKGkiBEcm9pdGVcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImhvcml6b250YWwtcmV2ZXJzZVwiLCBkaXNwbGF5TmFtZTogXCJEcm9pdGUg4oaSIEdhdWNoZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGlhZ29uYWxcIiwgZGlzcGxheU5hbWU6IFwiRGlhZ29uYWxlIOKGmFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGlhZ29uYWwtcmV2ZXJzZVwiLCBkaXNwbGF5TmFtZTogXCJEaWFnb25hbGUg4oaZXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwidmVydGljYWxcIiwgZGlzcGxheU5hbWU6IFwiSGF1dCDihpIgQmFzXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93R3JhZGllbnQsXHJcbiAgICAgICAgdGhpcy5ncmFkaWVudENvbG9yLCBcclxuICAgICAgICB0aGlzLmdyYWRpZW50SW50ZW5zaXR5LCBcclxuICAgICAgICB0aGlzLmdyYWRpZW50RGlyZWN0aW9uXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZywgZGVmYXVsdENvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JhZGllbnRDb2xvci52YWx1ZS52YWx1ZSA9IGRlZmF1bHRDb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFggQXhpcyBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBYQXhpc1NldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsJ2F4ZSBYXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGF4aXNDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYXhpc0NvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ291bGV1clwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiM2NjY2NjZcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGFpbGxlIGR1IHRleHRlXCIsXHJcbiAgICAgICAgdmFsdWU6IDExXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZhbWlsbGUgZGUgcG9saWNlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQXJpYWxcIiwgZGlzcGxheU5hbWU6IFwiQXJpYWxcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkNvdXJpZXIgTmV3XCIsIGRpc3BsYXlOYW1lOiBcIkNvdXJpZXIgTmV3XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJHZW9yZ2lhXCIsIGRpc3BsYXlOYW1lOiBcIkdlb3JnaWFcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlZlcmRhbmFcIiwgZGlzcGxheU5hbWU6IFwiVmVyZGFuYVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyIGxlIHRpdHJlXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aXRsZVRleHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZVRleHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0ZSBkdSB0aXRyZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlRpdHJlIGRlIGwnYXhlIFhcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ4QXhpc1NldHRpbmdzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJBeGUgWFwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LFxyXG4gICAgICAgIHRoaXMuYXhpc0NvbG9yLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LFxyXG4gICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgdGhpcy50aXRsZVRleHRcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBZIEF4aXMgU2V0dGluZ3MgQ2FyZFxyXG4gKi9cclxuY2xhc3MgWUF4aXNTZXR0aW5nc0NhcmQgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIHNob3cgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbCdheGUgWVwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBheGlzQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImF4aXNDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXJcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjNjY2NjY2XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udFNpemUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRhaWxsZSBkdSB0ZXh0ZVwiLFxyXG4gICAgICAgIHZhbHVlOiAxMVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udEZhbWlseSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGYW1pbGxlIGRlIHBvbGljZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiU2Vnb2UgVUlcIiwgZGlzcGxheU5hbWU6IFwiU2Vnb2UgVUlcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkFyaWFsXCIsIGRpc3BsYXlOYW1lOiBcIkFyaWFsXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJDb3VyaWVyIE5ld1wiLCBkaXNwbGF5TmFtZTogXCJDb3VyaWVyIE5ld1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiR2VvcmdpYVwiLCBkaXNwbGF5TmFtZTogXCJHZW9yZ2lhXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJWZXJkYW5hXCIsIGRpc3BsYXlOYW1lOiBcIlZlcmRhbmFcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRpdGxlID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidGl0bGVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsZSB0aXRyZVwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGVUZXh0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwidGl0bGVUZXh0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dGUgZHUgdGl0cmVcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJUaXRyZSBkZSBsJ2F4ZSBZXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGRpc3BsYXlVbml0cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImRpc3BsYXlVbml0c1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlVuaXTDqXMgZCdhZmZpY2hhZ2VcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjBcIiwgZGlzcGxheU5hbWU6IFwiQXV0b1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMVwiLCBkaXNwbGF5TmFtZTogXCJBdWN1blwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMFwiLCBkaXNwbGF5TmFtZTogXCJNaWxsaWVycyAoSylcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDAwMDBcIiwgZGlzcGxheU5hbWU6IFwiTWlsbGlvbnMgKE0pXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIxMDAwMDAwMDAwXCIsIGRpc3BsYXlOYW1lOiBcIk1pbGxpYXJkcyAoTWRzKVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIjBcIiwgZGlzcGxheU5hbWU6IFwiQXV0b1wiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByZWNpc2lvbiA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInByZWNpc2lvblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkTDqWNpbWFsZXNcIixcclxuICAgICAgICB2YWx1ZTogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlWUF4aXNCaXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ1c2VZQXhpc0Jpc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyIGF4ZSBZIGJpc1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ5QXhpc1NldHRpbmdzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJBeGUgWVwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LFxyXG4gICAgICAgIHRoaXMuYXhpc0NvbG9yLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LFxyXG4gICAgICAgIHRoaXMuZGlzcGxheVVuaXRzLFxyXG4gICAgICAgIHRoaXMucHJlY2lzaW9uLFxyXG4gICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgdGhpcy50aXRsZVRleHQsXHJcbiAgICAgICAgdGhpcy51c2VZQXhpc0Jpc1xyXG4gICAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdyaWQgU2V0dGluZ3MgQ2FyZFxyXG4gKi9cclxuY2xhc3MgR3JpZFNldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvd0hvcml6b250YWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93SG9yaXpvbnRhbFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkdyaWxsZSBob3Jpem9udGFsZVwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93VmVydGljYWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93VmVydGljYWxcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJHcmlsbGUgdmVydGljYWxlXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBncmlkQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImdyaWRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgZGUgbGEgZ3JpbGxlXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2YwZjBmMFwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGdyaWRUaGlja25lc3MgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJncmlkVGhpY2tuZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiw4lwYWlzc2V1clwiLFxyXG4gICAgICAgIHZhbHVlOiAxXHJcbiAgICB9KTtcclxuXHJcbiAgICBncmlkU3R5bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJncmlkU3R5bGVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdHlsZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiQ29udGludVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGFzaGVkXCIsIGRpc3BsYXlOYW1lOiBcIlBvaW50aWxsw6lzXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiZGFzaGVkXCIsIGRpc3BsYXlOYW1lOiBcIlBvaW50aWxsw6lzXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJncmlkU2V0dGluZ3NcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkdyaWxsZVwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93SG9yaXpvbnRhbCxcclxuICAgICAgICB0aGlzLnNob3dWZXJ0aWNhbCxcclxuICAgICAgICB0aGlzLmdyaWRDb2xvcixcclxuICAgICAgICB0aGlzLmdyaWRUaGlja25lc3MsXHJcbiAgICAgICAgdGhpcy5ncmlkU3R5bGVcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEYXRhIExhYmVscyBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBEYXRhTGFiZWxzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsZXMgw6l0aXF1ZXR0ZXNcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJjb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXJcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMDAwMDAwXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udFNpemUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRhaWxsZSBkdSB0ZXh0ZVwiLFxyXG4gICAgICAgIHZhbHVlOiA5XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZhbWlsbGUgZGUgcG9saWNlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQXJpYWxcIiwgZGlzcGxheU5hbWU6IFwiQXJpYWxcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkNvdXJpZXIgTmV3XCIsIGRpc3BsYXlOYW1lOiBcIkNvdXJpZXIgTmV3XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiU2Vnb2UgVUlcIiwgZGlzcGxheU5hbWU6IFwiU2Vnb2UgVUlcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaXNwbGF5VW5pdHMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJkaXNwbGF5VW5pdHNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJVbml0w6lzIGQnYWZmaWNoYWdlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIwXCIsIGRpc3BsYXlOYW1lOiBcIkF1dG9cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjFcIiwgZGlzcGxheU5hbWU6IFwiQXVjdW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDBcIiwgZGlzcGxheU5hbWU6IFwiTWlsbGllcnMgKEspXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIxMDAwMDAwXCIsIGRpc3BsYXlOYW1lOiBcIk1pbGxpb25zIChNKVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMDAwMDAwMFwiLCBkaXNwbGF5TmFtZTogXCJNaWxsaWFyZHMgKE1kcylcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIwXCIsIGRpc3BsYXlOYW1lOiBcIkF1dG9cIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcmVjaXNpb24gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJwcmVjaXNpb25cIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEw6ljaW1hbGVzXCIsXHJcbiAgICAgICAgdmFsdWU6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIG5hbWU6IHN0cmluZyA9IFwiZGF0YUxhYmVsc1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiw4l0aXF1ZXR0ZXMgZGUgZG9ubsOpZXNcIjtcclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW1xyXG4gICAgICAgIHRoaXMuc2hvdyxcclxuICAgICAgICB0aGlzLmNvbG9yLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LFxyXG4gICAgICAgIHRoaXMuZGlzcGxheVVuaXRzLFxyXG4gICAgICAgIHRoaXMucHJlY2lzaW9uXHJcbiAgICBdO1xyXG59XHJcblxyXG4vKipcclxuICogTGVnZW5kIFNldHRpbmdzIENhcmRcclxuICovXHJcbmNsYXNzIExlZ2VuZENhcmQgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIHNob3cgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbGEgbMOpZ2VuZGVcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcG9zaXRpb24gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJwb3NpdGlvblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlBvc2l0aW9uXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJUb3BcIiwgZGlzcGxheU5hbWU6IFwiSGF1dFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQm90dG9tXCIsIGRpc3BsYXlOYW1lOiBcIkJhc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiTGVmdFwiLCBkaXNwbGF5TmFtZTogXCJHYXVjaGVcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlJpZ2h0XCIsIGRpc3BsYXlOYW1lOiBcIkRyb2l0ZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiVG9wQ2VudGVyXCIsIGRpc3BsYXlOYW1lOiBcIkhhdXQgY2VudHJlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJCb3R0b21DZW50ZXJcIiwgZGlzcGxheU5hbWU6IFwiQmFzIGNlbnRyZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlRvcFwiLCBkaXNwbGF5TmFtZTogXCJIYXV0XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJmb250Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDb3VsZXVyXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzY2NjY2NlwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRTaXplID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUYWlsbGUgZHUgdGV4dGVcIixcclxuICAgICAgICB2YWx1ZTogMTBcclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRGYW1pbHkgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRmFtaWxsZSBkZSBwb2xpY2VcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJBcmlhbFwiLCBkaXNwbGF5TmFtZTogXCJBcmlhbFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291cmllciBOZXdcIiwgZGlzcGxheU5hbWU6IFwiQ291cmllciBOZXdcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG5hbWU6IHN0cmluZyA9IFwibGVnZW5kXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJMw6lnZW5kZVwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgdGhpcy5mb250Q29sb3IsXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSxcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHlcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWaXN1YWwgc2V0dGluZ3MgbW9kZWwgY2xhc3NcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIHtcclxuICAgIC8vIFBhbGV0dGUgcGFyIGTDqWZhdXRcclxuICAgIHByaXZhdGUgZGVmYXVsdENvbG9ycyA9IFtcIiMzQjYwQzRcIiwgXCIjRTk0RjM3XCIsIFwiIzQ0QkJBNFwiLCBcIiNGN0I1MzhcIiwgXCIjREI1NDYxXCIsIFwiIzNGODhDNVwiLCBcIiM3RDRFNTdcIiwgXCIjRDY2ODUzXCIsIFwiIzIxMkQ0MFwiLCBcIiMxMTE1MUNcIl07XHJcblxyXG4gICAgbGluZVNldHRpbmdzMSA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzMVwiLCBcIkxpZ25lIDFcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzBdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3MxID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczFcIiwgXCJEw6lncmFkw6kgMVwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbMF0pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczIgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczJcIiwgXCJMaWduZSAyXCIsIHRoaXMuZGVmYXVsdENvbG9yc1sxXSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzMiA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3MyXCIsIFwiRMOpZ3JhZMOpIDJcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzFdKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3MzID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3MzXCIsIFwiTGlnbmUgM1wiLCB0aGlzLmRlZmF1bHRDb2xvcnNbMl0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczMgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzM1wiLCBcIkTDqWdyYWTDqSAzXCIsIHRoaXMuZGVmYXVsdENvbG9yc1syXSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzNCA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzNFwiLCBcIkxpZ25lIDRcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzNdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3M0ID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczRcIiwgXCJEw6lncmFkw6kgNFwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbM10pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczUgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczVcIiwgXCJMaWduZSA1XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s0XSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzNSA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3M1XCIsIFwiRMOpZ3JhZMOpIDVcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzRdKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3M2ID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3M2XCIsIFwiTGlnbmUgNlwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbNV0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczYgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzNlwiLCBcIkTDqWdyYWTDqSA2XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s1XSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzNyA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzN1wiLCBcIkxpZ25lIDdcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzZdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3M3ID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczdcIiwgXCJEw6lncmFkw6kgN1wiLCB0aGlzLmRlZmF1bHRDb2xvcnNbNl0pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczggPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczhcIiwgXCJMaWduZSA4XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s3XSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzOCA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3M4XCIsIFwiRMOpZ3JhZMOpIDhcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzddKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3M5ID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3M5XCIsIFwiTGlnbmUgOVwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbOF0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczkgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzOVwiLCBcIkTDqWdyYWTDqSA5XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s4XSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzMTAgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczEwXCIsIFwiTGlnbmUgMTBcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzldKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3MxMCA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3MxMFwiLCBcIkTDqWdyYWTDqSAxMFwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbOV0pO1xyXG5cclxuICAgIHhBeGlzU2V0dGluZ3MgPSBuZXcgWEF4aXNTZXR0aW5nc0NhcmQoKTtcclxuICAgIHlBeGlzU2V0dGluZ3MgPSBuZXcgWUF4aXNTZXR0aW5nc0NhcmQoKTtcclxuICAgIGdyaWRTZXR0aW5ncyA9IG5ldyBHcmlkU2V0dGluZ3NDYXJkKCk7XHJcbiAgICBkYXRhTGFiZWxzID0gbmV3IERhdGFMYWJlbHNDYXJkKCk7XHJcbiAgICBsZWdlbmQgPSBuZXcgTGVnZW5kQ2FyZCgpO1xyXG5cclxuICAgIGNhcmRzID0gW1xyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzMSwgdGhpcy5ncmFkaWVudFNldHRpbmdzMSxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczIsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczIsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3MzLCB0aGlzLmdyYWRpZW50U2V0dGluZ3MzLFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzNCwgdGhpcy5ncmFkaWVudFNldHRpbmdzNCxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczUsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczUsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3M2LCB0aGlzLmdyYWRpZW50U2V0dGluZ3M2LFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzNywgdGhpcy5ncmFkaWVudFNldHRpbmdzNyxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczgsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczgsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3M5LCB0aGlzLmdyYWRpZW50U2V0dGluZ3M5LFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzMTAsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczEwLFxyXG4gICAgICAgIHRoaXMueEF4aXNTZXR0aW5ncyxcclxuICAgICAgICB0aGlzLnlBeGlzU2V0dGluZ3MsXHJcbiAgICAgICAgdGhpcy5ncmlkU2V0dGluZ3MsXHJcbiAgICAgICAgdGhpcy5kYXRhTGFiZWxzLFxyXG4gICAgICAgIHRoaXMubGVnZW5kXHJcbiAgICBdO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHBvd2VyYmkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcclxuaW1wb3J0IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xyXG5pbXBvcnQgVmlzdWFsVXBkYXRlT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsVXBkYXRlT3B0aW9ucztcclxuaW1wb3J0IElWaXN1YWwgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLklWaXN1YWw7XHJcbmltcG9ydCBJU2VsZWN0aW9uSWQgPSBwb3dlcmJpLnZpc3VhbHMuSVNlbGVjdGlvbklkO1xyXG5pbXBvcnQgSVNlbGVjdGlvbk1hbmFnZXIgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkuSVNlbGVjdGlvbk1hbmFnZXI7XHJcblxyXG5pbXBvcnQgeyBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGUvdmlzdWFsLmxlc3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWwgaW1wbGVtZW50cyBJVmlzdWFsIHtcclxuICAgIHByaXZhdGUgdGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgc3ZnOiBTVkdTVkdFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBtYWluR3JvdXA6IFNWR0dFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBheGlzR3JvdXA6IFNWR0dFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBsaW5lc0dyb3VwOiBTVkdHRWxlbWVudDtcclxuICAgIHByaXZhdGUgdG9vbHRpcDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBcclxuICAgIC8vIE1hcmdlc1xyXG4gICAgcHJpdmF0ZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA0MCwgYm90dG9tOiA0MCwgbGVmdDogNjAgfTtcclxuICAgIFxyXG4gICAgLy8gU2V0dGluZ3NcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzOiBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbDtcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTogRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcclxuICAgIFxyXG4gICAgLy8gRHJpbGwgZG93biBzdXBwb3J0XHJcbiAgICBwcml2YXRlIGhvc3Q6IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuSVZpc3VhbEhvc3Q7XHJcbiAgICBwcml2YXRlIHNlbGVjdGlvbk1hbmFnZXI6IElTZWxlY3Rpb25NYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBkYXRhVmlldzogcG93ZXJiaS5EYXRhVmlldztcclxuICAgIFxyXG4gICAgLy8gTGljZW5zaW5nXHJcbiAgICBwcml2YXRlIGlzTGljZW5zZVZhbGlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGxpY2Vuc2VDaGVja01lc3NhZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gb3B0aW9ucy5lbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IG9wdGlvbnMuaG9zdDtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSA9IG5ldyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG5cclxuICAgICAgICAvLyAxLiBDcsOpYXRpb24gZHUgU1ZHXHJcbiAgICAgICAgY29uc3QgbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbiAgICAgICAgdGhpcy5zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwic3ZnXCIpO1xyXG4gICAgICAgIHRoaXMuc3ZnLmNsYXNzTGlzdC5hZGQoXCJjaGFydC1jb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5zdmcpO1xyXG5cclxuICAgICAgICAvLyAyLiBUb29sdGlwXHJcbiAgICAgICAgdGhpcy50b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuY2xhc3NOYW1lID0gXCJjdXN0b20tdG9vbHRpcFwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsIDAsIDAsIDAuOClcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLnBhZGRpbmcgPSBcIjhweCAxMnB4XCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNHB4XCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMudG9vbHRpcCk7XHJcblxyXG4gICAgICAgIC8vIDMuIERlZnMgcG91ciBsZXMgZMOpZ3JhZMOpc1xyXG4gICAgICAgIGNvbnN0IGRlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZGVmc1wiKTtcclxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChkZWZzKTtcclxuXHJcbiAgICAgICAgLy8gNC4gR3JvdXBlc1xyXG4gICAgICAgIHRoaXMubWFpbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImdcIik7XHJcbiAgICAgICAgdGhpcy5heGlzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZ1wiKTtcclxuICAgICAgICB0aGlzLmxpbmVzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZ1wiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1haW5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmF4aXNHcm91cCk7XHJcbiAgICAgICAgdGhpcy5tYWluR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5saW5lc0dyb3VwKTtcclxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0aGlzLm1haW5Hcm91cCk7XHJcblxyXG4gICAgICAgIC8vIFBlcm1ldHRyZSBsZSBjb250ZXh0IG1lbnUgKGNsaWMgZHJvaXQpIHN1ciB0b3V0IGxlIHZpc3VlbFxyXG4gICAgICAgIHRoaXMuc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCBhcyBNb3VzZUV2ZW50O1xyXG4gICAgICAgICAgICAvLyBBZmZpY2hlciBsZSBtZW51IGNvbnRleHR1ZWwgUG93ZXIgQkkgYXZlYyBsZXMgb3B0aW9ucyBzdGFuZGFyZFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHt9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiBtb3VzZUV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICB5OiBtb3VzZUV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIETDqXPDqWxlY3Rpb25uZXIgbG9ycyBkJ3VuIGNsaWMgc3VyIGxlIGZvbmRcclxuICAgICAgICB0aGlzLnN2Zy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTWVzc2FnZSBkZSBsaWNlbmNlXHJcbiAgICAgICAgdGhpcy5saWNlbnNlQ2hlY2tNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmxpY2Vuc2VDaGVja01lc3NhZ2Uuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgdGhpcy5saWNlbnNlQ2hlY2tNZXNzYWdlLnN0eWxlLnRvcCA9IFwiMTBweFwiO1xyXG4gICAgICAgIHRoaXMubGljZW5zZUNoZWNrTWVzc2FnZS5zdHlsZS5sZWZ0ID0gXCIxMHB4XCI7XHJcbiAgICAgICAgdGhpcy5saWNlbnNlQ2hlY2tNZXNzYWdlLnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcclxuICAgICAgICB0aGlzLmxpY2Vuc2VDaGVja01lc3NhZ2Uuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmZjNjZFwiO1xyXG4gICAgICAgIHRoaXMubGljZW5zZUNoZWNrTWVzc2FnZS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZmZjMTA3XCI7XHJcbiAgICAgICAgdGhpcy5saWNlbnNlQ2hlY2tNZXNzYWdlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNHB4XCI7XHJcbiAgICAgICAgdGhpcy5saWNlbnNlQ2hlY2tNZXNzYWdlLnN0eWxlLmNvbG9yID0gXCIjODU2NDA0XCI7XHJcbiAgICAgICAgdGhpcy5saWNlbnNlQ2hlY2tNZXNzYWdlLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XHJcbiAgICAgICAgdGhpcy5saWNlbnNlQ2hlY2tNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLmxpY2Vuc2VDaGVja01lc3NhZ2Uuc3R5bGUuekluZGV4ID0gXCIxMDAxXCI7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5saWNlbnNlQ2hlY2tNZXNzYWdlKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBWw6lyaWZpZXIgbGEgbGljZW5jZVxyXG4gICAgICAgIHRoaXMuY2hlY2tMaWNlbnNlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgY2hlY2tMaWNlbnNlKCkge1xyXG4gICAgICAgIC8vIPCfp6ogTU9ERSBURVNUIDogRMOpY29tbWVudGV6IGxhIGxpZ25lIHN1aXZhbnRlIHBvdXIgc2ltdWxlciB1bmUgbGljZW5jZSBpbnZhbGlkZVxyXG4gICAgICAgIC8vIHRoaXMuaXNMaWNlbnNlVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLmxpY2Vuc2VDaGVja01lc3NhZ2UudGV4dENvbnRlbnQgPSBcIuKaoO+4jyBbTU9ERSBURVNUXSBMaWNlbmNlIG5vbiB2YWxpZGUgc2ltdWzDqWVcIjtcclxuICAgICAgICAvLyB0aGlzLmxpY2Vuc2VDaGVja01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gVsOpcmlmaWVyIHNpIG9uIGEgYWNjw6hzIGF1eCBwcml2aWzDqGdlcyB2aWEgbCdpbnRlcmZhY2Ugw6l0ZW5kdWVcclxuICAgICAgICAgICAgY29uc3QgaG9zdFdpdGhQcml2aWxlZ2VzID0gdGhpcy5ob3N0IGFzIGFueTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChob3N0V2l0aFByaXZpbGVnZXMuZ2V0UHJpdmlsZWdlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpdmlsZWdlcyA9IGhvc3RXaXRoUHJpdmlsZWdlcy5nZXRQcml2aWxlZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+UkSBQcml2aWzDqGdlcyBkw6l0ZWN0w6lzOlwiLCBwcml2aWxlZ2VzKTsgLy8gUG91ciBkZWJ1Z1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBWw6lyaWZpZXIgc2kgV2ViQWNjZXNzIGVzdCBhY2NvcmTDqVxyXG4gICAgICAgICAgICAgICAgaWYgKHByaXZpbGVnZXMgJiYgcHJpdmlsZWdlcy5pbmRleE9mKCdXZWJBY2Nlc3MnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTGljZW5zZVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpY2Vuc2VDaGVja01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIExpY2VuY2UgdmFsaWRlIC0gV2ViQWNjZXNzIGFjY29yZMOpXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTGljZW5zZVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saWNlbnNlQ2hlY2tNZXNzYWdlLnRleHRDb250ZW50ID0gXCLimqDvuI8gTGljZW5jZSBub24gdmFsaWRlIDogQ2UgdmlzdWVsIG7DqWNlc3NpdGUgdW5lIGxpY2VuY2UgUG93ZXIgQkkgYXBwcm9wcmnDqWUuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saWNlbnNlQ2hlY2tNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4pqg77iPIExpY2VuY2UgaW52YWxpZGUgLSBXZWJBY2Nlc3Mgbm9uIGFjY29yZMOpXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2kgZ2V0UHJpdmlsZWdlcyBuJ2VzdCBwYXMgZGlzcG9uaWJsZSwgdsOpcmlmaWVyIGwnZW52aXJvbm5lbWVudFxyXG4gICAgICAgICAgICAgICAgLy8gRW4gcHJvZHVjdGlvbiBQb3dlciBCSSBTZXJ2aWNlLCBvbiBwZXV0IHbDqXJpZmllciBkJ2F1dHJlcyBwcm9wcmnDqXTDqXNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4oS577iPIGdldFByaXZpbGVnZXMoKSBub24gZGlzcG9uaWJsZSAtIG1vZGUgRGVza3RvcC9EZXZcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3N0Q2FwYWJpbGl0aWVzID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlciA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMaWNlbnNlVmFsaWQgPSBob3N0Q2FwYWJpbGl0aWVzO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNMaWNlbnNlVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpY2Vuc2VDaGVja01lc3NhZ2UudGV4dENvbnRlbnQgPSBcIuKaoO+4jyBFbnZpcm9ubmVtZW50IG5vbiBzdXBwb3J0w6kgb3UgbGljZW5jZSBub24gdmFsaWRlLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGljZW5zZUNoZWNrTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKaoO+4jyBMaWNlbmNlIGludmFsaWRlIC0gRW52aXJvbm5lbWVudCBub24gc3VwcG9ydMOpXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpY2Vuc2VDaGVja01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIExpY2VuY2UgdmFsaWRlIC0gTW9kZSBEZXNrdG9wL0RldlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIEVuIGNhcyBkJ2VycmV1ciwgY29uc2lkw6lyZXIgcXVlIGxhIGxpY2VuY2UgZXN0IHZhbGlkZSAobW9kZSBkw6l2ZWxvcHBlbWVudClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5SnIEVycmV1ciB2w6lyaWZpY2F0aW9uIGxpY2VuY2UgKG1vZGUgZMOpdmVsb3BwZW1lbnQpOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMaWNlbnNlVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpY2Vuc2VDaGVja01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dUb29sdGlwKHg6IG51bWJlciwgeTogbnVtYmVyLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBOZXR0b3llciBsZSBjb250ZW51IHByw6ljw6lkZW50XHJcbiAgICAgICAgd2hpbGUgKHRoaXMudG9vbHRpcC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5yZW1vdmVDaGlsZCh0aGlzLnRvb2x0aXAuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEw6ljb3VwZXIgbGUgY29udGVudSBlbiBsaWduZXMgKHN1cHBvc2UgbGUgZm9ybWF0IFwiPGRpdj4uLi48L2Rpdj48ZGl2Pi4uLjwvZGl2PlwiKVxyXG4gICAgICAgIC8vIE9uIGV4dHJhaXQgbGUgdGV4dGUgZW50cmUgbGVzIGJhbGlzZXMgPGRpdj4uLi48L2Rpdj5cclxuICAgICAgICBjb25zdCBkaXZSZWdleCA9IC88ZGl2W14+XSo+KC4qPyk8XFwvZGl2Pi9nO1xyXG4gICAgICAgIGxldCBtYXRjaDtcclxuICAgICAgICB3aGlsZSAoKG1hdGNoID0gZGl2UmVnZXguZXhlYyhjb250ZW50KSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgLy8gU2kgbGUgY29udGVudSBjb250aWVudCA8c3Ryb25nPi4uLjwvc3Ryb25nPiwgb24gbGUgZ8OocmUgYXVzc2lcclxuICAgICAgICAgICAgY29uc3Qgc3Ryb25nUmVnZXggPSAvPHN0cm9uZ1tePl0qPiguKj8pPFxcL3N0cm9uZz4vO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJvbmdNYXRjaCA9IHN0cm9uZ1JlZ2V4LmV4ZWMobWF0Y2hbMV0pO1xyXG4gICAgICAgICAgICBpZiAoc3Ryb25nTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cm9uZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7XHJcbiAgICAgICAgICAgICAgICBzdHJvbmcudGV4dENvbnRlbnQgPSBzdHJvbmdNYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdHJvbmcpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWpvdXRlIGxlIHJlc3RlIGR1IHRleHRlIGFwcsOocyA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyU3Ryb25nID0gbWF0Y2hbMV0ucmVwbGFjZShzdHJvbmdSZWdleCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWZ0ZXJTdHJvbmcudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFmdGVyU3Ryb25nKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBtYXRjaFsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5sZWZ0ID0gKHggKyAxMCkgKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLnRvcCA9ICh5IC0gMTApICsgXCJweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGlkZVRvb2x0aXAoKSB7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5pY2VTdGVwKG1heFZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChtYXhWYWx1ZSA9PT0gMCkgcmV0dXJuIDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRMOpdGVybWluZXIgbCdvcmRyZSBkZSBncmFuZGV1clxyXG4gICAgICAgIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChtYXhWYWx1ZSkpO1xyXG4gICAgICAgIGNvbnN0IHBvd2VyT2YxMCA9IE1hdGgucG93KDEwLCBtYWduaXR1ZGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEdhbW1lIGRlIG11bHRpcGxpY2F0ZXVycyBwb3VyIGF2b2lyIGRlcyBkaXZpc2lvbnMgXCJwcm9wcmVzXCJcclxuICAgICAgICBjb25zdCBtdWx0aXBsaWVycyA9IFsxLCAyLCAyLjUsIDUsIDEwXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBOb21icmUgZGUgZGl2aXNpb25zIHNvdWhhaXTDqWVzXHJcbiAgICAgICAgY29uc3QgbWluVGlja3MgPSA0O1xyXG4gICAgICAgIGNvbnN0IG1heFRpY2tzID0gODtcclxuICAgICAgICBcclxuICAgICAgICAvLyBUZXN0ZXIgY2hhcXVlIG11bHRpcGxpY2F0ZXVyXHJcbiAgICAgICAgZm9yIChsZXQgbXVsdCBvZiBtdWx0aXBsaWVycykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwID0gbXVsdCAqIHBvd2VyT2YxMDtcclxuICAgICAgICAgICAgY29uc3QgdGlja3MgPSBNYXRoLmNlaWwobWF4VmFsdWUgLyBzdGVwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aWNrcyA+PSBtaW5UaWNrcyAmJiB0aWNrcyA8PSBtYXhUaWNrcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2kgYXVjdW4gbmUgY29udmllbnQsIHJldG91cm5lciBwb3dlck9mMTBcclxuICAgICAgICByZXR1cm4gcG93ZXJPZjEwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUob3B0aW9uczogVmlzdWFsVXBkYXRlT3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFbDqXJpZmllciBsYSBsaWNlbmNlIGF2YW50IGRlIGNvbnRpbnVlclxyXG4gICAgICAgIHRoaXMuY2hlY2tMaWNlbnNlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2kgbGEgbGljZW5jZSBuJ2VzdCBwYXMgdmFsaWRlLCBhZmZpY2hlciB1biBtZXNzYWdlIGV0IGFycsOqdGVyXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTGljZW5zZVZhbGlkKSB7XHJcbiAgICAgICAgICAgIC8vIE5ldHRveWVyIGxlIHZpc3VlbFxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5heGlzR3JvdXAuZmlyc3RDaGlsZCkgdGhpcy5heGlzR3JvdXAucmVtb3ZlQ2hpbGQodGhpcy5heGlzR3JvdXAuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxpbmVzR3JvdXAuZmlyc3RDaGlsZCkgdGhpcy5saW5lc0dyb3VwLnJlbW92ZUNoaWxkKHRoaXMubGluZXNHcm91cC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIG9wdGlvbnMudmlld3BvcnQud2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBvcHRpb25zLnZpZXdwb3J0LmhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENyw6llciB1biBtZXNzYWdlIGF1IGNlbnRyZVxyXG4gICAgICAgICAgICBjb25zdCBjZW50ZXJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRleHRcIik7XHJcbiAgICAgICAgICAgIGNlbnRlck1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwieFwiLCAob3B0aW9ucy52aWV3cG9ydC53aWR0aCAvIDIpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBjZW50ZXJNZXNzYWdlLnNldEF0dHJpYnV0ZShcInlcIiwgKG9wdGlvbnMudmlld3BvcnQuaGVpZ2h0IC8gMikudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNlbnRlck1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgICAgIGNlbnRlck1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiM4NTY0MDRcIik7XHJcbiAgICAgICAgICAgIGNlbnRlck1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiMTRweFwiKTtcclxuICAgICAgICAgICAgY2VudGVyTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTGljZW5jZSBQb3dlciBCSSByZXF1aXNlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYXhpc0dyb3VwLmFwcGVuZENoaWxkKGNlbnRlck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBLiBSw6ljdXDDqXJhdGlvbiBkZXMgZG9ubsOpZXNcclxuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG9wdGlvbnMuZGF0YVZpZXdzWzBdO1xyXG4gICAgICAgIGlmICghZGF0YVZpZXcgfHwgIWRhdGFWaWV3LmNhdGVnb3JpY2FsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzIHx8ICFkYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhVmlldyA9IGRhdGFWaWV3O1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5Q29sdW1ucyA9IGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXM7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yeUNvbHVtbnNbMF07XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLnBvcHVsYXRlRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwoVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwsIG9wdGlvbnMuZGF0YVZpZXdzWzBdKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBvcHRpb25zLnZpZXdwb3J0LndpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBvcHRpb25zLnZpZXdwb3J0LmhlaWdodC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2F0cyA9IGNhdGVnb3J5Q29sdW1uc1swXS52YWx1ZXM7XHJcbiAgICAgICAgY29uc3QgYWxsU2VyaWVzID0gZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzO1xyXG5cclxuICAgICAgICAvLyBQYXJhbcOodHJlcyBnw6luw6lyYXV4XHJcbiAgICAgICAgY29uc3Qgc2hvd1hBeGlzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueEF4aXNTZXR0aW5ncy5zaG93LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHhBeGlzQ29sb3IgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy54QXhpc1NldHRpbmdzLmF4aXNDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB4QXhpc0ZvbnRTaXplID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueEF4aXNTZXR0aW5ncy5mb250U2l6ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB4QXhpc0ZvbnRGYW1pbHkgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy54QXhpc1NldHRpbmdzLmZvbnRGYW1pbHkudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzaG93WUF4aXMgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy55QXhpc1NldHRpbmdzLnNob3cudmFsdWU7XHJcbiAgICAgICAgY29uc3QgeUF4aXNDb2xvciA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3MuYXhpc0NvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzRm9udFNpemUgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy55QXhpc1NldHRpbmdzLmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzRm9udEZhbWlseSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3MuZm9udEZhbWlseS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzRGlzcGxheVVuaXRzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueUF4aXNTZXR0aW5ncy5kaXNwbGF5VW5pdHMudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB5QXhpc1ByZWNpc2lvbiA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3MucHJlY2lzaW9uLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93SG9yaXpvbnRhbEdyaWQgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5ncmlkU2V0dGluZ3Muc2hvd0hvcml6b250YWwudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc2hvd1ZlcnRpY2FsR3JpZCA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmdyaWRTZXR0aW5ncy5zaG93VmVydGljYWwudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ3JpZENvbG9yID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLmdyaWRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBncmlkVGhpY2tuZXNzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLmdyaWRUaGlja25lc3MudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ3JpZFN0eWxlID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLmdyaWRTdHlsZS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93TGVnZW5kID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGVnZW5kLnNob3cudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbGVnZW5kUG9zaXRpb24gPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmQucG9zaXRpb24udmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBsZWdlbmRGb250Q29sb3IgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmQuZm9udENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGxlZ2VuZEZvbnRTaXplID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGVnZW5kLmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGxlZ2VuZEZvbnRGYW1pbHkgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmQuZm9udEZhbWlseS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBCLiBDYWxjdWwgZGVzIGRpbWVuc2lvbnNcclxuICAgICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMudmlld3BvcnQud2lkdGg7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb3B0aW9ucy52aWV3cG9ydC5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IGxlZ2VuZEhlaWdodCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHNob3dMZWdlbmQgJiYgKGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcFwiIHx8IGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcENlbnRlclwiKSkge1xyXG4gICAgICAgICAgICBsZWdlbmRIZWlnaHQgPSAzMDtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4udG9wID0gMjAgKyBsZWdlbmRIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaG93TGVnZW5kICYmIChsZWdlbmRQb3NpdGlvbiA9PT0gXCJCb3R0b21cIiB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJCb3R0b21DZW50ZXJcIikpIHtcclxuICAgICAgICAgICAgbGVnZW5kSGVpZ2h0ID0gMzA7XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luLmJvdHRvbSA9IDQwICsgbGVnZW5kSGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luLnRvcCA9IDIwO1xyXG4gICAgICAgICAgICB0aGlzLm1hcmdpbi5ib3R0b20gPSA0MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFqdXN0ZW1lbnQgZHluYW1pcXVlIGRlIGxhIG1hcmdlIGJhc3NlIHNpIG9uIGEgMyBuaXZlYXV4IG91IHBsdXMgKHBvdXIgYWZmaWNoZXIgQW5uw6llL01vaXMvSm91cilcclxuICAgICAgICBpZiAoY2F0ZWdvcnlDb2x1bW5zLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4uYm90dG9tICs9IDI1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZHJhd1cgPSB3aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcclxuICAgICAgICBjb25zdCBkcmF3SCA9IGhlaWdodCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcclxuICAgICAgICBjb25zdCBnZXRZUG9zID0gKHZhbDogbnVtYmVyKSA9PiBkcmF3SCAtICgodmFsIC0gbmljZU1pbikgLyAobmljZU1heCAtIG5pY2VNaW4pICogZHJhd0gpO1xyXG5cclxuICAgICAgICAvLyBDLiBDQUxDVUwgw4lDSEVMTEUgWSBHTE9CQUxFIChCYXPDqSBzdXIgbGUgTUlOIGV0IE1BWCBkZSBUT1VURVMgbGVzIHPDqXJpZXMpXHJcbiAgICAgICAgbGV0IGdsb2JhbE1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcclxuICAgICAgICBsZXQgZ2xvYmFsTWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xyXG4gICAgICAgIGFsbFNlcmllcy5mb3JFYWNoKHNlcmllcyA9PiB7XHJcbiAgICAgICAgICAgIHNlcmllcy52YWx1ZXMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IE51bWJlcih2KTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPiBnbG9iYWxNYXgpIGdsb2JhbE1heCA9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsIDwgZ2xvYmFsTWluKSBnbG9iYWxNaW4gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTaSB0b3V0IGVzdCBOYU4sIGZhbGxiYWNrIMOgIDBcclxuICAgICAgICBpZiAoIWlzRmluaXRlKGdsb2JhbE1heCkpIGdsb2JhbE1heCA9IDA7XHJcbiAgICAgICAgaWYgKCFpc0Zpbml0ZShnbG9iYWxNaW4pKSBnbG9iYWxNaW4gPSAwO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWwgZHUgc3RlcFxyXG4gICAgICAgIGNvbnN0IGFic01heCA9IE1hdGgubWF4KE1hdGguYWJzKGdsb2JhbE1heCksIE1hdGguYWJzKGdsb2JhbE1pbikpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBTaXplID0gdGhpcy5nZXROaWNlU3RlcChhYnNNYXgpO1xyXG5cclxuICAgICAgICAvLyBCb3JuZXMgXCJwcm9wcmVzXCJcclxuICAgICAgICBsZXQgbmljZU1pbiA9IE1hdGguZmxvb3IoZ2xvYmFsTWluIC8gc3RlcFNpemUpICogc3RlcFNpemU7XHJcbiAgICAgICAgbGV0IG5pY2VNYXggPSBNYXRoLmNlaWwoZ2xvYmFsTWF4IC8gc3RlcFNpemUpICogc3RlcFNpemU7XHJcbiAgICAgICAgaWYgKG5pY2VNaW4gPT09IG5pY2VNYXgpIHtcclxuICAgICAgICAgICAgLy8gQ2FzIHBsYXRcclxuICAgICAgICAgICAgbmljZU1pbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgobmljZU1heCAtIG5pY2VNaW4pIC8gc3RlcFNpemUgPiAxMCkge1xyXG4gICAgICAgICAgICBuaWNlTWF4ID0gbmljZU1pbiArIHN0ZXBTaXplICogMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBELiBERVNTSU5cclxuICAgICAgICB0aGlzLm1haW5Hcm91cC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luLmxlZnR9LCAke3RoaXMubWFyZ2luLnRvcH0pYCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTmV0dG95YWdlXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXhpc0dyb3VwLmZpcnN0Q2hpbGQpIHRoaXMuYXhpc0dyb3VwLnJlbW92ZUNoaWxkKHRoaXMuYXhpc0dyb3VwLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmxpbmVzR3JvdXAuZmlyc3RDaGlsZCkgdGhpcy5saW5lc0dyb3VwLnJlbW92ZUNoaWxkKHRoaXMubGluZXNHcm91cC5maXJzdENoaWxkKTtcclxuICAgICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1c3RvbS1tYXJrZXJcIikuZm9yRWFjaChtID0+IG0ucmVtb3ZlKCkpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VzdG9tLWRhdGFsYWJlbFwiKS5mb3JFYWNoKGwgPT4gbC5yZW1vdmUoKSk7XHJcbiAgICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3RvckFsbChcIi5jdXN0b20taG92ZXJcIikuZm9yRWFjaChoID0+IGgucmVtb3ZlKCkpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGVnZW5kXCIpLmZvckVhY2gobCA9PiBsLnJlbW92ZSgpKTtcclxuXHJcbiAgICAgICAgLy8gMS4gR1JJTExFIEVUIEFYRSBZXHJcbiAgICAgICAgaWYgKHNob3dZQXhpcykge1xyXG4gICAgICAgICAgICBmb3IobGV0IHZhbCA9IG5pY2VNaW47IHZhbCA8PSBuaWNlTWF4OyB2YWwgKz0gc3RlcFNpemUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlQb3MgPSBkcmF3SCAtICgodmFsIC0gbmljZU1pbikgLyAobmljZU1heCAtIG5pY2VNaW4pICogZHJhd0gpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaG93SG9yaXpvbnRhbEdyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBkcmF3Vy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInkxXCIsIHlQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCB5UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGdyaWRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgZ3JpZFRoaWNrbmVzcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JpZFN0eWxlID09PSBcImRhc2hlZFwiKSBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCI0LDRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlzR3JvdXAuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiLTEwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHlQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdGhpcy5mb3JtYXRZQXhpc1ZhbHVlKHZhbCwgeUF4aXNEaXNwbGF5VW5pdHMsIHlBeGlzUHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCB5QXhpc0NvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIHlBeGlzRm9udFNpemUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIHlBeGlzRm9udEZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF4aXNHcm91cC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMi4gQVhFIFhcclxuICAgICAgICBpZiAoc2hvd1hBeGlzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBNYXRoLmNlaWwoY2F0cy5sZW5ndGggLyAxMCk7IFxyXG4gICAgICAgICAgICBjYXRzLmZvckVhY2goKGNhdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgJSBzdGVwICE9PSAwICYmIGkgIT09IGNhdHMubGVuZ3RoIC0gMSkgcmV0dXJuOyBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgeFBvcyA9IChpIC8gKGNhdHMubGVuZ3RoIC0gMSkpICogZHJhd1c7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dWZXJ0aWNhbEdyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDJcIiwgeFBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInkyXCIsIGRyYXdILnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGdyaWRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgZ3JpZFRoaWNrbmVzcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JpZFN0eWxlID09PSBcImRhc2hlZFwiKSBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCI0LDRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlzR3JvdXAuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHhQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInlcIiwgKGRyYXdIICsgMjApLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gY2F0cy5sZW5ndGggLSAxKSB0ZXh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PT0gMCkgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0ZXh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgeEF4aXNDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCB4QXhpc0ZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCB4QXhpc0ZvbnRGYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFqb3V0ZXIgbGUgbWVudSBjb250ZXh0dWVsIHN1ciBsZXMgbGFiZWxzIGRlIGwnYXhlIFhcclxuICAgICAgICAgICAgICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAud2l0aENhdGVnb3J5KGNhdGVnb3J5LCBpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHNlbGVjdGlvbklkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUGVybWV0dHJlIGxhIHPDqWxlY3Rpb24gYXUgY2xpYyBzdXIgbGVzIGxhYmVsc1xyXG4gICAgICAgICAgICAgICAgdGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoQ2F0ZWdvcnkoY2F0ZWdvcnksIGkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZWxlY3Qoc2VsZWN0aW9uSWQsIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlDb2x1bW5zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZmZpY2hhZ2UgaGnDqXJhcmNoaXF1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0TGV2ZWwgPSBjYXRlZ29yeUNvbHVtbnNbMF0udmFsdWVzW2ldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdExldmVsID0gY2F0ZWdvcnlDb2x1bW5zW2NhdGVnb3J5Q29sdW1ucy5sZW5ndGggLSAxXS52YWx1ZXNbaV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0c3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidHNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdHNwYW4xLnRleHRDb250ZW50ID0gZmlyc3RMZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICB0c3BhbjEuc2V0QXR0cmlidXRlKFwieFwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRzcGFuMS5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjBlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHRzcGFuMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUNvbHVtbnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXMgYXZlYyAzIG5pdmVhdXggb3UgcGx1cyAoZXg6IEFubsOpZSwgTW9pcywgSm91cikgLT4gT24gYWZmaWNoZSBBbm7DqWUsIE1vaXMsIEpvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT24gc3VwcG9zZSBxdWUgbCdhdmFudC1kZXJuaWVyIG5pdmVhdSBlc3QgbGUgbW9pc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaWRkbGVMZXZlbCA9IGNhdGVnb3J5Q29sdW1uc1tjYXRlZ29yeUNvbHVtbnMubGVuZ3RoIC0gMl0udmFsdWVzW2ldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0c3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidHNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMi50ZXh0Q29udGVudCA9IG1pZGRsZUxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIuc2V0QXR0cmlidXRlKFwieFwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIuc2V0QXR0cmlidXRlKFwiZHlcIiwgXCIxLjJlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC5hcHBlbmRDaGlsZCh0c3BhbjIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjMudGV4dENvbnRlbnQgPSBsYXN0TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMy5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHhQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMy5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjEuMmVtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHRzcGFuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FzIHN0YW5kYXJkIDIgbml2ZWF1eCAoZXg6IEFubsOpZSwgTW9pcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIudGV4dENvbnRlbnQgPSBsYXN0TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMi5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHhQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMi5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjEuMmVtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHRzcGFuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdGhpcy5mb3JtYXREYXRlKGNhdHNbaV0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuYXhpc0dyb3VwLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDMuIEJPVUNMRSBTVVIgTEVTIFPDiVJJRVMgKExJR05FUylcclxuICAgICAgICBjb25zdCBsZWdlbmRJdGVtczogQXJyYXk8e25hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZ30+ID0gW107XHJcblxyXG4gICAgICAgIC8vIFLDqWN1cMOpcmF0aW9uIGRlcyBwYXJhbcOodHJlcyBkZXMgw6l0aXF1ZXR0ZXMgZGUgZG9ubsOpZXNcclxuICAgICAgICBjb25zdCBzaG93RGF0YUxhYmVscyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmRhdGFMYWJlbHMuc2hvdy52YWx1ZTtcclxuICAgICAgICBjb25zdCBkYXRhTGFiZWxzQ29sb3IgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5kYXRhTGFiZWxzLmNvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGFMYWJlbHNGb250U2l6ZSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmRhdGFMYWJlbHMuZm9udFNpemUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0YUxhYmVsc0ZvbnRGYW1pbHkgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5kYXRhTGFiZWxzLmZvbnRGYW1pbHkudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBkYXRhTGFiZWxzRGlzcGxheVVuaXRzID0gcGFyc2VJbnQodGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZGF0YUxhYmVscy5kaXNwbGF5VW5pdHMudmFsdWUudmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YUxhYmVsc1ByZWNpc2lvbiA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmRhdGFMYWJlbHMucHJlY2lzaW9uLnZhbHVlO1xyXG5cclxuICAgICAgICBhbGxTZXJpZXMuZm9yRWFjaCgoc2VyaWVzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMTApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlcmllc05hbWUgPSBzZXJpZXMuc291cmNlLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCB2YWxzID0gc2VyaWVzLnZhbHVlcztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVTZXR0aW5ncyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzW2BsaW5lU2V0dGluZ3Mke2luZGV4ICsgMX1gXTtcclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRTZXR0aW5ncyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzW2BncmFkaWVudFNldHRpbmdzJHtpbmRleCArIDF9YF07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxpbmVTZXR0aW5ncyB8fCAhZ3JhZGllbnRTZXR0aW5ncykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGluZUNvbG9yID0gbGluZVNldHRpbmdzLmxpbmVDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc3Ryb2tlV2lkdGggPSBsaW5lU2V0dGluZ3Muc3Ryb2tlV2lkdGgudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVTdHlsZSA9IGxpbmVTZXR0aW5ncy5saW5lU3R5bGUudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd01hcmtlcnMgPSBsaW5lU2V0dGluZ3Muc2hvd01hcmtlcnMudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlclNpemUgPSBsaW5lU2V0dGluZ3MubWFya2VyU2l6ZS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcHBlZCA9IGxpbmVTZXR0aW5ncy5zdGVwcGVkLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvd0dyYWRpZW50ID0gZ3JhZGllbnRTZXR0aW5ncy5zaG93R3JhZGllbnQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50Q29sb3IgPSBncmFkaWVudFNldHRpbmdzLmdyYWRpZW50Q29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50SW50ZW5zaXR5ID0gZ3JhZGllbnRTZXR0aW5ncy5ncmFkaWVudEludGVuc2l0eS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnREaXJlY3Rpb24gPSBncmFkaWVudFNldHRpbmdzLmdyYWRpZW50RGlyZWN0aW9uLnZhbHVlLnZhbHVlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBsZWdlbmRJdGVtcy5wdXNoKHsgbmFtZTogc2VyaWVzTmFtZSwgY29sb3I6IGxpbmVDb2xvciB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bCBkZXMgcG9pbnRzXHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50czogW251bWJlciwgbnVtYmVyXVtdID0gY2F0cy5tYXAoKGNhdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IChpIC8gKGNhdHMubGVuZ3RoIC0gMSkpICogZHJhd1c7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gZ2V0WVBvcyhOdW1iZXIodmFsc1tpXSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIC8vIENyw6lhdGlvbiBkdSBkw6lncmFkw6kgdW5pcXVlXHJcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50SWQgPSBgZ3JhZGllbnRfJHtpbmRleH1fJHtEYXRlLm5vdygpfWA7IC8vIElEIHVuaXF1ZVxyXG4gICAgICAgICAgICBsZXQgZ3JhZGllbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwibGluZWFyR3JhZGllbnRcIik7XHJcbiAgICAgICAgICAgIGdyYWRpZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGdyYWRpZW50SWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc3RvcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwic3RvcFwiKTtcclxuICAgICAgICAgICAgc3RvcDEuc2V0QXR0cmlidXRlKFwib2Zmc2V0XCIsIFwiMCVcIik7XHJcbiAgICAgICAgICAgIHN0b3AxLnNldEF0dHJpYnV0ZShcInN0b3AtY29sb3JcIiwgZ3JhZGllbnRDb2xvcik7XHJcbiAgICAgICAgICAgIHN0b3AxLnNldEF0dHJpYnV0ZShcInN0b3Atb3BhY2l0eVwiLCBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBncmFkaWVudEludGVuc2l0eSkpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc3RvcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwic3RvcFwiKTtcclxuICAgICAgICAgICAgc3RvcDIuc2V0QXR0cmlidXRlKFwib2Zmc2V0XCIsIFwiMTAwJVwiKTtcclxuICAgICAgICAgICAgc3RvcDIuc2V0QXR0cmlidXRlKFwic3RvcC1jb2xvclwiLCBncmFkaWVudENvbG9yKTtcclxuICAgICAgICAgICAgc3RvcDIuc2V0QXR0cmlidXRlKFwic3RvcC1vcGFjaXR5XCIsIFwiMFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGdyYWRpZW50LmFwcGVuZENoaWxkKHN0b3AxKTtcclxuICAgICAgICAgICAgZ3JhZGllbnQuYXBwZW5kQ2hpbGQoc3RvcDIpO1xyXG4gICAgICAgICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKFwiZGVmc1wiKT8uYXBwZW5kQ2hpbGQoZ3JhZGllbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5R3JhZGllbnREaXJlY3Rpb24oZ3JhZGllbnQsIGdyYWRpZW50RGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbnN0cnVjdGlvbiBkdSBjaGVtaW5cclxuICAgICAgICAgICAgbGV0IGQgPSBzdGVwcGVkID8gdGhpcy5idWlsZFN0ZXBwZWRQYXRoKHBvaW50cykgOiB0aGlzLmJ1aWxkU21vb3RoUGF0aChwb2ludHMpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWlyZVxyXG4gICAgICAgICAgICBjb25zdCBwYXRoQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJwYXRoXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB5WmVybyA9IGdldFlQb3MoMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyZWFEID0gYCR7ZH0gTCAke3BvaW50c1twb2ludHMubGVuZ3RoLTFdWzBdfSwke3laZXJvfSBMICR7cG9pbnRzWzBdWzBdfSwke3laZXJvfSBaYDtcclxuICAgICAgICAgICAgcGF0aEFyZWEuc2V0QXR0cmlidXRlKFwiZFwiLCBhcmVhRCk7XHJcbiAgICAgICAgICAgIHBhdGhBcmVhLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgc2hvd0dyYWRpZW50ID8gYHVybCgjJHtncmFkaWVudElkfSlgIDogXCJub25lXCIpO1xyXG4gICAgICAgICAgICBwYXRoQXJlYS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVzR3JvdXAuYXBwZW5kQ2hpbGQocGF0aEFyZWEpO1xyXG5cclxuICAgICAgICAgICAgLy8gTGlnbmVcclxuICAgICAgICAgICAgY29uc3QgcGF0aExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwicGF0aFwiKTtcclxuICAgICAgICAgICAgcGF0aExpbmUuc2V0QXR0cmlidXRlKFwiZFwiLCBkKTtcclxuICAgICAgICAgICAgcGF0aExpbmUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBsaW5lQ29sb3IpO1xyXG4gICAgICAgICAgICBwYXRoTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgc3Ryb2tlV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XHJcbiAgICAgICAgICAgIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lam9pblwiLCBcInJvdW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAobGluZVN0eWxlID09PSBcImRhc2hlZFwiKSBwYXRoTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiOCw0XCIpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChsaW5lU3R5bGUgPT09IFwiZG90dGVkXCIpIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCIyLDJcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGluZXNHcm91cC5hcHBlbmRDaGlsZChwYXRoTGluZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBNYXJxdWV1cnNcclxuICAgICAgICAgICAgaWYgKHNob3dNYXJrZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLW1hcmtlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgKHRoaXMubWFyZ2luLmxlZnQgKyBwWzBdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgKHRoaXMubWFyZ2luLnRvcCArIHBbMV0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIG1hcmtlclNpemUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgbGluZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChjaXJjbGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIMOJdGlxdWV0dGVzIGRlIGRvbm7DqWVzXHJcbiAgICAgICAgICAgIGlmIChzaG93RGF0YUxhYmVscykge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzLmZvckVhY2goKHAsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcih2YWxzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLmZvcm1hdERhdGFMYWJlbCh2YWx1ZSwgZGF0YUxhYmVsc0Rpc3BsYXlVbml0cywgZGF0YUxhYmVsc1ByZWNpc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWRhdGFsYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJ4XCIsICh0aGlzLm1hcmdpbi5sZWZ0ICsgcFswXSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwieVwiLCAodGhpcy5tYXJnaW4udG9wICsgcFsxXSAtIDEwKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGRhdGFMYWJlbHNDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIGRhdGFMYWJlbHNGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCBkYXRhTGFiZWxzRm9udEZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9udC13ZWlnaHRcIiwgXCI1MDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFpvbmVzIGRlIHN1cnZvbCAoVG9vbHRpcCkgYXZlYyBzdXBwb3J0IGR1IGRyaWxsXHJcbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKChwLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcsOpZXIgbCdJRCBkZSBzw6lsZWN0aW9uIHBvdXIgY2UgcG9pbnRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgLndpdGhDYXRlZ29yeShjYXRlZ29yeSwgaSlcclxuICAgICAgICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3ZlckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgKHRoaXMubWFyZ2luLmxlZnQgKyBwWzBdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN5XCIsICh0aGlzLm1hcmdpbi50b3AgKyBwWzFdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgXCI4XCIpO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcFRpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlDb2x1bW5zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRpdGxlID0gY2F0ZWdvcnlDb2x1bW5zLm1hcChjID0+IGMudmFsdWVzW2ldLnRvU3RyaW5nKCkpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUaXRsZSA9IHRoaXMuZm9ybWF0RGF0ZShjYXRzW2ldLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcENvbnRlbnQgPSBgPGRpdj48c3Ryb25nPiR7dG9vbHRpcFRpdGxlfTwvc3Ryb25nPjwvZGl2PjxkaXY+JHtzZXJpZXNOYW1lfTogJHt0aGlzLmZvcm1hdE51bWJlcihOdW1iZXIodmFsc1tpXSkpfTwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcChlLnBhZ2VYLCBlLnBhZ2VZLCB0b29sdGlwQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5jbGFzc0xpc3QuYWRkKFwidGVtcC1tYXJrZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCAodGhpcy5tYXJnaW4ubGVmdCArIHBbMF0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgKHRoaXMubWFyZ2luLnRvcCArIHBbMV0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBcIjVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGxpbmVDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCIjZmZmXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0ZW1wQ2lyY2xlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmxlZnQgPSAoZS5wYWdlWCArIDEwKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUudG9wID0gKGUucGFnZVkgLSAxMCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXAtbWFya2VyXCIpLmZvckVhY2gobSA9PiBtLnJlbW92ZSgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEdlc3Rpb24gZHUgY2xpYyBwb3VyIGxhIHPDqWxlY3Rpb24gKG7DqWNlc3NhaXJlIHBvdXIgbGUgZHJpbGwpXHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU8OpbGVjdGlvbm5lciBjZSBwb2ludCBkZSBkb25uw6llc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZWxlY3Qoc2VsZWN0aW9uSWQsIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDb250ZXh0IG1lbnUgKGNsaWMgZHJvaXQpIHBvdXIgYWZmaWNoZXIgbGVzIG9wdGlvbnMgZGUgZHJpbGxcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHNlbGVjdGlvbklkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGhvdmVyQ2lyY2xlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDQuIEzDiUdFTkRFXHJcbiAgICAgICAgaWYgKHNob3dMZWdlbmQgJiYgbGVnZW5kSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBsZWdlbmRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJnXCIpO1xyXG4gICAgICAgICAgICBsZWdlbmRHcm91cC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxlZ2VuZFggPSAwO1xyXG4gICAgICAgICAgICBsZXQgbGVnZW5kWSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1XaWR0aCA9IDEwMDtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IDIwO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcFwiIHx8IGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcENlbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRYID0gKHdpZHRoIC0gbGVnZW5kSXRlbXMubGVuZ3RoICogaXRlbVdpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRZID0gMTA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVnZW5kUG9zaXRpb24gPT09IFwiQm90dG9tXCIgfHwgbGVnZW5kUG9zaXRpb24gPT09IFwiQm90dG9tQ2VudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFggPSAod2lkdGggLSBsZWdlbmRJdGVtcy5sZW5ndGggKiBpdGVtV2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFkgPSBoZWlnaHQgLSAyMDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsZWdlbmRQb3NpdGlvbiA9PT0gXCJMZWZ0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFggPSAxMDtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFkgPSBoZWlnaHQgLyAyIC0gKGxlZ2VuZEl0ZW1zLmxlbmd0aCAqIGl0ZW1IZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsZWdlbmRQb3NpdGlvbiA9PT0gXCJSaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRYID0gd2lkdGggLSAxMTA7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRZID0gaGVpZ2h0IC8gMiAtIChsZWdlbmRJdGVtcy5sZW5ndGggKiBpdGVtSGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxlZ2VuZEl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHhPZmZzZXQgPSBsZWdlbmRQb3NpdGlvbi5pbmNsdWRlcyhcIkNlbnRlclwiKSB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJUb3BcIiB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJCb3R0b21cIiBcclxuICAgICAgICAgICAgICAgICAgICA/IGxlZ2VuZFggKyBpICogaXRlbVdpZHRoIFxyXG4gICAgICAgICAgICAgICAgICAgIDogbGVnZW5kWDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlPZmZzZXQgPSBsZWdlbmRQb3NpdGlvbiA9PT0gXCJMZWZ0XCIgfHwgbGVnZW5kUG9zaXRpb24gPT09IFwiUmlnaHRcIiBcclxuICAgICAgICAgICAgICAgICAgICA/IGxlZ2VuZFkgKyBpICogaXRlbUhlaWdodCBcclxuICAgICAgICAgICAgICAgICAgICA6IGxlZ2VuZFk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ3LDqWVyIHVuIGdyb3VwZSBwb3VyIGNoYXF1ZSDDqWzDqW1lbnQgZGUgbMOpZ2VuZGUgcG91ciBmYWNpbGl0ZXIgbGVzIGludGVyYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVnZW5kSXRlbUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImdcIik7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuc2V0QXR0cmlidXRlKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInJlY3RcIik7XHJcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgeE9mZnNldC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlKFwieVwiLCB5T2Zmc2V0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE1XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIzXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGl0ZW0uY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kSXRlbUdyb3VwLmFwcGVuZENoaWxkKHJlY3QpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieFwiLCAoeE9mZnNldCArIDIwKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieVwiLCAoeU9mZnNldCArIDIpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgbGVnZW5kRm9udENvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIGxlZ2VuZEZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCBsZWdlbmRGb250RmFtaWx5KTtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuYXBwZW5kQ2hpbGQodGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWpvdXRlciB1biByZWN0YW5nbGUgaW52aXNpYmxlIHBvdXIgYWdyYW5kaXIgbGEgem9uZSBjbGlxdWFibGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhpdEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwicmVjdFwiKTtcclxuICAgICAgICAgICAgICAgIGhpdEFyZWEuc2V0QXR0cmlidXRlKFwieFwiLCB4T2Zmc2V0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgaGl0QXJlYS5zZXRBdHRyaWJ1dGUoXCJ5XCIsICh5T2Zmc2V0IC0gNSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBoaXRBcmVhLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiOTBcIik7XHJcbiAgICAgICAgICAgICAgICBoaXRBcmVhLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjE1XCIpO1xyXG4gICAgICAgICAgICAgICAgaGl0QXJlYS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwidHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuYXBwZW5kQ2hpbGQoaGl0QXJlYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTWVudSBjb250ZXh0dWVsIHN1ciBsZXMgw6lsw6ltZW50cyBkZSBsw6lnZW5kZVxyXG4gICAgICAgICAgICAgICAgbGVnZW5kSXRlbUdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3LDqWVyIHVuIFNlbGVjdGlvbklkIGJhc8OpIHN1ciBsYSBzw6lyaWUgKG1lYXN1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VyaWVzRGF0YSA9IGFsbFNlcmllcy5ncm91cGVkKClbMF0udmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXJpZXNEYXRhICYmIHNlcmllc0RhdGEuaWRlbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoU2VyaWVzKGRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlcywgc2VyaWVzRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHNlbGVjdGlvbklkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENsaWMgcG91ciBmaWx0cmVyL3PDqWxlY3Rpb25uZXIgbGEgc8OpcmllXHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJpZXNEYXRhID0gYWxsU2VyaWVzLmdyb3VwZWQoKVswXS52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcmllc0RhdGEgJiYgc2VyaWVzRGF0YS5pZGVudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhTZXJpZXMoZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzLCBzZXJpZXNEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZWxlY3Qoc2VsZWN0aW9uSWQsIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGVnZW5kR3JvdXAuYXBwZW5kQ2hpbGQobGVnZW5kSXRlbUdyb3VwKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChsZWdlbmRHcm91cCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0RGF0YUxhYmVsKHZhbHVlOiBudW1iZXIsIGRpc3BsYXlVbml0czogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZCA9IHZhbHVlO1xyXG4gICAgICAgIGxldCBzdWZmaXggPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoZGlzcGxheVVuaXRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEF1dG9cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHZhbHVlKSA+PSAxMDAwMDAwMDAwKSB7IFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwMDAwOyBcclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1kc1wiOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMDAwMCkgeyBcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDsgXHJcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBcIiBNXCI7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKHZhbHVlKSA+PSAxMDAwKSB7IFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwOyBcclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IFwiIEtcIjsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRpc3BsYXlVbml0cyA9PT0gMTAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIEtcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpc3BsYXlVbml0cyA9PT0gMTAwMDAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDAwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpc3BsYXlVbml0cyA9PT0gMTAwMDAwMDAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDAwMDAwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1kc1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkLnRvRml4ZWQocHJlY2lzaW9uKSArIHN1ZmZpeDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkU21vb3RoUGF0aChwb2ludHM6IFtudW1iZXIsIG51bWJlcl1bXSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGxldCBkID0gYE0gJHtwb2ludHNbMF1bMF19LCR7cG9pbnRzWzBdWzFdfWA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZCArPSBgIEwgJHtwb2ludHNbaV1bMF19LCR7cG9pbnRzW2ldWzFdfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRTdGVwcGVkUGF0aChwb2ludHM6IFtudW1iZXIsIG51bWJlcl1bXSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGxldCBkID0gYE0gJHtwb2ludHNbMF1bMF19LCR7cG9pbnRzWzBdWzFdfWA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZCArPSBgIEwgJHtwb2ludHNbaV1bMF19LCR7cG9pbnRzW2ktMV1bMV19IEwgJHtwb2ludHNbaV1bMF19LCR7cG9pbnRzW2ldWzFdfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGb3JtYXR0aW5nTW9kZWwoKTogcG93ZXJiaS52aXN1YWxzLkZvcm1hdHRpbmdNb2RlbCB7XHJcbiAgICAgICAgLy8gQ29tcHRlciBsZSBub21icmUgZGUgc8OpcmllcyAoY2hhbXBzIFZhbHVlcylcclxuICAgICAgICBsZXQgbmJTZXJpZXMgPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFWaWV3ICYmIHRoaXMuZGF0YVZpZXcuY2F0ZWdvcmljYWwgJiYgdGhpcy5kYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMpIHtcclxuICAgICAgICAgICAgbmJTZXJpZXMgPSB0aGlzLmRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaXN0ZSBkeW5hbWlxdWUgZGVzIGNhcmRzIMOgIGFmZmljaGVyXHJcbiAgICAgICAgY29uc3QgY2FyZHM6IGFueVtdID0gW107XHJcblxyXG4gICAgICAgIC8vIEFqb3V0ZXIgc2V1bGVtZW50IGxlcyBncm91cGVzIG7DqWNlc3NhaXJlc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG5iU2VyaWVzOyBpKyspIHtcclxuICAgICAgICAgICAgY2FyZHMucHVzaCh0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1tgbGluZVNldHRpbmdzJHtpfWBdKTtcclxuICAgICAgICAgICAgY2FyZHMucHVzaCh0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1tgZ3JhZGllbnRTZXR0aW5ncyR7aX1gXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBam91dGVyIGxlcyBhdXRyZXMgZ3JvdXBlcyBnw6luw6lyYXV4XHJcbiAgICAgICAgY2FyZHMucHVzaChcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueEF4aXNTZXR0aW5ncyxcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueUF4aXNTZXR0aW5ncyxcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLFxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5kYXRhTGFiZWxzLFxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBHw6luw6lyZXIgbGUgbW9kw6hsZSBhdmVjIHVuaXF1ZW1lbnQgbGVzIGNhcmRzIHV0aWxlc1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuYnVpbGRGb3JtYXR0aW5nTW9kZWwoeyBjYXJkcyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5R3JhZGllbnREaXJlY3Rpb24oZ3JhZGllbnQ6IFNWR0xpbmVhckdyYWRpZW50RWxlbWVudCwgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjFcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidmVydGljYWwtcmV2ZXJzZVwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMVwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjBcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIxXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjBcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbC1yZXZlcnNlXCI6IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngxXCIsIFwiMVwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTFcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkyXCIsIFwiMFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkaWFnb25hbFwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIxXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjFcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGlhZ29uYWwtcmV2ZXJzZVwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjFcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjFcIik7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdE51bWJlcihudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gRMOpdGVybWluZXIgbGUgbm9tYnJlIGRlIGTDqWNpbWFsZXMgbsOpY2Vzc2FpcmVzXHJcbiAgICAgICAgaWYgKG51bSA9PT0gMCkgcmV0dXJuIFwiMFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFic051bSA9IE1hdGguYWJzKG51bSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG91ciBsZXMgZ3JhbmRzIG5vbWJyZXMgKD49IDEwMDApLCBwYXMgZGUgZMOpY2ltYWxlc1xyXG4gICAgICAgIGlmIChhYnNOdW0gPj0gMTAwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChudW0pLnRvTG9jYWxlU3RyaW5nKCdmci1GUicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQb3VyIGxlcyBub21icmVzIGVudHJlIDEgZXQgOTk5LCBtYXggMiBkw6ljaW1hbGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgaWYgKGFic051bSA+PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKG51bSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgIHJldHVybiByb3VuZGVkLnRvTG9jYWxlU3RyaW5nKCdmci1GUicsIHsgXHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG91ciBsZXMgcGV0aXRzIG5vbWJyZXMgKDwgMSksIGFmZmljaGVyIGp1c3F1J8OgIDQgZMOpY2ltYWxlc1xyXG4gICAgICAgIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChhYnNOdW0pKTtcclxuICAgICAgICBjb25zdCBkZWNpbWFscyA9IE1hdGgubWluKDQsIE1hdGguYWJzKG1hZ25pdHVkZSkgKyAxKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbnVtLnRvTG9jYWxlU3RyaW5nKCdmci1GUicsIHsgXHJcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHMsXHJcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdFlBeGlzVmFsdWUodmFsdWU6IG51bWJlciwgZGlzcGxheVVuaXRzOiBzdHJpbmcsIHByZWNpc2lvbjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZm9ybWF0dGVkID0gdmFsdWU7XHJcbiAgICAgICAgbGV0IHN1ZmZpeCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHVuaXRzID0gcGFyc2VJbnQoZGlzcGxheVVuaXRzKTtcclxuXHJcbiAgICAgICAgaWYgKHVuaXRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEF1dG8gOiBkw6l0ZWN0aW9uIGF1dG9tYXRpcXVlXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMDAwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgc3VmZml4ID0gXCIgTWRzXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnModmFsdWUpID49IDEwMDAwMDApIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDtcclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1cIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgc3VmZml4ID0gXCIgS1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh1bml0cyA9PT0gMTAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIEtcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXRzID09PSAxMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDtcclxuICAgICAgICAgICAgc3VmZml4ID0gXCIgTVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pdHMgPT09IDEwMDAwMDAwMDApIHtcclxuICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICBzdWZmaXggPSBcIiBNZHNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFwcGxpcXVlciBsYSBwcsOpY2lzaW9uXHJcbiAgICAgICAgaWYgKHByZWNpc2lvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChmb3JtYXR0ZWQpLnRvTG9jYWxlU3RyaW5nKCdmci1GUicpICsgc3VmZml4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXR0ZWQudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJywge1xyXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb24sXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNpc2lvblxyXG4gICAgICAgICAgICB9KSArIHN1ZmZpeDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXREYXRlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFNpbXBsZW1lbnQgcmV0b3VybmVyIGxhIHZhbGV1ciB0ZWxsZSBxdWVsbGVcclxuICAgICAgICAvLyBQb3dlciBCSSBlbnZvaWUgZMOpasOgIGxlIGJvbiBmb3JtYXQgc2Vsb24gbGUgbml2ZWF1IGRlIGRyaWxsXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFZpc3VhbCB9IGZyb20gXCIuLi8uLi9zcmMvdmlzdWFsXCI7XG5pbXBvcnQgcG93ZXJiaVZpc3VhbHNBcGkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcbmltcG9ydCBJVmlzdWFsUGx1Z2luID0gcG93ZXJiaVZpc3VhbHNBcGkudmlzdWFscy5wbHVnaW5zLklWaXN1YWxQbHVnaW47XG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xuaW1wb3J0IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmlWaXN1YWxzQXBpLmV4dGVuc2liaWxpdHkudmlzdWFsLkRpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucztcbnZhciBwb3dlcmJpS2V5OiBhbnkgPSBcInBvd2VyYmlcIjtcbnZhciBwb3dlcmJpOiBhbnkgPSB3aW5kb3dbcG93ZXJiaUtleV07XG52YXIgY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHOiBJVmlzdWFsUGx1Z2luID0ge1xuICAgIG5hbWU6ICdjb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcnLFxuICAgIGRpc3BsYXlOYW1lOiAnY291cmJlZGVncmFkZScsXG4gICAgY2xhc3M6ICdWaXN1YWwnLFxuICAgIGFwaVZlcnNpb246ICc1LjMuMCcsXG4gICAgY3JlYXRlOiAob3B0aW9ucz86IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykgPT4ge1xuICAgICAgICBpZiAoVmlzdWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZpc3VhbChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyAnVmlzdWFsIGluc3RhbmNlIG5vdCBmb3VuZCc7XG4gICAgfSxcbiAgICBjcmVhdGVNb2RhbERpYWxvZzogKGRpYWxvZ0lkOiBzdHJpbmcsIG9wdGlvbnM6IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucywgaW5pdGlhbFN0YXRlOiBvYmplY3QpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVnaXN0cnkgPSAoPGFueT5nbG9iYWxUaGlzKS5kaWFsb2dSZWdpc3RyeTtcbiAgICAgICAgaWYgKGRpYWxvZ0lkIGluIGRpYWxvZ1JlZ2lzdHJ5KSB7XG4gICAgICAgICAgICBuZXcgZGlhbG9nUmVnaXN0cnlbZGlhbG9nSWRdKG9wdGlvbnMsIGluaXRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGN1c3RvbTogdHJ1ZVxufTtcbmlmICh0eXBlb2YgcG93ZXJiaSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHBvd2VyYmkudmlzdWFscyA9IHBvd2VyYmkudmlzdWFscyB8fCB7fTtcbiAgICBwb3dlcmJpLnZpc3VhbHMucGx1Z2lucyA9IHBvd2VyYmkudmlzdWFscy5wbHVnaW5zIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zW1wiY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHXCJdID0gY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHO1xufVxuZXhwb3J0IGRlZmF1bHQgY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHOyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=