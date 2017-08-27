'use strict';
var gulp = require('gulp');

var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function() {
  gulp.src(['./sass/*.sass'])
  .pipe(sass())
  .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/*.sass', ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'sass']);