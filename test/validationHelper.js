'use strict';
var assert = require('yeoman-assert');
var helper = require('../generators/app/validationHelper');

describe('prompting validations → validateContextmenuName()', () => {
  it('should work for context.test', () => {
    assert.equal(helper.validateContextmenuName('context.test'), true);
  });
  it('should fail when to short', () => {
    assert.equal(helper.validateContextmenuName('contex'), false);
  });
});
describe('prompting validations → validateModuleName()', () => {
  it('should work for script.module.test', () => {
    assert.equal(helper.validateModuleName('script.module.test'), true);
  });
  it('should fail when to short', () => {
    assert.equal(helper.validateModuleName('modu'), false);
  });
});
describe('prompting validations → validatePluginName()', () => {
  it('should work for plugin.test', () => {
    assert.equal(helper.validatePluginName('plugin.test'), true);
  });
  it('should fail when to short', () => {
    assert.equal(helper.validatePluginName('plugin'), false);
  });
});
describe('prompting validations → validateResourceName()', () => {
  it('should work for resource.test', () => {
    assert.equal(helper.validateResourceName('resource.test'), true);
  });
  it('should fail when to short', () => {
    assert.equal(helper.validateResourceName('resource'), false);
  });
});
describe('prompting validations → validateServiceName()', () => {
  it('should work for service.test', () => {
    assert.equal(helper.validateServiceName('service.test'), true);
  });
  it('should fail when to short', () => {
    assert.equal(helper.validateServiceName('service'), false);
  });
});
describe('prompting validations → validateScriptName()', () => {
  it('should work for script.test', () => {
    assert.equal(helper.validateScriptName('script.test'), true);
  });
  it('should fail when to short', () => {
    assert.equal(helper.validateScriptName('script'), false);
  });
});
describe('prompting validations → validateSubtitleName()', () => {
  it('should work for service.subtitles.test', () => {
    assert.equal(helper.validateSubtitleName('service.subtitles.test'), true);
  });
  it('should fail when to short', () => {
    assert.equal(helper.validateSubtitleName('service.subtitles'), false);
  });
});
describe('prompting validations → validateScriptNameLength()', () => {
  it('should work for anything longer than two letters', () => {
    assert.equal(helper.validateScriptNameLength('My name'), true);
  });
  it('should fail when to short', () => {
    assert.equal(helper.validateScriptNameLength('my'), false);
  });
});
describe('prompting validations → validateProvides()', () => {
  it('should work when selecting more then one item', () => {
    assert.equal(helper.validateProvides(['video', 'audio']), true);
  });
  it('should work when selecting only one item', () => {
    assert.equal(helper.validateProvides(['video']), true);
  });
  it('should fail when nothing is selected', () => {
    assert.equal(helper.validateProvides([]), 'You need check at least one.');
  });
});
describe('prompting validations → validatePlatforms()', () => {
  it('should work when selecting more then one item', () => {
    assert.equal(helper.validatePlatforms(['osx', 'android']), true);
  });
  it('should work when selecting only one item', () => {
    assert.equal(helper.validatePlatforms(['all']), true);
  });
  it('should fail when all and something else is selected', () => {
    assert.equal(helper.validatePlatforms(['all', 'osx']), '"All" must be the only platform selected.');
  });
  it('should fail when nothing is selected', () => {
    assert.equal(helper.validatePlatforms([]), 'You need check at least one.');
  });
});
