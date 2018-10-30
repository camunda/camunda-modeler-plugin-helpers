/**
 * Validate and register a client plugin.
 *
 * @param {Object} plugin
 * @param {String} type
 */
function registerClientPlugin(plugin, type) {
  var plugins = window.plugins || [];
  window.plugins = plugins;

  if (!plugin) {
    throw new Error('plugin not specified');
  }

  if (!type) {
    throw new Error('type not specified');
  }

  plugins.push({
    plugin: plugin,
    type: type
  });
}

/**
 * Validate and register a bpmn-js plugin.
 *
 * Example use:
 *
 *    var registerBpmnJSPlugin = require('./camundaModelerPluginHelpers').registerBpmnJSPlugin;
 *    var module = require('./index');
 *
 *    registerBpmnJSPlugin(module);
 *
 * @param {Object} plugin
 */
function registerBpmnJSPlugin(plugin) {
  registerClientPlugin(plugin, 'bpmn.modeler.additionalModules');
}

module.exports.registerBpmnJSPlugin = registerBpmnJSPlugin;

/**
 * Validate and register a bpmn-moddle extension plugin.
 *
 * Example use:
 *
 *    var registerBpmnJSModdleExtension = require('./camundaModelerPluginHelpers').registerBpmnJSModdleExtension;
 *    var module = require('./index');
 *
 *    registerBpmnJSModdleExtension(module);
 *
 * @param {Object} plugin
 */
function registerBpmnJSModdleExtension(plugin) {
  registerClientPlugin(plugin, 'bpmn.modeler.moddleExtension');
}

module.exports.registerBpmnJSModdleExtension = registerBpmnJSModdleExtension;
