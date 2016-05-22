System.register(["../Ranges", "../WidgetType", "./TimeSegment", './Box'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Ranges_1, WidgetType_1, TimeSegment_1, Box_1;
    var Positionings;
    return {
        setters:[
            function (Ranges_1_1) {
                Ranges_1 = Ranges_1_1;
            },
            function (WidgetType_1_1) {
                WidgetType_1 = WidgetType_1_1;
            },
            function (TimeSegment_1_1) {
                TimeSegment_1 = TimeSegment_1_1;
            },
            function (Box_1_1) {
                Box_1 = Box_1_1;
            }],
        execute: function() {
            Positionings = (function () {
                function Positionings(_theme, _data, clientWidth, widgetRatio, devicePixelRatio, maxTextWidth) {
                    this._theme = _theme;
                    this._data = _data;
                    this.client = new Box_1.Box();
                    this.client.width = clientWidth;
                    this.client.height = clientWidth / widgetRatio;
                    this.widget = new Box_1.Box();
                    this.widget.width = clientWidth * devicePixelRatio;
                    this.widget.height = clientWidth / widgetRatio * devicePixelRatio;
                    var numLeftScales = 1; //TODO pull from theme
                    var timeBarFontSize = 12; //TODO pull from theme
                    var numRightScales = 2; //TODO pull from theme
                    this.leftScale = new Box_1.Box();
                    this.leftScale.width = maxTextWidth * numLeftScales;
                    this.rightScale = new Box_1.Box(this.widget.width - (maxTextWidth * numRightScales));
                    this.rightScale.right = this.widget.width;
                    this.timeBar = new Box_1.Box(this.leftScale.right, this.widget.height - timeBarFontSize);
                    this.timeBar.right = this.rightScale.left;
                    this.timeBar.bottom = this.widget.height;
                    this.leftScale.height = this.timeBar.top;
                    this.rightScale.bottom = this.timeBar.top;
                    this.graph = new Box_1.Box(this.leftScale.width);
                    this.graph.right = this.rightScale.left;
                    this.graph.bottom = this.timeBar.top;
                    this.timeSegments = [];
                    var db = (_theme.widgetType === WidgetType_1.WidgetType.Daily ? _data.daily : _data.hourly);
                    var ranges = new Ranges_1.Ranges(db, this._theme);
                    var i = 0;
                    var segWidth = this.graph.width / db.data.length;
                    var _loop_1 = function(dp) {
                        if (_theme.widgetType === WidgetType_1.WidgetType.Hourly) {
                            //TODO need to get data[x] for the right day
                            var currentDay = _data.daily.data.reduce(function (prev, curr) { return curr.time <= dp.time ? curr : prev; });
                            dp.sunriseTime = currentDay.sunriseTime;
                            dp.sunsetTime = currentDay.sunsetTime;
                        }
                        this_1.timeSegments.push(new TimeSegment_1.TimeSegment(_theme, dp, new Box_1.Box(this_1.graph.left + i * segWidth, 0, segWidth, this_1.graph.height), new Box_1.Box(this_1.timeBar.left + i * segWidth, this_1.timeBar.top, segWidth, this_1.timeBar.height), ranges));
                        ++i;
                    };
                    var this_1 = this;
                    for (var _i = 0, _a = db.data; _i < _a.length; _i++) {
                        var dp = _a[_i];
                        _loop_1(dp);
                    }
                }
                return Positionings;
            }());
            exports_1("Positionings", Positionings);
        }
    }
});
//# sourceMappingURL=Positionings.js.map