var gulp = require('gulp'),
  useref = require('gulp-useref'),
  del = require('del');


gulp.task('clean:weather', function() {
  return del(['weather/src', 'weather/index.html']);
});
gulp.task('useref:weather', ['clean:weather'], function() {
  return gulp.src('weather/app/index.html')
    .pipe(useref())
    .pipe(gulp.dest('weather'));
});
gulp.task('copy:weather', ['clean:weather'], function() {
  return gulp
    .src(['weather/app/src/**/*.html', 'weather/app/src/**/*.css'])
    .pipe(gulp.dest('weather/src'))
});
gulp.task('build:weather', ['useref:weather', 'copy:weather']);



gulp.task('clean:sevenClock', function() {
  return del(['clocks/7/src', 'clocks/7/index.html']);
});
gulp.task('useref:sevenClock', ['clean:sevenClock'], function() {
  return gulp.src('clocks/7/app/index.html')
    .pipe(useref())
    .pipe(gulp.dest('clocks/7'));
});
gulp.task('build:sevenClock', ['useref:sevenClock']);



gulp.task('clean:bootstrap', function() {
  return del('css/bootstrap.min.css');
});
gulp.task('copy:bootstrap', ['clean:bootstrap'], function() {
  return gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest('css'));
});
gulp.task('build:bootstrap', ['copy:bootstrap']);


gulp.task('default', ['build:weather', 'build:sevenClock', 'build:bootstrap']);
