var Config = require('electron-config')
var config = new Config()

console.log(require('electron').app.getPath('userData'))

console.log('config:', config.path)