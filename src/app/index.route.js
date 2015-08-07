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
        url: '/submit/:card',
        templateUrl: 'app/views/submit.html',
        controller: 'SubmitController',
        controllerAs: 'submit'

      })
      .state('cardDetail', {
        url: '/cards/:card',
        templateUrl: 'app/views/detail.html',
        controller: 'DetailController',
        controllerAs: 'detail'
      })
      .state('edit', {
        url: '/edit/cards/:id',
        templateUrl: 'app/views/edit.html',
        controller: 'editController',
        controllerAs: 'edit'
      });
  } //End of routeConfig

})();