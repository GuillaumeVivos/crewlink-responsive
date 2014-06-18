define(
	['angular'],
	function(angular) {
		return angular.module('factory.vacancy', []).
			factory('vacancyApi', ['$http', function($http){
				return{
					getVacancies: function() {
						var requestData = {
                            action: 'RecruiterAction',
                            payload: {
                                method: 'crewlinkVacancies',
                                recruiterEmail: 'recruit@crewlink.ie'
                            }
                        };

                        return $http({
                        	url: 'https://www.vivos.me/_api',
                        	data: requestData,
                        	method: 'POST'
                        });
					}
				};
			}
		]);
	}
);