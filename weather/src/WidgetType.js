System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WidgetType;
    return {
        setters:[],
        execute: function() {
            (function (WidgetType) {
                WidgetType[WidgetType["Daily"] = 0] = "Daily";
                WidgetType[WidgetType["Hourly"] = 1] = "Hourly";
            })(WidgetType || (WidgetType = {}));
            exports_1("WidgetType", WidgetType);
        }
    }
});
//# sourceMappingURL=WidgetType.js.map