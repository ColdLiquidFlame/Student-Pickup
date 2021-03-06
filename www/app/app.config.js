(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$routeProvider', '$locationProvider'];

	function config($routeProvider, $locationProvider){
	  $routeProvider.otherwise({redirectTo: '/texter'});

	  $locationProvider.html5Mode(true);
	}
})();