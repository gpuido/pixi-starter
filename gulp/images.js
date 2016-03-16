var gulp = require('gulp');
var path = require('path');

var config = require('./config');

gulp.task('images', function() {
  return gulp
    .src([path.join(config.paths.images, '/**/*.png')])
    .pipe(gulp.dest(path.join(config.paths.dist, '/images')));
});
