(function() {
  'use strict';

  angular.module('mySycamore')
    .controller('TreeController', TreeController);


  /** @ngInject */
  function TreeController($scope, $http, $firebaseArray, FIREBASE_URL, $stateParams, $firebaseObject) {

    $http.get(FIREBASE_URL + '.json').success(function(data) {
      $scope.cards = data;
    });

    //Converts Firebase Object to Array so I can use UI-Sortable
    var cardsRef = new Firebase(FIREBASE_URL);
    $scope.cards = $firebaseArray(cardsRef);

    // $scope.deleteCard = function(id) {
    //   $http.delete('https://mysycamore.firebaseio.com/cards/' + id + '.json');
    // };


    $scope.sortableOptions = {
      update: function(e, ui) {},
      containment: "parent",
      connectWith: ".center_content",
      cursor: "move",
      axis: 'x,y'
    };


  }; //End of TreeController Function
})();