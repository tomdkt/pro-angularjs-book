/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", function ($scope, $filter, productListActiveClass, productListPageCount) {

      var selectedCategory = null;
      $scope.selectedPage = 1;
      $scope.pageSize = productListPageCount;

      $scope.selectCategory = function (newCategory) {
        selectedCategory = newCategory;
        $scope.selectedPage = 1;
      };

      $scope.selectPage = function (newPage) {
        $scope.selectedPage = newPage;
      };

      $scope.categoryFilterFn = function (product) {
        return selectedCategory === null || product.category === selectedCategory;
      };

      $scope.getCategoryClass = function (category) {
        return selectedCategory === category ? productListActiveClass : "";
      };

      $scope.getPageClass = function (page) {
        return $scope.selectedPage === page ? productListActiveClass : "";
      };

      $scope.data = {
        products: [
          {name: "Product #1", description: "A product",
            category: "Category #1", price: 100},
          {name: "Product #2", description: "A product",
            category: "Category #1", price: 110},
          {name: "Product #3", description: "A product",
            category: "Category #2", price: 210},
          {name: "Product #4", description: "A product",
            category: "Category #3", price: 202}
        ]
      };

    });