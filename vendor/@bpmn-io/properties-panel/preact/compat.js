const { returnOrThrow } = require('../../../../helper');

module.exports = returnOrThrow(() => window.propertiesPanel.preact.compat, '5.0.0');
