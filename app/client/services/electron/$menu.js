angular.module('app.services')

// https://github.com/electron/electron/blob/master/docs/api/menu.md
// https://github.com/electron/electron/blob/master/docs/api/menu-item.md
.factory('$menu', function($remote) {
	const Menu = $remote.Menu
	const MenuItem = $remote.MenuItem
	
	const menu = Menu.getApplicationMenu()
	
	// add any new menu items to menu here
	
	Menu.setApplicationMenu(menu)
	
	window.oncontextmenu = function(e) {
		e.preventDefault()
		menu.popup($remote.getCurrentWindow())
	}
	
	const service = {}
	
	return service
})