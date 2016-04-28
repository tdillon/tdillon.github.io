System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Color;
    return {
        setters:[],
        execute: function() {
            Color = (function () {
                function Color(r, g, b, a) {
                    this.r = r;
                    this.g = g;
                    this.b = b;
                    this.a = a;
                }
                Object.defineProperty(Color.prototype, "rgba", {
                    get: function () {
                        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Color.prototype, "rgb", {
                    get: function () {
                        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Color, "white", {
                    get: function () {
                        return new Color(255, 255, 255, 1);
                    },
                    enumerable: true,
                    configurable: true
                });
                Color.getColor = function (c) {
                    return new Color(c.r, c.g, c.b, c.a);
                };
                Object.defineProperty(Color, "whiteFifty", {
                    get: function () {
                        return new Color(255, 255, 255, .5);
                    },
                    enumerable: true,
                    configurable: true
                });
                Color.prototype.copyOf = function () {
                    return new Color(this.r, this.g, this.b, this.a);
                };
                return Color;
            }());
            exports_1("Color", Color);
        }
    }
});
//# sourceMappingURL=Color.js.map