"use strict"

const Config = require('electron-config')
let config = new Config()

console.log('config:', config.path)

module.exports = {
	config: {
		get: function(name) {
			let config = new Config()
			return config.get(name)
		},
		set: function(name, val) {
			return config.set(name, val)
		},
		has: function(name) {
			let config = new Config()
			return config.has(name)
		},
		delete: function(name) {
			let config = new Config()
			return config.delete(name)
		},
		clear: function() {
			let config = new Config()
			return config.clear()
		},
		path: config.path
	}
}