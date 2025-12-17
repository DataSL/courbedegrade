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
                    // With 45° rotation, labels can be much longer
                    // Calculate available space considering rotation: diagonal space is ~1.4x horizontal space
                    const horizontalSpace = right - left - padding * 2;
                    const avail = Math.max(30, horizontalSpace * 2.5); // More generous space for rotated labels
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
            // Aire - Le dégradé s'arrête au bas de la zone de dessin, juste avant les labels de l'axe X
            const pathArea = document.createElementNS(ns, "path");
            const gradientBottom = drawH; // S'arrête 5px avant le bas pour ne pas toucher les labels
            const areaD = `${d} L ${points[points.length - 1][0]},${gradientBottom} L ${points[0][0]},${gradientBottom} Z`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5qcyIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uL3NyYy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvLi9zcmMvdmlzdWFsLnRzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uL3N0eWxlL3Zpc3VhbC5sZXNzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvdXJiZWRlZ3JhZGUwRTVCOTQzMDNEQkI0QjcxODg0QjlCNTAwQjg0OTZGQl9ERUJVRy8uLy50bXAvcHJlY29tcGlsZS92aXN1YWxQbHVnaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQb3dlcmJpIHV0aWxzIGNvbXBvbmVudHMgY2xhc3NlcyBmb3IgY3VzdG9tIHZpc3VhbCBmb3JtYXR0aW5nIHBhbmUgb2JqZWN0c1xuICpcbiAqL1xuaW1wb3J0ICogYXMgRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyIGZyb20gXCIuL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzXCI7XG5jbGFzcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgQ2FyZEdyb3VwRW50aXR5IGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIE1vZGVsIHtcbn1cbi8qKiBDb21wb3NpdGVDYXJkIGlzIHVzZSB0byBwb3B1bGF0ZSBhIGNhcmQgaW50byB0aGUgZm9ybWF0dGluZyBwYW5lIHdpdGggbXVsdGlwbGUgZ3JvdXBzICovXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlQ2FyZCBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIENhcmRHcm91cEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG4vKiogU2ltcGxlQ2FyZCBpcyB1c2UgdG8gcG9wdWxhdGUgYSBjYXJkIGludG8gdGhlIGZvcm1hdHRpbmcgcGFuZSBpbiBhIHNpbmdsZSBncm91cCAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUNhcmQgZXh0ZW5kcyBDYXJkR3JvdXBFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIFNpbXBsZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IHNsaWNlRGlzcGxheU5hbWUgPSAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRpc3BsYXlOYW1lS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kaXNwbGF5TmFtZUtleSkgOiB0aGlzLmRpc3BsYXlOYW1lO1xuICAgICAgICBjb25zdCBzbGljZURlc2NyaXB0aW9uID0gKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogc2xpY2VEaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzbGljZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdG9yOiBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0RGVzY3JpcHRvcihvYmplY3ROYW1lLCB0aGlzKSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHRoaXMubmFtZVxuICAgICAgICAgICAgfV07XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gKF9hID0gZGF0YVZpZXdPYmplY3RzID09PSBudWxsIHx8IGRhdGFWaWV3T2JqZWN0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YVZpZXdPYmplY3RzW29iamVjdE5hbWVdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbdGhpcy5uYW1lXTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlci5nZXRQcm9wZXJ0eVZhbHVlKHRoaXMsIG5ld1ZhbHVlLCB0aGlzLnZhbHVlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQWxpZ25tZW50R3JvdXAgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiQWxpZ25tZW50R3JvdXBcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuQWxpZ25tZW50R3JvdXAgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBtb2RlOiB0aGlzLm1vZGUsIHN1cHBvcnRzTm9TZWxlY3Rpb246IHRoaXMuc3VwcG9ydHNOb1NlbGVjdGlvbiB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVG9nZ2xlU3dpdGNoIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRvZ2dsZVN3aXRjaFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ub2dnbGVTd2l0Y2ggKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkNvbG9yUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkNvbG9yUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgZGVmYXVsdENvbG9yOiB0aGlzLmRlZmF1bHRDb2xvciwgaXNOb0ZpbGxJdGVtU3VwcG9ydGVkOiB0aGlzLmlzTm9GaWxsSXRlbVN1cHBvcnRlZCB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTnVtVXBEb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk51bVVwRG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5OdW1VcERvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBvcHRpb25zOiB0aGlzLm9wdGlvbnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlciBleHRlbmRzIE51bVVwRG93biB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU2xpZGVyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlNsaWRlciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEYXRlUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRhdGVQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBwbGFjZWhvbGRlcjogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5wbGFjZWhvbGRlcktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMucGxhY2Vob2xkZXJLZXkpIDogdGhpcy5wbGFjZWhvbGRlciwgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJdGVtRHJvcGRvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpdGVtczogdGhpcy5pdGVtcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXV0b0Ryb3Bkb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgbWVyZ2VWYWx1ZXM6IHRoaXMubWVyZ2VWYWx1ZXMsIGZpbHRlclZhbHVlczogdGhpcy5maWx0ZXJWYWx1ZXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkR1cmF0aW9uUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkR1cmF0aW9uUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFcnJvclJhbmdlQ29udHJvbCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJFcnJvclJhbmdlQ29udHJvbFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5FcnJvclJhbmdlQ29udHJvbCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRmllbGRQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmllbGRQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmllbGRQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMsIGFsbG93TXVsdGlwbGVWYWx1ZXM6IHRoaXMuYWxsb3dNdWx0aXBsZVZhbHVlcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSXRlbUZsYWdzU2VsZWN0aW9uIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZsYWdzU2VsZWN0aW9uXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZsYWdzU2VsZWN0aW9uICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXRlbXM6IHRoaXMuaXRlbXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF1dG9GbGFnc1NlbGVjdGlvbiBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGbGFnc1NlbGVjdGlvblwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GbGFnc1NlbGVjdGlvbiAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRJbnB1dFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5UZXh0SW5wdXQgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBUZXh0SW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRBcmVhXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRleHRBcmVhICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb250UGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZvbnRQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRm9udFBpY2tlciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhZGllbnRCYXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiR3JhZGllbnRCYXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuR3JhZGllbnRCYXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkltYWdlVXBsb2FkXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkltYWdlVXBsb2FkICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMaXN0RWRpdG9yIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkxpc3RFZGl0b3JcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTGlzdEVkaXRvciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVhZE9ubHlUZXh0IGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlJlYWRPbmx5VGV4dFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5SZWFkT25seVRleHQgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNoYXBlTWFwU2VsZWN0b3IgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU2hhcGVNYXBTZWxlY3RvclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5TaGFwZU1hcFNlbGVjdG9yICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXNBek1hcFJlZmVyZW5jZVNlbGVjdG9yOiB0aGlzLmlzQXpNYXBSZWZlcmVuY2VTZWxlY3RvciB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlU2xpY2UgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kaXNwbGF5TmFtZUtleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGlzcGxheU5hbWVLZXkpIDogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRlc2NyaXB0aW9uS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kZXNjcmlwdGlvbktleSkgOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9udENvbnRyb2wgZXh0ZW5kcyBDb21wb3NpdGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRm9udENvbnRyb2xcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRm9udENvbnRyb2wgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuZm9udEZhbWlseS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9udFNpemUuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGJvbGQ6IChfYSA9IHRoaXMuYm9sZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBpdGFsaWM6IChfYiA9IHRoaXMuaXRhbGljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHVuZGVybGluZTogKF9jID0gdGhpcy51bmRlcmxpbmUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb250RmFtaWx5LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5mb250U2l6ZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmJvbGQgPyB0aGlzLmJvbGQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLml0YWxpYyA/IHRoaXMuaXRhbGljLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy51bmRlcmxpbmUgPyB0aGlzLnVuZGVybGluZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5mb250U2l6ZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYSA9IHRoaXMuYm9sZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9iID0gdGhpcy5pdGFsaWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYyA9IHRoaXMudW5kZXJsaW5lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Muc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNYXJnaW5QYWRkaW5nIGV4dGVuZHMgQ29tcG9zaXRlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk1hcmdpblBhZGRpbmdcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTWFyZ2luUGFkZGluZyAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMuYm90dG9tLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnJpZ2h0LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMudG9wLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuYm90dG9tLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB0aGlzLmxlZnQuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnJpZ2h0LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy50b3Auc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLmJvdHRvbS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250YWluZXJJdGVtIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcy5tYXAiLCJpbXBvcnQgeyBDb21wb3NpdGVDYXJkLCBTaW1wbGVDYXJkIH0gZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyID0gbG9jYWxpemF0aW9uTWFuYWdlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdmlzdWFsIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWwgZnJvbSBtZXRhZGF0YSBkYXRhVmlld1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFWaWV3cyBtZXRhZGF0YSBkYXRhVmlldyBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB2aXN1YWwgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbFxuICAgICAqL1xuICAgIHBvcHVsYXRlRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwodHlwZUNsYXNzLCBkYXRhVmlldykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBsZXQgZGVmYXVsdFNldHRpbmdzID0gbmV3IHR5cGVDbGFzcygpO1xuICAgICAgICBsZXQgZGF0YVZpZXdPYmplY3RzID0gKF9hID0gZGF0YVZpZXcgPT09IG51bGwgfHwgZGF0YVZpZXcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3Lm1ldGFkYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub2JqZWN0cztcbiAgICAgICAgaWYgKGRhdGFWaWV3T2JqZWN0cykge1xuICAgICAgICAgICAgLy8gbG9vcCBvdmVyIGVhY2ggZm9ybWF0dGluZyBwcm9wZXJ0eSBhbmQgc2V0IGl0cyBuZXcgdmFsdWUgaWYgZXhpc3RzXG4gICAgICAgICAgICAoX2IgPSBkZWZhdWx0U2V0dGluZ3MuY2FyZHMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkIGluc3RhbmNlb2YgQ29tcG9zaXRlQ2FyZClcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID8gW2NhcmRdIDogY2FyZC5ncm91cHMpO1xuICAgICAgICAgICAgICAgIGNhcmRHcm91cEluc3RhbmNlcy5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBjdXJyZW50IHRvcCBsZXZlbCB0b2dnbGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gbnVsbCB8fCBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIChfZCA9IChfYyA9IGNhcmRHcm91cEluc3RhbmNlID09PSBudWxsIHx8IGNhcmRHcm91cEluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGNvbnRhaW5lckl0ZW0gPT09IG51bGwgfHwgY29udGFpbmVySXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGFpbmVySXRlbS5zbGljZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0U2V0dGluZ3M7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGZvcm1hdHRpbmcgbW9kZWwgYnkgcGFyc2luZyBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIG9iamVjdFxuICAgICAqXG4gICAgICogQHJldHVybnMgcG93ZXJiaSB2aXN1YWwgZm9ybWF0dGluZyBtb2RlbFxuICAgICAqL1xuICAgIGJ1aWxkRm9ybWF0dGluZ01vZGVsKGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKSB7XG4gICAgICAgIGxldCBmb3JtYXR0aW5nTW9kZWwgPSB7XG4gICAgICAgICAgICBjYXJkczogW11cbiAgICAgICAgfTtcbiAgICAgICAgZm9ybWF0dGluZ1NldHRpbmdzTW9kZWwuY2FyZHNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGluZ0NhcmQgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZC5kaXNwbGF5TmFtZUtleSkgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZC5kaXNwbGF5TmFtZUtleSkgOiBjYXJkLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGVzY3JpcHRpb25LZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGVzY3JpcHRpb25LZXkpIDogY2FyZC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgICAgIHVpZDogY2FyZC5uYW1lICsgXCItY2FyZFwiLFxuICAgICAgICAgICAgICAgIGFuYWx5dGljc1BhbmU6IGNhcmQuYW5hbHl0aWNzUGFuZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvYmplY3ROYW1lID0gY2FyZC5uYW1lO1xuICAgICAgICAgICAgaWYgKGNhcmQudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgIGxldCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZC50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQudG9wTGV2ZWxUb2dnbGUgPSB0b3BMZXZlbFRvZ2dsZVNsaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9hID0gY2FyZC5vblByZVByb2Nlc3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGNhcmQpO1xuICAgICAgICAgICAgY29uc3QgaXNTaW1wbGVDYXJkID0gY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQ7XG4gICAgICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoaXNTaW1wbGVDYXJkID9cbiAgICAgICAgICAgICAgICBbY2FyZF0uZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpIDpcbiAgICAgICAgICAgICAgICBjYXJkLmdyb3Vwcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkpO1xuICAgICAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBVaWQgPSBjYXJkR3JvdXBJbnN0YW5jZS5uYW1lICsgXCItZ3JvdXBcIjtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGdyb3VwIGZvciBlYWNoIGdyb3VwXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0dyb3VwID0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzbGljZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB1aWQ6IGdyb3VwVWlkLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogY2FyZEdyb3VwSW5zdGFuY2UuY29sbGFwc2libGUsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5U2F2ZVNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2UuZGVsYXlTYXZlU2xpY2VzLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2FyZEdyb3VwSW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkUmVhc29uOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNhYmxlZFJlYXNvbixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLmdyb3Vwcy5wdXNoKGZvcm1hdHRpbmdHcm91cCk7XG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSBmb3JtYXR0aW5nIG1vZGVsIGFkZHMgZGF0YSBwb2ludHMgb3IgdG9wIGNhdGVnb3JpZXMgKExpa2Ugd2hlbiB5b3UgbW9kaWZ5IHNwZWNpZmljIHZpc3VhbCBjYXRlZ29yeSBjb2xvcikuXG4gICAgICAgICAgICAgICAgLy8gdGhlc2UgY2F0ZWdvcmllcyB1c2Ugc2FtZSBvYmplY3QgbmFtZSBhbmQgcHJvcGVydHkgbmFtZSBmcm9tIGNhcGFiaWxpdGllcyBhbmQgdGhlIGdlbmVyYXRlZCB1aWQgd2lsbCBiZSB0aGUgc2FtZSBmb3IgdGhlc2UgZm9ybWF0dGluZyBjYXRlZ29yaWVzIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBTb2x1dGlvbiA9PiBTYXZlIHNsaWNlIG5hbWVzIHRvIG1vZGlmeSBlYWNoIHNsaWNlIHVpZCB0byBiZSB1bmlxdWUgYnkgYWRkaW5nIGNvdW50ZXIgdmFsdWUgdG8gdGhlIG5ldyBzbGljZSB1aWRcbiAgICAgICAgICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgc2xpY2UgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyVWlkID0gZ3JvdXBVaWQgKyBcIi1jb250YWluZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0NvbnRhaW5lciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lci5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXIuZGlzcGxheU5hbWVLZXkpIDogY29udGFpbmVyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVyLmRlc2NyaXB0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lci5kZXNjcmlwdGlvbktleSkgOiBjb250YWluZXIuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lclVpZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY29udGFpbmVySXRlbXMuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbSBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckllbU5hbWUgPSBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5ID8gY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJJdGVtVWlkID0gY29udGFpbmVyVWlkICsgY29udGFpbmVySWVtTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0aW5nQ29udGFpbmVySXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5KSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lckl0ZW1VaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlcyBhbmQgYWRkIHRoZW0gdG8gY3VycmVudCBmb3JtYXR0aW5nIGNvbnRhaW5lciBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlczogY29udGFpbmVySXRlbS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdDb250YWluZXJJdGVtLnNsaWNlcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDb250YWluZXIuY29udGFpbmVySXRlbXMucHVzaChmb3JtYXR0aW5nQ29udGFpbmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nR3JvdXAuY29udGFpbmVyID0gZm9ybWF0dGluZ0NvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcExldmVsVG9nZ2xlU2xpY2UgPSBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wTGV2ZWxUb2dnbGVTbGljZS5zdXBwcmVzc0Rpc3BsYXlOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChmb3JtYXR0aW5nR3JvdXAuZGlzcGxheU5hbWUgPT0gdW5kZWZpbmVkID8gZm9ybWF0dGluZ0NhcmQgOiBmb3JtYXR0aW5nR3JvdXApLnRvcExldmVsVG9nZ2xlID0gdG9wTGV2ZWxUb2dnbGVTbGljZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzOiBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdHcm91cC5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC5yZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKTtcbiAgICAgICAgICAgIGZvcm1hdHRpbmdNb2RlbC5jYXJkcy5wdXNoKGZvcm1hdHRpbmdDYXJkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0aW5nTW9kZWw7XG4gICAgfVxuICAgIGJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlcyB9KSB7XG4gICAgICAgIC8vIEZpbHRlciBzbGljZXMgYmFzZWQgb24gdGhlaXIgdmlzaWJpbGl0eVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGluZ1NsaWNlID0gc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgaWYgKGZvcm1hdHRpbmdTbGljZSkge1xuICAgICAgICAgICAgICAgIC8vIE1vZGlmeSBmb3JtYXR0aW5nIHNsaWNlIHVpZCBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICBpZiAoc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSsrO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nU2xpY2UudWlkID0gYCR7Zm9ybWF0dGluZ1NsaWNlLnVpZH0tJHtzbGljZU5hbWVzW3NsaWNlLm5hbWVdfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdTbGljZXMucHVzaChmb3JtYXR0aW5nU2xpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gUHJvY2VlZGVkIHNsaWNlIG5hbWVzIGFyZSBzYXZlZCB0byBwcmV2ZW50IGR1cGxpY2F0ZWQgZGVmYXVsdCBkZXNjcmlwdG9ycyBpbiBjYXNlIG9mIHVzaW5nIFxuICAgICAgICAvLyBmb3JtYXR0aW5nIGNhdGVnb3JpZXMgJiBzZWxlY3RvcnMsIHNpbmNlIHRoZXkgaGF2ZSB0aGUgc2FtZSBkZXNjcmlwdG9yIG9iamVjdE5hbWUgYW5kIHByb3BlcnR5TmFtZVxuICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgIGxldCByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBsZXQgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICAgICAgbGV0IGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgaWYgKGNhcmQgaW5zdGFuY2VvZiBDb21wb3NpdGVDYXJkICYmIGNhcmQudG9wTGV2ZWxTbGljZSlcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLnB1c2goLi4uKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUpKTtcbiAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID9cbiAgICAgICAgICAgIFtjYXJkXS5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkgOlxuICAgICAgICAgICAgY2FyZC5ncm91cHMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpKTtcbiAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUsIGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcywgc2xpY2VOYW1lcywgY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSk7XG4gICAgICAgICAgICAoX2IgPSAoX2EgPSBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQodGhpcy5nZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSwgY29udGFpbmVySXRlbS5zbGljZXMsIHNsaWNlTmFtZXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMucHVzaCguLi5jYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdChjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgfVxuICAgIGdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUsIHNsaWNlcywgc2xpY2VOYW1lcywgdG9wTGV2ZWxTbGljZSkge1xuICAgICAgICBsZXQgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgaWYgKHRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgIHNsaWNlTmFtZXNbdG9wTGV2ZWxTbGljZS5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdCh0b3BMZXZlbFNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgIGlmIChzbGljZSAmJiAhc2xpY2VOYW1lc1tzbGljZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBmb3JtYXR0aW5nU2V0dGluZ3MgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZVwiO1xuZXhwb3J0IHsgZm9ybWF0dGluZ1NldHRpbmdzLCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEJ1aWxkIGFuZCByZXR1cm4gZm9ybWF0dGluZyBkZXNjcmlwdG9yIGZvciBzaW1wbGUgc2xpY2VcbiAqXG4gKiBAcGFyYW0gb2JqZWN0TmFtZSBPYmplY3QgbmFtZSBmcm9tIGNhcGFiaWxpdGllc1xuICogQHBhcmFtIHNsaWNlIGZvcm1hdHRpbmcgc2ltcGxlIHNsaWNlXG4gKiBAcmV0dXJucyBzaW1wbGUgc2xpY2UgZm9ybWF0dGluZyBkZXNjcmlwdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXNjcmlwdG9yKG9iamVjdE5hbWUsIHNsaWNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgcHJvcGVydHlOYW1lOiBzbGljZS5uYW1lLFxuICAgICAgICBzZWxlY3Rvcjogc2xpY2Uuc2VsZWN0b3IsXG4gICAgICAgIGFsdENvbnN0YW50VmFsdWVTZWxlY3Rvcjogc2xpY2UuYWx0Q29uc3RhbnRTZWxlY3RvcixcbiAgICAgICAgaW5zdGFuY2VLaW5kOiBzbGljZS5pbnN0YW5jZUtpbmRcbiAgICB9O1xufVxuLyoqXG4gKiBHZXQgcHJvcGVydHkgdmFsdWUgZnJvbSBkYXRhdmlldyBvYmplY3RzIGlmIGV4aXN0c1xuICogRWxzZSByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUgZnJvbSBmb3JtYXR0aW5nIHNldHRpbmdzIG9iamVjdFxuICpcbiAqIEBwYXJhbSB2YWx1ZSBkYXRhdmlldyBvYmplY3QgdmFsdWVcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgZm9ybWF0dGluZyBzZXR0aW5ncyBkZWZhdWx0IHZhbHVlXG4gKiBAcmV0dXJucyBmb3JtYXR0aW5nIHByb3BlcnR5IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKHNsaWNlLCB2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiAhdmFsdWUuc29saWQpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLnNvbGlkLmNvbG9yIH07XG4gICAgfVxuICAgIGlmIChzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2UuaXRlbXMpIHtcbiAgICAgICAgbGV0IGl0ZW1zQXJyYXkgPSBzbGljZS5pdGVtcztcbiAgICAgICAgcmV0dXJuIGl0ZW1zQXJyYXkuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT0gdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NVdGlscy5qcy5tYXAiLCIvKlxyXG4gKiAgUG93ZXIgQkkgVmlzdWFsaXphdGlvbnNcclxuICpcclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uXHJcbiAqICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTUlUIExpY2Vuc2VcclxuICpcclxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiXCJTb2Z0d2FyZVwiXCIpLCB0byBkZWFsXHJcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgKkFTIElTKiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiAqICBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbFwiO1xyXG5cclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2ltcGxlQ2FyZDtcclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlID0gZm9ybWF0dGluZ1NldHRpbmdzLlNsaWNlO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwgPSBmb3JtYXR0aW5nU2V0dGluZ3MuTW9kZWw7XHJcblxyXG4vKipcclxuICogR2VuZXJpYyBMaW5lIFNldHRpbmdzIENhcmRcclxuICovXHJcbmNsYXNzIExpbmVTZXR0aW5nc0NhcmQgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIGxpbmVDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwibGluZUNvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ291bGV1ciBkZSBsYSBsaWduZVwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzQjYwQzRcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdHJva2VXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInN0cm9rZVdpZHRoXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiw4lwYWlzc2V1clwiLFxyXG4gICAgICAgIHZhbHVlOiAzXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93TWFya2VycyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dNYXJrZXJzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbGVzIG1hcnF1ZXVyc1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFya2VyU2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm1hcmtlclNpemVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUYWlsbGUgZGVzIG1hcnF1ZXVyc1wiLFxyXG4gICAgICAgIHZhbHVlOiA1XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaW5lU3R5bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJsaW5lU3R5bGVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdHlsZSBkZSBsaWduZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiQ29udGludVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGFzaGVkXCIsIGRpc3BsYXlOYW1lOiBcIlBvaW50aWxsw6lzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkb3R0ZWRcIiwgZGlzcGxheU5hbWU6IFwiUG9pbnRzXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiQ29udGludVwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN0ZXBwZWQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzdGVwcGVkXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTGlnbmUgZW4gZXNjYWxpZXJcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW1xyXG4gICAgICAgIHRoaXMubGluZUNvbG9yLCBcclxuICAgICAgICB0aGlzLnN0cm9rZVdpZHRoLCBcclxuICAgICAgICB0aGlzLmxpbmVTdHlsZSxcclxuICAgICAgICB0aGlzLnNob3dNYXJrZXJzLCBcclxuICAgICAgICB0aGlzLm1hcmtlclNpemUsXHJcbiAgICAgICAgdGhpcy5zdGVwcGVkXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZywgZGVmYXVsdENvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xyXG4gICAgICAgIHRoaXMubGluZUNvbG9yLnZhbHVlLnZhbHVlID0gZGVmYXVsdENvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJpYyBHcmFkaWVudCBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBHcmFkaWVudFNldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvd0dyYWRpZW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic2hvd0dyYWRpZW50XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbGUgZMOpZ3JhZMOpXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGdyYWRpZW50Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImdyYWRpZW50Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDb3VsZXVyIGR1IGTDqWdyYWTDqVwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzQjYwQzRcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBncmFkaWVudEludGVuc2l0eSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImdyYWRpZW50SW50ZW5zaXR5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSW50ZW5zaXTDqSAoMC0xKVwiLFxyXG4gICAgICAgIHZhbHVlOiAwLjNcclxuICAgIH0pO1xyXG5cclxuICAgIGdyYWRpZW50RGlyZWN0aW9uID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZ3JhZGllbnREaXJlY3Rpb25cIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEaXJlY3Rpb25cIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcInZlcnRpY2FsXCIsIGRpc3BsYXlOYW1lOiBcIkhhdXQg4oaSIEJhc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwidmVydGljYWwtcmV2ZXJzZVwiLCBkaXNwbGF5TmFtZTogXCJCYXMg4oaSIEhhdXRcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImhvcml6b250YWxcIiwgZGlzcGxheU5hbWU6IFwiR2F1Y2hlIOKGkiBEcm9pdGVcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImhvcml6b250YWwtcmV2ZXJzZVwiLCBkaXNwbGF5TmFtZTogXCJEcm9pdGUg4oaSIEdhdWNoZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGlhZ29uYWxcIiwgZGlzcGxheU5hbWU6IFwiRGlhZ29uYWxlIOKGmFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGlhZ29uYWwtcmV2ZXJzZVwiLCBkaXNwbGF5TmFtZTogXCJEaWFnb25hbGUg4oaZXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwidmVydGljYWxcIiwgZGlzcGxheU5hbWU6IFwiSGF1dCDihpIgQmFzXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93R3JhZGllbnQsXHJcbiAgICAgICAgdGhpcy5ncmFkaWVudENvbG9yLCBcclxuICAgICAgICB0aGlzLmdyYWRpZW50SW50ZW5zaXR5LCBcclxuICAgICAgICB0aGlzLmdyYWRpZW50RGlyZWN0aW9uXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZywgZGVmYXVsdENvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JhZGllbnRDb2xvci52YWx1ZS52YWx1ZSA9IGRlZmF1bHRDb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFggQXhpcyBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBYQXhpc1NldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsJ2F4ZSBYXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGF4aXNDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYXhpc0NvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ291bGV1clwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiM2NjY2NjZcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGFpbGxlIGR1IHRleHRlXCIsXHJcbiAgICAgICAgdmFsdWU6IDExXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZhbWlsbGUgZGUgcG9saWNlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQXJpYWxcIiwgZGlzcGxheU5hbWU6IFwiQXJpYWxcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkNvdXJpZXIgTmV3XCIsIGRpc3BsYXlOYW1lOiBcIkNvdXJpZXIgTmV3XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJHZW9yZ2lhXCIsIGRpc3BsYXlOYW1lOiBcIkdlb3JnaWFcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlZlcmRhbmFcIiwgZGlzcGxheU5hbWU6IFwiVmVyZGFuYVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyIGxlIHRpdHJlXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aXRsZVRleHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZVRleHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0ZSBkdSB0aXRyZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlRpdHJlIGRlIGwnYXhlIFhcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ4QXhpc1NldHRpbmdzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJBeGUgWFwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LFxyXG4gICAgICAgIHRoaXMuYXhpc0NvbG9yLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LFxyXG4gICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgdGhpcy50aXRsZVRleHRcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBZIEF4aXMgU2V0dGluZ3MgQ2FyZFxyXG4gKi9cclxuY2xhc3MgWUF4aXNTZXR0aW5nc0NhcmQgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIHNob3cgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbCdheGUgWVwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBheGlzQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImF4aXNDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXJcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjNjY2NjY2XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udFNpemUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRhaWxsZSBkdSB0ZXh0ZVwiLFxyXG4gICAgICAgIHZhbHVlOiAxMVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udEZhbWlseSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGYW1pbGxlIGRlIHBvbGljZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiU2Vnb2UgVUlcIiwgZGlzcGxheU5hbWU6IFwiU2Vnb2UgVUlcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkFyaWFsXCIsIGRpc3BsYXlOYW1lOiBcIkFyaWFsXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJDb3VyaWVyIE5ld1wiLCBkaXNwbGF5TmFtZTogXCJDb3VyaWVyIE5ld1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiR2VvcmdpYVwiLCBkaXNwbGF5TmFtZTogXCJHZW9yZ2lhXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJWZXJkYW5hXCIsIGRpc3BsYXlOYW1lOiBcIlZlcmRhbmFcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRpdGxlID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidGl0bGVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsZSB0aXRyZVwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGVUZXh0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwidGl0bGVUZXh0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dGUgZHUgdGl0cmVcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJUaXRyZSBkZSBsJ2F4ZSBZXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGRpc3BsYXlVbml0cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImRpc3BsYXlVbml0c1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlVuaXTDqXMgZCdhZmZpY2hhZ2VcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjBcIiwgZGlzcGxheU5hbWU6IFwiQXV0b1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMVwiLCBkaXNwbGF5TmFtZTogXCJBdWN1blwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMFwiLCBkaXNwbGF5TmFtZTogXCJNaWxsaWVycyAoSylcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDAwMDBcIiwgZGlzcGxheU5hbWU6IFwiTWlsbGlvbnMgKE0pXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIxMDAwMDAwMDAwXCIsIGRpc3BsYXlOYW1lOiBcIk1pbGxpYXJkcyAoTWRzKVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIjBcIiwgZGlzcGxheU5hbWU6IFwiQXV0b1wiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByZWNpc2lvbiA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInByZWNpc2lvblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkTDqWNpbWFsZXNcIixcclxuICAgICAgICB2YWx1ZTogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlWUF4aXNCaXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ1c2VZQXhpc0Jpc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyIGF4ZSBZIGJpc1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ5QXhpc1NldHRpbmdzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJBeGUgWVwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LFxyXG4gICAgICAgIHRoaXMuYXhpc0NvbG9yLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LFxyXG4gICAgICAgIHRoaXMuZGlzcGxheVVuaXRzLFxyXG4gICAgICAgIHRoaXMucHJlY2lzaW9uLFxyXG4gICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgdGhpcy50aXRsZVRleHQsXHJcbiAgICAgICAgdGhpcy51c2VZQXhpc0Jpc1xyXG4gICAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdyaWQgU2V0dGluZ3MgQ2FyZFxyXG4gKi9cclxuY2xhc3MgR3JpZFNldHRpbmdzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvd0hvcml6b250YWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93SG9yaXpvbnRhbFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkdyaWxsZSBob3Jpem9udGFsZVwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93VmVydGljYWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93VmVydGljYWxcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJHcmlsbGUgdmVydGljYWxlXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBncmlkQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImdyaWRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgZGUgbGEgZ3JpbGxlXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2YwZjBmMFwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGdyaWRUaGlja25lc3MgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJncmlkVGhpY2tuZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiw4lwYWlzc2V1clwiLFxyXG4gICAgICAgIHZhbHVlOiAxXHJcbiAgICB9KTtcclxuXHJcbiAgICBncmlkU3R5bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJncmlkU3R5bGVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdHlsZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiQ29udGludVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGFzaGVkXCIsIGRpc3BsYXlOYW1lOiBcIlBvaW50aWxsw6lzXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiZGFzaGVkXCIsIGRpc3BsYXlOYW1lOiBcIlBvaW50aWxsw6lzXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJncmlkU2V0dGluZ3NcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkdyaWxsZVwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93SG9yaXpvbnRhbCxcclxuICAgICAgICB0aGlzLnNob3dWZXJ0aWNhbCxcclxuICAgICAgICB0aGlzLmdyaWRDb2xvcixcclxuICAgICAgICB0aGlzLmdyaWRUaGlja25lc3MsXHJcbiAgICAgICAgdGhpcy5ncmlkU3R5bGVcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEYXRhIExhYmVscyBTZXR0aW5ncyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBEYXRhTGFiZWxzQ2FyZCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBZmZpY2hlciBsZXMgw6l0aXF1ZXR0ZXNcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJjb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXJcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMDAwMDAwXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udFNpemUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRhaWxsZSBkdSB0ZXh0ZVwiLFxyXG4gICAgICAgIHZhbHVlOiA5XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZhbWlsbGUgZGUgcG9saWNlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQXJpYWxcIiwgZGlzcGxheU5hbWU6IFwiQXJpYWxcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkNvdXJpZXIgTmV3XCIsIGRpc3BsYXlOYW1lOiBcIkNvdXJpZXIgTmV3XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiU2Vnb2UgVUlcIiwgZGlzcGxheU5hbWU6IFwiU2Vnb2UgVUlcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaXNwbGF5VW5pdHMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJkaXNwbGF5VW5pdHNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJVbml0w6lzIGQnYWZmaWNoYWdlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIwXCIsIGRpc3BsYXlOYW1lOiBcIkF1dG9cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjFcIiwgZGlzcGxheU5hbWU6IFwiQXVjdW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDBcIiwgZGlzcGxheU5hbWU6IFwiTWlsbGllcnMgKEspXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCIxMDAwMDAwXCIsIGRpc3BsYXlOYW1lOiBcIk1pbGxpb25zIChNKVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMDAwMDAwMFwiLCBkaXNwbGF5TmFtZTogXCJNaWxsaWFyZHMgKE1kcylcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIwXCIsIGRpc3BsYXlOYW1lOiBcIkF1dG9cIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcmVjaXNpb24gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJwcmVjaXNpb25cIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEw6ljaW1hbGVzXCIsXHJcbiAgICAgICAgdmFsdWU6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIG5hbWU6IHN0cmluZyA9IFwiZGF0YUxhYmVsc1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiw4l0aXF1ZXR0ZXMgZGUgZG9ubsOpZXNcIjtcclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW1xyXG4gICAgICAgIHRoaXMuc2hvdyxcclxuICAgICAgICB0aGlzLmNvbG9yLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LFxyXG4gICAgICAgIHRoaXMuZGlzcGxheVVuaXRzLFxyXG4gICAgICAgIHRoaXMucHJlY2lzaW9uXHJcbiAgICBdO1xyXG59XHJcblxyXG4vKipcclxuICogTGVnZW5kIFNldHRpbmdzIENhcmRcclxuICovXHJcbmNsYXNzIExlZ2VuZENhcmQgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIHNob3cgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgbGEgbMOpZ2VuZGVcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcG9zaXRpb24gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJwb3NpdGlvblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlBvc2l0aW9uXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJUb3BcIiwgZGlzcGxheU5hbWU6IFwiSGF1dFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQm90dG9tXCIsIGRpc3BsYXlOYW1lOiBcIkJhc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiTGVmdFwiLCBkaXNwbGF5TmFtZTogXCJHYXVjaGVcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlJpZ2h0XCIsIGRpc3BsYXlOYW1lOiBcIkRyb2l0ZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiVG9wQ2VudGVyXCIsIGRpc3BsYXlOYW1lOiBcIkhhdXQgY2VudHJlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJCb3R0b21DZW50ZXJcIiwgZGlzcGxheU5hbWU6IFwiQmFzIGNlbnRyZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlRvcFwiLCBkaXNwbGF5TmFtZTogXCJIYXV0XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJmb250Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDb3VsZXVyXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzY2NjY2NlwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRTaXplID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUYWlsbGUgZHUgdGV4dGVcIixcclxuICAgICAgICB2YWx1ZTogMTBcclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRGYW1pbHkgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRmFtaWxsZSBkZSBwb2xpY2VcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlNlZ29lIFVJXCIsIGRpc3BsYXlOYW1lOiBcIlNlZ29lIFVJXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJBcmlhbFwiLCBkaXNwbGF5TmFtZTogXCJBcmlhbFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291cmllciBOZXdcIiwgZGlzcGxheU5hbWU6IFwiQ291cmllciBOZXdcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJTZWdvZSBVSVwiLCBkaXNwbGF5TmFtZTogXCJTZWdvZSBVSVwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG5hbWU6IHN0cmluZyA9IFwibGVnZW5kXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJMw6lnZW5kZVwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgdGhpcy5mb250Q29sb3IsXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSxcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHlcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWaXN1YWwgc2V0dGluZ3MgbW9kZWwgY2xhc3NcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIHtcclxuICAgIC8vIFBhbGV0dGUgcGFyIGTDqWZhdXRcclxuICAgIHByaXZhdGUgZGVmYXVsdENvbG9ycyA9IFtcIiMzQjYwQzRcIiwgXCIjRTk0RjM3XCIsIFwiIzQ0QkJBNFwiLCBcIiNGN0I1MzhcIiwgXCIjREI1NDYxXCIsIFwiIzNGODhDNVwiLCBcIiM3RDRFNTdcIiwgXCIjRDY2ODUzXCIsIFwiIzIxMkQ0MFwiLCBcIiMxMTE1MUNcIl07XHJcblxyXG4gICAgbGluZVNldHRpbmdzMSA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzMVwiLCBcIkxpZ25lIDFcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzBdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3MxID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczFcIiwgXCJEw6lncmFkw6kgMVwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbMF0pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczIgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczJcIiwgXCJMaWduZSAyXCIsIHRoaXMuZGVmYXVsdENvbG9yc1sxXSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzMiA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3MyXCIsIFwiRMOpZ3JhZMOpIDJcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzFdKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3MzID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3MzXCIsIFwiTGlnbmUgM1wiLCB0aGlzLmRlZmF1bHRDb2xvcnNbMl0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczMgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzM1wiLCBcIkTDqWdyYWTDqSAzXCIsIHRoaXMuZGVmYXVsdENvbG9yc1syXSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzNCA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzNFwiLCBcIkxpZ25lIDRcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzNdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3M0ID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczRcIiwgXCJEw6lncmFkw6kgNFwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbM10pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczUgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczVcIiwgXCJMaWduZSA1XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s0XSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzNSA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3M1XCIsIFwiRMOpZ3JhZMOpIDVcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzRdKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3M2ID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3M2XCIsIFwiTGlnbmUgNlwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbNV0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczYgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzNlwiLCBcIkTDqWdyYWTDqSA2XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s1XSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzNyA9IG5ldyBMaW5lU2V0dGluZ3NDYXJkKFwibGluZVNldHRpbmdzN1wiLCBcIkxpZ25lIDdcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzZdKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3M3ID0gbmV3IEdyYWRpZW50U2V0dGluZ3NDYXJkKFwiZ3JhZGllbnRTZXR0aW5nczdcIiwgXCJEw6lncmFkw6kgN1wiLCB0aGlzLmRlZmF1bHRDb2xvcnNbNl0pO1xyXG5cclxuICAgIGxpbmVTZXR0aW5nczggPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczhcIiwgXCJMaWduZSA4XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s3XSk7XHJcbiAgICBncmFkaWVudFNldHRpbmdzOCA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3M4XCIsIFwiRMOpZ3JhZMOpIDhcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzddKTtcclxuXHJcbiAgICBsaW5lU2V0dGluZ3M5ID0gbmV3IExpbmVTZXR0aW5nc0NhcmQoXCJsaW5lU2V0dGluZ3M5XCIsIFwiTGlnbmUgOVwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbOF0pO1xyXG4gICAgZ3JhZGllbnRTZXR0aW5nczkgPSBuZXcgR3JhZGllbnRTZXR0aW5nc0NhcmQoXCJncmFkaWVudFNldHRpbmdzOVwiLCBcIkTDqWdyYWTDqSA5XCIsIHRoaXMuZGVmYXVsdENvbG9yc1s4XSk7XHJcblxyXG4gICAgbGluZVNldHRpbmdzMTAgPSBuZXcgTGluZVNldHRpbmdzQ2FyZChcImxpbmVTZXR0aW5nczEwXCIsIFwiTGlnbmUgMTBcIiwgdGhpcy5kZWZhdWx0Q29sb3JzWzldKTtcclxuICAgIGdyYWRpZW50U2V0dGluZ3MxMCA9IG5ldyBHcmFkaWVudFNldHRpbmdzQ2FyZChcImdyYWRpZW50U2V0dGluZ3MxMFwiLCBcIkTDqWdyYWTDqSAxMFwiLCB0aGlzLmRlZmF1bHRDb2xvcnNbOV0pO1xyXG5cclxuICAgIHhBeGlzU2V0dGluZ3MgPSBuZXcgWEF4aXNTZXR0aW5nc0NhcmQoKTtcclxuICAgIHlBeGlzU2V0dGluZ3MgPSBuZXcgWUF4aXNTZXR0aW5nc0NhcmQoKTtcclxuICAgIGdyaWRTZXR0aW5ncyA9IG5ldyBHcmlkU2V0dGluZ3NDYXJkKCk7XHJcbiAgICBkYXRhTGFiZWxzID0gbmV3IERhdGFMYWJlbHNDYXJkKCk7XHJcbiAgICBsZWdlbmQgPSBuZXcgTGVnZW5kQ2FyZCgpO1xyXG5cclxuICAgIGNhcmRzID0gW1xyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzMSwgdGhpcy5ncmFkaWVudFNldHRpbmdzMSxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczIsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczIsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3MzLCB0aGlzLmdyYWRpZW50U2V0dGluZ3MzLFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzNCwgdGhpcy5ncmFkaWVudFNldHRpbmdzNCxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczUsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczUsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3M2LCB0aGlzLmdyYWRpZW50U2V0dGluZ3M2LFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzNywgdGhpcy5ncmFkaWVudFNldHRpbmdzNyxcclxuICAgICAgICB0aGlzLmxpbmVTZXR0aW5nczgsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczgsXHJcbiAgICAgICAgdGhpcy5saW5lU2V0dGluZ3M5LCB0aGlzLmdyYWRpZW50U2V0dGluZ3M5LFxyXG4gICAgICAgIHRoaXMubGluZVNldHRpbmdzMTAsIHRoaXMuZ3JhZGllbnRTZXR0aW5nczEwLFxyXG4gICAgICAgIHRoaXMueEF4aXNTZXR0aW5ncyxcclxuICAgICAgICB0aGlzLnlBeGlzU2V0dGluZ3MsXHJcbiAgICAgICAgdGhpcy5ncmlkU2V0dGluZ3MsXHJcbiAgICAgICAgdGhpcy5kYXRhTGFiZWxzLFxyXG4gICAgICAgIHRoaXMubGVnZW5kXHJcbiAgICBdO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHBvd2VyYmkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcclxuaW1wb3J0IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xyXG5pbXBvcnQgVmlzdWFsVXBkYXRlT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsVXBkYXRlT3B0aW9ucztcclxuaW1wb3J0IElWaXN1YWwgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLklWaXN1YWw7XHJcbmltcG9ydCBJU2VsZWN0aW9uSWQgPSBwb3dlcmJpLnZpc3VhbHMuSVNlbGVjdGlvbklkO1xyXG5pbXBvcnQgSVNlbGVjdGlvbk1hbmFnZXIgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkuSVNlbGVjdGlvbk1hbmFnZXI7XHJcbmltcG9ydCBJVmlzdWFsTGljZW5zZU1hbmFnZXIgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkuSVZpc3VhbExpY2Vuc2VNYW5hZ2VyO1xyXG5pbXBvcnQgTGljZW5zZUluZm9SZXN1bHQgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLkxpY2Vuc2VJbmZvUmVzdWx0O1xyXG5pbXBvcnQgU2VydmljZVBsYW4gPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLlNlcnZpY2VQbGFuO1xyXG5pbXBvcnQgU2VydmljZVBsYW5TdGF0ZSA9IHBvd2VyYmkuU2VydmljZVBsYW5TdGF0ZTtcclxuaW1wb3J0IExpY2Vuc2VOb3RpZmljYXRpb25UeXBlID0gcG93ZXJiaS5MaWNlbnNlTm90aWZpY2F0aW9uVHlwZTtcclxuXHJcbmltcG9ydCB7IFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZS92aXN1YWwubGVzc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpc3VhbCBpbXBsZW1lbnRzIElWaXN1YWwge1xyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzdmc6IFNWR1NWR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1haW5Hcm91cDogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGF4aXNHcm91cDogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGxpbmVzR3JvdXA6IFNWR0dFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0b29sdGlwOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIFxyXG4gICAgLy8gQ2FjaGVkIGNhbnZhcyBmb3IgdGV4dCBtZWFzdXJlbWVudCAodXNlZCBmb3IgbGFiZWwgdHJ1bmNhdGlvbilcclxuICAgIHByaXZhdGUgc3RhdGljIF9sYWJlbE1lYXN1cmVDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBcclxuICAgIC8vIE1hcmdlc1xyXG4gICAgcHJpdmF0ZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA0MCwgYm90dG9tOiA0MCwgbGVmdDogNjAgfTtcclxuICAgIFxyXG4gICAgLy8gU2V0dGluZ3NcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzOiBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbDtcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTogRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcclxuICAgIFxyXG4gICAgLy8gRHJpbGwgZG93biBzdXBwb3J0XHJcbiAgICBwcml2YXRlIGhvc3Q6IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuSVZpc3VhbEhvc3Q7XHJcbiAgICBwcml2YXRlIHNlbGVjdGlvbk1hbmFnZXI6IElTZWxlY3Rpb25NYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBkYXRhVmlldzogcG93ZXJiaS5EYXRhVmlldztcclxuICAgIFxyXG4gICAgLy8gTGljZW5zaW5nIGF2ZWMgbCdBUEkgb2ZmaWNpZWxsZSBNaWNyb3NvZnQgUG93ZXIgQklcclxuICAgIHByaXZhdGUgbGljZW5zZU1hbmFnZXI6IElWaXN1YWxMaWNlbnNlTWFuYWdlcjtcclxuICAgIHByaXZhdGUgY3VycmVudFVzZXJWYWxpZFBsYW5zOiBTZXJ2aWNlUGxhbltdIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBoYXNTZXJ2aWNlUGxhbnM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGlzTGljZW5zZVVuc3VwcG9ydGVkRW52OiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBpc05vdGlmaWNhdGlvbkRpc3BsYXllZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0Tm90aWZpY2F0aW9uVHlwZTogTGljZW5zZU5vdGlmaWNhdGlvblR5cGUgPSBMaWNlbnNlTm90aWZpY2F0aW9uVHlwZS5HZW5lcmFsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gb3B0aW9ucy5lbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IG9wdGlvbnMuaG9zdDtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSA9IG5ldyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG5cclxuICAgICAgICAvLyAxLiBDcsOpYXRpb24gZHUgU1ZHXHJcbiAgICAgICAgY29uc3QgbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbiAgICAgICAgdGhpcy5zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwic3ZnXCIpO1xyXG4gICAgICAgIHRoaXMuc3ZnLmNsYXNzTGlzdC5hZGQoXCJjaGFydC1jb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5zdmcpO1xyXG5cclxuICAgICAgICAvLyAyLiBUb29sdGlwXHJcbiAgICAgICAgdGhpcy50b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuY2xhc3NOYW1lID0gXCJjdXN0b20tdG9vbHRpcFwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsIDAsIDAsIDAuOClcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLnBhZGRpbmcgPSBcIjhweCAxMnB4XCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNHB4XCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMudG9vbHRpcCk7XHJcblxyXG4gICAgICAgIC8vIDMuIERlZnMgcG91ciBsZXMgZMOpZ3JhZMOpc1xyXG4gICAgICAgIGNvbnN0IGRlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZGVmc1wiKTtcclxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChkZWZzKTtcclxuXHJcbiAgICAgICAgLy8gNC4gR3JvdXBlc1xyXG4gICAgICAgIHRoaXMubWFpbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImdcIik7XHJcbiAgICAgICAgdGhpcy5heGlzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZ1wiKTtcclxuICAgICAgICB0aGlzLmxpbmVzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZ1wiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1haW5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmF4aXNHcm91cCk7XHJcbiAgICAgICAgdGhpcy5tYWluR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5saW5lc0dyb3VwKTtcclxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0aGlzLm1haW5Hcm91cCk7XHJcblxyXG4gICAgICAgIC8vIFBlcm1ldHRyZSBsZSBjb250ZXh0IG1lbnUgKGNsaWMgZHJvaXQpIHN1ciB0b3V0IGxlIHZpc3VlbFxyXG4gICAgICAgIHRoaXMuc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCBhcyBNb3VzZUV2ZW50O1xyXG4gICAgICAgICAgICAvLyBBZmZpY2hlciBsZSBtZW51IGNvbnRleHR1ZWwgUG93ZXIgQkkgYXZlYyBsZXMgb3B0aW9ucyBzdGFuZGFyZFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHt9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiBtb3VzZUV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICB5OiBtb3VzZUV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIETDqXPDqWxlY3Rpb25uZXIgbG9ycyBkJ3VuIGNsaWMgc3VyIGxlIGZvbmRcclxuICAgICAgICB0aGlzLnN2Zy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzZXIgbGUgZ2VzdGlvbm5haXJlIGRlIGxpY2VuY2VzIChBUEkgb2ZmaWNpZWxsZSBNaWNyb3NvZnQgUG93ZXIgQkkpXHJcbiAgICAgICAgdGhpcy5saWNlbnNlTWFuYWdlciA9IHRoaXMuaG9zdC5saWNlbnNlTWFuYWdlcjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSw6ljdXDDqXJlciBsZXMgcGxhbnMgZGUgc2VydmljZSBkZSBsaWNlbmNlXHJcbiAgICAgICAgdGhpcy5yZXRyaWV2ZUxpY2Vuc2VJbmZvKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogUsOpY3Vww6hyZSBsZXMgaW5mb3JtYXRpb25zIGRlIGxpY2VuY2UgZGUgbCd1dGlsaXNhdGV1ciB2aWEgbCdBUEkgb2ZmaWNpZWxsZSBQb3dlciBCSVxyXG4gICAgICogVXRpbGlzZSBnZXRBdmFpbGFibGVTZXJ2aWNlUGxhbnMoKSBwb3VyIG9idGVuaXIgbGVzIHBsYW5zIGRlIHNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXRyaWV2ZUxpY2Vuc2VJbmZvKCkge1xyXG4gICAgICAgIC8vIPCflJMgTU9ERSBEw4lWRUxPUFBFTUVOVCA6IETDqXNhY3RpdmVyIGNvbXBsw6h0ZW1lbnQgbGEgdsOpcmlmaWNhdGlvbiBkZSBsaWNlbmNlXHJcbiAgICAgICAgLy8gRMOpY29tbWVudGV6IGxhIGxpZ25lIHN1aXZhbnRlIHBvdXIgYWN0aXZlciBsZSBzeXN0w6htZSBkZSBsaWNlbnNpbmcgZW4gcHJvZHVjdGlvblxyXG4gICAgICAgIC8vdGhpcy5jaGVja0xpY2Vuc2VJblByb2R1Y3Rpb24oKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBFbiBtb2RlIGTDqXZlbG9wcGVtZW50LCB0b3Vqb3VycyBjb25zaWTDqXJlciBxdWUgbGEgbGljZW5jZSBlc3QgdmFsaWRlXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5STIE1vZGUgZMOpdmVsb3BwZW1lbnQgOiBWw6lyaWZpY2F0aW9uIGRlIGxpY2VuY2UgZMOpc2FjdGl2w6llXCIpO1xyXG4gICAgICAgIHRoaXMuaGFzU2VydmljZVBsYW5zID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzTGljZW5zZVVuc3VwcG9ydGVkRW52ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogVsOpcmlmaWUgbGVzIGxpY2VuY2VzIGVuIG1vZGUgcHJvZHVjdGlvbiAoQXBwU291cmNlKVxyXG4gICAgICogQ2V0dGUgbcOpdGhvZGUgZG9pdCDDqnRyZSBhcHBlbMOpZSB1bmlxdWVtZW50IGFwcsOocyBwdWJsaWNhdGlvbiBzdXIgQXBwU291cmNlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tMaWNlbnNlSW5Qcm9kdWN0aW9uKCkge1xyXG4gICAgICAgIC8vIPCfp6ogTU9ERSBURVNUIDogRMOpY29tbWVudGV6IGxlcyBsaWduZXMgc3VpdmFudGVzIHBvdXIgc2ltdWxlciB1biBlbnZpcm9ubmVtZW50IHNhbnMgbGljZW5jZVxyXG4gICAgICAgIC8vIHRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMubm90aWZ5TGljZW5zZVN0YXR1cygpO1xyXG4gICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAvLyDwn6eqIE1PREUgVEVTVCA6IETDqWNvbW1lbnRleiBsZXMgbGlnbmVzIHN1aXZhbnRlcyBwb3VyIHNpbXVsZXIgdW5lIGxpY2VuY2UgbWFucXVhbnRlXHJcbiAgICAgICAgLy8gdGhpcy5oYXNTZXJ2aWNlUGxhbnMgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLmlzTGljZW5zZVVuc3VwcG9ydGVkRW52ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5ub3RpZnlMaWNlbnNlU3RhdHVzKCk7XHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5saWNlbnNlTWFuYWdlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKEue+4jyBHZXN0aW9ubmFpcmUgZGUgbGljZW5jZXMgbm9uIGRpc3BvbmlibGUgLSBtb2RlIERlc2t0b3AvRGV2XCIpO1xyXG4gICAgICAgICAgICAvLyBFbiBtb2RlIGTDqXZlbG9wcGVtZW50LCBjb25zaWTDqXJlciBxdWUgbGEgbGljZW5jZSBlc3QgdmFsaWRlXHJcbiAgICAgICAgICAgIHRoaXMuaGFzU2VydmljZVBsYW5zID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0xpY2Vuc2VVbnN1cHBvcnRlZEVudiA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBwbGFucyBkZSBzZXJ2aWNlIGRpc3BvbmlibGVzIHBvdXIgY2V0IHV0aWxpc2F0ZXVyXHJcbiAgICAgICAgdGhpcy5saWNlbnNlTWFuYWdlci5nZXRBdmFpbGFibGVTZXJ2aWNlUGxhbnMoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OiBMaWNlbnNlSW5mb1Jlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwbGFucywgaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYsIGlzTGljZW5zZUluZm9BdmFpbGFibGUgfSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5SRIEluZm9ybWF0aW9ucyBkZSBsaWNlbmNlIHLDqWN1cMOpcsOpZXM6XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFucyxcclxuICAgICAgICAgICAgICAgICAgICBpc0xpY2Vuc2VVbnN1cHBvcnRlZEVudixcclxuICAgICAgICAgICAgICAgICAgICBpc0xpY2Vuc2VJbmZvQXZhaWxhYmxlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGlzTGljZW5zZUluZm9BdmFpbGFibGUgJiYgIWlzTGljZW5zZVVuc3VwcG9ydGVkRW52KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlsdHJlciB1bmlxdWVtZW50IGxlcyBwbGFucyBhY3RpZnNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyVmFsaWRQbGFucyA9IHBsYW5zPy5maWx0ZXIoKHsgc3RhdGUsIHNwSWRlbnRpZmllciB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFbDqXJpZmllciBxdWUgYydlc3QgYmllbiB1biBkZSBWT1MgcGxhbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWRJZGVudGlmaWVycyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VzdG9tdGFibGVwbGFuXCIgICAvLyDihpAgUmVtcGxhY2VyIHBhciB2b3RyZSB2cmFpIElEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRJZGVudGlmaWVycy5pbmNsdWRlcyhzcElkZW50aWZpZXIpICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlID09PSBTZXJ2aWNlUGxhblN0YXRlLkFjdGl2ZSB8fCBzdGF0ZSA9PT0gU2VydmljZVBsYW5TdGF0ZS5XYXJuaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1NlcnZpY2VQbGFucyA9ICEhdGhpcy5jdXJyZW50VXNlclZhbGlkUGxhbnM/Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNTZXJ2aWNlUGxhbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOKchSAke3RoaXMuY3VycmVudFVzZXJWYWxpZFBsYW5zLmxlbmd0aH0gcGxhbihzKSBkZSBzZXJ2aWNlIHZhbGlkZShzKSB0cm91dsOpKHMpYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4pqg77iPIEF1Y3VuIHBsYW4gZGUgc2VydmljZSB2YWxpZGUgdHJvdXbDqVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYgPSBpc0xpY2Vuc2VVbnN1cHBvcnRlZEVudjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWZmaWNoZXIgbGVzIG5vdGlmaWNhdGlvbnMgYXBwcm9wcmnDqWVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUxpY2Vuc2VTdGF0dXMoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuKdjCBFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgbGljZW5jZXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIC8vIEVuIGNhcyBkJ2VycmV1ciwgbmUgcGFzIGJsb3F1ZXIgbGUgdmlzdWVsIGVuIG1vZGUgZGV2XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyVmFsaWRQbGFucyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2VydmljZVBsYW5zID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBBZmZpY2hlIGxlcyBub3RpZmljYXRpb25zIGRlIGxpY2VuY2UgYXBwcm9wcmnDqWVzIHNlbG9uIGxlIHN0YXR1dFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG5vdGlmeUxpY2Vuc2VTdGF0dXMoKSB7XHJcbiAgICAgICAgLy8gRWZmYWNlciB0b3V0ZSBub3RpZmljYXRpb24gcHLDqWPDqWRlbnRlXHJcbiAgICAgICAgaWYgKHRoaXMubGljZW5zZU1hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5saWNlbnNlTWFuYWdlci5jbGVhckxpY2Vuc2VOb3RpZmljYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKFwiRXJyZXVyIGxvcnMgZHUgbmV0dG95YWdlIGRlcyBub3RpZmljYXRpb25zOlwiLCBlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2kgbCdlbnZpcm9ubmVtZW50IG5lIHN1cHBvcnRlIHBhcyBsZXMgbGljZW5jZXNcclxuICAgICAgICBpZiAodGhpcy5pc0xpY2Vuc2VVbnN1cHBvcnRlZEVudikge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dVbnN1cHBvcnRlZEVudk5vdGlmaWNhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpIGF1Y3VuIHBsYW4gZGUgc2VydmljZSB2YWxpZGUgbidlc3QgdHJvdXbDqVxyXG4gICAgICAgIGlmICh0aGlzLmhhc1NlcnZpY2VQbGFucyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGljZW5zZVJlcXVpcmVkTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2kgb24gYSBkZXMgcGxhbnMgdmFsaWRlcywgbmUgcmllbiBhZmZpY2hlclxyXG4gICAgICAgIGlmICh0aGlzLmhhc1NlcnZpY2VQbGFucyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTm90aWZpY2F0aW9uRGlzcGxheWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIExpY2VuY2UgdmFsaWRlIC0gVmlzdWVsIGZvbmN0aW9ubmVsXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBBZmZpY2hlIGxhIG5vdGlmaWNhdGlvbiBwb3VyIGVudmlyb25uZW1lbnQgbm9uIHN1cHBvcnTDqVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNob3dVbnN1cHBvcnRlZEVudk5vdGlmaWNhdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGljZW5zZU1hbmFnZXIgfHwgdGhpcy5pc05vdGlmaWNhdGlvbkRpc3BsYXllZCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGljZW5zZU1hbmFnZXIubm90aWZ5TGljZW5zZVJlcXVpcmVkKExpY2Vuc2VOb3RpZmljYXRpb25UeXBlLlVuc3VwcG9ydGVkRW52KVxyXG4gICAgICAgICAgICAudGhlbigoZGlzcGxheWVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTm90aWZpY2F0aW9uRGlzcGxheWVkID0gZGlzcGxheWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3BsYXllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+ToiBOb3RpZmljYXRpb24gYWZmaWNow6llIDogRW52aXJvbm5lbWVudCBub24gc3VwcG9ydMOpXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGwnYWZmaWNoYWdlIGRlIGxhIG5vdGlmaWNhdGlvbjpcIiwgZXJyKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQWZmaWNoZSBsYSBub3RpZmljYXRpb24gcG91ciBsaWNlbmNlIHJlcXVpc2VcclxuICAgICAqIFBldXQgdXRpbGlzZXIgR2VuZXJhbCAoaWPDtG5lKSBvdSBWaXN1YWxJc0Jsb2NrZWQgKG92ZXJsYXkgY29tcGxldClcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzaG93TGljZW5zZVJlcXVpcmVkTm90aWZpY2F0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saWNlbnNlTWFuYWdlciB8fCB0aGlzLmlzTm90aWZpY2F0aW9uRGlzcGxheWVkKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVXRpbGlzZXIgVmlzdWFsSXNCbG9ja2VkIHBvdXIgYmxvcXVlciBjb21wbMOodGVtZW50IGxlIHZpc3VlbFxyXG4gICAgICAgIC8vIE91IHV0aWxpc2VyIEdlbmVyYWwgcG91ciBhZmZpY2hlciB1bmlxdWVtZW50IHVuZSBpY8O0bmVcclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb25UeXBlID0gTGljZW5zZU5vdGlmaWNhdGlvblR5cGUuVmlzdWFsSXNCbG9ja2VkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGljZW5zZU1hbmFnZXIubm90aWZ5TGljZW5zZVJlcXVpcmVkKG5vdGlmaWNhdGlvblR5cGUpXHJcbiAgICAgICAgICAgIC50aGVuKChkaXNwbGF5ZWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNOb3RpZmljYXRpb25EaXNwbGF5ZWQgPSBkaXNwbGF5ZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzcGxheWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5OiIE5vdGlmaWNhdGlvbiBhZmZpY2jDqWUgOiBMaWNlbmNlIHJlcXVpc2VcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdhZmZpY2hhZ2UgZGUgbGEgbm90aWZpY2F0aW9uOlwiLCBlcnIpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBBZmZpY2hlIHVuZSBub3RpZmljYXRpb24gcG91ciB1bmUgZm9uY3Rpb25uYWxpdMOpIGJsb3F1w6llXHJcbiAgICAgKiBAcGFyYW0gZmVhdHVyZU5hbWUgTm9tIGRlIGxhIGZvbmN0aW9ubmFsaXTDqSBibG9xdcOpZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG5vdGlmeUZlYXR1cmVCbG9ja2VkKGZlYXR1cmVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGljZW5zZU1hbmFnZXIpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDcsOpZXIgdW4gbWVzc2FnZSBkJ2luZm8tYnVsbGUgcGVyc29ubmFsaXPDqVxyXG4gICAgICAgIGNvbnN0IHRvb2x0aXAgPSBgTGEgZm9uY3Rpb25uYWxpdMOpIFwiJHtmZWF0dXJlTmFtZX1cIiBuw6ljZXNzaXRlIHVuZSBsaWNlbmNlIHZhbGlkZS5gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGljZW5zZU1hbmFnZXIubm90aWZ5RmVhdHVyZUJsb2NrZWQodG9vbHRpcClcclxuICAgICAgICAgICAgLnRoZW4oKGRpc3BsYXllZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3BsYXllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDwn5OiIEZvbmN0aW9ubmFsaXTDqSBibG9xdcOpZSA6ICR7ZmVhdHVyZU5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdhZmZpY2hhZ2UgZGUgbGEgbm90aWZpY2F0aW9uOlwiLCBlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dUb29sdGlwKHg6IG51bWJlciwgeTogbnVtYmVyLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBOZXR0b3llciBsZSBjb250ZW51IHByw6ljw6lkZW50XHJcbiAgICAgICAgd2hpbGUgKHRoaXMudG9vbHRpcC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5yZW1vdmVDaGlsZCh0aGlzLnRvb2x0aXAuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEw6ljb3VwZXIgbGUgY29udGVudSBlbiBsaWduZXMgKHN1cHBvc2UgbGUgZm9ybWF0IFwiPGRpdj4uLi48L2Rpdj48ZGl2Pi4uLjwvZGl2PlwiKVxyXG4gICAgICAgIC8vIE9uIGV4dHJhaXQgbGUgdGV4dGUgZW50cmUgbGVzIGJhbGlzZXMgPGRpdj4uLi48L2Rpdj5cclxuICAgICAgICBjb25zdCBkaXZSZWdleCA9IC88ZGl2W14+XSo+KC4qPyk8XFwvZGl2Pi9nO1xyXG4gICAgICAgIGxldCBtYXRjaDtcclxuICAgICAgICB3aGlsZSAoKG1hdGNoID0gZGl2UmVnZXguZXhlYyhjb250ZW50KSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgLy8gU2kgbGUgY29udGVudSBjb250aWVudCA8c3Ryb25nPi4uLjwvc3Ryb25nPiwgb24gbGUgZ8OocmUgYXVzc2lcclxuICAgICAgICAgICAgY29uc3Qgc3Ryb25nUmVnZXggPSAvPHN0cm9uZ1tePl0qPiguKj8pPFxcL3N0cm9uZz4vO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJvbmdNYXRjaCA9IHN0cm9uZ1JlZ2V4LmV4ZWMobWF0Y2hbMV0pO1xyXG4gICAgICAgICAgICBpZiAoc3Ryb25nTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cm9uZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7XHJcbiAgICAgICAgICAgICAgICBzdHJvbmcudGV4dENvbnRlbnQgPSBzdHJvbmdNYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdHJvbmcpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWpvdXRlIGxlIHJlc3RlIGR1IHRleHRlIGFwcsOocyA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyU3Ryb25nID0gbWF0Y2hbMV0ucmVwbGFjZShzdHJvbmdSZWdleCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWZ0ZXJTdHJvbmcudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFmdGVyU3Ryb25nKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBtYXRjaFsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5zdHlsZS5sZWZ0ID0gKHggKyAxMCkgKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLnRvcCA9ICh5ICsgMTApICsgXCJweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGlkZVRvb2x0aXAoKSB7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5pY2VTdGVwKG1heFZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChtYXhWYWx1ZSA9PT0gMCkgcmV0dXJuIDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRMOpdGVybWluZXIgbCdvcmRyZSBkZSBncmFuZGV1clxyXG4gICAgICAgIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChtYXhWYWx1ZSkpO1xyXG4gICAgICAgIGNvbnN0IHBvd2VyT2YxMCA9IE1hdGgucG93KDEwLCBtYWduaXR1ZGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEdhbW1lIGRlIG11bHRpcGxpY2F0ZXVycyBwb3VyIGF2b2lyIGRlcyBkaXZpc2lvbnMgXCJwcm9wcmVzXCJcclxuICAgICAgICBjb25zdCBtdWx0aXBsaWVycyA9IFsxLCAyLCAyLjUsIDUsIDEwXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBOb21icmUgZGUgZGl2aXNpb25zIHNvdWhhaXTDqWVzXHJcbiAgICAgICAgY29uc3QgbWluVGlja3MgPSA0O1xyXG4gICAgICAgIGNvbnN0IG1heFRpY2tzID0gODtcclxuICAgICAgICBcclxuICAgICAgICAvLyBUZXN0ZXIgY2hhcXVlIG11bHRpcGxpY2F0ZXVyXHJcbiAgICAgICAgZm9yIChsZXQgbXVsdCBvZiBtdWx0aXBsaWVycykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwID0gbXVsdCAqIHBvd2VyT2YxMDtcclxuICAgICAgICAgICAgY29uc3QgdGlja3MgPSBNYXRoLmNlaWwobWF4VmFsdWUgLyBzdGVwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aWNrcyA+PSBtaW5UaWNrcyAmJiB0aWNrcyA8PSBtYXhUaWNrcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2kgYXVjdW4gbmUgY29udmllbnQsIHJldG91cm5lciBwb3dlck9mMTBcclxuICAgICAgICByZXR1cm4gcG93ZXJPZjEwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUob3B0aW9uczogVmlzdWFsVXBkYXRlT3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFbDqXJpZmllciBsZSBzdGF0dXQgZGUgbGEgbGljZW5jZVxyXG4gICAgICAgIC8vIFNpIGF1Y3VuIHBsYW4gZGUgc2VydmljZSB2YWxpZGUsIGxlIHN5c3TDqG1lIGRlIG5vdGlmaWNhdGlvbiBQb3dlciBCSSBnw6hyZSBsJ2FmZmljaGFnZVxyXG4gICAgICAgIGlmICh0aGlzLmhhc1NlcnZpY2VQbGFucyA9PT0gZmFsc2UgfHwgdGhpcy5pc0xpY2Vuc2VVbnN1cHBvcnRlZEVudiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyBOZXR0b3llciBsZSB2aXN1ZWxcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuYXhpc0dyb3VwLmZpcnN0Q2hpbGQpIHRoaXMuYXhpc0dyb3VwLnJlbW92ZUNoaWxkKHRoaXMuYXhpc0dyb3VwLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5saW5lc0dyb3VwLmZpcnN0Q2hpbGQpIHRoaXMubGluZXNHcm91cC5yZW1vdmVDaGlsZCh0aGlzLmxpbmVzR3JvdXAuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBvcHRpb25zLnZpZXdwb3J0LndpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgb3B0aW9ucy52aWV3cG9ydC5oZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBMZXMgbm90aWZpY2F0aW9ucyBzb250IGfDqXLDqWVzIHBhciBsZSBzeXN0w6htZSBQb3dlciBCSSB2aWEgbm90aWZ5TGljZW5zZVJlcXVpcmVkKClcclxuICAgICAgICAgICAgLy8gUGFzIGJlc29pbiBkJ2FmZmljaGVyIGRlIG1lc3NhZ2UgcGVyc29ubmFsaXPDqSBpY2lcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBLiBSw6ljdXDDqXJhdGlvbiBkZXMgZG9ubsOpZXNcclxuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG9wdGlvbnMuZGF0YVZpZXdzWzBdO1xyXG4gICAgICAgIGlmICghZGF0YVZpZXcgfHwgIWRhdGFWaWV3LmNhdGVnb3JpY2FsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzIHx8ICFkYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhVmlldyA9IGRhdGFWaWV3O1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5Q29sdW1ucyA9IGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXM7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yeUNvbHVtbnNbMF07XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLnBvcHVsYXRlRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwoVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwsIG9wdGlvbnMuZGF0YVZpZXdzWzBdKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBvcHRpb25zLnZpZXdwb3J0LndpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBvcHRpb25zLnZpZXdwb3J0LmhlaWdodC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2F0cyA9IGNhdGVnb3J5Q29sdW1uc1swXS52YWx1ZXM7XHJcbiAgICAgICAgY29uc3QgYWxsU2VyaWVzID0gZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzO1xyXG5cclxuICAgICAgICAvLyBQYXJhbcOodHJlcyBnw6luw6lyYXV4XHJcbiAgICAgICAgY29uc3Qgc2hvd1hBeGlzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueEF4aXNTZXR0aW5ncy5zaG93LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHhBeGlzQ29sb3IgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy54QXhpc1NldHRpbmdzLmF4aXNDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB4QXhpc0ZvbnRTaXplID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueEF4aXNTZXR0aW5ncy5mb250U2l6ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB4QXhpc0ZvbnRGYW1pbHkgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy54QXhpc1NldHRpbmdzLmZvbnRGYW1pbHkudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzaG93WUF4aXMgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy55QXhpc1NldHRpbmdzLnNob3cudmFsdWU7XHJcbiAgICAgICAgY29uc3QgeUF4aXNDb2xvciA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3MuYXhpc0NvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzRm9udFNpemUgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy55QXhpc1NldHRpbmdzLmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzRm9udEZhbWlseSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3MuZm9udEZhbWlseS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzRGlzcGxheVVuaXRzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueUF4aXNTZXR0aW5ncy5kaXNwbGF5VW5pdHMudmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB5QXhpc1ByZWNpc2lvbiA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLnlBeGlzU2V0dGluZ3MucHJlY2lzaW9uLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93SG9yaXpvbnRhbEdyaWQgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5ncmlkU2V0dGluZ3Muc2hvd0hvcml6b250YWwudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc2hvd1ZlcnRpY2FsR3JpZCA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmdyaWRTZXR0aW5ncy5zaG93VmVydGljYWwudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ3JpZENvbG9yID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLmdyaWRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBncmlkVGhpY2tuZXNzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLmdyaWRUaGlja25lc3MudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ3JpZFN0eWxlID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLmdyaWRTdHlsZS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93TGVnZW5kID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGVnZW5kLnNob3cudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbGVnZW5kUG9zaXRpb24gPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmQucG9zaXRpb24udmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBsZWdlbmRGb250Q29sb3IgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmQuZm9udENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGxlZ2VuZEZvbnRTaXplID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGVnZW5kLmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGxlZ2VuZEZvbnRGYW1pbHkgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmQuZm9udEZhbWlseS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBCLiBDYWxjdWwgZGVzIGRpbWVuc2lvbnNcclxuICAgICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMudmlld3BvcnQud2lkdGg7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb3B0aW9ucy52aWV3cG9ydC5oZWlnaHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUsOpaW5pdGlhbGlzZXIgbGVzIG1hcmdlcyDDoCBjaGFxdWUgdXBkYXRlIHBvdXIgw6l2aXRlciBsJ2FjY3VtdWxhdGlvblxyXG4gICAgICAgIHRoaXMubWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogNDAsIGJvdHRvbTogNDAsIGxlZnQ6IDYwIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGxlZ2VuZEhlaWdodCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHNob3dMZWdlbmQgJiYgKGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcFwiIHx8IGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcENlbnRlclwiKSkge1xyXG4gICAgICAgICAgICBsZWdlbmRIZWlnaHQgPSAzMDtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4udG9wID0gMjAgKyBsZWdlbmRIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaG93TGVnZW5kICYmIChsZWdlbmRQb3NpdGlvbiA9PT0gXCJCb3R0b21cIiB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJCb3R0b21DZW50ZXJcIikpIHtcclxuICAgICAgICAgICAgbGVnZW5kSGVpZ2h0ID0gMzA7XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luLmJvdHRvbSA9IDQwICsgbGVnZW5kSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWp1c3RlbWVudCBwb3VyIGxlcyBsYWJlbHMgcm90w6lzIMOgIDQ1wrAgKHRvdWpvdXJzIGFwcGxpcXXDqSBtYWludGVuYW50KVxyXG4gICAgICAgIHRoaXMubWFyZ2luLmJvdHRvbSArPSAzMDtcclxuXHJcbiAgICAgICAgLy8gQWp1c3RlbWVudCBkeW5hbWlxdWUgZGUgbGEgbWFyZ2UgYmFzc2Ugc2kgb24gYSAzIG5pdmVhdXggb3UgcGx1cyAocG91ciBhZmZpY2hlciBBbm7DqWUvTW9pcy9Kb3VyKVxyXG4gICAgICAgIGlmIChjYXRlZ29yeUNvbHVtbnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmdpbi5ib3R0b20gKz0gMjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkcmF3VyA9IHdpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGRyYXdIID0gaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xyXG4gICAgICAgIGNvbnN0IGdldFlQb3MgPSAodmFsOiBudW1iZXIpID0+IGRyYXdIIC0gKCh2YWwgLSBuaWNlTWluKSAvIChuaWNlTWF4IC0gbmljZU1pbikgKiBkcmF3SCk7XHJcblxyXG4gICAgICAgIC8vIEMuIENBTENVTCDDiUNIRUxMRSBZIEdMT0JBTEUgKEJhc8OpIHN1ciBsZSBNSU4gZXQgTUFYIGRlIFRPVVRFUyBsZXMgc8OpcmllcylcclxuICAgICAgICBsZXQgZ2xvYmFsTWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xyXG4gICAgICAgIGxldCBnbG9iYWxNaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XHJcbiAgICAgICAgYWxsU2VyaWVzLmZvckVhY2goc2VyaWVzID0+IHtcclxuICAgICAgICAgICAgc2VyaWVzLnZhbHVlcy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gTnVtYmVyKHYpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA+IGdsb2JhbE1heCkgZ2xvYmFsTWF4ID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPCBnbG9iYWxNaW4pIGdsb2JhbE1pbiA9IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNpIHRvdXQgZXN0IE5hTiwgZmFsbGJhY2sgw6AgMFxyXG4gICAgICAgIGlmICghaXNGaW5pdGUoZ2xvYmFsTWF4KSkgZ2xvYmFsTWF4ID0gMDtcclxuICAgICAgICBpZiAoIWlzRmluaXRlKGdsb2JhbE1pbikpIGdsb2JhbE1pbiA9IDA7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bCBkdSBzdGVwXHJcbiAgICAgICAgY29uc3QgYWJzTWF4ID0gTWF0aC5tYXgoTWF0aC5hYnMoZ2xvYmFsTWF4KSwgTWF0aC5hYnMoZ2xvYmFsTWluKSk7XHJcbiAgICAgICAgY29uc3Qgc3RlcFNpemUgPSB0aGlzLmdldE5pY2VTdGVwKGFic01heCk7XHJcblxyXG4gICAgICAgIC8vIEJvcm5lcyBcInByb3ByZXNcIlxyXG4gICAgICAgIGxldCBuaWNlTWluID0gTWF0aC5mbG9vcihnbG9iYWxNaW4gLyBzdGVwU2l6ZSkgKiBzdGVwU2l6ZTtcclxuICAgICAgICBsZXQgbmljZU1heCA9IE1hdGguY2VpbChnbG9iYWxNYXggLyBzdGVwU2l6ZSkgKiBzdGVwU2l6ZTtcclxuICAgICAgICBpZiAobmljZU1pbiA9PT0gbmljZU1heCkge1xyXG4gICAgICAgICAgICAvLyBDYXMgcGxhdFxyXG4gICAgICAgICAgICBuaWNlTWluID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChuaWNlTWF4IC0gbmljZU1pbikgLyBzdGVwU2l6ZSA+IDEwKSB7XHJcbiAgICAgICAgICAgIG5pY2VNYXggPSBuaWNlTWluICsgc3RlcFNpemUgKiAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEQuIERFU1NJTlxyXG4gICAgICAgIHRoaXMubWFpbkdyb3VwLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7dGhpcy5tYXJnaW4ubGVmdH0sICR7dGhpcy5tYXJnaW4udG9wfSlgKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBOZXR0b3lhZ2VcclxuICAgICAgICB3aGlsZSAodGhpcy5heGlzR3JvdXAuZmlyc3RDaGlsZCkgdGhpcy5heGlzR3JvdXAucmVtb3ZlQ2hpbGQodGhpcy5heGlzR3JvdXAuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubGluZXNHcm91cC5maXJzdENoaWxkKSB0aGlzLmxpbmVzR3JvdXAucmVtb3ZlQ2hpbGQodGhpcy5saW5lc0dyb3VwLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VzdG9tLW1hcmtlclwiKS5mb3JFYWNoKG0gPT4gbS5yZW1vdmUoKSk7XHJcbiAgICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3RvckFsbChcIi5jdXN0b20tZGF0YWxhYmVsXCIpLmZvckVhY2gobCA9PiBsLnJlbW92ZSgpKTtcclxuICAgICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1c3RvbS1ob3ZlclwiKS5mb3JFYWNoKGggPT4gaC5yZW1vdmUoKSk7XHJcbiAgICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3RvckFsbChcIi5sZWdlbmRcIikuZm9yRWFjaChsID0+IGwucmVtb3ZlKCkpO1xyXG5cclxuICAgICAgICAvLyAxLiBHUklMTEUgRVQgQVhFIFlcclxuICAgICAgICBpZiAoc2hvd1lBeGlzKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgdmFsID0gbmljZU1pbjsgdmFsIDw9IG5pY2VNYXg7IHZhbCArPSBzdGVwU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeVBvcyA9IGRyYXdIIC0gKCh2YWwgLSBuaWNlTWluKSAvIChuaWNlTWF4IC0gbmljZU1pbikgKiBkcmF3SCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dIb3Jpem9udGFsR3JpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwibGluZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIngxXCIsIFwiMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIngyXCIsIGRyYXdXLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieTFcIiwgeVBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInkyXCIsIHlQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgZ3JpZENvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBncmlkVGhpY2tuZXNzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncmlkU3R5bGUgPT09IFwiZGFzaGVkXCIpIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcIjQsNFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aXNHcm91cC5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRleHRcIik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInhcIiwgXCItMTBcIik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInlcIiwgeVBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImFsaWdubWVudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB0aGlzLmZvcm1hdFlBeGlzVmFsdWUodmFsLCB5QXhpc0Rpc3BsYXlVbml0cywgeUF4aXNQcmVjaXNpb24pO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHlBeGlzQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgeUF4aXNGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgeUF4aXNGb250RmFtaWx5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXhpc0dyb3VwLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyLiBBWEUgWFxyXG4gICAgICAgIGlmIChzaG93WEF4aXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcCA9IE1hdGguY2VpbChjYXRzLmxlbmd0aCAvIDEwKTtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZFRleHRzOiBTVkdUZXh0RWxlbWVudFtdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNhdHMuZm9yRWFjaCgoY2F0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAlIHN0ZXAgIT09IDAgJiYgaSAhPT0gY2F0cy5sZW5ndGggLSAxKSByZXR1cm47IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB4UG9zID0gKGkgLyAoY2F0cy5sZW5ndGggLSAxKSkgKiBkcmF3VztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1ZlcnRpY2FsR3JpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwibGluZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIngxXCIsIHhQb3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieTFcIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieTJcIiwgZHJhd0gudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgZ3JpZENvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBncmlkVGhpY2tuZXNzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncmlkU3R5bGUgPT09IFwiZGFzaGVkXCIpIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcIjQsNFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aXNHcm91cC5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRleHRcIikgYXMgU1ZHVGV4dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInhcIiwgeFBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieVwiLCAoZHJhd0ggKyAyMCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnZGF0YS14JywgeFBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGNhdHMubGVuZ3RoIC0gMSkgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT09IDApIHRleHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHhBeGlzQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgeEF4aXNGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgeEF4aXNGb250RmFtaWx5KTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBam91dGVyIGxlIG1lbnUgY29udGV4dHVlbCBzdXIgbGVzIGxhYmVscyBkZSBsJ2F4ZSBYXHJcbiAgICAgICAgICAgICAgICB0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhDYXRlZ29yeShjYXRlZ29yeSwgaSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNob3dDb250ZXh0TWVudShzZWxlY3Rpb25JZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFBlcm1ldHRyZSBsYSBzw6lsZWN0aW9uIGF1IGNsaWMgc3VyIGxlcyBsYWJlbHNcclxuICAgICAgICAgICAgICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAud2l0aENhdGVnb3J5KGNhdGVnb3J5LCBpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2VsZWN0KHNlbGVjdGlvbklkLCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5Q29sdW1ucy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWZmaWNoYWdlIGhpw6lyYXJjaGlxdWVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdExldmVsID0gY2F0ZWdvcnlDb2x1bW5zWzBdLnZhbHVlc1tpXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RMZXZlbCA9IGNhdGVnb3J5Q29sdW1uc1tjYXRlZ29yeUNvbHVtbnMubGVuZ3RoIC0gMV0udmFsdWVzW2ldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRzcGFuMS50ZXh0Q29udGVudCA9IGZpcnN0TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdHNwYW4xLnNldEF0dHJpYnV0ZShcInhcIiwgeFBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB0c3BhbjEuc2V0QXR0cmlidXRlKFwiZHlcIiwgXCIwZW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5hcHBlbmRDaGlsZCh0c3BhbjEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlDb2x1bW5zLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FzIGF2ZWMgMyBuaXZlYXV4IG91IHBsdXMgKGV4OiBBbm7DqWUsIE1vaXMsIEpvdXIpIC0+IE9uIGFmZmljaGUgQW5uw6llLCBNb2lzLCBKb3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9uIHN1cHBvc2UgcXVlIGwnYXZhbnQtZGVybmllciBuaXZlYXUgZXN0IGxlIG1vaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlkZGxlTGV2ZWwgPSBjYXRlZ29yeUNvbHVtbnNbY2F0ZWdvcnlDb2x1bW5zLmxlbmd0aCAtIDJdLnZhbHVlc1tpXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIudGV4dENvbnRlbnQgPSBtaWRkbGVMZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHNwYW4yLnNldEF0dHJpYnV0ZShcInhcIiwgeFBvcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHNwYW4yLnNldEF0dHJpYnV0ZShcImR5XCIsIFwiMS4yZW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQuYXBwZW5kQ2hpbGQodHNwYW4yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0c3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHNwYW4zLnRleHRDb250ZW50ID0gbGFzdExldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjMuc2V0QXR0cmlidXRlKFwieFwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjMuc2V0QXR0cmlidXRlKFwiZHlcIiwgXCIxLjJlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC5hcHBlbmRDaGlsZCh0c3BhbjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhcyBzdGFuZGFyZCAyIG5pdmVhdXggKGV4OiBBbm7DqWUsIE1vaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0c3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHNwYW4yLnRleHRDb250ZW50ID0gbGFzdExldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIuc2V0QXR0cmlidXRlKFwieFwiLCB4UG9zLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3BhbjIuc2V0QXR0cmlidXRlKFwiZHlcIiwgXCIxLjJlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC5hcHBlbmRDaGlsZCh0c3BhbjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmZvcm1hdERhdGUoY2F0c1tpXS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gbGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwnLCBsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuYXhpc0dyb3VwLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlZFRleHRzLnB1c2godGV4dCk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbEluZGljZXMucHVzaChpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBJbnRlbGxpZ2VudCB0cnVuY2F0aW9uIHdpdGggNDXCsCByb3RhdGlvblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFkZGluZyA9IDY7IC8vIHB4IHBhZGRpbmcgYmV0d2VlbiBsYWJlbHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IFZpc3VhbC5fbGFiZWxNZWFzdXJlQ2FudmFzIHx8IChWaXN1YWwuX2xhYmVsTWVhc3VyZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgICAgICAgICAgICAgIGN0eC5mb250ID0gYCR7eEF4aXNGb250U2l6ZX1weCAke3hBeGlzRm9udEZhbWlseX1gO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHhzID0gY3JlYXRlZFRleHRzLm1hcCh0ID0+IHBhcnNlRmxvYXQodC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpIHx8IHQuZ2V0QXR0cmlidXRlKCd4JykgfHwgJzAnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IC00NTsgLy8gUm90YXRpb24gYW5nbGUgaW4gZGVncmVlc1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN0ZXAgMTogVHJ1bmNhdGUgbGFiZWxzIHRoYXQgYXJlIHRvbyB3aWRlIGFuZCBhcHBseSA0NcKwIHJvdGF0aW9uXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNyZWF0ZWRUZXh0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBjcmVhdGVkVGV4dHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCBtdWx0aS1saW5lIGhpZXJhcmNoaWNhbCBsYWJlbHMgKHRoZXkgdXNlIHRzcGFucylcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYXcgPSB0LmdldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbCcpIHx8IHQudGV4dENvbnRlbnQgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHhzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSAoaSA9PT0gMCkgPyAwIDogKHhzW2kgLSAxXSArIHgpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWdodCA9IChpID09PSBjcmVhdGVkVGV4dHMubGVuZ3RoIC0gMSkgPyBkcmF3VyA6ICh4ICsgeHNbaSArIDFdKSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2l0aCA0NcKwIHJvdGF0aW9uLCBsYWJlbHMgY2FuIGJlIG11Y2ggbG9uZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGF2YWlsYWJsZSBzcGFjZSBjb25zaWRlcmluZyByb3RhdGlvbjogZGlhZ29uYWwgc3BhY2UgaXMgfjEuNHggaG9yaXpvbnRhbCBzcGFjZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvcml6b250YWxTcGFjZSA9IHJpZ2h0IC0gbGVmdCAtIHBhZGRpbmcgKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF2YWlsID0gTWF0aC5tYXgoMzAsIGhvcml6b250YWxTcGFjZSAqIDIuNSk7IC8vIE1vcmUgZ2VuZXJvdXMgc3BhY2UgZm9yIHJvdGF0ZWQgbGFiZWxzXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1lYXN1cmUgYW5kIHRydW5jYXRlIGlmIG5lY2Vzc2FyeSAoa2VlcCBiZWdpbm5pbmcsIGFkZCAnLi4uJyBhdCBlbmQpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHJhdykud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoID4gYXZhaWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0TGVuID0gcmF3Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZSA9IHJhdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxsaXBzaXMgPSAnLi4uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCByZWR1Y2luZyBmcm9tIHRoZSBlbmQgdW50aWwgaXQgZml0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3RhcnRMZW4gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGUgPSByYXcuc2xpY2UoMCwgc3RhcnRMZW4pICsgZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IGN0eC5tZWFzdXJlVGV4dChjYW5kaWRhdGUpLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoIDw9IGF2YWlsKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0TGVuLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdC50ZXh0Q29udGVudCA9IGNhbmRpZGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IDQ1wrAgcm90YXRpb24gdG8gYWxsIGxhYmVsc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdYID0gcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZSgnZGF0YS14JykgfHwgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnWSA9IHBhcnNlRmxvYXQodC5nZXRBdHRyaWJ1dGUoJ3knKSB8fCAoZHJhd0ggKyAyMCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5zZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHQuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7b3JpZ1h9LCAke29yaWdZfSkgcm90YXRlKCR7YW5nbGV9KWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHQuc2V0QXR0cmlidXRlKCd4JywgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICB0LnNldEF0dHJpYnV0ZSgneScsICcwJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3RlcCAyOiBDaGVjayBmb3Igb3ZlcmxhcHMgdXNpbmcgYm91bmRpbmcgYm94ZXMgKGFmdGVyIHJvdGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgbGV0IGhhc092ZXJsYXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJveGVzID0gY3JlYXRlZFRleHRzLm1hcCh0ID0+IHQuZ2V0QkJveCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMTsgayA8IGJveGVzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldiA9IGJveGVzW2sgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyID0gYm94ZXNba107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnIueCA8IHByZXYueCArIHByZXYud2lkdGggKyBwYWRkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc092ZXJsYXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3RlcCAzOiBJZiBvdmVybGFwIGRldGVjdGVkLCBoaWRlIHRoZSBsYXN0IGxhYmVsICh0aGUgb25lIGF0IHRoZSByaWdodCBlZGdlKVxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc092ZXJsYXAgJiYgY3JlYXRlZFRleHRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gY3JlYXRlZFRleHRzW2NyZWF0ZWRUZXh0cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdCkgbGFzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIC8vIGdldEJCb3gvY2FudmFzIG1pZ2h0IGZhaWwgaW4gc29tZSBub24tcmVuZGVyaW5nIGVudmlyb25tZW50czsgaWdub3JlIHNpbGVudGx5XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1gtYXhpcyBsYWJlbCB0cnVuY2F0aW9uL292ZXJsYXAgZGV0ZWN0aW9uIHNraXBwZWQ6JywgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMy4gQk9VQ0xFIFNVUiBMRVMgU8OJUklFUyAoTElHTkVTKVxyXG4gICAgICAgIGNvbnN0IGxlZ2VuZEl0ZW1zOiBBcnJheTx7bmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nfT4gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gUsOpY3Vww6lyYXRpb24gZGVzIHBhcmFtw6h0cmVzIGRlcyDDqXRpcXVldHRlcyBkZSBkb25uw6llc1xyXG4gICAgICAgIGNvbnN0IHNob3dEYXRhTGFiZWxzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZGF0YUxhYmVscy5zaG93LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGFMYWJlbHNDb2xvciA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmRhdGFMYWJlbHMuY29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0YUxhYmVsc0ZvbnRTaXplID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZGF0YUxhYmVscy5mb250U2l6ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkYXRhTGFiZWxzRm9udEZhbWlseSA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmRhdGFMYWJlbHMuZm9udEZhbWlseS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFMYWJlbHNEaXNwbGF5VW5pdHMgPSBwYXJzZUludCh0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5kYXRhTGFiZWxzLmRpc3BsYXlVbml0cy52YWx1ZS52YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICBjb25zdCBkYXRhTGFiZWxzUHJlY2lzaW9uID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZGF0YUxhYmVscy5wcmVjaXNpb24udmFsdWU7XHJcblxyXG4gICAgICAgIGFsbFNlcmllcy5mb3JFYWNoKChzZXJpZXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAxMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VyaWVzTmFtZSA9IHNlcmllcy5zb3VyY2UuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHMgPSBzZXJpZXMudmFsdWVzO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbGluZVNldHRpbmdzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NbYGxpbmVTZXR0aW5ncyR7aW5kZXggKyAxfWBdO1xyXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudFNldHRpbmdzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NbYGdyYWRpZW50U2V0dGluZ3Mke2luZGV4ICsgMX1gXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbGluZVNldHRpbmdzIHx8ICFncmFkaWVudFNldHRpbmdzKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaW5lQ29sb3IgPSBsaW5lU2V0dGluZ3MubGluZUNvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJva2VXaWR0aCA9IGxpbmVTZXR0aW5ncy5zdHJva2VXaWR0aC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgbGluZVN0eWxlID0gbGluZVNldHRpbmdzLmxpbmVTdHlsZS52YWx1ZS52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG93TWFya2VycyA9IGxpbmVTZXR0aW5ncy5zaG93TWFya2Vycy52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgbWFya2VyU2l6ZSA9IGxpbmVTZXR0aW5ncy5tYXJrZXJTaXplLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwcGVkID0gbGluZVNldHRpbmdzLnN0ZXBwZWQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaG93R3JhZGllbnQgPSBncmFkaWVudFNldHRpbmdzLnNob3dHcmFkaWVudC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRDb2xvciA9IGdyYWRpZW50U2V0dGluZ3MuZ3JhZGllbnRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRJbnRlbnNpdHkgPSBncmFkaWVudFNldHRpbmdzLmdyYWRpZW50SW50ZW5zaXR5LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudERpcmVjdGlvbiA9IGdyYWRpZW50U2V0dGluZ3MuZ3JhZGllbnREaXJlY3Rpb24udmFsdWUudmFsdWUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGxlZ2VuZEl0ZW1zLnB1c2goeyBuYW1lOiBzZXJpZXNOYW1lLCBjb2xvcjogbGluZUNvbG9yIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsIGRlcyBwb2ludHNcclxuICAgICAgICAgICAgY29uc3QgcG9pbnRzOiBbbnVtYmVyLCBudW1iZXJdW10gPSBjYXRzLm1hcCgoY2F0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gKGkgLyAoY2F0cy5sZW5ndGggLSAxKSkgKiBkcmF3VztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBnZXRZUG9zKE51bWJlcih2YWxzW2ldKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3LDqWF0aW9uIGR1IGTDqWdyYWTDqSB1bmlxdWVcclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRJZCA9IGBncmFkaWVudF8ke2luZGV4fV8ke0RhdGUubm93KCl9YDsgLy8gSUQgdW5pcXVlXHJcbiAgICAgICAgICAgIGxldCBncmFkaWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJsaW5lYXJHcmFkaWVudFwiKTtcclxuICAgICAgICAgICAgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgZ3JhZGllbnRJZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBzdG9wMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJzdG9wXCIpO1xyXG4gICAgICAgICAgICBzdG9wMS5zZXRBdHRyaWJ1dGUoXCJvZmZzZXRcIiwgXCIwJVwiKTtcclxuICAgICAgICAgICAgc3RvcDEuc2V0QXR0cmlidXRlKFwic3RvcC1jb2xvclwiLCBncmFkaWVudENvbG9yKTtcclxuICAgICAgICAgICAgc3RvcDEuc2V0QXR0cmlidXRlKFwic3RvcC1vcGFjaXR5XCIsIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGdyYWRpZW50SW50ZW5zaXR5KSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBzdG9wMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJzdG9wXCIpO1xyXG4gICAgICAgICAgICBzdG9wMi5zZXRBdHRyaWJ1dGUoXCJvZmZzZXRcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgICAgICBzdG9wMi5zZXRBdHRyaWJ1dGUoXCJzdG9wLWNvbG9yXCIsIGdyYWRpZW50Q29sb3IpO1xyXG4gICAgICAgICAgICBzdG9wMi5zZXRBdHRyaWJ1dGUoXCJzdG9wLW9wYWNpdHlcIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZ3JhZGllbnQuYXBwZW5kQ2hpbGQoc3RvcDEpO1xyXG4gICAgICAgICAgICBncmFkaWVudC5hcHBlbmRDaGlsZChzdG9wMik7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoXCJkZWZzXCIpPy5hcHBlbmRDaGlsZChncmFkaWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlHcmFkaWVudERpcmVjdGlvbihncmFkaWVudCwgZ3JhZGllbnREaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29uc3RydWN0aW9uIGR1IGNoZW1pblxyXG4gICAgICAgICAgICBsZXQgZCA9IHN0ZXBwZWQgPyB0aGlzLmJ1aWxkU3RlcHBlZFBhdGgocG9pbnRzKSA6IHRoaXMuYnVpbGRTbW9vdGhQYXRoKHBvaW50cyk7XHJcblxyXG4gICAgICAgICAgICAvLyBBaXJlIC0gTGUgZMOpZ3JhZMOpIHMnYXJyw6p0ZSBhdSBiYXMgZGUgbGEgem9uZSBkZSBkZXNzaW4sIGp1c3RlIGF2YW50IGxlcyBsYWJlbHMgZGUgbCdheGUgWFxyXG4gICAgICAgICAgICBjb25zdCBwYXRoQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJwYXRoXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudEJvdHRvbSA9IGRyYXdIIDsgLy8gUydhcnLDqnRlIDVweCBhdmFudCBsZSBiYXMgcG91ciBuZSBwYXMgdG91Y2hlciBsZXMgbGFiZWxzXHJcbiAgICAgICAgICAgIGNvbnN0IGFyZWFEID0gYCR7ZH0gTCAke3BvaW50c1twb2ludHMubGVuZ3RoLTFdWzBdfSwke2dyYWRpZW50Qm90dG9tfSBMICR7cG9pbnRzWzBdWzBdfSwke2dyYWRpZW50Qm90dG9tfSBaYDtcclxuICAgICAgICAgICAgcGF0aEFyZWEuc2V0QXR0cmlidXRlKFwiZFwiLCBhcmVhRCk7XHJcbiAgICAgICAgICAgIHBhdGhBcmVhLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgc2hvd0dyYWRpZW50ID8gYHVybCgjJHtncmFkaWVudElkfSlgIDogXCJub25lXCIpO1xyXG4gICAgICAgICAgICBwYXRoQXJlYS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVzR3JvdXAuYXBwZW5kQ2hpbGQocGF0aEFyZWEpO1xyXG5cclxuICAgICAgICAgICAgLy8gTGlnbmVcclxuICAgICAgICAgICAgY29uc3QgcGF0aExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwicGF0aFwiKTtcclxuICAgICAgICAgICAgcGF0aExpbmUuc2V0QXR0cmlidXRlKFwiZFwiLCBkKTtcclxuICAgICAgICAgICAgcGF0aExpbmUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBsaW5lQ29sb3IpO1xyXG4gICAgICAgICAgICBwYXRoTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgc3Ryb2tlV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XHJcbiAgICAgICAgICAgIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lam9pblwiLCBcInJvdW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAobGluZVN0eWxlID09PSBcImRhc2hlZFwiKSBwYXRoTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiOCw0XCIpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChsaW5lU3R5bGUgPT09IFwiZG90dGVkXCIpIHBhdGhMaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCIyLDJcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGluZXNHcm91cC5hcHBlbmRDaGlsZChwYXRoTGluZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBNYXJxdWV1cnNcclxuICAgICAgICAgICAgaWYgKHNob3dNYXJrZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLW1hcmtlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgKHRoaXMubWFyZ2luLmxlZnQgKyBwWzBdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgKHRoaXMubWFyZ2luLnRvcCArIHBbMV0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIG1hcmtlclNpemUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgbGluZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChjaXJjbGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIMOJdGlxdWV0dGVzIGRlIGRvbm7DqWVzXHJcbiAgICAgICAgICAgIGlmIChzaG93RGF0YUxhYmVscykge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzLmZvckVhY2goKHAsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcih2YWxzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLmZvcm1hdERhdGFMYWJlbCh2YWx1ZSwgZGF0YUxhYmVsc0Rpc3BsYXlVbml0cywgZGF0YUxhYmVsc1ByZWNpc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWRhdGFsYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJ4XCIsICh0aGlzLm1hcmdpbi5sZWZ0ICsgcFswXSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwieVwiLCAodGhpcy5tYXJnaW4udG9wICsgcFsxXSAtIDEwKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGRhdGFMYWJlbHNDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIGRhdGFMYWJlbHNGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCBkYXRhTGFiZWxzRm9udEZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9udC13ZWlnaHRcIiwgXCI1MDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFpvbmVzIGRlIHN1cnZvbCAoVG9vbHRpcCkgYXZlYyBzdXBwb3J0IGR1IGRyaWxsXHJcbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKChwLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcsOpZXIgbCdJRCBkZSBzw6lsZWN0aW9uIHBvdXIgY2UgcG9pbnRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgLndpdGhDYXRlZ29yeShjYXRlZ29yeSwgaSlcclxuICAgICAgICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3ZlckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgKHRoaXMubWFyZ2luLmxlZnQgKyBwWzBdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN5XCIsICh0aGlzLm1hcmdpbi50b3AgKyBwWzFdKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgXCI4XCIpO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcFRpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlDb2x1bW5zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRpdGxlID0gY2F0ZWdvcnlDb2x1bW5zLm1hcChjID0+IGMudmFsdWVzW2ldLnRvU3RyaW5nKCkpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUaXRsZSA9IHRoaXMuZm9ybWF0RGF0ZShjYXRzW2ldLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcENvbnRlbnQgPSBgPGRpdj48c3Ryb25nPiR7dG9vbHRpcFRpdGxlfTwvc3Ryb25nPjwvZGl2PjxkaXY+JHtzZXJpZXNOYW1lfTogJHt0aGlzLmZvcm1hdE51bWJlcihOdW1iZXIodmFsc1tpXSkpfTwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcChlLnBhZ2VYLCBlLnBhZ2VZLCB0b29sdGlwQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5jbGFzc0xpc3QuYWRkKFwidGVtcC1tYXJrZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCAodGhpcy5tYXJnaW4ubGVmdCArIHBbMF0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgKHRoaXMubWFyZ2luLnRvcCArIHBbMV0pLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBcIjVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGxpbmVDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCIjZmZmXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0ZW1wQ2lyY2xlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnN0eWxlLmxlZnQgPSAoZS5wYWdlWCArIDEwKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUudG9wID0gKGUucGFnZVkgLSAxMCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaG92ZXJDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXAtbWFya2VyXCIpLmZvckVhY2gobSA9PiBtLnJlbW92ZSgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEdlc3Rpb24gZHUgY2xpYyBwb3VyIGxhIHPDqWxlY3Rpb24gKG7DqWNlc3NhaXJlIHBvdXIgbGUgZHJpbGwpXHJcbiAgICAgICAgICAgICAgICBob3ZlckNpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU8OpbGVjdGlvbm5lciBjZSBwb2ludCBkZSBkb25uw6llc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZWxlY3Qoc2VsZWN0aW9uSWQsIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDb250ZXh0IG1lbnUgKGNsaWMgZHJvaXQpIHBvdXIgYWZmaWNoZXIgbGVzIG9wdGlvbnMgZGUgZHJpbGxcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHNlbGVjdGlvbklkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGhvdmVyQ2lyY2xlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDQuIEzDiUdFTkRFXHJcbiAgICAgICAgaWYgKHNob3dMZWdlbmQgJiYgbGVnZW5kSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBsZWdlbmRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJnXCIpO1xyXG4gICAgICAgICAgICBsZWdlbmRHcm91cC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxlZ2VuZFggPSAwO1xyXG4gICAgICAgICAgICBsZXQgbGVnZW5kWSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1XaWR0aCA9IDEwMDtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IDIwO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcFwiIHx8IGxlZ2VuZFBvc2l0aW9uID09PSBcIlRvcENlbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRYID0gKHdpZHRoIC0gbGVnZW5kSXRlbXMubGVuZ3RoICogaXRlbVdpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRZID0gMTA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVnZW5kUG9zaXRpb24gPT09IFwiQm90dG9tXCIgfHwgbGVnZW5kUG9zaXRpb24gPT09IFwiQm90dG9tQ2VudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFggPSAod2lkdGggLSBsZWdlbmRJdGVtcy5sZW5ndGggKiBpdGVtV2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFkgPSBoZWlnaHQgLSAyMDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsZWdlbmRQb3NpdGlvbiA9PT0gXCJMZWZ0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFggPSAxMDtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZFkgPSBoZWlnaHQgLyAyIC0gKGxlZ2VuZEl0ZW1zLmxlbmd0aCAqIGl0ZW1IZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsZWdlbmRQb3NpdGlvbiA9PT0gXCJSaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRYID0gd2lkdGggLSAxMTA7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRZID0gaGVpZ2h0IC8gMiAtIChsZWdlbmRJdGVtcy5sZW5ndGggKiBpdGVtSGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxlZ2VuZEl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHhPZmZzZXQgPSBsZWdlbmRQb3NpdGlvbi5pbmNsdWRlcyhcIkNlbnRlclwiKSB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJUb3BcIiB8fCBsZWdlbmRQb3NpdGlvbiA9PT0gXCJCb3R0b21cIiBcclxuICAgICAgICAgICAgICAgICAgICA/IGxlZ2VuZFggKyBpICogaXRlbVdpZHRoIFxyXG4gICAgICAgICAgICAgICAgICAgIDogbGVnZW5kWDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlPZmZzZXQgPSBsZWdlbmRQb3NpdGlvbiA9PT0gXCJMZWZ0XCIgfHwgbGVnZW5kUG9zaXRpb24gPT09IFwiUmlnaHRcIiBcclxuICAgICAgICAgICAgICAgICAgICA/IGxlZ2VuZFkgKyBpICogaXRlbUhlaWdodCBcclxuICAgICAgICAgICAgICAgICAgICA6IGxlZ2VuZFk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ3LDqWVyIHVuIGdyb3VwZSBwb3VyIGNoYXF1ZSDDqWzDqW1lbnQgZGUgbMOpZ2VuZGUgcG91ciBmYWNpbGl0ZXIgbGVzIGludGVyYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVnZW5kSXRlbUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImdcIik7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuc2V0QXR0cmlidXRlKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInJlY3RcIik7XHJcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgeE9mZnNldC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlKFwieVwiLCB5T2Zmc2V0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE1XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIzXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGl0ZW0uY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kSXRlbUdyb3VwLmFwcGVuZENoaWxkKHJlY3QpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieFwiLCAoeE9mZnNldCArIDIwKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwieVwiLCAoeU9mZnNldCArIDIpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgbGVnZW5kRm9udENvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIGxlZ2VuZEZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCBsZWdlbmRGb250RmFtaWx5KTtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuYXBwZW5kQ2hpbGQodGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWpvdXRlciB1biByZWN0YW5nbGUgaW52aXNpYmxlIHBvdXIgYWdyYW5kaXIgbGEgem9uZSBjbGlxdWFibGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhpdEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwicmVjdFwiKTtcclxuICAgICAgICAgICAgICAgIGhpdEFyZWEuc2V0QXR0cmlidXRlKFwieFwiLCB4T2Zmc2V0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgaGl0QXJlYS5zZXRBdHRyaWJ1dGUoXCJ5XCIsICh5T2Zmc2V0IC0gNSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBoaXRBcmVhLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiOTBcIik7XHJcbiAgICAgICAgICAgICAgICBoaXRBcmVhLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjE1XCIpO1xyXG4gICAgICAgICAgICAgICAgaGl0QXJlYS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwidHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuYXBwZW5kQ2hpbGQoaGl0QXJlYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTWVudSBjb250ZXh0dWVsIHN1ciBsZXMgw6lsw6ltZW50cyBkZSBsw6lnZW5kZVxyXG4gICAgICAgICAgICAgICAgbGVnZW5kSXRlbUdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3LDqWVyIHVuIFNlbGVjdGlvbklkIGJhc8OpIHN1ciBsYSBzw6lyaWUgKG1lYXN1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VyaWVzRGF0YSA9IGFsbFNlcmllcy5ncm91cGVkKClbMF0udmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXJpZXNEYXRhICYmIHNlcmllc0RhdGEuaWRlbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoU2VyaWVzKGRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlcywgc2VyaWVzRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHNlbGVjdGlvbklkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENsaWMgcG91ciBmaWx0cmVyL3PDqWxlY3Rpb25uZXIgbGEgc8OpcmllXHJcbiAgICAgICAgICAgICAgICBsZWdlbmRJdGVtR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJpZXNEYXRhID0gYWxsU2VyaWVzLmdyb3VwZWQoKVswXS52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcmllc0RhdGEgJiYgc2VyaWVzRGF0YS5pZGVudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhTZXJpZXMoZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzLCBzZXJpZXNEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZWxlY3Qoc2VsZWN0aW9uSWQsIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGVnZW5kR3JvdXAuYXBwZW5kQ2hpbGQobGVnZW5kSXRlbUdyb3VwKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChsZWdlbmRHcm91cCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0RGF0YUxhYmVsKHZhbHVlOiBudW1iZXIsIGRpc3BsYXlVbml0czogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZCA9IHZhbHVlO1xyXG4gICAgICAgIGxldCBzdWZmaXggPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoZGlzcGxheVVuaXRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEF1dG9cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHZhbHVlKSA+PSAxMDAwMDAwMDAwKSB7IFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwMDAwOyBcclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1kc1wiOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMDAwMCkgeyBcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDsgXHJcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBcIiBNXCI7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKHZhbHVlKSA+PSAxMDAwKSB7IFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwOyBcclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IFwiIEtcIjsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRpc3BsYXlVbml0cyA9PT0gMTAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIEtcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpc3BsYXlVbml0cyA9PT0gMTAwMDAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDAwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpc3BsYXlVbml0cyA9PT0gMTAwMDAwMDAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDAwMDAwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1kc1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkLnRvRml4ZWQocHJlY2lzaW9uKSArIHN1ZmZpeDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkU21vb3RoUGF0aChwb2ludHM6IFtudW1iZXIsIG51bWJlcl1bXSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGxldCBkID0gYE0gJHtwb2ludHNbMF1bMF19LCR7cG9pbnRzWzBdWzFdfWA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZCArPSBgIEwgJHtwb2ludHNbaV1bMF19LCR7cG9pbnRzW2ldWzFdfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRTdGVwcGVkUGF0aChwb2ludHM6IFtudW1iZXIsIG51bWJlcl1bXSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGxldCBkID0gYE0gJHtwb2ludHNbMF1bMF19LCR7cG9pbnRzWzBdWzFdfWA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZCArPSBgIEwgJHtwb2ludHNbaV1bMF19LCR7cG9pbnRzW2ktMV1bMV19IEwgJHtwb2ludHNbaV1bMF19LCR7cG9pbnRzW2ldWzFdfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGb3JtYXR0aW5nTW9kZWwoKTogcG93ZXJiaS52aXN1YWxzLkZvcm1hdHRpbmdNb2RlbCB7XHJcbiAgICAgICAgLy8gQ29tcHRlciBsZSBub21icmUgZGUgc8OpcmllcyAoY2hhbXBzIFZhbHVlcylcclxuICAgICAgICBsZXQgbmJTZXJpZXMgPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFWaWV3ICYmIHRoaXMuZGF0YVZpZXcuY2F0ZWdvcmljYWwgJiYgdGhpcy5kYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMpIHtcclxuICAgICAgICAgICAgbmJTZXJpZXMgPSB0aGlzLmRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaXN0ZSBkeW5hbWlxdWUgZGVzIGNhcmRzIMOgIGFmZmljaGVyXHJcbiAgICAgICAgY29uc3QgY2FyZHM6IGFueVtdID0gW107XHJcblxyXG4gICAgICAgIC8vIEFqb3V0ZXIgc2V1bGVtZW50IGxlcyBncm91cGVzIG7DqWNlc3NhaXJlc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG5iU2VyaWVzOyBpKyspIHtcclxuICAgICAgICAgICAgY2FyZHMucHVzaCh0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1tgbGluZVNldHRpbmdzJHtpfWBdKTtcclxuICAgICAgICAgICAgY2FyZHMucHVzaCh0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1tgZ3JhZGllbnRTZXR0aW5ncyR7aX1gXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBam91dGVyIGxlcyBhdXRyZXMgZ3JvdXBlcyBnw6luw6lyYXV4XHJcbiAgICAgICAgY2FyZHMucHVzaChcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueEF4aXNTZXR0aW5ncyxcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MueUF4aXNTZXR0aW5ncyxcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MuZ3JpZFNldHRpbmdzLFxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5kYXRhTGFiZWxzLFxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sZWdlbmRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBHw6luw6lyZXIgbGUgbW9kw6hsZSBhdmVjIHVuaXF1ZW1lbnQgbGVzIGNhcmRzIHV0aWxlc1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuYnVpbGRGb3JtYXR0aW5nTW9kZWwoeyBjYXJkcyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5R3JhZGllbnREaXJlY3Rpb24oZ3JhZGllbnQ6IFNWR0xpbmVhckdyYWRpZW50RWxlbWVudCwgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjFcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidmVydGljYWwtcmV2ZXJzZVwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMVwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjBcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIxXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjBcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbC1yZXZlcnNlXCI6IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcIngxXCIsIFwiMVwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieTFcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkyXCIsIFwiMFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkaWFnb25hbFwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjBcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIxXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjFcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGlhZ29uYWwtcmV2ZXJzZVwiOiBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBcIjFcIik7IGdyYWRpZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIFwiMFwiKTsgZ3JhZGllbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgXCIwXCIpOyBncmFkaWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBcIjFcIik7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdE51bWJlcihudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gRMOpdGVybWluZXIgbGUgbm9tYnJlIGRlIGTDqWNpbWFsZXMgbsOpY2Vzc2FpcmVzXHJcbiAgICAgICAgaWYgKG51bSA9PT0gMCkgcmV0dXJuIFwiMFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFic051bSA9IE1hdGguYWJzKG51bSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG91ciBsZXMgZ3JhbmRzIG5vbWJyZXMgKD49IDEwMDApLCBwYXMgZGUgZMOpY2ltYWxlc1xyXG4gICAgICAgIGlmIChhYnNOdW0gPj0gMTAwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChudW0pLnRvTG9jYWxlU3RyaW5nKCdmci1GUicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQb3VyIGxlcyBub21icmVzIGVudHJlIDEgZXQgOTk5LCBtYXggMiBkw6ljaW1hbGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgaWYgKGFic051bSA+PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKG51bSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgIHJldHVybiByb3VuZGVkLnRvTG9jYWxlU3RyaW5nKCdmci1GUicsIHsgXHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG91ciBsZXMgcGV0aXRzIG5vbWJyZXMgKDwgMSksIGFmZmljaGVyIGp1c3F1J8OgIDQgZMOpY2ltYWxlc1xyXG4gICAgICAgIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChhYnNOdW0pKTtcclxuICAgICAgICBjb25zdCBkZWNpbWFscyA9IE1hdGgubWluKDQsIE1hdGguYWJzKG1hZ25pdHVkZSkgKyAxKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbnVtLnRvTG9jYWxlU3RyaW5nKCdmci1GUicsIHsgXHJcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHMsXHJcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdFlBeGlzVmFsdWUodmFsdWU6IG51bWJlciwgZGlzcGxheVVuaXRzOiBzdHJpbmcsIHByZWNpc2lvbjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZm9ybWF0dGVkID0gdmFsdWU7XHJcbiAgICAgICAgbGV0IHN1ZmZpeCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHVuaXRzID0gcGFyc2VJbnQoZGlzcGxheVVuaXRzKTtcclxuXHJcbiAgICAgICAgaWYgKHVuaXRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEF1dG8gOiBkw6l0ZWN0aW9uIGF1dG9tYXRpcXVlXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMDAwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgc3VmZml4ID0gXCIgTWRzXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnModmFsdWUpID49IDEwMDAwMDApIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDtcclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IFwiIE1cIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgc3VmZml4ID0gXCIgS1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh1bml0cyA9PT0gMTAwMCkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSB2YWx1ZSAvIDEwMDA7XHJcbiAgICAgICAgICAgIHN1ZmZpeCA9IFwiIEtcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXRzID09PSAxMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZCA9IHZhbHVlIC8gMTAwMDAwMDtcclxuICAgICAgICAgICAgc3VmZml4ID0gXCIgTVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pdHMgPT09IDEwMDAwMDAwMDApIHtcclxuICAgICAgICAgICAgZm9ybWF0dGVkID0gdmFsdWUgLyAxMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICBzdWZmaXggPSBcIiBNZHNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFwcGxpcXVlciBsYSBwcsOpY2lzaW9uXHJcbiAgICAgICAgaWYgKHByZWNpc2lvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChmb3JtYXR0ZWQpLnRvTG9jYWxlU3RyaW5nKCdmci1GUicpICsgc3VmZml4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXR0ZWQudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJywge1xyXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb24sXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNpc2lvblxyXG4gICAgICAgICAgICB9KSArIHN1ZmZpeDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXREYXRlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFNpbXBsZW1lbnQgcmV0b3VybmVyIGxhIHZhbGV1ciB0ZWxsZSBxdWVsbGVcclxuICAgICAgICAvLyBQb3dlciBCSSBlbnZvaWUgZMOpasOgIGxlIGJvbiBmb3JtYXQgc2Vsb24gbGUgbml2ZWF1IGRlIGRyaWxsXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFZpc3VhbCB9IGZyb20gXCIuLi8uLi9zcmMvdmlzdWFsXCI7XG5pbXBvcnQgcG93ZXJiaVZpc3VhbHNBcGkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcbmltcG9ydCBJVmlzdWFsUGx1Z2luID0gcG93ZXJiaVZpc3VhbHNBcGkudmlzdWFscy5wbHVnaW5zLklWaXN1YWxQbHVnaW47XG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xuaW1wb3J0IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmlWaXN1YWxzQXBpLmV4dGVuc2liaWxpdHkudmlzdWFsLkRpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucztcbnZhciBwb3dlcmJpS2V5OiBhbnkgPSBcInBvd2VyYmlcIjtcbnZhciBwb3dlcmJpOiBhbnkgPSB3aW5kb3dbcG93ZXJiaUtleV07XG52YXIgY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHOiBJVmlzdWFsUGx1Z2luID0ge1xuICAgIG5hbWU6ICdjb3VyYmVkZWdyYWRlMEU1Qjk0MzAzREJCNEI3MTg4NEI5QjUwMEI4NDk2RkJfREVCVUcnLFxuICAgIGRpc3BsYXlOYW1lOiAnY291cmJlZGVncmFkZScsXG4gICAgY2xhc3M6ICdWaXN1YWwnLFxuICAgIGFwaVZlcnNpb246ICc1LjMuMCcsXG4gICAgY3JlYXRlOiAob3B0aW9ucz86IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykgPT4ge1xuICAgICAgICBpZiAoVmlzdWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZpc3VhbChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyAnVmlzdWFsIGluc3RhbmNlIG5vdCBmb3VuZCc7XG4gICAgfSxcbiAgICBjcmVhdGVNb2RhbERpYWxvZzogKGRpYWxvZ0lkOiBzdHJpbmcsIG9wdGlvbnM6IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucywgaW5pdGlhbFN0YXRlOiBvYmplY3QpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVnaXN0cnkgPSAoPGFueT5nbG9iYWxUaGlzKS5kaWFsb2dSZWdpc3RyeTtcbiAgICAgICAgaWYgKGRpYWxvZ0lkIGluIGRpYWxvZ1JlZ2lzdHJ5KSB7XG4gICAgICAgICAgICBuZXcgZGlhbG9nUmVnaXN0cnlbZGlhbG9nSWRdKG9wdGlvbnMsIGluaXRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGN1c3RvbTogdHJ1ZVxufTtcbmlmICh0eXBlb2YgcG93ZXJiaSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHBvd2VyYmkudmlzdWFscyA9IHBvd2VyYmkudmlzdWFscyB8fCB7fTtcbiAgICBwb3dlcmJpLnZpc3VhbHMucGx1Z2lucyA9IHBvd2VyYmkudmlzdWFscy5wbHVnaW5zIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zW1wiY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHXCJdID0gY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHO1xufVxuZXhwb3J0IGRlZmF1bHQgY291cmJlZGVncmFkZTBFNUI5NDMwM0RCQjRCNzE4ODRCOUI1MDBCODQ5NkZCX0RFQlVHOyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=