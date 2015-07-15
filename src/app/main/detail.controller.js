(function() {
  'use strict';
  angular.module('mySycamore')

  .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($scope, FIREBASE_URL, $firebaseObject, $stateParams) {
    var cards = new Firebase('https://mysycamore.firebaseio.com/cards/');
    $scope.cardId = $firebaseObject(cards.child($stateParams.cardId));
    console.log();


  } //End of Detail Controller
})();