System.register(['angular2/core', '../Theme.interface'], function(exports_1, context_1) {
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
    var core_1, Theme_interface_1;
    var CloudCoverLocationPickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Theme_interface_1_1) {
                Theme_interface_1 = Theme_interface_1_1;
            }],
        execute: function() {
            CloudCoverLocationPickerComponent = (function () {
                function CloudCoverLocationPickerComponent() {
                    this.focus13 = new core_1.EventEmitter();
                    this.cancel13 = new core_1.EventEmitter();
                    this.save13 = new core_1.EventEmitter();
                    this.update13 = new core_1.EventEmitter();
                    this.CloudCoverLocation = Theme_interface_1.CloudCoverLocation;
                }
                CloudCoverLocationPickerComponent.prototype.onFocus = function () {
                    this.oldlocation = this.location;
                    this.focus13.emit(null);
                };
                CloudCoverLocationPickerComponent.prototype.onCancel = function () {
                    this.cancel13.emit(this.oldlocation);
                };
                CloudCoverLocationPickerComponent.prototype.onSave = function () {
                    this.save13.emit(this.location);
                };
                CloudCoverLocationPickerComponent.prototype.onUpdate = function () {
                    this.update13.emit(this.location);
                };
                __decorate([
                    core_1.Output('focus'), 
                    __metadata('design:type', Object)
                ], CloudCoverLocationPickerComponent.prototype, "focus13", void 0);
                __decorate([
                    core_1.Output('cancel'), 
                    __metadata('design:type', Object)
                ], CloudCoverLocationPickerComponent.prototype, "cancel13", void 0);
                __decorate([
                    core_1.Output('save'), 
                    __metadata('design:type', Object)
                ], CloudCoverLocationPickerComponent.prototype, "save13", void 0);
                __decorate([
                    core_1.Output('update'), 
                    __metadata('design:type', Object)
                ], CloudCoverLocationPickerComponent.prototype, "update13", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], CloudCoverLocationPickerComponent.prototype, "location", void 0);
                CloudCoverLocationPickerComponent = __decorate([
                    core_1.Component({
                        selector: 'cloud-cover-location-picker',
                        host: { '[class.picker]': 'true' },
                        templateUrl: "src/themeEditor/cloud-cover-location-picker.component.html",
                        styles: [':host{display: block;}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CloudCoverLocationPickerComponent);
                return CloudCoverLocationPickerComponent;
            }());
            exports_1("CloudCoverLocationPickerComponent", CloudCoverLocationPickerComponent);
        }
    }
});
//# sourceMappingURL=cloud-cover-location-picker.component.js.map