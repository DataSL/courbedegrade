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
    // Cached canvas for text measurement (used for label truncation)
    static _labelMeasureCanvas = null;
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
        // 🔓 MODE DÉVELOPPEMENT : Désactiver complètement la vérification de licence
        // Décommentez la ligne suivante pour activer le système de licensing en production
        //this.checkLicenseInProduction();
        // En mode développement, toujours considérer que la licence est valide
        console.log("🔓 Mode développement : Vérification de licence désactivée");
        this.hasServicePlans = true;
        this.isLicenseUnsupportedEnv = false;
    }
    /**
     * Vérifie les licences en mode production (AppSource)
     * Cette méthode doit être appelée uniquement après publication sur AppSource
     */
    checkLicenseInProduction() {
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
                // Filtrer uniquement les plans actifs
                this.currentUserValidPlans = plans?.filter(({ state, spIdentifier }) => {
                    // Vérifier que c'est bien un de VOS plans
                    const validIdentifiers = [
                        "customtableplan" // ← Remplacer par votre vrai ID
                    ];
                    return validIdentifiers.includes(spIdentifier) &&
                        (state === 1 /* ServicePlanState.Active */ || state === 2 /* ServicePlanState.Warning */);
                });
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
        this.tooltip.style.top = (y + 10) + "px";
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
        // Réinitialiser les marges à chaque update pour éviter l'accumulation
        this.margin = { top: 20, right: 40, bottom: 40, left: 60 };
        let legendHeight = 0;
        if (showLegend && (legendPosition === "Top" || legendPosition === "TopCenter")) {
            legendHeight = 30;
            this.margin.top = 20 + legendHeight;
        }
        else if (showLegend && (legendPosition === "Bottom" || legendPosition === "BottomCenter")) {
            legendHeight = 30;
            this.margin.bottom = 40 + legendHeight;
        }
        // Ajustement pour les labels rotés à 45° (toujours appliqué maintenant)
        this.margin.bottom += 30;
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
            const createdTexts = [];
            const labelIndices = [];
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
                text.setAttribute('data-x', xPos.toString());
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
                    const label = this.formatDate(cats[i].toString());
                    text.textContent = label;
                    text.setAttribute('data-label', label);
                }
                this.axisGroup.appendChild(text);
                createdTexts.push(text);
                labelIndices.push(i);
            });
            // Intelligent truncation with 45° rotation
            try {
                const padding = 6; // px padding between labels
                const canvas = Visual._labelMeasureCanvas || (Visual._labelMeasureCanvas = document.createElement('canvas'));
                const ctx = canvas.getContext('2d');
                ctx.font = `${xAxisFontSize}px ${xAxisFontFamily}`;
                const xs = createdTexts.map(t => parseFloat(t.getAttribute('data-x') || t.getAttribute('x') || '0'));
                const angle = -45; // Rotation angle in degrees
                // Step 1: Truncate labels that are too wide and apply 45° rotation
                for (let i = 0; i < createdTexts.length; i++) {
                    const t = createdTexts[i];
                    // Skip multi-line hierarchical labels (they use tspans)
                    if (t.childNodes.length > 1)
                        continue;
                    const raw = t.getAttribute('data-label') || t.textContent || '';
                    const x = xs[i];
                    const left = (i === 0) ? 0 : (xs[i - 1] + x) / 2;
                    const right = (i === createdTexts.length - 1) ? drawW : (x + xs[i + 1]) / 2;
                    const avail = Math.max(10, right - left - padding * 2);
                    // Measure and truncate if necessary (keep beginning, add '...' at end)
                    let width = ctx.measureText(raw).width;
                    if (width > avail) {
                        let startLen = raw.length;
                        let candidate = raw;
                        const ellipsis = '...';
                        // Keep reducing from the end until it fits
                        while (startLen > 0) {
                            candidate = raw.slice(0, startLen) + ellipsis;
                            width = ctx.measureText(candidate).width;
                            if (width <= avail)
                                break;
                            startLen--;
                        }
                        t.textContent = candidate;
                    }
                    // Apply 45° rotation to all labels
                    const origX = parseFloat(t.getAttribute('data-x') || '0');
                    const origY = parseFloat(t.getAttribute('y') || (drawH + 20).toString());
                    t.setAttribute('text-anchor', 'end');
                    t.setAttribute('transform', `translate(${origX}, ${origY}) rotate(${angle})`);
                    t.setAttribute('x', '0');
                    t.setAttribute('y', '0');
                }
                // Step 2: Check for overlaps using bounding boxes (after rotation)
                let hasOverlap = false;
                const boxes = createdTexts.map(t => t.getBBox());
                for (let k = 1; k < boxes.length; k++) {
                    const prev = boxes[k - 1];
                    const curr = boxes[k];
                    if (curr.x < prev.x + prev.width + padding) {
                        hasOverlap = true;
                        break;
                    }
                }
                // Step 3: If overlap detected, hide the last label (the one at the right edge)
                if (hasOverlap && createdTexts.length > 1) {
                    const last = createdTexts[createdTexts.length - 1];
                    if (last)
                        last.style.display = 'none';
                }
            }
            catch (err) {
                // getBBox/canvas might fail in some non-rendering environments; ignore silently
                console.warn('X-axis label truncation/overlap detection skipped:', err);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQUksbURBQW1ELEdBQWtCO0lBQ3JFLElBQUksRUFBRSxxREFBcUQ7SUFDM0QsV0FBVyxFQUFFLGVBQWU7SUFDNUIsS0FBSyxFQUFFLFFBQVE7SUFDZixVQUFVLEVBQUUsT0FBTztJQUNuQixNQUFNLEVBQUUsQ0FBQyxPQUFrQyxFQUFFLEVBQUU7UUFDM0MsSUFBSSwrQ0FBTSxFQUFFLENBQUM7WUFDVCxPQUFPLElBQUksK0NBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0QsTUFBTSwyQkFBMkIsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsaUJBQWlCLEVBQUUsQ0FBQyxRQUFnQixFQUFFLE9BQWlDLEVBQUUsWUFBb0IsRUFBRSxFQUFFO1FBQzdGLE1BQU0sY0FBYyxHQUFTLFVBQVcsQ0FBQyxjQUFjLENBQUM7UUFDeEQsSUFBSSxRQUFRLElBQUksY0FBYyxFQUFFLENBQUM7WUFDN0IsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3hELENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxFQUFFLElBQUk7Q0FDZixDQUFDO0FBQ0YsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUN4RCxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxREFBcUQsQ0FBQyxHQUFHLG1EQUFtRCxDQUFDO0FBQ3pJLENBQUM7QUFDRCxpRUFBZSxtREFBbUQsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzLmpzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvdXRpbHMvRm9ybWF0dGluZ1NldHRpbmdzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHLy4vc3JjL3NldHRpbmdzLnRzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uL3NyYy92aXN1YWwudHMiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHLy4vc3R5bGUvdmlzdWFsLmxlc3MiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHLy4vLnRtcC9wcmVjb21waWxlL3Zpc3VhbFBsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBvd2VyYmkgdXRpbHMgY29tcG9uZW50cyBjbGFzc2VzIGZvciBjdXN0b20gdmlzdWFsIGZvcm1hdHRpbmcgcGFuZSBvYmplY3RzXG4gKlxuICovXG5pbXBvcnQgKiBhcyBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIgZnJvbSBcIi4vdXRpbHMvRm9ybWF0dGluZ1NldHRpbmdzVXRpbHNcIjtcbmNsYXNzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBDYXJkR3JvdXBFbnRpdHkgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgTW9kZWwge1xufVxuLyoqIENvbXBvc2l0ZUNhcmQgaXMgdXNlIHRvIHBvcHVsYXRlIGEgY2FyZCBpbnRvIHRoZSBmb3JtYXR0aW5nIHBhbmUgd2l0aCBtdWx0aXBsZSBncm91cHMgKi9cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVDYXJkIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgQ2FyZEdyb3VwRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbn1cbi8qKiBTaW1wbGVDYXJkIGlzIHVzZSB0byBwb3B1bGF0ZSBhIGNhcmQgaW50byB0aGUgZm9ybWF0dGluZyBwYW5lIGluIGEgc2luZ2xlIGdyb3VwICovXG5leHBvcnQgY2xhc3MgU2ltcGxlQ2FyZCBleHRlbmRzIENhcmRHcm91cEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgU2ltcGxlU2xpY2UgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgY29uc3Qgc2xpY2VEaXNwbGF5TmFtZSA9IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGlzcGxheU5hbWVLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRpc3BsYXlOYW1lS2V5KSA6IHRoaXMuZGlzcGxheU5hbWU7XG4gICAgICAgIGNvbnN0IHNsaWNlRGVzY3JpcHRpb24gPSAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRlc2NyaXB0aW9uS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kZXNjcmlwdGlvbktleSkgOiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCBjb21wb25lbnREaXNwbGF5TmFtZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBzbGljZURpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNsaWNlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1aWQ6IG9iamVjdE5hbWUgKyAnLScgKyBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudERpc3BsYXlOYW1lKSwgeyBjb250cm9sOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogY29udHJvbFR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogdGhpcy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpXG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3I6IEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlci5nZXREZXNjcmlwdG9yKG9iamVjdE5hbWUsIHRoaXMpLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogdGhpcy5uYW1lXG4gICAgICAgICAgICB9XTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSAoX2EgPSBkYXRhVmlld09iamVjdHMgPT09IG51bGwgfHwgZGF0YVZpZXdPYmplY3RzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhVmlld09iamVjdHNbb2JqZWN0TmFtZV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVt0aGlzLm5hbWVdO1xuICAgICAgICB0aGlzLnZhbHVlID0gRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyLmdldFByb3BlcnR5VmFsdWUodGhpcywgbmV3VmFsdWUsIHRoaXMudmFsdWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBbGlnbm1lbnRHcm91cCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJBbGlnbm1lbnRHcm91cFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5BbGlnbm1lbnRHcm91cCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG1vZGU6IHRoaXMubW9kZSwgc3VwcG9ydHNOb1NlbGVjdGlvbjogdGhpcy5zdXBwb3J0c05vU2VsZWN0aW9uIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUb2dnbGVTd2l0Y2ggZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVG9nZ2xlU3dpdGNoXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRvZ2dsZVN3aXRjaCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiQ29sb3JQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuQ29sb3JQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBkZWZhdWx0Q29sb3I6IHRoaXMuZGVmYXVsdENvbG9yLCBpc05vRmlsbEl0ZW1TdXBwb3J0ZWQ6IHRoaXMuaXNOb0ZpbGxJdGVtU3VwcG9ydGVkIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOdW1VcERvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTnVtVXBEb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lk51bVVwRG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG9wdGlvbnM6IHRoaXMub3B0aW9ucyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgTnVtVXBEb3duIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJTbGlkZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuU2xpZGVyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRhdGVQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRGF0ZVBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHBsYWNlaG9sZGVyOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLnBsYWNlaG9sZGVyS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5wbGFjZWhvbGRlcktleSkgOiB0aGlzLnBsYWNlaG9sZGVyLCB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEl0ZW1Ecm9wZG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEcm9wZG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ecm9wZG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGl0ZW1zOiB0aGlzLml0ZW1zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBdXRvRHJvcGRvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBtZXJnZVZhbHVlczogdGhpcy5tZXJnZVZhbHVlcywgZmlsdGVyVmFsdWVzOiB0aGlzLmZpbHRlclZhbHVlcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRHVyYXRpb25QaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHVyYXRpb25QaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHVyYXRpb25QaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEVycm9yUmFuZ2VDb250cm9sIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkVycm9yUmFuZ2VDb250cm9sXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkVycm9yUmFuZ2VDb250cm9sICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGaWVsZFBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGaWVsZFBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GaWVsZFBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycywgYWxsb3dNdWx0aXBsZVZhbHVlczogdGhpcy5hbGxvd011bHRpcGxlVmFsdWVzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJdGVtRmxhZ3NTZWxlY3Rpb24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmxhZ3NTZWxlY3Rpb25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmxhZ3NTZWxlY3Rpb24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpdGVtczogdGhpcy5pdGVtcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXV0b0ZsYWdzU2VsZWN0aW9uIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZsYWdzU2VsZWN0aW9uXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZsYWdzU2VsZWN0aW9uICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGV4dElucHV0XCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRleHRJbnB1dCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZXh0QXJlYSBleHRlbmRzIFRleHRJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGV4dEFyZWFcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVGV4dEFyZWEgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZvbnRQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRm9udFBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Gb250UGlja2VyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcmFkaWVudEJhciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJHcmFkaWVudEJhclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5HcmFkaWVudEJhciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiSW1hZ2VVcGxvYWRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuSW1hZ2VVcGxvYWQgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIExpc3RFZGl0b3IgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTGlzdEVkaXRvclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5MaXN0RWRpdG9yICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZWFkT25seVRleHQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiUmVhZE9ubHlUZXh0XCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlJlYWRPbmx5VGV4dCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2hhcGVNYXBTZWxlY3RvciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJTaGFwZU1hcFNlbGVjdG9yXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlNoYXBlTWFwU2VsZWN0b3IgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpc0F6TWFwUmVmZXJlbmNlU2VsZWN0b3I6IHRoaXMuaXNBek1hcFJlZmVyZW5jZVNlbGVjdG9yIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVTbGljZSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICBjb25zdCBjb250cm9sVHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBjb25zdCBjb21wb25lbnREaXNwbGF5TmFtZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRpc3BsYXlOYW1lS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kaXNwbGF5TmFtZUtleSkgOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGVzY3JpcHRpb25LZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRlc2NyaXB0aW9uS2V5KSA6IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1aWQ6IG9iamVjdE5hbWUgKyAnLScgKyBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudERpc3BsYXlOYW1lKSwgeyBjb250cm9sOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogY29udHJvbFR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogdGhpcy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb250Q29udHJvbCBleHRlbmRzIENvbXBvc2l0ZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGb250Q29udHJvbFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Gb250Q29udHJvbCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9udEZhbWlseTogdGhpcy5mb250RmFtaWx5LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBmb250U2l6ZTogdGhpcy5mb250U2l6ZS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgYm9sZDogKF9hID0gdGhpcy5ib2xkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGl0YWxpYzogKF9iID0gdGhpcy5pdGFsaWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgdW5kZXJsaW5lOiAoX2MgPSB0aGlzLnVuZGVybGluZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvbnRGYW1pbHkuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmZvbnRTaXplLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuYm9sZCA/IHRoaXMuYm9sZC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuaXRhbGljID8gdGhpcy5pdGFsaWMuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnVuZGVybGluZSA/IHRoaXMudW5kZXJsaW5lLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSk7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICB0aGlzLmZvbnRGYW1pbHkuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLmZvbnRTaXplLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9hID0gdGhpcy5ib2xkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2IgPSB0aGlzLml0YWxpYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9jID0gdGhpcy51bmRlcmxpbmUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1hcmdpblBhZGRpbmcgZXh0ZW5kcyBDb21wb3NpdGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTWFyZ2luUGFkZGluZ1wiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5NYXJnaW5QYWRkaW5nICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucmlnaHQuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20uZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMucmlnaHQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy50b3AuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5ib3R0b20uZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSk7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHRoaXMubGVmdC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMucmlnaHQuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnRvcC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuYm90dG9tLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckl0ZW0gZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzLmpzLm1hcCIsImltcG9ydCB7IENvbXBvc2l0ZUNhcmQsIFNpbXBsZUNhcmQgfSBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzXCI7XG5leHBvcnQgY2xhc3MgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IobG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgPSBsb2NhbGl6YXRpb25NYW5hZ2VyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCB2aXN1YWwgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbCBmcm9tIG1ldGFkYXRhIGRhdGFWaWV3XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVZpZXdzIG1ldGFkYXRhIGRhdGFWaWV3IG9iamVjdFxuICAgICAqIEByZXR1cm5zIHZpc3VhbCBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsXG4gICAgICovXG4gICAgcG9wdWxhdGVGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCh0eXBlQ2xhc3MsIGRhdGFWaWV3KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGxldCBkZWZhdWx0U2V0dGluZ3MgPSBuZXcgdHlwZUNsYXNzKCk7XG4gICAgICAgIGxldCBkYXRhVmlld09iamVjdHMgPSAoX2EgPSBkYXRhVmlldyA9PT0gbnVsbCB8fCBkYXRhVmlldyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YVZpZXcubWV0YWRhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vYmplY3RzO1xuICAgICAgICBpZiAoZGF0YVZpZXdPYmplY3RzKSB7XG4gICAgICAgICAgICAvLyBsb29wIG92ZXIgZWFjaCBmb3JtYXR0aW5nIHByb3BlcnR5IGFuZCBzZXQgaXRzIG5ldyB2YWx1ZSBpZiBleGlzdHNcbiAgICAgICAgICAgIChfYiA9IGRlZmF1bHRTZXR0aW5ncy5jYXJkcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmQgaW5zdGFuY2VvZiBDb21wb3NpdGVDYXJkKVxuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjYXJkLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQgPyBbY2FyZF0gOiBjYXJkLmdyb3Vwcyk7XG4gICAgICAgICAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGN1cnJlbnQgdG9wIGxldmVsIHRvZ2dsZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IGNhcmRHcm91cEluc3RhbmNlID09PSBudWxsIHx8IGNhcmRHcm91cEluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgKF9kID0gKF9jID0gY2FyZEdyb3VwSW5zdGFuY2UgPT09IG51bGwgfHwgY2FyZEdyb3VwSW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNvbnRhaW5lckl0ZW1zKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gY29udGFpbmVySXRlbSA9PT0gbnVsbCB8fCBjb250YWluZXJJdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250YWluZXJJdGVtLnNsaWNlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTZXR0aW5ncztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgZm9ybWF0dGluZyBtb2RlbCBieSBwYXJzaW5nIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWwgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBwb3dlcmJpIHZpc3VhbCBmb3JtYXR0aW5nIG1vZGVsXG4gICAgICovXG4gICAgYnVpbGRGb3JtYXR0aW5nTW9kZWwoZm9ybWF0dGluZ1NldHRpbmdzTW9kZWwpIHtcbiAgICAgICAgbGV0IGZvcm1hdHRpbmdNb2RlbCA9IHtcbiAgICAgICAgICAgIGNhcmRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBmb3JtYXR0aW5nU2V0dGluZ3NNb2RlbC5jYXJkc1xuICAgICAgICAgICAgLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKVxuICAgICAgICAgICAgLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGxldCBmb3JtYXR0aW5nQ2FyZCA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkLmRpc3BsYXlOYW1lS2V5KSA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkLmRpc3BsYXlOYW1lS2V5KSA6IGNhcmQuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZC5kZXNjcmlwdGlvbktleSkgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZC5kZXNjcmlwdGlvbktleSkgOiBjYXJkLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICAgICAgdWlkOiBjYXJkLm5hbWUgKyBcIi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgYW5hbHl0aWNzUGFuZTogY2FyZC5hbmFseXRpY3NQYW5lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdE5hbWUgPSBjYXJkLm5hbWU7XG4gICAgICAgICAgICBpZiAoY2FyZC50b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcExldmVsVG9nZ2xlU2xpY2UgPSBjYXJkLnRvcExldmVsU2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgdG9wTGV2ZWxUb2dnbGVTbGljZS5zdXBwcmVzc0Rpc3BsYXlOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC50b3BMZXZlbFRvZ2dsZSA9IHRvcExldmVsVG9nZ2xlU2xpY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSBjYXJkLm9uUHJlUHJvY2VzcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoY2FyZCk7XG4gICAgICAgICAgICBjb25zdCBpc1NpbXBsZUNhcmQgPSBjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZDtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChpc1NpbXBsZUNhcmQgP1xuICAgICAgICAgICAgICAgIFtjYXJkXS5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkgOlxuICAgICAgICAgICAgICAgIGNhcmQuZ3JvdXBzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSk7XG4gICAgICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXNcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cFVpZCA9IGNhcmRHcm91cEluc3RhbmNlLm5hbWUgKyBcIi1ncm91cFwiO1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgZ3JvdXAgZm9yIGVhY2ggZ3JvdXBcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nR3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBpc1NpbXBsZUNhcmQgPyB1bmRlZmluZWQgOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWVLZXkpIDogY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpc1NpbXBsZUNhcmQgPyB1bmRlZmluZWQgOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb25LZXkpIDogY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHNsaWNlczogW10sXG4gICAgICAgICAgICAgICAgICAgIHVpZDogZ3JvdXBVaWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiBjYXJkR3JvdXBJbnN0YW5jZS5jb2xsYXBzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXlTYXZlU2xpY2VzOiBjYXJkR3JvdXBJbnN0YW5jZS5kZWxheVNhdmVTbGljZXMsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRSZWFzb246IGNhcmRHcm91cEluc3RhbmNlLmRpc2FibGVkUmVhc29uLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQuZ3JvdXBzLnB1c2goZm9ybWF0dGluZ0dyb3VwKTtcbiAgICAgICAgICAgICAgICAvLyBJbiBjYXNlIGZvcm1hdHRpbmcgbW9kZWwgYWRkcyBkYXRhIHBvaW50cyBvciB0b3AgY2F0ZWdvcmllcyAoTGlrZSB3aGVuIHlvdSBtb2RpZnkgc3BlY2lmaWMgdmlzdWFsIGNhdGVnb3J5IGNvbG9yKS5cbiAgICAgICAgICAgICAgICAvLyB0aGVzZSBjYXRlZ29yaWVzIHVzZSBzYW1lIG9iamVjdCBuYW1lIGFuZCBwcm9wZXJ0eSBuYW1lIGZyb20gY2FwYWJpbGl0aWVzIGFuZCB0aGUgZ2VuZXJhdGVkIHVpZCB3aWxsIGJlIHRoZSBzYW1lIGZvciB0aGVzZSBmb3JtYXR0aW5nIGNhdGVnb3JpZXMgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIC8vIFNvbHV0aW9uID0+IFNhdmUgc2xpY2UgbmFtZXMgdG8gbW9kaWZ5IGVhY2ggc2xpY2UgdWlkIHRvIGJlIHVuaXF1ZSBieSBhZGRpbmcgY291bnRlciB2YWx1ZSB0byB0aGUgbmV3IHNsaWNlIHVpZFxuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWNlTmFtZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGNvbnRhaW5lciBzbGljZSBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJVaWQgPSBncm91cFVpZCArIFwiLWNvbnRhaW5lclwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nQ29udGFpbmVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVyLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lci5kaXNwbGF5TmFtZUtleSkgOiBjb250YWluZXIuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXIuZGVzY3JpcHRpb25LZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVyLmRlc2NyaXB0aW9uS2V5KSA6IGNvbnRhaW5lci5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogY29udGFpbmVyVWlkXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jb250YWluZXJJdGVtcy5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGNvbnRhaW5lciBpdGVtIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVySWVtTmFtZSA9IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkgPyBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5IDogY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckl0ZW1VaWQgPSBjb250YWluZXJVaWQgKyBjb250YWluZXJJZW1OYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRpbmdDb250YWluZXJJdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkpIDogY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogY29udGFpbmVySXRlbVVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgc2xpY2VzIGFuZCBhZGQgdGhlbSB0byBjdXJyZW50IGZvcm1hdHRpbmcgY29udGFpbmVyIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzOiBjb250YWluZXJJdGVtLnNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlczogZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0uc2xpY2VzIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NvbnRhaW5lci5jb250YWluZXJJdGVtcy5wdXNoKGZvcm1hdHRpbmdDb250YWluZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdHcm91cC5jb250YWluZXIgPSBmb3JtYXR0aW5nQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wTGV2ZWxUb2dnbGVTbGljZSA9IGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BMZXZlbFRvZ2dsZVNsaWNlLnN1cHByZXNzRGlzcGxheU5hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGZvcm1hdHRpbmdHcm91cC5kaXNwbGF5TmFtZSA9PSB1bmRlZmluZWQgPyBmb3JtYXR0aW5nQ2FyZCA6IGZvcm1hdHRpbmdHcm91cCkudG9wTGV2ZWxUb2dnbGUgPSB0b3BMZXZlbFRvZ2dsZVNsaWNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgc2xpY2UgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXM6IGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlczogZm9ybWF0dGluZ0dyb3VwLnNsaWNlcyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLnJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gdGhpcy5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQpO1xuICAgICAgICAgICAgZm9ybWF0dGluZ01vZGVsLmNhcmRzLnB1c2goZm9ybWF0dGluZ0NhcmQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRpbmdNb2RlbDtcbiAgICB9XG4gICAgYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzIH0pIHtcbiAgICAgICAgLy8gRmlsdGVyIHNsaWNlcyBiYXNlZCBvbiB0aGVpciB2aXNpYmlsaXR5XG4gICAgICAgIHNsaWNlcyA9PT0gbnVsbCB8fCBzbGljZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtYXR0aW5nU2xpY2UgPSBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICBpZiAoZm9ybWF0dGluZ1NsaWNlKSB7XG4gICAgICAgICAgICAgICAgLy8gTW9kaWZ5IGZvcm1hdHRpbmcgc2xpY2UgdWlkIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgIGlmIChzbGljZU5hbWVzW3NsaWNlLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdKys7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdTbGljZS51aWQgPSBgJHtmb3JtYXR0aW5nU2xpY2UudWlkfS0ke3NsaWNlTmFtZXNbc2xpY2UubmFtZV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ1NsaWNlcy5wdXNoKGZvcm1hdHRpbmdTbGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBQcm9jZWVkZWQgc2xpY2UgbmFtZXMgYXJlIHNhdmVkIHRvIHByZXZlbnQgZHVwbGljYXRlZCBkZWZhdWx0IGRlc2NyaXB0b3JzIGluIGNhc2Ugb2YgdXNpbmcgXG4gICAgICAgIC8vIGZvcm1hdHRpbmcgY2F0ZWdvcmllcyAmIHNlbGVjdG9ycywgc2luY2UgdGhleSBoYXZlIHRoZSBzYW1lIGRlc2NyaXB0b3Igb2JqZWN0TmFtZSBhbmQgcHJvcGVydHlOYW1lXG4gICAgICAgIGNvbnN0IHNsaWNlTmFtZXMgPSB7fTtcbiAgICAgICAgbGV0IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGxldCBjYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgICAgICBsZXQgY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBpZiAoY2FyZCBpbnN0YW5jZW9mIENvbXBvc2l0ZUNhcmQgJiYgY2FyZC50b3BMZXZlbFNsaWNlKVxuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMucHVzaCguLi4oX2EgPSBjYXJkLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSkpO1xuICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQgP1xuICAgICAgICAgICAgW2NhcmRdLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSA6XG4gICAgICAgICAgICBjYXJkLmdyb3Vwcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkpO1xuICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXMuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBjYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gdGhpcy5nZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSwgY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzLCBzbGljZU5hbWVzLCBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKTtcbiAgICAgICAgICAgIChfYiA9IChfYSA9IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbnRhaW5lckl0ZW1zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdCh0aGlzLmdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lLCBjb250YWluZXJJdGVtLnNsaWNlcywgc2xpY2VOYW1lcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5wdXNoKC4uLmNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICB9XG4gICAgZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSwgc2xpY2VzLCBzbGljZU5hbWVzLCB0b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgIGxldCByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBpZiAodG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgc2xpY2VOYW1lc1t0b3BMZXZlbFNsaWNlLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHRvcExldmVsU2xpY2UuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHNsaWNlcyA9PT0gbnVsbCB8fCBzbGljZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlcy5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNsaWNlICYmICFzbGljZU5hbWVzW3NsaWNlLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQoc2xpY2UuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzLm1hcCIsImltcG9ydCAqIGFzIGZvcm1hdHRpbmdTZXR0aW5ncyBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzXCI7XG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlXCI7XG5leHBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MsIEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQnVpbGQgYW5kIHJldHVybiBmb3JtYXR0aW5nIGRlc2NyaXB0b3IgZm9yIHNpbXBsZSBzbGljZVxuICpcbiAqIEBwYXJhbSBvYmplY3ROYW1lIE9iamVjdCBuYW1lIGZyb20gY2FwYWJpbGl0aWVzXG4gKiBAcGFyYW0gc2xpY2UgZm9ybWF0dGluZyBzaW1wbGUgc2xpY2VcbiAqIEByZXR1cm5zIHNpbXBsZSBzbGljZSBmb3JtYXR0aW5nIGRlc2NyaXB0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlc2NyaXB0b3Iob2JqZWN0TmFtZSwgc2xpY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICBwcm9wZXJ0eU5hbWU6IHNsaWNlLm5hbWUsXG4gICAgICAgIHNlbGVjdG9yOiBzbGljZS5zZWxlY3RvcixcbiAgICAgICAgYWx0Q29uc3RhbnRWYWx1ZVNlbGVjdG9yOiBzbGljZS5hbHRDb25zdGFudFNlbGVjdG9yLFxuICAgICAgICBpbnN0YW5jZUtpbmQ6IHNsaWNlLmluc3RhbmNlS2luZFxuICAgIH07XG59XG4vKipcbiAqIEdldCBwcm9wZXJ0eSB2YWx1ZSBmcm9tIGRhdGF2aWV3IG9iamVjdHMgaWYgZXhpc3RzXG4gKiBFbHNlIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZSBmcm9tIGZvcm1hdHRpbmcgc2V0dGluZ3Mgb2JqZWN0XG4gKlxuICogQHBhcmFtIHZhbHVlIGRhdGF2aWV3IG9iamVjdCB2YWx1ZVxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBmb3JtYXR0aW5nIHNldHRpbmdzIGRlZmF1bHQgdmFsdWVcbiAqIEByZXR1cm5zIGZvcm1hdHRpbmcgcHJvcGVydHkgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUoc2xpY2UsIHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmICF2YWx1ZS5zb2xpZCkpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLnNvbGlkKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWUuc29saWQuY29sb3IgfTtcbiAgICB9XG4gICAgaWYgKHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5pdGVtcykge1xuICAgICAgICBsZXQgaXRlbXNBcnJheSA9IHNsaWNlLml0ZW1zO1xuICAgICAgICByZXR1cm4gaXRlbXNBcnJheS5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PSB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzLm1hcCIsIi8qXHJcbiAqICBQb3dlciBCSSBWaXN1YWxpemF0aW9uc1xyXG4gKlxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb25cclxuICogIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBNSVQgTGljZW5zZVxyXG4gKlxyXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJcIlNvZnR3YXJlXCJcIiksIHRvIGRlYWxcclxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAqQVMgSVMqLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuICogIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncyB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcblxyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5TaW1wbGVDYXJkO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzU2xpY2UgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2xpY2U7XHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5Nb2RlbDtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmljIExpbmUgU2V0dGluZ3MgQ2FyZFxyXG4gKi9cclxuY2xhc3MgTGluZVNldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbGluZUNvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJsaW5lQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDb3VsZXVyIGRlIGxhIGxpZ25lXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzNCNjBDNFwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN0cm9rZVdpZHRoID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwic3Ryb2tlV2lkdGhcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLDiXBhaXNzZXVyXCIsXHJcbiAgICAgICAgdmFsdWU6IDNcclxuICAgIH0pO1xyXG5cclxuICAgIHNob3dNYXJrZXJzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic2hvd01hcmtlcnNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsZXMgbWFycXVldXJzXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXJrZXJTaXplID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwibWFya2VyU2l6ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRhaWxsZSBkZXMgbWFycXVldXJzXCIsXHJcbiAgICAgICAgdmFsdWU6IDVcclxuICAgIH0pO1xyXG5cclxuICAgIGxpbmVTdHlsZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImxpbmVTdHlsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN0eWxlIGRlIGxpZ25lXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJzb2xpZFwiLCBkaXNwbGF5TmFtZTogXCJDb250aW51XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkYXNoZWRcIiwgZGlzcGxheU5hbWU6IFwiUG9pbnRpbGzDqXNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImRvdHRlZFwiLCBkaXNwbGF5TmFtZTogXCJQb2ludHNcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJzb2xpZFwiLCBkaXNwbGF5TmFtZTogXCJDb250aW51XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc3RlcHBlZCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInN0ZXBwZWRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJMaWduZSBlbiBlc2NhbGllclwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5saW5lQ29sb3IsIFxyXG4gICAgICAgIHRoaXMuc3Ryb2tlV2lkdGgsIFxyXG4gICAgICAgIHRoaXMubGluZVN0eWxlLFxyXG4gICAgICAgIHRoaXMuc2hvd01hcmtlcnMsIFxyXG4gICAgICAgIHRoaXMubWFya2VyU2l6ZSxcclxuICAgICAgICB0aGlzLnN0ZXBwZWRcclxuICAgIF07XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nLCBkZWZhdWx0Q29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XHJcbiAgICAgICAgdGhpcy5saW5lQ29sb3IudmFsdWUudmFsdWUgPSBkZWZhdWx0Q29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmljIEdyYWRpZW50IFNldHRpbmdzIENhcmRcclxuICovXHJcbmNsYXNzIEdyYWRpZW50U2V0dGluZ3NDYXJkIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBzaG93R3JhZGllbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93R3JhZGllbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsZSBkw6lncmFkw6lcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgZ3JhZGllbnRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiZ3JhZGllbnRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgZHUgZMOpZ3JhZMOpXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzNCNjBDNFwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGdyYWRpZW50SW50ZW5zaXR5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZ3JhZGllbnRJbnRlbnNpdHlcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJJbnRlbnNpdMOpICgwLTEpXCIsXHJcbiAgICAgICAgdmFsdWU6IDAuM1xyXG4gICAgfSk7XHJcblxyXG4gICAgZ3JhZGllbnREaXJlY3Rpb24gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJncmFkaWVudERpcmVjdGlvblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkRpcmVjdGlvblwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwidmVydGljYWxcIiwgZGlzcGxheU5hbWU6IFwiSGF1dCDihpIgQmFzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJ2ZXJ0aWNhbC1yZXZlcnNlXCIsIGRpc3BsYXlOYW1lOiBcIkJhcyDihpIgSGF1dFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiaG9yaXpvbnRhbFwiLCBkaXNwbGF5TmFtZTogXCJHYXVjaGUg4oaSIERyb2l0ZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiaG9yaXpvbnRhbC1yZXZlcnNlXCIsIGRpc3BsYXlOYW1lOiBcIkRyb2l0ZSDihpIgR2F1Y2hlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkaWFnb25hbFwiLCBkaXNwbGF5TmFtZTogXCJEaWFnb25hbGUg4oaYXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkaWFnb25hbC1yZXZlcnNlXCIsIGRpc3BsYXlOYW1lOiBcIkRpYWdvbmFsZSDihplcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJ2ZXJ0aWNhbFwiLCBkaXNwbGF5TmFtZTogXCJIYXV0IOKGkiBCYXNcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3dHcmFkaWVudCxcclxuICAgICAgICB0aGlzLmdyYWRpZW50Q29sb3IsIFxyXG4gICAgICAgIHRoaXMuZ3JhZGllbnRJbnRlbnNpdHksIFxyXG4gICAgICAgIHRoaXMuZ3JhZGllbnREaXJlY3Rpb25cclxuICAgIF07XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nLCBkZWZhdWx0Q29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XHJcbiAgICAgICAgdGhpcy5ncmFkaWVudENvbG9yLnZhbHVlLnZhbHVlID0gZGVmYXVsdENvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogWCBBeGlzIFNldHRpbmdzIENhcmRcclxuICovXHJcbmNsYXNzIFhBeGlzU2V0dGluZ3NDYXJkIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBzaG93ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic2hvd1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyIGwnYXhlIFhcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXhpc0NvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJheGlzQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDb3VsZXVyXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzY2NjY2NlwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRTaXplID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUYWlsbGUgZHUgdGV4dGVcIixcclxuICAgICAgICB2YWx1ZTogMTFcclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRGYW1pbHkgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRmFtaWxsZSBkZSBwb2xpY2VcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJBcmlhbFwiLCBkaXNwbGF5TmFtZTogXCJBcmlhbFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291cmllciBOZXdcIiwgZGlzcGxheU5hbWU6IFwiQ291cmllciBOZXdcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkdlb3JnaWFcIiwgZGlzcGxheU5hbWU6IFwiR2VvcmdpYVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiVmVyZGFuYVwiLCBkaXNwbGF5TmFtZTogXCJWZXJkYW5hXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiU2Vnb2UgVUlcIiwgZGlzcGxheU5hbWU6IFwiU2Vnb2UgVUlcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aXRsZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInRpdGxlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbGUgdGl0cmVcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRpdGxlVGV4dCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICBuYW1lOiBcInRpdGxlVGV4dFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHRlIGR1IHRpdHJlXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiVGl0cmUgZGUgbCdheGUgWFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcInhBeGlzU2V0dGluZ3NcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkF4ZSBYXCI7XHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3csXHJcbiAgICAgICAgdGhpcy5heGlzQ29sb3IsXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSxcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHksXHJcbiAgICAgICAgdGhpcy50aXRsZSxcclxuICAgICAgICB0aGlzLnRpdGxlVGV4dFxyXG4gICAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFkgQXhpcyBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBZQXhpc1NldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsJ2F4ZSBZXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGF4aXNDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYXhpc0NvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ291bGV1clwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiM2NjY2NjZcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGFpbGxlIGR1IHRleHRlXCIsXHJcbiAgICAgICAgdmFsdWU6IDExXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZhbWlsbGUgZGUgcG9saWNlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQXJpYWxcIiwgZGlzcGxheU5hbWU6IFwiQXJpYWxcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkNvdXJpZXIgTmV3XCIsIGRpc3BsYXlOYW1lOiBcIkNvdXJpZXIgTmV3XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJHZW9yZ2lhXCIsIGRpc3BsYXlOYW1lOiBcIkdlb3JnaWFcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlZlcmRhbmFcIiwgZGlzcGxheU5hbWU6IFwiVmVyZGFuYVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyIGxlIHRpdHJlXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aXRsZVRleHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZVRleHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0ZSBkdSB0aXRyZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlRpdHJlIGRlIGwnYXhlIFlcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlzcGxheVVuaXRzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZGlzcGxheVVuaXRzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVW5pdMOpcyBkJ2FmZmljaGFnZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMFwiLCBkaXNwbGF5TmFtZTogXCJBdXRvXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIxXCIsIGRpc3BsYXlOYW1lOiBcIkF1Y3VuXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIxMDAwXCIsIGRpc3BsYXlOYW1lOiBcIk1pbGxpZXJzIChLKVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMDAwMFwiLCBkaXNwbGF5TmFtZTogXCJNaWxsaW9ucyAoTSlcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDAwMDAwMDBcIiwgZGlzcGxheU5hbWU6IFwiTWlsbGlhcmRzIChNZHMpXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiMFwiLCBkaXNwbGF5TmFtZTogXCJBdXRvXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJlY2lzaW9uID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwicHJlY2lzaW9uXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRMOpY2ltYWxlc1wiLFxyXG4gICAgICAgIHZhbHVlOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VZQXhpc0JpcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInVzZVlBeGlzQmlzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgYXhlIFkgYmlzXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcInlBeGlzU2V0dGluZ3NcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkF4ZSBZXCI7XHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3csXHJcbiAgICAgICAgdGhpcy5heGlzQ29sb3IsXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSxcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHksXHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VW5pdHMsXHJcbiAgICAgICAgdGhpcy5wcmVjaXNpb24sXHJcbiAgICAgICAgdGhpcy50aXRsZSxcclxuICAgICAgICB0aGlzLnRpdGxlVGV4dCxcclxuICAgICAgICB0aGlzLnVzZVlBeGlzQmlzXHJcbiAgICBdO1xyXG59XHJcblxyXG4vKipcclxuICogR3JpZCBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBHcmlkU2V0dGluZ3NDYXJkIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBzaG93SG9yaXpvbnRhbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dIb3Jpem9udGFsXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiR3JpbGxlIGhvcml6b250YWxlXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHNob3dWZXJ0aWNhbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dWZXJ0aWNhbFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkdyaWxsZSB2ZXJ0aWNhbGVcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGdyaWRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiZ3JpZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ291bGV1ciBkZSBsYSBncmlsbGVcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZjBmMGYwXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZ3JpZFRoaWNrbmVzcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImdyaWRUaGlja25lc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLDiXBhaXNzZXVyXCIsXHJcbiAgICAgICAgdmFsdWU6IDFcclxuICAgIH0pO1xyXG5cclxuICAgIGdyaWRTdHlsZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImdyaWRTdHlsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN0eWxlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJzb2xpZFwiLCBkaXNwbGF5TmFtZTogXCJDb250aW51XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkYXNoZWRcIiwgZGlzcGxheU5hbWU6IFwiUG9pbnRpbGzDqXNcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJkYXNoZWRcIiwgZGlzcGxheU5hbWU6IFwiUG9pbnRpbGzDqXNcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImdyaWRTZXR0aW5nc1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiR3JpbGxlXCI7XHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3dIb3Jpem9udGFsLFxyXG4gICAgICAgIHRoaXMuc2hvd1ZlcnRpY2FsLFxyXG4gICAgICAgIHRoaXMuZ3JpZENvbG9yLFxyXG4gICAgICAgIHRoaXMuZ3JpZFRoaWNrbmVzcyxcclxuICAgICAgICB0aGlzLmdyaWRTdHlsZVxyXG4gICAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERhdGEgTGFiZWxzIFNldHRpbmdzIENhcmRcclxuICovXHJcbmNsYXNzIERhdGFMYWJlbHNDYXJkIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBzaG93ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic2hvd1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyIGxlcyDDqXRpcXVldHRlc1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImNvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ291bGV1clwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMwMDAwMDBcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGFpbGxlIGR1IHRleHRlXCIsXHJcbiAgICAgICAgdmFsdWU6IDlcclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRGYW1pbHkgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRmFtaWxsZSBkZSBwb2xpY2VcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJBcmlhbFwiLCBkaXNwbGF5TmFtZTogXCJBcmlhbFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291cmllciBOZXdcIiwgZGlzcGxheU5hbWU6IFwiQ291cmllciBOZXdcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRpc3BsYXlVbml0cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImRpc3BsYXlVbml0c1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlVuaXTDqXMgZCdhZmZpY2hhZ2VcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjBcIiwgZGlzcGxheU5hbWU6IFwiQXV0b1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMVwiLCBkaXNwbGF5TmFtZTogXCJBdWN1blwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMFwiLCBkaXNwbGF5TmFtZTogXCJNaWxsaWVycyAoSylcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDAwMDBcIiwgZGlzcGxheU5hbWU6IFwiTWlsbGlvbnMgKE0pXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIxMDAwMDAwMDAwXCIsIGRpc3BsYXlOYW1lOiBcIk1pbGxpYXJkcyAoTWRzKVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIjBcIiwgZGlzcGxheU5hbWU6IFwiQXV0b1wiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByZWNpc2lvbiA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInByZWNpc2lvblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkTDqWNpbWFsZXNcIixcclxuICAgICAgICB2YWx1ZTogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJkYXRhTGFiZWxzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCLDiXRpcXVldHRlcyBkZSBkb25uw6llc1wiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LFxyXG4gICAgICAgIHRoaXMuY29sb3IsXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSxcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHksXHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VW5pdHMsXHJcbiAgICAgICAgdGhpcy5wcmVjaXNpb25cclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMZWdlbmQgU2V0dGluZ3MgQ2FyZFxyXG4gKi9cclxuY2xhc3MgTGVnZW5kQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsYSBsw6lnZW5kZVwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwb3NpdGlvbiA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcInBvc2l0aW9uXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiUG9zaXRpb25cIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlRvcFwiLCBkaXNwbGF5TmFtZTogXCJIYXV0XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJCb3R0b21cIiwgZGlzcGxheU5hbWU6IFwiQmFzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJMZWZ0XCIsIGRpc3BsYXlOYW1lOiBcIkdhdWNoZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiUmlnaHRcIiwgZGlzcGxheU5hbWU6IFwiRHJvaXRlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJUb3BDZW50ZXJcIiwgZGlzcGxheU5hbWU6IFwiSGF1dCBjZW50cmVcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkJvdHRvbUNlbnRlclwiLCBkaXNwbGF5TmFtZTogXCJCYXMgY2VudHJlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiVG9wXCIsIGRpc3BsYXlOYW1lOiBcIkhhdXRcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXJcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjNjY2NjY2XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udFNpemUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRhaWxsZSBkdSB0ZXh0ZVwiLFxyXG4gICAgICAgIHZhbHVlOiAxMFxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udEZhbWlseSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGYW1pbGxlIGRlIHBvbGljZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiU2Vnb2UgVUlcIiwgZGlzcGxheU5hbWU6IFwiU2Vnb2UgVUlcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkFyaWFsXCIsIGRpc3BsYXlOYW1lOiBcIkFyaWFsXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJDb3VyaWVyIE5ld1wiLCBkaXNwbGF5TmFtZTogXCJDb3VyaWVyIE5ld1wiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJsZWdlbmRcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkzDqWdlbmRlXCI7XHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3csXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbixcclxuICAgICAgICB0aGlzLmZvbnRDb2xvcixcclxuICAgICAgICB0aGlzLmZvbnRTaXplLFxyXG4gICAgICAgIHRoaXMuZm9udEZhbWlseVxyXG4gICAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZpc3VhbCBzZXR0aW5ncyBtb2RlbCBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwge1xyXG4gICAgLy8gUGFsZXR0ZSBwYXIgZMOpZmF1dFxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0Q29sb3JzID0gW1wiIzNCNjBDNFwiLCBcIiNFOTRGMzdcIiwgXCIjNDRCQkE0XCIsIFwiI0Y3QjUzOFwiLCBcIiNEQjU0NjFcIiwgXCIjM0Y4OEM1XCIsIFwiIzdENEU1N1wiLCBcIiNENjY4NTNcIiwgXCIjMjEyRDQwXCIsIFwiIzExMTUxQ1wiXTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3MxID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3MxXCIsIFwiTGlnbmUgMVwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbMF0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczEgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzMVwiLCBcIkTDqWdyYWTDqSAxXCIsIHRoaXMuZGVmYXVsdENvbG9yc1swXSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzMiA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzMlwiLCBcIkxpZ25lIDJcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzFdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3MyID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczJcIiwgXCJEw6lncmFkw6kgMlwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbMV0pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczMgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczNcIiwgXCJMaWduZSAzXCIsIHRoaXMuZGVmYXVsdENvbG9yc1syXSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzMyA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3MzXCIsIFwiRMOpZ3JhZMOpIDNcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzJdKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3M0ID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3M0XCIsIFwiTGlnbmUgNFwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbM10pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczQgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzNFwiLCBcIkTDqWdyYWTDqSA0XCIsIHRoaXMuZGVmYXVsdENvbG9yc1szXSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzNSA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzNVwiLCBcIkxpZ25lIDVcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzRdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3M1ID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczVcIiwgXCJEw6lncmFkw6kgNVwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbNF0pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczYgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczZcIiwgXCJMaWduZSA2XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s1XSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzNiA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3M2XCIsIFwiRMOpZ3JhZMOpIDZcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzVdKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3M3ID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3M3XCIsIFwiTGlnbmUgN1wiLCB0aGlzLmRlZmF1bHRDb2xvcnNbNl0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczcgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzN1wiLCBcIkTDqWdyYWTDqSA3XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s2XSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzOCA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzOFwiLCBcIkxpZ25lIDhcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzddKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3M4ID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczhcIiwgXCJEw6lncmFkw6kgOFwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbN10pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczkgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczlcIiwgXCJMaWduZSA5XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s4XSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzOSA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3M5XCIsIFwiRMOpZ3JhZMOpIDlcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzhdKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3MxMCA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzMTBcIiwgXCJMaWduZSAxMFwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbOV0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczEwID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczEwXCIsIFwiRMOpZ3JhZMOpIDEwXCIsIHRoaXMuZGVmYXVsdENvbG9yc1s5XSk7XHJcblxyXG4gICAgeEF4aXNTZXR0aW5ncyA9IG5ldyBYQXhpc1NldHRpbmdzQ2FyZCgpO1xyXG4gICAgeUF4aXNTZXR0aW5ncyA9IG5ldyBZQXhpc1NldHRpbmdzQ2FyZCgpO1xyXG4gICAgZ3JpZFNldHRpbmdzID0gbmV3IEdyaWRTZXR0aW5nc0NhcmQoKTtcclxuICAgIGRhdGFMYWJlbHMgPSBuZXcgRGF0YUxhYmVsc0NhcmQoKTtcclxuICAgIGxlZ2VuZCA9IG5ldyBMZWdlbmRDYXJkKCk7XHJcblxyXG4gICAgY2FyZHMgPSBbXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3MxLCB0aGlzLmdyYWRpZW50U2V0dGluZ3MxLFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzMiwgdGhpcy5ncmFkaWVudFNldHRpbmdzMixcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczMsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczMsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3M0LCB0aGlzLmdyYWRpZW50U2V0dGluZ3M0LFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzNSwgdGhpcy5ncmFkaWVudFNldHRpbmdzNSxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczYsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczYsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3M3LCB0aGlzLmdyYWRpZW50U2V0dGluZ3M3LFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzOCwgdGhpcy5ncmFkaWVudFNldHRpbmdzOCxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczksIHRoaXMuZ3JhZGllbnRTZXR0aW5nczksXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3MxMCwgdGhpcy5ncmFkaWVudFNldHRpbmdzMTAsXHJcbiAgICAgICAgdGhpcy54QXhpc1NldHRpbmdzLFxyXG4gICAgICAgIHRoaXMueUF4aXNTZXR0aW5ncyxcclxuICAgICAgICB0aGlzLmdyaWRTZXR0aW5ncyxcclxuICAgICAgICB0aGlzLmRhdGFMYWJlbHMsXHJcbiAgICAgICAgdGhpcy5sZWdlbmRcclxuICAgIF07XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgcG93ZXJiaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xyXG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XHJcbmltcG9ydCBWaXN1YWxVcGRhdGVPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxVcGRhdGVPcHRpb25zO1xyXG5pbXBvcnQgSVZpc3VhbCA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuSVZpc3VhbDtcclxuaW1wb3J0IElTZWxlY3Rpb25JZCA9IHBvd2VyYmkudmlzdWFscy5JU2VsZWN0aW9uSWQ7XHJcbmltcG9ydCBJU2VsZWN0aW9uTWFuYWdlciA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS5JU2VsZWN0aW9uTWFuYWdlcjtcclxuaW1wb3J0IElWaXN1YWxMaWNlbnNlTWFuYWdlciA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS5JVmlzdWFsTGljZW5zZU1hbmFnZXI7XHJcbmltcG9ydCBMaWNlbnNlSW5mb1Jlc3VsdCA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuTGljZW5zZUluZm9SZXN1bHQ7XHJcbmltcG9ydCBTZXJ2aWNlUGxhbiA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuU2VydmljZVBsYW47XHJcbmltcG9ydCBTZXJ2aWNlUGxhblN0YXRlID0gcG93ZXJiaS5TZXJ2aWNlUGxhblN0YXRlO1xyXG5pbXBvcnQgTGljZW5zZU5vdGlmaWNhdGlvblR5cGUgPSBwb3dlcmJpLkxpY2Vuc2VOb3RpZmljYXRpb25UeXBlO1xyXG5cclxuaW1wb3J0IHsgVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcInBvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWxcIjtcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxlL3Zpc3VhbC5sZXNzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzdWFsIGltcGxlbWVudHMgSVZpc3VhbCB7XHJcbiAgICBwcml2YXRlIHRhcmdldDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN2ZzogU1ZHU1ZHRWxlbWVudDtcclxuICAgIHByaXZhdGUgbWFpbkdyb3VwOiBTVkdHRWxlbWVudDtcclxuICAgIHByaXZhdGUgYXhpc0dyb3VwOiBTVkdHRWxlbWVudDtcclxuICAgIHByaXZhdGUgbGluZXNHcm91cDogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHRvb2x0aXA6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgXHJcbiAgICAvLyBDYWNoZWQgY2FudmFzIGZvciB0ZXh0IG1lYXN1cmVtZW50ICh1c2VkIGZvciBsYWJlbCB0cnVuY2F0aW9uKVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2xhYmVsTWVhc3VyZUNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIFxyXG4gICAgLy8gTWFyZ2VzXHJcbiAgICBwcml2YXRlIG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDQwLCBib3R0b206IDQwLCBsZWZ0OiA2MCB9O1xyXG4gICAgXHJcbiAgICAvLyBTZXR0aW5nc1xyXG4gICAgcHJpdmF0ZSBmb3JtYXR0aW5nU2V0dGluZ3M6IFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsO1xyXG4gICAgcHJpdmF0ZSBmb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlOiBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xyXG4gICAgXHJcbiAgICAvLyBEcmlsbCBkb3duIHN1cHBvcnRcclxuICAgIHByaXZhdGUgaG9zdDogcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5JVmlzdWFsSG9zdDtcclxuICAgIHByaXZhdGUgc2VsZWN0aW9uTWFuYWdlcjogSVNlbGVjdGlvbk1hbmFnZXI7XHJcbiAgICBwcml2YXRlIGRhdGFWaWV3OiBwb3dlcmJpLkRhdGFWaWV3O1xyXG4gICAgXHJcbiAgICAvLyBMaWNlbnNpbmcgYXZlYyBsJ0FQSSBvZmZpY2llbGxlIE1pY3Jvc29mdCBQb3dlciBCSVxyXG4gICAgcHJpdmF0ZSBsaWNlbnNlTWFuYWdlcjogSVZpc3VhbExpY2Vuc2VNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlclZhbGlkUGxhbnM6IFNlcnZpY2VQbGFuW10gfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGhhc1NlcnZpY2VQbGFuczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnY6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGlzTm90aWZpY2F0aW9uRGlzcGxheWVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGRlZmF1bHROb3RpZmljYXRpb25UeXBlOiBMaWNlbnNlTm90aWZpY2F0aW9uVHlwZSA9IExpY2Vuc2VOb3RpZmljYXRpb25UeXBlLkdlbmVyYWw7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBvcHRpb25zLmVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gb3B0aW9ucy5ob3N0O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlciA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlID0gbmV3IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcblxyXG4gICAgICAgIC8vIDEuIENyw6lhdGlvbiBkdSBTVkdcclxuICAgICAgICBjb25zdCBucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuICAgICAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJzdmdcIik7XHJcbiAgICAgICAgdGhpcy5zdmcuY2xhc3NMaXN0LmFkZChcImNoYXJ0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLnRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLnN2Zyk7XHJcblxyXG4gICAgICAgIC8vIDIuIFRvb2x0aXBcclxuICAgICAgICB0aGlzLnRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5jbGFzc05hbWUgPSBcImN1c3RvbS10b29sdGlwXCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwgMCwgMCwgMC44KVwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUucGFkZGluZyA9IFwiOHB4IDEycHhcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI0cHhcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy50b29sdGlwKTtcclxuXHJcbiAgICAgICAgLy8gMy4gRGVmcyBwb3VyIGxlcyBkw6lncmFkw6lzXHJcbiAgICAgICAgY29uc3QgZGVmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJkZWZzXCIpO1xyXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGRlZnMpO1xyXG5cclxuICAgICAgICAvLyA0LiBHcm91cGVzXHJcbiAgICAgICAgdGhpcy5tYWluR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZ1wiKTtcclxuICAgICAgICB0aGlzLmF4aXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJnXCIpO1xyXG4gICAgICAgIHRoaXMubGluZXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJnXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWFpbkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYXhpc0dyb3VwKTtcclxuICAgICAgICB0aGlzLm1haW5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmxpbmVzR3JvdXApO1xyXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHRoaXMubWFpbkdyb3VwKTtcclxuXHJcbiAgICAgICAgLy8gUGVybWV0dHJlIGxlIGNvbnRleHQgbWVudSAoY2xpYyBkcm9pdCkgc3VyIHRvdXQgbGUgdmlzdWVsXHJcbiAgICAgICAgdGhpcy5zdmcuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50IGFzIE1vdXNlRXZlbnQ7XHJcbiAgICAgICAgICAgIC8vIEFmZmljaGVyIGxlIG1lbnUgY29udGV4dHVlbCBQb3dlciBCSSBhdmVjIGxlcyBvcHRpb25zIHN0YW5kYXJkXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zaG93Q29udGV4dE1lbnUoe30sIHtcclxuICAgICAgICAgICAgICAgIHg6IG1vdXNlRXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgIHk6IG1vdXNlRXZlbnQuY2xpZW50WVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRMOpc8OpbGVjdGlvbm5lciBsb3JzIGQndW4gY2xpYyBzdXIgbGUgZm9uZFxyXG4gICAgICAgIHRoaXMuc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbml0aWFsaXNlciBsZSBnZXN0aW9ubmFpcmUgZGUgbGljZW5jZXMgKEFQSSBvZmZpY2llbGxlIE1pY3Jvc29mdCBQb3dlciBCSSlcclxuICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyID0gdGhpcy5ob3N0LmxpY2Vuc2VNYW5hZ2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBwbGFucyBkZSBzZXJ2aWNlIGRlIGxpY2VuY2VcclxuICAgICAgICB0aGlzLnJldHJpZXZlTGljZW5zZUluZm8oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSw6ljdXDDqHJlIGxlcyBpbmZvcm1hdGlvbnMgZGUgbGljZW5jZSBkZSBsJ3V0aWxpc2F0ZXVyIHZpYSBsJ0FQSSBvZmZpY2llbGxlIFBvd2VyIEJJXHJcbiAgICAgKiBVdGlsaXNlIGdldEF2YWlsYWJsZVNlcnZpY2VQbGFucygpIHBvdXIgb2J0ZW5pciBsZXMgcGxhbnMgZGUgc2VydmljZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJldHJpZXZlTGljZW5zZUluZm8oKSB7XHJcbiAgICAgICAgLy8g8J+UkyBNT0RFIETDiVZFTE9QUEVNRU5UIDogRMOpc2FjdGl2ZXIgY29tcGzDqHRlbWVudCBsYSB2w6lyaWZpY2F0aW9uIGRlIGxpY2VuY2VcclxuICAgICAgICAvLyBEw6ljb21tZW50ZXogbGEgbGlnbmUgc3VpdmFudGUgcG91ciBhY3RpdmVyIGxlIHN5c3TDqG1lIGRlIGxpY2Vuc2luZyBlbiBwcm9kdWN0aW9uXHJcbiAgICAgICAgLy90aGlzLmNoZWNrTGljZW5zZUluUHJvZHVjdGlvbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEVuIG1vZGUgZMOpdmVsb3BwZW1lbnQsIHRvdWpvdXJzIGNvbnNpZMOpcmVyIHF1ZSBsYSBsaWNlbmNlIGVzdCB2YWxpZGVcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCflJMgTW9kZSBkw6l2ZWxvcHBlbWVudCA6IFbDqXJpZmljYXRpb24gZGUgbGljZW5jZSBkw6lzYWN0aXbDqWVcIik7XHJcbiAgICAgICAgdGhpcy5oYXNTZXJ2aWNlUGxhbnMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBWw6lyaWZpZSBsZXMgbGljZW5jZXMgZW4gbW9kZSBwcm9kdWN0aW9uIChBcHBTb3VyY2UpXHJcbiAgICAgKiBDZXR0ZSBtw6l0aG9kZSBkb2l0IMOqdHJlIGFwcGVsw6llIHVuaXF1ZW1lbnQgYXByw6hzIHB1YmxpY2F0aW9uIHN1ciBBcHBTb3VyY2VcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja0xpY2Vuc2VJblByb2R1Y3Rpb24oKSB7XHJcbiAgICAgICAgLy8g8J+nqiBNT0RFIFRFU1QgOiBEw6ljb21tZW50ZXogbGVzIGxpZ25lcyBzdWl2YW50ZXMgcG91ciBzaW11bGVyIHVuIGVudmlyb25uZW1lbnQgc2FucyBsaWNlbmNlXHJcbiAgICAgICAgLy8gdGhpcy5pc0xpY2Vuc2VVbnN1cHBvcnRlZEVudiA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5ub3RpZnlMaWNlbnNlU3RhdHVzKCk7XHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIPCfp6ogTU9ERSBURVNUIDogRMOpY29tbWVudGV6IGxlcyBsaWduZXMgc3VpdmFudGVzIHBvdXIgc2ltdWxlciB1bmUgbGljZW5jZSBtYW5xdWFudGVcclxuICAgICAgICAvLyB0aGlzLmhhc1NlcnZpY2VQbGFucyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLm5vdGlmeUxpY2Vuc2VTdGF0dXMoKTtcclxuICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLmxpY2Vuc2VNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4oS577iPIEdlc3Rpb25uYWlyZSBkZSBsaWNlbmNlcyBub24gZGlzcG9uaWJsZSAtIG1vZGUgRGVza3RvcC9EZXZcIik7XHJcbiAgICAgICAgICAgIC8vIEVuIG1vZGUgZMOpdmVsb3BwZW1lbnQsIGNvbnNpZMOpcmVyIHF1ZSBsYSBsaWNlbmNlIGVzdCB2YWxpZGVcclxuICAgICAgICAgICAgdGhpcy5oYXNTZXJ2aWNlUGxhbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTGljZW5zZVVuc3VwcG9ydGVkRW52ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUsOpY3Vww6lyZXIgbGVzIHBsYW5zIGRlIHNlcnZpY2UgZGlzcG9uaWJsZXMgcG91ciBjZXQgdXRpbGlzYXRldXJcclxuICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyLmdldEF2YWlsYWJsZVNlcnZpY2VQbGFucygpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IExpY2Vuc2VJbmZvUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBsYW5zLCBpc0xpY2Vuc2VVbnN1cHBvcnRlZEVudiwgaXNMaWNlbnNlSW5mb0F2YWlsYWJsZSB9ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCflJEgSW5mb3JtYXRpb25zIGRlIGxpY2VuY2UgcsOpY3Vww6lyw6llczpcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5zLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTGljZW5zZVVuc3VwcG9ydGVkRW52LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTGljZW5zZUluZm9BdmFpbGFibGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMaWNlbnNlSW5mb0F2YWlsYWJsZSAmJiAhaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGaWx0cmVyIHVuaXF1ZW1lbnQgbGVzIHBsYW5zIGFjdGlmc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJWYWxpZFBsYW5zID0gcGxhbnM/LmZpbHRlcigoeyBzdGF0ZSwgc3BJZGVudGlmaWVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVsOpcmlmaWVyIHF1ZSBjJ2VzdCBiaWVuIHVuIGRlIFZPUyBwbGFuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxpZElkZW50aWZpZXJzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXN0b210YWJsZXBsYW5cIiAgIC8vIOKGkCBSZW1wbGFjZXIgcGFyIHZvdHJlIHZyYWkgSURcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZElkZW50aWZpZXJzLmluY2x1ZGVzKHNwSWRlbnRpZmllcikgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUgPT09IFNlcnZpY2VQbGFuU3RhdGUuQWN0aXZlIHx8IHN0YXRlID09PSBTZXJ2aWNlUGxhblN0YXRlLldhcm5pbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU2VydmljZVBsYW5zID0gISF0aGlzLmN1cnJlbnRVc2VyVmFsaWRQbGFucz8ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc1NlcnZpY2VQbGFucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg4pyFICR7dGhpcy5jdXJyZW50VXNlclZhbGlkUGxhbnMubGVuZ3RofSBwbGFuKHMpIGRlIHNlcnZpY2UgdmFsaWRlKHMpIHRyb3V2w6kocylgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLimqDvuI8gQXVjdW4gcGxhbiBkZSBzZXJ2aWNlIHZhbGlkZSB0cm91dsOpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xpY2Vuc2VVbnN1cHBvcnRlZEVudiA9IGlzTGljZW5zZVVuc3VwcG9ydGVkRW52O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBZmZpY2hlciBsZXMgbm90aWZpY2F0aW9ucyBhcHByb3ByacOpZXNcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5TGljZW5zZVN0YXR1cygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi4p2MIEVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBsaWNlbmNlczpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgLy8gRW4gY2FzIGQnZXJyZXVyLCBuZSBwYXMgYmxvcXVlciBsZSB2aXN1ZWwgZW4gbW9kZSBkZXZcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJWYWxpZFBsYW5zID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNTZXJ2aWNlUGxhbnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEFmZmljaGUgbGVzIG5vdGlmaWNhdGlvbnMgZGUgbGljZW5jZSBhcHByb3ByacOpZXMgc2Vsb24gbGUgc3RhdHV0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbm90aWZ5TGljZW5zZVN0YXR1cygpIHtcclxuICAgICAgICAvLyBFZmZhY2VyIHRvdXRlIG5vdGlmaWNhdGlvbiBwcsOpY8OpZGVudGVcclxuICAgICAgICBpZiAodGhpcy5saWNlbnNlTWFuYWdlcikge1xyXG4gICAgICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyLmNsZWFyTGljZW5zZU5vdGlmaWNhdGlvbigpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coXCJFcnJldXIgbG9ycyBkdSBuZXR0b3lhZ2UgZGVzIG5vdGlmaWNhdGlvbnM6XCIsIGVycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBTaSBsJ2Vudmlyb25uZW1lbnQgbmUgc3VwcG9ydGUgcGFzIGxlcyBsaWNlbmNlc1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGljZW5zZVVuc3VwcG9ydGVkRW52KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Vuc3VwcG9ydGVkRW52Tm90aWZpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2kgYXVjdW4gcGxhbiBkZSBzZXJ2aWNlIHZhbGlkZSBuJ2VzdCB0cm91dsOpXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzU2VydmljZVBsYW5zID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMaWNlbnNlUmVxdWlyZWROb3RpZmljYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBTaSBvbiBhIGRlcyBwbGFucyB2YWxpZGVzLCBuZSByaWVuIGFmZmljaGVyXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzU2VydmljZVBsYW5zID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNOb3RpZmljYXRpb25EaXNwbGF5ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUgTGljZW5jZSB2YWxpZGUgLSBWaXN1ZWwgZm9uY3Rpb25uZWxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEFmZmljaGUgbGEgbm90aWZpY2F0aW9uIHBvdXIgZW52aXJvbm5lbWVudCBub24gc3VwcG9ydMOpXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2hvd1Vuc3VwcG9ydGVkRW52Tm90aWZpY2F0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saWNlbnNlTWFuYWdlciB8fCB0aGlzLmlzTm90aWZpY2F0aW9uRGlzcGxheWVkKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5saWNlbnNlTWFuYWdlci5ub3RpZnlMaWNlbnNlUmVxdWlyZWQoTGljZW5zZU5vdGlmaWNhdGlvblR5cGUuVW5zdXBwb3J0ZWRFbnYpXHJcbiAgICAgICAgICAgIC50aGVuKChkaXNwbGF5ZWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNOb3RpZmljYXRpb25EaXNwbGF5ZWQgPSBkaXNwbGF5ZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzcGxheWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5OiIE5vdGlmaWNhdGlvbiBhZmZpY2jDqWUgOiBFbnZpcm9ubmVtZW50IG5vbiBzdXBwb3J0w6lcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdhZmZpY2hhZ2UgZGUgbGEgbm90aWZpY2F0aW9uOlwiLCBlcnIpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBBZmZpY2hlIGxhIG5vdGlmaWNhdGlvbiBwb3VyIGxpY2VuY2UgcmVxdWlzZVxyXG4gICAgICogUGV1dCB1dGlsaXNlciBHZW5lcmFsIChpY8O0bmUpIG91IFZpc3VhbElzQmxvY2tlZCAob3ZlcmxheSBjb21wbGV0KVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNob3dMaWNlbnNlUmVxdWlyZWROb3RpZmljYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpY2Vuc2VNYW5hZ2VyIHx8IHRoaXMuaXNOb3RpZmljYXRpb25EaXNwbGF5ZWQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBVdGlsaXNlciBWaXN1YWxJc0Jsb2NrZWQgcG91ciBibG9xdWVyIGNvbXBsw6h0ZW1lbnQgbGUgdmlzdWVsXHJcbiAgICAgICAgLy8gT3UgdXRpbGlzZXIgR2VuZXJhbCBwb3VyIGFmZmljaGVyIHVuaXF1ZW1lbnQgdW5lIGljw7RuZVxyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvblR5cGUgPSBMaWNlbnNlTm90aWZpY2F0aW9uVHlwZS5WaXN1YWxJc0Jsb2NrZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5saWNlbnNlTWFuYWdlci5ub3RpZnlMaWNlbnNlUmVxdWlyZWQobm90aWZpY2F0aW9uVHlwZSlcclxuICAgICAgICAgICAgLnRoZW4oKGRpc3BsYXllZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc05vdGlmaWNhdGlvbkRpc3BsYXllZCA9IGRpc3BsYXllZDtcclxuICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfk6IgTm90aWZpY2F0aW9uIGFmZmljaMOpZSA6IExpY2VuY2UgcmVxdWlzZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2FmZmljaGFnZSBkZSBsYSBub3RpZmljYXRpb246XCIsIGVycikpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEFmZmljaGUgdW5lIG5vdGlmaWNhdGlvbiBwb3VyIHVuZSBmb25jdGlvbm5hbGl0w6kgYmxvcXXDqWVcclxuICAgICAqIEBwYXJhbSBmZWF0dXJlTmFtZSBOb20gZGUgbGEgZm9uY3Rpb25uYWxpdMOpIGJsb3F1w6llXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbm90aWZ5RmVhdHVyZUJsb2NrZWQoZmVhdHVyZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5saWNlbnNlTWFuYWdlcikgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENyw6llciB1biBtZXNzYWdlIGQnaW5mby1idWxsZSBwZXJzb25uYWxpc8OpXHJcbiAgICAgICAgY29uc3QgdG9vbHRpcCA9IGBMYSBmb25jdGlvbm5hbGl0w6kgXCIke2ZlYXR1cmVOYW1lfVwiIG7DqWNlc3NpdGUgdW5lIGxpY2VuY2UgdmFsaWRlLmA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5saWNlbnNlTWFuYWdlci5ub3RpZnlGZWF0dXJlQmxvY2tlZCh0b29sdGlwKVxyXG4gICAgICAgICAgICAudGhlbigoZGlzcGxheWVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzcGxheWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYPCfk6IgRm9uY3Rpb25uYWxpdMOpIGJsb3F1w6llIDogJHtmZWF0dXJlTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2FmZmljaGFnZSBkZSBsYSBub3RpZmljYXRpb246XCIsIGVycikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1Rvb2x0aXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgICAgIC8vIE5ldHRveWVyIGxlIGNvbnRlbnUgcHLDqWPDqWRlbnRcclxuICAgICAgICB3aGlsZSAodGhpcy50b29sdGlwLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy50b29sdGlwLnJlbW92ZUNoaWxkKHRoaXMudG9vbHRpcC5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIETDqWNvdXBlciBsZSBjb250ZW51IGVuIGxpZ25lcyAoc3VwcG9zZSBsZSBmb3JtYXQgXCI8ZGl2Pi4uLjwvZGl2PjxkaXY+Li4uPC9kaXY+XCIpXHJcbiAgICAgICAgLy8gT24gZXh0cmFpdCBsZSB0ZXh0ZSBlbnRyZSBsZXMgYmFsaXNlcyA8ZGl2Pi4uLjwvZGl2PlxyXG4gICAgICAgIGNvbnN0IGRpdlJlZ2V4ID0gLzxkaXZbXj5dKj4oLio/KTxcXC9kaXY+L2c7XHJcbiAgICAgICAgbGV0IG1hdGNoO1xyXG4gICAgICAgIHdoaWxlICgobWF0Y2ggPSBkaXZSZWdleC5leGVjKGNvbnRlbnQpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAvLyBTaSBsZSBjb250ZW51IGNvbnRpZW50IDxzdHJvbmc+Li4uPC9zdHJvbmc+LCBvbiBsZSBnw6hyZSBhdXNzaVxyXG4gICAgICAgICAgICBjb25zdCBzdHJvbmdSZWdleCA9IC88c3Ryb25nW14+XSo+KC4qPyk8XFwvc3Ryb25nPi87XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cm9uZ01hdGNoID0gc3Ryb25nUmVnZXguZXhlYyhtYXRjaFsxXSk7XHJcbiAgICAgICAgICAgIGlmIChzdHJvbmdNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb25nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtcclxuICAgICAgICAgICAgICAgIHN0cm9uZy50ZXh0Q29udGVudCA9IHN0cm9uZ01hdGNoWzFdO1xyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN0cm9uZyk7XHJcbiAgICAgICAgICAgICAgICAvLyBBam91dGUgbGUgcmVzdGUgZHUgdGV4dGUgYXByw6hzIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWZ0ZXJTdHJvbmcgPSBtYXRjaFsxXS5yZXBsYWNlKHN0cm9uZ1JlZ2V4LCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChhZnRlclN0cm9uZy50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYWZ0ZXJTdHJvbmcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IG1hdGNoWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmxlZnQgPSAoeCArIDEwKSArIFwicHhcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUudG9wID0gKHkgKyAxMCkgKyBcInB4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlVG9vbHRpcCgpIHtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmljZVN0ZXAobWF4VmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKG1heFZhbHVlID09PSAwKSByZXR1cm4gMTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBEw6l0ZXJtaW5lciBsJ29yZHJlIGRlIGdyYW5kZXVyXHJcbiAgICAgICAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKG1heFZhbHVlKSk7XHJcbiAgICAgICAgY29uc3QgcG93ZXJPZjEwID0gTWF0aC5wb3coMTAsIG1hZ25pdHVkZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gR2FtbWUgZGUgbXVsdGlwbGljYXRldXJzIHBvdXIgYXZvaXIgZGVzIGRpdmlzaW9ucyBcInByb3ByZXNcIlxyXG4gICAgICAgIGNvbnN0IG11bHRpcGxpZXJzID0gWzEsIDIsIDIuNSwgNSwgMTBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE5vbWJyZSBkZSBkaXZpc2lvbnMgc291aGFpdMOpZXNcclxuICAgICAgICBjb25zdCBtaW5UaWNrcyA9IDQ7XHJcbiAgICAgICAgY29uc3QgbWF4VGlja3MgPSA4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFRlc3RlciBjaGFxdWUgbXVsdGlwbGljYXRldXJcclxuICAgICAgICBmb3IgKGxldCBtdWx0IG9mIG11bHRpcGxpZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBtdWx0ICogcG93ZXJPZjEwO1xyXG4gICAgICAgICAgICBjb25zdCB0aWNrcyA9IE1hdGguY2VpbChtYXhWYWx1ZSAvIHN0ZXApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRpY2tzID49IG1pblRpY2tzICYmIHRpY2tzIDw9IG1heFRpY2tzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RlcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBTaSBhdWN1biBuZSBjb252aWVudCwgcmV0b3VybmVyIHBvd2VyT2YxMFxyXG4gICAgICAgIHJldHVybiBwb3dlck9mMTA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShvcHRpb25zOiBWaXN1YWxVcGRhdGVPcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVsOpcmlmaWVyIGxlIHN0YXR1dCBkZSBsYSBsaWNlbmNlXHJcbiAgICAgICAgLy8gU2kgYXVjdW4gcGxhbiBkZSBzZXJ2aWNlIHZhbGlkZSwgbGUgc3lzdMOobWUgZGUgbm90aWZpY2F0aW9uIFBvd2VyIEJJIGfDqHJlIGwnYWZmaWNoYWdlXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzU2VydmljZVBsYW5zID09PSBmYWxzZSB8fCB0aGlzLmlzTGljZW5zZVVuc3VwcG9ydGVkRW52ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIE5ldHRveWVyIGxlIHZpc3VlbFxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5heGlzR3JvdXAuZmlyc3RDaGlsZCkgdGhpcy5heGlzR3JvdXAucmVtb3ZlQ2hpbGQodGhpcy5heGlzR3JvdXAuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxpbmVzR3JvdXAuZmlyc3RDaGlsZCkgdGhpcy5saW5lc0dyb3VwLnJlbW92ZUNoaWxkKHRoaXMubGluZXNHcm91cC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIG9wdGlvbnMudmlld3BvcnQud2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBvcHRpb25zLnZpZXdwb3J0LmhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIExlcyBub3RpZmljYXRpb25zIHNvbnQgZ8OpcsOpZXMgcGFyIGxlIHN5c3TDqG1lIFBvd2VyIEJJIHZpYSBub3RpZnlMaWNlbnNlUmVxdWlyZWQoKVxyXG4gICAgICAgICAgICAvLyBQYXMgYmVzb2luIGQnYWZmaWNoZXIgZGUgbWVzc2FnZSBwZXJzb25uYWxpc8OpIGljaVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEEuIFLDqWN1cMOpcmF0aW9uIGRlcyBkb25uw6llc1xyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gb3B0aW9ucy5kYXRhVmlld3NbMF07XHJcbiAgICAgICAgaWYgKCFkYXRhVmlldyB8fCAhZGF0YVZpZXcuY2F0ZWdvcmljYWwpIHJldHVybjtcclxuICAgICAgICBpZiAoIWRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXMgfHwgIWRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlcykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFWaWV3ID0gZGF0YVZpZXc7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlDb2x1bW5zID0gZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllcztcclxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3J5Q29sdW1uc1swXTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UucG9wdWxhdGVGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbChWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCwgb3B0aW9ucy5kYXRhVmlld3NbMF0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIG9wdGlvbnMudmlld3BvcnQud2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIG9wdGlvbnMudmlld3BvcnQuaGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBjYXRzID0gY2F0ZWdvcnlDb2x1bW5zWzBdLnZhbHVlcztcclxuICAgICAgICBjb25zdCBhbGxTZXJpZXMgPSBkYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXM7XHJcblxyXG4gICAgICAgIC8vIFBhcmFtw6h0cmVzIGfDqW7DqXJhdXhcclxuICAgICAgICBjb25zdCBzaG93WEF4aXMgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy54QXhpc1NldHRpbmdzLnNob3cudmFsdWU7XHJcbiAgICAgICAgY29uc3QgeEF4aXNDb2xvciA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnhBeGlzU2V0dGluZ3MuYXhpc0NvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHhBeGlzRm9udFNpemUgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy54QXhpc1NldHRpbmdzLmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHhBeGlzRm9udEZhbWlseSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnhBeGlzU2V0dGluZ3MuZm9udEZhbWlseS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNob3dZQXhpcyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3Muc2hvdy52YWx1ZTtcclxuICAgICAgICBjb25zdCB5QXhpc0NvbG9yID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueUF4aXNTZXR0aW5ncy5heGlzQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgeUF4aXNGb250U2l6ZSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3MuZm9udFNpemUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgeUF4aXNGb250RmFtaWx5ID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueUF4aXNTZXR0aW5ncy5mb250RmFtaWx5LnZhbHVlLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgeUF4aXNEaXNwbGF5VW5pdHMgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy55QXhpc1NldHRpbmdzLmRpc3BsYXlVbml0cy52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzUHJlY2lzaW9uID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueUF4aXNTZXR0aW5ncy5wcmVjaXNpb24udmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dIb3Jpem9udGFsR3JpZCA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmdyaWRTZXR0aW5ncy5zaG93SG9yaXpvbnRhbC52YWx1ZTtcclxuICAgICAgICBjb25zdCBzaG93VmVydGljYWxHcmlkID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLnNob3dWZXJ0aWNhbC52YWx1ZTtcclxuICAgICAgICBjb25zdCBncmlkQ29sb3IgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5ncmlkU2V0dGluZ3MuZ3JpZENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGdyaWRUaGlja25lc3MgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5ncmlkU2V0dGluZ3MuZ3JpZFRoaWNrbmVzcy52YWx1ZTtcclxuICAgICAgICBjb25zdCBncmlkU3R5bGUgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5ncmlkU2V0dGluZ3MuZ3JpZFN0eWxlLnZhbHVlLnZhbHVlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dMZWdlbmQgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmQuc2hvdy52YWx1ZTtcclxuICAgICAgICBjb25zdCBsZWdlbmRQb3NpdGlvbiA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmxlZ2VuZC5wb3NpdGlvbi52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IGxlZ2VuZEZvbnRDb2xvciA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmxlZ2VuZC5mb250Q29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbGVnZW5kRm9udFNpemUgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmQuZm9udFNpemUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbGVnZW5kRm9udEZhbWlseSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmxlZ2VuZC5mb250RmFtaWx5LnZhbHVlLnZhbHVlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIEIuIENhbGN1bCBkZXMgZGltZW5zaW9uc1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy52aWV3cG9ydC53aWR0aDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBvcHRpb25zLnZpZXdwb3J0LmhlaWdodDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSw6lpbml0aWFsaXNlciBsZXMgbWFyZ2VzIMOgIGNoYXF1ZSB1cGRhdGUgcG91ciDDqXZpdGVyIGwnYWNjdW11bGF0aW9uXHJcbiAgICAgICAgdGhpcy5tYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA0MCwgYm90dG9tOiA0MCwgbGVmdDogNjAgfTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbGVnZW5kSGVpZ2h0ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoc2hvd0xlZ2VuZCAmJiAobGVnZW5kUG9zaXRpb24gPT09IFwiVG9wXCIgfHwgbGVnZW5kUG9zaXRpb24gPT09IFwiVG9wQ2VudGVyXCIpKSB7XHJcbiAgICAgICAgICAgIGxlZ2VuZEhlaWdodCA9IDMwO1xyXG4gICAgICAgICAgICB0aGlzLm1hcmdpbi50b3AgPSAyMCArIGxlZ2VuZEhlaWdodDtcclxuICAgICAgICB9IGVsc2UgaWYgKHNob3dMZWdlbmQgJiYgKGxlZ2VuZFBvc2l0aW9uID09PSBcIkJvdHRvbVwiIHx8IGxlZ2VuZFBvc2l0aW9uID09PSBcIkJvdHRvbUNlbnRlclwiKSkge1xyXG4gICAgICAgICAgICBsZWdlbmRIZWlnaHQgPSAzMDtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4uYm90dG9tID0gNDAgKyBsZWdlbmRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBanVzdGVtZW50IHBvdXIgbGVzIGxhYmVscyByb3TDqXMgw6AgNDXCsCAodG91am91cnMgYXBwbGlxdcOpIG1haW50ZW5hbnQpXHJcbiAgICAgICAgdGhpcy5tYXJnaW4uYm90dG9tICs9IDMwO1xyXG5cclxuICAgICAgICAvLyBBanVzdGVtZW50IGR5bmFtaXF1ZSBkZSBsYSBtYXJnZSBiYXNzZSBzaSBvbiBhIDMgbml2ZWF1eCBvdSBwbHVzIChwb3VyIGFmZmljaGVyIEFubsOpZS9Nb2lzL0pvdXIpXHJcbiAgICAgICAgaWYgKGNhdGVnb3J5Q29sdW1ucy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luLmJvdHRvbSArPSAyNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRyYXdXID0gd2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgZHJhd0ggPSBoZWlnaHQgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XHJcbiAgICAgICAgY29uc3QgZ2V0WVBvcyA9ICh2YWw6IG51bWJlcikgPT4gZHJhd0ggLSAoKHZhbCAtIG5pY2VNaW4pIC8gKG5pY2VNYXggLSBuaWNlTWluKSAqIGRyYXdIKTtcclxuXHJcbiAgICAgICAgLy8gQy4gQ0FMQ1VMIMOJQ0hFTExFIFkgR0xPQkFMRSAoQmFzw6kgc3VyIGxlIE1JTiBldCBNQVggZGUgVE9VVEVTIGxlcyBzw6lyaWVzKVxyXG4gICAgICAgIGxldCBnbG9iYWxNYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XHJcbiAgICAgICAgbGV0IGdsb2JhbE1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcclxuICAgICAgICBhbGxTZXJpZXMuZm9yRWFjaChzZXJpZXMgPT4ge1xyXG4gICAgICAgICAgICBzZXJpZXMudmFsdWVzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBOdW1iZXIodik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID4gZ2xvYmFsTWF4KSBnbG9iYWxNYXggPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA8IGdsb2JhbE1pbikgZ2xvYmFsTWluID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2kgdG91dCBlc3QgTmFOLCBmYWxsYmFjayDDoCAwXHJcbiAgICAgICAgaWYgKCFpc0Zpbml0ZShnbG9iYWxNYXgpKSBnbG9iYWxNYXggPSAwO1xyXG4gICAgICAgIGlmICghaXNGaW5pdGUoZ2xvYmFsTWluKSkgZ2xvYmFsTWluID0gMDtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsIGR1IHN0ZXBcclxuICAgICAgICBjb25zdCBhYnNNYXggPSBNYXRoLm1heChNYXRoLmFicyhnbG9iYWxNYXgpLCBNYXRoLmFicyhnbG9iYWxNaW4pKTtcclxuICAgICAgICBjb25zdCBzdGVwU2l6ZSA9IHRoaXMuZ2V0TmljZVN0ZXAoYWJzTWF4KTtcclxuXHJcbiAgICAgICAgLy8gQm9ybmVzIFwicHJvcHJlc1wiXHJcbiAgICAgICAgbGV0IG5pY2VNaW4gPSBNYXRoLmZsb29yKGdsb2JhbE1pbiAvIHN0ZXBTaXplKSAqIHN0ZXBTaXplO1xyXG4gICAgICAgIGxldCBuaWNlTWF4ID0gTWF0aC5jZWlsKGdsb2JhbE1heCAvIHN0ZXBTaXplKSAqIHN0ZXBTaXplO1xyXG4gICAgICAgIGlmIChuaWNlTWluID09PSBuaWNlTWF4KSB7XHJcbiAgICAgICAgICAgIC8vIENhcyBwbGF0XHJcbiAgICAgICAgICAgIG5pY2VNaW4gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKG5pY2VNYXggLSBuaWNlTWluKSAvIHN0ZXBTaXplID4gMTApIHtcclxuICAgICAgICAgICAgbmljZU1heCA9IG5pY2VNaW4gKyBzdGVwU2l6ZSAqIDEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRC4gREVTU0lOXHJcbiAgICAgICAgdGhpcy5tYWluR3JvdXAuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt0aGlzLm1hcmdpbi5sZWZ0fSwgJHt0aGlzLm1hcmdpbi50b3B9KWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE5ldHRveWFnZVxyXG4gICAgICAgIHdoaWxlICh0aGlzLmF4aXNHcm91cC5maXJzdENoaWxkKSB0aGlzLmF4aXNHcm91cC5yZW1vdmVDaGlsZCh0aGlzLmF4aXNHcm91cC5maXJzdENoaWxkKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5saW5lc0dyb3VwLmZpcnN0Q2hpbGQpIHRoaXMubGluZXNHcm91cC5yZW1vdmVDaGlsZCh0aGlzLmxpbmVzR3JvdXAuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3RvckFsbChcIi5jdXN0b20tbWFya2VyXCIpLmZvckVhY2gobSA9PiBtLnJlbW92ZSgpKTtcclxuICAgICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1c3RvbS1kYXRhbGFiZWxcIikuZm9yRWFjaChsID0+IGwucmVtb3ZlKCkpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VzdG9tLWhvdmVyXCIpLmZvckVhY2goaCA9PiBoLnJlbW92ZSgpKTtcclxuICAgICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yQWxsKFwiLmxlZ2VuZFwiKS5mb3JFYWNoKGwgPT4gbC5yZW1vdmUoKSk7XHJcblxyXG4gICAgICAgIC8vIDEuIEdSSUxMRSBFVCBBWEUgWVxyXG4gICAgICAgIGlmIChzaG93WUF4aXMpIHtcclxuICAgICAgICAgICAgZm9yKGxldCB2YWwgPSBuaWNlTWluOyB2YWwgPD0gbmljZU1heDsgdmFsICs9IHN0ZXBTaXplKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5UG9zID0gZHJhd0ggLSAoKHZhbCAtIG5pY2VNaW4pIC8gKG5pY2VNYXggLSBuaWNlTWluKSAqIGRyYXdIKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd0hvcml6b250YWxHcmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJsaW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDFcIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDJcIiwgZHJhd1cudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCB5UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieTJcIiwgeVBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBncmlkQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIGdyaWRUaGlja25lc3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyaWRTdHlsZSA9PT0gXCJkYXNoZWRcIikgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiNCw0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpc0dyb3VwLmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieFwiLCBcIi0xMFwiKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieVwiLCB5UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHRoaXMuZm9ybWF0WUF4aXNWYWx1ZSh2YWwsIHlBeGlzRGlzcGxheVVuaXRzLCB5QXhpc1ByZWNpc2lvbik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgeUF4aXNDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCB5QXhpc0ZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCB5QXhpc0ZvbnRGYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5heGlzR3JvdXAuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDIuIEFYRSBYXHJcbiAgICAgICAgaWYgKHNob3dYQXhpcykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwID0gTWF0aC5jZWlsKGNhdHMubGVuZ3RoIC8gMTApO1xyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkVGV4dHM6IFNWR1RleHRFbGVtZW50W10gPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxJbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY2F0cy5mb3JFYWNoKChjYXQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpICUgc3RlcCAhPT0gMCAmJiBpICE9PSBjYXRzLmxlbmd0aCAtIDEpIHJldHVybjsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHhQb3MgPSAoaSAvIChjYXRzLmxlbmd0aCAtIDEpKSAqIGRyYXdXO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaG93VmVydGljYWxHcmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJsaW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDFcIiwgeFBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIngyXCIsIHhQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBkcmF3SC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBncmlkQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIGdyaWRUaGlja25lc3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyaWRTdHlsZSA9PT0gXCJkYXNoZWRcIikgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiNCw0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpc0dyb3VwLmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKSBhcyBTVkdUZXh0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieFwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIChkcmF3SCArIDIwKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gY2F0cy5sZW5ndGggLSAxKSB0ZXh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PT0gMCkgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0ZXh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgeEF4aXNDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCB4QXhpc0ZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCB4QXhpc0ZvbnRGYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFqb3V0ZXIgbGUgbWVudSBjb250ZXh0dWVsIHN1ciBsZXMgbGFiZWxzIGRlIGwnYXhlIFhcclxuICAgICAgICAgICAgICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAud2l0aENhdGVnb3J5KGNhdGVnb3J5LCBpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHNlbGVjdGlvbklkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUGVybWV0dHJlIGxhIHPDqWxlY3Rpb24gYXUgY2xpYyBzdXIgbGVzIGxhYmVsc1xyXG4gICAgICAgICAgICAgICAgdGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoQ2F0ZWdvcnkoY2F0ZWdvcnksIGkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZWxlY3Qoc2VsZWN0aW9uSWQsIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlDb2x1bW5zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZmZpY2hhZ2UgaGnDqXJhcmNoaXF1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0TGV2ZWwgPSBjYXRlZ29yeUNvbHVtbnNbMF0udmFsdWVzW2ldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdExldmVsID0gY2F0ZWdvcnlDb2x1bW5zW2NhdGVnb3J5Q29sdW1ucy5sZW5ndGggLSAxXS52YWx1ZXNbaV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0c3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidHNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdHNwYW4xLnRleHRDb250ZW50ID0gZmlyc3RMZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICB0c3BhbjEuc2V0QXR0cmlidXRlKFwieFwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRzcGFuMS5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjBlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHRzcGFuMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUNvbHVtbnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXMgYXZlYyAzIG5pdmVhdXggb3UgcGx1cyAoZXg6IEFubsOpZSwgTW9pcywgSm91cikgLT4gT24gYWZmaWNoZSBBbm7DqWUsIE1vaXMsIEpvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT24gc3VwcG9zZSBxdWUgbCdhdmFudC1kZXJuaWVyIG5pdmVhdSBlc3QgbGUgbW9pc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaWRkbGVMZXZlbCA9IGNhdGVnb3J5Q29sdW1uc1tjYXRlZ29yeUNvbHVtbnMubGVuZ3RoIC0gMl0udmFsdWVzW2ldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0c3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidHNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMi50ZXh0Q29udGVudCA9IG1pZGRsZUxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIuc2V0QXR0cmlidXRlKFwieFwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIuc2V0QXR0cmlidXRlKFwiZHlcIiwgXCIxLjJlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC5hcHBlbmRDaGlsZCh0c3BhbjIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjMudGV4dENvbnRlbnQgPSBsYXN0TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMy5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHhQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMy5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjEuMmVtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHRzcGFuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FzIHN0YW5kYXJkIDIgbml2ZWF1eCAoZXg6IEFubsOpZSwgTW9pcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIudGV4dENvbnRlbnQgPSBsYXN0TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMi5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHhQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzcGFuMi5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjEuMmVtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHRzcGFuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZm9ybWF0RGF0ZShjYXRzW2ldLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBsYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbCcsIGxhYmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5heGlzR3JvdXAuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkVGV4dHMucHVzaCh0ZXh0KTtcclxuICAgICAgICAgICAgICAgIGxhYmVsSW5kaWNlcy5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEludGVsbGlnZW50IHRydW5jYXRpb24gd2l0aCA0NcKwIHJvdGF0aW9uXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gNjsgLy8gcHggcGFkZGluZyBiZXR3ZWVuIGxhYmVsc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gVmlzdWFsLl9sYWJlbE1lYXN1cmVDYW52YXMgfHwgKFZpc3VhbC5fbGFiZWxNZWFzdXJlQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHt4QXhpc0ZvbnRTaXplfXB4ICR7eEF4aXNGb250RmFtaWx5fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeHMgPSBjcmVhdGVkVGV4dHMubWFwKHQgPT4gcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZSgnZGF0YS14JykgfHwgdC5nZXRBdHRyaWJ1dGUoJ3gnKSB8fCAnMCcpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gLTQ1OyAvLyBSb3RhdGlvbiBhbmdsZSBpbiBkZWdyZWVzXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3RlcCAxOiBUcnVuY2F0ZSBsYWJlbHMgdGhhdCBhcmUgdG9vIHdpZGUgYW5kIGFwcGx5IDQ1wrAgcm90YXRpb25cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3JlYXRlZFRleHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGNyZWF0ZWRUZXh0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIG11bHRpLWxpbmUgaGllcmFyY2hpY2FsIGxhYmVscyAodGhleSB1c2UgdHNwYW5zKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0LmNoaWxkTm9kZXMubGVuZ3RoID4gMSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhdyA9IHQuZ2V0QXR0cmlidXRlKCdkYXRhLWxhYmVsJykgfHwgdC50ZXh0Q29udGVudCB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0geHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IChpID09PSAwKSA/IDAgOiAoeHNbaSAtIDFdICsgeCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gKGkgPT09IGNyZWF0ZWRUZXh0cy5sZW5ndGggLSAxKSA/IGRyYXdXIDogKHggKyB4c1tpICsgMV0pIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdmFpbCA9IE1hdGgubWF4KDEwLCByaWdodCAtIGxlZnQgLSBwYWRkaW5nICogMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1lYXN1cmUgYW5kIHRydW5jYXRlIGlmIG5lY2Vzc2FyeSAoa2VlcCBiZWdpbm5pbmcsIGFkZCAnLi4uJyBhdCBlbmQpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHJhdykud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoID4gYXZhaWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0TGVuID0gcmF3Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZSA9IHJhdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxsaXBzaXMgPSAnLi4uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCByZWR1Y2luZyBmcm9tIHRoZSBlbmQgdW50aWwgaXQgZml0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3RhcnRMZW4gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGUgPSByYXcuc2xpY2UoMCwgc3RhcnRMZW4pICsgZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IGN0eC5tZWFzdXJlVGV4dChjYW5kaWRhdGUpLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoIDw9IGF2YWlsKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0TGVuLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdC50ZXh0Q29udGVudCA9IGNhbmRpZGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IDQ1wrAgcm90YXRpb24gdG8gYWxsIGxhYmVsc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdYID0gcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZSgnZGF0YS14JykgfHwgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnWSA9IHBhcnNlRmxvYXQodC5nZXRBdHRyaWJ1dGUoJ3knKSB8fCAoZHJhd0ggKyAyMCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5zZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHQuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7b3JpZ1h9LCAke29yaWdZfSkgcm90YXRlKCR7YW5nbGV9KWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHQuc2V0QXR0cmlidXRlKCd4JywgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICB0LnNldEF0dHJpYnV0ZSgneScsICcwJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3RlcCAyOiBDaGVjayBmb3Igb3ZlcmxhcHMgdXNpbmcgYm91bmRpbmcgYm94ZXMgKGFmdGVyIHJvdGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgbGV0IGhhc092ZXJsYXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJveGVzID0gY3JlYXRlZFRleHRzLm1hcCh0ID0+IHQuZ2V0QkJveCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMTsgayA8IGJveGVzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldiA9IGJveGVzW2sgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyID0gYm94ZXNba107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnIueCA8IHByZXYueCArIHByZXYud2lkdGggKyBwYWRkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc092ZXJsYXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3RlcCAzOiBJZiBvdmVybGFwIGRldGVjdGVkLCBoaWRlIHRoZSBsYXN0IGxhYmVsICh0aGUgb25lIGF0IHRoZSByaWdodCBlZGdlKVxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc092ZXJsYXAgJiYgY3JlYXRlZFRleHRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gY3JlYXRlZFRleHRzW2NyZWF0ZWRUZXh0cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdCkgbGFzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIC8vIGdldEJCb3gvY2FudmFzIG1pZ2h0IGZhaWwgaW4gc29tZSBub24tcmVuZGVyaW5nIGVudmlyb25tZW50czsgaWdub3JlIHNpbGVudGx5XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1gtYXhpcyBsYWJlbCB0cnVuY2F0aW9uL292ZXJsYXAgZGV0ZWN0aW9uIHNraXBwZWQ6JywgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMy4gQk9VQ0xFIFNVUiBMRVMgU8OJUklFUyAoTElHTkVTKVxyXG4gICAgICAgIGNvbnN0IGxlZ2VuZEl0ZW1zOiBBcnJheTx7bmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nfT4gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gUsOpY3Vww6lyYXRpb24gZGVzIHBhcmFtw6h0cmVzIGRlcyDDqXRpcXVldHRlcyBkZSBkb25uw6llc1xyXG4gICAgICAgIGNvbnN0IHNob3dEYXRhTGFiZWxzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZGF0YUxhYmVscy5zaG93LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGFMYWJlbHNDb2xvciA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmRhdGFMYWJlbHMuY29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0YUxhYmVsc0ZvbnRTaXplID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZGF0YUxhYmVscy5mb250U2l6ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkYXRhTGFiZWxzRm9udEZhbWlseSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmRhdGFMYWJlbHMuZm9udEZhbWlseS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFMYWJlbHNEaXNwbGF5VW5pdHMgPSBwYXJzZUludCh0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5kYXRhTGFiZWxzLmRpc3BsYXlVbml0cy52YWx1ZS52YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICBjb25zdCBkYXRhTGFiZWxzUHJlY2lzaW9uID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZGF0YUxhYmVscy5wcmVjaXNpb24udmFsdWU7XHJcblxyXG4gICAgICAgIGFsbFNlcmllcy5mb3JFYWNoKChzZXJpZXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAxMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VyaWVzTmFtZSA9IHNlcmllcy5zb3VyY2UuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHMgPSBzZXJpZXMudmFsdWVzO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbGluZVNldHRpbmdzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NbYGxpbmVTZXR0aW5ncyR7aW5kZXggKyAxfWBdO1xyXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudFNldHRpbmdzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NbYGdyYWRpZW50U2V0dGluZ3Mke2luZGV4ICsgMX1gXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbGluZVNldHRpbmdzIHx8ICFncmFkaWVudFNldHRpbmdzKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaW5lQ29sb3IgPSBsaW5lU2V0dGluZ3MubGluZUNvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJva2VXaWR0aCA9IGxpbmVTZXR0aW5ncy5zdHJva2VXaWR0aC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgbGluZVN0eWxlID0gbGluZVNldHRpbmdzLmxpbmVTdHlsZS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG93TWFya2VycyA9IGxpbmVTZXR0aW5ncy5zaG93TWFya2Vycy52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgbWFya2VyU2l6ZSA9IGxpbmVTZXR0aW5ncy5tYXJrZXJTaXplLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwcGVkID0gbGluZVNldHRpbmdzLnN0ZXBwZWQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaG93R3JhZGllbnQgPSBncmFkaWVudFNldHRpbmdzLnNob3dHcmFkaWVudC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRDb2xvciA9IGdyYWRpZW50U2V0dGluZ3MuZ3JhZGllbnRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRJbnRlbnNpdHkgPSBncmFkaWVudFNldHRpbmdzLmdyYWRpZW50SW50ZW5zaXR5LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudERpcmVjdGlvbiA9IGdyYWRpZW50U2V0dGluZ3MuZ3JhZGllbnREaXJlY3Rpb24udmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGxlZ2VuZEl0ZW1zLnB1c2goeyBuYW1lOiBzZXJpZXNOYW1lLCBjb2xvcjogbGluZUNvbG9yIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsIGRlcyBwb2ludHNcclxuICAgICAgICAgICAgY29uc3QgcG9pbnRzOiBbbnVtYmVyLCBudW1iZXJdW10gPSBjYXRzLm1hcCgoY2F0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gKGkgLyAoY2F0cy5sZW5ndGggLSAxKSkgKiBkcmF3VztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBnZXRZUG9zKE51bWJlcih2YWxzW2ldKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3LDqWF0aW9uIGR1IGTDqWdyYWTDqSB1bmlxdWVcclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRJZCA9IGBncmFkaWVudF8ke2luZGV4fV8ke0RhdGUubm93KCl9YDsgLy8gSUQgdW5pcXVlXHJcbiAgICAgICAgICAgIGxldCBncmFkaWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJsaW5lYXJHcmFkaWVudFwiKTtcclxuICAgICAgICAgICAgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgZ3JhZGllbnRJZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBzdG9wMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJzdG9wXCIpO1xyXG4gICAgICAgICAgICBzdG9wMS5zZXRBdHRyaWJ1dGUoXCJvZmZzZXRcIiwgXCIwJVwiKTtcclxuICAgICAgICAgICAgc3RvcDEuc2V0QXR0cmlidXRlKFwic3RvcC1jb2xvclwiLCBncmFkaWVudENvbG9yKTtcclxuICAgICAgICAgICAgc3RvcDEuc2V0QXR0cmlidXRlKFwic3RvcC1vcGFjaXR5XCIsIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGdyYWRpZW50SW50ZW5zaXR5KSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBzdG9wMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJzdG9wXCIpO1xyXG4gICAgICAgICAgICBzdG9wMi5zZXRBdHRyaWJ1dGUoXCJvZmZzZXRcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgICAgICBzdG9wMi5zZXRBdHRyaWJ1dGUoXCJzdG9wLWNvbG9yXCIsIGdyYWRpZW50Q29sb3IpO1xyXG4gICAgICAgICAgICBzdG9wMi5zZXRBdHRyaWJ1dGUoXCJzdG9wLW9wYWNpdHlcIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZ3JhZGllbnQuYXBwZW5kQ2hpbGQoc3RvcDEpO1xyXG4gICAgICAgICAgICBncmFkaWVudC5hcHBlbmRDaGlsZChzdG9wMik7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoXCJkZWZzXCIpPy5hcHBlbmRDaGlsZChncmFkaWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlHcmFkaWVudERpcmVjdGlvbihncmFkaWVudCwgZ3JhZGllbnREaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29uc3RydWN0aW9uIGR1IGNoZW1pblxyXG4gICAgICAgICAgICBsZXQgZCA9IHN0ZXBwZWQgPyB0aGlzLmJ1aWxkU3RlcHBlZFBhdGgocG9pbnRzKSA6IHRoaXMuYnVpbGRTbW9vdGhQYXRoKHBvaW50cyk7XHJcblxyXG4gICAgICAgICAgICAvLyBBaXJlXHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGhBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInBhdGhcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHlaZXJvID0gZ2V0WVBvcygwKTtcclxuICAgICAgICAgICAgY29uc3QgYXJlYUQgPSBgJHtkfSBMICR7cG9pbnRzW3BvaW50cy5sZW5ndGgtMV1bMF19LCR7eVplcm99IEwgJHtwb2ludHNbMF1bMF19LCR7eVplcm99IFpgO1xyXG4gICAgICAgICAgICBwYXRoQXJlYS5zZXRBdHRyaWJ1dGUoXCJkXCIsIGFyZWFEKTtcclxuICAgICAgICAgICAgcGF0aEFyZWEuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBzaG93R3JhZGllbnQgPyBgdXJsKCMke2dyYWRpZW50SWR9KWAgOiBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHBhdGhBcmVhLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGluZXNHcm91cC5hcHBlbmRDaGlsZChwYXRoQXJlYSk7XHJcblxyXG4gICAgICAgICAgICAvLyBMaWduZVxyXG4gICAgICAgICAgICBjb25zdCBwYXRoTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJwYXRoXCIpO1xyXG4gICAgICAgICAgICBwYXRoTGluZS5zZXRBdHRyaWJ1dGUoXCJkXCIsIGQpO1xyXG4gICAgICAgICAgICBwYXRoTGluZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgcGF0aExpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGxpbmVDb2xvcik7XHJcbiAgICAgICAgICAgIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBzdHJva2VXaWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgcGF0aExpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcclxuICAgICAgICAgICAgcGF0aExpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVqb2luXCIsIFwicm91bmRcIik7XHJcbiAgICAgICAgICAgIGlmIChsaW5lU3R5bGUgPT09IFwiZGFzaGVkXCIpIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCI4LDRcIik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGxpbmVTdHlsZSA9PT0gXCJkb3R0ZWRcIikgcGF0aExpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcIjIsMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lc0dyb3VwLmFwcGVuZENoaWxkKHBhdGhMaW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1hcnF1ZXVyc1xyXG4gICAgICAgICAgICBpZiAoc2hvd01hcmtlcnMpIHtcclxuICAgICAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tbWFya2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCAodGhpcy5tYXJnaW4ubGVmdCArIHBbMF0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCAodGhpcy5tYXJnaW4udG9wICsgcFsxXSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgbWFya2VyU2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBsaW5lQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGNpcmNsZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gw4l0aXF1ZXR0ZXMgZGUgZG9ubsOpZXNcclxuICAgICAgICAgICAgaWYgKHNob3dEYXRhTGFiZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBwb2ludHMuZm9yRWFjaCgocCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKHZhbHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuZm9ybWF0RGF0YUxhYmVsKHZhbHVlLCBkYXRhTGFiZWxzRGlzcGxheVVuaXRzLCBkYXRhTGFiZWxzUHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tZGF0YWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcInhcIiwgKHRoaXMubWFyZ2luLmxlZnQgKyBwWzBdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJ5XCIsICh0aGlzLm1hcmdpbi50b3AgKyBwWzFdIC0gMTApLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgZGF0YUxhYmVsc0NvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgZGF0YUxhYmVsc0ZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIGRhdGFMYWJlbHNGb250RmFtaWx5KTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb250LXdlaWdodFwiLCBcIjUwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gWm9uZXMgZGUgc3Vydm9sIChUb29sdGlwKSBhdmVjIHN1cHBvcnQgZHUgZHJpbGxcclxuICAgICAgICAgICAgcG9pbnRzLmZvckVhY2goKHAsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIENyw6llciBsJ0lEIGRlIHPDqWxlY3Rpb24gcG91ciBjZSBwb2ludFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAud2l0aENhdGVnb3J5KGNhdGVnb3J5LCBpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdmVyQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJjdXN0b20taG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCAodGhpcy5tYXJnaW4ubGVmdCArIHBbMF0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgKHRoaXMubWFyZ2luLnRvcCArIHBbMV0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBcIjhcIik7XHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwidHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b29sdGlwVGl0bGUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUNvbHVtbnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGl0bGUgPSBjYXRlZ29yeUNvbHVtbnMubWFwKGMgPT4gYy52YWx1ZXNbaV0udG9TdHJpbmcoKSkuam9pbihcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRpdGxlID0gdGhpcy5mb3JtYXREYXRlKGNhdHNbaV0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b29sdGlwQ29udGVudCA9IGA8ZGl2PjxzdHJvbmc+JHt0b29sdGlwVGl0bGV9PC9zdHJvbmc+PC9kaXY+PGRpdj4ke3Nlcmllc05hbWV9OiAke3RoaXMuZm9ybWF0TnVtYmVyKE51bWJlcih2YWxzW2ldKSl9PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb29sdGlwKGUucGFnZVgsIGUucGFnZVksIHRvb2x0aXBDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLW1hcmtlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsICh0aGlzLm1hcmdpbi5sZWZ0ICsgcFswXSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCAodGhpcy5tYXJnaW4udG9wICsgcFsxXSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIFwiNVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgbGluZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcIiNmZmZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHRlbXBDaXJjbGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUubGVmdCA9IChlLnBhZ2VYICsgMTApICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS50b3AgPSAoZS5wYWdlWSAtIDEwKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlVG9vbHRpcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcC1tYXJrZXJcIikuZm9yRWFjaChtID0+IG0ucmVtb3ZlKCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gR2VzdGlvbiBkdSBjbGljIHBvdXIgbGEgc8OpbGVjdGlvbiAobsOpY2Vzc2FpcmUgcG91ciBsZSBkcmlsbClcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTw6lsZWN0aW9ubmVyIGNlIHBvaW50IGRlIGRvbm7DqWVzXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNlbGVjdChzZWxlY3Rpb25JZCwgZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbnRleHQgbWVudSAoY2xpYyBkcm9pdCkgcG91ciBhZmZpY2hlciBsZXMgb3B0aW9ucyBkZSBkcmlsbFxyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zaG93Q29udGV4dE1lbnUoc2VsZWN0aW9uSWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQoaG92ZXJDaXJjbGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gNC4gTMOJR0VOREVcclxuICAgICAgICBpZiAoc2hvd0xlZ2VuZCAmJiBsZWdlbmRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZ2VuZEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImdcIik7XHJcbiAgICAgICAgICAgIGxlZ2VuZEdyb3VwLmNsYXNzTGlzdC5hZGQoXCJsZWdlbmRcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGVnZW5kWCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBsZWdlbmRZID0gMDtcclxuICAgICAgICAgICAgY29uc3QgaXRlbVdpZHRoID0gMTAwO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gMjA7XHJcblxyXG4gICAgICAgICAgICBpZiAobGVnZW5kUG9zaXRpb24gPT09IFwiVG9wXCIgfHwgbGVnZW5kUG9zaXRpb24gPT09IFwiVG9wQ2VudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFggPSAod2lkdGggLSBsZWdlbmRJdGVtcy5sZW5ndGggKiBpdGVtV2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFkgPSAxMDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsZWdlbmRQb3NpdGlvbiA9PT0gXCJCb3R0b21cIiB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJCb3R0b21DZW50ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kWCA9ICh3aWR0aCAtIGxlZ2VuZEl0ZW1zLmxlbmd0aCAqIGl0ZW1XaWR0aCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kWSA9IGhlaWdodCAtIDIwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlZ2VuZFBvc2l0aW9uID09PSBcIkxlZnRcIikge1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kWCA9IDEwO1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kWSA9IGhlaWdodCAvIDIgLSAobGVnZW5kSXRlbXMubGVuZ3RoICogaXRlbUhlaWdodCkgLyAyO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlZ2VuZFBvc2l0aW9uID09PSBcIlJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFggPSB3aWR0aCAtIDExMDtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFkgPSBoZWlnaHQgLyAyIC0gKGxlZ2VuZEl0ZW1zLmxlbmd0aCAqIGl0ZW1IZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGVnZW5kSXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeE9mZnNldCA9IGxlZ2VuZFBvc2l0aW9uLmluY2x1ZGVzKFwiQ2VudGVyXCIpIHx8IGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcFwiIHx8IGxlZ2VuZFBvc2l0aW9uID09PSBcIkJvdHRvbVwiIFxyXG4gICAgICAgICAgICAgICAgICAgID8gbGVnZW5kWCArIGkgKiBpdGVtV2lkdGggXHJcbiAgICAgICAgICAgICAgICAgICAgOiBsZWdlbmRYO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeU9mZnNldCA9IGxlZ2VuZFBvc2l0aW9uID09PSBcIkxlZnRcIiB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJSaWdodFwiIFxyXG4gICAgICAgICAgICAgICAgICAgID8gbGVnZW5kWSArIGkgKiBpdGVtSGVpZ2h0IFxyXG4gICAgICAgICAgICAgICAgICAgIDogbGVnZW5kWTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDcsOpZXIgdW4gZ3JvdXBlIHBvdXIgY2hhcXVlIMOpbMOpbWVudCBkZSBsw6lnZW5kZSBwb3VyIGZhY2lsaXRlciBsZXMgaW50ZXJhY3Rpb25zXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZWdlbmRJdGVtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZ1wiKTtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZEl0ZW1Hcm91cC5zZXRBdHRyaWJ1dGUoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwicmVjdFwiKTtcclxuICAgICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlKFwieFwiLCB4T2Zmc2V0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHlPZmZzZXQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTVcIik7XHJcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjNcIik7XHJcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgaXRlbS5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuYXBwZW5kQ2hpbGQocmVjdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsICh4T2Zmc2V0ICsgMjApLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsICh5T2Zmc2V0ICsgMikudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImFsaWdubWVudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBsZWdlbmRGb250Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgbGVnZW5kRm9udFNpemUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIGxlZ2VuZEZvbnRGYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZEl0ZW1Hcm91cC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBam91dGVyIHVuIHJlY3RhbmdsZSBpbnZpc2libGUgcG91ciBhZ3JhbmRpciBsYSB6b25lIGNsaXF1YWJsZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaGl0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJyZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgaGl0QXJlYS5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHhPZmZzZXQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBoaXRBcmVhLnNldEF0dHJpYnV0ZShcInlcIiwgKHlPZmZzZXQgLSA1KS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGhpdEFyZWEuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI5MFwiKTtcclxuICAgICAgICAgICAgICAgIGhpdEFyZWEuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTVcIik7XHJcbiAgICAgICAgICAgICAgICBoaXRBcmVhLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJ0cmFuc3BhcmVudFwiKTtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZEl0ZW1Hcm91cC5hcHBlbmRDaGlsZChoaXRBcmVhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNZW51IGNvbnRleHR1ZWwgc3VyIGxlcyDDqWzDqW1lbnRzIGRlIGzDqWdlbmRlXHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDcsOpZXIgdW4gU2VsZWN0aW9uSWQgYmFzw6kgc3VyIGxhIHPDqXJpZSAobWVhc3VyZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJpZXNEYXRhID0gYWxsU2VyaWVzLmdyb3VwZWQoKVswXS52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcmllc0RhdGEgJiYgc2VyaWVzRGF0YS5pZGVudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhTZXJpZXMoZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzLCBzZXJpZXNEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zaG93Q29udGV4dE1lbnUoc2VsZWN0aW9uSWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2xpYyBwb3VyIGZpbHRyZXIvc8OpbGVjdGlvbm5lciBsYSBzw6lyaWVcclxuICAgICAgICAgICAgICAgIGxlZ2VuZEl0ZW1Hcm91cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcmllc0RhdGEgPSBhbGxTZXJpZXMuZ3JvdXBlZCgpWzBdLnZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VyaWVzRGF0YSAmJiBzZXJpZXNEYXRhLmlkZW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAud2l0aFNlcmllcyhkYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMsIHNlcmllc0RhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNlbGVjdChzZWxlY3Rpb25JZCwgZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZWdlbmRHcm91cC5hcHBlbmRDaGlsZChsZWdlbmRJdGVtR3JvdXApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGxlZ2VuZEdyb3VwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXREYXRhTGFiZWwodmFsdWU6IG51bWJlciwgZGlzcGxheVVuaXRzOiBudW1iZXIsIHByZWNpc2lvbjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZm9ybWF0dGVkID0gdmFsdWU7XHJcbiAgICAgICAgbGV0IHN1ZmZpeCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChkaXNwbGF5VW5pdHMgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gQXV0b1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModmFsdWUpID49IDEwMDAwMDAwMDApIHsgXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDAwMDAwMDA7IFxyXG4gICAgICAgICAgICAgICAgc3VmZml4ID0gXCIgTWRzXCI7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKHZhbHVlKSA+PSAxMDAwMDAwKSB7IFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwOyBcclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1cIjsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnModmFsdWUpID49IDEwMDApIHsgXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDA7IFxyXG4gICAgICAgICAgICAgICAgc3VmZml4ID0gXCIgS1wiOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlzcGxheVVuaXRzID09PSAxMDAwKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDtcclxuICAgICAgICAgICAgc3VmZml4ID0gXCIgS1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlzcGxheVVuaXRzID09PSAxMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDtcclxuICAgICAgICAgICAgc3VmZml4ID0gXCIgTVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlzcGxheVVuaXRzID09PSAxMDAwMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDAwMDtcclxuICAgICAgICAgICAgc3VmZml4ID0gXCIgTWRzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWQudG9GaXhlZChwcmVjaXNpb24pICsgc3VmZml4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRTbW9vdGhQYXRoKHBvaW50czogW251bWJlciwgbnVtYmVyXVtdKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgbGV0IGQgPSBgTSAke3BvaW50c1swXVswXX0sJHtwb2ludHNbMF1bMV19YDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkICs9IGAgTCAke3BvaW50c1tpXVswXX0sJHtwb2ludHNbaV1bMV19YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFN0ZXBwZWRQYXRoKHBvaW50czogW251bWJlciwgbnVtYmVyXVtdKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgbGV0IGQgPSBgTSAke3BvaW50c1swXVswXX0sJHtwb2ludHNbMF1bMV19YDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkICs9IGAgTCAke3BvaW50c1tpXVswXX0sJHtwb2ludHNbaS0xXVsxXX0gTCAke3BvaW50c1tpXVswXX0sJHtwb2ludHNbaV1bMV19YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZvcm1hdHRpbmdNb2RlbCgpOiBwb3dlcmJpLnZpc3VhbHMuRm9ybWF0dGluZ01vZGVsIHtcclxuICAgICAgICAvLyBDb21wdGVyIGxlIG5vbWJyZSBkZSBzw6lyaWVzIChjaGFtcHMgVmFsdWVzKVxyXG4gICAgICAgIGxldCBuYlNlcmllcyA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YVZpZXcgJiYgdGhpcy5kYXRhVmlldy5jYXRlZ29yaWNhbCAmJiB0aGlzLmRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlcykge1xyXG4gICAgICAgICAgICBuYlNlcmllcyA9IHRoaXMuZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExpc3RlIGR5bmFtaXF1ZSBkZXMgY2FyZHMgw6AgYWZmaWNoZXJcclxuICAgICAgICBjb25zdCBjYXJkczogYW55W10gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gQWpvdXRlciBzZXVsZW1lbnQgbGVzIGdyb3VwZXMgbsOpY2Vzc2FpcmVzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbmJTZXJpZXM7IGkrKykge1xyXG4gICAgICAgICAgICBjYXJkcy5wdXNoKHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzW2BsaW5lU2V0dGluZ3Mke2l9YF0pO1xyXG4gICAgICAgICAgICBjYXJkcy5wdXNoKHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzW2BncmFkaWVudFNldHRpbmdzJHtpfWBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFqb3V0ZXIgbGVzIGF1dHJlcyBncm91cGVzIGfDqW7DqXJhdXhcclxuICAgICAgICBjYXJkcy5wdXNoKFxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy54QXhpc1NldHRpbmdzLFxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy55QXhpc1NldHRpbmdzLFxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5ncmlkU2V0dGluZ3MsXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmRhdGFMYWJlbHMsXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmxlZ2VuZFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEfDqW7DqXJlciBsZSBtb2TDqGxlIGF2ZWMgdW5pcXVlbWVudCBsZXMgY2FyZHMgdXRpbGVzXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5idWlsZEZvcm1hdHRpbmdNb2RlbCh7IGNhcmRzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXBwbHlHcmFkaWVudERpcmVjdGlvbihncmFkaWVudDogU1ZHTGluZWFyR3JhZGllbnRFbGVtZW50LCBkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInZlcnRpY2FsXCI6IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTFcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkyXCIsIFwiMVwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbC1yZXZlcnNlXCI6IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTFcIiwgXCIxXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkyXCIsIFwiMFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTFcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBcIjFcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkyXCIsIFwiMFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJob3Jpem9udGFsLXJldmVyc2VcIjogZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDFcIiwgXCIxXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngyXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTJcIiwgXCIwXCIpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRpYWdvbmFsXCI6IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTFcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBcIjFcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkyXCIsIFwiMVwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkaWFnb25hbC1yZXZlcnNlXCI6IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngxXCIsIFwiMVwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTFcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkyXCIsIFwiMVwiKTsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0TnVtYmVyKG51bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBEw6l0ZXJtaW5lciBsZSBub21icmUgZGUgZMOpY2ltYWxlcyBuw6ljZXNzYWlyZXNcclxuICAgICAgICBpZiAobnVtID09PSAwKSByZXR1cm4gXCIwXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWJzTnVtID0gTWF0aC5hYnMobnVtKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBQb3VyIGxlcyBncmFuZHMgbm9tYnJlcyAoPj0gMTAwMCksIHBhcyBkZSBkw6ljaW1hbGVzXHJcbiAgICAgICAgaWYgKGFic051bSA+PSAxMDAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSkudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBvdXIgbGVzIG5vbWJyZXMgZW50cmUgMSBldCA5OTksIG1heCAyIGTDqWNpbWFsZXMgc2kgbsOpY2Vzc2FpcmVcclxuICAgICAgICBpZiAoYWJzTnVtID49IDEpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm91bmRlZCA9IE1hdGgucm91bmQobnVtICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdW5kZWQudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJywgeyBcclxuICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQb3VyIGxlcyBwZXRpdHMgbm9tYnJlcyAoPCAxKSwgYWZmaWNoZXIganVzcXUnw6AgNCBkw6ljaW1hbGVzXHJcbiAgICAgICAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKGFic051bSkpO1xyXG4gICAgICAgIGNvbnN0IGRlY2ltYWxzID0gTWF0aC5taW4oNCwgTWF0aC5hYnMobWFnbml0dWRlKSArIDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBudW0udG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJywgeyBcclxuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBkZWNpbWFscyxcclxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBkZWNpbWFsc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0WUF4aXNWYWx1ZSh2YWx1ZTogbnVtYmVyLCBkaXNwbGF5VW5pdHM6IHN0cmluZywgcHJlY2lzaW9uOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSB2YWx1ZTtcclxuICAgICAgICBsZXQgc3VmZml4ID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgdW5pdHMgPSBwYXJzZUludChkaXNwbGF5VW5pdHMpO1xyXG5cclxuICAgICAgICBpZiAodW5pdHMgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gQXV0byA6IGTDqXRlY3Rpb24gYXV0b21hdGlxdWVcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHZhbHVlKSA+PSAxMDAwMDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDAwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBcIiBNZHNcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgc3VmZml4ID0gXCIgTVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKHZhbHVlKSA+PSAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBcIiBLXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXRzID09PSAxMDAwKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDtcclxuICAgICAgICAgICAgc3VmZml4ID0gXCIgS1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pdHMgPT09IDEwMDAwMDApIHtcclxuICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwO1xyXG4gICAgICAgICAgICBzdWZmaXggPSBcIiBNXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1bml0cyA9PT0gMTAwMDAwMDAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDAwMDAwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1kc1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXBwbGlxdWVyIGxhIHByw6ljaXNpb25cclxuICAgICAgICBpZiAocHJlY2lzaW9uID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGZvcm1hdHRlZCkudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJykgKyBzdWZmaXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdHRlZC50b0xvY2FsZVN0cmluZygnZnItRlInLCB7XHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNpc2lvbixcclxuICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY2lzaW9uXHJcbiAgICAgICAgICAgIH0pICsgc3VmZml4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdERhdGUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gU2ltcGxlbWVudCByZXRvdXJuZXIgbGEgdmFsZXVyIHRlbGxlIHF1ZWxsZVxyXG4gICAgICAgIC8vIFBvd2VyIEJJIGVudm9pZSBkw6lqw6AgbGUgYm9uIGZvcm1hdCBzZWxvbiBsZSBuaXZlYXUgZGUgZHJpbGxcclxuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVmlzdWFsIH0gZnJvbSBcIi4uLy4uL3NyYy92aXN1YWxcIjtcbmltcG9ydCBwb3dlcmJpVmlzdWFsc0FwaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xuaW1wb3J0IElWaXN1YWxQbHVnaW4gPSBwb3dlcmJpVmlzdWFsc0FwaS52aXN1YWxzLnBsdWdpbnMuSVZpc3VhbFBsdWdpbjtcbmltcG9ydCBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpVmlzdWFsc0FwaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XG5pbXBvcnQgRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zO1xudmFyIHBvd2VyYmlLZXk6IGFueSA9IFwicG93ZXJiaVwiO1xudmFyIHBvd2VyYmk6IGFueSA9IHdpbmRvd1twb3dlcmJpS2V5XTtcbnZhciBjb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUc6IElWaXN1YWxQbHVnaW4gPSB7XG4gICAgbmFtZTogJ2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRycsXG4gICAgZGlzcGxheU5hbWU6ICdjb3VyYmVkZWdyYWRlJyxcbiAgICBjbGFzczogJ1Zpc3VhbCcsXG4gICAgYXBpVmVyc2lvbjogJzUuMy4wJyxcbiAgICBjcmVhdGU6IChvcHRpb25zPzogVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zKSA9PiB7XG4gICAgICAgIGlmIChWaXN1YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmlzdWFsKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93ICdWaXN1YWwgaW5zdGFuY2Ugbm90IGZvdW5kJztcbiAgICB9LFxuICAgIGNyZWF0ZU1vZGFsRGlhbG9nOiAoZGlhbG9nSWQ6IHN0cmluZywgb3B0aW9uczogRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zLCBpbml0aWFsU3RhdGU6IG9iamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2dSZWdpc3RyeSA9ICg8YW55Pmdsb2JhbFRoaXMpLmRpYWxvZ1JlZ2lzdHJ5O1xuICAgICAgICBpZiAoZGlhbG9nSWQgaW4gZGlhbG9nUmVnaXN0cnkpIHtcbiAgICAgICAgICAgIG5ldyBkaWFsb2dSZWdpc3RyeVtkaWFsb2dJZF0ob3B0aW9ucywgaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3VzdG9tOiB0cnVlXG59O1xuaWYgKHR5cGVvZiBwb3dlcmJpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcG93ZXJiaS52aXN1YWxzID0gcG93ZXJiaS52aXN1YWxzIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zID0gcG93ZXJiaS52aXN1YWxzLnBsdWdpbnMgfHwge307XG4gICAgcG93ZXJiaS52aXN1YWxzLnBsdWdpbnNbXCJjb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUdcIl0gPSBjb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUc7XG59XG5leHBvcnQgZGVmYXVsdCBjb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUc7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==