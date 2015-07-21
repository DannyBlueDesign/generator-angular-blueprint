'use strict';

function aboutRoute($stateProvider) {
  $stateProvider.state('main.about', {
    url         : '/about',
    templateUrl : 'about.view.html',
    controller  : 'About',
    controllerAs: 'About'
  });
}

export default aboutRoute;
