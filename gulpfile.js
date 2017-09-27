var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass');
  
  
  var sassIn = 'sass/**/*.scss';
  var sassOut = 'css';	
  
  gulp.task('sass', function () {
    gulp.src(sassIn)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(sassOut));
  });
gulp.task('connect', function() {
  connect.server();
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
 
 
gulp.task('default', ['connect', 'sass'], function() {
	gulp.watch(sassIn, ['sass']);
});