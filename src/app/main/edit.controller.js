(function() {
  'use strict';
  angular.module('mySycamore')
    .controller('editController', editController);


  /** @ngInject */
  function editController($scope, FIREBASE_URL, $firebaseObject, $stateParams, $http, $firebaseArray) {
    var ref = new Firebase(FIREBASE_URL);
    var authData = ref.getAuth();
    //$scope.result = $firebaseObject(cards.child($stateParams.card));
    $http.get(FIREBASE_URL + 'users/' + authData.uid + '/cards/' + $stateParams.id + '.json')
      .then(function(response) {
        $scope.card = response.data;
        console.log(response);
      });

    $scope.editCard = $firebaseArray(ref);



    // console.log($scope.list);


  } //End of Edit Controller
})();