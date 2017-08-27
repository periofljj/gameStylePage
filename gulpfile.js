'use strict';
var gulp = require('gulp');

var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function() {
  gulp.src(['./sass/*.sass'])
  .pipe(sass())
  .pipe(gulp.dest('./css/'));
});

gulp.task('scss', function() {
  gulp.src(['./sass/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/*.sass', ['sass']);
});

gulp.task('watch1', function() {
  gulp.watch('./sass/*.scss', ['scss']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'sass', 'watch1', 'scss']);