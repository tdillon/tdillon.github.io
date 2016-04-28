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
    var TimeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TimeService = (function () {
                function TimeService() {
                    var _this = this;
                    this.secondChanged = new core_1.EventEmitter();
                    this.minuteChanged = new core_1.EventEmitter();
                    this.hourChanged = new core_1.EventEmitter();
                    this.currentSecond = -1;
                    this.currentMinute = -1;
                    this.currentHour = -1;
                    var self = this;
                    var tick = function () {
                        var now = new Date();
                        if (self.currentSecond !== now.getSeconds()) {
                            self.currentSecond = now.getSeconds();
                            _this.secondChanged.emit(self.currentSecond);
                        }
                        if (self.currentMinute !== now.getMinutes()) {
                            self.currentMinute = now.getMinutes();
                            _this.minuteChanged.emit(self.currentMinute);
                        }
                        if (self.currentHour !== now.getHours()) {
                            self.currentHour = now.getHours();
                            _this.hourChanged.emit(self.currentHour);
                        }
                        self.handle = window.setTimeout(tick, 1000 - Date.now() % 1000);
                    };
                    this.handle = window.setTimeout(tick, 1000 - Date.now() % 1000); //TODO callback on 000 ms
                }
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TimeService.prototype, "secondChanged", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TimeService.prototype, "minuteChanged", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TimeService.prototype, "hourChanged", void 0);
                TimeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TimeService);
                return TimeService;
            }());
            exports_1("TimeService", TimeService);
        }
    }
});
//# sourceMappingURL=time.service.js.map