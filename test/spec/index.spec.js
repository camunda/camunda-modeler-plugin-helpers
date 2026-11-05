const { expect } = require('chai');

describe('index', function() {

  let helpers;

  beforeEach(async function() {
    global.window = { plugins: [] };

    helpers = await import('../../index.js');
  });

  afterEach(function() {
    delete global.window;
  });


  describe('#registerFormJSPlugin', function() {

    const module = { __init__: [] };


    it('should register for editor and viewer by default', function() {

      // when
      helpers.registerFormJSPlugin(module);

      // then
      expect(window.plugins).to.eql([
        { plugin: module, type: 'form.modeler.editor.additionalModules' },
        { plugin: module, type: 'form.modeler.viewer.additionalModules' }
      ]);
    });


    it('should register for editor only', function() {

      // when
      helpers.registerFormJSPlugin(module, 'editor');

      // then
      expect(window.plugins).to.eql([
        { plugin: module, type: 'form.modeler.editor.additionalModules' }
      ]);
    });


    it('should register for viewer only', function() {

      // when
      helpers.registerFormJSPlugin(module, [ 'viewer' ]);

      // then
      expect(window.plugins).to.eql([
        { plugin: module, type: 'form.modeler.viewer.additionalModules' }
      ]);
    });


    it('should throw on unknown component', function() {

      // when
      const register = () => helpers.registerFormJSPlugin(module, 'foo');

      // then
      expect(register).to.throw('unknown form component <foo>');
    });


    it('should throw on missing module', function() {

      // when
      const register = () => helpers.registerFormJSPlugin();

      // then
      expect(register).to.throw('plugin not specified');
    });

  });


  describe('#registerCloudFormJSPlugin', function() {

    const module = { __init__: [] };


    it('should register Camunda 8 plugin for editor and viewer by default', function() {

      // when
      helpers.registerCloudFormJSPlugin(module);

      // then
      expect(window.plugins).to.eql([
        { plugin: module, type: 'form.cloud.modeler.editor.additionalModules' },
        { plugin: module, type: 'form.cloud.modeler.viewer.additionalModules' }
      ]);
    });

  });


  describe('#registerPlatformFormJSPlugin', function() {

    const module = { __init__: [] };


    it('should register Camunda 7 plugin for editor only', function() {

      // when
      helpers.registerPlatformFormJSPlugin(module, 'editor');

      // then
      expect(window.plugins).to.eql([
        { plugin: module, type: 'form.platform.modeler.editor.additionalModules' }
      ]);
    });

  });

});
