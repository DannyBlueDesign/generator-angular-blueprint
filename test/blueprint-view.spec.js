'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:blueprint - view', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/blueprint'))
      .withPrompt({ 'blueprints': 'view' })
      .withOptions({ 'skip-install': true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'blueprints/view/view.html'
    ]);
  });
});
