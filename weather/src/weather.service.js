System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var WeatherService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WeatherService = (function () {
                function WeatherService() {
                    var d = localStorage.getItem('data');
                    this.data = (d ? JSON.parse(d) : null);
                    this.apikey = localStorage.getItem('apikey');
                    this.latitude = +localStorage.getItem('latitude');
                    this.longitude = +localStorage.getItem('longitude');
                }
                WeatherService.prototype.getWeather = function () {
                    var _this = this;
                    if (this.data) {
                        return new Promise(function (resolve, reject) { return resolve(_this.data); });
                    }
                    else if (this.apikey && this.latitude && this.longitude) {
                        return this.refresh();
                    }
                    else {
                        return new Promise(function (resolve, reject) {
                            reject();
                        });
                    }
                };
                WeatherService.prototype.refresh = function () {
                    var _this = this;
                    localStorage.setItem('apikey', this.apikey);
                    localStorage.setItem('latitude', this.latitude.toString());
                    localStorage.setItem('longitude', this.longitude.toString());
                    return new Promise(function (resolve) {
                        var callback = 'apiCallback';
                        var self = _this;
                        window[callback] = function (weatherData) {
                            //Set the moonPhase for each day to the corresponding midnight hourly data.
                            weatherData.hourly.data.forEach(function (h) {
                                if (new Date(h.time * 1000).getHours() === 0) {
                                    h.moonPhase = weatherData.daily.data.find(function (d) { return d.time === h.time; }).moonPhase; //add moonPhase to midnight hour
                                }
                            });
                            localStorage.setItem('data', JSON.stringify(self.data = weatherData));
                            resolve(weatherData);
                        };
                        var apiScript = document.createElement('script');
                        apiScript.src = "https://api.forecast.io/forecast/" + _this.apikey + "/" + _this.latitude + "," + _this.longitude + "?callback=" + callback + "&exclude=flags,minutely";
                        document.body.appendChild(apiScript);
                    });
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WeatherService);
                return WeatherService;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});
//# sourceMappingURL=weather.service.js.map