var Builder = require('systemjs-builder');
var builder = new Builder('', 'system.config.js');

builder.buildStatic('app', 'dist/bundle.js', { minify: true, mangle: true, sourceMaps: false });