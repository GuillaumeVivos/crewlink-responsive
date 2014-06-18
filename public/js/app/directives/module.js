define([
    'angular'
], function() {
    angular.module('directives.module', [])
        .directive('directiveOne', ['$rootScope',
            function($rootScope) {
                return {
                    restrict: 'E',
                    scope: false,
                    templateUrl: 'templates/views/elements/header.html'
                };
            }
        ]);
});