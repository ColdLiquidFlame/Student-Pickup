(function(){
	angular
		.module('app', [
			'ngRoute',
			'firebase',
			'app.texter'
		])
		.run(run);

	run.$inject = ['$rootScope'];
	function run($rootScope) {
		$rootScope.safeApply = safeApply;
	}

	function safeApply(fn) {
		var phase = this.$root.$$phase;
	    if(phase == '$apply' || phase == '$digest') {
	      if(fn && (typeof(fn) === 'function')) {
	        fn();
	      }
	    } else {
	      this.$apply(fn);
	    }
	}
})();
