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
    var NumberPickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NumberPickerComponent = (function () {
                function NumberPickerComponent() {
                    this.focus9 = new core_1.EventEmitter();
                    this.cancel9 = new core_1.EventEmitter();
                    this.save9 = new core_1.EventEmitter();
                    this.update9 = new core_1.EventEmitter();
                    this.min = 1;
                    this.max = 100;
                    this.step = 1;
                    this.value = 0;
                }
                NumberPickerComponent.prototype.onFocus = function () {
                    this.oldValue = this.value;
                    this.focus9.emit(null);
                };
                NumberPickerComponent.prototype.onUpdate = function () {
                    this.update9.emit(this.value);
                };
                NumberPickerComponent.prototype.onCancel = function () {
                    this.cancel9.emit(this.oldValue);
                };
                NumberPickerComponent.prototype.onSave = function () {
                    this.save9.emit(this.value);
                };
                __decorate([
                    core_1.Output('focus'), 
                    __metadata('design:type', Object)
                ], NumberPickerComponent.prototype, "focus9", void 0);
                __decorate([
                    core_1.Output('cancel'), 
                    __metadata('design:type', Object)
                ], NumberPickerComponent.prototype, "cancel9", void 0);
                __decorate([
                    core_1.Output('save'), 
                    __metadata('design:type', Object)
                ], NumberPickerComponent.prototype, "save9", void 0);
                __decorate([
                    core_1.Output('update'), 
                    __metadata('design:type', Object)
                ], NumberPickerComponent.prototype, "update9", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], NumberPickerComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NumberPickerComponent.prototype, "min", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NumberPickerComponent.prototype, "max", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NumberPickerComponent.prototype, "step", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NumberPickerComponent.prototype, "value", void 0);
                NumberPickerComponent = __decorate([
                    core_1.Component({
                        selector: 'number-picker',
                        host: { '[class.picker]': 'true' },
                        templateUrl: "src/themeEditor/number-picker.component.html",
                        styles: [':host{display: block;}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], NumberPickerComponent);
                return NumberPickerComponent;
            }());
            exports_1("NumberPickerComponent", NumberPickerComponent);
        }
    }
});
//# sourceMappingURL=number-picker.component.js.map