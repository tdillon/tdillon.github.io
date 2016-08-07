var Builder = require('systemjs-builder');
var builder = new Builder();

builder.config({
    map: {
      'app': 'js',
      'rxjs': 'node_modules/rxjs'
    },
    packages: {
      'app':{ main: 'main.js',  defaultExtension: 'js' },
      'rxjs':{ defaultExtension: 'js' }
    }
  });  // systemjs config

builder.buildStatic('app', 'dist/bundle.js', { minify: true, mangle: true, sourceMaps: false});