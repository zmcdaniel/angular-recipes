angular.module('RecipeServices', ['ngResource'])
.factory('Recipe', ['$resource', function($resource) {
  return $resource('/api/recipes/:id');
}]);
.factory('Auth', ['$window', function($window){
  return {
    saveToken: function(token) {
      $window.localStorage['secretrecipes-token'] = token;
    },
    getToken: function() {
      return $window.localStorage['secretrecipes-token'];
    },
    removeToken: function() {
      $window.localStorage.removeItem('secretrecipes-token');
    }
  }
}]);