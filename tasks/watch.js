"use strict";

const gulp = require('gulp')
const {paths} = require('./utils')

gulp.task('watch', ['angular', 'css'], function() {
	gulp.watch([paths.css.all], ['css'])
	gulp.watch([paths.angular.all], ['angular'])
	gulp.watch([paths.angular.views], ['angular'])
})