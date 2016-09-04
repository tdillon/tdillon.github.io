var Builder = require('systemjs-builder');
var builder = new Builder('', 'system.config.js');

//TODO For some reason, setting minify to true causes systemjs-builder to error.
builder.buildStatic('app', 'dist/bundle.js', { minify: false, mangle: true, sourceMaps: false });