'use strict';

(function() {

  angular
    .module('<%= appName %>')
    .config(function ($stateProvider) {
      $stateProvider
        .state('<%= cameledName %>', {
          url         : '/<%= dashedName %>',
          templateUrl : 'app/views/<%= dashedName %>/<%= dashedName %>.view.html',
          controller  : '<%= classedName %>',
          controllerAs: '<%= classedName %>',
          title       : '<%= humanName %>'
        });
    });

})();