"use strict"

const notify = require('gulp-notify')
const plumber = require('gulp-plumber')

module.exports = {
	paths: {
		css: {
			all: ['app/client/style/*.styl', 'app/client/style/**/*.styl'],
			main: 'app/client/style/__main.styl',
			name: 'app.min.css'
		},
		angular: {
			all: ['app/client/angular/*.js', 'app/client/angular/**/*.js'],
			views: ['app/client/angular/*.html', 'app/client/angular/**/*.html'],
			main: 'app/client/angular/app.js',
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