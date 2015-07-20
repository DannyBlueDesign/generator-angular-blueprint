'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:filter', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/filter'))
      .withArguments(['test'])
      .withPrompt({ 'directory': false })
      .withOptions({ 'skip-install': true})
      .on('ready', function (gen) {
        gen.config.set('appDir', './src/');
        gen.config.set('jsVersion', 'ES5')
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './src/app/filters/test/test.filter.js',
      './src/app/filters/test/test.filter.spec.js'
    ]);
  });
});
