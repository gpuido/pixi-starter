var gulp = require('gulp');
var del = require('del');
var config = require('./config');
var path = require('path');

gulp.task('clean', function() {
  return del([path.join(config.paths.dist, '/')]);
});

gulp.task('build', ['scripts', 'html', 'images']);
