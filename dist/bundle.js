!function(a){function b(a,b,e){return 4===arguments.length?c.apply(this,arguments):void d(a,{declarative:!0,deps:b,declare:e})}function c(a,b,c,e){d(a,{declarative:!1,deps:b,executingRequire:c,execute:e})}function d(a,b){b.name=a,a in o||(o[a]=b),b.normalizedDeps=b.deps}function e(a,b){if(b[a.groupIndex]=b[a.groupIndex]||[],-1==p.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var c=0,d=a.normalizedDeps.length;d>c;c++){var f=a.normalizedDeps[c],g=o[f];if(g&&!g.evaluated){var h=a.groupIndex+(g.declarative!=a.declarative);if(void 0===g.groupIndex||g.groupIndex<h){if(void 0!==g.groupIndex&&(b[g.groupIndex].splice(p.call(b[g.groupIndex],g),1),0==b[g.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");g.groupIndex=h}e(g,b)}}}}function f(a){var b=o[a];b.groupIndex=0;var c=[];e(b,c);for(var d=!!b.declarative==c.length%2,f=c.length-1;f>=0;f--){for(var g=c[f],i=0;i<g.length;i++){var k=g[i];d?h(k):j(k)}d=!d}}function g(a){return s[a]||(s[a]={name:a,dependencies:[],exports:{},importers:[]})}function h(b){if(!b.module){var c=b.module=g(b.name),d=b.module.exports,e=b.declare.call(a,function(a,b){if(c.locked=!0,"object"==typeof a)for(var e in a)d[e]=a[e];else d[a]=b;for(var f=0,g=c.importers.length;g>f;f++){var h=c.importers[f];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===c&&h.setters[i](d)}return c.locked=!1,b},{id:b.name});c.setters=e.setters,c.execute=e.execute;for(var f=0,i=b.normalizedDeps.length;i>f;f++){var j,k=b.normalizedDeps[f],l=o[k],m=s[k];m?j=m.exports:l&&!l.declarative?j=l.esModule:l?(h(l),m=l.module,j=m.exports):j=n(k),m&&m.importers?(m.importers.push(c),c.dependencies.push(m)):c.dependencies.push(null),c.setters[f]&&c.setters[f](j)}}}function i(a){var b,c=o[a];if(c)c.declarative?m(a,[]):c.evaluated||j(c),b=c.module.exports;else if(b=n(a),!b)throw new Error("Unable to load dependency "+a+".");return(!c||c.declarative)&&b&&b.__useDefault?b.default:b}function j(b){if(!b.module){var c={},d=b.module={exports:c,id:b.name};if(!b.executingRequire)for(var e=0,f=b.normalizedDeps.length;f>e;e++){var g=b.normalizedDeps[e],h=o[g];h&&j(h)}b.evaluated=!0;var l=b.execute.call(a,function(a){for(var c=0,d=b.deps.length;d>c;c++)if(b.deps[c]==a)return i(b.normalizedDeps[c]);throw new TypeError("Module "+a+" not declared as a dependency.")},c,d);l&&(d.exports=l),c=d.exports,c&&c.__esModule?b.esModule=c:b.esModule=k(c)}}function k(b){var c={};if(("object"==typeof b||"function"==typeof b)&&b!==a)if(q)for(var d in b)"default"!==d&&l(c,b,d);else{var e=b&&b.hasOwnProperty;for(var d in b)"default"===d||e&&!b.hasOwnProperty(d)||(c[d]=b[d])}return c.default=b,r(c,"__useDefault",{value:!0}),c}function l(a,b,c){try{var d;(d=Object.getOwnPropertyDescriptor(b,c))&&r(a,c,d)}catch(d){return a[c]=b[c],!1}}function m(b,c){var d=o[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;f>e;e++){var g=d.normalizedDeps[e];-1==p.call(c,g)&&(o[g]?m(g,c):n(g))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function n(a){if(u[a])return u[a];if("@node/"==a.substr(0,6))return u[a]=k(t(a.substr(6)));var b=o[a];if(!b)throw"Module "+a+" not present.";return f(a),m(a,[]),o[a]=void 0,b.declarative&&r(b.module.exports,"__esModule",{value:!0}),u[a]=b.declarative?b.module.exports:b.esModule}var o={},p=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},q=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(a){q=!1}var r;!function(){try{Object.defineProperty({},"a",{})&&(r=Object.defineProperty)}catch(a){r=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(a){}}}}();var s={},t="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,u={"@empty":{}};return function(a,d,e,f){return function(g){g(function(g){for(var h={_nodeRequire:t,register:b,registerDynamic:c,get:n,set:function(a,b){u[a]=b},newModule:function(a){return a}},i=0;i<d.length;i++)(function(a,b){b&&b.__esModule?u[a]=b:u[a]=k(b)})(d[i],arguments[i]);f(h);var j=n(a[0]);if(a.length>1)for(var i=1;i<a.length;i++)n(a[i]);return e?j.default:j})}}}("undefined"!=typeof self?self:global)(["1"],[],!0,function(a){this.require,this.exports,this.module;!function(b){function c(a,b){for(var c=a.split(".");c.length;)b=b[c.shift()];return b}function d(a){if("string"==typeof a)return c(a,b);if(!(a instanceof Array))throw new Error("Global exports must be a string or array.");for(var d={},e=!0,f=0;f<a.length;f++){var g=c(a[f],b);e&&(d.default=g,e=!1),d[a[f].split(".").pop()]=g}return d}function e(a){if(Object.keys)Object.keys(b).forEach(a);else for(var c in b)i.call(b,c)&&a(c)}function f(a){e(function(c){if(-1==j.call(k,c)){try{var d=b[c]}catch(a){k.push(c)}a(c,d)}})}var g,h=a,i=Object.prototype.hasOwnProperty,j=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},k=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];h.set("@@global-helpers",h.newModule({prepareGlobal:function(a,c,e){var h=b.define;b.define=void 0;var i;if(e){i={};for(var j in e)i[j]=b[j],b[j]=e[j]}return c||(g={},f(function(a,b){g[a]=b})),function(){var a;if(c)a=d(c);else{a={};var e,j;f(function(b,c){g[b]!==c&&"undefined"!=typeof c&&(a[b]=c,"undefined"!=typeof e?j||e===c||(j=!0):e=c)}),a=j?a:e}if(i)for(var k in i)b[k]=i[k];return b.define=h,a}}}))}("undefined"!=typeof self?self:global),a.registerDynamic("2",[],!0,function(a,b,c){"use strict";function d(a){return a instanceof Date&&!isNaN(+a)}this||self;return b.isDate=d,c.exports}),a.registerDynamic("3",["4"],!0,function(a,b,c){"use strict";var d=(this||self,a("4")),e=function(){function a(a,b,c){this.kind=a,this.value=b,this.exception=c,this.hasValue="N"===a}return a.prototype.observe=function(a){switch(this.kind){case"N":return a.next&&a.next(this.value);case"E":return a.error&&a.error(this.exception);case"C":return a.complete&&a.complete()}},a.prototype.do=function(a,b,c){var d=this.kind;switch(d){case"N":return a&&a(this.value);case"E":return b&&b(this.exception);case"C":return c&&c()}},a.prototype.accept=function(a,b,c){return a&&"function"==typeof a.next?this.observe(a):this.do(a,b,c)},a.prototype.toObservable=function(){var a=this.kind;switch(a){case"N":return d.Observable.of(this.value);case"E":return d.Observable.throw(this.exception);case"C":return d.Observable.empty()}},a.createNext=function(b){return"undefined"!=typeof b?new a("N",b):this.undefinedValueNotification},a.createError=function(b){return new a("E",(void 0),b)},a.createComplete=function(){return this.completeNotification},a.completeNotification=new a("C"),a.undefinedValueNotification=new a("N",(void 0)),a}();return b.Notification=e,c.exports}),a.registerDynamic("5",["6","2","7","3"],!0,function(a,b,c){"use strict";function d(a,b){void 0===b&&(b=f.async);var c=g.isDate(a),d=c?+a-b.now():Math.abs(a);return this.lift(new j(d,b))}var e=(this||self,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),f=a("6"),g=a("2"),h=a("7"),i=a("3");b.delay=d;var j=function(){function a(a,b){this.delay=a,this.scheduler=b}return a.prototype.call=function(a,b){return b._subscribe(new k(a,this.delay,this.scheduler))},a}(),k=function(a){function b(b,c,d){a.call(this,b),this.delay=c,this.scheduler=d,this.queue=[],this.active=!1,this.errored=!1}return e(b,a),b.dispatch=function(a){for(var b=a.source,c=b.queue,d=a.scheduler,e=a.destination;c.length>0&&c[0].time-d.now()<=0;)c.shift().notification.observe(e);if(c.length>0){var f=Math.max(0,c[0].time-d.now());this.schedule(a,f)}else b.active=!1},b.prototype._schedule=function(a){this.active=!0,this.add(a.schedule(b.dispatch,this.delay,{source:this,destination:this.destination,scheduler:a}))},b.prototype.scheduleNotification=function(a){if(this.errored!==!0){var b=this.scheduler,c=new l(b.now()+this.delay,a);this.queue.push(c),this.active===!1&&this._schedule(b)}},b.prototype._next=function(a){this.scheduleNotification(i.Notification.createNext(a))},b.prototype._error=function(a){this.errored=!0,this.queue=[],this.destination.error(a)},b.prototype._complete=function(){this.scheduleNotification(i.Notification.createComplete())},b}(h.Subscriber),l=function(){function a(a,b){this.time=a,this.notification=b}return a}();return c.exports}),a.registerDynamic("8",["4","5"],!0,function(a,b,c){"use strict";var d=(this||self,a("4")),e=a("5");return d.Observable.prototype.delay=e.delay,c.exports}),a.registerDynamic("9",["7"],!0,function(a,b,c){"use strict";function d(a,b,c){return this.lift(new g(a,b,c))}var e=(this||self,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),f=a("7");b._do=d;var g=function(){function a(a,b,c){this.nextOrObserver=a,this.error=b,this.complete=c}return a.prototype.call=function(a,b){return b._subscribe(new h(a,this.nextOrObserver,this.error,this.complete))},a}(),h=function(a){function b(b,c,d,e){a.call(this,b);var g=new f.Subscriber(c,d,e);g.syncErrorThrowable=!0,this.add(g),this.safeSubscriber=g}return e(b,a),b.prototype._next=function(a){var b=this.safeSubscriber;b.next(a),b.syncErrorThrown?this.destination.error(b.syncErrorValue):this.destination.next(a)},b.prototype._error=function(a){var b=this.safeSubscriber;b.error(a),b.syncErrorThrown?this.destination.error(b.syncErrorValue):this.destination.error(a)},b.prototype._complete=function(){var a=this.safeSubscriber;a.complete(),a.syncErrorThrown?this.destination.error(a.syncErrorValue):this.destination.complete()},b}(f.Subscriber);return c.exports}),a.registerDynamic("a",["4","9"],!0,function(a,b,c){"use strict";var d=(this||self,a("4")),e=a("9");return d.Observable.prototype.do=e._do,c.exports}),a.registerDynamic("b",["4","c","8","a"],!0,function(a,b,c){"use strict";var d=(this||self,a("4"));a("c"),a("8"),a("a");var e=document.querySelector("#rpslsP1Score"),f=document.querySelector("#rpslsP2Score"),g=document.querySelector("#rpslsP1"),h=document.querySelector("#rpslsP2"),i=0,j=0,k=["fa-hand-rock-o","fa-hand-paper-o","fa-hand-scissors-o","fa-hand-lizard-o","fa-hand-spock-o"],l=document.querySelector("#rpslsP1Move"),m=document.querySelector("#rpslsP2Move"),n=document.querySelectorAll("#rpsls > div"),o=n[0],p=n[1],q=n[2];return d.Observable.interval(7e3).do(function(a){o.classList.add("current"),p.classList.remove("current"),q.classList.remove("current"),l.classList.remove("win","loose","draw"),m.classList.remove("win","loose","draw"),g.classList.remove("win","loose","draw"),h.classList.remove("win","loose","draw")}).delay(1500).do(function(a){o.classList.remove("current"),p.classList.add("current")}).delay(250).do(function(a){return l.className=m.className="fa "+k[0]}).delay(250).do(function(a){return l.className=m.className="fa "+k[1]}).delay(250).do(function(a){return l.className=m.className="fa "+k[2]}).delay(250).do(function(a){return l.className=m.className="fa "+k[3]}).delay(250).do(function(a){return l.className=m.className="fa "+k[4]}).delay(250).do(function(a){l.className="fa "+k[Math.floor(Math.random()*k.length)],m.className="fa "+k[Math.floor(Math.random()*k.length)];var b=Math.floor(3*Math.random());switch(b){case 0:l.classList.add("draw"),m.classList.add("draw"),g.classList.add("draw"),h.classList.add("draw");break;case 1:l.classList.add("win"),m.classList.add("loose"),g.classList.add("win"),h.classList.add("loose"),++i;break;case 2:l.classList.add("loose"),m.classList.add("win"),g.classList.add("loose"),h.classList.add("win"),++j}}).delay(1500).do(function(a){p.classList.remove("current"),q.classList.add("current")}).delay(1e3).do(function(a){e.textContent=i.toString(),f.textContent=j.toString()}).delay(750).do(function(a){return q.classList.remove("current")}).subscribe(),c.exports}),a.registerDynamic("d",[],!1,function(b,c,d){var e=a.get("@@global-helpers").prepareGlobal(d.id,null,null);return function(a){fetch("https://api.github.com/users/tdillon/repos").then(function(a){return a.json()}).then(function(a){return document.querySelector("#numGithubRepos").textContent=a.length})}(this),e()}),a.registerDynamic("e",[],!0,function(a,b,c){"use strict";this||self;!function(a){a[a.ZERO=0]="ZERO",a[a.ONE=1]="ONE",a[a.TWO=2]="TWO",a[a.THREE=3]="THREE",a[a.FOUR=4]="FOUR",a[a.FIVE=5]="FIVE",a[a.SIX=6]="SIX",a[a.SEVEN=7]="SEVEN",a[a.EIGHT=8]="EIGHT",a[a.NINE=9]="NINE",a[a.BLANK=10]="BLANK",a[a.D=11]="D"}(b.Digit||(b.Digit={}));var d=b.Digit,e=function(){function a(){this.on=!1,this.points=[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}]}return Object.defineProperty(a.prototype,"off",{get:function(){return!this.on},enumerable:!0,configurable:!0}),a}();b.Segment=e;var f=function(){function a(a){var b=void 0===a?{}:a,c=b.height,f=b.width,g=b.angle,h=void 0===g?10:g,i=b.ratioLtoW,j=void 0===i?4:i,k=b.ratioLtoS,l=void 0===k?32:k,m=b.digit,n=void 0===m?d.BLANK:m;this._horizontalSegmentGeometry=[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],this._verticalSegmentGeometry=[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],this._translations=[{x:0,y:0,a:this._horizontalSegmentGeometry},{x:0,y:0,a:this._verticalSegmentGeometry},{x:0,y:0,a:this._verticalSegmentGeometry},{x:0,y:0,a:this._horizontalSegmentGeometry},{x:0,y:0,a:this._verticalSegmentGeometry},{x:0,y:0,a:this._verticalSegmentGeometry},{x:0,y:0,a:this._horizontalSegmentGeometry}],this.segments=[new e,new e,new e,new e,new e,new e,new e],this._angleDegree=h,this.digit=n,this._ratioLtoW=j,this._ratioLtoS=l,this._height=this._width=100,this._isHeightFixed=!0,void 0!==c?this._height=c:void 0!==f&&(this._width=f,this._isHeightFixed=!1),this._positionSegments()}return a.prototype._checkConfig=function(){var a,b;if(a=this._height,b=1*a,b!=a||"string"==typeof a&&""===a.toString().trim())throw new TypeError("Invalid value ("+a+") for height, not a number.");if(b<=0)throw new RangeError("Invalid value ("+b+") for height, must be greater than 0.");if(!isFinite(b))throw new RangeError("Invalid value ("+b+") for height, must be finite.");if(this._height=b,a=this._width,b=1*a,b!=a||"string"==typeof a&&""===a.toString().trim())throw new TypeError("Invalid value ("+a+") for width, not a number.");if(b<=0)throw new RangeError("Invalid value ("+b+") for width, must be greater than 0.");if(!isFinite(b))throw new RangeError("Invalid value ("+b+") for width, must be finite.");if(this._width=b,a=this._angleDegree,b=1*a,b!=a||"string"==typeof a&&""===a.toString().trim())throw new TypeError("Invalid value ("+a+") for angle, not a number.");if(b<=-90||b>=90)throw new RangeError("Invalid value ("+b+") for angle, must be between 90 and -90 degrees.");if(this._angleDegree=b,a=this._ratioLtoW,b=1*a,b!=a||"string"==typeof a&&""===a.toString().trim())throw new TypeError("Invalid value ("+a+") for ratioLtoW, not a number.");if(b<1)throw new RangeError("Invalid value ("+b+") for ratioLtoW, must be at least 1.");if(!isFinite(b))throw new RangeError("Invalid value ("+b+") for ratioLtoW, must be finite.");if(this._ratioLtoW=b,a=this._ratioLtoS,b=1*a,b!=a||"string"==typeof a&&""===a.toString().trim())throw new TypeError("Invalid value ("+a+") for ratioLtoS, not a number.");if(b<=0)throw new RangeError("Invalid value ("+b+") for ratioLtoS, must be greater than 0.");if(!isFinite(b))throw new RangeError("Invalid value ("+b+") for ratioLtoS, must be finite.");this._ratioLtoS=b},a.prototype._calculateSegmentGeometry=function(){this._angleRadian=this._angleDegree*Math.PI/180,this._segmentEndAngle=(Math.PI/2-this._angleRadian)/2,this._isHeightFixed?this._segmentLength=this._height/(1/this._ratioLtoW+2*Math.cos(this._angleRadian)+2*(Math.sin(this._segmentEndAngle)+Math.cos(this._segmentEndAngle))/this._ratioLtoS):this._segmentLength=this._width/(2*Math.sin(Math.abs(this._angleRadian))+2*Math.cos(this._angleDegree>=0?this._segmentEndAngle:Math.PI/2-this._segmentEndAngle)/this._ratioLtoS+1+Math.tan(this._angleDegree>=0?this._segmentEndAngle:Math.PI/2-this._segmentEndAngle)/this._ratioLtoW),this._spacing=this._segmentLength/this.ratioLtoS;var a=this._segmentLength/this.ratioLtoW;this._halfSegmentWidth=a/2,this._segmentHorizontalShiftDistance=this._halfSegmentWidth*Math.tan(this._angleDegree>=0?this._segmentEndAngle:Math.PI/2-this._segmentEndAngle),this._isHeightFixed?this._width=2*this._segmentLength*Math.sin(Math.abs(this._angleRadian))+2*this._spacing*Math.cos(this._angleDegree>=0?this._segmentEndAngle:Math.PI/2-this._segmentEndAngle)+this._segmentLength+2*this._segmentHorizontalShiftDistance:this._height=a+2*this._segmentLength*Math.cos(this._angleRadian)+2*this._spacing*(Math.sin(this._segmentEndAngle)+Math.cos(this._segmentEndAngle));var b=this._halfSegmentWidth,c=this._segmentLength,d=Math.tan(this._segmentEndAngle);if(this._horizontalSegmentGeometry[1].x=b/d,this._horizontalSegmentGeometry[1].y=this._horizontalSegmentGeometry[2].y=-b,this._horizontalSegmentGeometry[2].x=c-b*d,this._horizontalSegmentGeometry[3].x=c,this._horizontalSegmentGeometry[4].x=c-b/d,this._horizontalSegmentGeometry[4].y=this._horizontalSegmentGeometry[5].y=b,this._horizontalSegmentGeometry[5].x=b*d,this._horizontalSegmentGeometry[1].x>this._horizontalSegmentGeometry[2].x)throw new RangeError("This digit configuration produces invalid geometry.  angle: "+this._angleDegree+",   ratioLtoW: "+this._ratioLtoW+",   ratioLtoS: "+this._ratioLtoS);for(var e=0,f=void 0,g=void 0;(f=this._horizontalSegmentGeometry[e])&&(g=this._verticalSegmentGeometry[e]);++e)g.x=f.x,g.y=-f.y;for(var h=this._angleRadian+Math.PI/2,i=0,j=this._verticalSegmentGeometry;i<j.length;i++){var k=j[i],l=k.x,m=k.y;k.x=l*Math.cos(h)-m*Math.sin(h),k.y=l*Math.sin(h)+m*Math.cos(h)}},a.prototype._positionSegments=function(){this._checkConfig(),this._calculateSegmentGeometry();var a=this._segmentLength,b=this._spacing*Math.cos(this._segmentEndAngle),c=this._spacing*Math.sin(this._segmentEndAngle),d=this._translations;d[6].x=this._segmentHorizontalShiftDistance+a*Math.sin(Math.abs(this._angleRadian))+(this._angleDegree>=0?b:c),d[5].x=d[6].x-c+a*Math.sin(this._angleRadian),d[0].x=d[5].x+b,d[1].x=d[6].x+a+b+a*Math.sin(this._angleRadian),d[2].x=d[6].x+a+c,d[3].x=d[6].x+(c-b)-a*Math.sin(this._angleRadian),d[4].x=d[4].x=d[6].x-b,d[0].y=this._halfSegmentWidth,d[1].y=d[0].y+b,d[5].y=d[0].y+c,d[6].y=d[5].y+a*Math.cos(this._angleRadian)+b,d[2].y=d[6].y+b,d[4].y=d[6].y+c,d[3].y=d[4].y+a*Math.cos(this._angleRadian)+b;for(var e=0,f=void 0,g=void 0;(f=this.segments[e])&&(g=d[e]);++e)for(var h=0,i=void 0,j=void 0;(i=f.points[h])&&(j=g.a[h]);++h)i.x=j.x+g.x,i.y=j.y+g.y},a.prototype._set=function(a,b){var c=this[a];try{this[a]=b,this._positionSegments()}catch(b){throw this[a]=c,this._positionSegments(),b}},Object.defineProperty(a.prototype,"angle",{get:function(){return this._angleDegree},set:function(a){this._set("_angleDegree",a)},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"ratioLtoW",{get:function(){return this._ratioLtoW},set:function(a){this._set("_ratioLtoW",a)},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"ratioLtoS",{get:function(){return this._ratioLtoS},set:function(a){this._set("_ratioLtoS",a)},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"digit",{get:function(){return this._digit},set:function(b){var c=1*b;if(c!=b||"string"==typeof b&&""===b.toString().trim())throw new TypeError("Invalid value ("+b+") for digit, not a Digit.");if(void 0===d[c])throw new RangeError("Invalid value ("+c+") for digit, must be a Digit.");this._digit=c;for(var e=0,f=void 0;f=this.segments[e];++e)f.on=a.matrix[this._digit][e]},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"height",{get:function(){return this._height},set:function(a){var b=this._isHeightFixed;this._isHeightFixed=!0;try{this._set("_height",a)}catch(a){throw this._isHeightFixed=b,a}},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"width",{get:function(){return this._width},set:function(a){var b=this._isHeightFixed;this._isHeightFixed=!1;try{this._set("_width",a)}catch(a){throw this._isHeightFixed=b,a}},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"isHeightFixed",{get:function(){return this._isHeightFixed},set:function(a){this._isHeightFixed=!!a},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"isWidthFixed",{get:function(){return!this.isHeightFixed},set:function(a){this._isHeightFixed=!a},enumerable:!0,configurable:!0}),a.matrix=[[!0,!0,!0,!0,!0,!0,!1],[!1,!0,!0,!1,!1,!1,!1],[!0,!0,!1,!0,!0,!1,!0],[!0,!0,!0,!0,!1,!1,!0],[!1,!0,!0,!1,!1,!0,!0],[!0,!1,!0,!0,!1,!0,!0],[!0,!1,!0,!0,!0,!0,!0],[!0,!0,!0,!1,!1,!1,!1],[!0,!0,!0,!0,!0,!0,!0],[!0,!0,!0,!0,!1,!0,!0],[!1,!1,!1,!1,!1,!1,!1],[!1,!0,!0,!0,!0,!1,!0]],a}();return b.Seven=f,c.exports}),a.registerDynamic("f",["10"],!0,function(a,b,c){"use strict";function d(a){return!e.isArray(a)&&a-parseFloat(a)+1>=0}var e=(this||self,a("10"));return b.isNumeric=d,c.exports}),a.registerDynamic("11",["12"],!0,function(a,b,c){"use strict";var d=(this||self,a("12")),e=d.root.Symbol;return"function"==typeof e?e.observable?b.$$observable=e.observable:("function"==typeof e.for?b.$$observable=e.for("observable"):b.$$observable=e("observable"),e.observable=b.$$observable):b.$$observable="@@observable",c.exports}),a.registerDynamic("13",[],!0,function(a,b,c){"use strict";this||self;return b.empty={isUnsubscribed:!0,next:function(a){},error:function(a){throw a},complete:function(){}},c.exports}),a.registerDynamic("7",["14","15","16","13"],!0,function(a,b,c){"use strict";var d=(this||self,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),e=a("14"),f=a("15"),g=a("16"),h=a("13"),i=function(a){function b(c,d,e){switch(a.call(this),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=h.empty;break;case 1:if(!c){this.destination=h.empty;break}if("object"==typeof c){c instanceof b?(this.destination=c,this.destination.add(this)):(this.syncErrorThrowable=!0,this.destination=new j(this,c));break}default:this.syncErrorThrowable=!0,this.destination=new j(this,c,d,e)}}return d(b,a),b.create=function(a,c,d){var e=new b(a,c,d);return e.syncErrorThrowable=!1,e},b.prototype.next=function(a){this.isStopped||this._next(a)},b.prototype.error=function(a){this.isStopped||(this.isStopped=!0,this._error(a))},b.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},b.prototype.unsubscribe=function(){this.isUnsubscribed||(this.isStopped=!0,a.prototype.unsubscribe.call(this))},b.prototype._next=function(a){this.destination.next(a)},b.prototype._error=function(a){this.destination.error(a),this.unsubscribe()},b.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},b.prototype[g.$$rxSubscriber]=function(){return this},b}(f.Subscription);b.Subscriber=i;var j=function(a){function b(b,c,d,f){a.call(this),this._parent=b;var g,h=this;e.isFunction(c)?g=c:c&&(h=c,g=c.next,d=c.error,f=c.complete,e.isFunction(h.unsubscribe)&&this.add(h.unsubscribe.bind(h)),h.unsubscribe=this.unsubscribe.bind(this)),this._context=h,this._next=g,this._error=d,this._complete=f}return d(b,a),b.prototype.next=function(a){if(!this.isStopped&&this._next){var b=this._parent;b.syncErrorThrowable?this.__tryOrSetError(b,this._next,a)&&this.unsubscribe():this.__tryOrUnsub(this._next,a)}},b.prototype.error=function(a){if(!this.isStopped){var b=this._parent;if(this._error)b.syncErrorThrowable?(this.__tryOrSetError(b,this._error,a),this.unsubscribe()):(this.__tryOrUnsub(this._error,a),this.unsubscribe());else{if(!b.syncErrorThrowable)throw this.unsubscribe(),a;b.syncErrorValue=a,b.syncErrorThrown=!0,this.unsubscribe()}}},b.prototype.complete=function(){if(!this.isStopped){var a=this._parent;this._complete?a.syncErrorThrowable?(this.__tryOrSetError(a,this._complete),this.unsubscribe()):(this.__tryOrUnsub(this._complete),this.unsubscribe()):this.unsubscribe()}},b.prototype.__tryOrUnsub=function(a,b){try{a.call(this._context,b)}catch(a){throw this.unsubscribe(),a}},b.prototype.__tryOrSetError=function(a,b,c){try{b.call(this._context,c)}catch(b){return a.syncErrorValue=b,a.syncErrorThrown=!0,!0}return!1},b.prototype._unsubscribe=function(){var a=this._parent;this._context=null,this._parent=null,a.unsubscribe()},b}(i);return c.exports}),a.registerDynamic("16",["12"],!0,function(a,b,c){"use strict";var d=(this||self,a("12")),e=d.root.Symbol;return b.$$rxSubscriber="function"==typeof e&&"function"==typeof e.for?e.for("rxSubscriber"):"@@rxSubscriber",c.exports}),a.registerDynamic("17",["7","16"],!0,function(a,b,c){"use strict";function d(a,b,c){if(a&&"object"==typeof a){if(a instanceof e.Subscriber)return a;if("function"==typeof a[f.$$rxSubscriber])return a[f.$$rxSubscriber]()}return new e.Subscriber(a,b,c)}var e=(this||self,a("7")),f=a("16");return b.toSubscriber=d,c.exports}),a.registerDynamic("4",["12","11","17"],!0,function(a,b,c){"use strict";var d=(this||self,a("12")),e=a("11"),f=a("17"),g=function(){function a(a){this._isScalar=!1,a&&(this._subscribe=a)}return a.prototype.lift=function(b){var c=new a;return c.source=this,c.operator=b,c},a.prototype.subscribe=function(a,b,c){var d=this.operator,e=f.toSubscriber(a,b,c);if(e.add(d?d.call(e,this):this._subscribe(e)),e.syncErrorThrowable&&(e.syncErrorThrowable=!1,e.syncErrorThrown))throw e.syncErrorValue;return e},a.prototype.forEach=function(a,b){var c=this;if(b||(d.root.Rx&&d.root.Rx.config&&d.root.Rx.config.Promise?b=d.root.Rx.config.Promise:d.root.Promise&&(b=d.root.Promise)),!b)throw new Error("no Promise impl found");return new b(function(b,d){var e=c.subscribe(function(b){if(e)try{a(b)}catch(a){d(a),e.unsubscribe()}else a(b)},d,b)})},a.prototype._subscribe=function(a){return this.source.subscribe(a)},a.prototype[e.$$observable]=function(){return this},a.create=function(b){return new a(b)},a}();return b.Observable=g,c.exports}),a.registerDynamic("18",["19"],!0,function(a,b,c){"use strict";var d=(this||self,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),e=a("19"),f=function(a){function b(){a.apply(this,arguments)}return d(b,a),b.prototype._schedule=function(b,c){if(void 0===c&&(c=0),c>0)return a.prototype._schedule.call(this,b,c);this.delay=c,this.state=b;var d=this.scheduler;return d.actions.push(this),d.flush(),this},b}(e.FutureAction);return b.QueueAction=f,c.exports}),a.registerDynamic("12",[],!0,function(a,b,c){"use strict";var d=this||self,e={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1};b.root=e[typeof self]&&self||e[typeof window]&&window;var f=(e[typeof b]&&b&&!b.nodeType&&b,e[typeof c]&&c&&!c.nodeType&&c,e[typeof d]&&d);return!f||f.global!==f&&f.window!==f||(b.root=f),c.exports}),a.registerDynamic("10",[],!0,function(a,b,c){"use strict";this||self;return b.isArray=Array.isArray||function(a){return a&&"number"==typeof a.length},c.exports}),a.registerDynamic("1a",[],!0,function(a,b,c){"use strict";function d(a){return null!=a&&"object"==typeof a}this||self;return b.isObject=d,c.exports}),a.registerDynamic("14",[],!0,function(a,b,c){"use strict";function d(a){return"function"==typeof a}this||self;return b.isFunction=d,c.exports}),a.registerDynamic("1b",["1c"],!0,function(a,b,c){"use strict";function d(){try{return f.apply(this,arguments)}catch(a){return g.errorObject.e=a,g.errorObject}}function e(a){return f=a,d}var f,g=(this||self,a("1c"));return b.tryCatch=e,c.exports}),a.registerDynamic("1c",[],!0,function(a,b,c){"use strict";this||self;return b.errorObject={e:{}},c.exports}),a.registerDynamic("1d",[],!0,function(a,b,c){"use strict";var d=(this||self,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),e=function(a){function b(b){a.call(this),this.errors=b,this.name="UnsubscriptionError",this.message=b?b.length+" errors occurred during unsubscription:\n"+b.map(function(a,b){return b+1+") "+a.toString()}).join("\n"):""}return d(b,a),b}(Error);return b.UnsubscriptionError=e,c.exports}),a.registerDynamic("15",["10","1a","14","1b","1c","1d"],!0,function(a,b,c){"use strict";var d=(this||self,a("10")),e=a("1a"),f=a("14"),g=a("1b"),h=a("1c"),i=a("1d"),j=function(){function a(a){this.isUnsubscribed=!1,a&&(this._unsubscribe=a)}return a.prototype.unsubscribe=function(){var a,b=!1;if(!this.isUnsubscribed){this.isUnsubscribed=!0;var c=this,j=c._unsubscribe,k=c._subscriptions;if(this._subscriptions=null,f.isFunction(j)){var l=g.tryCatch(j).call(this);l===h.errorObject&&(b=!0,(a=a||[]).push(h.errorObject.e))}if(d.isArray(k))for(var m=-1,n=k.length;++m<n;){var o=k[m];if(e.isObject(o)){var l=g.tryCatch(o.unsubscribe).call(o);if(l===h.errorObject){b=!0,a=a||[];var p=h.errorObject.e;p instanceof i.UnsubscriptionError?a=a.concat(p.errors):a.push(p)}}}if(b)throw new i.UnsubscriptionError(a)}},a.prototype.add=function(b){if(b&&b!==this&&b!==a.EMPTY){var c=b;switch(typeof b){case"function":c=new a(b);case"object":if(c.isUnsubscribed||"function"!=typeof c.unsubscribe)break;this.isUnsubscribed?c.unsubscribe():(this._subscriptions||(this._subscriptions=[])).push(c);break;default:throw new Error("Unrecognized teardown "+b+" added to Subscription.")}return c}},a.prototype.remove=function(b){if(null!=b&&b!==this&&b!==a.EMPTY){var c=this._subscriptions;if(c){var d=c.indexOf(b);d!==-1&&c.splice(d,1)}}},a.EMPTY=function(a){return a.isUnsubscribed=!0,a}(new a),a}();return b.Subscription=j,c.exports}),a.registerDynamic("19",["12","15"],!0,function(a,b,c){"use strict";var d=(this||self,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),e=a("12"),f=a("15"),g=function(a){function b(b,c){a.call(this),this.scheduler=b,this.work=c,this.pending=!1}return d(b,a),b.prototype.execute=function(){if(this.isUnsubscribed)this.error=new Error("executing a cancelled action");else try{this.work(this.state)}catch(a){this.unsubscribe(),this.error=a}},b.prototype.schedule=function(a,b){return void 0===b&&(b=0),this.isUnsubscribed?this:this._schedule(a,b)},b.prototype._schedule=function(a,b){var c=this;void 0===b&&(b=0),this.state=a,this.pending=!0;var d=this.id;return null!=d&&this.delay===b?this:(this.delay=b,null!=d&&(this.id=null,e.root.clearInterval(d)),this.id=e.root.setInterval(function(){c.pending=!1;var a=c,b=a.id,d=a.scheduler;d.actions.push(c),d.flush(),c.pending===!1&&null!=b&&(c.id=null,e.root.clearInterval(b))},b),this)},b.prototype._unsubscribe=function(){this.pending=!1;var a=this,b=a.id,c=a.scheduler,d=c.actions,f=d.indexOf(this);null!=b&&(this.id=null,e.root.clearInterval(b)),f!==-1&&d.splice(f,1),this.work=null,this.state=null,this.scheduler=null},b}(f.Subscription);return b.FutureAction=g,c.exports}),a.registerDynamic("1e",["18","19"],!0,function(a,b,c){"use strict";var d=(this||self,a("18")),e=a("19"),f=function(){function a(){this.active=!1,this.actions=[],this.scheduledId=null}return a.prototype.now=function(){return Date.now()},a.prototype.flush=function(){if(!this.active&&!this.scheduledId){this.active=!0;for(var a=this.actions,b=null;b=a.shift();)if(b.execute(),b.error)throw this.active=!1,b.error;this.active=!1}},a.prototype.schedule=function(a,b,c){return void 0===b&&(b=0),b<=0?this.scheduleNow(a,c):this.scheduleLater(a,b,c)},a.prototype.scheduleNow=function(a,b){return new d.QueueAction(this,a).schedule(b);
},a.prototype.scheduleLater=function(a,b,c){return new e.FutureAction(this,a).schedule(c,b)},a}();return b.QueueScheduler=f,c.exports}),a.registerDynamic("1f",["19","1e"],!0,function(a,b,c){"use strict";var d=(this||self,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),e=a("19"),f=a("1e"),g=function(a){function b(){a.apply(this,arguments)}return d(b,a),b.prototype.scheduleNow=function(a,b){return new e.FutureAction(this,a).schedule(b,0)},b}(f.QueueScheduler);return b.AsyncScheduler=g,c.exports}),a.registerDynamic("6",["1f"],!0,function(a,b,c){"use strict";var d=(this||self,a("1f"));return b.async=new d.AsyncScheduler,c.exports}),a.registerDynamic("20",["f","4","6"],!0,function(a,b,c){"use strict";var d=(this||self,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),e=a("f"),f=a("4"),g=a("6"),h=function(a){function b(b,c){void 0===b&&(b=0),void 0===c&&(c=g.async),a.call(this),this.period=b,this.scheduler=c,(!e.isNumeric(b)||b<0)&&(this.period=0),c&&"function"==typeof c.schedule||(this.scheduler=g.async)}return d(b,a),b.create=function(a,c){return void 0===a&&(a=0),void 0===c&&(c=g.async),new b(a,c)},b.dispatch=function(a){var b=a.index,c=a.subscriber,d=a.period;c.next(b),c.isUnsubscribed||(a.index+=1,this.schedule(a,d))},b.prototype._subscribe=function(a){var c=0,d=this.period,e=this.scheduler;a.add(e.schedule(b.dispatch,d,{index:c,subscriber:a,period:d}))},b}(f.Observable);return b.IntervalObservable=h,c.exports}),a.registerDynamic("21",["20"],!0,function(a,b,c){"use strict";var d=(this||self,a("20"));return b.interval=d.IntervalObservable.create,c.exports}),a.registerDynamic("c",["4","21"],!0,function(a,b,c){"use strict";var d=(this||self,a("4")),e=a("21");return d.Observable.interval=e.interval,c.exports}),a.registerDynamic("22",["e","4","c"],!0,function(a,b,c){"use strict";var d=(this||self,a("e")),e=a("4");a("c");var f=document.querySelector("#cvsSeven"),g=f.getContext("2d"),h=new d.Seven({digit:d.Digit.SEVEN,height:f.height}),i=(f.width-h.width)/2;return e.Observable.interval(1e3).subscribe(function(a){h.digit=a%10,g.clearRect(0,0,f.width,f.height);for(var b=0,c=h.segments;b<c.length;b++){var d=c[b];g.fillStyle="rgba(255,255,255,"+(d.on?.87:.05)+")",g.beginPath();for(var e=0,j=d.points;e<j.length;e++){var k=j[e];g.lineTo(i+k.x,k.y+.5)}g.closePath(),g.fill()}}),c.exports}),a.registerDynamic("1",["b","d","22"],!0,function(a,b,c){"use strict";this||self;return a("b"),a("d"),a("22"),c.exports})})(function(a){"function"==typeof define&&define.amd?define([],a):"object"==typeof module&&module.exports&&"function"==typeof require?module.exports=a():a()});