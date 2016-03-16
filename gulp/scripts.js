var gulp = require('gulp');
var path = require('path');

var rollup = require('rollup');
var json = require('rollup-plugin-json');
var babel = require('rollup-plugin-babel');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');

var config = require('./config');

gulp.task('scripts', function() {
  return rollup.rollup({
    entry: config.paths.main,
    plugins: [
      json(),
      babel(),
      nodeResolve({
        jsnext: true,
        main: true,
        browser: true
      }),
      commonjs({
        ignoreGlobal: false
      })
    ]
  }).then(function(bundle) {
    // Generate bundle + sourcemap
    return bundle.write({
      // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
      format: 'iife',
      sourceMap: true,
      sourceMapFile: path.join(config.paths.dist, '/app.js.map'),
      dest: path.join(config.paths.dist, '/app.js')
    });

  });
});
