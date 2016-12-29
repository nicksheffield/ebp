"use strict"

const ipc = require('electron').ipcMain

ipc.on('eventOne', function(event, data) {
	event.sender.send('eventTwo', {})
})

module.exports = { ipc }