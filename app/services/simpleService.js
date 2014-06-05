'use strict';

define(['app/app'], function (app) {

    app.factory('simpleService', 
        ['$http',
        function ($http) {

            // Create a public module handle (could use the other style of:
            //                                  var service = {
            //                                      publicFunction: privateFunction
            //                                  }
            var simpleServiceReturn = {};

            // Create a demo json object which can be consumed by the calling controller/module etc
            simpleServiceReturn.names = [
                        { "id": 1, "name": "Name 1" },
                        { "id": 2, "name": "Name 2" },
                        { "id": 3, "name": "Name 3" },
                        { "id": 4, "name": "Name 4" },
                        { "id": 5, "name": "Name 5" }
            ];

            // Example of $WATCH being called from the controller/passed through to the view (2-way)
            simpleServiceReturn.returnGreeting = function (greeting) {
                return (greeting === undefined | greeting === '') ? 'No one to say hello to.' : 'Welcome, and hello to you ' + greeting;
            }

            return simpleServiceReturn;
        }
    ]);
});