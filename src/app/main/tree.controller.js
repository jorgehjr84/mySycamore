(function() {
  'use strict';

  angular.module('mySycamore')
    .controller('TreeController', TreeController);


  /** @ngInject */
  function TreeController($scope, $http, $firebaseArray, FIREBASE_URL, $stateParams, $firebaseObject) {


    var cardsRef = new Firebase(FIREBASE_URL);
    $scope.cards = $firebaseArray(cardsRef);

    //  $http.get(FIREBASE_URL + '.json').success(function(data) {
    //    $scope.cards = data;
    //  });

    // $scope.toggle = false;
    // $scope.toggle_grandParent = false;
    // $scope.toggle_parent = false;
    // $scope.toggle_spouse = false;
    // $scope.toggle_sibling = false;
    // $scope.toggle_child = false;


    // $scope.deleteCard = function(id) {
    //   $http.delete('https://mysycamore.firebaseio.com/cards/' + id + '.json');
    // };


    $scope.sortableOptions = {
      update: function(e, ui) {

      },
      containment: "parent",
      cursor: "move",

      axis: 'x'
    };




  }; //End of TreeController Function
})();