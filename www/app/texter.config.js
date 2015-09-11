(function(){
	angular
		.module('app.texter')
		.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider
			.when('/texter', {
				controller: "TexterCtrl",
				controllerAs: "vm",
				templateUrl: "app/texter.html"
			});
	}
})();