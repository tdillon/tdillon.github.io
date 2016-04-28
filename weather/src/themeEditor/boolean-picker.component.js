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
    var BooleanPickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BooleanPickerComponent = (function () {
                function BooleanPickerComponent() {
                    this.update7 = new core_1.EventEmitter();
                    this.disabled = false;
                    this.value = false;
                }
                BooleanPickerComponent.prototype.onUpdate = function () {
                    this.update7.emit(this.value);
                };
                __decorate([
                    core_1.Output('update'), 
                    __metadata('design:type', Object)
                ], BooleanPickerComponent.prototype, "update7", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BooleanPickerComponent.prototype, "disabled", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], BooleanPickerComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], BooleanPickerComponent.prototype, "subtitle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BooleanPickerComponent.prototype, "value", void 0);
                BooleanPickerComponent = __decorate([
                    core_1.Component({
                        selector: 'boolean-picker',
                        host: { '[class.picker]': 'true' },
                        templateUrl: "src/themeEditor/boolean-picker.component.html",
                        styles: ["\n    :host{display: block;}\n    header > h1 { display:flex; flex-direction: row; }\n    header > h1 > span { flex-grow:1; }"
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BooleanPickerComponent);
                return BooleanPickerComponent;
            }());
            exports_1("BooleanPickerComponent", BooleanPickerComponent);
        }
    }
});
//# sourceMappingURL=boolean-picker.component.js.map