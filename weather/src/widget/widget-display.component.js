System.register(["./Positionings", "../WidgetType", "../Theme.interface", "angular2/core", "./SegmentGeometry", './DotDrawer'], function(exports_1, context_1) {
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
    var Positionings_1, WidgetType_1, Theme_interface_1, core_1, SegmentGeometry_1, DotDrawer_1;
    var WidgetDisplayComponent;
    return {
        setters:[
            function (Positionings_1_1) {
                Positionings_1 = Positionings_1_1;
            },
            function (WidgetType_1_1) {
                WidgetType_1 = WidgetType_1_1;
            },
            function (Theme_interface_1_1) {
                Theme_interface_1 = Theme_interface_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SegmentGeometry_1_1) {
                SegmentGeometry_1 = SegmentGeometry_1_1;
            },
            function (DotDrawer_1_1) {
                DotDrawer_1 = DotDrawer_1_1;
            }],
        execute: function() {
            /*
             * TODO:MainGraph
             * Padding: we are using the radius of the largest shown dot for top and right. do we care about the case where that large dot is not near the top or right?  i.e., do we shift the padding depending upon the nearest dot to the edge?
             * Padding: what if max dot radius is larger then 'time bar' or 'temp bar'?
             * IS THIS NECESSARY?  FIND AN EXAMPLE WHERE IT MATTERS -> Draw invert the order of the 2 for loops so that entire lines are drawn at once. this will allow for depth of lines to be set
             *
             * TODO:Dots
             * create 'ring' type
             * Rain, Sleet, Snow, Hail icons for PrecipProbability
             * visibility icon
             * pressure icon
             * hummidity icon
             *
             * TODO segments
             * Allow precipProbability segment to be solid color (as well as 'intensity color'), i.e., configurable.
             * somehow set opacity when using 'intensity color'.
             *
             * TODO Work List:
             * Figuring how hiding and showing of config options based on daily/hourly
             * Background image configuration to simulate phone home screen widget.
             * Show 'alerts'.  in one of the corners?
             * Do we need seperate font sizes for time and temp?
             * Make weather properties sortable to simulate depth.
             *
             * TODO:Time
             * Color the time bar in hourly mode per the cloudcover and sunrise/sunset
             *
             * TODO:Scaling
             * Wind Speed: how is intensity identified?  Colors? Y axis (left or right) like temp?  Icon (probably too small to use)?
             * Ozone: what scale? same as wind speed questions.
             * Pressure: what scale? same as wind speed questions.
             *
             * TODO:Themes
             * Finalize/cleanup theme workflow
             *
             */
            WidgetDisplayComponent = (function () {
                function WidgetDisplayComponent() {
                    /** width to height */
                    this.widgetRatio = 2;
                    /** Dimensions used in rendering the widget */
                    this._dims = {
                        /** The number of 'scales' that are shown in the left scale region.  e.g., temperatures, %, mph.  This will need initialized. */
                        numLeftScales: 0,
                        /** The number of 'scales' that are shown in the right scale region.  e.g., temperatures, %, mph.  This will need initialized. */
                        numRightScales: 0,
                        /** TODO */
                        widgetRatio: 2,
                        /** TODO */
                        fontSize: 12,
                        /** The window.devicePixelRatio  Probably 1 for laptops, > 1 for phones, e.g., 3.5 for Nexus 6 */
                        get devicePixelRatio() { return window.devicePixelRatio; },
                        /** TODO */
                        get clientWidth() { return document.documentElement.clientWidth; },
                        /** TODO */
                        get clientHeight() { return this.clientWidth / this.widgetRatio; },
                        /** TODO */
                        get widgetWidth() { return this.devicePixelRatio * this.clientWidth; },
                        /** TODO */
                        get widgetHeight() { return this.devicePixelRatio * this.clientHeight; },
                        /** TODO set in constructor from canvas 'measureText' */
                        maxTextWidth: 0,
                        /** TODO */
                        get padding() {
                            return {
                                left: this.numLeftScales * this.maxTextWidth,
                                // top: this.config.maxDotRadius,  TODO
                                right: this.numRightScales * this.maxTextWidth,
                                // right: this.config.maxDotRadius,  TODO
                                top: 0,
                                bottom: this.fontSize
                            }; //TODO account for 'time bar', 'temp bar', and dot radius
                        },
                        /** TODO */
                        get graphWidth() { return this.widgetWidth - this.padding.left - this.padding.right; },
                        /** TODO */
                        get graphHeight() { return this.widgetHeight - this.padding.top - this.padding.bottom; },
                        /** TODO */
                        get dayWidth() { return this.graphWidth / 8; },
                        /** TODO */
                        get hourWidth() { return this.graphWidth / 49; },
                        /** TODO */
                        get pxPerSec() { return this.dayWidth / (60 * 60 * 24); }
                    };
                }
                WidgetDisplayComponent.prototype.ngAfterViewInit = function () {
                    this.canvas = document.querySelector('canvas');
                    this.ctx = this.canvas.getContext('2d');
                };
                WidgetDisplayComponent.prototype.ngDoCheck = function () {
                    //TODO how else can i get notified if this.theme.XXX has changed?, this hits too often
                    if (this.data && this.theme) {
                        //TODO pass in widget ratio
                        this.ctx.font = "12px 'Roboto', 'Consolas', sans-serif";
                        //from testing ctx.measureText 125 seems to be as wide as any other reasonable temperature
                        this._pos = new Positionings_1.Positionings(this.theme, this.data, document.documentElement.clientWidth, this.widgetRatio, window.devicePixelRatio, this.ctx.measureText('125').width);
                        this.render();
                    }
                };
                WidgetDisplayComponent.prototype.renderWidgetBackground = function () {
                    this.ctx.fillStyle = 'transparent'; //111  //TODO get from theme
                    this.ctx.fillRect(this._pos.widget.left, this._pos.widget.top, this._pos.widget.width, this._pos.widget.height);
                };
                WidgetDisplayComponent.prototype.renderGraphBackground = function () {
                    this.ctx.fillStyle = 'transparent'; //222  //TODO get from theme
                    this.ctx.fillRect(this._pos.graph.left, this._pos.graph.top, this._pos.graph.width, this._pos.graph.height);
                };
                WidgetDisplayComponent.prototype.renderTimeBackground = function () {
                    this.ctx.fillStyle = 'transparent'; //'rgba(0,0,0,.5)';//222  //TODO get from config
                    this.ctx.fillRect(this._pos.timeBar.left, this._pos.timeBar.top, this._pos.timeBar.width, this._pos.timeBar.height);
                };
                WidgetDisplayComponent.prototype.renderLeftScaleBackground = function () {
                    this.ctx.fillStyle = 'transparent'; //'rgba(0,0,0,.25)';//222  //TODO get from theme
                    this.ctx.fillRect(this._pos.leftScale.left, this._pos.leftScale.top, this._pos.leftScale.width, this._pos.leftScale.height);
                };
                WidgetDisplayComponent.prototype.renderRightScaleBackground = function () {
                    this.ctx.fillStyle = 'transparent'; //rgba(rgba(0,0,0,.25)';//222  //TODO get from theme
                    this.ctx.fillRect(this._pos.rightScale.left, this._pos.rightScale.top, this._pos.rightScale.width, this._pos.rightScale.height);
                };
                WidgetDisplayComponent.prototype.renderCloudCover = function () {
                    var x = this.theme.cloudCoverLocation;
                    if (this.theme.daylight) {
                        for (var _i = 0, _a = this._pos.timeSegments; _i < _a.length; _i++) {
                            var ts = _a[_i];
                            this.theme.daylight.a = 1 - ts.cloudCover;
                            this.ctx.fillStyle = this.theme.daylight.rgba;
                            var location_1 = (x === Theme_interface_1.CloudCoverLocation.TimeBar ? ts.timeBarDaytimes : ts.graphDaytimes);
                            for (var _b = 0, location_2 = location_1; _b < location_2.length; _b++) {
                                var l = location_2[_b];
                                this.ctx.fillRect(l.left, l.top, l.width, l.height);
                            }
                        }
                    }
                    if (this.theme.nightlight) {
                        for (var _c = 0, _d = this._pos.timeSegments; _c < _d.length; _c++) {
                            var ts = _d[_c];
                            this.theme.nightlight.a = 1 - ts.cloudCover;
                            this.ctx.fillStyle = this.theme.nightlight.rgba;
                            var location_3 = (x === Theme_interface_1.CloudCoverLocation.TimeBar ? ts.timeBarNighttimes : ts.graphNighttimes);
                            for (var _e = 0, location_4 = location_3; _e < location_4.length; _e++) {
                                var l = location_4[_e];
                                this.ctx.fillRect(l.left, l.top, l.width, l.height);
                            }
                        }
                    }
                };
                WidgetDisplayComponent.prototype.renderTimeText = function () {
                    var _this = this;
                    //TODO color and fontsize should be configurable
                    this.ctx.fillStyle = '#fff';
                    this.ctx.textBaseline = 'middle';
                    this.ctx.textAlign = 'center';
                    this._pos.timeSegments.forEach(function (s) { return _this.ctx.fillText(s.timeBarDisplay, s.timeBarBox.center.x, s.timeBarBox.center.y); });
                };
                WidgetDisplayComponent.prototype.renderLeftAxisText = function () {
                    //TODO for now just draw degrees if needed, in future maybe  other stuff is rendered here
                    //TODO use a variable font size???
                    this.ctx.textAlign = 'center';
                    this.ctx.fillStyle = '#fff';
                    this.ctx.textBaseline = 'middle';
                    //write temps in 5deg increments
                    // const pxPerDeg = this._dims.graphHeight / (ranges.temperature.max - ranges.temperature.min);
                    // for (let i = Math.ceil(ranges.temperature.min / 5) * 5; i <= Math.floor(ranges.temperature.max / 5) * 5; i += 5) {
                    //   this.ctx.fillText(i.toString(), this._dims.maxTextWidth / 2, this._dims.padding.top + (ranges.temperature.max - i) * pxPerDeg, this._dims.maxTextWidth);
                    // }
                };
                WidgetDisplayComponent.prototype.renderRightAxisText = function () {
                    //TODO for now just draw degrees if needed, in future maybe  other stuff is rendered here
                    //TODO use a variable font size???
                    //TODO how do i conditionally show these?
                    this.ctx.textAlign = 'center';
                    this.ctx.fillStyle = '#fff';
                    this.ctx.textBaseline = 'middle';
                    //TODO draw accumilation scale!!!
                    // const pxPerInch = this._dims.graphHeight / ranges.precipAccumulation.max;
                    // for (let i = 1; i <= Math.floor(ranges.precipAccumulation.max); ++i) {
                    //   this.ctx.fillText(
                    //     i.toString(),
                    //     this._dims.widgetWidth - this._dims.maxTextWidth / 2,
                    //     this._dims.padding.top + (ranges.precipAccumulation.max - i) * pxPerInch,
                    //     this._dims.maxTextWidth
                    //   );
                    // }
                    //TODO draw windSpeed scale!!!
                    // const pxPerMPH = this._dims.graphHeight / ranges.windSpeed.max;
                    // for (let i = 1; i <= Math.floor(ranges.windSpeed.max); ++i) {
                    //   this.ctx.fillText(
                    //     i.toString(),
                    //     this._dims.widgetWidth - 3 * this._dims.maxTextWidth / 2,
                    //     this._dims.padding.top + (ranges.windSpeed.max - i) * pxPerMPH,
                    //     this._dims.maxTextWidth
                    //   );
                    // }
                    //TODO other scales, how to generalize them? how to show them?
                };
                WidgetDisplayComponent.prototype.renderWeatherProperty = function (c) {
                    var prevSeg;
                    for (var _i = 0, _a = this._pos.timeSegments; _i < _a.length; _i++) {
                        var curSeg = _a[_i];
                        if (!(c.title === 'precipProbability' && curSeg.precipProbability.y === curSeg.graphBox.bottom)) {
                            var prevProp = (prevSeg ? prevSeg[c.title] : null); //first time segmetn has no previous
                            var curProp = curSeg[c.title];
                            var s = new SegmentGeometry_1.SegmentGeometry(c, this.theme.globals, (prevSeg ? prevProp.x : null), (prevSeg ? prevProp.y : null), curProp.x, curProp.y);
                            switch (c.title) {
                                case 'moon':
                                    DotDrawer_1.DotDrawer.moon(this.ctx, curProp.x, curProp.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba), curSeg.moonPhase);
                                    break;
                                case 'windSpeed':
                                    DotDrawer_1.DotDrawer.wind(this.ctx, curProp.x, curProp.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba), curSeg.windBearing);
                                    break;
                                default:
                                    DotDrawer_1.DotDrawer.simple(this.ctx, curProp.x, curProp.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.title === 'precipProbability') ? (this.theme.widgetType === WidgetType_1.WidgetType.Hourly ? curSeg.precipIntensityColor : curSeg.precipIntensityMaxColor) : (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba));
                            }
                            //Don't draw segment for precipProbability when prevSeg was 0%.
                            if ((c.segment.show.global ? this.theme.globals.segment.show : c.segment.show.value) && s.hasSegment && !(c.title === 'precipProbability' && prevSeg.precipProbability.y === prevSeg.graphBox.bottom)) {
                                if (c.title === 'precipProbability') {
                                    var gradient = this.ctx.createLinearGradient(prevProp.x, prevProp.y, curProp.x, curProp.y);
                                    gradient.addColorStop(0, this.theme.widgetType === WidgetType_1.WidgetType.Hourly ? prevSeg.precipIntensityColor : prevSeg.precipIntensityMaxColor);
                                    gradient.addColorStop(1, this.theme.widgetType === WidgetType_1.WidgetType.Hourly ? curSeg.precipIntensityColor : curSeg.precipIntensityMaxColor);
                                    this.ctx.fillStyle = gradient;
                                }
                                else {
                                    this.ctx.fillStyle = (c.segment.color.global ? this.theme.globals.segment.color.rgba : c.segment.color.value.rgba);
                                }
                                this.ctx.beginPath();
                                this.ctx.arc(s.start.point.x, s.start.point.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), s.start.from, s.start.to, false);
                                this.ctx.arc(s.end.point.x, s.end.point.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), s.end.from, s.end.to, false);
                                this.ctx.fill();
                                this.ctx.closePath();
                            }
                        }
                        prevSeg = curSeg;
                    }
                    // let prevSeg: Day, today: Day;
                    //
                    // for (let i = 0, d: DataPoint; d = db.data[i]; ++i) {
                    //   prevSeg = today;
                    //   today = new Day(d, ranges, this._dims.padding.left + i * (this.theme.widgetType === WidgetType.Hourly ? this._dims.hourWidth : this._dims.dayWidth), this._dims.padding.left + (i + 1) * (this.theme.widgetType === WidgetType.Hourly ? this._dims.hourWidth : this._dims.dayWidth), this._dims.padding.top, this._dims.padding.top + this._dims.graphHeight);  //TODO change with padding
                    //
                    //   //Don't show dots/segments for 0% precipitation probability
                    //   if (!(c.title === 'precipProbability' && d.precipProbability === 0)) {
                    //     let s = new SegmentGeometry(c, this.theme.globals, (prevSeg ? prevSeg[c.title].x : null), (prevSeg ? prevSeg[c.title].y : null), curProp.x, curProp.y);
                    //
                    //     switch (c.title) {
                    //       case 'moon':
                    //         DotDrawer.moon(this.ctx, curProp.x, curProp.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba), d.moonPhase);
                    //         break;
                    //       case 'windSpeed':
                    //         DotDrawer.wind(this.ctx, curProp.x, curProp.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba), d.windBearing);
                    //         break;
                    //       default:
                    //         DotDrawer.simple(this.ctx, curProp.x, curProp.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.title === 'precipProbability') ? (this.theme.widgetType === WidgetType.Hourly ? curSeg.precipIntensityColor : curSeg.precipIntensityMaxColor) : (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba));
                    //     }
                    //
                    //     //Don't draw segment for precipProbability when prevSeg was 0%.
                    //     if ((c.segment.show.global ? this.theme.globals.segment.show : c.segment.show.value) && s.hasSegment && !(c.title === 'precipProbability' && prevSeg.data.precipProbability === 0)) {
                    //       if (c.title === 'precipProbability') {  //gradient
                    //         let gradient = this.ctx.createLinearGradient(prevSeg[c.title].x, prevSeg[c.title].y, curProp.x, curProp.y);
                    //         gradient.addColorStop(0, this.theme.widgetType === WidgetType.Hourly ? prevSeg.precipIntensityColor : prevSeg.precipIntensityMaxColor);
                    //         gradient.addColorStop(1, this.theme.widgetType === WidgetType.Hourly ? curSeg.precipIntensityColor : curSeg.precipIntensityMaxColor);
                    //         this.ctx.fillStyle = gradient;
                    //       } else {
                    //         this.ctx.fillStyle = (c.segment.color.global ? this.theme.globals.segment.color.rgba : c.segment.color.value.rgba);
                    //       }
                    //       this.ctx.beginPath();
                    //       this.ctx.arc(s.start.point.x, s.start.point.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), s.start.from, s.start.to, false);
                    //       this.ctx.arc(s.end.point.x, s.end.point.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), s.end.from, s.end.to, false);
                    //       this.ctx.fill();
                    //       this.ctx.closePath();
                    //     }
                    //   }
                    // }
                };
                WidgetDisplayComponent.prototype.render = function () {
                    this.widgetRatio *= 1;
                    this.canvas.width = this._pos.widget.width;
                    this.canvas.height = this._pos.widget.height;
                    this.canvas.style.width = this._pos.client.width + 'px';
                    this.canvas.style.height = this._pos.client.height + 'px';
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    /*
                     * Render Sequence:
                     *  x) Main background (simulate wallpaper on mobile)  //or is this the page's background?
                     *  1) Widget background (background color w/opacity of entire widget)
                     *  2) Graph overlay (background color w/ opacity of graph region)
                     *  3) Time overlay (background color w/ opacity of time bar)
                     *  4) Left axis overlay (background color w/ opacity of left axis overlay i.e., temp scale)
                     *  5) Right axis overlay (background color w/ opacity of right axis overlay i.e., %, MPH, etc., scales)
                     *  6) Cloud cover
                     *  7) time text
                     *  8) left axis text
                     *  9) right axis text
                     * 10) draw each weather property (dot&segment) for the entire time period //this will effect layering
                     */
                    this.renderWidgetBackground(); //1
                    this.renderGraphBackground(); //2
                    this.renderTimeBackground(); //3
                    this.renderLeftScaleBackground(); //4
                    this.renderRightScaleBackground(); //5
                    this.renderCloudCover(); //6
                    this.renderTimeText(); //7
                    this.renderLeftAxisText(); //8
                    this.renderRightAxisText(); //9
                    for (var _i = 0, _a = this.theme.options; _i < _a.length; _i++) {
                        var c = _a[_i];
                        this.renderWeatherProperty(c);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WidgetDisplayComponent.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WidgetDisplayComponent.prototype, "theme", void 0);
                WidgetDisplayComponent = __decorate([
                    core_1.Component({
                        selector: 'widget-display',
                        template: "\n    <canvas></canvas>\n  ",
                        styles: ['canvas{display:block}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], WidgetDisplayComponent);
                return WidgetDisplayComponent;
            }());
            exports_1("WidgetDisplayComponent", WidgetDisplayComponent);
        }
    }
});
//# sourceMappingURL=widget-display.component.js.map