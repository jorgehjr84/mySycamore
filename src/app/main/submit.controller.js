(function() {
  'use strict';

  angular.module('mySycamore')
    .controller('SubmitController', SubmitController);

  /** @ngInject */
  function SubmitController($scope, $firebase) {
    var ref = new Firebase('https: //mysycamore.firebaseio.com')
    $scope.cards = [];
    $scope.card = {
      url: 'https: //mysycamore.firebaseio.com',
      title: 'mySycamore'
    };
    $scope.submitCard = function() {
      $scope.cards.push($scope.card);
      $scope.card = {
        url: 'https: //mysycamore.firebaseio.com',
        title: 'mySycamore'
      };

    };

  } //End of Submit Controller
})();