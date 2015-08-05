(function() {
  'use strict';

  angular
    .module('mySycamore')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($firebase, FIREBASE_URL, $scope) {

    var newUser = true;
    var ref = new Firebase(FIREBASE_URL);

    $scope.login = function() {


      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      }, {
        remember: 'sessionOnly'

      });
    };

    $scope.logout = function() {
      ref.unauth();
    };

  }
})();