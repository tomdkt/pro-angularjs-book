/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:2403/products")
    .constant("orderUrl", "http://localhost:2403/orders")
    .controller("sportsStoreCtrl", function ($scope, $http, $location, dataUrl, orderUrl, cart) {
      $scope.data = {};

      $http.get(dataUrl).success(function (data) {
        $scope.data.products = data;
      }).error(function (error, status) {
        $scope.data.error = {message: error, status: status};
        console.log($scope.data.error.status);
      });

      $scope.sendOrder = function (shippingDetails) {
        var order = angular.copy(shippingDetails);
        order.products = cart.getProducts();
        $http.post(orderUrl, order)
            .success(function (data) {
              $scope.data.orderId = data.id;
              cart.getProducts().length = 0;
            })
            .error(function (message, status) {
              $scope.data.orderError = {message: message, status: status};
            }).finally(function () {
          $location.path("/complete");
        });
      }
    });
