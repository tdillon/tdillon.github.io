var gulp = require('gulp'),
  useref = require('gulp-useref');

gulp.task('default', function () {
  return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulp.dest('./'));
});