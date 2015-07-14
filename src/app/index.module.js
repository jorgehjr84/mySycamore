(function() {
  'use strict';

  angular
    .module('mySycamore', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'firebase'])
    .constant('FIREBASE_URL', 'https://mysycamore.firebaseio.com')
    .factory('cardFactory', ['$http', function($http) {

      cardFactory.getName = function() {
        return $http.get(FIREBASE_URL)
      }
      var factory = {};
      factory.cards = [''];
      return factory;
    }]);
})();