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
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './client/app/filters/test/test.filter.js',
      './client/app/filters/test/test.filter.spec.js'
    ]);
  });
});
