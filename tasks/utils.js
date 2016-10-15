"use strict";

const notify = require('gulp-notify')
const plumber = require('gulp-plumber')

module.exports = {
	paths: {
		css: {
			all: ['app/style/*.styl', 'app/style/**/*.styl'],
			main: 'app/style/__main.styl',
			name: 'app.min.css'
		},
		angular: {
			all: ['app/angular/*.js', 'app/angular/**/*.js'],
			views: ['app/angular/*.html', 'app/angular/**/*.html'],
			main: 'app/angular/app.js',
			name: 'app.min.js'
		},
		output: 'app/dist'
	},
	errorHandler: function() {
		return plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		})
	}
}