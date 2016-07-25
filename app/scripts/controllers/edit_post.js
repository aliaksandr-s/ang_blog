'use strict';

angular.module('angBlogApp')
  .controller('EditPostCtrl', function($scope, $routeParams, $location, $route, data) {
    $scope.post = data.getItemById($routeParams.itemId);

    $scope.update = function(item) {
      item.$save();
      $('#myModal2').modal()
    }
    $('#myModal2').on('hidden.bs.modal', function() {
      $location.path('/admin');
      $route.reload();
    })

    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          $('#imagePreview').attr('src', e.target.result);
          $scope.post.image = reader.result; //turn image into base64 and add it to post
        }
        reader.readAsDataURL(input.files[0]);
      }
    }

    $("#post-image").on("change", function() {
      if (!this.files[0].name.match(/\.(jpg|jpeg|png|gif)$/)) {
        $("#ImageErrorMessage").removeClass('hidden');
        $('#imagePreview').addClass('hidden');
        $(this).val('');
      } else {
        readURL(this);
        $("#ImageErrorMessage").addClass('hidden');
        $('#imagePreview').removeClass('hidden');
      }
    })
  });
