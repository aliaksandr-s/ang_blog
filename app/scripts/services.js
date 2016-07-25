'use strict';

angular.module('angBlogApp')
  .constant("baseUrl", "http://localhost:2403/news/")
  .constant("authUrl", "http://localhost:2403/users/login")
  .factory('data', function($http, $resource, baseUrl, $location, $rootScope) {
    var url = $resource(baseUrl + ":id", {
      id: "@id"
    });
    return {
      getItems: function() {
        return url.query();
      },
      getItemById: function(id) {
        return url.get({
          id: id
        })
      }
    };
  })
