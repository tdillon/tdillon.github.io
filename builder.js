var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('./', 'clocks/7/systemjs.config.prod.js');

builder
  .bundle('src/main.js', 'clocks/7/src/bundle.js', {
    minify: true,
    mangle: true,
    sourceMaps: false
  })
  .then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
  });


builder = new Builder('./', 'weather/systemjs.config.prod.js');

builder
  .bundle('src/main.js', 'weather/src/bundle.js', {
    minify: true,
    mangle: true,
    sourceMaps: false
  })
  .then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
  });
