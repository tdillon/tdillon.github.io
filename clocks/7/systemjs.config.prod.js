/**
 * This is the config used by systemjs-builder to create the production bundle.
 * The only differences are in the map object.
 * If you are smarter than me you can figure out a nice way to reuse instead of duplicating all of this.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'src': 'clocks/7/app/src', // 'dist',
    '@angular': './node_modules/@angular',
    'angular2-in-memory-web-api': './node_modules/angular2-in-memory-web-api',
    'rxjs': './node_modules/rxjs',
    'seven-segment': './node_modules/seven-segment'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'src': {
      main: 'main.js',
      defaultExtension: 'js'
    },
    'rxjs': {
      defaultExtension: 'js'
    },
    'angular2-in-memory-web-api': {
      defaultExtension: 'js'
    },
    'seven-segment':{
      main: 'dist/seven-segment',
      defaultExtension:'js'
    }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/' + pkgName] = {
      main: pkgName + '.umd.js',
      defaultExtension: 'js'
    };
  });
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);
