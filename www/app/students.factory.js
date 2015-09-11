(function() {
	angular
		.module('app')
		.factory('Students', Students);

	Students.$inject = ['$firebaseObject', '$q', '$rootScope'];

	function Students($firebaseObject, $q, $rootScope) {
		var ref = new Firebase("https://student-pickup.firebaseio.com/students");

		var service = {
			all: GetAllStudents()
		};

		return service;

		function GetAllStudents() {
			var deferred = $q.defer(),
				students = [];

			ref
				.orderByChild("StudentNumber")
				.on("value", StudentValueChanged);

			function StudentValueChanged(snapshot) {
				snapshot.forEach(function(childSnapshot) {
					var student = childSnapshot.val();
					student.Label = 

					student.StudentNumber + ': ' + student.FirstName + ' ' + student.LastName + ' (' + student.Grade + ')';
					students.push(student);
				});

				deferred.resolve(students);
				$rootScope.safeApply();
			}

			return deferred.promise;
		}
	}


})();