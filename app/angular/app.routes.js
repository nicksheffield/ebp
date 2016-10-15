angular.module('app.routes')

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/')

	$stateProvider.state('welcome', {
		url: '/',
		templateUrl: 'views/welcome.html',
		controller: 'welcomeCtrl',
		data: {}
	})
})