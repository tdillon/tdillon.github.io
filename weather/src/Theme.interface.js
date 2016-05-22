System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ThemeType, CloudCoverLocation;
    return {
        setters:[],
        execute: function() {
            (function (ThemeType) {
                ThemeType[ThemeType["Preset"] = 0] = "Preset";
                ThemeType[ThemeType["Custom"] = 1] = "Custom";
            })(ThemeType || (ThemeType = {}));
            exports_1("ThemeType", ThemeType);
            (function (CloudCoverLocation) {
                CloudCoverLocation[CloudCoverLocation["Graph"] = 0] = "Graph";
                CloudCoverLocation[CloudCoverLocation["TimeBar"] = 1] = "TimeBar";
            })(CloudCoverLocation || (CloudCoverLocation = {}));
            exports_1("CloudCoverLocation", CloudCoverLocation);
        }
    }
});
//# sourceMappingURL=Theme.interface.js.map