'use strict';
requirejs.config({
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
        bootstrap: '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
        angular: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.5/angular.min',
        angularRoute: '/js/lib/angularRoute.min',

        angularAnimate: 'http://code.angularjs.org/1.2.9/angular-animate.min',

        crewlink: '/js/app/crewlink',
        vacancyController: '/js/app/controllers/vacancyController',
        vacancyFactory: '/js/app/factories/vacancyFactory',
        directivePath: '/js/app/directives/module'
    },
    shim: {
        'angularRoute': ['angular'],
        angular: {
            exports: 'angular'
        }
    },
    priority: ['angular']
});

require(
    ['jquery', 'bootstrap', 'angular', 'crewlink'],
    function($, bootstrap, angular, crewlink) {
        angular.bootstrap(document, ['crewlink']);
    });



// **************** SAVE ORIGINAL CODE ************** //
// 'use strict';
// requirejs.config({
//     paths: {
//     	jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
//     	bootstrap: '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
//     	angular: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.5/angular.min',
//         angularRoute: '/js/lib/angularRoute.min',
//         crewlink: '/js/app/crewlink',
//         vacancyController: '/js/app/controllers/vacancyController',
//         vacancyFactory: '/js/app/factories/vacancyFactory'
//     },
//     shim: {
// 		'angularRoute': ['angular'],
//         angular: {
//             exports: 'angular'
//         }
//     },
//     priority: ['angular']
// });

// require(
//     ['jquery', 'bootstrap', 'angular', 'crewlink'],
//     function($, bootstrap, angular, crewlink) {
//         angular.bootstrap(document, ['crewlink']);
//     });