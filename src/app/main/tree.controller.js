(function() {
  'use strict';

  angular.module('mySycamore')
    .controller('TreeController', TreeController);


  /** @ngInject */
  function TreeController($scope, $http, $firebaseArray, FIREBASE_URL) {


    var ref = new Firebase(FIREBASE_URL);
    var authData = ref.getAuth();

    $http.get(FIREBASE_URL + 'users/' + authData.uid + '/cards' + '.json').success(function(data) {
      $scope.cards = data;
    });

    // $scope.toggle = false;
    // $scope.toggle_grandParent = false;
    // $scope.toggle_parent = false;
    // $scope.toggle_spouse = false;
    // $scope.toggle_sibling = false;
    // $scope.toggle_child = false;


    // $scope.deleteCard = function(id) {
    //   $http.delete('https://mysycamore.firebaseio.com/cards/' + id + '.json');
    // };


  } //End of TreeController Function
})();