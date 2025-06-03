const { returnOrThrow } = require('../helper.js');

module.exports = returnOrThrow(() => window.vendor?.propertiesPanel?.bpmn, '5.0.0');
