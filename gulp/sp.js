/**
 * Created by sp-admin on 3/28/2015.
 */
var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});
module.exports = function(options) {
  //copy task
  gulp.task('copy', function () {
    var sp = options.layouts + 'apTest'
    var spbwr = options.layouts + 'bower_components'
    gulp.src(['./src/**/*'])
      .pipe(gulp.dest(sp));
    gulp.src(['./bower_components/**/*'])
      .pipe(gulp.dest(spbwr));
  });

gulp.task('open', function(){
  var opts = {
    url: options.sp + '_layouts/apTest/',
    app: 'chrome'
  };
  gulp.src('./src/index.html')
    .pipe(
    $.open('index.html', opts)
  )
});

  gulp.task('watch-sp', ['copy'], function () {
    gulp.watch(['./src/**/*.*', './bower_components/**/*'], function (event) {
      console.log(event);
      if (event.type == 'added' || event.type == 'deleted') {
        gulp.start(['inject-src', 'copy']);
      } else {
        gulp.start('copy');
      }
    })
  });

  gulp.task('serve-sp', ['inject-src', 'copy', 'open']);
};
