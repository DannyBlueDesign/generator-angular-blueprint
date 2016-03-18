'use strict';

var blueprints  = require('yeoman-blueprints'),
    prompt      = require('../../lib/prompt-install-path'),
    destination = require('../../lib/destination'),
    tplOptions  = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
  prompting: function () {
      prompt.call(this, 'app/filters/')
  },

  writing: function () {
    var values    = tplOptions(this.config.get('appName'), 'filter', this.name),
        jsVersion = this.config.get('jsVersion') || 'ES5',
        fileType  = 'js';

    this.copyTpl(
      'filter-' + jsVersion,
      fileType,
      destination(this.destDirectory, this.name, 'filter', fileType),
      values
    );

    this.copyTpl(
      'filter-spec',
      fileType,
      destination(this.destDirectory, this.name, 'filter.spec', fileType),
      values
    );
  }
});