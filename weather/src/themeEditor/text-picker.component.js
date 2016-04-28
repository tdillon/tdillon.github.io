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
    var TextPickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TextPickerComponent = (function () {
                function TextPickerComponent() {
                    this.focus10 = new core_1.EventEmitter();
                    this.cancel10 = new core_1.EventEmitter();
                    this.save10 = new core_1.EventEmitter();
                    this.value = '';
                }
                TextPickerComponent.prototype.onFocus = function () {
                    this.oldValue = this.value;
                    this.focus10.emit(null);
                };
                TextPickerComponent.prototype.onCancel = function () {
                    this.cancel10.emit(this.oldValue);
                };
                TextPickerComponent.prototype.onSave = function () {
                    this.save10.emit(this.value);
                };
                __decorate([
                    core_1.Output('focus'), 
                    __metadata('design:type', Object)
                ], TextPickerComponent.prototype, "focus10", void 0);
                __decorate([
                    core_1.Output('cancel'), 
                    __metadata('design:type', Object)
                ], TextPickerComponent.prototype, "cancel10", void 0);
                __decorate([
                    core_1.Output('save'), 
                    __metadata('design:type', Object)
                ], TextPickerComponent.prototype, "save10", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TextPickerComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TextPickerComponent.prototype, "value", void 0);
                TextPickerComponent = __decorate([
                    core_1.Component({
                        selector: 'text-picker',
                        host: { '[class.picker]': 'true' },
                        templateUrl: "src/themeEditor/text-picker.component.html",
                        styles: [':host{display: block;}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TextPickerComponent);
                return TextPickerComponent;
            }());
            exports_1("TextPickerComponent", TextPickerComponent);
        }
    }
});
//# sourceMappingURL=text-picker.component.js.map