(function() {
  'use strict';
  angular.module('mySycamore')

  .controller('SubmitController', SubmitController);

  /** @ngInject */
  function SubmitController($scope, $firebaseArray, FIREBASE_URL, $firebaseObject, $stateParams, $http) {
    var ref = new Firebase(FIREBASE_URL);
    $scope.cards = $firebaseArray(ref);

    $scope.submitCard = function() {
      $scope.cards.$add({
        name: $scope.newCardName,
        est: $scope.newCardEst,
        birthplace: $scope.newCardBirthplace,
        bio: emptyValue($scope.newCardBio),
        phone: emptyValue($scope.newCardPhone),
        email: emptyValue($scope.newCardEmail),
        photo: emptyValue($scope.newCardPhoto),
        spouseOf: $stateParams.card,
        childOf: $stateParams.card,
      });

      $scope.newCardName = "";
      $scope.newCardEst = "";
      $scope.newCardBirthplace = "";
      $scope.newCardBio = "";
      $scope.newCardPhone = "";
      $scope.newCardEmail = "";

      function emptyValue(card) {
        if (card) {
          return card;
        } else {
          return null;
        }
      }

    }; //End of Submit Card function

    // function spouseOf() {
    //   $http.get('https://mysycamore.firebaseio.com/cards/' + $stateParams.relationCard + '.json')
    //     .then(function(response) {
    //       $scope.relationCard = response.data;
    //       console.log(response.data);
    //     });
    // }


    // // $scope.deleteCard = function(index) {
    // //   $scope.cards.$remove(index, 1);
    // // };
  } //End of Submit Controller
})();