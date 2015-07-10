(function() {
  'use strict';

  angular.module('mySycamore')
    .controller('SubmitController', SubmitController);

  /** @ngInject */
  function SubmitController($scope, $firebase) {
    var ref = new Firebase('https: //mysycamore.firebaseio.com')
      // $scope.relative = $firebase(ref);
      //
      // $scope.addRelative = function(e) {
      //   if (e.keycode != 13) return;
      //
      //   $scope.relative.$add({
      //     name: $scope.name
      //   });
      //   $scope.newRelative = "";
      // }
  }
})();