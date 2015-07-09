(function() {
  'use strict';

  angular
    .module('projects')
    .config(['$urlRouterProvider', '$stateProvider',

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
            templateUrl: 'app/views/tree.html'
          })
          .state('submit', {
            url: '/submit',
            templateUrl: 'app/views/submit.html'
          })
          .state('detail', {
            url: '/detail',
            templateUrl: 'app/views/detail.html'
          });

      }
    ]);

})();