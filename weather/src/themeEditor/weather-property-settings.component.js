System.register(["./boolean-picker.component", "./number-picker.component", "./color-picker.component", 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var boolean_picker_component_1, number_picker_component_1, color_picker_component_1, core_1;
    var WeatherPropertySettingsComponent;
    return {
        setters:[
            function (boolean_picker_component_1_1) {
                boolean_picker_component_1 = boolean_picker_component_1_1;
            },
            function (number_picker_component_1_1) {
                number_picker_component_1 = number_picker_component_1_1;
            },
            function (color_picker_component_1_1) {
                color_picker_component_1 = color_picker_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WeatherPropertySettingsComponent = (function () {
                function WeatherPropertySettingsComponent() {
                    this.focus2 = new core_1.EventEmitter();
                    this.update2 = new core_1.EventEmitter();
                    this.cancel2 = new core_1.EventEmitter();
                    this.save2 = new core_1.EventEmitter();
                    this.title = '';
                    this.currentPicker = null;
                }
                WeatherPropertySettingsComponent.prototype.onFocus = function (picker) {
                    this.currentPicker = picker;
                    this.focus2.emit(null);
                };
                WeatherPropertySettingsComponent.prototype.onUpdate = function () {
                    this.update2.emit(null);
                };
                WeatherPropertySettingsComponent.prototype.onCancel = function () {
                    this.currentPicker = null;
                };
                WeatherPropertySettingsComponent.prototype.onCancelMe = function () {
                    this.cancel2.emit(null);
                };
                WeatherPropertySettingsComponent.prototype.onSave = function () {
                    this.currentPicker = null;
                };
                WeatherPropertySettingsComponent.prototype.onSaveMe = function () {
                    this.save2.emit(null);
                };
                __decorate([
                    core_1.Output('focus'), 
                    __metadata('design:type', Object)
                ], WeatherPropertySettingsComponent.prototype, "focus2", void 0);
                __decorate([
                    core_1.Output('update'), 
                    __metadata('design:type', Object)
                ], WeatherPropertySettingsComponent.prototype, "update2", void 0);
                __decorate([
                    core_1.Output('cancel'), 
                    __metadata('design:type', Object)
                ], WeatherPropertySettingsComponent.prototype, "cancel2", void 0);
                __decorate([
                    core_1.Output('save'), 
                    __metadata('design:type', Object)
                ], WeatherPropertySettingsComponent.prototype, "save2", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WeatherPropertySettingsComponent.prototype, "default", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WeatherPropertySettingsComponent.prototype, "property", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WeatherPropertySettingsComponent.prototype, "title", void 0);
                WeatherPropertySettingsComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-property-settings',
                        host: { '[class.hide]': 'currentPicker', '[class.pickerGroup]': 'true' },
                        templateUrl: "src/themeEditor/weather-property-settings.component.html",
                        styles: [':host{display: block;}'],
                        directives: [color_picker_component_1.ColorPickerComponent, number_picker_component_1.NumberPickerComponent, boolean_picker_component_1.BooleanPickerComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WeatherPropertySettingsComponent);
                return WeatherPropertySettingsComponent;
            }());
            exports_1("WeatherPropertySettingsComponent", WeatherPropertySettingsComponent);
        }
    }
});
//# sourceMappingURL=weather-property-settings.component.js.map