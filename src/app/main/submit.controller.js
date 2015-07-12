(function() {
  'use strict';

  angular.module('mySycamore')
    .controller('SubmitController', SubmitController);

  /** @ngInject */
  function SubmitController($scope, Card) {
    // var ref = new Firebase('https://mysycamore.firebaseio.com')
    $scope.cards = [];
    $scope.card = {
      url: 'https://mysycamore.firebaseio.com',
      title: 'mySycamore'
    };

    $scope.submitCard = function() {
      Card.save($scope.card);
      $scope.cards.push($scope.card);
      $scope.card = {
        url: 'https://mysycamore.firebaseio.com',
        title: 'mySycamore'
      };

      $scope.deleteCard = function(index) {
        $scope.cards.splice(index, 1);
      };

    };

  } //End of Submit Controller
})();