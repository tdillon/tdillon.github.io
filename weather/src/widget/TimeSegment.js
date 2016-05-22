System.register(["../WidgetType", './Box'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WidgetType_1, Box_1;
    var TimeSegment;
    return {
        setters:[
            function (WidgetType_1_1) {
                WidgetType_1 = WidgetType_1_1;
            },
            function (Box_1_1) {
                Box_1 = Box_1_1;
            }],
        execute: function() {
            TimeSegment = (function () {
                function TimeSegment(_theme, _data, graphBox, timeBarBox, _ranges) {
                    this._data = _data;
                    this.graphBox = graphBox;
                    this.timeBarBox = timeBarBox;
                    this._ranges = _ranges;
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
                    var secondsPerSegment = (_theme.widgetType === WidgetType_1.WidgetType.Daily ? 86400 : 3600);
                    this._unitsPerDegree = this.graphBox.height / (this._ranges.temperature.max - this._ranges.temperature.min);
                    this._unitsPerSecond = this.graphBox.width / secondsPerSegment;
                    this.from = _data.time;
                    this.to = this.from + secondsPerSegment;
                    this.cloudCover = _data.cloudCover;
                    this.windBearing = _data.windBearing;
                    this.moonPhase = _data.moonPhase;
                    //SETUP timeBarDisplay
                    var day = new Date(this.from * 1000);
                    var hour = day.getHours();
                    if (_theme.widgetType === WidgetType_1.WidgetType.Hourly) {
                        this.timeBarDisplay = ((hour % 4 === 0) ? (hour === 0 ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][day.getDay()] : hour.toString()) : '');
                    }
                    else {
                        this.timeBarDisplay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][day.getDay()];
                    }
                    var widthPerSecond = this.graphBox.width / secondsPerSegment;
                    this.graphDaytimes = [];
                    this.graphNighttimes = [];
                    this.timeBarDaytimes = [];
                    this.timeBarNighttimes = [];
                    if (_data.sunsetTime < this.from || _data.sunriseTime > this.to) {
                        this.timeBarNighttimes.push(new Box_1.Box(timeBarBox.left, timeBarBox.top, timeBarBox.width, timeBarBox.height));
                        this.graphNighttimes.push(new Box_1.Box(graphBox.left, graphBox.top, graphBox.width, graphBox.height));
                    }
                    else if (_data.sunriseTime < this.from) {
                        this.timeBarDaytimes.push(new Box_1.Box(timeBarBox.left, timeBarBox.top, (Math.min(_data.sunsetTime, this.to) - this.from) * widthPerSecond, timeBarBox.height));
                        this.graphDaytimes.push(new Box_1.Box(graphBox.left, graphBox.top, (Math.min(_data.sunsetTime, this.to) - this.from) * widthPerSecond, graphBox.height));
                        if (_data.sunsetTime < this.to) {
                            this.timeBarNighttimes.push(new Box_1.Box(timeBarBox.left + (_data.sunsetTime - this.from) * widthPerSecond, timeBarBox.top, (this.to - _data.sunsetTime) * widthPerSecond, timeBarBox.height));
                            this.graphNighttimes.push(new Box_1.Box(graphBox.left + (_data.sunsetTime - this.from) * widthPerSecond, graphBox.top, (this.to - _data.sunsetTime) * widthPerSecond, graphBox.height));
                        }
                    }
                    else {
                        this.timeBarNighttimes.push(new Box_1.Box(timeBarBox.left, timeBarBox.top, (_data.sunriseTime - this.from) * widthPerSecond, timeBarBox.height));
                        this.graphNighttimes.push(new Box_1.Box(graphBox.left, graphBox.top, (_data.sunriseTime - this.from) * widthPerSecond, graphBox.height));
                        this.timeBarDaytimes.push(new Box_1.Box(timeBarBox.left + (_data.sunriseTime - this.from) * widthPerSecond, timeBarBox.top, (Math.min(_data.sunsetTime, this.to) - _data.sunriseTime) * widthPerSecond, timeBarBox.height));
                        this.graphDaytimes.push(new Box_1.Box(graphBox.left + (_data.sunriseTime - this.from) * widthPerSecond, graphBox.top, (Math.min(_data.sunsetTime, this.to) - _data.sunriseTime) * widthPerSecond, graphBox.height));
                        if (_data.sunsetTime < this.to) {
                            this.timeBarNighttimes.push(new Box_1.Box(timeBarBox.left + (_data.sunsetTime - this.from) * widthPerSecond, timeBarBox.top, (this.to - _data.sunsetTime) * widthPerSecond, timeBarBox.height));
                            this.graphNighttimes.push(new Box_1.Box(graphBox.left + (_data.sunsetTime - this.from) * widthPerSecond, graphBox.top, (this.to - _data.sunsetTime) * widthPerSecond, graphBox.height));
                        }
                    }
                }
                Object.defineProperty(TimeSegment.prototype, "precipIntensityMaxColor", {
                    get: function () {
                        var _this = this;
                        return this._dbzs.find(function (i) { return i.intensity < _this._data.precipIntensityMax; }).color;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "precipIntensityColor", {
                    get: function () {
                        var _this = this;
                        return this._dbzs.find(function (i) { return i.intensity < _this._data.precipIntensity; }).color;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "windSpeed", {
                    get: function () {
                        return {
                            x: this.graphBox.center.x,
                            y: this.graphBox.top + (this._ranges.windSpeed.max - this._data.windSpeed) * (this.graphBox.height / this._ranges.windSpeed.max)
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "moon", {
                    get: function () {
                        return {
                            x: this.graphBox.center.x,
                            y: this.graphBox.top + Math.abs(.5 - this.moonPhase) * this.graphBox.height * 2
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "precipitation", {
                    get: function () {
                        return {
                            x: this.graphBox.left + (this._data.precipIntensityMaxTime - this.from) * this._unitsPerSecond,
                            y: this.graphBox.top + (1 - this._data.precipProbability) * this.graphBox.height
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "apparentTemperatureMax", {
                    get: function () {
                        return {
                            x: this.graphBox.left + (this._data.apparentTemperatureMaxTime - this.from) * this._unitsPerSecond,
                            y: this.graphBox.top + (this._ranges.temperature.max - this._data.apparentTemperatureMax) * this._unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "apparentTemperatureMin", {
                    get: function () {
                        return {
                            x: this.graphBox.left + (this._data.apparentTemperatureMinTime - this.from) * this._unitsPerSecond,
                            y: this.graphBox.top + (this._ranges.temperature.max - this._data.apparentTemperatureMin) * this._unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "temperatureMax", {
                    get: function () {
                        return {
                            x: this.graphBox.left + (this._data.temperatureMaxTime - this.from) * this._unitsPerSecond,
                            y: this.graphBox.top + (this._ranges.temperature.max - this._data.temperatureMax) * this._unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "temperatureMin", {
                    get: function () {
                        return {
                            x: this.graphBox.left + (this._data.temperatureMinTime - this.from) * this._unitsPerSecond,
                            y: this.graphBox.top + (this._ranges.temperature.max - this._data.temperatureMin) * this._unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "humidity", {
                    get: function () {
                        return {
                            x: this.graphBox.center.x,
                            y: this.graphBox.top + (1 - this._data.humidity) * this.graphBox.height
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "visibility", {
                    get: function () {
                        return {
                            x: this.graphBox.center.x,
                            y: this.graphBox.top + (10 - this._data.visibility) * this.graphBox.height * .1
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "dewPoint", {
                    get: function () {
                        return {
                            x: this.graphBox.center.x,
                            y: this.graphBox.top + (this._ranges.temperature.max - this._data.dewPoint) * this._unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "ozone", {
                    get: function () {
                        return {
                            x: this.graphBox.center.x,
                            y: this.graphBox.top + (this._ranges.ozone.max - this._data.ozone) * (this.graphBox.height / (this._ranges.ozone.max - this._ranges.ozone.min))
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "pressure", {
                    get: function () {
                        return {
                            x: this.graphBox.center.x,
                            y: this.graphBox.top + (this._ranges.pressure.max - this._data.pressure) * (this.graphBox.height / (this._ranges.pressure.max - this._ranges.pressure.min))
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "apparentTemperature", {
                    get: function () {
                        return {
                            x: this.graphBox.center.x,
                            y: this.graphBox.top + (this._ranges.temperature.max - this._data.apparentTemperature) * this._unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "temperature", {
                    get: function () {
                        return {
                            x: this.graphBox.center.x,
                            y: this.graphBox.top + (this._ranges.temperature.max - this._data.temperature) * this._unitsPerDegree
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "precipProbability", {
                    get: function () {
                        return {
                            x: this.graphBox.center.x,
                            y: this.graphBox.top + (1 - this._data.precipProbability) * this.graphBox.height
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeSegment.prototype, "precipAccumulation", {
                    get: function () {
                        return {
                            x: this.graphBox.center.x,
                            y: this.graphBox.top + (this._ranges.precipAccumulation.max - this._data.precipAccumulation) * (this.graphBox.height / (this._ranges.precipAccumulation.max - this._ranges.precipAccumulation.min))
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return TimeSegment;
            }());
            exports_1("TimeSegment", TimeSegment);
        }
    }
});
//# sourceMappingURL=TimeSegment.js.map