/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:2403/products")
    .controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
      $scope.data = {};

      $http.get(dataUrl).success(function (data) {
        $scope.data.products = data;
      }).error(function(error, status) {
        $scope.data.error = { message: error, status: status};
        console.log($scope.data.error.status);
      });
    });
