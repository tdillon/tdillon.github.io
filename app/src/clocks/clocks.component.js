System.register(['angular2/core', 'angular2/router', './seven-segment.component', './polar.component'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, seven_segment_component_1, polar_component_1;
    var ClocksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (seven_segment_component_1_1) {
                seven_segment_component_1 = seven_segment_component_1_1;
            },
            function (polar_component_1_1) {
                polar_component_1 = polar_component_1_1;
            }],
        execute: function() {
            ClocksComponent = (function () {
                function ClocksComponent() {
                }
                ClocksComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>CLOCKS</h2>\n    <nav>\n      <a [routerLink]=\"['SevenSegment']\">SevenSegment</a>\n      <a [routerLink]=\"['Polar']\">Polar</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/seven', name: 'SevenSegment', component: seven_segment_component_1.SevenSegmentClockComponent, useAsDefault: true },
                        { path: '/polar', name: 'Polar', component: polar_component_1.PolarClockComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ClocksComponent);
                return ClocksComponent;
            }());
            exports_1("ClocksComponent", ClocksComponent);
        }
    }
});
