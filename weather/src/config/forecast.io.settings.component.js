System.register(['angular2/core', '../weather.service'], function(exports_1, context_1) {
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
    var core_1, weather_service_1;
    var ForecastIoSettingsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            ForecastIoSettingsComponent = (function () {
                function ForecastIoSettingsComponent(dao) {
                    this.dao = dao;
                    this.focus6 = new core_1.EventEmitter();
                    this.cancel6 = new core_1.EventEmitter();
                    this.save6 = new core_1.EventEmitter();
                }
                ForecastIoSettingsComponent.prototype.onFocus = function () {
                    this.focus6.emit(null);
                };
                ForecastIoSettingsComponent.prototype.onCancel = function () {
                    this.cancel6.emit(null);
                };
                ForecastIoSettingsComponent.prototype.onSave = function () {
                    this.save6.emit(null);
                };
                __decorate([
                    core_1.Output('focus'), 
                    __metadata('design:type', Object)
                ], ForecastIoSettingsComponent.prototype, "focus6", void 0);
                __decorate([
                    core_1.Output('cancel'), 
                    __metadata('design:type', Object)
                ], ForecastIoSettingsComponent.prototype, "cancel6", void 0);
                __decorate([
                    core_1.Output('save'), 
                    __metadata('design:type', Object)
                ], ForecastIoSettingsComponent.prototype, "save6", void 0);
                ForecastIoSettingsComponent = __decorate([
                    core_1.Component({
                        selector: 'forecast-io-settings',
                        host: { '[class.picker]': 'true' },
                        templateUrl: "src/config/forecast.io.settings.component.html",
                        styles: [':host{display: block;}']
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], ForecastIoSettingsComponent);
                return ForecastIoSettingsComponent;
            }());
            exports_1("ForecastIoSettingsComponent", ForecastIoSettingsComponent);
        }
    }
});
//# sourceMappingURL=forecast.io.settings.component.js.map