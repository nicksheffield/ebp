angular.module('app.services')

.factory('$shell', function() {
	return require('electron').shell
})