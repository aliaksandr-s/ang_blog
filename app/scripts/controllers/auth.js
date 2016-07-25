'use strict';

angular.module('angBlogApp')
  .controller('AuthCtrl', function($scope, $http, $location, $rootScope, authUrl) {
    $scope.authUser = function(user) {
      var req = {
       method: 'POST',
       url: authUrl,
       data: user
      }

      $http(req).then(function(response){
        $rootScope.isLogged = true;
        $scope.warning = false;
        $location.path('/admin');
      }, function(response){
        $scope.warning = true;
      });
    }

    $scope.logout = function () {
      $rootScope.isLogged = false;
      console.log($rootScope.isLogged);
    }
  });
