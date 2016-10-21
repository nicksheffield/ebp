const ipc = require('electron').ipcMain

ipcMain.on('eventOne', function(event, data) {
	event.sender.send('eventTwo', {})
})

module.exports = { ipc }