System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Day;
    return {
        setters:[],
        execute: function() {
            Day = (function () {
                function Day(data, ranges, xLeft, xRight, yTop, yBottom) {
                    this.data = data;
                    this.ranges = ranges;
                    this.xLeft = xLeft;
                    this.xRight = xRight;
                    this.yTop = yTop;
                    this.yBottom = yBottom;
                    /**
                     * http://radar.weather.gov/Legend/N0R/DMX_N0R_Legend_0.gif
                     * https://en.wikipedia.org/wiki/DBZ_(meteorology)
                     */
                    this._dbzs = [
                        { intensity: 69.9, color: 'rgb(253, 253, 253)' },
                        { intensity: 34, color: 'rgb(152, 84, 198)' },
                        { intensity: 16.6, color: 'rgb(248, 0, 253)' },
                        { intensity: 8, color: 'rgb(188, 0, 0)' },
                        { intensity: 4, color: 'rgb(212, 0, 0)' },
                        { intensity: 1.9, color: 'rgb(253, 0, 0)' },
                        { intensity: .92, color: 'rgb(253, 149, 0)' },
                        { intensity: .45, color: 'rgb(229, 188, 0)' },
                        { intensity: .22, color: 'rgb(253, 248, 2)' },
                        { intensity: .1, color: 'rgb(0, 142, 0)' },
                        { intensity: .05, color: 'rgb(1, 197, 1)' },
                        { intensity: .02, color: 'rgb(2, 253, 2)' },
                        { intensity: .01, color: 'rgb(3, 0, 244)' },
                        { intensity: .006, color: 'rgb(1, 159, 244)' },
                        { intensity: .003, color: 'rgb(4, 233, 231)' },
                        { intensity: 0, color: 'rgb(4, 233, 231)' } //TODO I don't know what to do for this color/intensity.
                    ];
                    this.bod = this.data.time;
                    this.eod = this.data.time + Day.SECONDS_PER_DAY;
                    this.sunrise = this.data.sunriseTime;
                    this.sunset = this.data.sunsetTime;
                }
                Object.defineProperty(Day, "SECONDS_PER_DAY", {
                    get: function () {
                        return 86400;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "precipitation", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.data.precipIntensityMaxTime - this.bod) * this.unitsPerSecond,
                            y: this.yTop + (1 - this.data.precipProbability) * this.dayHeight
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "precipIntensityMaxColor", {
                    get: function () {
                        var _this = this;
                        return this._dbzs.find(function (i) { return i.intensity < _this.data.precipIntensityMax; }).color;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "precipIntensityColor", {
                    get: function () {
                        var _this = this;
                        return this._dbzs.find(function (i) { return i.intensity < _this.data.precipIntensity; }).color;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "apparentTemperatureMax", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.data.apparentTemperatureMaxTime - this.bod) * this.unitsPerSecond,
                            y: this.yTop + (this.ranges.temperature.max - this.data.apparentTemperatureMax) * this.unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "apparentTemperatureMin", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.data.apparentTemperatureMinTime - this.bod) * this.unitsPerSecond,
                            y: this.yTop + (this.ranges.temperature.max - this.data.apparentTemperatureMin) * this.unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "temperatureMax", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.data.temperatureMaxTime - this.bod) * this.unitsPerSecond,
                            y: this.yTop + (this.ranges.temperature.max - this.data.temperatureMax) * this.unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "temperatureMin", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.data.temperatureMinTime - this.bod) * this.unitsPerSecond,
                            y: this.yTop + (this.ranges.temperature.max - this.data.temperatureMin) * this.unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "moon", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.xRight - this.xLeft) / 2,
                            y: this.yTop + Math.abs(.5 - this.data.moonPhase) * this.dayHeight * 2
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "humidity", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.xRight - this.xLeft) / 2,
                            y: this.yTop + (1 - this.data.humidity) * this.dayHeight
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "visibility", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.xRight - this.xLeft) / 2,
                            y: this.yTop + (10 - this.data.visibility) * this.dayHeight * .1
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "dewPoint", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.xRight - this.xLeft) / 2,
                            y: this.yTop + (this.ranges.temperature.max - this.data.dewPoint) * this.unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "windSpeed", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.xRight - this.xLeft) / 2,
                            y: this.yTop + (this.ranges.windSpeed.max - this.data.windSpeed) * (this.dayHeight / this.ranges.windSpeed.max)
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "ozone", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.xRight - this.xLeft) / 2,
                            y: this.yTop + (this.ranges.ozone.max - this.data.ozone) * (this.dayHeight / (this.ranges.ozone.max - this.ranges.ozone.min))
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "pressure", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.xRight - this.xLeft) / 2,
                            y: this.yTop + (this.ranges.pressure.max - this.data.pressure) * (this.dayHeight / (this.ranges.pressure.max - this.ranges.pressure.min))
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "apparentTemperature", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.xRight - this.xLeft) / 2,
                            y: this.yTop + (this.ranges.temperature.max - this.data.apparentTemperature) * this.unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "temperature", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.xRight - this.xLeft) / 2,
                            y: this.yTop + (this.ranges.temperature.max - this.data.temperature) * this.unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "precipProbability", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.xRight - this.xLeft) / 2,
                            y: this.yTop + (1 - this.data.precipProbability) * this.dayHeight
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "precipAccumulation", {
                    get: function () {
                        return {
                            x: this.xLeft + (this.xRight - this.xLeft) / 2,
                            y: this.yTop + (this.ranges.precipAccumulation.max - this.data.precipAccumulation) * (this.dayHeight / (this.ranges.precipAccumulation.max - this.ranges.precipAccumulation.min))
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "unitsPerSecond", {
                    get: function () {
                        return this.dayWidth / Day.SECONDS_PER_DAY;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "unitsPerDegree", {
                    get: function () {
                        return this.dayHeight / (this.ranges.temperature.max - this.ranges.temperature.min);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "sunriseX", {
                    get: function () {
                        return this.xLeft + (this.sunrise - this.bod) * this.unitsPerSecond; //TODO
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "sunsetX", {
                    get: function () {
                        return this.xLeft + (this.sunset - this.bod) * this.unitsPerSecond; //TODO
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "sunTop", {
                    get: function () {
                        return this.yTop; //TODO padding? for now default to top of day
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "dayHeight", {
                    get: function () {
                        return this.yBottom - this.yTop;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "dayWidth", {
                    get: function () {
                        return this.xRight - this.xLeft;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "sunHeight", {
                    get: function () {
                        return this.dayHeight; //TODO padding?, for now default to dayHeight
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "sunWidth", {
                    get: function () {
                        return this.sunSeconds * this.unitsPerSecond;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Day.prototype, "sunSeconds", {
                    get: function () {
                        return this.sunset - this.sunrise;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Day;
            }());
            exports_1("Day", Day);
        }
    }
});
//# sourceMappingURL=Day.js.map