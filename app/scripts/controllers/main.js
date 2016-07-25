'use strict';

/**
 * @ngdoc function
 * @name angBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angBlogApp
 */
angular.module('angBlogApp')
  .controller('MainCtrl', function($scope, data) {
    $scope.items = data.getItems();
    $scope.currentPage = 1;
    $scope.pageSize = 10;
  });




  // $scope.pageChangeHandler = function(num) {
  //   console.log(num);
  // };
