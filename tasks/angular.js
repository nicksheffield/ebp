"use strict";

var gulp = require('gulp')
var order = require('gulp-order')
var babel = require('gulp-babel')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var addsrc = require('gulp-add-src')
var annotate = require('gulp-ng-annotate')
var templateCache = require('gulp-angular-templatecache')

var filelog = require('gulp-filelog')

var {errorHandler, paths} = require('./utils')

gulp.task('angular', function() {
	var stream = gulp.src(paths.angular.views)
		.pipe(errorHandler())
		.pipe(templateCache('templates.js', {module: 'app.views'}))
		.pipe(addsrc(paths.angular.all))
		.pipe(order([paths.angular.main]))
		.pipe(babel({ presets: ['es2015'] }))
		.pipe(annotate())
		.pipe(uglify())
		.pipe(concat(paths.angular.name))
		.pipe(gulp.dest(paths.output))
		
	return stream
})
