'use strict';

angular.module('angBlogApp')
  .controller('AddPostCtrl', function($scope, $http, $location, $route, baseUrl) {
    $scope.post = {};
    $scope.showMessage = true;

    $scope.addNewPost = function(post) {
      var req = {
        method: 'POST',
        url: baseUrl,
        data: post
      }
      $http(req).then(function(response) {
        $('#myModal2').modal()
      }, function(response) {
        console.log("error");
      });
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
        $("#deleteImageButton").addClass('hidden');
        $('#imagePreview').addClass('hidden');
        $(this).val('');
      } else {
        readURL(this);
        $("#ImageErrorMessage").addClass('hidden');
        $("#deleteImageButton").removeClass('hidden');
        $('#imagePreview').removeClass('hidden');
      }
    })

    $("#deleteImageButton").click(function() {
      $("#post-image").val('');
      $('#imagePreview').addClass('hidden')
      $(this).addClass('hidden');
    })

  });
