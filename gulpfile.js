'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function () {
    return gulp.src('dist/shower.gamepad.js')
        .pipe(eslint('.eslintrc'))
        .pipe(eslint.format());
});
