const { returnOrThrow } = require('../helper');

module.exports = returnOrThrow(() => window.vendor.propertiesPanel.bpmn, '5.0.0');
