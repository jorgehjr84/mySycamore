(function() {
  'use strict';

  angular
    .module('projects')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
