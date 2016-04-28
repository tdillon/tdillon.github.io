System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DotDrawer;
    return {
        setters:[],
        execute: function() {
            DotDrawer = (function () {
                function DotDrawer() {
                }
                DotDrawer.simple = function (ctx, x, y, radius, color) {
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
                    ctx.closePath();
                    ctx.fill();
                };
                DotDrawer.wind = function (ctx, x, y, r, color, windBearing) {
                    //DotDrawer.simple(ctx, x, y, r, color);  //TODO just testing, remove me.
                    var pointAngleDeg = (windBearing + 180) % 360;
                    var pointAngle = pointAngleDeg * Math.PI / 180;
                    var tailAngle = 60;
                    var tailPercent = .6;
                    var secondAngle = ((pointAngleDeg + 90 + tailAngle) * Math.PI / 180) % (2 * Math.PI);
                    var thirdAngle = ((pointAngleDeg + 270 - tailAngle) * Math.PI / 180) % (2 * Math.PI);
                    var points = [
                        { x: x + r * Math.sin(pointAngle), y: y - r * Math.cos(pointAngle) },
                        { x: x + r * Math.sin(secondAngle), y: y - r * Math.cos(secondAngle) },
                        { x: x + (r * tailPercent) * Math.sin(windBearing * Math.PI / 180), y: y - (r * tailPercent) * Math.cos(windBearing * Math.PI / 180) },
                        { x: x + r * Math.sin(thirdAngle), y: y - r * Math.cos(thirdAngle) }
                    ];
                    ctx.beginPath();
                    ctx.fillStyle = color;
                    ctx.moveTo(points[0].x, points[0].y);
                    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
                        var p = points_1[_i];
                        ctx.lineTo(p.x, p.y);
                    }
                    ctx.closePath();
                    ctx.fill();
                };
                DotDrawer.moon = function (ctx, x, y, r, color, moonPhase) {
                    var epsilon = .001;
                    //Draw 'dark' portion of moon
                    ctx.beginPath();
                    ctx.fillStyle = '#333'; //TODO make configurable
                    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
                    ctx.fill();
                    //Draw 'light' portion of moon
                    ctx.beginPath();
                    ctx.fillStyle = color;
                    if (moonPhase < .25) {
                        var mP = r * (.25 - moonPhase) * 4;
                        var eR = Math.pow(r * 2, 2) / (8 * mP) + (mP / 2);
                        var eX = x + 1 * (eR - mP);
                        var angle = Math.atan(r / (eR - mP));
                        ctx.arc(eX, y, eR, angle + Math.PI, -angle + Math.PI, true);
                        ctx.arc(x, y, r, Math.PI / 2, -Math.PI / 2, false);
                    }
                    else if (moonPhase <= .5) {
                        var mP = r * (moonPhase - .25) * 4;
                        var eR = Math.pow(r * 2, 2) / (8 * mP) + (mP / 2);
                        var eX = x + -1 * (eR - mP);
                        var angle = Math.atan(r / (eR - mP));
                        if (mP > epsilon) {
                            ctx.arc(eX, y, eR, angle, -angle, true);
                        }
                        ctx.arc(x, y, r, Math.PI / 2, -Math.PI / 2, false);
                    }
                    else if (moonPhase <= .75) {
                        var mP = r * (.75 - moonPhase) * 4;
                        var eR = Math.pow(r * 2, 2) / (8 * mP) + (mP / 2);
                        var eX = x + 1 * (eR - mP);
                        var angle = Math.atan(r / (eR - mP));
                        ctx.arc(eX, y, eR, angle + Math.PI, -angle + Math.PI, true);
                        ctx.arc(x, y, r, Math.PI / 2, -Math.PI / 2, true);
                    }
                    else {
                        var mP = r * (moonPhase - .75) * 4;
                        var eR = Math.pow(r * 2, 2) / (8 * mP) + (mP / 2);
                        var eX = x + -1 * (eR - mP);
                        var angle = Math.atan(r / (eR - mP));
                        if (mP > epsilon) {
                            ctx.arc(eX, y, eR, angle, -angle, true);
                        }
                        ctx.arc(x, y, r, -Math.PI / 2, Math.PI / 2, false);
                    }
                    ctx.closePath();
                    ctx.fill();
                };
                return DotDrawer;
            }());
            exports_1("DotDrawer", DotDrawer);
        }
    }
});
//# sourceMappingURL=DotDrawer.js.map