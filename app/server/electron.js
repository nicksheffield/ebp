const {app} = require('electron')
const central = require('./central')

app.on('ready', function() {
	require('./menu')
	central.window = require('./window')
})

app.on('window-all-closed', () => app.quit())

module.exports = { app }