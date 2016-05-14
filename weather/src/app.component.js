System.register(["./themeEditor/theme-creator.component", "./themeList/theme-picker.component", 'angular2/core', './weather.service', './widget-display.component', "./config.service", './config/config.component'], function(exports_1, context_1) {
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
    var theme_creator_component_1, theme_picker_component_1, core_1, weather_service_1, widget_display_component_1, config_service_1, config_component_1;
    var AppComponent;
    return {
        setters:[
            function (theme_creator_component_1_1) {
                theme_creator_component_1 = theme_creator_component_1_1;
            },
            function (theme_picker_component_1_1) {
                theme_picker_component_1 = theme_picker_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (widget_display_component_1_1) {
                widget_display_component_1 = widget_display_component_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            },
            function (config_component_1_1) {
                config_component_1 = config_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_weatherService, config) {
                    this._weatherService = _weatherService;
                    this.config = config;
                    this.showMenu = false;
                    this.Pages = { Themes: 1, Editor: 2, Config: 3 };
                    this.currentPage = this.Pages.Themes;
                }
                AppComponent.prototype.ngAfterViewInit = function () {
                    this.getWeather();
                };
                AppComponent.prototype.getWeather = function () {
                    var _this = this;
                    this._weatherService.getWeather().then(function (weather) {
                        _this.data = weather;
                    }, function () { return console.log('Data is not set, configure forecast io info!!!'); });
                };
                // createTheme() {
                //   this.tab = 2;
                //   this.currentThemeBeforeCreatingTheme = this.currentTheme;
                // }
                AppComponent.prototype.cancelThemeCreation = function () {
                    this.currentTheme = this.currentThemeBeforeCreatingTheme;
                    this.currentPage = this.Pages.Themes;
                };
                AppComponent.prototype.themeSave = function (theme) {
                    this.currentTheme = theme;
                    this.currentPage = this.Pages.Themes;
                };
                AppComponent.prototype.themeDelete = function (theme) {
                    //TODO delete theme
                    this.currentPage = this.Pages.Themes;
                };
                AppComponent.prototype.onCreateTheme = function () {
                    this.creatorMode = theme_creator_component_1.ThemeCreatorMode.New;
                    this.inputTheme = null;
                    this.currentPage = this.Pages.Editor;
                };
                AppComponent.prototype.onEditTheme = function (t) {
                    this.creatorMode = theme_creator_component_1.ThemeCreatorMode.Edit;
                    this.inputTheme = t;
                    this.currentPage = this.Pages.Editor;
                };
                AppComponent.prototype.onCopyTheme = function (t) {
                    this.creatorMode = theme_creator_component_1.ThemeCreatorMode.Copy;
                    this.inputTheme = t;
                    this.currentPage = this.Pages.Editor;
                };
                AppComponent.prototype.clickWidget = function () {
                    this.showMenu = !this.showMenu;
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    }
                    else if (document.documentElement['mozRequestFullScreen']) {
                        document.documentElement['mozRequestFullScreen']();
                    }
                    else if (document.documentElement['webkitRequestFullscreen']) {
                        document.documentElement['webkitRequestFullscreen']();
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-widget-number-one-prototype',
                        templateUrl: "src/app.component.html",
                        styleUrls: ['src/app.component.css'],
                        providers: [weather_service_1.WeatherService, config_service_1.ConfigService],
                        directives: [theme_picker_component_1.ThemePickerComponent, theme_creator_component_1.ThemeCreatorComponent, widget_display_component_1.WidgetDisplayComponent, config_component_1.ConfigComponent]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService, config_service_1.ConfigService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map