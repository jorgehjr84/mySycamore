(function() {
  'use strict';
  angular.module('mySycamore')

  .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($scope, FIREBASE_URL, $firebaseObject, $stateParams, $firebaseArray) {
    //var cards = new Firebase('https://mysycamore.firebaseio.com/cards/');
    //$scope.cardId = $firebaseArray(cards.child($stateParams.cardsID));
    //console.log($scope.cardId);
  } //End of Detail Controller
})();