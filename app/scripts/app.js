'use strict';

/**
 * @ngdoc overview
 * @name angBlogApp
 * @description
 * # angBlogApp
 *
 * Main module of the application.
 */
angular
  .module('angBlogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularUtils.directives.dirPagination'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/auth', {
        templateUrl: 'views/auth.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin',
        resolve: {
          factory: checkRouting
        }
      })
      .when('/admin/add-post', {
        templateUrl: 'views/add_post.html',
        controller: 'AddPostCtrl',
        controllerAs: 'add_post',
        resolve: {
          factory: checkRouting
        }
      })
      .when('/admin/edit-post/:itemId', {
        templateUrl: 'views/edit_post.html',
        controller: 'EditPostCtrl',
        controllerAs: 'edit',
        resolve: {
          factory: checkRouting
        }
      })
      .when('/:itemId', {
        templateUrl: 'views/post_detail.html',
        controller: 'PostDetailCtrl',
        controllerAs: 'post_detail'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .run(function($rootScope, $location, data) {
    $rootScope.isLogged = false;
    $rootScope.showAuthWarning = false;
  });

  var checkRouting= function ($rootScope, $location) {
      if (!$rootScope.isLogged) {
        $rootScope.showAuthWarning = true;
        $location.path("/auth");
      }
  };



  // if ($rootScope.isLogged) {
  //     console.log("logged");
  //     return true;
  // } else {
  //     console.log("not logged");
  //     $rootScope.showAuthWarning = true;
  //     $location.path("/auth");
  //     return false;
  // }
