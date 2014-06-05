'use strict';

define(['app/app'], function (app) {

    app.factory('promisedService',
        ['$http', '$log', '$q',
        function ($http, $log, $q) {

            // Create a public module handle (could use the other style of:
            //                                  var service = {
            //                                      publicFunction: privateFunction
            //                                  }
            var promisedServiceReturn = {};

            // Using a promise to ensure we only callback when suceeded/completed fully
            // (an example service is to return the weather for London UK)
            promisedServiceReturn.getWeatherData = function (city) {
                
                // Setup the promise
                var deferred = $q.defer();

                // Using the Angular $http module, get the weather api data
                $http({ method: 'GET', url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' })
                    .success(function (data, status, headers, config) {

                        // If the service call was successful, we can resolve the promise which will return to the consumer the data
                        deferred.resolve(data);
                    })
                    .error(function (data, status, headers, config) {

                        // If the service call failed, we can use $log (angular log module) to send out an error/warning, and reject the promise for the consuming callback
                        $log.warn('Cannot access the provide weather API', data, status);
                        deferred.reject(status);
                    })

                return deferred.promise;
            }

            // Return the exposed public functions
            return promisedServiceReturn;
        }
    ]);
});