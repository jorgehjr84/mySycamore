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


    $scope.deleteCard = function(card) {
      var cardRef = new Firebase(FIREBASE_URL);
      $scope.deleteCards = $firebaseArray(cardRef);
      $scope.cards.$remove(card);
      console.log(cardRef);
    };

    // var moveCard = document.getElementById('moveCard');
    // var container = document.getElementById('center_content');
    //
    // var cardLeft = 90;
    //
    // function positionCards(e) {
    //   if (e.keycode == 39) {
    //     left += 2;
    //     moveCard.style.left = cardLeft + 'px';
    //   }
    //   if (e.keycode == 37) {
    //     left -= 2;
    //     moveCard.style.left = cardLeft + 'px';
    //
    //   }
    //   // alert(e.keyCode);
    // }
    // document.onkeydown = positionCards;

  } //End of TreeController Function
})();