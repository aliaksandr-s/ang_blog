'use strict';

angular.module('angBlogApp')
  .controller('AdminCtrl', function($scope, $resource, data, $location, $rootScope) {
    $scope.items = data.getItems();
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    $scope.deleteItem = function(item) {
      item.$delete().then(function() {
        $scope.items.splice($scope.items.indexOf(item), 1);

        //force removal of modal window
        $('#myModal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').fadeTo(250, 0, function() {
          $('.modal-backdrop').remove();
        });
      });
    }

    $scope.editItem = function(id) {
      $location.path('admin/edit-post/' + id);
    }

    $scope.addNewPost = function() {
      $location.path('/admin/add-post');
    }

  });
