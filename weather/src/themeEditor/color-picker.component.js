System.register(['angular2/core', "../Color"], function(exports_1, context_1) {
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
    var core_1, Color_1;
    var ColorPickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Color_1_1) {
                Color_1 = Color_1_1;
            }],
        execute: function() {
            ColorPickerComponent = (function () {
                function ColorPickerComponent() {
                    this.focus8 = new core_1.EventEmitter();
                    this.cancel8 = new core_1.EventEmitter();
                    this.save8 = new core_1.EventEmitter();
                    this.update8 = new core_1.EventEmitter();
                    this.color = Color_1.Color.white;
                    this.disabled = false;
                    this.title = 'Color';
                    this.showalpha = true;
                    this.oldColor = Color_1.Color.white;
                }
                ColorPickerComponent.prototype.onFocus = function () {
                    this.oldColor = this.color.copyOf();
                    this.focus8.emit(null);
                };
                ColorPickerComponent.prototype.onUpdate = function () {
                    this.update8.emit(this.color);
                };
                ColorPickerComponent.prototype.onCancel = function () {
                    this.cancel8.emit(this.oldColor);
                };
                ColorPickerComponent.prototype.onSave = function () {
                    this.save8.emit(this.color);
                };
                __decorate([
                    core_1.Output('focus'), 
                    __metadata('design:type', Object)
                ], ColorPickerComponent.prototype, "focus8", void 0);
                __decorate([
                    core_1.Output('cancel'), 
                    __metadata('design:type', Object)
                ], ColorPickerComponent.prototype, "cancel8", void 0);
                __decorate([
                    core_1.Output('save'), 
                    __metadata('design:type', Object)
                ], ColorPickerComponent.prototype, "save8", void 0);
                __decorate([
                    core_1.Output('update'), 
                    __metadata('design:type', Object)
                ], ColorPickerComponent.prototype, "update8", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ColorPickerComponent.prototype, "color", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ColorPickerComponent.prototype, "disabled", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ColorPickerComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ColorPickerComponent.prototype, "showalpha", void 0);
                ColorPickerComponent = __decorate([
                    core_1.Component({
                        selector: 'color-picker',
                        host: { '[class.picker]': 'true' },
                        templateUrl: "src/themeEditor/color-picker.component.html",
                        styles: [':host{display: block;}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ColorPickerComponent);
                return ColorPickerComponent;
            }());
            exports_1("ColorPickerComponent", ColorPickerComponent);
        }
    }
});
//# sourceMappingURL=color-picker.component.js.map