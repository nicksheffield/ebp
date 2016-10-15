const {ipcMain} = require('electron')

ipcMain.on('eventOne', function(event, data) {
	event.sender.send('eventTwo', {})
})