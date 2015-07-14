(function() {
  'use strict';

  angular.module('mySycamore')
    .controller('SubmitController', SubmitController);

  /** @ngInject */
  function SubmitController($scope, $firebaseArray, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    $scope.cards = $firebaseArray(ref);

    $scope.submitCard = function() {
      $scope.cards.$add({
        name: $scope.newCardName,
        est: $scope.newCardEst,
        birthplace: $scope.newCardBirthplace,
        bio: undefined($scope.newCardBio),
        phone: undefined($scope.newCardPhone),
        email: undefined($scope.newCardEmail),
        photo: undefined($scope.newCardPhoto)

      });
      $scope.newCardName = "";
      $scope.newCardEst = "";
      $scope.newCardBirthplace = "";
      $scope.newCardBio = "";
      $scope.newCardPhone = "";
      $scope.newCardEmail = "";

      function undefined(card) {
        if (card) {
          return card;
        } else {
          return null;
        }
      };

      // $scope.change = function(card, nodeName) {
      //   if (!angular.isDefined(card[nodeName])) {
      //     card[nodeName] = null;
      //   }
      // }
      //
      // // $scope.deleteCard = function(index) {
      // //   $scope.cards.$remove(index, 1);
      // // };

    };

  } //End of Submit Controller
})();