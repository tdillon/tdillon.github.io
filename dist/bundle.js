!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register("2", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var privateData, RockPaperScissorsLizardSpock;
    return {
        setters: [],
        execute: function () {
            //Use a WeakMap until class static fields are available.  ES 2017?
            privateData = new WeakMap();
            RockPaperScissorsLizardSpock = function () {
                function RockPaperScissorsLizardSpock() {}
                Object.defineProperty(RockPaperScissorsLizardSpock, "TIE", {
                    /** Constant for a tie outcome, 0 */
                    get: function () {
                        return 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RockPaperScissorsLizardSpock, "PLAYER1", {
                    /** Constant for a player 1 victory, 1 */
                    get: function () {
                        return 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RockPaperScissorsLizardSpock, "PLAYER2", {
                    /** Constant for a player 2 victory, 2 */
                    get: function () {
                        return 2;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RockPaperScissorsLizardSpock, "ROCK", {
                    /** Constant for a rock move, 0. */
                    get: function () {
                        return 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RockPaperScissorsLizardSpock, "PAPER", {
                    /** Constant for a paper move, 1. */
                    get: function () {
                        return 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RockPaperScissorsLizardSpock, "SCISSORS", {
                    /** Constant for a scissors move, 2. */
                    get: function () {
                        return 2;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RockPaperScissorsLizardSpock, "LIZARD", {
                    /** Constant for a lizard move, 3. */
                    get: function () {
                        return 3;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RockPaperScissorsLizardSpock, "SPOCK", {
                    /** Constant for a spock move, 4. */
                    get: function () {
                        return 4;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Return the string representation of the given move.
                 */
                RockPaperScissorsLizardSpock.getMoveName = function (move) {
                    RockPaperScissorsLizardSpock._validateMove(move);
                    return privateData.get(RockPaperScissorsLizardSpock).moves[move];
                };
                /**
                 * Return an object containing the outcome and result of player one's (p1) move vs player two's move (p2).
                 * The outcome property of the returned object will be TIE, PLAYER1, or PLAYER2.
                 * The result property of the returned object will be a string that describes the outcome.
                 */
                RockPaperScissorsLizardSpock.play = function (p1, p2) {
                    RockPaperScissorsLizardSpock._validateMove(p1);
                    RockPaperScissorsLizardSpock._validateMove(p2);
                    var rules = privateData.get(RockPaperScissorsLizardSpock).rules;
                    if (p1 === p2) {
                        return {
                            outcome: RockPaperScissorsLizardSpock.TIE,
                            result: RockPaperScissorsLizardSpock.getMoveName(p1) + " vs " + RockPaperScissorsLizardSpock.getMoveName(p2) + " is a tie"
                        };
                    } else if (rules[p1][p2]) {
                        return {
                            outcome: RockPaperScissorsLizardSpock.PLAYER1,
                            result: RockPaperScissorsLizardSpock.getMoveName(p1) + " " + rules[p1][p2] + " " + RockPaperScissorsLizardSpock.getMoveName(p2),
                            method: rules[p1][p2],
                            winner: p1,
                            loser: p2
                        };
                    } else {
                        return {
                            outcome: RockPaperScissorsLizardSpock.PLAYER2,
                            result: RockPaperScissorsLizardSpock.getMoveName(p2) + " " + rules[p2][p1] + " " + RockPaperScissorsLizardSpock.getMoveName(p1),
                            method: rules[p2][p1],
                            winner: p2,
                            loser: p1
                        };
                    }
                };
                /**
                 * Verify whether a move is valid.
                 * If not, throw an error.
                 */
                RockPaperScissorsLizardSpock._validateMove = function (move) {
                    if (typeof move !== 'number') {
                        throw new TypeError("Move must be an integer between 0 and 4.  Got " + move);
                    } else if (move < 0 || move > 4 || move % 1 !== 0) {
                        throw new RangeError("Move must be an integer between 0 and 4.  Got " + move);
                    }
                };
                return RockPaperScissorsLizardSpock;
            }();
            exports_1("RockPaperScissorsLizardSpock", RockPaperScissorsLizardSpock);
            privateData.set(RockPaperScissorsLizardSpock, {
                moves: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
                rules: [[,, 'crushes', 'crushes'], ['covers',,,, 'disproves'], [, 'cuts',, 'decapitates'], [, 'eats',,, 'poisons'], ['vaporizes',, 'smashes',,]]
            });
        }
    };
});

$__System.registerDynamic('3', ['4', '5', '6', '7', '8'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isNumeric_1 = $__require('4');
    var Observable_1 = $__require('5');
    var async_1 = $__require('6');
    var isScheduler_1 = $__require('7');
    var isDate_1 = $__require('8');
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var TimerObservable = function (_super) {
        __extends(TimerObservable, _super);
        function TimerObservable(dueTime, period, scheduler) {
            if (dueTime === void 0) {
                dueTime = 0;
            }
            _super.call(this);
            this.period = -1;
            this.dueTime = 0;
            if (isNumeric_1.isNumeric(period)) {
                this.period = Number(period) < 1 && 1 || Number(period);
            } else if (isScheduler_1.isScheduler(period)) {
                scheduler = period;
            }
            if (!isScheduler_1.isScheduler(scheduler)) {
                scheduler = async_1.async;
            }
            this.scheduler = scheduler;
            this.dueTime = isDate_1.isDate(dueTime) ? +dueTime - this.scheduler.now() : dueTime;
        }
        /**
         * Creates an Observable that starts emitting after an `initialDelay` and
         * emits ever increasing numbers after each `period` of time thereafter.
         *
         * <span class="informal">Its like {@link interval}, but you can specify when
         * should the emissions start.</span>
         *
         * <img src="./img/timer.png" width="100%">
         *
         * `timer` returns an Observable that emits an infinite sequence of ascending
         * integers, with a constant interval of time, `period` of your choosing
         * between those emissions. The first emission happens after the specified
         * `initialDelay`. The initial delay may be a {@link Date}. By default, this
         * operator uses the `async` Scheduler to provide a notion of time, but you
         * may pass any Scheduler to it. If `period` is not specified, the output
         * Observable emits only one value, `0`. Otherwise, it emits an infinite
         * sequence.
         *
         * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
         * var numbers = Rx.Observable.timer(3000, 1000);
         * numbers.subscribe(x => console.log(x));
         *
         * @example <caption>Emits one number after five seconds</caption>
         * var numbers = Rx.Observable.timer(5000);
         * numbers.subscribe(x => console.log(x));
         *
         * @see {@link interval}
         * @see {@link delay}
         *
         * @param {number|Date} initialDelay The initial delay time to wait before
         * emitting the first value of `0`.
         * @param {number} [period] The period of time between emissions of the
         * subsequent numbers.
         * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
         * the emission of values, and providing a notion of "time".
         * @return {Observable} An Observable that emits a `0` after the
         * `initialDelay` and ever increasing numbers after each `period` of time
         * thereafter.
         * @static true
         * @name timer
         * @owner Observable
         */
        TimerObservable.create = function (initialDelay, period, scheduler) {
            if (initialDelay === void 0) {
                initialDelay = 0;
            }
            return new TimerObservable(initialDelay, period, scheduler);
        };
        TimerObservable.dispatch = function (state) {
            var index = state.index,
                period = state.period,
                subscriber = state.subscriber;
            var action = this;
            subscriber.next(index);
            if (subscriber.isUnsubscribed) {
                return;
            } else if (period === -1) {
                return subscriber.complete();
            }
            state.index = index + 1;
            action.schedule(state, period);
        };
        TimerObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var _a = this,
                period = _a.period,
                dueTime = _a.dueTime,
                scheduler = _a.scheduler;
            return scheduler.schedule(TimerObservable.dispatch, dueTime, {
                index: index, period: period, subscriber: subscriber
            });
        };
        return TimerObservable;
    }(Observable_1.Observable);
    exports.TimerObservable = TimerObservable;
    

    return module.exports;
});
$__System.registerDynamic("9", ["3"], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var TimerObservable_1 = $__require("3");
  exports.timer = TimerObservable_1.TimerObservable.create;
  

  return module.exports;
});
$__System.registerDynamic('a', ['5', '9'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('5');
  var timer_1 = $__require('9');
  Observable_1.Observable.timer = timer_1.timer;
  

  return module.exports;
});
$__System.registerDynamic("8", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function isDate(value) {
        return value instanceof Date && !isNaN(+value);
    }
    exports.isDate = isDate;
    

    return module.exports;
});
$__System.registerDynamic('b', ['6', '8', 'c', 'd'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var async_1 = $__require('6');
    var isDate_1 = $__require('8');
    var Subscriber_1 = $__require('c');
    var Notification_1 = $__require('d');
    /**
     * Delays the emission of items from the source Observable by a given timeout or
     * until a given Date.
     *
     * <span class="informal">Time shifts each item by some specified amount of
     * milliseconds.</span>
     *
     * <img src="./img/delay.png" width="100%">
     *
     * If the delay argument is a Number, this operator time shifts the source
     * Observable by that amount of time expressed in milliseconds. The relative
     * time intervals between the values are preserved.
     *
     * If the delay argument is a Date, this operator time shifts the start of the
     * Observable execution until the given date occurs.
     *
     * @example <caption>Delay each click by one second</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
     * delayedClicks.subscribe(x => console.log(x));
     *
     * @example <caption>Delay all clicks until a future date happens</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var date = new Date('March 15, 2050 12:00:00'); // in the future
     * var delayedClicks = clicks.delay(date); // click emitted only after that date
     * delayedClicks.subscribe(x => console.log(x));
     *
     * @see {@link debounceTime}
     * @see {@link delayWhen}
     *
     * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
     * a `Date` until which the emission of the source items is delayed.
     * @param {Scheduler} [scheduler=async] The Scheduler to use for
     * managing the timers that handle the time-shift for each item.
     * @return {Observable} An Observable that delays the emissions of the source
     * Observable by the specified timeout or Date.
     * @method delay
     * @owner Observable
     */
    function delay(delay, scheduler) {
        if (scheduler === void 0) {
            scheduler = async_1.async;
        }
        var absoluteDelay = isDate_1.isDate(delay);
        var delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
        return this.lift(new DelayOperator(delayFor, scheduler));
    }
    exports.delay = delay;
    var DelayOperator = function () {
        function DelayOperator(delay, scheduler) {
            this.delay = delay;
            this.scheduler = scheduler;
        }
        DelayOperator.prototype.call = function (subscriber, source) {
            return source._subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
        };
        return DelayOperator;
    }();
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var DelaySubscriber = function (_super) {
        __extends(DelaySubscriber, _super);
        function DelaySubscriber(destination, delay, scheduler) {
            _super.call(this, destination);
            this.delay = delay;
            this.scheduler = scheduler;
            this.queue = [];
            this.active = false;
            this.errored = false;
        }
        DelaySubscriber.dispatch = function (state) {
            var source = state.source;
            var queue = source.queue;
            var scheduler = state.scheduler;
            var destination = state.destination;
            while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
                queue.shift().notification.observe(destination);
            }
            if (queue.length > 0) {
                var delay_1 = Math.max(0, queue[0].time - scheduler.now());
                this.schedule(state, delay_1);
            } else {
                source.active = false;
            }
        };
        DelaySubscriber.prototype._schedule = function (scheduler) {
            this.active = true;
            this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
                source: this, destination: this.destination, scheduler: scheduler
            }));
        };
        DelaySubscriber.prototype.scheduleNotification = function (notification) {
            if (this.errored === true) {
                return;
            }
            var scheduler = this.scheduler;
            var message = new DelayMessage(scheduler.now() + this.delay, notification);
            this.queue.push(message);
            if (this.active === false) {
                this._schedule(scheduler);
            }
        };
        DelaySubscriber.prototype._next = function (value) {
            this.scheduleNotification(Notification_1.Notification.createNext(value));
        };
        DelaySubscriber.prototype._error = function (err) {
            this.errored = true;
            this.queue = [];
            this.destination.error(err);
        };
        DelaySubscriber.prototype._complete = function () {
            this.scheduleNotification(Notification_1.Notification.createComplete());
        };
        return DelaySubscriber;
    }(Subscriber_1.Subscriber);
    var DelayMessage = function () {
        function DelayMessage(time, notification) {
            this.time = time;
            this.notification = notification;
        }
        return DelayMessage;
    }();
    

    return module.exports;
});
$__System.registerDynamic('e', ['5', 'b'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('5');
  var delay_1 = $__require('b');
  Observable_1.Observable.prototype.delay = delay_1.delay;
  

  return module.exports;
});
$__System.registerDynamic("f", ["c"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require("c");
    /**
     * Perform a side effect for every emission on the source Observable, but return
     * an Observable that is identical to the source.
     *
     * <span class="informal">Intercepts each emission on the source and runs a
     * function, but returns an output which is identical to the source.</span>
     *
     * <img src="./img/do.png" width="100%">
     *
     * Returns a mirrored Observable of the source Observable, but modified so that
     * the provided Observer is called to perform a side effect for every value,
     * error, and completion emitted by the source. Any errors that are thrown in
     * the aforementioned Observer or handlers are safely sent down the error path
     * of the output Observable.
     *
     * This operator is useful for debugging your Observables for the correct values
     * or performing other side effects.
     *
     * Note: this is different to a `subscribe` on the Observable. If the Observable
     * returned by `do` is not subscribed, the side effects specified by the
     * Observer will never happen. `do` therefore simply spies on existing
     * execution, it does not trigger an execution to happen like `subscribe` does.
     *
     * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var positions = clicks
     *   .do(ev => console.log(ev))
     *   .map(ev => ev.clientX);
     * positions.subscribe(x => console.log(x));
     *
     * @see {@link map}
     * @see {@link subscribe}
     *
     * @param {Observer|function} [nextOrObserver] A normal Observer object or a
     * callback for `next`.
     * @param {function} [error] Callback for errors in the source.
     * @param {function} [complete] Callback for the completion of the source.
     * @return {Observable} An Observable identical to the source, but runs the
     * specified Observer or callback(s) for each item.
     * @method do
     * @name do
     * @owner Observable
     */
    function _do(nextOrObserver, error, complete) {
        return this.lift(new DoOperator(nextOrObserver, error, complete));
    }
    exports._do = _do;
    var DoOperator = function () {
        function DoOperator(nextOrObserver, error, complete) {
            this.nextOrObserver = nextOrObserver;
            this.error = error;
            this.complete = complete;
        }
        DoOperator.prototype.call = function (subscriber, source) {
            return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
        };
        return DoOperator;
    }();
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var DoSubscriber = function (_super) {
        __extends(DoSubscriber, _super);
        function DoSubscriber(destination, nextOrObserver, error, complete) {
            _super.call(this, destination);
            var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
            safeSubscriber.syncErrorThrowable = true;
            this.add(safeSubscriber);
            this.safeSubscriber = safeSubscriber;
        }
        DoSubscriber.prototype._next = function (value) {
            var safeSubscriber = this.safeSubscriber;
            safeSubscriber.next(value);
            if (safeSubscriber.syncErrorThrown) {
                this.destination.error(safeSubscriber.syncErrorValue);
            } else {
                this.destination.next(value);
            }
        };
        DoSubscriber.prototype._error = function (err) {
            var safeSubscriber = this.safeSubscriber;
            safeSubscriber.error(err);
            if (safeSubscriber.syncErrorThrown) {
                this.destination.error(safeSubscriber.syncErrorValue);
            } else {
                this.destination.error(err);
            }
        };
        DoSubscriber.prototype._complete = function () {
            var safeSubscriber = this.safeSubscriber;
            safeSubscriber.complete();
            if (safeSubscriber.syncErrorThrown) {
                this.destination.error(safeSubscriber.syncErrorValue);
            } else {
                this.destination.complete();
            }
        };
        return DoSubscriber;
    }(Subscriber_1.Subscriber);
    

    return module.exports;
});
$__System.registerDynamic('10', ['5', 'f'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('5');
  var do_1 = $__require('f');
  Observable_1.Observable.prototype.do = do_1._do;
  

  return module.exports;
});
$__System.registerDynamic('11', ['2', '5', 'a', 'e', '10'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    const rpsls_1 = $__require('2');
    const Observable_1 = $__require('5');
    $__require('a');
    $__require('e');
    $__require('10');
    let p1Score = 0;
    let p2Score = 0;
    let moves = ['fa-hand-rock-o', 'fa-hand-paper-o', 'fa-hand-scissors-o', 'fa-hand-lizard-o', 'fa-hand-spock-o'];
    let outcomeClasses = ['win', 'lose', 'draw'];
    let [divSplash, divShoot, divPlay, divResults] = document.querySelectorAll('#rpsls > div');
    let [iShootP1, iShootP2] = divShoot.querySelectorAll('div > *');
    let [iPlayP1, spanPlayResult, iPlayP2] = divPlay.querySelectorAll('div > *');
    let [spanResultsP1, spanResultsP2] = divResults.querySelectorAll('div > span');
    let [spanResultsP1Score, spanResultsP2Score] = divResults.querySelectorAll('span > span');
    Observable_1.Observable.timer(0, 7000).do(x => {
        divSplash.classList.add('current');
        divShoot.classList.remove('current');
        divPlay.classList.remove('current');
        divResults.classList.remove('current');
        spanResultsP1.classList.remove(...outcomeClasses);
        spanResultsP2.classList.remove(...outcomeClasses);
    }).delay(1500).do(x => {
        divSplash.classList.remove('current');
        divShoot.classList.add('current');
    }).delay(250).do(x => iShootP1.className = iShootP2.className = `fa ${ moves[0] }`).delay(250).do(x => iShootP1.className = iShootP2.className = `fa ${ moves[1] }`).delay(250).do(x => iShootP1.className = iShootP2.className = `fa ${ moves[2] }`).delay(250).do(x => iShootP1.className = iShootP2.className = `fa ${ moves[3] }`).delay(250).do(x => iShootP1.className = iShootP2.className = `fa ${ moves[4] }`).delay(250).do(x => {
        divShoot.classList.remove('current');
        divPlay.classList.add('current');
        let p1m = Math.floor(Math.random() * 5);
        let p2m = Math.floor(Math.random() * 5);
        let game = rpsls_1.RockPaperScissorsLizardSpock.play(p1m, p2m);
        iPlayP1.className = `fa ${ moves[p1m] }`;
        spanPlayResult.textContent = game.result;
        iPlayP2.className = `fa ${ moves[p2m] }`;
        switch (game.outcome) {
            case 0:
                iPlayP1.classList.add('draw');
                iPlayP2.classList.add('draw');
                spanResultsP1.classList.add('draw');
                spanResultsP2.classList.add('draw');
                break;
            case 1:
                iPlayP1.classList.add('win');
                iPlayP2.classList.add('lose');
                spanResultsP1.classList.add('win');
                spanResultsP2.classList.add('lose');
                ++p1Score;
                break;
            case 2:
                iPlayP1.classList.add('lose');
                iPlayP2.classList.add('win');
                spanResultsP1.classList.add('lose');
                spanResultsP2.classList.add('win');
                ++p2Score;
                break;
            default:
                break;
        }
    }).delay(2000).do(x => {
        divPlay.classList.remove('current');
        divResults.classList.add('current');
    }).delay(1000).do(x => {
        spanResultsP1Score.textContent = p1Score.toString();
        spanResultsP2Score.textContent = p2Score.toString();
    }).delay(750).do(x => divResults.classList.remove('current')).subscribe();
    

    return module.exports;
});
$__System.registerDynamic("12", ["13"], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var PromiseObservable_1 = $__require("13");
  exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
  

  return module.exports;
});
$__System.registerDynamic('14', ['5', '12'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('5');
  var fromPromise_1 = $__require('12');
  Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
  

  return module.exports;
});
$__System.registerDynamic('13', ['15', '5'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var root_1 = $__require('15');
    var Observable_1 = $__require('5');
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var PromiseObservable = function (_super) {
        __extends(PromiseObservable, _super);
        function PromiseObservable(promise, scheduler) {
            if (scheduler === void 0) {
                scheduler = null;
            }
            _super.call(this);
            this.promise = promise;
            this.scheduler = scheduler;
        }
        /**
         * @param promise
         * @param scheduler
         * @return {PromiseObservable}
         * @static true
         * @name fromPromise
         * @owner Observable
         */
        PromiseObservable.create = function (promise, scheduler) {
            if (scheduler === void 0) {
                scheduler = null;
            }
            return new PromiseObservable(promise, scheduler);
        };
        PromiseObservable.prototype._subscribe = function (subscriber) {
            var _this = this;
            var promise = this.promise;
            var scheduler = this.scheduler;
            if (scheduler == null) {
                if (this._isScalar) {
                    if (!subscriber.isUnsubscribed) {
                        subscriber.next(this.value);
                        subscriber.complete();
                    }
                } else {
                    promise.then(function (value) {
                        _this.value = value;
                        _this._isScalar = true;
                        if (!subscriber.isUnsubscribed) {
                            subscriber.next(value);
                            subscriber.complete();
                        }
                    }, function (err) {
                        if (!subscriber.isUnsubscribed) {
                            subscriber.error(err);
                        }
                    }).then(null, function (err) {
                        // escape the promise trap, throw unhandled errors
                        root_1.root.setTimeout(function () {
                            throw err;
                        });
                    });
                }
            } else {
                if (this._isScalar) {
                    if (!subscriber.isUnsubscribed) {
                        return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
                    }
                } else {
                    promise.then(function (value) {
                        _this.value = value;
                        _this._isScalar = true;
                        if (!subscriber.isUnsubscribed) {
                            subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                        }
                    }, function (err) {
                        if (!subscriber.isUnsubscribed) {
                            subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
                        }
                    }).then(null, function (err) {
                        // escape the promise trap, throw unhandled errors
                        root_1.root.setTimeout(function () {
                            throw err;
                        });
                    });
                }
            }
        };
        return PromiseObservable;
    }(Observable_1.Observable);
    exports.PromiseObservable = PromiseObservable;
    function dispatchNext(arg) {
        var value = arg.value,
            subscriber = arg.subscriber;
        if (!subscriber.isUnsubscribed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }
    function dispatchError(arg) {
        var err = arg.err,
            subscriber = arg.subscriber;
        if (!subscriber.isUnsubscribed) {
            subscriber.error(err);
        }
    }
    

    return module.exports;
});
$__System.registerDynamic('16', ['15', '17', '18', '5', '19', '1a', '1b'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var root_1 = $__require('15');
    var isObject_1 = $__require('17');
    var tryCatch_1 = $__require('18');
    var Observable_1 = $__require('5');
    var isFunction_1 = $__require('19');
    var iterator_1 = $__require('1a');
    var errorObject_1 = $__require('1b');
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var IteratorObservable = function (_super) {
        __extends(IteratorObservable, _super);
        function IteratorObservable(iterator, project, thisArg, scheduler) {
            _super.call(this);
            if (iterator == null) {
                throw new Error('iterator cannot be null.');
            }
            if (isObject_1.isObject(project)) {
                this.thisArg = project;
                this.scheduler = thisArg;
            } else if (isFunction_1.isFunction(project)) {
                this.project = project;
                this.thisArg = thisArg;
                this.scheduler = scheduler;
            } else if (project != null) {
                throw new Error('When provided, `project` must be a function.');
            }
            this.iterator = getIterator(iterator);
        }
        IteratorObservable.create = function (iterator, project, thisArg, scheduler) {
            return new IteratorObservable(iterator, project, thisArg, scheduler);
        };
        IteratorObservable.dispatch = function (state) {
            var index = state.index,
                hasError = state.hasError,
                thisArg = state.thisArg,
                project = state.project,
                iterator = state.iterator,
                subscriber = state.subscriber;
            if (hasError) {
                subscriber.error(state.error);
                return;
            }
            var result = iterator.next();
            if (result.done) {
                subscriber.complete();
                return;
            }
            if (project) {
                result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index);
                if (result === errorObject_1.errorObject) {
                    state.error = errorObject_1.errorObject.e;
                    state.hasError = true;
                } else {
                    subscriber.next(result);
                    state.index = index + 1;
                }
            } else {
                subscriber.next(result.value);
                state.index = index + 1;
            }
            if (subscriber.isUnsubscribed) {
                return;
            }
            this.schedule(state);
        };
        IteratorObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var _a = this,
                iterator = _a.iterator,
                project = _a.project,
                thisArg = _a.thisArg,
                scheduler = _a.scheduler;
            if (scheduler) {
                return scheduler.schedule(IteratorObservable.dispatch, 0, {
                    index: index, thisArg: thisArg, project: project, iterator: iterator, subscriber: subscriber
                });
            } else {
                do {
                    var result = iterator.next();
                    if (result.done) {
                        subscriber.complete();
                        break;
                    } else if (project) {
                        result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index++);
                        if (result === errorObject_1.errorObject) {
                            subscriber.error(errorObject_1.errorObject.e);
                            break;
                        }
                        subscriber.next(result);
                    } else {
                        subscriber.next(result.value);
                    }
                    if (subscriber.isUnsubscribed) {
                        break;
                    }
                } while (true);
            }
        };
        return IteratorObservable;
    }(Observable_1.Observable);
    exports.IteratorObservable = IteratorObservable;
    var StringIterator = function () {
        function StringIterator(str, idx, len) {
            if (idx === void 0) {
                idx = 0;
            }
            if (len === void 0) {
                len = str.length;
            }
            this.str = str;
            this.idx = idx;
            this.len = len;
        }
        StringIterator.prototype[iterator_1.$$iterator] = function () {
            return this;
        };
        StringIterator.prototype.next = function () {
            return this.idx < this.len ? {
                done: false,
                value: this.str.charAt(this.idx++)
            } : {
                done: true,
                value: undefined
            };
        };
        return StringIterator;
    }();
    var ArrayIterator = function () {
        function ArrayIterator(arr, idx, len) {
            if (idx === void 0) {
                idx = 0;
            }
            if (len === void 0) {
                len = toLength(arr);
            }
            this.arr = arr;
            this.idx = idx;
            this.len = len;
        }
        ArrayIterator.prototype[iterator_1.$$iterator] = function () {
            return this;
        };
        ArrayIterator.prototype.next = function () {
            return this.idx < this.len ? {
                done: false,
                value: this.arr[this.idx++]
            } : {
                done: true,
                value: undefined
            };
        };
        return ArrayIterator;
    }();
    function getIterator(obj) {
        var i = obj[iterator_1.$$iterator];
        if (!i && typeof obj === 'string') {
            return new StringIterator(obj);
        }
        if (!i && obj.length !== undefined) {
            return new ArrayIterator(obj);
        }
        if (!i) {
            throw new TypeError('Object is not iterable');
        }
        return obj[iterator_1.$$iterator]();
    }
    var maxSafeInteger = Math.pow(2, 53) - 1;
    function toLength(o) {
        var len = +o.length;
        if (isNaN(len)) {
            return 0;
        }
        if (len === 0 || !numberIsFinite(len)) {
            return len;
        }
        len = sign(len) * Math.floor(Math.abs(len));
        if (len <= 0) {
            return 0;
        }
        if (len > maxSafeInteger) {
            return maxSafeInteger;
        }
        return len;
    }
    function numberIsFinite(value) {
        return typeof value === 'number' && root_1.root.isFinite(value);
    }
    function sign(value) {
        var valueAsNumber = +value;
        if (valueAsNumber === 0) {
            return valueAsNumber;
        }
        if (isNaN(valueAsNumber)) {
            return valueAsNumber;
        }
        return valueAsNumber < 0 ? -1 : 1;
    }
    

    return module.exports;
});
$__System.registerDynamic("7", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function isScheduler(value) {
        return value && typeof value.schedule === 'function';
    }
    exports.isScheduler = isScheduler;
    

    return module.exports;
});
$__System.registerDynamic('1c', ['5', '1d', '1e', '7'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = $__require('5');
    var ScalarObservable_1 = $__require('1d');
    var EmptyObservable_1 = $__require('1e');
    var isScheduler_1 = $__require('7');
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var ArrayObservable = function (_super) {
        __extends(ArrayObservable, _super);
        function ArrayObservable(array, scheduler) {
            _super.call(this);
            this.array = array;
            this.scheduler = scheduler;
            if (!scheduler && array.length === 1) {
                this._isScalar = true;
                this.value = array[0];
            }
        }
        ArrayObservable.create = function (array, scheduler) {
            return new ArrayObservable(array, scheduler);
        };
        /**
         * Creates an Observable that emits some values you specify as arguments,
         * immediately one after the other, and then emits a complete notification.
         *
         * <span class="informal">Emits the arguments you provide, then completes.
         * </span>
         *
         * <img src="./img/of.png" width="100%">
         *
         * This static operator is useful for creating a simple Observable that only
         * emits the arguments given, and the complete notification thereafter. It can
         * be used for composing with other Observables, such as with {@link concat}.
         * By default, it uses a `null` Scheduler, which means the `next`
         * notifications are sent synchronously, although with a different Scheduler
         * it is possible to determine when those notifications will be delivered.
         *
         * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
         * var numbers = Rx.Observable.of(10, 20, 30);
         * var letters = Rx.Observable.of('a', 'b', 'c');
         * var interval = Rx.Observable.interval(1000);
         * var result = numbers.concat(letters).concat(interval);
         * result.subscribe(x => console.log(x));
         *
         * @see {@link create}
         * @see {@link empty}
         * @see {@link never}
         * @see {@link throw}
         *
         * @param {...T} values Arguments that represent `next` values to be emitted.
         * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
         * the emissions of the `next` notifications.
         * @return {Observable<T>} An Observable that emits each given input value.
         * @static true
         * @name of
         * @owner Observable
         */
        ArrayObservable.of = function () {
            var array = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                array[_i - 0] = arguments[_i];
            }
            var scheduler = array[array.length - 1];
            if (isScheduler_1.isScheduler(scheduler)) {
                array.pop();
            } else {
                scheduler = null;
            }
            var len = array.length;
            if (len > 1) {
                return new ArrayObservable(array, scheduler);
            } else if (len === 1) {
                return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
            } else {
                return new EmptyObservable_1.EmptyObservable(scheduler);
            }
        };
        ArrayObservable.dispatch = function (state) {
            var array = state.array,
                index = state.index,
                count = state.count,
                subscriber = state.subscriber;
            if (index >= count) {
                subscriber.complete();
                return;
            }
            subscriber.next(array[index]);
            if (subscriber.isUnsubscribed) {
                return;
            }
            state.index = index + 1;
            this.schedule(state);
        };
        ArrayObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var array = this.array;
            var count = array.length;
            var scheduler = this.scheduler;
            if (scheduler) {
                return scheduler.schedule(ArrayObservable.dispatch, 0, {
                    array: array, index: index, count: count, subscriber: subscriber
                });
            } else {
                for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
                    subscriber.next(array[i]);
                }
                subscriber.complete();
            }
        };
        return ArrayObservable;
    }(Observable_1.Observable);
    exports.ArrayObservable = ArrayObservable;
    

    return module.exports;
});
$__System.registerDynamic("1d", ["5"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = $__require("5");
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var ScalarObservable = function (_super) {
        __extends(ScalarObservable, _super);
        function ScalarObservable(value, scheduler) {
            _super.call(this);
            this.value = value;
            this.scheduler = scheduler;
            this._isScalar = true;
        }
        ScalarObservable.create = function (value, scheduler) {
            return new ScalarObservable(value, scheduler);
        };
        ScalarObservable.dispatch = function (state) {
            var done = state.done,
                value = state.value,
                subscriber = state.subscriber;
            if (done) {
                subscriber.complete();
                return;
            }
            subscriber.next(value);
            if (subscriber.isUnsubscribed) {
                return;
            }
            state.done = true;
            this.schedule(state);
        };
        ScalarObservable.prototype._subscribe = function (subscriber) {
            var value = this.value;
            var scheduler = this.scheduler;
            if (scheduler) {
                return scheduler.schedule(ScalarObservable.dispatch, 0, {
                    done: false, value: value, subscriber: subscriber
                });
            } else {
                subscriber.next(value);
                if (!subscriber.isUnsubscribed) {
                    subscriber.complete();
                }
            }
        };
        return ScalarObservable;
    }(Observable_1.Observable);
    exports.ScalarObservable = ScalarObservable;
    

    return module.exports;
});
$__System.registerDynamic("1e", ["5"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = $__require("5");
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var EmptyObservable = function (_super) {
        __extends(EmptyObservable, _super);
        function EmptyObservable(scheduler) {
            _super.call(this);
            this.scheduler = scheduler;
        }
        /**
         * Creates an Observable that emits no items to the Observer and immediately
         * emits a complete notification.
         *
         * <span class="informal">Just emits 'complete', and nothing else.
         * </span>
         *
         * <img src="./img/empty.png" width="100%">
         *
         * This static operator is useful for creating a simple Observable that only
         * emits the complete notification. It can be used for composing with other
         * Observables, such as in a {@link mergeMap}.
         *
         * @example <caption>Emit the number 7, then complete.</caption>
         * var result = Rx.Observable.empty().startWith(7);
         * result.subscribe(x => console.log(x));
         *
         * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
         * var interval = Rx.Observable.interval(1000);
         * var result = interval.mergeMap(x =>
         *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
         * );
         * result.subscribe(x => console.log(x));
         *
         * @see {@link create}
         * @see {@link never}
         * @see {@link of}
         * @see {@link throw}
         *
         * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
         * the emission of the complete notification.
         * @return {Observable} An "empty" Observable: emits only the complete
         * notification.
         * @static true
         * @name empty
         * @owner Observable
         */
        EmptyObservable.create = function (scheduler) {
            return new EmptyObservable(scheduler);
        };
        EmptyObservable.dispatch = function (arg) {
            var subscriber = arg.subscriber;
            subscriber.complete();
        };
        EmptyObservable.prototype._subscribe = function (subscriber) {
            var scheduler = this.scheduler;
            if (scheduler) {
                return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
            } else {
                subscriber.complete();
            }
        };
        return EmptyObservable;
    }(Observable_1.Observable);
    exports.EmptyObservable = EmptyObservable;
    

    return module.exports;
});
$__System.registerDynamic('1f', ['5', '1d', '1e'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = $__require('5');
    var ScalarObservable_1 = $__require('1d');
    var EmptyObservable_1 = $__require('1e');
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var ArrayLikeObservable = function (_super) {
        __extends(ArrayLikeObservable, _super);
        function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
            _super.call(this);
            this.arrayLike = arrayLike;
            this.scheduler = scheduler;
            if (!mapFn && !scheduler && arrayLike.length === 1) {
                this._isScalar = true;
                this.value = arrayLike[0];
            }
            if (mapFn) {
                this.mapFn = mapFn.bind(thisArg);
            }
        }
        ArrayLikeObservable.create = function (arrayLike, mapFn, thisArg, scheduler) {
            var length = arrayLike.length;
            if (length === 0) {
                return new EmptyObservable_1.EmptyObservable();
            } else if (length === 1 && !mapFn) {
                return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
            } else {
                return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
            }
        };
        ArrayLikeObservable.dispatch = function (state) {
            var arrayLike = state.arrayLike,
                index = state.index,
                length = state.length,
                mapFn = state.mapFn,
                subscriber = state.subscriber;
            if (subscriber.isUnsubscribed) {
                return;
            }
            if (index >= length) {
                subscriber.complete();
                return;
            }
            var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
            subscriber.next(result);
            state.index = index + 1;
            this.schedule(state);
        };
        ArrayLikeObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var _a = this,
                arrayLike = _a.arrayLike,
                mapFn = _a.mapFn,
                scheduler = _a.scheduler;
            var length = arrayLike.length;
            if (scheduler) {
                return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
                    arrayLike: arrayLike, index: index, length: length, mapFn: mapFn, subscriber: subscriber
                });
            } else {
                for (var i = 0; i < length && !subscriber.isUnsubscribed; i++) {
                    var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
                    subscriber.next(result);
                }
                subscriber.complete();
            }
        };
        return ArrayLikeObservable;
    }(Observable_1.Observable);
    exports.ArrayLikeObservable = ArrayLikeObservable;
    

    return module.exports;
});
$__System.registerDynamic('d', ['5'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var Observable_1 = $__require('5');
    /**
     * Represents a push-based event or value that an {@link Observable} can emit.
     * This class is particularly useful for operators that manage notifications,
     * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
     * others. Besides wrapping the actual delivered value, it also annotates it
     * with metadata of, for instance, what type of push message it is (`next`,
     * `error`, or `complete`).
     *
     * @see {@link materialize}
     * @see {@link dematerialize}
     * @see {@link observeOn}
     *
     * @class Notification<T>
     */
    var Notification = function () {
        function Notification(kind, value, exception) {
            this.kind = kind;
            this.value = value;
            this.exception = exception;
            this.hasValue = kind === 'N';
        }
        /**
         * Delivers to the given `observer` the value wrapped by this Notification.
         * @param {Observer} observer
         * @return
         */
        Notification.prototype.observe = function (observer) {
            switch (this.kind) {
                case 'N':
                    return observer.next && observer.next(this.value);
                case 'E':
                    return observer.error && observer.error(this.exception);
                case 'C':
                    return observer.complete && observer.complete();
            }
        };
        /**
         * Given some {@link Observer} callbacks, deliver the value represented by the
         * current Notification to the correctly corresponding callback.
         * @param {function(value: T): void} next An Observer `next` callback.
         * @param {function(err: any): void} [error] An Observer `error` callback.
         * @param {function(): void} [complete] An Observer `complete` callback.
         * @return {any}
         */
        Notification.prototype.do = function (next, error, complete) {
            var kind = this.kind;
            switch (kind) {
                case 'N':
                    return next && next(this.value);
                case 'E':
                    return error && error(this.exception);
                case 'C':
                    return complete && complete();
            }
        };
        /**
         * Takes an Observer or its individual callback functions, and calls `observe`
         * or `do` methods accordingly.
         * @param {Observer|function(value: T): void} nextOrObserver An Observer or
         * the `next` callback.
         * @param {function(err: any): void} [error] An Observer `error` callback.
         * @param {function(): void} [complete] An Observer `complete` callback.
         * @return {any}
         */
        Notification.prototype.accept = function (nextOrObserver, error, complete) {
            if (nextOrObserver && typeof nextOrObserver.next === 'function') {
                return this.observe(nextOrObserver);
            } else {
                return this.do(nextOrObserver, error, complete);
            }
        };
        /**
         * Returns a simple Observable that just delivers the notification represented
         * by this Notification instance.
         * @return {any}
         */
        Notification.prototype.toObservable = function () {
            var kind = this.kind;
            switch (kind) {
                case 'N':
                    return Observable_1.Observable.of(this.value);
                case 'E':
                    return Observable_1.Observable.throw(this.exception);
                case 'C':
                    return Observable_1.Observable.empty();
            }
        };
        /**
         * A shortcut to create a Notification instance of the type `next` from a
         * given value.
         * @param {T} value The `next` value.
         * @return {Notification<T>} The "next" Notification representing the
         * argument.
         */
        Notification.createNext = function (value) {
            if (typeof value !== 'undefined') {
                return new Notification('N', value);
            }
            return this.undefinedValueNotification;
        };
        /**
         * A shortcut to create a Notification instance of the type `error` from a
         * given error.
         * @param {any} [err] The `error` exception.
         * @return {Notification<T>} The "error" Notification representing the
         * argument.
         */
        Notification.createError = function (err) {
            return new Notification('E', undefined, err);
        };
        /**
         * A shortcut to create a Notification instance of the type `complete`.
         * @return {Notification<any>} The valueless "complete" Notification.
         */
        Notification.createComplete = function () {
            return this.completeNotification;
        };
        Notification.completeNotification = new Notification('C');
        Notification.undefinedValueNotification = new Notification('N', undefined);
        return Notification;
    }();
    exports.Notification = Notification;
    

    return module.exports;
});
$__System.registerDynamic('20', ['c', 'd'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require('c');
    var Notification_1 = $__require('d');
    /**
     * @see {@link Notification}
     *
     * @param scheduler
     * @param delay
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method observeOn
     * @owner Observable
     */
    function observeOn(scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this.lift(new ObserveOnOperator(scheduler, delay));
    }
    exports.observeOn = observeOn;
    var ObserveOnOperator = function () {
        function ObserveOnOperator(scheduler, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            this.scheduler = scheduler;
            this.delay = delay;
        }
        ObserveOnOperator.prototype.call = function (subscriber, source) {
            return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
        };
        return ObserveOnOperator;
    }();
    exports.ObserveOnOperator = ObserveOnOperator;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var ObserveOnSubscriber = function (_super) {
        __extends(ObserveOnSubscriber, _super);
        function ObserveOnSubscriber(destination, scheduler, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            _super.call(this, destination);
            this.scheduler = scheduler;
            this.delay = delay;
        }
        ObserveOnSubscriber.dispatch = function (arg) {
            var notification = arg.notification,
                destination = arg.destination;
            notification.observe(destination);
        };
        ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
            this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
        };
        ObserveOnSubscriber.prototype._next = function (value) {
            this.scheduleMessage(Notification_1.Notification.createNext(value));
        };
        ObserveOnSubscriber.prototype._error = function (err) {
            this.scheduleMessage(Notification_1.Notification.createError(err));
        };
        ObserveOnSubscriber.prototype._complete = function () {
            this.scheduleMessage(Notification_1.Notification.createComplete());
        };
        return ObserveOnSubscriber;
    }(Subscriber_1.Subscriber);
    exports.ObserveOnSubscriber = ObserveOnSubscriber;
    var ObserveOnMessage = function () {
        function ObserveOnMessage(notification, destination) {
            this.notification = notification;
            this.destination = destination;
        }
        return ObserveOnMessage;
    }();
    exports.ObserveOnMessage = ObserveOnMessage;
    

    return module.exports;
});
$__System.registerDynamic('21', ['22', '19', '23', '7', '13', '16', '1c', '1f', '24', '1a', '5', '20'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isArray_1 = $__require('22');
    var isFunction_1 = $__require('19');
    var isPromise_1 = $__require('23');
    var isScheduler_1 = $__require('7');
    var PromiseObservable_1 = $__require('13');
    var IteratorObservable_1 = $__require('16');
    var ArrayObservable_1 = $__require('1c');
    var ArrayLikeObservable_1 = $__require('1f');
    var observable_1 = $__require('24');
    var iterator_1 = $__require('1a');
    var Observable_1 = $__require('5');
    var observeOn_1 = $__require('20');
    var isArrayLike = function (x) {
        return x && typeof x.length === 'number';
    };
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var FromObservable = function (_super) {
        __extends(FromObservable, _super);
        function FromObservable(ish, scheduler) {
            _super.call(this, null);
            this.ish = ish;
            this.scheduler = scheduler;
        }
        FromObservable.create = function (ish, mapFnOrScheduler, thisArg, lastScheduler) {
            var scheduler = null;
            var mapFn = null;
            if (isFunction_1.isFunction(mapFnOrScheduler)) {
                scheduler = lastScheduler || null;
                mapFn = mapFnOrScheduler;
            } else if (isScheduler_1.isScheduler(scheduler)) {
                scheduler = mapFnOrScheduler;
            }
            if (ish != null) {
                if (typeof ish[observable_1.$$observable] === 'function') {
                    if (ish instanceof Observable_1.Observable && !scheduler) {
                        return ish;
                    }
                    return new FromObservable(ish, scheduler);
                } else if (isArray_1.isArray(ish)) {
                    return new ArrayObservable_1.ArrayObservable(ish, scheduler);
                } else if (isPromise_1.isPromise(ish)) {
                    return new PromiseObservable_1.PromiseObservable(ish, scheduler);
                } else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
                    return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
                } else if (isArrayLike(ish)) {
                    return new ArrayLikeObservable_1.ArrayLikeObservable(ish, mapFn, thisArg, scheduler);
                }
            }
            throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
        };
        FromObservable.prototype._subscribe = function (subscriber) {
            var ish = this.ish;
            var scheduler = this.scheduler;
            if (scheduler == null) {
                return ish[observable_1.$$observable]().subscribe(subscriber);
            } else {
                return ish[observable_1.$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
            }
        };
        return FromObservable;
    }(Observable_1.Observable);
    exports.FromObservable = FromObservable;
    

    return module.exports;
});
$__System.registerDynamic("25", ["21"], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var FromObservable_1 = $__require("21");
  exports.from = FromObservable_1.FromObservable.create;
  

  return module.exports;
});
$__System.registerDynamic('26', ['5', '25'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('5');
  var from_1 = $__require('25');
  Observable_1.Observable.from = from_1.from;
  

  return module.exports;
});
$__System.registerDynamic("27", ["5"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = $__require("5");
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var RangeObservable = function (_super) {
        __extends(RangeObservable, _super);
        function RangeObservable(start, count, scheduler) {
            _super.call(this);
            this.start = start;
            this._count = count;
            this.scheduler = scheduler;
        }
        /**
         * Creates an Observable that emits a sequence of numbers within a specified
         * range.
         *
         * <span class="informal">Emits a sequence of numbers in a range.</span>
         *
         * <img src="./img/range.png" width="100%">
         *
         * `range` operator emits a range of sequential integers, in order, where you
         * select the `start` of the range and its `length`. By default, uses no
         * Scheduler and just delivers the notifications synchronously, but may use
         * an optional Scheduler to regulate those deliveries.
         *
         * @example <caption>Emits the numbers 1 to 10</caption>
         * var numbers = Rx.Observable.range(1, 10);
         * numbers.subscribe(x => console.log(x));
         *
         * @see {@link timer}
         * @see {@link interval}
         *
         * @param {number} [start=0] The value of the first integer in the sequence.
         * @param {number} [count=0] The number of sequential integers to generate.
         * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
         * the emissions of the notifications.
         * @return {Observable} An Observable of numbers that emits a finite range of
         * sequential integers.
         * @static true
         * @name range
         * @owner Observable
         */
        RangeObservable.create = function (start, count, scheduler) {
            if (start === void 0) {
                start = 0;
            }
            if (count === void 0) {
                count = 0;
            }
            return new RangeObservable(start, count, scheduler);
        };
        RangeObservable.dispatch = function (state) {
            var start = state.start,
                index = state.index,
                count = state.count,
                subscriber = state.subscriber;
            if (index >= count) {
                subscriber.complete();
                return;
            }
            subscriber.next(start);
            if (subscriber.isUnsubscribed) {
                return;
            }
            state.index = index + 1;
            state.start = start + 1;
            this.schedule(state);
        };
        RangeObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var start = this.start;
            var count = this._count;
            var scheduler = this.scheduler;
            if (scheduler) {
                return scheduler.schedule(RangeObservable.dispatch, 0, {
                    index: index, count: count, start: start, subscriber: subscriber
                });
            } else {
                do {
                    if (index++ >= count) {
                        subscriber.complete();
                        break;
                    }
                    subscriber.next(start++);
                    if (subscriber.isUnsubscribed) {
                        break;
                    }
                } while (true);
            }
        };
        return RangeObservable;
    }(Observable_1.Observable);
    exports.RangeObservable = RangeObservable;
    

    return module.exports;
});
$__System.registerDynamic("28", ["27"], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var RangeObservable_1 = $__require("27");
  exports.range = RangeObservable_1.RangeObservable.create;
  

  return module.exports;
});
$__System.registerDynamic('29', ['5', '28'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('5');
  var range_1 = $__require('28');
  Observable_1.Observable.range = range_1.range;
  

  return module.exports;
});
$__System.registerDynamic('2a', ['2b', '2c'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var subscribeToResult_1 = $__require('2b');
    var OuterSubscriber_1 = $__require('2c');
    /**
     * Projects each source value to an Observable which is merged in the output
     * Observable.
     *
     * <span class="informal">Maps each value to an Observable, then flattens all of
     * these inner Observables using {@link mergeAll}.</span>
     *
     * <img src="./img/mergeMap.png" width="100%">
     *
     * Returns an Observable that emits items based on applying a function that you
     * supply to each item emitted by the source Observable, where that function
     * returns an Observable, and then merging those resulting Observables and
     * emitting the results of this merger.
     *
     * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
     * var letters = Rx.Observable.of('a', 'b', 'c');
     * var result = letters.mergeMap(x =>
     *   Rx.Observable.interval(1000).map(i => x+i)
     * );
     * result.subscribe(x => console.log(x));
     *
     * @see {@link concatMap}
     * @see {@link exhaustMap}
     * @see {@link merge}
     * @see {@link mergeAll}
     * @see {@link mergeMapTo}
     * @see {@link mergeScan}
     * @see {@link switchMap}
     *
     * @param {function(value: T, ?index: number): Observable} project A function
     * that, when applied to an item emitted by the source Observable, returns an
     * Observable.
     * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
     * A function to produce the value on the output Observable based on the values
     * and the indices of the source (outer) emission and the inner Observable
     * emission. The arguments passed to this function are:
     * - `outerValue`: the value that came from the source
     * - `innerValue`: the value that came from the projected Observable
     * - `outerIndex`: the "index" of the value that came from the source
     * - `innerIndex`: the "index" of the value from the projected Observable
     * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
     * Observables being subscribed to concurrently.
     * @return {Observable} An Observable that emits the result of applying the
     * projection function (and the optional `resultSelector`) to each item emitted
     * by the source Observable and merging the results of the Observables obtained
     * from this transformation.
     * @method mergeMap
     * @owner Observable
     */
    function mergeMap(project, resultSelector, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        if (typeof resultSelector === 'number') {
            concurrent = resultSelector;
            resultSelector = null;
        }
        return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
    }
    exports.mergeMap = mergeMap;
    var MergeMapOperator = function () {
        function MergeMapOperator(project, resultSelector, concurrent) {
            if (concurrent === void 0) {
                concurrent = Number.POSITIVE_INFINITY;
            }
            this.project = project;
            this.resultSelector = resultSelector;
            this.concurrent = concurrent;
        }
        MergeMapOperator.prototype.call = function (observer, source) {
            return source._subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
        };
        return MergeMapOperator;
    }();
    exports.MergeMapOperator = MergeMapOperator;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var MergeMapSubscriber = function (_super) {
        __extends(MergeMapSubscriber, _super);
        function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
            if (concurrent === void 0) {
                concurrent = Number.POSITIVE_INFINITY;
            }
            _super.call(this, destination);
            this.project = project;
            this.resultSelector = resultSelector;
            this.concurrent = concurrent;
            this.hasCompleted = false;
            this.buffer = [];
            this.active = 0;
            this.index = 0;
        }
        MergeMapSubscriber.prototype._next = function (value) {
            if (this.active < this.concurrent) {
                this._tryNext(value);
            } else {
                this.buffer.push(value);
            }
        };
        MergeMapSubscriber.prototype._tryNext = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.active++;
            this._innerSub(result, value, index);
        };
        MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
            this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
        };
        MergeMapSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.active === 0 && this.buffer.length === 0) {
                this.destination.complete();
            }
        };
        MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            if (this.resultSelector) {
                this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
            } else {
                this.destination.next(innerValue);
            }
        };
        MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
            var result;
            try {
                result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            this.remove(innerSub);
            this.active--;
            if (buffer.length > 0) {
                this._next(buffer.shift());
            } else if (this.active === 0 && this.hasCompleted) {
                this.destination.complete();
            }
        };
        return MergeMapSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
    exports.MergeMapSubscriber = MergeMapSubscriber;
    

    return module.exports;
});
$__System.registerDynamic('2d', ['5', '2a'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('5');
  var mergeMap_1 = $__require('2a');
  Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
  Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
  

  return module.exports;
});
$__System.registerDynamic('2e', ['c'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require('c');
    /**
     * Returns an Observable that applies a specified accumulator function to the first item emitted by a source Observable,
     * then feeds the result of that function along with the second item emitted by the source Observable into the same
     * function, and so on until all items have been emitted by the source Observable, and emits the final result from
     * the final call to your function as its sole item.
     * This technique, which is called "reduce" here, is sometimes called "aggregate," "fold," "accumulate," "compress," or
     * "inject" in other programming contexts.
     *
     * <img src="./img/reduce.png" width="100%">
     *
     * @param {initialValue} the initial (seed) accumulator value
     * @param {accumulator} an accumulator function to be invoked on each item emitted by the source Observable, the
     * result of which will be used in the next accumulator call.
     * @return {Observable} an Observable that emits a single item that is the result of accumulating the output from the
     * items emitted by the source Observable.
     * @method reduce
     * @owner Observable
     */
    function reduce(project, seed) {
        return this.lift(new ReduceOperator(project, seed));
    }
    exports.reduce = reduce;
    var ReduceOperator = function () {
        function ReduceOperator(project, seed) {
            this.project = project;
            this.seed = seed;
        }
        ReduceOperator.prototype.call = function (subscriber, source) {
            return source._subscribe(new ReduceSubscriber(subscriber, this.project, this.seed));
        };
        return ReduceOperator;
    }();
    exports.ReduceOperator = ReduceOperator;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var ReduceSubscriber = function (_super) {
        __extends(ReduceSubscriber, _super);
        function ReduceSubscriber(destination, project, seed) {
            _super.call(this, destination);
            this.hasValue = false;
            this.acc = seed;
            this.project = project;
            this.hasSeed = typeof seed !== 'undefined';
        }
        ReduceSubscriber.prototype._next = function (value) {
            if (this.hasValue || (this.hasValue = this.hasSeed)) {
                this._tryReduce(value);
            } else {
                this.acc = value;
                this.hasValue = true;
            }
        };
        ReduceSubscriber.prototype._tryReduce = function (value) {
            var result;
            try {
                result = this.project(this.acc, value);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.acc = result;
        };
        ReduceSubscriber.prototype._complete = function () {
            if (this.hasValue || this.hasSeed) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        };
        return ReduceSubscriber;
    }(Subscriber_1.Subscriber);
    exports.ReduceSubscriber = ReduceSubscriber;
    

    return module.exports;
});
$__System.registerDynamic('2f', ['5', '2e'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('5');
  var reduce_1 = $__require('2e');
  Observable_1.Observable.prototype.reduce = reduce_1.reduce;
  

  return module.exports;
});
$__System.registerDynamic('30', ['c'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require('c');
    /**
     * Applies a given `project` function to each value emitted by the source
     * Observable, and emits the resulting values as an Observable.
     *
     * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
     * it passes each source value through a transformation function to get
     * corresponding output values.</span>
     *
     * <img src="./img/map.png" width="100%">
     *
     * Similar to the well known `Array.prototype.map` function, this operator
     * applies a projection to each value and emits that projection in the output
     * Observable.
     *
     * @example <caption>Map every every click to the clientX position of that click</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var positions = clicks.map(ev => ev.clientX);
     * positions.subscribe(x => console.log(x));
     *
     * @see {@link mapTo}
     * @see {@link pluck}
     *
     * @param {function(value: T, index: number): R} project The function to apply
     * to each `value` emitted by the source Observable. The `index` parameter is
     * the number `i` for the i-th emission that has happened since the
     * subscription, starting from the number `0`.
     * @param {any} [thisArg] An optional argument to define what `this` is in the
     * `project` function.
     * @return {Observable<R>} An Observable that emits the values from the source
     * Observable transformed by the given `project` function.
     * @method map
     * @owner Observable
     */
    function map(project, thisArg) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return this.lift(new MapOperator(project, thisArg));
    }
    exports.map = map;
    var MapOperator = function () {
        function MapOperator(project, thisArg) {
            this.project = project;
            this.thisArg = thisArg;
        }
        MapOperator.prototype.call = function (subscriber, source) {
            return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        };
        return MapOperator;
    }();
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var MapSubscriber = function (_super) {
        __extends(MapSubscriber, _super);
        function MapSubscriber(destination, project, thisArg) {
            _super.call(this, destination);
            this.project = project;
            this.count = 0;
            this.thisArg = thisArg || this;
        }
        // NOTE: This looks unoptimized, but it's actually purposefully NOT
        // using try/catch optimizations.
        MapSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.project.call(this.thisArg, value, this.count++);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return MapSubscriber;
    }(Subscriber_1.Subscriber);
    

    return module.exports;
});
$__System.registerDynamic('31', ['5', '30'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('5');
  var map_1 = $__require('30');
  Observable_1.Observable.prototype.map = map_1.map;
  

  return module.exports;
});
$__System.registerDynamic("32", ["33"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1 = $__require("33");
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SubjectSubscription = function (_super) {
        __extends(SubjectSubscription, _super);
        function SubjectSubscription(subject, observer) {
            _super.call(this);
            this.subject = subject;
            this.observer = observer;
            this.isUnsubscribed = false;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.isUnsubscribed) {
                return;
            }
            this.isUnsubscribed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;
            if (!observers || observers.length === 0 || subject.isUnsubscribed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.observer);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    }(Subscription_1.Subscription);
    exports.SubjectSubscription = SubjectSubscription;
    

    return module.exports;
});
$__System.registerDynamic("34", [], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  function throwError(e) {
    throw e;
  }
  exports.throwError = throwError;
  

  return module.exports;
});
$__System.registerDynamic('35', [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when an action is invalid because the object has been
     * unsubscribed.
     *
     * @see {@link Subject}
     * @see {@link BehaviorSubject}
     *
     * @class ObjectUnsubscribedError
     */
    var ObjectUnsubscribedError = function (_super) {
        __extends(ObjectUnsubscribedError, _super);
        function ObjectUnsubscribedError() {
            _super.call(this, 'object unsubscribed');
            this.name = 'ObjectUnsubscribedError';
        }
        return ObjectUnsubscribedError;
    }(Error);
    exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
    

    return module.exports;
});
$__System.registerDynamic('36', ['5', 'c', '33', '32', '37', '34', '35'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = $__require('5');
    var Subscriber_1 = $__require('c');
    var Subscription_1 = $__require('33');
    var SubjectSubscription_1 = $__require('32');
    var rxSubscriber_1 = $__require('37');
    var throwError_1 = $__require('34');
    var ObjectUnsubscribedError_1 = $__require('35');
    /**
     * @class Subject<T>
     */
    var Subject = function (_super) {
        __extends(Subject, _super);
        function Subject(destination, source) {
            _super.call(this);
            this.destination = destination;
            this.source = source;
            this.observers = [];
            this.isUnsubscribed = false;
            this.isStopped = false;
            this.hasErrored = false;
            this.dispatching = false;
            this.hasCompleted = false;
            this.source = source;
        }
        Subject.prototype.lift = function (operator) {
            var subject = new Subject(this.destination || this, this);
            subject.operator = operator;
            return subject;
        };
        Subject.prototype.add = function (subscription) {
            return Subscription_1.Subscription.prototype.add.call(this, subscription);
        };
        Subject.prototype.remove = function (subscription) {
            Subscription_1.Subscription.prototype.remove.call(this, subscription);
        };
        Subject.prototype.unsubscribe = function () {
            Subscription_1.Subscription.prototype.unsubscribe.call(this);
        };
        Subject.prototype._subscribe = function (subscriber) {
            if (this.source) {
                return this.source.subscribe(subscriber);
            } else {
                if (subscriber.isUnsubscribed) {
                    return;
                } else if (this.hasErrored) {
                    return subscriber.error(this.errorValue);
                } else if (this.hasCompleted) {
                    return subscriber.complete();
                }
                this.throwIfUnsubscribed();
                var subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
                this.observers.push(subscriber);
                return subscription;
            }
        };
        Subject.prototype._unsubscribe = function () {
            this.source = null;
            this.isStopped = true;
            this.observers = null;
            this.destination = null;
        };
        Subject.prototype.next = function (value) {
            this.throwIfUnsubscribed();
            if (this.isStopped) {
                return;
            }
            this.dispatching = true;
            this._next(value);
            this.dispatching = false;
            if (this.hasErrored) {
                this._error(this.errorValue);
            } else if (this.hasCompleted) {
                this._complete();
            }
        };
        Subject.prototype.error = function (err) {
            this.throwIfUnsubscribed();
            if (this.isStopped) {
                return;
            }
            this.isStopped = true;
            this.hasErrored = true;
            this.errorValue = err;
            if (this.dispatching) {
                return;
            }
            this._error(err);
        };
        Subject.prototype.complete = function () {
            this.throwIfUnsubscribed();
            if (this.isStopped) {
                return;
            }
            this.isStopped = true;
            this.hasCompleted = true;
            if (this.dispatching) {
                return;
            }
            this._complete();
        };
        Subject.prototype.asObservable = function () {
            var observable = new SubjectObservable(this);
            return observable;
        };
        Subject.prototype._next = function (value) {
            if (this.destination) {
                this.destination.next(value);
            } else {
                this._finalNext(value);
            }
        };
        Subject.prototype._finalNext = function (value) {
            var index = -1;
            var observers = this.observers.slice(0);
            var len = observers.length;
            while (++index < len) {
                observers[index].next(value);
            }
        };
        Subject.prototype._error = function (err) {
            if (this.destination) {
                this.destination.error(err);
            } else {
                this._finalError(err);
            }
        };
        Subject.prototype._finalError = function (err) {
            var index = -1;
            var observers = this.observers;
            // optimization to block our SubjectSubscriptions from
            // splicing themselves out of the observers list one by one.
            this.observers = null;
            this.isUnsubscribed = true;
            if (observers) {
                var len = observers.length;
                while (++index < len) {
                    observers[index].error(err);
                }
            }
            this.isUnsubscribed = false;
            this.unsubscribe();
        };
        Subject.prototype._complete = function () {
            if (this.destination) {
                this.destination.complete();
            } else {
                this._finalComplete();
            }
        };
        Subject.prototype._finalComplete = function () {
            var index = -1;
            var observers = this.observers;
            // optimization to block our SubjectSubscriptions from
            // splicing themselves out of the observers list one by one.
            this.observers = null;
            this.isUnsubscribed = true;
            if (observers) {
                var len = observers.length;
                while (++index < len) {
                    observers[index].complete();
                }
            }
            this.isUnsubscribed = false;
            this.unsubscribe();
        };
        Subject.prototype.throwIfUnsubscribed = function () {
            if (this.isUnsubscribed) {
                throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
            }
        };
        Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
            return new Subscriber_1.Subscriber(this);
        };
        Subject.create = function (destination, source) {
            return new Subject(destination, source);
        };
        return Subject;
    }(Observable_1.Observable);
    exports.Subject = Subject;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SubjectObservable = function (_super) {
        __extends(SubjectObservable, _super);
        function SubjectObservable(source) {
            _super.call(this);
            this.source = source;
        }
        return SubjectObservable;
    }(Observable_1.Observable);
    

    return module.exports;
});
$__System.registerDynamic("2c", ["c"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require("c");
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var OuterSubscriber = function (_super) {
        __extends(OuterSubscriber, _super);
        function OuterSubscriber() {
            _super.apply(this, arguments);
        }
        OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        OuterSubscriber.prototype.notifyError = function (error, innerSub) {
            this.destination.error(error);
        };
        OuterSubscriber.prototype.notifyComplete = function (innerSub) {
            this.destination.complete();
        };
        return OuterSubscriber;
    }(Subscriber_1.Subscriber);
    exports.OuterSubscriber = OuterSubscriber;
    

    return module.exports;
});
$__System.registerDynamic('23', [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function isPromise(value) {
        return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }
    exports.isPromise = isPromise;
    

    return module.exports;
});
$__System.registerDynamic('1a', ['15'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('15');
    var Symbol = root_1.root.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.iterator) {
            exports.$$iterator = Symbol.iterator;
        } else if (typeof Symbol.for === 'function') {
            exports.$$iterator = Symbol.for('iterator');
        }
    } else {
        if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
            // Bug for mozilla version
            exports.$$iterator = '@@iterator';
        } else if (root_1.root.Map) {
            // es6-shim specific logic
            var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
                    exports.$$iterator = key;
                    break;
                }
            }
        } else {
            exports.$$iterator = '@@iterator';
        }
    }
    

    return module.exports;
});
$__System.registerDynamic("38", ["c"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require("c");
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var InnerSubscriber = function (_super) {
        __extends(InnerSubscriber, _super);
        function InnerSubscriber(parent, outerValue, outerIndex) {
            _super.call(this);
            this.parent = parent;
            this.outerValue = outerValue;
            this.outerIndex = outerIndex;
            this.index = 0;
        }
        InnerSubscriber.prototype._next = function (value) {
            this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
        };
        InnerSubscriber.prototype._error = function (error) {
            this.parent.notifyError(error, this);
            this.unsubscribe();
        };
        InnerSubscriber.prototype._complete = function () {
            this.parent.notifyComplete(this);
            this.unsubscribe();
        };
        return InnerSubscriber;
    }(Subscriber_1.Subscriber);
    exports.InnerSubscriber = InnerSubscriber;
    

    return module.exports;
});
$__System.registerDynamic('2b', ['15', '22', '23', '5', '1a', '24', '38'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('15');
    var isArray_1 = $__require('22');
    var isPromise_1 = $__require('23');
    var Observable_1 = $__require('5');
    var iterator_1 = $__require('1a');
    var observable_1 = $__require('24');
    var InnerSubscriber_1 = $__require('38');
    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
        var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
        if (destination.isUnsubscribed) {
            return;
        }
        if (result instanceof Observable_1.Observable) {
            if (result._isScalar) {
                destination.next(result.value);
                destination.complete();
                return;
            } else {
                return result.subscribe(destination);
            }
        }
        if (isArray_1.isArray(result)) {
            for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
                destination.next(result[i]);
            }
            if (!destination.isUnsubscribed) {
                destination.complete();
            }
        } else if (isPromise_1.isPromise(result)) {
            result.then(function (value) {
                if (!destination.isUnsubscribed) {
                    destination.next(value);
                    destination.complete();
                }
            }, function (err) {
                return destination.error(err);
            }).then(null, function (err) {
                // Escaping the Promise trap: globally throw unhandled errors
                root_1.root.setTimeout(function () {
                    throw err;
                });
            });
            return destination;
        } else if (typeof result[iterator_1.$$iterator] === 'function') {
            for (var _i = 0, _a = result; _i < _a.length; _i++) {
                var item = _a[_i];
                destination.next(item);
                if (destination.isUnsubscribed) {
                    break;
                }
            }
            if (!destination.isUnsubscribed) {
                destination.complete();
            }
        } else if (typeof result[observable_1.$$observable] === 'function') {
            var obs = result[observable_1.$$observable]();
            if (typeof obs.subscribe !== 'function') {
                destination.error('invalid observable');
            } else {
                return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
            }
        } else {
            destination.error(new TypeError('unknown type returned'));
        }
    }
    exports.subscribeToResult = subscribeToResult;
    

    return module.exports;
});
$__System.registerDynamic('39', ['36', '18', '1b', '2c', '2b'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1 = $__require('36');
    var tryCatch_1 = $__require('18');
    var errorObject_1 = $__require('1b');
    var OuterSubscriber_1 = $__require('2c');
    var subscribeToResult_1 = $__require('2b');
    /**
     * Returns an Observable that emits the same values as the source observable with the exception of an `error`.
     * An `error` will cause the emission of the Throwable that cause the error to the Observable returned from
     * notificationHandler. If that Observable calls onComplete or `error` then retry will call `complete` or `error`
     * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
     * Scheduler.
     *
     * <img src="./img/retryWhen.png" width="100%">
     *
     * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
     * aborting the retry.
     * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
     * @return {Observable} the source Observable modified with retry logic.
     * @method retryWhen
     * @owner Observable
     */
    function retryWhen(notifier) {
        return this.lift(new RetryWhenOperator(notifier, this));
    }
    exports.retryWhen = retryWhen;
    var RetryWhenOperator = function () {
        function RetryWhenOperator(notifier, source) {
            this.notifier = notifier;
            this.source = source;
        }
        RetryWhenOperator.prototype.call = function (subscriber, source) {
            return source._subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
        };
        return RetryWhenOperator;
    }();
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var RetryWhenSubscriber = function (_super) {
        __extends(RetryWhenSubscriber, _super);
        function RetryWhenSubscriber(destination, notifier, source) {
            _super.call(this, destination);
            this.notifier = notifier;
            this.source = source;
        }
        RetryWhenSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var errors = this.errors;
                var retries = this.retries;
                var retriesSubscription = this.retriesSubscription;
                if (!retries) {
                    errors = new Subject_1.Subject();
                    retries = tryCatch_1.tryCatch(this.notifier)(errors);
                    if (retries === errorObject_1.errorObject) {
                        return _super.prototype.error.call(this, errorObject_1.errorObject.e);
                    }
                    retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
                } else {
                    this.errors = null;
                    this.retriesSubscription = null;
                }
                this.unsubscribe();
                this.isUnsubscribed = false;
                this.errors = errors;
                this.retries = retries;
                this.retriesSubscription = retriesSubscription;
                errors.next(err);
            }
        };
        RetryWhenSubscriber.prototype._unsubscribe = function () {
            var _a = this,
                errors = _a.errors,
                retriesSubscription = _a.retriesSubscription;
            if (errors) {
                errors.unsubscribe();
                this.errors = null;
            }
            if (retriesSubscription) {
                retriesSubscription.unsubscribe();
                this.retriesSubscription = null;
            }
            this.retries = null;
        };
        RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var _a = this,
                errors = _a.errors,
                retries = _a.retries,
                retriesSubscription = _a.retriesSubscription;
            this.errors = null;
            this.retries = null;
            this.retriesSubscription = null;
            this.unsubscribe();
            this.isStopped = false;
            this.isUnsubscribed = false;
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            this.source.subscribe(this);
        };
        return RetryWhenSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
    

    return module.exports;
});
$__System.registerDynamic('3a', ['5', '39'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('5');
  var retryWhen_1 = $__require('39');
  Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
  

  return module.exports;
});
$__System.registerDynamic('3b', ['5', '14', '26', '29', '2d', '2f', '31', '3a'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    const Observable_1 = $__require('5');
    $__require('14');
    $__require('26');
    $__require('29');
    $__require('2d');
    $__require('2f');
    $__require('31');
    $__require('3a');
    let [spanNumRepo, spanNumCommit, spanNumAdd, spanNumDel, spanNumChurn, spanSize] = document.querySelectorAll('#github span');
    let user = 'tdillon';
    let requestInit = { cache: 'no-cache' }; //don't cache fetches.  stats api may give 202 on first hit 
    Observable_1.Observable.range(1, 1).mergeMap(() => Observable_1.Observable.fromPromise(fetch(`https://api.github.com/users/${ user }/repos`, requestInit))).mergeMap(r => {
        if (r.status !== 200) {
            throw r;
        }return r.json();
    }).retryWhen(error => error.delay(5000)).mergeMap(repos => Observable_1.Observable.from(repos)).mergeMap(repo => Observable_1.Observable.range(1, 1).mergeMap(() => Observable_1.Observable.fromPromise(fetch(`https://api.github.com/repos/${ user }/${ repo.name }/stats/contributors`, requestInit))).mergeMap(r => {
        if (r.status !== 200) {
            throw r;
        }return r.json();
    }).retryWhen(error => error.delay(5000)).map(urs => {
        let stats = urs.find(s => s.author.login === user);stats.size = repo.size;return stats;
    })).reduce((acc, cur) => {
        acc.a += cur.weeks.reduce((a, c) => a += c.a, 0); //total # of adds for this repo
        acc.c += cur.total; //total # of commits for this repo
        acc.d += cur.weeks.reduce((a, c) => a += c.d, 0); //total # of deletes for this repo
        acc.r += 1; //add 1 to the total # of repos
        acc.s += cur.size; //LOC for this repo
        return acc;
    }, { r: 0, c: 0, a: 0, d: 0, s: 0 }).subscribe(d => {
        spanNumRepo.textContent = d.r.toString();
        spanNumCommit.textContent = d.c.toString();
        spanNumAdd.textContent = d.a.toString();
        spanNumDel.textContent = d.d.toString();
        spanNumChurn.textContent = (d.a - d.d).toString();
        spanSize.textContent = d.s.toString();
    });
    

    return module.exports;
});
$__System.registerDynamic("3c", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    (function (Digit) {
        Digit[Digit["ZERO"] = 0] = "ZERO";
        Digit[Digit["ONE"] = 1] = "ONE";
        Digit[Digit["TWO"] = 2] = "TWO";
        Digit[Digit["THREE"] = 3] = "THREE";
        Digit[Digit["FOUR"] = 4] = "FOUR";
        Digit[Digit["FIVE"] = 5] = "FIVE";
        Digit[Digit["SIX"] = 6] = "SIX";
        Digit[Digit["SEVEN"] = 7] = "SEVEN";
        Digit[Digit["EIGHT"] = 8] = "EIGHT";
        Digit[Digit["NINE"] = 9] = "NINE";
        Digit[Digit["BLANK"] = 10] = "BLANK";
        Digit[Digit["D"] = 11] = "D";
    })(exports.Digit || (exports.Digit = {}));
    var Digit = exports.Digit;
    var Segment = function () {
        function Segment() {
            this.on = false;
            this.points = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
        }
        Object.defineProperty(Segment.prototype, "off", {
            get: function () {
                return !this.on;
            },
            enumerable: true,
            configurable: true
        });
        return Segment;
    }();
    exports.Segment = Segment;
    /**
     * The Seven class represents the geometry of a seven segment digit.
     * The geometry uses a coordinate system that is a cartesian grid with
     *    -x values to the left of the origin,
     *    +x values to the right of the origin,
     *    +y values below the origin, and
     *    -y values above the origin.
     * This is the coordinate system typically used for computer graphic systems.
     */
    var Seven = function () {
        /**
         * Construct a new Seven object.
         * Optionally pass a SevenConfig object to set properties.
         * Each property of the SevenConfig object is optional.
         * If the passed in config contains bad values an exception will be thrown.
         */
        function Seven(_a) {
            var _b = _a === void 0 ? {} : _a,
                height = _b.height,
                width = _b.width,
                _c = _b.angle,
                angle = _c === void 0 ? 10 : _c,
                _d = _b.ratioLtoW,
                ratioLtoW = _d === void 0 ? 4 : _d,
                _e = _b.ratioLtoS,
                ratioLtoS = _e === void 0 ? 32 : _e,
                _f = _b.digit,
                digit = _f === void 0 ? Digit.BLANK : _f;
            /** The cononical points for a horizontal segment for the given configuration. */
            this._horizontalSegmentGeometry = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
            /** The cononical points for a vertical segment for the given configuration. */
            this._verticalSegmentGeometry = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
            /** The x and y shifts that must be applied to each segment. */
            this._translations = [{ x: 0, y: 0, a: this._horizontalSegmentGeometry }, { x: 0, y: 0, a: this._verticalSegmentGeometry }, { x: 0, y: 0, a: this._verticalSegmentGeometry }, { x: 0, y: 0, a: this._horizontalSegmentGeometry }, { x: 0, y: 0, a: this._verticalSegmentGeometry }, { x: 0, y: 0, a: this._verticalSegmentGeometry }, { x: 0, y: 0, a: this._horizontalSegmentGeometry }];
            /** The segments, A-G of the digit. */
            this.segments = [new Segment(), new Segment(), new Segment(), new Segment(), new Segment(), new Segment(), new Segment()];
            this._angleDegree = angle;
            this.digit = digit;
            this._ratioLtoW = ratioLtoW;
            this._ratioLtoS = ratioLtoS;
            this._height = this._width = 100; //initialize so checkConfig passes, and for default case
            this._isHeightFixed = true;
            if (height !== undefined) {
                this._height = height;
            } else if (width !== undefined) {
                this._width = width;
                this._isHeightFixed = false;
            } //else - neither specified, default to height=100
            this._positionSegments();
        }
        /**
         * Check the height, width, angle, ratioLtoH, and ratioLtoS for valid values.
         * Throws exception on first found issue.
         *
         * @private
         */
        Seven.prototype._checkConfig = function () {
            var a;
            var b;
            //check height
            a = this._height;
            b = a * 1; //convert to a number
            if (b != a || typeof a === 'string' && a.toString().trim() === '') {
                throw new TypeError("Invalid value (" + a + ") for height, not a number.");
            } else if (b <= 0) {
                throw new RangeError("Invalid value (" + b + ") for height, must be greater than 0.");
            } else if (!isFinite(b)) {
                throw new RangeError("Invalid value (" + b + ") for height, must be finite.");
            }
            this._height = b;
            //check width
            a = this._width;
            b = a * 1; //convert to a number
            if (b != a || typeof a === 'string' && a.toString().trim() === '') {
                throw new TypeError("Invalid value (" + a + ") for width, not a number.");
            } else if (b <= 0) {
                throw new RangeError("Invalid value (" + b + ") for width, must be greater than 0.");
            } else if (!isFinite(b)) {
                throw new RangeError("Invalid value (" + b + ") for width, must be finite.");
            }
            this._width = b;
            //Check angle
            a = this._angleDegree;
            b = a * 1; //convert to a number
            if (b != a || typeof a === 'string' && a.toString().trim() === '') {
                throw new TypeError("Invalid value (" + a + ") for angle, not a number.");
            } else if (b <= -90 || b >= 90) {
                throw new RangeError("Invalid value (" + b + ") for angle, must be between 90 and -90 degrees.");
            }
            this._angleDegree = b;
            //Check ratioLtoW
            a = this._ratioLtoW;
            b = a * 1; //convert to a number
            if (b != a || typeof a === 'string' && a.toString().trim() === '') {
                throw new TypeError("Invalid value (" + a + ") for ratioLtoW, not a number.");
            } else if (b < 1) {
                throw new RangeError("Invalid value (" + b + ") for ratioLtoW, must be at least 1.");
            } else if (!isFinite(b)) {
                throw new RangeError("Invalid value (" + b + ") for ratioLtoW, must be finite.");
            }
            this._ratioLtoW = b;
            //Check ratioLtoS
            a = this._ratioLtoS;
            b = a * 1; //convert to a number
            if (b != a || typeof a === 'string' && a.toString().trim() === '') {
                throw new TypeError("Invalid value (" + a + ") for ratioLtoS, not a number.");
            } else if (b <= 0) {
                throw new RangeError("Invalid value (" + b + ") for ratioLtoS, must be greater than 0.");
            } else if (!isFinite(b)) {
                throw new RangeError("Invalid value (" + b + ") for ratioLtoS, must be finite.");
            }
            this._ratioLtoS = b;
        };
        /**
         * This method sets the following values for the object.
         * _segmentLength, _angleRadian, _spacing, _halfSegmentWidth, _height, _width
         *
         * This method populates the _horizontalSegmentGeometry array.
         * The array contains the six points of the horizontal segment's geometry.
         * The first element in the array is the left most point.
         * The points are then listed in clockwise order.
         * All points besides the first have positive x values.
         * The first point is always at the origin (0,0).
         * The second and third points have negative y values;
         * The fourth point is always at (l, 0). where l is the segment length
         * The fifth and sixth points have positive y values.
         *
         * This method populates the _verticalSegmentGeometry array.
         * The array contains the six points of the vertical segment's geometry.
         * The first element in the array is the top most point.
         * The points are then listed in counterclockwise order.
         * All points besides the first have positive y values.
         * The first point is always at the origin (0,0).
         *
         * This method throws an error if the calculated geometry is unexpected.
         *
         * @private
         */
        Seven.prototype._calculateSegmentGeometry = function () {
            this._angleRadian = this._angleDegree * Math.PI / 180;
            this._segmentEndAngle = (Math.PI / 2 - this._angleRadian) / 2;
            //These calculations for segmentLength are the same as the height and width calcs below, except solved for segmentLength;
            if (this._isHeightFixed) {
                this._segmentLength = this._height / (1 / this._ratioLtoW + 2 * Math.cos(this._angleRadian) + 2 * (Math.sin(this._segmentEndAngle) + Math.cos(this._segmentEndAngle)) / this._ratioLtoS);
            } else {
                this._segmentLength = this._width / (2 * Math.sin(Math.abs(this._angleRadian)) + 2 * Math.cos(this._angleDegree >= 0 ? this._segmentEndAngle : Math.PI / 2 - this._segmentEndAngle) / this._ratioLtoS + 1 + Math.tan(this._angleDegree >= 0 ? this._segmentEndAngle : Math.PI / 2 - this._segmentEndAngle) / this._ratioLtoW);
            }
            this._spacing = this._segmentLength / this.ratioLtoS;
            var _segmentWidth = this._segmentLength / this.ratioLtoW;
            this._halfSegmentWidth = _segmentWidth / 2;
            this._segmentHorizontalShiftDistance = this._halfSegmentWidth * Math.tan(this._angleDegree >= 0 ? this._segmentEndAngle : Math.PI / 2 - this._segmentEndAngle); //This is the horizontal distance between the left most point in the digit and the nearest point on that same segment.
            if (this._isHeightFixed) {
                this._width = 2 * this._segmentLength * Math.sin(Math.abs(this._angleRadian)) + 2 * this._spacing * Math.cos(this._angleDegree >= 0 ? this._segmentEndAngle : Math.PI / 2 - this._segmentEndAngle) + this._segmentLength + 2 * this._segmentHorizontalShiftDistance; //This is the horizontal distance between the outer most (furthest to the left or furthest to the right) point on the 2 outer most segments and the 1st or 4th (whichever is closest) point on that same segment.
            } else {
                this._height = _segmentWidth + 2 * this._segmentLength * Math.cos(this._angleRadian) + 2 * this._spacing * (Math.sin(this._segmentEndAngle) + Math.cos(this._segmentEndAngle)); //This is the sum of the vertical distance between the following (1st point of segment A and 1st point of segment F) and (4th point of segment F and 1st point of segment E) and (4th point of segment E and 1st point of segment D).
            }
            var h = this._halfSegmentWidth;
            var l = this._segmentLength;
            var t = Math.tan(this._segmentEndAngle); //tangent of the segmentEndAngle, used for several point locations
            this._horizontalSegmentGeometry[1].x = h / t;
            this._horizontalSegmentGeometry[1].y = this._horizontalSegmentGeometry[2].y = -h;
            this._horizontalSegmentGeometry[2].x = l - h * t;
            this._horizontalSegmentGeometry[3].x = l;
            this._horizontalSegmentGeometry[4].x = l - h / t;
            this._horizontalSegmentGeometry[4].y = this._horizontalSegmentGeometry[5].y = h;
            this._horizontalSegmentGeometry[5].x = h * t;
            if (this._horizontalSegmentGeometry[1].x > this._horizontalSegmentGeometry[2].x) {
                throw new RangeError("This digit configuration produces invalid geometry.  angle: " + this._angleDegree + ",   ratioLtoW: " + this._ratioLtoW + ",   ratioLtoS: " + this._ratioLtoS);
            }
            //set vertical segment to horizontal segment mirrored over x axis
            for (var i = 0, hPoint = void 0, vPoint = void 0; (hPoint = this._horizontalSegmentGeometry[i]) && (vPoint = this._verticalSegmentGeometry[i]); ++i) {
                vPoint.x = hPoint.x;
                vPoint.y = -hPoint.y;
            }
            //rotate vertical segment, https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Rotation
            var angle = this._angleRadian + Math.PI / 2; //rotate by 90deg + _angleDeg for proper position
            for (var _i = 0, _a = this._verticalSegmentGeometry; _i < _a.length; _i++) {
                var p = _a[_i];
                var tempX = p.x;
                var tempY = p.y;
                p.x = tempX * Math.cos(angle) - tempY * Math.sin(angle);
                p.y = tempX * Math.sin(angle) + tempY * Math.cos(angle);
            }
        };
        /**
         * This method first calls _calculateSegmentGeometry to populate the horizontal and vertical geometry arrays.
         * Then, the x and y translations for each segment are calculated.
         * Finally, the translations are applied to each segment.
         *
         * @private
         */
        Seven.prototype._positionSegments = function () {
            this._checkConfig();
            this._calculateSegmentGeometry();
            var l = this._segmentLength;
            var aC = this._spacing * Math.cos(this._segmentEndAngle); //Used for horizontal spacing calculations
            var aS = this._spacing * Math.sin(this._segmentEndAngle); //Used for horizontal spacing calculations
            var x = this._translations;
            //calculate the x translations
            x[6].x = this._segmentHorizontalShiftDistance + l * Math.sin(Math.abs(this._angleRadian)) + (this._angleDegree >= 0 ? aC : aS);
            x[5].x = x[6].x - aS + l * Math.sin(this._angleRadian);
            x[0].x = x[5].x + aC;
            x[1].x = x[6].x + l + aC + l * Math.sin(this._angleRadian);
            x[2].x = x[6].x + l + aS;
            x[3].x = x[6].x + (aS - aC) - l * Math.sin(this._angleRadian);
            x[4].x = x[4].x = x[6].x - aC;
            //calculate the y translations
            x[0].y = this._halfSegmentWidth;
            x[1].y = x[0].y + aC;
            x[5].y = x[0].y + aS;
            x[6].y = x[5].y + l * Math.cos(this._angleRadian) + aC;
            x[2].y = x[6].y + aC;
            x[4].y = x[6].y + aS;
            x[3].y = x[4].y + l * Math.cos(this._angleRadian) + aC;
            //update all segment positions
            for (var i = 0, s = void 0, t = void 0; (s = this.segments[i]) && (t = x[i]); ++i) {
                for (var j = 0, p = void 0, g = void 0; (p = s.points[j]) && (g = t.a[j]); ++j) {
                    p.x = g.x + t.x;
                    p.y = g.y + t.y;
                }
            }
        };
        Seven.prototype._set = function (prop, value) {
            var oldValue = this[prop];
            try {
                this[prop] = value;
                this._positionSegments();
            } catch (e) {
                this[prop] = oldValue;
                this._positionSegments();
                throw e;
            }
        };
        Object.defineProperty(Seven.prototype, "angle", {
            get: function () {
                return this._angleDegree;
            },
            set: function (value) {
                this._set('_angleDegree', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Seven.prototype, "ratioLtoW", {
            get: function () {
                return this._ratioLtoW;
            },
            set: function (value) {
                this._set('_ratioLtoW', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Seven.prototype, "ratioLtoS", {
            get: function () {
                return this._ratioLtoS;
            },
            set: function (value) {
                this._set('_ratioLtoS', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Seven.prototype, "digit", {
            get: function () {
                return this._digit;
            },
            set: function (value) {
                //Check digit
                var newValue = value * 1; //convert to a number
                if (newValue != value || typeof value === 'string' && value.toString().trim() === '') {
                    throw new TypeError("Invalid value (" + value + ") for digit, not a Digit.");
                } else if (Digit[newValue] === undefined) {
                    throw new RangeError("Invalid value (" + newValue + ") for digit, must be a Digit.");
                }
                this._digit = newValue;
                //Set segment's on/off as needed
                for (var i = 0, s = void 0; s = this.segments[i]; ++i) {
                    s.on = Seven.matrix[this._digit][i];
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Seven.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (value) {
                var orig = this._isHeightFixed;
                this._isHeightFixed = true;
                try {
                    this._set('_height', value);
                } catch (e) {
                    this._isHeightFixed = orig;
                    throw e;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Seven.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (value) {
                var orig = this._isHeightFixed;
                this._isHeightFixed = false;
                try {
                    this._set('_width', value);
                } catch (e) {
                    this._isHeightFixed = orig;
                    throw e;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Seven.prototype, "isHeightFixed", {
            get: function () {
                return this._isHeightFixed;
            },
            set: function (value) {
                this._isHeightFixed = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Seven.prototype, "isWidthFixed", {
            get: function () {
                return !this.isHeightFixed;
            },
            set: function (value) {
                this._isHeightFixed = !value;
            },
            enumerable: true,
            configurable: true
        });
        /** Lookup between which segments are used for each digit.  */
        Seven.matrix = [
        //A     B      C      D      E      F      G
        [true, true, true, true, true, true, false], [false, true, true, false, false, false, false], [true, true, false, true, true, false, true], [true, true, true, true, false, false, true], [false, true, true, false, false, true, true], [true, false, true, true, false, true, true], [true, false, true, true, true, true, true], [true, true, true, false, false, false, false], [true, true, true, true, true, true, true], [true, true, true, true, false, true, true], [false, false, false, false, false, false, false], [false, true, true, true, true, false, true]];
        return Seven;
    }();
    exports.Seven = Seven;
    

    return module.exports;
});
$__System.registerDynamic("4", ["22"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var isArray_1 = $__require("22");
    function isNumeric(val) {
        // parseFloat NaNs numeric-cast false positives (null|true|false|"")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        // adding 1 corrects loss of precision from parseFloat (#15100)
        return !isArray_1.isArray(val) && val - parseFloat(val) + 1 >= 0;
    }
    exports.isNumeric = isNumeric;
    ;
    

    return module.exports;
});
$__System.registerDynamic('24', ['15'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('15');
    var Symbol = root_1.root.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            exports.$$observable = Symbol.observable;
        } else {
            if (typeof Symbol.for === 'function') {
                exports.$$observable = Symbol.for('observable');
            } else {
                exports.$$observable = Symbol('observable');
            }
            Symbol.observable = exports.$$observable;
        }
    } else {
        exports.$$observable = '@@observable';
    }
    

    return module.exports;
});
$__System.registerDynamic("3d", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    exports.empty = {
        isUnsubscribed: true,
        next: function (value) {},
        error: function (err) {
            throw err;
        },
        complete: function () {}
    };
    

    return module.exports;
});
$__System.registerDynamic('c', ['19', '33', '37', '3d'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isFunction_1 = $__require('19');
    var Subscription_1 = $__require('33');
    var rxSubscriber_1 = $__require('37');
    var Observer_1 = $__require('3d');
    /**
     * Implements the {@link Observer} interface and extends the
     * {@link Subscription} class. While the {@link Observer} is the public API for
     * consuming the values of an {@link Observable}, all Observers get converted to
     * a Subscriber, in order to provide Subscription-like capabilities such as
     * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
     * implementing operators, but it is rarely used as a public API.
     *
     * @class Subscriber<T>
     */
    var Subscriber = function (_super) {
        __extends(Subscriber, _super);
        /**
         * @param {Observer|function(value: T): void} [destinationOrNext] A partially
         * defined Observer or a `next` callback function.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         */
        function Subscriber(destinationOrNext, error, complete) {
            _super.call(this);
            this.syncErrorValue = null;
            this.syncErrorThrown = false;
            this.syncErrorThrowable = false;
            this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    this.destination = Observer_1.empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        this.destination = Observer_1.empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            this.destination = destinationOrNext;
                            this.destination.add(this);
                        } else {
                            this.syncErrorThrowable = true;
                            this.destination = new SafeSubscriber(this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    this.syncErrorThrowable = true;
                    this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                    break;
            }
        }
        /**
         * A static factory for a Subscriber, given a (potentially partial) definition
         * of an Observer.
         * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
         * Observer represented by the given arguments.
         */
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        /**
         * The {@link Observer} callback to receive notifications of type `next` from
         * the Observable, with a value. The Observable may call this method 0 or more
         * times.
         * @param {T} [value] The `next` value.
         * @return {void}
         */
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        /**
         * The {@link Observer} callback to receive notifications of type `error` from
         * the Observable, with an attached {@link Error}. Notifies the Observer that
         * the Observable has experienced an error condition.
         * @param {any} [err] The `error` exception.
         * @return {void}
         */
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        /**
         * The {@link Observer} callback to receive a valueless notification of type
         * `complete` from the Observable. Notifies the Observer that the Observable
         * has finished sending push-based notifications.
         * @return {void}
         */
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.isUnsubscribed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
            return this;
        };
        return Subscriber;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SafeSubscriber = function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parent, observerOrNext, error, complete) {
            _super.call(this);
            this._parent = _parent;
            var next;
            var context = this;
            if (isFunction_1.isFunction(observerOrNext)) {
                next = observerOrNext;
            } else if (observerOrNext) {
                context = observerOrNext;
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
            this._context = context;
            this._next = next;
            this._error = error;
            this._complete = complete;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parent = this._parent;
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                } else if (this.__tryOrSetError(_parent, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parent = this._parent;
                if (this._error) {
                    if (!_parent.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    } else {
                        this.__tryOrSetError(_parent, this._error, err);
                        this.unsubscribe();
                    }
                } else if (!_parent.syncErrorThrowable) {
                    this.unsubscribe();
                    throw err;
                } else {
                    _parent.syncErrorValue = err;
                    _parent.syncErrorThrown = true;
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            if (!this.isStopped) {
                var _parent = this._parent;
                if (this._complete) {
                    if (!_parent.syncErrorThrowable) {
                        this.__tryOrUnsub(this._complete);
                        this.unsubscribe();
                    } else {
                        this.__tryOrSetError(_parent, this._complete);
                        this.unsubscribe();
                    }
                } else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            } catch (err) {
                this.unsubscribe();
                throw err;
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            try {
                fn.call(this._context, value);
            } catch (err) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parent = this._parent;
            this._context = null;
            this._parent = null;
            _parent.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber);
    

    return module.exports;
});
$__System.registerDynamic('37', ['15'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('15');
    var Symbol = root_1.root.Symbol;
    exports.$$rxSubscriber = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('rxSubscriber') : '@@rxSubscriber';
    

    return module.exports;
});
$__System.registerDynamic('3e', ['c', '37'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var Subscriber_1 = $__require('c');
    var rxSubscriber_1 = $__require('37');
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver === 'object') {
            if (nextOrObserver instanceof Subscriber_1.Subscriber) {
                return nextOrObserver;
            } else if (typeof nextOrObserver[rxSubscriber_1.$$rxSubscriber] === 'function') {
                return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
            }
        }
        return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }
    exports.toSubscriber = toSubscriber;
    

    return module.exports;
});
$__System.registerDynamic('5', ['15', '24', '3e'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('15');
    var observable_1 = $__require('24');
    var toSubscriber_1 = $__require('3e');
    /**
     * A representation of any set of values over any amount of time. This the most basic building block
     * of RxJS.
     *
     * @class Observable<T>
     */
    var Observable = function () {
        /**
         * @constructor
         * @param {Function} subscribe the function that is  called when the Observable is
         * initially subscribed to. This function is given a Subscriber, to which new values
         * can be `next`ed, or an `error` method can be called to raise an error, or
         * `complete` can be called to notify of a successful completion.
         */
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        /**
         * Creates a new Observable, with this Observable as the source, and the passed
         * operator defined as the new observable's operator.
         * @method lift
         * @param {Operator} operator the operator defining the operation to take on the observable
         * @return {Observable} a new observable with the Operator applied
         */
        Observable.prototype.lift = function (operator) {
            var observable = new Observable();
            observable.source = this;
            observable.operator = operator;
            return observable;
        };
        /**
         * Registers handlers for handling emitted values, error and completions from the observable, and
         *  executes the observable's subscriber function, which will take action to set up the underlying data stream
         * @method subscribe
         * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
         *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
         * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
         *  the error will be thrown as unhandled
         * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
         * @return {ISubscription} a subscription reference to the registered handlers
         */
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
            sink.add(operator ? operator.call(sink, this) : this._subscribe(sink));
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
            return sink;
        };
        /**
         * @method forEach
         * @param {Function} next a handler for each value emitted by the observable
         * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
         * @return {Promise} a promise that either resolves on observable completion or
         *  rejects with the handled error
         */
        Observable.prototype.forEach = function (next, PromiseCtor) {
            var _this = this;
            if (!PromiseCtor) {
                if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                    PromiseCtor = root_1.root.Rx.config.Promise;
                } else if (root_1.root.Promise) {
                    PromiseCtor = root_1.root.Promise;
                }
            }
            if (!PromiseCtor) {
                throw new Error('no Promise impl found');
            }
            return new PromiseCtor(function (resolve, reject) {
                var subscription = _this.subscribe(function (value) {
                    if (subscription) {
                        // if there is a subscription, then we can surmise
                        // the next handling is asynchronous. Any errors thrown
                        // need to be rejected explicitly and unsubscribe must be
                        // called manually
                        try {
                            next(value);
                        } catch (err) {
                            reject(err);
                            subscription.unsubscribe();
                        }
                    } else {
                        // if there is NO subscription, then we're getting a nexted
                        // value synchronously during subscription. We can just call it.
                        // If it errors, Observable's `subscribe` imple will ensure the
                        // unsubscription logic is called, then synchronously rethrow the error.
                        // After that, Promise will trap the error and send it
                        // down the rejection path.
                        next(value);
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            return this.source.subscribe(subscriber);
        };
        /**
         * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
         * @method Symbol.observable
         * @return {Observable} this instance of the observable
         */
        Observable.prototype[observable_1.$$observable] = function () {
            return this;
        };
        // HACK: Since TypeScript inherits static properties too, we have to
        // fight against TypeScript here so Subject can have a different static create signature
        /**
         * Creates a new cold Observable by calling the Observable constructor
         * @static true
         * @owner Observable
         * @method create
         * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
         * @return {Observable} a new cold observable
         */
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }();
    exports.Observable = Observable;
    

    return module.exports;
});
$__System.registerDynamic("3f", ["40"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var FutureAction_1 = $__require("40");
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var QueueAction = function (_super) {
        __extends(QueueAction, _super);
        function QueueAction() {
            _super.apply(this, arguments);
        }
        QueueAction.prototype._schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay > 0) {
                return _super.prototype._schedule.call(this, state, delay);
            }
            this.delay = delay;
            this.state = state;
            var scheduler = this.scheduler;
            scheduler.actions.push(this);
            scheduler.flush();
            return this;
        };
        return QueueAction;
    }(FutureAction_1.FutureAction);
    exports.QueueAction = QueueAction;
    

    return module.exports;
});
$__System.registerDynamic('15', [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var objectTypes = {
        'boolean': false,
        'function': true,
        'object': true,
        'number': false,
        'string': false,
        'undefined': false
    };
    exports.root = objectTypes[typeof self] && self || objectTypes[typeof window] && window;
    /* tslint:disable:no-unused-variable */
    var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
    var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
    var freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
        exports.root = freeGlobal;
    }
    

    return module.exports;
});
$__System.registerDynamic("22", [], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  exports.isArray = Array.isArray || function (x) {
    return x && typeof x.length === 'number';
  };
  

  return module.exports;
});
$__System.registerDynamic("17", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function isObject(x) {
        return x != null && typeof x === 'object';
    }
    exports.isObject = isObject;
    

    return module.exports;
});
$__System.registerDynamic("19", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function isFunction(x) {
        return typeof x === 'function';
    }
    exports.isFunction = isFunction;
    

    return module.exports;
});
$__System.registerDynamic("18", ["1b"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var errorObject_1 = $__require("1b");
    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        } catch (e) {
            errorObject_1.errorObject.e = e;
            return errorObject_1.errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }
    exports.tryCatch = tryCatch;
    ;
    

    return module.exports;
});
$__System.registerDynamic("1b", [], true, function ($__require, exports, module) {
  "use strict";
  // typeof any so that it we don't have to cast when comparing a result to the error object

  var define,
      global = this || self,
      GLOBAL = global;
  exports.errorObject = { e: {} };
  

  return module.exports;
});
$__System.registerDynamic("41", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when one or more errors have occurred during the
     * `unsubscribe` of a {@link Subscription}.
     */
    var UnsubscriptionError = function (_super) {
        __extends(UnsubscriptionError, _super);
        function UnsubscriptionError(errors) {
            _super.call(this);
            this.errors = errors;
            this.name = 'UnsubscriptionError';
            this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
                return i + 1 + ") " + err.toString();
            }).join('\n') : '';
        }
        return UnsubscriptionError;
    }(Error);
    exports.UnsubscriptionError = UnsubscriptionError;
    

    return module.exports;
});
$__System.registerDynamic('33', ['22', '17', '19', '18', '1b', '41'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var isArray_1 = $__require('22');
    var isObject_1 = $__require('17');
    var isFunction_1 = $__require('19');
    var tryCatch_1 = $__require('18');
    var errorObject_1 = $__require('1b');
    var UnsubscriptionError_1 = $__require('41');
    /**
     * Represents a disposable resource, such as the execution of an Observable. A
     * Subscription has one important method, `unsubscribe`, that takes no argument
     * and just disposes the resource held by the subscription.
     *
     * Additionally, subscriptions may be grouped together through the `add()`
     * method, which will attach a child Subscription to the current Subscription.
     * When a Subscription is unsubscribed, all its children (and its grandchildren)
     * will be unsubscribed as well.
     *
     * @class Subscription
     */
    var Subscription = function () {
        /**
         * @param {function(): void} [unsubscribe] A function describing how to
         * perform the disposal of resources when the `unsubscribe` method is called.
         */
        function Subscription(unsubscribe) {
            /**
             * A flag to indicate whether this Subscription has already been unsubscribed.
             * @type {boolean}
             */
            this.isUnsubscribed = false;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        /**
         * Disposes the resources held by the subscription. May, for instance, cancel
         * an ongoing Observable execution or cancel any other type of work that
         * started when the Subscription was created.
         * @return {void}
         */
        Subscription.prototype.unsubscribe = function () {
            var hasErrors = false;
            var errors;
            if (this.isUnsubscribed) {
                return;
            }
            this.isUnsubscribed = true;
            var _a = this,
                _unsubscribe = _a._unsubscribe,
                _subscriptions = _a._subscriptions;
            this._subscriptions = null;
            if (isFunction_1.isFunction(_unsubscribe)) {
                var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
                if (trial === errorObject_1.errorObject) {
                    hasErrors = true;
                    (errors = errors || []).push(errorObject_1.errorObject.e);
                }
            }
            if (isArray_1.isArray(_subscriptions)) {
                var index = -1;
                var len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject_1.isObject(sub)) {
                        var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                        if (trial === errorObject_1.errorObject) {
                            hasErrors = true;
                            errors = errors || [];
                            var err = errorObject_1.errorObject.e;
                            if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                                errors = errors.concat(err.errors);
                            } else {
                                errors.push(err);
                            }
                        }
                    }
                }
            }
            if (hasErrors) {
                throw new UnsubscriptionError_1.UnsubscriptionError(errors);
            }
        };
        /**
         * Adds a tear down to be called during the unsubscribe() of this
         * Subscription.
         *
         * If the tear down being added is a subscription that is already
         * unsubscribed, is the same reference `add` is being called on, or is
         * `Subscription.EMPTY`, it will not be added.
         *
         * If this subscription is already in an `isUnsubscribed` state, the passed
         * tear down logic will be executed immediately.
         *
         * @param {TeardownLogic} teardown The additional logic to execute on
         * teardown.
         * @return {Subscription} Returns the Subscription used or created to be
         * added to the inner subscriptions list. This Subscription can be used with
         * `remove()` to remove the passed teardown logic from the inner subscriptions
         * list.
         */
        Subscription.prototype.add = function (teardown) {
            if (!teardown || teardown === this || teardown === Subscription.EMPTY) {
                return;
            }
            var sub = teardown;
            switch (typeof teardown) {
                case 'function':
                    sub = new Subscription(teardown);
                case 'object':
                    if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
                        break;
                    } else if (this.isUnsubscribed) {
                        sub.unsubscribe();
                    } else {
                        (this._subscriptions || (this._subscriptions = [])).push(sub);
                    }
                    break;
                default:
                    throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
            }
            return sub;
        };
        /**
         * Removes a Subscription from the internal list of subscriptions that will
         * unsubscribe during the unsubscribe process of this Subscription.
         * @param {Subscription} subscription The subscription to remove.
         * @return {void}
         */
        Subscription.prototype.remove = function (subscription) {
            // HACK: This might be redundant because of the logic in `add()`
            if (subscription == null || subscription === this || subscription === Subscription.EMPTY) {
                return;
            }
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.EMPTY = function (empty) {
            empty.isUnsubscribed = true;
            return empty;
        }(new Subscription());
        return Subscription;
    }();
    exports.Subscription = Subscription;
    

    return module.exports;
});
$__System.registerDynamic('40', ['15', '33'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var root_1 = $__require('15');
    var Subscription_1 = $__require('33');
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var FutureAction = function (_super) {
        __extends(FutureAction, _super);
        function FutureAction(scheduler, work) {
            _super.call(this);
            this.scheduler = scheduler;
            this.work = work;
            this.pending = false;
        }
        FutureAction.prototype.execute = function () {
            if (this.isUnsubscribed) {
                this.error = new Error('executing a cancelled action');
            } else {
                try {
                    this.work(this.state);
                } catch (e) {
                    this.unsubscribe();
                    this.error = e;
                }
            }
        };
        FutureAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (this.isUnsubscribed) {
                return this;
            }
            return this._schedule(state, delay);
        };
        FutureAction.prototype._schedule = function (state, delay) {
            var _this = this;
            if (delay === void 0) {
                delay = 0;
            }
            // Always replace the current state with the new state.
            this.state = state;
            // Set the pending flag indicating that this action has been scheduled, or
            // has recursively rescheduled itself.
            this.pending = true;
            var id = this.id;
            // If this action has an intervalID and the specified delay matches the
            // delay we used to create the intervalID, don't call `setInterval` again.
            if (id != null && this.delay === delay) {
                return this;
            }
            this.delay = delay;
            // If this action has an intervalID, but was rescheduled with a different
            // `delay` time, cancel the current intervalID and call `setInterval` with
            // the new `delay` time.
            if (id != null) {
                this.id = null;
                root_1.root.clearInterval(id);
            }
            //
            // Important implementation note:
            //
            // By default, FutureAction only executes once. However, Actions have the
            // ability to be rescheduled from within the scheduled callback (mimicking
            // recursion for asynchronous methods). This allows us to implement single
            // and repeated actions with the same code path without adding API surface
            // area, and implement tail-call optimization over asynchronous boundaries.
            //
            // However, JS runtimes make a distinction between intervals scheduled by
            // repeatedly calling `setTimeout` vs. a single `setInterval` call, with
            // the latter providing a better guarantee of precision.
            //
            // In order to accommodate both single and repeatedly rescheduled actions,
            // use `setInterval` here for both cases. By default, the interval will be
            // canceled after its first execution, or if the action schedules itself to
            // run again with a different `delay` time.
            //
            // If the action recursively schedules itself to run again with the same
            // `delay` time, the interval is not canceled, but allowed to loop again.
            // The check of whether the interval should be canceled or not is run every
            // time the interval is executed. The first time an action fails to
            // reschedule itself, the interval is canceled.
            //
            this.id = root_1.root.setInterval(function () {
                _this.pending = false;
                var _a = _this,
                    id = _a.id,
                    scheduler = _a.scheduler;
                scheduler.actions.push(_this);
                scheduler.flush();
                //
                // Terminate this interval if the action didn't reschedule itself.
                // Don't call `this.unsubscribe()` here, because the action could be
                // rescheduled later. For example:
                //
                // ```
                // scheduler.schedule(function doWork(counter) {
                //   /* ... I'm a busy worker bee ... */
                //   var originalAction = this;
                //   /* wait 100ms before rescheduling this action again */
                //   setTimeout(function () {
                //     originalAction.schedule(counter + 1);
                //   }, 100);
                // }, 1000);
                // ```
                if (_this.pending === false && id != null) {
                    _this.id = null;
                    root_1.root.clearInterval(id);
                }
            }, delay);
            return this;
        };
        FutureAction.prototype._unsubscribe = function () {
            this.pending = false;
            var _a = this,
                id = _a.id,
                scheduler = _a.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            if (id != null) {
                this.id = null;
                root_1.root.clearInterval(id);
            }
            if (index !== -1) {
                actions.splice(index, 1);
            }
            this.work = null;
            this.state = null;
            this.scheduler = null;
        };
        return FutureAction;
    }(Subscription_1.Subscription);
    exports.FutureAction = FutureAction;
    

    return module.exports;
});
$__System.registerDynamic('42', ['3f', '40'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var QueueAction_1 = $__require('3f');
    var FutureAction_1 = $__require('40');
    var QueueScheduler = function () {
        function QueueScheduler() {
            this.active = false;
            this.actions = []; // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
            this.scheduledId = null;
        }
        QueueScheduler.prototype.now = function () {
            return Date.now();
        };
        QueueScheduler.prototype.flush = function () {
            if (this.active || this.scheduledId) {
                return;
            }
            this.active = true;
            var actions = this.actions;
            // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
            for (var action = null; action = actions.shift();) {
                action.execute();
                if (action.error) {
                    this.active = false;
                    throw action.error;
                }
            }
            this.active = false;
        };
        QueueScheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) {
                delay = 0;
            }
            return delay <= 0 ? this.scheduleNow(work, state) : this.scheduleLater(work, delay, state);
        };
        QueueScheduler.prototype.scheduleNow = function (work, state) {
            return new QueueAction_1.QueueAction(this, work).schedule(state);
        };
        QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
            return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
        };
        return QueueScheduler;
    }();
    exports.QueueScheduler = QueueScheduler;
    

    return module.exports;
});
$__System.registerDynamic('43', ['40', '42'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var FutureAction_1 = $__require('40');
    var QueueScheduler_1 = $__require('42');
    var AsyncScheduler = function (_super) {
        __extends(AsyncScheduler, _super);
        function AsyncScheduler() {
            _super.apply(this, arguments);
        }
        AsyncScheduler.prototype.scheduleNow = function (work, state) {
            return new FutureAction_1.FutureAction(this, work).schedule(state, 0);
        };
        return AsyncScheduler;
    }(QueueScheduler_1.QueueScheduler);
    exports.AsyncScheduler = AsyncScheduler;
    

    return module.exports;
});
$__System.registerDynamic("6", ["43"], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var AsyncScheduler_1 = $__require("43");
  exports.async = new AsyncScheduler_1.AsyncScheduler();
  

  return module.exports;
});
$__System.registerDynamic('44', ['4', '5', '6'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isNumeric_1 = $__require('4');
    var Observable_1 = $__require('5');
    var async_1 = $__require('6');
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var IntervalObservable = function (_super) {
        __extends(IntervalObservable, _super);
        function IntervalObservable(period, scheduler) {
            if (period === void 0) {
                period = 0;
            }
            if (scheduler === void 0) {
                scheduler = async_1.async;
            }
            _super.call(this);
            this.period = period;
            this.scheduler = scheduler;
            if (!isNumeric_1.isNumeric(period) || period < 0) {
                this.period = 0;
            }
            if (!scheduler || typeof scheduler.schedule !== 'function') {
                this.scheduler = async_1.async;
            }
        }
        /**
         * Creates an Observable that emits sequential numbers every specified
         * interval of time, on a specified Scheduler.
         *
         * <span class="informal">Emits incremental numbers periodically in time.
         * </span>
         *
         * <img src="./img/interval.png" width="100%">
         *
         * `interval` returns an Observable that emits an infinite sequence of
         * ascending integers, with a constant interval of time of your choosing
         * between those emissions. The first emission is not sent immediately, but
         * only after the first period has passed. By default, this operator uses the
         * `async` Scheduler to provide a notion of time, but you may pass any
         * Scheduler to it.
         *
         * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
         * var numbers = Rx.Observable.interval(1000);
         * numbers.subscribe(x => console.log(x));
         *
         * @see {@link timer}
         * @see {@link delay}
         *
         * @param {number} [period=0] The interval size in milliseconds (by default)
         * or the time unit determined by the scheduler's clock.
         * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
         * the emission of values, and providing a notion of "time".
         * @return {Observable} An Observable that emits a sequential number each time
         * interval.
         * @static true
         * @name interval
         * @owner Observable
         */
        IntervalObservable.create = function (period, scheduler) {
            if (period === void 0) {
                period = 0;
            }
            if (scheduler === void 0) {
                scheduler = async_1.async;
            }
            return new IntervalObservable(period, scheduler);
        };
        IntervalObservable.dispatch = function (state) {
            var index = state.index,
                subscriber = state.subscriber,
                period = state.period;
            subscriber.next(index);
            if (subscriber.isUnsubscribed) {
                return;
            }
            state.index += 1;
            this.schedule(state, period);
        };
        IntervalObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var period = this.period;
            var scheduler = this.scheduler;
            subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
                index: index, subscriber: subscriber, period: period
            }));
        };
        return IntervalObservable;
    }(Observable_1.Observable);
    exports.IntervalObservable = IntervalObservable;
    

    return module.exports;
});
$__System.registerDynamic("45", ["44"], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var IntervalObservable_1 = $__require("44");
  exports.interval = IntervalObservable_1.IntervalObservable.create;
  

  return module.exports;
});
$__System.registerDynamic('46', ['5', '45'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('5');
  var interval_1 = $__require('45');
  Observable_1.Observable.interval = interval_1.interval;
  

  return module.exports;
});
$__System.registerDynamic('47', ['3c', '5', '46'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    const seven_segment_1 = $__require('3c');
    const Observable_1 = $__require('5');
    $__require('46');
    let canvas = document.querySelector('#cvsSeven');
    let ctx = canvas.getContext('2d');
    let seven = new seven_segment_1.Seven({ digit: seven_segment_1.Digit.SEVEN, height: canvas.height });
    let xShift = (canvas.width - seven.width) / 2;
    Observable_1.Observable.interval(1000).subscribe(n => {
        seven.digit = n % 10;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let s of seven.segments) {
            ctx.fillStyle = "rgba(255,255,255," + (s.on ? .87 : .05) + ")";
            ctx.beginPath();
            for (let p of s.points) {
                ctx.lineTo(xShift + p.x, p.y + .5);
            }
            ctx.closePath();
            ctx.fill();
        }
    });
    

    return module.exports;
});
$__System.registerDynamic('1', ['11', '3b', '47'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('11');
  $__require('3b');
  $__require('47');
  

  return module.exports;
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});