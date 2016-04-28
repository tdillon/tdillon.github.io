System.register(["./WidgetType", "./Day", "angular2/core", "./SegmentGeometry", "./Ranges", './DotDrawer'], function(exports_1, context_1) {
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
    var WidgetType_1, Day_1, core_1, SegmentGeometry_1, Ranges_1, DotDrawer_1;
    var WidgetDisplayComponent;
    return {
        setters:[
            function (WidgetType_1_1) {
                WidgetType_1 = WidgetType_1_1;
            },
            function (Day_1_1) {
                Day_1 = Day_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SegmentGeometry_1_1) {
                SegmentGeometry_1 = SegmentGeometry_1_1;
            },
            function (Ranges_1_1) {
                Ranges_1 = Ranges_1_1;
            },
            function (DotDrawer_1_1) {
                DotDrawer_1 = DotDrawer_1_1;
            }],
        execute: function() {
            WidgetDisplayComponent = (function () {
                function WidgetDisplayComponent() {
                    /** width to height */
                    this.widgetRatio = 2;
                }
                WidgetDisplayComponent.prototype.ngAfterViewInit = function () {
                    this.canvas = document.querySelector('canvas');
                    this.ctx = this.canvas.getContext('2d');
                };
                WidgetDisplayComponent.prototype.ngDoCheck = function () {
                    //TODO how else can i get notified if this.theme.XXX has changed?, this hits too often
                    if (this.data && this.theme) {
                        this.render();
                    }
                };
                WidgetDisplayComponent.prototype.render = function () {
                    this.widgetRatio *= 1;
                    // http://html5rocks.com/en/tutorials/canvas/hidpi/
                    var ratio = window.devicePixelRatio;
                    var oldWidth = document.documentElement.clientWidth;
                    var oldHeight = oldWidth / this.widgetRatio;
                    var widgetWidth = this.canvas.width = ratio * oldWidth;
                    var widgetHeight = this.canvas.height = ratio * oldHeight;
                    var fontSize = 12;
                    this.canvas.style.width = oldWidth + 'px';
                    this.canvas.style.height = oldHeight + 'px';
                    //this.ctx.scale(5,5);
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    //TODO draw background image?
                    this.ctx.fillStyle = '#333';
                    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                    this.ctx.font = fontSize + "px 'Roboto', 'Consolas', sans-serif";
                    var maxTempTextWidth = this.ctx.measureText('125').width; //from testing ctx.measureText 125 seems to be as wide as any other reasonable temperature
                    var PADDING = {
                        left: maxTempTextWidth,
                        // top: this.config.maxDotRadius,  TODO
                        // right: this.config.maxDotRadius,  TODO
                        top: 0, right: 0,
                        bottom: fontSize
                    }; //TODO account for 'time bar', 'temp bar', and dot radius
                    var graphWidth = widgetWidth - PADDING.left - PADDING.right;
                    var graphHeight = widgetHeight - PADDING.top - PADDING.bottom;
                    var dayWidth = graphWidth / 8;
                    var hourWidth = graphWidth / 49;
                    var pxPerSec = dayWidth / (60 * 60 * 24);
                    //TODO-hack delete me drawing 'widget' area
                    this.ctx.fillStyle = '#111';
                    this.ctx.fillRect(0, 0, widgetWidth, widgetHeight);
                    //TODO-hack delete me drawing 'graph' area
                    this.ctx.fillStyle = '#222';
                    this.ctx.fillRect(PADDING.left, PADDING.top, graphWidth, graphHeight);
                    var db = (this.theme.widgetType === WidgetType_1.WidgetType.Daily ? this.data.daily : this.data.hourly);
                    var ranges = new Ranges_1.Ranges(db, this.theme);
                    this.ctx.textAlign = 'center';
                    this.ctx.fillStyle = '#fff';
                    this.ctx.textBaseline = 'middle';
                    //write temps in 5deg increments
                    var pxPerDeg = graphHeight / (ranges.temperature.max - ranges.temperature.min);
                    for (var i = Math.ceil(ranges.temperature.min / 5) * 5; i <= Math.floor(ranges.temperature.max / 5) * 5; i += 5) {
                        this.ctx.fillText(i.toString(), maxTempTextWidth / 2, PADDING.top + (ranges.temperature.max - i) * pxPerDeg, maxTempTextWidth);
                    }
                    //TODO draw accumilation scale!!!
                    var pxPerInch = graphHeight / ranges.precipAccumulation.max;
                    for (var i = 1; i <= Math.floor(ranges.precipAccumulation.max); ++i) {
                        this.ctx.fillText(i.toString(), widgetWidth - maxTempTextWidth / 2, PADDING.top + (ranges.precipAccumulation.max - i) * pxPerInch, maxTempTextWidth);
                    }
                    //TODO draw windSpeed scale!!!
                    var pxPerMPH = graphHeight / ranges.windSpeed.max;
                    for (var i = 1; i <= Math.floor(ranges.windSpeed.max); ++i) {
                        this.ctx.fillText(i.toString(), widgetWidth - 2 * maxTempTextWidth / 2, PADDING.top + (ranges.windSpeed.max - i) * pxPerMPH, maxTempTextWidth);
                    }
                    //TODO other scales, how to generalize them? how to show them?
                    var yesterday, today;
                    for (var i = 0, d = void 0; d = db.data[i]; ++i) {
                        yesterday = today;
                        today = new Day_1.Day(d, ranges, PADDING.left + i * (this.theme.widgetType === WidgetType_1.WidgetType.Hourly ? hourWidth : dayWidth), PADDING.left + (i + 1) * (this.theme.widgetType === WidgetType_1.WidgetType.Hourly ? hourWidth : dayWidth), PADDING.top, PADDING.top + graphHeight); //TODO change with padding
                        //Daylight bars
                        if (this.theme.daylight) {
                            this.theme.daylight.a = 1 - d.cloudCover;
                            this.ctx.fillStyle = this.theme.daylight.rgba;
                            if (this.theme.widgetType === WidgetType_1.WidgetType.Daily) {
                                this.ctx.fillRect(today.sunriseX, today.sunTop, today.sunWidth, today.sunHeight);
                            }
                            else {
                                //TODO draw on 'time bar'.  Signify daytime vs nighttime.
                                this.ctx.fillRect(today.xLeft, today.sunTop, hourWidth, today.sunHeight);
                            }
                        }
                        //draw times
                        this.ctx.fillStyle = '#fff';
                        this.ctx.textBaseline = 'bottom';
                        this.ctx.textAlign = 'center';
                        if (this.theme.widgetType === WidgetType_1.WidgetType.Hourly) {
                            var day = new Date(d.time * 1000);
                            var hour = day.getHours();
                            if (hour % 4 === 0) {
                                this.ctx.fillText((hour === 0 ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][day.getDay()] : hour.toString()), PADDING.left + i * hourWidth + 1800 * pxPerSec, widgetHeight);
                            }
                        }
                        else {
                            this.ctx.fillText(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][new Date(d.time * 1000).getDay()], PADDING.left + i * dayWidth + 43200 * pxPerSec, widgetHeight);
                        }
                        /*
                         * TODO:MainGraph
                         * Padding: we are using the radius of the largest shown dot for top and right. do we care about the case where that large dot is not near the top or right?  i.e., do we shift the padding depending upon the nearest dot to the edge?
                         * Padding: what if max dot radius is larger then 'time bar' or 'temp bar'?
                         * IS THIS NECESSARY?  FIND AN EXAMPLE WHERE IT MATTERS -> Draw invert the order of the 2 for loops so that entire lines are drawn at once. this will allow for depth of lines to be set
                         *
                         * TODO:Dots
                         * Rain, Sleet, Snow, Hail icons for PrecipProbability
                         * visibility icon
                         * pressure icon
                         * hummidity icon
                         *
                         * TODO segments
                         * Color precipProbability segments for precipIntensiy
                         *
                         * TODO Work List:
                         * Toggle between daily and hourly.  work in progress figuring how hiding and showing of config options
                         * Persist config options
                         * I don't like config.global.type being H or D. seems clunky.
                         * Background image configuration to simulate phone home screen widget.
                         * Show 'alerts' in bottom left corner
                         * do we need seperate font sizes for time and temp?
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
                         * Add 'themes'
                         * Add save/edit/delete theme capability
                         *
                         */
                        for (var _i = 0, _a = this.theme.options; _i < _a.length; _i++) {
                            var c = _a[_i];
                            //Don't show dots/segments for 0% precipitation probability
                            if (!(c.title === 'precipProbability' && d.precipProbability === 0)) {
                                var s = new SegmentGeometry_1.SegmentGeometry(c, this.theme.globals, (yesterday ? yesterday[c.title].x : null), (yesterday ? yesterday[c.title].y : null), today[c.title].x, today[c.title].y);
                                switch (c.title) {
                                    case 'moon':
                                        DotDrawer_1.DotDrawer.moon(this.ctx, today[c.title].x, today[c.title].y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba), d.moonPhase);
                                        break;
                                    case 'windSpeed':
                                        DotDrawer_1.DotDrawer.wind(this.ctx, today[c.title].x, today[c.title].y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba), d.windBearing);
                                        break;
                                    default:
                                        DotDrawer_1.DotDrawer.simple(this.ctx, today[c.title].x, today[c.title].y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba));
                                }
                                //Don't draw segment for precipProbability when yesterday was 0%.
                                if ((c.segment.show.global ? this.theme.globals.segment.show : c.segment.show.value) && s.hasSegment && !(c.title === 'precipProbability' && yesterday.data.precipProbability === 0)) {
                                    this.ctx.fillStyle = (c.segment.color.global ? this.theme.globals.segment.color.rgba : c.segment.color.value.rgba);
                                    this.ctx.beginPath();
                                    this.ctx.arc(s.start.point.x, s.start.point.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), s.start.from, s.start.to, false);
                                    this.ctx.arc(s.end.point.x, s.end.point.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), s.end.from, s.end.to, false);
                                    this.ctx.fill();
                                    this.ctx.closePath();
                                }
                            }
                        }
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