System.register(['angular2/core', 'seven-segment'], function(exports_1, context_1) {
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
    var core_1, seven_segment_1;
    var DigitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (seven_segment_1_1) {
                seven_segment_1 = seven_segment_1_1;
            }],
        execute: function() {
            DigitComponent = (function () {
                function DigitComponent() {
                    this.refreshed = new core_1.EventEmitter();
                    this.value = seven_segment_1.Digit.BLANK;
                }
                DigitComponent.prototype.ngOnChanges = function () {
                    if (this.canvas) {
                        this.draw();
                    }
                };
                DigitComponent.prototype.ngAfterViewInit = function () {
                    this.seven = new seven_segment_1.Seven();
                    this.canvas = this.canvasElementReference.nativeElement;
                    this.ctx = this.canvas.getContext('2d');
                    this.draw();
                };
                DigitComponent.prototype.draw = function () {
                    try {
                        this.seven.digit = this.value;
                    }
                    catch (e) {
                        this.seven.digit = seven_segment_1.Digit.BLANK;
                    }
                    this.canvas.width = this.seven.width;
                    this.canvas.height = this.seven.height;
                    this.ctx.fillStyle = '#000';
                    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                    for (var _i = 0, _a = this.seven.segments; _i < _a.length; _i++) {
                        var s = _a[_i];
                        this.ctx.beginPath();
                        this.ctx.moveTo(s.points[0].x, s.points[0].y);
                        for (var _b = 0, _c = s.points; _b < _c.length; _b++) {
                            var p = _c[_b];
                            this.ctx.lineTo(p.x, p.y);
                        }
                        this.ctx.fillStyle = "rgba(255,255,255, " + (s.on ? '1' : '.2') + ")";
                        this.ctx.closePath();
                        this.ctx.fill();
                    }
                };
                DigitComponent.prototype.refresh = function () {
                    this.refreshed.emit(null);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], DigitComponent.prototype, "refreshed", void 0);
                __decorate([
                    core_1.ViewChild('canvas'), 
                    __metadata('design:type', core_1.ElementRef)
                ], DigitComponent.prototype, "canvasElementReference", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DigitComponent.prototype, "value", void 0);
                DigitComponent = __decorate([
                    core_1.Component({
                        selector: 'digit',
                        template: "<canvas #canvas></canvas>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DigitComponent);
                return DigitComponent;
            }());
            exports_1("DigitComponent", DigitComponent);
        }
    }
});
//# sourceMappingURL=digit.component.js.map