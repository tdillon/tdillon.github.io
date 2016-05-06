System.register(["./forecast.io.refresher.component", 'angular2/core', './forecast.io.settings.component'], function(exports_1, context_1) {
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
    var forecast_io_refresher_component_1, core_1, forecast_io_settings_component_1;
    var ConfigComponent;
    return {
        setters:[
            function (forecast_io_refresher_component_1_1) {
                forecast_io_refresher_component_1 = forecast_io_refresher_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forecast_io_settings_component_1_1) {
                forecast_io_settings_component_1 = forecast_io_settings_component_1_1;
            }],
        execute: function() {
            ConfigComponent = (function () {
                function ConfigComponent() {
                    this.close4 = new core_1.EventEmitter();
                    this.refresh4 = new core_1.EventEmitter();
                    this.currentPicker = null;
                }
                ConfigComponent.prototype.onClose = function () {
                    this.close4.emit(null);
                };
                ConfigComponent.prototype.onRefresh = function (weather) {
                    this.refresh4.emit(weather);
                };
                __decorate([
                    core_1.Output('close'), 
                    __metadata('design:type', Object)
                ], ConfigComponent.prototype, "close4", void 0);
                __decorate([
                    core_1.Output('refresh'), 
                    __metadata('design:type', Object)
                ], ConfigComponent.prototype, "refresh4", void 0);
                ConfigComponent = __decorate([
                    core_1.Component({
                        selector: 'config',
                        host: {
                            '[class.hide]': 'currentPicker',
                            '[class.show]': '!currentPicker',
                            '[class.pickerGroup]': 'true'
                        },
                        templateUrl: 'src/config/config.component.html',
                        directives: [forecast_io_settings_component_1.ForecastIoSettingsComponent, forecast_io_refresher_component_1.ForecastIoRefresherComponent],
                        styles: [':host{display: block;}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfigComponent);
                return ConfigComponent;
            }());
            exports_1("ConfigComponent", ConfigComponent);
        }
    }
});
//# sourceMappingURL=config.component.js.map