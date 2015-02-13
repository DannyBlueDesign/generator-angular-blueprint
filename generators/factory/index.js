'use strict';

var yeoman = require('yeoman-generator');
var blueprint = require('../../lib/blueprint');

module.exports = yeoman.generators.NamedBase.extend({
  init: init,
  prompting: blueprint.promptInstallPath,
  writing: writing
});

function init() {
  this.destPath = './client/app/services/';
}

/**
 * @name writing
 */
function writing() {
  var tempOptions = {
    appName: this._.camelize(this.config.get('appName')),
    cameledName: this._.camelize(this.name)
  };

  blueprint.copyTpl.call(this, 'factory', 'js', tempOptions);
}
