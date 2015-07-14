(function() {
  "use strict";
  angular.module('mySycamore')
    .factory('cardFactory', ['$http', function($http, $firebase, FIREBASE_URL) {
      //var cards = [];
      var cardFactory = {};
      cardFactory.getCards = function() {
        return $http.get(FIREBASE_URL)
      };
      cardFactory.getCard = function(id) {
        return $http.get(FIREBASE_URL + '/' + id);
      };
      cardFactory.getCardName = function(name) {
        return $http.get(FIREBASE_URL + '/' + id + '/' + name);
      };
      return factory;
    }])
})();