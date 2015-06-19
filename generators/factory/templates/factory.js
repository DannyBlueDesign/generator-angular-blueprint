'use strict';

/**
 * @ngdoc factory
 *
 * @name <%= cameledName %>
 *
 * @description
 * Factory for <%= appName %>
 */
(function() {

  angular
    .module('<%= appName %>')
    .factory('<%= cameledName %>', <%= cameledName %>);

  function <%= cameledName %>() {
    return { };
  }

})();

