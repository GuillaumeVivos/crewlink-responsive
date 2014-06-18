define(
	['angular', 'vacancyFactory'],
	function(angular) {
		return angular.module('controller.vacancy', ['factory.vacancy']).
			controller('vacancyController', ['$scope', 'vacancyApi', function($scope, vacancyApi) {
				$scope.getVacancies = function() {
					vacancyApi.getVacancies().success(function(data) {
						if(data.response.result.success === true) {
							$scope.vacancies = angular.fromJson(data.response.data[0]);
						} else {
							//Display this message somewhere so the user can knows if there is a problem
							$scope.message = {
								type: 'error',
								value: data.response.result.message
							};
						}
					});
				};
			}
		]);
	}
);