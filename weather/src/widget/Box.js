System.register(["./Point"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Point_1;
    var Box;
    return {
        setters:[
            function (Point_1_1) {
                Point_1 = Point_1_1;
            }],
        execute: function() {
            Box = (function () {
                /*
                 *
                 * @param {Point} point The top left corner of the position.
                 */
                function Box(left, top, width, height) {
                    if (left === void 0) { left = 0; }
                    if (top === void 0) { top = 0; }
                    if (width === void 0) { width = 0; }
                    if (height === void 0) { height = 0; }
                    this._center = new Point_1.Point();
                    this._left = left;
                    this._top = top;
                    this.width = width;
                    this.height = height;
                }
                Object.defineProperty(Box.prototype, "width", {
                    get: function () { return this._width; },
                    set: function (w) {
                        this._width = w;
                        this._right = this._left + this._width;
                        this.updateCenter();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Box.prototype, "height", {
                    get: function () { return this._height; },
                    set: function (h) {
                        this._height = h;
                        this._bottom = this._top + this._height;
                        this.updateCenter();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Box.prototype, "right", {
                    get: function () { return this._right; },
                    set: function (r) {
                        this._right = r;
                        this._width = this._right - this._left;
                        this.updateCenter();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Box.prototype, "bottom", {
                    get: function () { return this._bottom; },
                    set: function (b) {
                        this._bottom = b;
                        this._height = this._bottom - this._top;
                        this.updateCenter();
                    },
                    enumerable: true,
                    configurable: true
                });
                Box.prototype.updateCenter = function () {
                    this._center.x = this.left + this.width / 2;
                    this._center.y = this.top + this.height / 2;
                };
                Object.defineProperty(Box.prototype, "top", {
                    get: function () { return this._top; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Box.prototype, "left", {
                    get: function () { return this._left; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Box.prototype, "center", {
                    get: function () { return this._center; },
                    enumerable: true,
                    configurable: true
                });
                return Box;
            }());
            exports_1("Box", Box);
        }
    }
});
//# sourceMappingURL=Box.js.map