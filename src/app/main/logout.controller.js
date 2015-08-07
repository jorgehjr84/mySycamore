(function() {
  'use strict';
  angular.module('mySycamore')

  .controller('logoutController', logoutController);

  /** @ngInject */
  function logoutController($scope, FIREBASE_URL, $firebaseObject, $stateParams, $http) {
    //var cards = new Firebase('https://mysycamore.firebaseio.com/cards/');
    //$scope.result = $firebaseObject(cards.child($stateParams.card));

    // var newUser = true;
    var ref = new Firebase(FIREBASE_URL);
    var authData = ref.getAuth();



    $scope.logout = function() {
      ref.unauth();
    };


  } //End of Detail Controller
})();