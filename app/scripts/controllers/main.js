'use strict';

angular.module('yoLadApp.controllers', [])
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log('try to load goods');
        $http.get('goods/goods.json').success(function(data) {
            console.log('Load data!');
            $scope.goods = data;
        });

  }]);


