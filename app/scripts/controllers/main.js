'use strict';

angular.module('yoLadApp.controllers', [])
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('goods/goods.json').success(function(data) {
            $scope.goods = data;
            $scope.numColumns = 3;
            $scope.rows = [];
            $scope.rows.length = Math.ceil($scope.goods.length / $scope.numColumns);
            $scope.cols = [];
            $scope.cols.length = $scope.numColumns;
          });
      }]);


