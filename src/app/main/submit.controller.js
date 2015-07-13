(function() {
  'use strict';

  angular.module('mySycamore')
    .controller('SubmitController', SubmitController);

  /** @ngInject */
  function SubmitController($scope, $firebaseArray, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    $scope.cards = $firebaseArray(ref);

    //$scope.cards = [];
    //$scope.card = {
    //url: 'https://mysycamore.firebaseio.com',
    //title: 'mySycamore'
    //};

    $scope.submitCard = function() {
      $scope.cards.$add({
        text: $scope.newMessageText
      });

      // $scope.card = {
      //   url: 'https://mysycamore.firebaseio.com',
      //   title: 'mySycamore'
      // };

      $scope.deleteCard = function(index) {
        $scope.cards.$remove(index, 1);
      };

    };

  } //End of Submit Controller
})();