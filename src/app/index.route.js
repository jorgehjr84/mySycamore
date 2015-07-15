(function() {
  'use strict';

  angular
    .module('mySycamore')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('tree', {
        url: '/tree',
        templateUrl: 'app/views/tree.html',
        controller: 'TreeController',
        controllerAs: 'tree'
      })
      .state('submit', {
        url: '/submit',
        templateUrl: 'app/views/submit.html',
        controller: 'SubmitController',
        controllerAs: 'submit'

      })
      .state('detail', {
        url: '/detail',
        templateUrl: 'app/views/detail.html',
        controller: 'DetailController',
        controllerAs: 'detail'
      });
  } //End of routeConfig

})();