var gulp = require('gulp'),
  useref = require('gulp-useref'),
  del = require('del')
  preprocess = require('gulp-preprocess');


gulp.task('clean:weather', function() {
  return del([
    'weather/src',
    'weather/index.html',
    'weather/app/src/**/*.js',
    'weather/app/src/**/*.map'
  ]);
});
gulp.task('useref:weather', function() {
  return gulp.src('weather/app/index.html')
    .pipe(useref())
    .pipe(gulp.dest('weather'));
});
gulp.task('copy:weather', function() {
  return gulp
    .src([
      'weather/app/src/**/*.html',
      'weather/app/src/**/*.css',
      'weather/app/src/**/*.js',
      'weather/app/src/preset-themes.json'
    ])
    .pipe(gulp.dest('weather/src'))
});
gulp.task('build:weather', ['useref:weather', 'copy:weather']);



gulp.task('clean:sevenClock', function() {
  return del([
    'clocks/7/src',
    'clocks/7/index.html',
    'clocks/7/app/src/**/*.js',
    'clocks/7/app/src/**/*.map'
  ]);
});
gulp.task('useref:sevenClock', function() {
  return gulp.src('clocks/7/app/index.html')
    .pipe(preprocess({context: {NODE_ENV: 'production'}}))
    .pipe(useref())
    .pipe(gulp.dest('clocks/7'));
});
gulp.task('copy:sevenClock', function() {
  return gulp
    .src([
      'clocks/7/app/src/**/*.js',
      'node_modules/seven-segment/7.js'
    ])
    .pipe(gulp.dest('clocks/7/src'))
});
gulp.task('build:sevenClock', ['useref:sevenClock', 'copy:sevenClock']);



gulp.task('clean:bootstrap', function() {
  return del('css/bootstrap.min.css');
});
gulp.task('copy:bootstrap', ['clean:bootstrap'], function() {
  return gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest('css'));
});
gulp.task('build:bootstrap', ['copy:bootstrap']);



gulp.task('clean', ['clean:weather', 'clean:bootstrap', 'clean:sevenClock']);

gulp.task('default', ['build:weather', 'build:sevenClock', 'build:bootstrap']);
