(function() {
  'use strict';
  angular.module('mySycamore')

  .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($scope, FIREBASE_URL, $firebaseObject, $stateParams, $http) {
    //var cards = new Firebase('https://mysycamore.firebaseio.com/cards/');
    //$scope.result = $firebaseObject(cards.child($stateParams.card));

    var ref = new Firebase(FIREBASE_URL);
    var authData = ref.getAuth();

    $http.get(FIREBASE_URL + 'users/' + authData.uid + '/cards/' + $stateParams.card + '.json')
      .then(function(response) {
        $scope.card = response.data;
        console.log(response.data);
      });

  } //End of Detail Controller
})();