System.register(["../Color", 'angular2/core', "./boolean-picker.component"], function(exports_1, context_1) {
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
    var Color_1, core_1, boolean_picker_component_1;
    var WeatherPropertyPickerComponent;
    return {
        setters:[
            function (Color_1_1) {
                Color_1 = Color_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (boolean_picker_component_1_1) {
                boolean_picker_component_1 = boolean_picker_component_1_1;
            }],
        execute: function() {
            WeatherPropertyPickerComponent = (function () {
                function WeatherPropertyPickerComponent() {
                    this.focus1 = new core_1.EventEmitter();
                    this.update1 = new core_1.EventEmitter();
                    this.cancel1 = new core_1.EventEmitter();
                    this.save1 = new core_1.EventEmitter();
                    this._properties = [
                        { picked: false, summary: 'TODO explain', displayTitle: 'Dew Point', title: 'dewPoint' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Humidity', title: 'humidity' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Moon', title: 'moon' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Ozone', title: 'ozone' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Precip Prob', title: 'precipProbability' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Precip Accum', title: 'precipAccumulation' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Pressure', title: 'pressure' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Temp Feel', title: 'apparentTemperature' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Temp Real', title: 'temperature' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Temp Max Feel', title: 'apparentTemperatureMax' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Temp Max Real', title: 'temperatureMax' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Temp Min Feel', title: 'apparentTemperatureMin' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Temp Min Real', title: 'temperatureMin' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Visibility', title: 'visibility' },
                        { picked: false, summary: 'TODO explain', displayTitle: 'Wind Speed', title: 'windSpeed' }];
                }
                Object.defineProperty(WeatherPropertyPickerComponent.prototype, "properties", {
                    set: function (props) {
                        var _this = this;
                        this._passedInProps = props;
                        props.forEach(function (p) { return _this._properties.find(function (p2) { return p.title === p2.title; }).picked = true; });
                    },
                    enumerable: true,
                    configurable: true
                });
                WeatherPropertyPickerComponent.prototype.onFocus = function () {
                    this.focus1.emit(null);
                };
                WeatherPropertyPickerComponent.prototype.onUpdate = function (opt, show) {
                    if (show) {
                        this._passedInProps.push(this.getDefaultConfigOption(opt.title));
                    }
                    else {
                        this._passedInProps.splice(this._passedInProps.findIndex(function (p) { return p.title === opt.title; }), 1);
                    }
                    this.update1.emit(null);
                };
                WeatherPropertyPickerComponent.prototype.onCancel = function () {
                    this.cancel1.emit(null);
                };
                WeatherPropertyPickerComponent.prototype.onSave = function () {
                    this.save1.emit(null);
                };
                WeatherPropertyPickerComponent.prototype.getDefaultConfigOption = function (title) {
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
                __decorate([
                    core_1.Output('focus'), 
                    __metadata('design:type', Object)
                ], WeatherPropertyPickerComponent.prototype, "focus1", void 0);
                __decorate([
                    core_1.Output('update'), 
                    __metadata('design:type', Object)
                ], WeatherPropertyPickerComponent.prototype, "update1", void 0);
                __decorate([
                    core_1.Output('cancel'), 
                    __metadata('design:type', Object)
                ], WeatherPropertyPickerComponent.prototype, "cancel1", void 0);
                __decorate([
                    core_1.Output('save'), 
                    __metadata('design:type', Object)
                ], WeatherPropertyPickerComponent.prototype, "save1", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array), 
                    __metadata('design:paramtypes', [Array])
                ], WeatherPropertyPickerComponent.prototype, "properties", null);
                WeatherPropertyPickerComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-property-picker',
                        host: { '[class.pickerGroup]': 'true' },
                        templateUrl: "src/themeEditor/weather-property-picker.component.html",
                        styles: [':host{display: block;}'],
                        directives: [boolean_picker_component_1.BooleanPickerComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WeatherPropertyPickerComponent);
                return WeatherPropertyPickerComponent;
            }());
            exports_1("WeatherPropertyPickerComponent", WeatherPropertyPickerComponent);
        }
    }
});
//# sourceMappingURL=weather-property-picker.component.js.map