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


gulp.task('default', ['build:weather']);
