System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Ranges;
    return {
        setters:[],
        execute: function() {
            Ranges = (function () {
                function Ranges(db, config) {
                    this.minTemp = this.minOzone = this.minPressure = Number.MAX_SAFE_INTEGER;
                    this.maxTemp = this.maxOzone = this.maxPressure = this.maxWindSpeed = this.maxPrecipAccumulation = Number.MIN_SAFE_INTEGER;
                    var temperatureOptions = ['temperatureMax', 'temperatureMin', 'dewPoint', 'apparentTemperatureMax', 'apparentTemperatureMin', 'apparentTemperature', 'temperature'];
                    for (var _i = 0, _a = db.data; _i < _a.length; _i++) {
                        var d = _a[_i];
                        var _loop_1 = function(t) {
                            if (config.options.some(function (o) { return o.title === t; })) {
                                if (d[t] > this_1.maxTemp) {
                                    this_1.maxTemp = d[t];
                                }
                                if (d[t] < this_1.minTemp) {
                                    this_1.minTemp = d[t];
                                }
                            }
                        };
                        var this_1 = this;
                        for (var _b = 0, temperatureOptions_1 = temperatureOptions; _b < temperatureOptions_1.length; _b++) {
                            var t = temperatureOptions_1[_b];
                            _loop_1(t);
                        }
                        if (d.windSpeed > this.maxWindSpeed) {
                            this.maxWindSpeed = d.windSpeed;
                        }
                        if (d.ozone > this.maxOzone) {
                            this.maxOzone = d.ozone;
                        }
                        if (d.ozone < this.minOzone) {
                            this.minOzone = d.ozone;
                        }
                        if (d.pressure > this.maxPressure) {
                            this.maxPressure = d.pressure;
                        }
                        if (d.pressure < this.minPressure) {
                            this.minPressure = d.pressure;
                        }
                        if (d.precipAccumulation > this.maxPrecipAccumulation) {
                            this.maxPrecipAccumulation = d.precipAccumulation;
                        }
                    }
                }
                Object.defineProperty(Ranges.prototype, "temperature", {
                    get: function () {
                        return {
                            min: this.minTemp,
                            max: this.maxTemp
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Ranges.prototype, "ozone", {
                    get: function () {
                        return {
                            min: this.minOzone,
                            max: this.maxOzone
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Ranges.prototype, "pressure", {
                    get: function () {
                        return {
                            min: this.minPressure,
                            max: this.maxPressure
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Ranges.prototype, "windSpeed", {
                    get: function () {
                        return {
                            min: 0,
                            max: this.maxWindSpeed
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Ranges.prototype, "precipAccumulation", {
                    get: function () {
                        return {
                            min: 0,
                            max: this.maxPrecipAccumulation
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return Ranges;
            }());
            exports_1("Ranges", Ranges);
        }
    }
});
//# sourceMappingURL=Ranges.js.map