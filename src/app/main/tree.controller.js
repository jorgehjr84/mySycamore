(function() {
  'use strict';

  angular.module('mySycamore')
    .controller('TreeController', TreeController)


  /** @ngInject */
  function TreeController($scope, $http, $firebaseArray, FIREBASE_URL) {

    $http.get(FIREBASE_URL + '.json').success(function(data) {
      $scope.cards = data;
      console.log(data);
    });

  }
})();