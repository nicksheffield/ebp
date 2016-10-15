"use strict";

var gulp = require('gulp')
var {paths} = require('./utils')

gulp.task('watch', ['angular', 'css'], function() {
	gulp.watch([paths.css.all], ['css'])
	gulp.watch([paths.angular.all], ['angular'])
	gulp.watch([paths.angular.views], ['angular'])
})