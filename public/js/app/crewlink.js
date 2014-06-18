// define(
// 	['angular', 'angularRoute', 'vacancyController' , 'module'],
// 	function(angular) {
// 		return angular.module('crewlink', ['ngRoute', 'controller.vacancy' , 'directivePath.module']).
// 			config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
// 				$routeProvider.when('/', {
// 					templateUrl: '/templates/views/index.html',
// 				}).when('/apply', {
// 					templateUrl: '/templates/views/apply.html',
// 				}).when('/gallery', {
// 					templateUrl: '/templates/views/gallery.html',
// 				}).when('/vacancies', {
// 					templateUrl: '/templates/views/vacancy.html',
// 					controller: 'vacancyController'
// 				}).when('/guigui', {
// 					// template Test ...
// 					templateUrl: '/templates/views/guigui.html',					
// 				}).when('/subnav' , {
// 					templateUrl: '/templates/views/mySubNav.html',	
// 				}).otherwise({
// 					redirectTo: '/'
// 				});
// 				//Removes '#' from urls
//                 $locationProvider.html5Mode(true);
// 			}
// 		]);

// 	}
// );



// ****************** SAVE DIRECTIVES 02 ********************** //
define(
	['angular', 'angularRoute', 'angularAnimate', 'vacancyController'],
	function(angular) {
		return angular.module('crewlink', ['ngRoute',  'ngAnimate' , 'controller.vacancy' ]).
			config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
				$routeProvider.when('/', {
					templateUrl: '/templates/views/index.html',
				}).when('/apply', {
					templateUrl: '/templates/views/apply.html',
				}).when('/gallery', {
					templateUrl: '/templates/views/gallery.html'
				}).when('/vacancies', {
					templateUrl: '/templates/views/vacancy.html',
					controller: 'vacancyController'
				}).when('/guigui', {
					// template Test ...
					templateUrl: '/templates/views/guigui.html',					
				}).when('/subnav' , {
					templateUrl: '/templates/views/mySubNav.html',	
				}).otherwise({
					redirectTo: '/'
				});

				//Removes '#' from urls
                $locationProvider.html5Mode(true);

			}
		]).directive('headerMenu' , function(){
			return {
		        restrict: 'E',
		        scope: false,
		        templateUrl: 'templates/views/elements/header.html'
	      	}
		}).directive('footerMenu' , function(){
			return {
		        restrict: 'E',
		        scope: false,
		        templateUrl: 'templates/views/elements/footer.html'
	      	}
		}).directive('advertSidebar' , function(){
			return {
		        restrict: 'E',
		        scope: false,
		        templateUrl: 'templates/views/elements/adapply.html'
	      	}
		}).directive('testimonialSidebar' , function(){
			return {
		        restrict: 'E',
		        scope: false,
		        templateUrl: 'templates/views/elements/testimonial.html'
	      	}
		}).directive('slideShow' , function($timeout){
			/* **** 	CREATE SLIDESHOW	 **** */
			return {
				restrict: 'AE',
				// replace: true,
				scope: {
					images: '=',					
				},
				link: function (scope, elem, attrs){ 
					var timer;
					var sliderFunc = function(){
						timer = $timeout(function(){
							scope.next();
							timer = $timeout(sliderFunc, 2500);
						}, 2500);
					}
					// timer to change pictures
					//sliderFunc();
					scope.$on('$destroy' , function(){
						$timeout.cancel(timer);
					});


					scope.currentIndex = 0; // Initially the index is at the first image 
					scope.next = function() {
					//console.log(scope.currentIndex)
					  scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
					};					 
					scope.prev = function() {
					  scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;				  
					};
					//var newIndex;
					scope.clickToImg = function(newIndex) {
						//console.log(scope.currentIndex +  ' <    curindex   /// index    >   ' +  newIndex );
						// alert(newIndex);
						//scope.currentIndex = newIndex;
						scope.currentIndex = newIndex - 1;
					};
					// scope.allo = function(testt) {
					// 	alert('allo')
					// }
					scope.$watch('currentIndex', function() {						
						scope.images.forEach(function(image) {
							image.visible = false; // make every image invisible
						});
						scope.images[scope.currentIndex].visible = true; // make the current image visible
					});
				},
				templateUrl: 'templates/views/elements/slideshow.html'
			}
		}).controller('slideshowController' , function($scope){
			/* **** 	DEFINE PARAMS IMG FOR SLIDSHOW 	**** */
			//$scope.myvar = "totot";
			$scope.images = [{
					index: 1,
					src: 'images/images____02.png',
					title: 'Pic 1'
				}, {
					index: 2,
					src: 'images/images____03.png',
					title: 'Pic 2'
				}, {
					index: 3,
					src: 'images/images____07.png',
					title: 'Pic 3'
				}, {
					index: 4,
					src: 'images/images____05.png',
					title: 'Pic 4'
				}, {
					index: 5,
					src: 'images/images____06.png',
					title: 'Pic 5'
				}];
			});
	}
);









// ************ SAVE ORIGINAL CODE 01 *************** //

// define(
// 	['angular', 'angularRoute', 'vacancyController' , 'applyController'],
// 	function(angular) {
// 		return angular.module('crewlink', ['ngRoute', 'controller.vacancy' , 'controller.apply']).
// 			config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
// 				$routeProvider.when('/', {
// 					templateUrl: '/templates/views/index.html',
// 				}).when('/apply', {
// 					templateUrl: '/templates/views/apply.html'
// 					controller: 'applyController'
// 				}).when('/gallery', {
// 					templateUrl: '/templates/views/gallery.html'
// 				}).when('/vacancies', {
// 					templateUrl: '/templates/views/vacancy.html',
// 					controller: 'vacancyController'
// 				}).when('/guigui', {
// 					templateUrl: '/templates/views/guigui.html',					
// 				}).otherwise({
// 					redirectTo: '/'
// 				});

// 				//Removes '#' from urls
//                 $locationProvider.html5Mode(true);
// 			}
// 		]);
// 	}
// );

