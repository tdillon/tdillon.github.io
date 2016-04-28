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
    var ForecastIoRefresherComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            ForecastIoRefresherComponent = (function () {
                function ForecastIoRefresherComponent(dao) {
                    var _this = this;
                    this.dao = dao;
                    this.refresh5 = new core_1.EventEmitter();
                    this.refreshing = false;
                    dao.getWeather().then(function (weather) {
                        var dt = new Date(weather.currently.time * 1000);
                        _this.timestamp = dt.toLocaleString();
                    });
                }
                ForecastIoRefresherComponent.prototype.onRefresh = function () {
                    var _this = this;
                    if (this.refreshing) {
                        return;
                    }
                    this.refreshing = true;
                    this.dao.refresh().then(function (weather) {
                        _this.refreshing = false;
                        var dt = new Date(weather.currently.time * 1000);
                        _this.timestamp = dt.toLocaleString();
                        _this.refresh5.emit(weather);
                    });
                };
                __decorate([
                    core_1.Output('refresh'), 
                    __metadata('design:type', Object)
                ], ForecastIoRefresherComponent.prototype, "refresh5", void 0);
                ForecastIoRefresherComponent = __decorate([
                    core_1.Component({
                        selector: 'forecast-io-refresher',
                        host: { '[class.picker]': 'true' },
                        templateUrl: "src/config/forecast.io.refresher.component.html",
                        styles: [':host{display: block;}']
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], ForecastIoRefresherComponent);
                return ForecastIoRefresherComponent;
            }());
            exports_1("ForecastIoRefresherComponent", ForecastIoRefresherComponent);
        }
    }
});
//# sourceMappingURL=forecast.io.refresher.component.js.map