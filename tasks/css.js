"use strict";

var gulp = require('gulp')
var rename = require('gulp-rename')
var stylus = require('gulp-stylus')
var minify = require('gulp-clean-css')
var autoprefix = require('gulp-autoprefixer')

var filelog = require('gulp-filelog')

var {errorHandler, paths} = require('./utils')

gulp.task('css', function() {
	var stream = gulp.src(paths.css.main)
		.pipe(errorHandler())
		.pipe(stylus())
		.pipe(autoprefix())
		.pipe(minify())
		.pipe(rename(paths.css.name))
		.pipe(gulp.dest(paths.output))
	
	return stream
})