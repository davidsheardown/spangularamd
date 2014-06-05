//
//  REQUIREJS CONFIG
//  Sets up required libraries for use, and executes the main app.js file.
//
'use strict';

require.config({

    baseUrl: '/',
    urlArgs: 'v=1.0',

    paths: {
        
        // Library definitions/alias
        'angular': 'bower_components/angular/angular.min',
        'angular-route': 'bower_components/angular-route/angular-route.min',
        'angular-cookies': 'bower_components/angular-cookies/angular-cookies.min',
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'toastr': 'bower_components/toastr/toastr.min',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'toastr': {
            deps: ['jquery'],
            exports: 'toastr'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    },
    priority: ['jquery', 'angular', 'bootstrap']
});

//  ------------------------------------------------------------------------------------------------------------
//  MAIN APP START
//  ------------------------------------------------------------------------------------------------------------
require(
    [
        'angular',
        'angular-route',
        'angular-cookies',
        'app/routeProvider',
        'bootstrap',
        'app/app',
        'app/services/simpleService',
        'app/services/promisedService'
    ],
    function () {
        angular.bootstrap(document, ['app']);
    }
);