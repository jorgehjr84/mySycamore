(function() {
  'use strict';
  angular.module('mySycamore')
    .controller('editController', editController);


  /** @ngInject */
  function editController($scope, FIREBASE_URL, $firebaseObject, $stateParams, $http, $firebaseArray) {
    var ref = new Firebase(FIREBASE_URL + '/users');
    var authData = ref.getAuth();
    var cardsRef = ref.child(authData.uid + '/cards');

    //$scope.result = $firebaseObject(cards.child($stateParams.card));
    $http.get(FIREBASE_URL + 'users/' + authData.uid + '/cards/' + $stateParams.card + '.json')
      .then(function(response) {
        $scope.card = response.data;
        console.log(response.data);
      });

    $scope.editCard = $firebaseArray(cardsRef);




    // console.log($scope.list);


  } //End of Edit Controller
})();