"use strict";

const gulp = require('gulp')
const rename = require('gulp-rename')
const stylus = require('gulp-stylus')
const minify = require('gulp-clean-css')
const autoprefix = require('gulp-autoprefixer')

const filelog = require('gulp-filelog')

const {errorHandler, paths} = require('./utils')

gulp.task('css', function() {
	const stream = gulp.src(paths.css.main)
		.pipe(errorHandler())
		.pipe(stylus())
		.pipe(autoprefix())
		.pipe(minify())
		.pipe(rename(paths.css.name))
		.pipe(gulp.dest(paths.output))
	
	return stream
})