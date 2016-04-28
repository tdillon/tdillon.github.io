System.register(["../WidgetType", 'angular2/core'], function(exports_1, context_1) {
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
    var WidgetType_1, core_1;
    var WidgetTypePickerComponent;
    return {
        setters:[
            function (WidgetType_1_1) {
                WidgetType_1 = WidgetType_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WidgetTypePickerComponent = (function () {
                function WidgetTypePickerComponent() {
                    this.focus12 = new core_1.EventEmitter();
                    this.cancel12 = new core_1.EventEmitter();
                    this.save12 = new core_1.EventEmitter();
                    this.update12 = new core_1.EventEmitter();
                    this.WidgetType = WidgetType_1.WidgetType;
                }
                WidgetTypePickerComponent.prototype.onFocus = function () {
                    this.oldType = this.type;
                    this.focus12.emit(null);
                };
                WidgetTypePickerComponent.prototype.onCancel = function () {
                    this.cancel12.emit(this.oldType);
                };
                WidgetTypePickerComponent.prototype.onSave = function () {
                    this.save12.emit(this.type);
                };
                WidgetTypePickerComponent.prototype.onUpdate = function () {
                    this.update12.emit(this.type);
                };
                __decorate([
                    core_1.Output('focus'), 
                    __metadata('design:type', Object)
                ], WidgetTypePickerComponent.prototype, "focus12", void 0);
                __decorate([
                    core_1.Output('cancel'), 
                    __metadata('design:type', Object)
                ], WidgetTypePickerComponent.prototype, "cancel12", void 0);
                __decorate([
                    core_1.Output('save'), 
                    __metadata('design:type', Object)
                ], WidgetTypePickerComponent.prototype, "save12", void 0);
                __decorate([
                    core_1.Output('update'), 
                    __metadata('design:type', Object)
                ], WidgetTypePickerComponent.prototype, "update12", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], WidgetTypePickerComponent.prototype, "type", void 0);
                WidgetTypePickerComponent = __decorate([
                    core_1.Component({
                        selector: 'widget-type-picker',
                        host: { '[class.picker]': 'true' },
                        templateUrl: "src/themeEditor/widget-type-picker.component.html",
                        styles: [':host{display: block;}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], WidgetTypePickerComponent);
                return WidgetTypePickerComponent;
            }());
            exports_1("WidgetTypePickerComponent", WidgetTypePickerComponent);
        }
    }
});
//# sourceMappingURL=widget-type-picker.component.js.map