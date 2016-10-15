// ------------------------------------------------------------
//   Electron App
// ------------------------------------------------------------
var app = require('electron').app
var BrowserWindow = require('electron').BrowserWindow


// ------------------------------------------------------------
//   Offshoots
// ------------------------------------------------------------
require('./electron/config')
require('./electron/icp')


// ------------------------------------------------------------
//   Window Management
// ------------------------------------------------------------
app.on('ready', function() {
	require('./electron/menu')
	
	var mainWindow = new BrowserWindow({width: 800, height: 600})
	
	mainWindow.loadURL(`file://${__dirname}/app.html`)
	
	mainWindow.on('closed', function () {
		mainWindow = null
	})
})

app.on('window-all-closed', function() {
	app.quit()
})