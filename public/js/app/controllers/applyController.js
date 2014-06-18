define(
	['angular'],
	function(angular) {
		return angular.module('controller.apply').
			controller('applyController', ['$scope',  function($scope) {
				// alert('bbbbb');
			}])
			.directive('slideShow' , function(){
				return {
					restrict : 'A',
					templateUrl : 'templates/views/apply.html',
					link: function(scope , element , attrs){
						$(element).bjqs(scope.$eval(attrs.slideShow));
						alert('oooo');
					}
				};
			});
	}
);