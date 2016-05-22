System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SegmentGeometry;
    return {
        setters:[],
        execute: function() {
            SegmentGeometry = (function () {
                function SegmentGeometry(config, globals, x1, y1, x2, y2) {
                    this.config = config;
                    this.globals = globals;
                    this.x1 = x1;
                    this.y1 = y1;
                    this.x2 = x2;
                    this.y2 = y2;
                    this._length = 0;
                    if (x1 !== null && y1 !== null && x2 !== null && y2 !== null) {
                        var angle = (config.segment.angle.global ? globals.segment.angle : config.segment.angle.value);
                        var padding = (config.segment.padding.global ? globals.segment.padding : config.segment.padding.value);
                        var radius = (config.dot.radius.global ? globals.dot.radius : config.dot.radius.value);
                        var prettyAngle = Math.atan((y1 - y2) / (x1 - x2));
                        var prettyAngleDegree = prettyAngle * 180 / Math.PI;
                        var prettyShift = (prettyAngle < 0 ? 1 : -1); //the X/Y values shift depending upon the slope
                        prettyAngle = Math.abs(prettyAngle);
                        var startAngle = (prettyAngleDegree - angle) * Math.PI / 180;
                        var endAngle = startAngle + 2 * (angle * Math.PI / 180);
                        var p2StartAngle = Math.PI + startAngle;
                        var p2EndAngle = Math.PI + endAngle;
                        var prettySegmentBeginX = x1 + padding * Math.cos(prettyAngle);
                        var prettySegmentBeginY = y1 - prettyShift * padding * Math.sin(prettyAngle);
                        var prettySegmentEndX = x2 - padding * Math.cos(prettyAngle);
                        var prettySegmentEndY = y2 + prettyShift * padding * Math.sin(prettyAngle);
                        this._length = Math.sqrt(Math.pow(prettySegmentEndY - prettySegmentBeginY, 2) + Math.pow(prettySegmentEndX - prettySegmentBeginX, 2)) - 2 * radius;
                        this._start = { point: { x: prettySegmentBeginX, y: prettySegmentBeginY }, from: startAngle, to: endAngle };
                        this._end = { point: { x: prettySegmentEndX, y: prettySegmentEndY }, from: p2StartAngle, to: p2EndAngle };
                    }
                }
                Object.defineProperty(SegmentGeometry.prototype, "hasSegment", {
                    get: function () {
                        return this._length > 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SegmentGeometry.prototype, "start", {
                    get: function () {
                        return this._start;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SegmentGeometry.prototype, "end", {
                    get: function () {
                        return this._end;
                    },
                    enumerable: true,
                    configurable: true
                });
                return SegmentGeometry;
            }());
            exports_1("SegmentGeometry", SegmentGeometry);
        }
    }
});
//# sourceMappingURL=SegmentGeometry.js.map