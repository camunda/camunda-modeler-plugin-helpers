const { returnOrThrow } = require('../helper');

module.exports = returnOrThrow(() => window.propertiesPanel.bpmn, '5.0.0');
