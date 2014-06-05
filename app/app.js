//
//  MAIN APP ENTRY 
//  This is the main bootstrap application which sets up global configs and registers the routes for the application.
//
'use strict';

define(['app/routeProvider', 'toastr'], function (router, toastr) {

    //  Declare main app - this is the main module for the whole app
    var app = angular.module('app', ['ngRoute', 'routeResolverModule']);

    // Setup the config to register the ng required modules, including our default route resolver
    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        // Toastr notifications config
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "positionClass": "toast-top-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }

        // Register provider types for angular
        app.register =
        {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

        // Define routes - controllers will be loaded dynamically
        var route = routeResolverProvider.route;

        // Change default views and controllers directory using the following:
        //routeResolverProvider.routeConfig.setBaseDirectories('/app/views', '/app/controllers');

        // Define the routes for the app - controllers and views will be dynamically loaded
        $routeProvider
            .when('/', route.resolve('home'))
            .otherwise({ redirectTo: '/' });
    }]);

    return app;
});