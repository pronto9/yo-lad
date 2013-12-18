'use strict';

angular.module('yoLadApp', [
  'ngResource',
  'ngRoute',
  'yoLadApp.controllers'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
