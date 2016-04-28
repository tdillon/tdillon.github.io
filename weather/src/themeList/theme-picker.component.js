System.register(["../Theme.interface", "../config.service", 'angular2/core', '../WidgetType'], function(exports_1, context_1) {
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
    var Theme_interface_1, config_service_1, core_1, WidgetType_1;
    var ThemePickerComponent;
    return {
        setters:[
            function (Theme_interface_1_1) {
                Theme_interface_1 = Theme_interface_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (WidgetType_1_1) {
                WidgetType_1 = WidgetType_1_1;
            }],
        execute: function() {
            ThemePickerComponent = (function () {
                function ThemePickerComponent(_config) {
                    var _this = this;
                    this.themePicked13 = new core_1.EventEmitter();
                    this.showConfig13 = new core_1.EventEmitter();
                    this.createTheme13 = new core_1.EventEmitter();
                    this.copyTheme13 = new core_1.EventEmitter();
                    this.editTheme13 = new core_1.EventEmitter();
                    this.themes = [];
                    this.WidgetType = WidgetType_1.WidgetType;
                    this.ThemeType = Theme_interface_1.ThemeType;
                    _config.themes.subscribe(function (t) {
                        _this.themes.push(t);
                        if (_this.themes.length == 1) {
                            _this.onSelect(_this.themes[0]);
                        }
                    });
                }
                ThemePickerComponent.prototype.onCreateTheme = function () {
                    this.createTheme13.emit(null);
                };
                ThemePickerComponent.prototype.onEditTheme = function (t) {
                    this.editTheme13.emit(t);
                };
                ThemePickerComponent.prototype.onCopyTheme = function (t) {
                    this.copyTheme13.emit(t);
                };
                ThemePickerComponent.prototype.onSelect = function (theme) {
                    this.current = theme;
                    this.themePicked13.emit(theme);
                };
                ThemePickerComponent.prototype.onShowConfig = function () {
                    this.showConfig13.emit(null);
                };
                __decorate([
                    core_1.Output('themePicked'), 
                    __metadata('design:type', Object)
                ], ThemePickerComponent.prototype, "themePicked13", void 0);
                __decorate([
                    core_1.Output('showConfig'), 
                    __metadata('design:type', Object)
                ], ThemePickerComponent.prototype, "showConfig13", void 0);
                __decorate([
                    core_1.Output('createTheme'), 
                    __metadata('design:type', Object)
                ], ThemePickerComponent.prototype, "createTheme13", void 0);
                __decorate([
                    core_1.Output('copyTheme'), 
                    __metadata('design:type', Object)
                ], ThemePickerComponent.prototype, "copyTheme13", void 0);
                __decorate([
                    core_1.Output('editTheme'), 
                    __metadata('design:type', Object)
                ], ThemePickerComponent.prototype, "editTheme13", void 0);
                ThemePickerComponent = __decorate([
                    core_1.Component({
                        selector: 'theme-picker',
                        host: {
                            '[class.show]': 'true',
                            '[class.pickerGroup]': 'true'
                        },
                        templateUrl: "src/themeList/theme-picker.component.html",
                        styles: [':host{display: block;}']
                    }), 
                    __metadata('design:paramtypes', [config_service_1.ConfigService])
                ], ThemePickerComponent);
                return ThemePickerComponent;
            }());
            exports_1("ThemePickerComponent", ThemePickerComponent);
        }
    }
});
//# sourceMappingURL=theme-picker.component.js.map