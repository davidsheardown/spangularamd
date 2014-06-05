'use strict';

define(['app/app'], function (app) {

    app.register.controller('homeController',
        ['$scope', '$routeParams', 'simpleService', 'promisedService',
        function ($scope, $routeParams, simpleService, promisedService) {

            // Set the default city for weather
            $scope.weather = { city: 'london, uk' };

            // Example use of $scope - simple value
            $scope.simpleValue = "Simple value from homeController";

            //  How to reference a service which may return data (in this case a json object)
            $scope.simpleServiceData = simpleService.names;

            // Controllers can $watch for changes in the model bindings, and action based on those observations.
            // In this example, we are passing the user entered greeting to our simple service "returnedGreeting" function which will
            // return a message back using the $scope.returnedGreeting value rendered out on the view
            $scope.$watch('simpleModel.greeting', function (valueEntered) {
                $scope.returnedGreeting = simpleService.returnGreeting(valueEntered);
            });

            $scope.getWeather = function () {

                // Make a call to our service to get the weather info
                var cityForWeather = 'London, uk';
                if (this.weather.city !== null | this.weather.city !== undefined) {
                    cityForWeather = this.weather.city;
                }
                var weatherInfo = promisedService.getWeatherData(cityForWeather);

                // Because the service call is using a promise, we can ensure we have either the data, or the status of why the call failed
                weatherInfo.then(function (data) {

                    // Data call success, log out the data and update a simple text variable
                    console.log('Weather data returned ok', data);
                    $scope.weatherStation = 'Weather for: ' + data.name + '.';
                    $scope.weatherTemp = 'temp: ' + data.main.temp + 'c, ';
                    $scope.weatherHumidity = 'humidity: ' + data.main.humidity + '%, ';
                    $scope.weatherSummary = data.weather[0].description + ', ';
                    $scope.weatherWindSpeed = 'wind speed: ' + data.wind.speed + 'mph. Gusts: ' + data.wind.gust + 'mph. Degrees: ' + data.wind.deg;

                }, function (status) {

                    // Call failed
                    console.log('Weather data failed', status);
                });
            }
        }
    ]);

});