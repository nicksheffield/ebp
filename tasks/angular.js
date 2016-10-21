"use strict"

const gulp = require('gulp')
const order = require('gulp-order')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const addsrc = require('gulp-add-src')
const annotate = require('gulp-ng-annotate')
const templateCache = require('gulp-angular-templatecache')

const {errorHandler, paths} = require('./utils')

gulp.task('angular', function() {
	const stream = gulp.src(paths.angular.views)
		.pipe(errorHandler())
		.pipe(templateCache('t.js', {module: 'app.views'}))
		.pipe(addsrc(paths.angular.all))
		.pipe(order([paths.angular.main]))
		.pipe(babel({ presets: ['es2015'] }))
		.pipe(annotate())
		.pipe(uglify())
		.pipe(concat(paths.angular.name))
		.pipe(gulp.dest(paths.output))
		
	return stream
})
