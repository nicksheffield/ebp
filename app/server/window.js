const {BrowserWindow} = require('electron')

const window = new BrowserWindow({width: 800, height: 600})

window.loadURL(`file://${__dirname}/client/app.html`)
window.on('closed', () => window = null)

module.exports = { window }