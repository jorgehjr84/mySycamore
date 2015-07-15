(function() {
  'use strict';

  angular.module('mySycamore')
    .controller('editController', editController);


  /** @ngInject */
  function editController($scope, FIREBASE_URL, $firebaseObject, $stateParams, $http) {
    //var cards = new Firebase('https://mysycamore.firebaseio.com/cards/');
    //$scope.result = $firebaseObject(cards.child($stateParams.card));
    $http.get('https://mysycamore.firebaseio.com/cards/' + $stateParams.card + '.json')
      .then(function(response) {
        $scope.card = response.data;
        console.log(response);
      });


  } //End of Edit Controller
})();