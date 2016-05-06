System.register(["angular2/core", "./Color", 'angular2/http', 'rxjs/Observable', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, Color_1, http_1, Observable_1;
    var ConfigService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Color_1_1) {
                Color_1 = Color_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            //TODO WIP persist to local storage!!!!
            ConfigService = (function () {
                function ConfigService(_http) {
                    var _this = this;
                    this._http = _http;
                    this._observable = new Observable_1.Observable(function (o) { _this._observer = o; });
                }
                ConfigService.prototype.deserializeColors = function (obj) {
                    var _this = this;
                    if (typeof obj !== 'object') {
                        return;
                    }
                    Object.keys(obj).forEach(function (key) {
                        if (key === 'color' || key === 'daylight') {
                            if (obj[key].hasOwnProperty('value')) {
                                obj[key].value = Color_1.Color.getColor(obj[key].value);
                            }
                            else {
                                obj[key] = Color_1.Color.getColor(obj[key]);
                            }
                        }
                        else {
                            _this.deserializeColors(obj[key]);
                        }
                    });
                };
                Object.defineProperty(ConfigService.prototype, "themes", {
                    get: function () {
                        //TODO cache themes?
                        var _this = this;
                        if (!this._customThemes) {
                            this._http.get('src/preset-themes.json').map(function (res) {
                                var themes = (res.json());
                                for (var _i = 0, themes_1 = themes; _i < themes_1.length; _i++) {
                                    var t = themes_1[_i];
                                    _this.deserializeColors(t);
                                }
                                var d = localStorage.getItem('customThemes');
                                _this._customThemes = (d ? JSON.parse(d) : []);
                                for (var _a = 0, _b = _this._customThemes; _a < _b.length; _a++) {
                                    var t = _b[_a];
                                    _this.deserializeColors(t);
                                    _this._observer.next(t);
                                }
                                return themes;
                            }).subscribe(function (ta) { return ta.forEach(function (t) { return _this._observer.next(t); }); });
                        }
                        return this._observable;
                    },
                    enumerable: true,
                    configurable: true
                });
                ConfigService.prototype.save = function (theme) {
                    var idx;
                    if ((idx = this._customThemes.findIndex(function (t) { return t === theme; })) >= 0) {
                        this._customThemes[idx] = theme;
                    }
                    else {
                        this._customThemes.push(theme);
                        this._observer.next(theme);
                    }
                    localStorage.setItem('customThemes', JSON.stringify(this._customThemes));
                };
                ConfigService.prototype.delete = function (theme) {
                    var idx;
                    if ((idx = this._customThemes.findIndex(function (t) { return t === theme; })) >= 0) {
                        this._customThemes.splice(idx, 1);
                    }
                    else {
                        console.error('When would this ever happen?');
                    }
                    //TODO do we need to notify any observers?
                    localStorage.setItem('customThemes', JSON.stringify(this._customThemes));
                };
                Object.defineProperty(ConfigService.prototype, "maxDotRadius", {
                    /**
                     * TODO-hack for now now just look at all options. how to determine if they are shown on hourly/daily?
                     *
                     * @returns {Number|number} The largest radius of the any dot that is shown.
                     */
                    get: function () {
                        //TODO fix to use new way
                        var max = 10;
                        // this.global.dot.radius.value *= 1;
                        // let max = this.global.dot.radius.value;
                        //
                        // for (let o of this.options) {
                        //   o.dot.radius.value *= 1;
                        //   if ((o.show.global && this.global.show.value || (!o.show.global && o.show.value)) && !o.dot.radius.global && o.dot.radius.value > max) {
                        //     max = o.dot.radius.value;
                        //   }
                        // }
                        return max;
                    },
                    enumerable: true,
                    configurable: true
                });
                ConfigService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ConfigService);
                return ConfigService;
            }());
            exports_1("ConfigService", ConfigService);
        }
    }
});
//# sourceMappingURL=config.service.js.map