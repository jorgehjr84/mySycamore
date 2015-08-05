(function() {
  'use strict';

  angular
    .module('mySycamore')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($firebase, FIREBASE_URL) {

    var newUser = true;
    var ref = new Firebase(FIREBASE_URL);
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    }, {
      remember: 'sessionOnly'

    });


  }
})();