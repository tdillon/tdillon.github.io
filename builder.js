var Builder = require('systemjs-builder');
var builder = new Builder('', 'system.config.js');

//TODO Uglify js does not support ES2015 yet.  Once it does, set minify = true.
builder.buildStatic('app', 'dist/bundle.js', { minify: false, mangle: true, sourceMaps: false });