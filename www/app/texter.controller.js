(function(){
	angular
		.module('app.texter')
		.controller('TexterCtrl', TexterCtrl);

	TexterCtrl.$inject = ['$scope', 'Students'];

	function TexterCtrl($scope, Students) {
		var vm = this;
		vm.message = "Hello World";
		vm.students = []
		vm.selectedStudent = '';
		vm.selectionInvalid = true;

		Students.all.then(StudentsReceived);

		function StudentsReceived(students) {
			vm.students = students;
		}

		$scope.$watch('vm.selectedStudent', function(newValue) {
			debugger;
		});
	}
})();