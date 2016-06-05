var gulp = require('gulp');
var gutil = require('gulp-util'); // logs build output
var source = require('vinyl-source-stream'); // piping output from one process to another
var browserify = require('browserify'); // load order/dependencies
var watchify = require('watchify'); // rebuilds on change
var reactify = require('reactify'); // converts jsx to js


gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if(file){
      gutil.log('Recompiling ' + file);
    }
    return bundler
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('main.js'))
    .pipe(gulp.dest('./'));
  }
  build();
  bundler.on('update', build);
});
