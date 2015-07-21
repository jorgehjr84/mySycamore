(function() {
  'use strict';

  angular.module('mySycamore')
    .controller('TreeController', TreeController);


  /** @ngInject */
  function TreeController($scope, $http, $firebaseArray, FIREBASE_URL, $stateParams) {

    $http.get(FIREBASE_URL + '.json').success(function(data) {
      $scope.cards = data;
      console.log($scope.cards);

    });
    // $scope.deleteItem = function(id) {
    //   var itemRef = new Firebase(url + '/' + id);
    //   itemRef.remove();
    // }
    $scope.toggle = false;
    $scope.toggle_grandParent = false;
    $scope.toggle_parent = false;
    $scope.toggle_spouse = false;
    $scope.toggle_sibling = false;
    $scope.toggle_child = false;

    $scope.deleteCard = function(card) {
      var cardRef = new Firebase(FIREBASE_URL);
      $scope.deleteCards = $firebaseArray(cardRef);
      $scope.cards.$remove(card);
      console.log(cardRef);
    };


  } //End of TreeController Function
})();