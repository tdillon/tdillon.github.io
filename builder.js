var Builder = require('systemjs-builder');
var builder = new Builder();

builder.config({
    map: {
      'app': 'js',
      'rxjs': 'node_modules/rxjs',
      'seven-segment': 'node_modules/seven-segment/dist/seven-segment.js'
    },
    packages: {
      'app':{ main: 'main.js',  defaultExtension: 'js' },
      'rxjs':{ defaultExtension: 'js' },
      'seven-segment':{ defaultExtension: 'js' }
    }
  });

builder.buildStatic('app', 'dist/bundle.js', { minify: true, mangle: true, sourceMaps: false});