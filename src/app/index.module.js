(function() {
  'use strict';

  angular
    .module('mySycamore', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'firebase'])
    .constant('FIREBASE_URL', 'https://mysycamore.firebaseio.com/cards/');

})();