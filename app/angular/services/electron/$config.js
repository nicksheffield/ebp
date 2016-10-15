angular.module('app.services')

.factory('$config', function() {
	const Config = require('electron-config')
	const config = new Config()
	
	const service = {
		get: function(name) {
			let config = new Config()
			return config.get(name)
		},
		set: function(name, val) {
			return config.set(name, val)
		}
	}
	
	return service
})