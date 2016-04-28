System.register(["../Color", "../Theme.interface", '../WidgetType', "../config.service", 'angular2/core', './text-picker.component', './widget-type-picker.component', './boolean-picker.component', "./color-picker.component", './weather-property-picker.component', "./default-theme-settings.component", "./weather-property-settings.component"], function(exports_1, context_1) {
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
    var Color_1, Theme_interface_1, WidgetType_1, config_service_1, core_1, text_picker_component_1, widget_type_picker_component_1, boolean_picker_component_1, color_picker_component_1, weather_property_picker_component_1, default_theme_settings_component_1, weather_property_settings_component_1;
    var ThemeCreatorMode, ThemeCreatorComponent;
    return {
        setters:[
            function (Color_1_1) {
                Color_1 = Color_1_1;
            },
            function (Theme_interface_1_1) {
                Theme_interface_1 = Theme_interface_1_1;
            },
            function (WidgetType_1_1) {
                WidgetType_1 = WidgetType_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (text_picker_component_1_1) {
                text_picker_component_1 = text_picker_component_1_1;
            },
            function (widget_type_picker_component_1_1) {
                widget_type_picker_component_1 = widget_type_picker_component_1_1;
            },
            function (boolean_picker_component_1_1) {
                boolean_picker_component_1 = boolean_picker_component_1_1;
            },
            function (color_picker_component_1_1) {
                color_picker_component_1 = color_picker_component_1_1;
            },
            function (weather_property_picker_component_1_1) {
                weather_property_picker_component_1 = weather_property_picker_component_1_1;
            },
            function (default_theme_settings_component_1_1) {
                default_theme_settings_component_1 = default_theme_settings_component_1_1;
            },
            function (weather_property_settings_component_1_1) {
                weather_property_settings_component_1 = weather_property_settings_component_1_1;
            }],
        execute: function() {
            (function (ThemeCreatorMode) {
                ThemeCreatorMode[ThemeCreatorMode["New"] = 0] = "New";
                ThemeCreatorMode[ThemeCreatorMode["Edit"] = 1] = "Edit";
                ThemeCreatorMode[ThemeCreatorMode["Copy"] = 2] = "Copy";
            })(ThemeCreatorMode || (ThemeCreatorMode = {}));
            exports_1("ThemeCreatorMode", ThemeCreatorMode);
            ThemeCreatorComponent = (function () {
                function ThemeCreatorComponent(_config) {
                    this._config = _config;
                    this.save11 = new core_1.EventEmitter();
                    this.update11 = new core_1.EventEmitter();
                    this.cancel11 = new core_1.EventEmitter();
                    this.WidgetType = WidgetType_1.WidgetType;
                    this.ThemeCreatorMode = ThemeCreatorMode;
                    this.currentPicker = null;
                    this.availableOptions = this.allOptions;
                    this.resetTheme();
                    this.onUpdate();
                }
                ThemeCreatorComponent.prototype.updateDaylight = function (showDaylight) {
                    if (showDaylight) {
                        this.theme.daylight = Color_1.Color.white;
                    }
                    else {
                        delete this.theme.daylight;
                    }
                    this.onUpdate();
                };
                ThemeCreatorComponent.prototype.resetTheme = function () {
                    if (this.theme) {
                        this.theme.name = '';
                        this.theme.themeType = Theme_interface_1.ThemeType.Custom;
                        this.theme.widgetType = WidgetType_1.WidgetType.Daily;
                        this.theme.globals.dot.color = Color_1.Color.white;
                        this.theme.globals.dot.radius = 5;
                        this.theme.globals.segment.show = true;
                        this.theme.globals.segment.color = Color_1.Color.white;
                        this.theme.globals.segment.angle = 40;
                        this.theme.globals.segment.padding = 4;
                        while (this.theme.options.length) {
                            this.availableOptions.push(this.theme.options.pop());
                        }
                    }
                    else {
                        this.theme = {
                            name: '',
                            themeType: Theme_interface_1.ThemeType.Custom,
                            widgetType: WidgetType_1.WidgetType.Daily,
                            globals: {
                                dot: {
                                    color: Color_1.Color.white,
                                    radius: 5
                                },
                                segment: {
                                    show: true,
                                    color: Color_1.Color.white,
                                    angle: 40,
                                    padding: 4
                                }
                            },
                            options: []
                        };
                    }
                };
                Object.defineProperty(ThemeCreatorComponent.prototype, "allOptions", {
                    get: function () {
                        var _this = this;
                        var x = ['moon', 'humidity', 'visibility', 'dewPoint', 'apparentTemperatureMax', 'apparentTemperatureMin', 'temperatureMin', 'temperatureMax', 'windSpeed', 'ozone', 'pressure', 'apparentTemperature', 'temperature', 'precipProbability', 'precipAccumulation'];
                        return x.map(function (o) { return _this.getDefaultConfigOption(o); });
                    },
                    enumerable: true,
                    configurable: true
                });
                ThemeCreatorComponent.prototype.getDefaultConfigOption = function (title) {
                    return {
                        title: title,
                        dot: {
                            color: { global: true, value: Color_1.Color.white },
                            radius: { global: true, value: 5 },
                        },
                        segment: {
                            show: { global: true, value: true },
                            color: { global: true, value: Color_1.Color.white },
                            angle: { global: true, value: 40 },
                            padding: { global: true, value: 5 }
                        }
                    };
                };
                ThemeCreatorComponent.prototype.add = function (o) {
                    this.theme.options.push(o);
                    this.availableOptions.splice(this.availableOptions.indexOf(o), 1);
                    this.onUpdate();
                };
                ThemeCreatorComponent.prototype.remove = function (o) {
                    this.availableOptions.push(o);
                    this.theme.options.splice(this.theme.options.indexOf(o), 1);
                    this.onUpdate();
                };
                ThemeCreatorComponent.prototype.onSave = function () {
                    //TODO validate this.theme
                    this._config.save(this.theme);
                    this.save11.emit(this.theme);
                };
                ThemeCreatorComponent.prototype.onCancel = function () {
                    this.cancel11.emit(null);
                };
                ThemeCreatorComponent.prototype.new = function () {
                    this.theme = null;
                    this.resetTheme();
                };
                ThemeCreatorComponent.prototype.onUpdate = function () {
                    this.update11.emit(this.theme);
                };
                __decorate([
                    core_1.Output('save'), 
                    __metadata('design:type', Object)
                ], ThemeCreatorComponent.prototype, "save11", void 0);
                __decorate([
                    core_1.Output('update'), 
                    __metadata('design:type', Object)
                ], ThemeCreatorComponent.prototype, "update11", void 0);
                __decorate([
                    core_1.Output('cancel'), 
                    __metadata('design:type', Object)
                ], ThemeCreatorComponent.prototype, "cancel11", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ThemeCreatorComponent.prototype, "mode", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ThemeCreatorComponent.prototype, "inputTheme", void 0);
                ThemeCreatorComponent = __decorate([
                    core_1.Component({
                        selector: 'theme-creator',
                        host: {
                            '[class.hide]': 'currentPicker',
                            '[class.show]': '!currentPicker',
                            '[class.pickerGroup]': 'true'
                        },
                        templateUrl: 'src/themeEditor/theme-creator.component.html',
                        styles: [':host { display: block; }'],
                        directives: [
                            color_picker_component_1.ColorPickerComponent,
                            boolean_picker_component_1.BooleanPickerComponent,
                            text_picker_component_1.TextPickerComponent,
                            widget_type_picker_component_1.WidgetTypePickerComponent,
                            weather_property_picker_component_1.WeatherPropertyPickerComponent,
                            default_theme_settings_component_1.DefaultThemeSettingsComponent,
                            weather_property_settings_component_1.WeatherPropertySettingsComponent,
                        ]
                    }), 
                    __metadata('design:paramtypes', [config_service_1.ConfigService])
                ], ThemeCreatorComponent);
                return ThemeCreatorComponent;
            }());
            exports_1("ThemeCreatorComponent", ThemeCreatorComponent);
        }
    }
});
//# sourceMappingURL=theme-creator.component.js.map