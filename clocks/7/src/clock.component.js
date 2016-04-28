System.register(['angular2/core', './digit.component', './time.service', 'seven-segment'], function(exports_1, context_1) {
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
    var core_1, digit_component_1, time_service_1, seven_segment_1;
    var ClockComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (digit_component_1_1) {
                digit_component_1 = digit_component_1_1;
            },
            function (time_service_1_1) {
                time_service_1 = time_service_1_1;
            },
            function (seven_segment_1_1) {
                seven_segment_1 = seven_segment_1_1;
            }],
        execute: function() {
            ClockComponent = (function () {
                function ClockComponent(_timeService) {
                    var _this = this;
                    this._timeService = _timeService;
                    this.so = seven_segment_1.Digit.BLANK;
                    this.st = seven_segment_1.Digit.BLANK;
                    this.mt = seven_segment_1.Digit.BLANK;
                    this.mo = seven_segment_1.Digit.BLANK;
                    this.ht = seven_segment_1.Digit.BLANK;
                    this.ho = seven_segment_1.Digit.BLANK;
                    _timeService.secondChanged.subscribe(function (s) {
                        _this.so = s % 10;
                        _this.st = Math.floor(s / 10);
                    });
                    _timeService.minuteChanged.subscribe(function (m) {
                        _this.mo = m % 10;
                        _this.mt = Math.floor(m / 10);
                    });
                    _timeService.hourChanged.subscribe(function (h) {
                        _this.ho = h % 10;
                        _this.ht = Math.floor(h / 10);
                    });
                }
                ClockComponent = __decorate([
                    core_1.Component({
                        selector: 'clock',
                        template: "\n    <digit [value]=ht></digit>\n    <digit [value]=ho></digit>\n    :\n    <digit [value]=mt></digit>\n    <digit [value]=mo></digit>\n    :\n    <digit [value]=st></digit>\n    <digit [value]=so></digit>\n    .\n  ",
                        directives: [digit_component_1.DigitComponent],
                        providers: [time_service_1.TimeService]
                    }), 
                    __metadata('design:paramtypes', [time_service_1.TimeService])
                ], ClockComponent);
                return ClockComponent;
            }());
            exports_1("ClockComponent", ClockComponent);
        }
    }
});
//# sourceMappingURL=clock.component.js.map