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
                    this.WidgetType = WidgetType_1.WidgetType;
                    this.ThemeCreatorMode = ThemeCreatorMode;
                    this.save11 = new core_1.EventEmitter();
                    this.update11 = new core_1.EventEmitter();
                    this.delete11 = new core_1.EventEmitter();
                    this.cancel11 = new core_1.EventEmitter();
                    this.currentPicker = null;
                    this.availableOptions = this.allOptions;
                    this.theme = this.emptyTheme;
                }
                Object.defineProperty(ThemeCreatorComponent.prototype, "inputTheme", {
                    set: function (t) {
                        this._inputTheme = t;
                        if (t) {
                            this.theme = this.emptyTheme;
                            this.copyThemeTo(t, this.theme);
                        }
                        else if (t === null) {
                            this.theme = this.emptyTheme;
                        } //t will be undefined to begin with, i.e., component load time
                        if (t !== undefined) {
                            this.onUpdate();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ThemeCreatorComponent.prototype.updateDaylight = function (showDaylight) {
                    if (showDaylight) {
                        this.theme.daylight = Color_1.Color.white;
                    }
                    else {
                        delete this.theme.daylight;
                    }
                    this.onUpdate();
                };
                ThemeCreatorComponent.prototype.copyThemeTo = function (from, to) {
                    to.name = from.name;
                    to.themeType = Theme_interface_1.ThemeType.Custom;
                    to.widgetType = from.widgetType;
                    to.globals.dot.color = from.globals.dot.color.copyOf();
                    to.globals.dot.radius = from.globals.dot.radius;
                    to.globals.segment.show = from.globals.segment.show;
                    to.globals.segment.color = from.globals.segment.color.copyOf();
                    to.globals.segment.angle = from.globals.segment.angle;
                    to.globals.segment.padding = from.globals.segment.padding;
                    if (from.daylight) {
                        to.daylight = from.daylight.copyOf();
                    }
                    else {
                        delete to.daylight;
                    }
                    for (var _i = 0, _a = from.options; _i < _a.length; _i++) {
                        var o = _a[_i];
                        to.options.push({
                            title: o.title,
                            dot: {
                                color: {
                                    global: o.dot.color.global,
                                    value: o.dot.color.value.copyOf()
                                },
                                radius: {
                                    global: o.dot.radius.global,
                                    value: o.dot.radius.value
                                },
                            },
                            segment: {
                                show: {
                                    global: o.segment.show.global,
                                    value: o.segment.show.value
                                },
                                color: {
                                    global: o.segment.color.global,
                                    value: o.segment.color.value.copyOf()
                                },
                                angle: {
                                    global: o.segment.angle.global,
                                    value: o.segment.angle.value
                                },
                                padding: {
                                    global: o.segment.padding.global,
                                    value: o.segment.padding.value
                                }
                            }
                        });
                    }
                };
                Object.defineProperty(ThemeCreatorComponent.prototype, "emptyTheme", {
                    /**
                     * Return a new instance of an "empty" theme.
                     */
                    get: function () {
                        return {
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
                    },
                    enumerable: true,
                    configurable: true
                });
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
                ThemeCreatorComponent.prototype.onDelete = function () {
                    this._config.delete(this._inputTheme);
                    this.delete11.emit(this._inputTheme);
                };
                ThemeCreatorComponent.prototype.onSave = function () {
                    if (this.mode === ThemeCreatorMode.Edit) {
                        this.copyThemeTo(this.theme, this._inputTheme);
                        this.theme = this._inputTheme;
                    }
                    this._config.save(this.theme);
                    this.save11.emit(this.theme);
                };
                ThemeCreatorComponent.prototype.onCancel = function () {
                    this.mode = null;
                    this.inputTheme = null;
                    this.cancel11.emit(null);
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
                    core_1.Output('delete'), 
                    __metadata('design:type', Object)
                ], ThemeCreatorComponent.prototype, "delete11", void 0);
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
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], ThemeCreatorComponent.prototype, "inputTheme", null);
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