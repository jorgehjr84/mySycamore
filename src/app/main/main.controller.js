(function() {
  'use strict';

  angular
    .module('mySycamore')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($firebase, FIREBASE_URL, $scope) {

    var newUser = true;
    var ref = new Firebase(FIREBASE_URL);
    var authData = ref.getAuth();

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
    ref.onAuth(function() {
      if (authData && newUser) {
        ref.child("users").child(authData.uid).update({
          provider: authData.provider,
          name: authData.facebook.displayName
        });
      }
    });

    $scope.logout = function() {
      ref.unauth();
    };

  }
})();