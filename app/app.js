'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
.controller('Hello', function($scope, $http, $timeout) {
  
    // Function to get the data
    $scope.getData = function(){
      $http.get('http://spotlight-backend-spotlight.1d35.starter-us-east-1.openshiftapps.com/greeting').
      then(function(response) {
          $scope.greeting = response.data;
      });
    };
  
    // Function to replicate setInterval using $timeout service.
    $scope.intervalFunction = function(){
      $timeout(function() {
        $scope.getData();
        $scope.intervalFunction();
      }, 5000)
    };
  
    // Kick off the interval
    $scope.intervalFunction();
  
  });
