'use strict';

/**
 * @ngdoc function
 * @name angBlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angBlogApp
 */
angular.module('angBlogApp')
  .controller('PostDetailCtrl', function ($scope, $routeParams, data) {
    $scope.item = data.getItemById($routeParams.itemId);
  });
