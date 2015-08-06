(function() {
  'use strict';
  angular.module('mySycamore')

  .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($scope, FIREBASE_URL, $firebaseObject, $stateParams, $http) {
    //var cards = new Firebase('https://mysycamore.firebaseio.com/cards/');
    //$scope.result = $firebaseObject(cards.child($stateParams.card));

    $http.get(FIREBASE_URL + '/cards' + $stateParams.card + '.json')
      .then(function(response) {
        $scope.card = response.data;
        console.log(response);
      });


  } //End of Detail Controller
})();