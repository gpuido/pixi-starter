var gulp = require('gulp');
var path = require('path');

var config = require('./config');

gulp.task('html', function() {
  return gulp
    .src([path.join(config.paths.src, '/**/*.html')])
    .pipe(gulp.dest(config.paths.dist));
});
