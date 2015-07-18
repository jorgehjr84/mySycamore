(function() {
  'use strict';

  angular.module('mySycamore')
    .controller('TreeController', TreeController);


  /** @ngInject */
  function TreeController($scope, $http, $firebaseArray, FIREBASE_URL, $stateParams) {

    $http.get(FIREBASE_URL + '.json').success(function(data) {
      $scope.cards = data;
    });

    // $scope.deleteItem = function(id) {
    //   var itemRef = new Firebase(url + '/' + id);
    //   itemRef.remove();
    // }
    $scope.toggle = false;

    $scope.deleteCard = function(card) {
      var cardRef = new Firebase(FIREBASE_URL);
      $scope.deleteCards = $firebaseArray(cardRef);
      $scope.cards.$remove(card);
      console.log(cardRef);
    };

  } //End of TreeController Function
})();