const { returnOrThrow } = require('../../../../helper');

module.exports = returnOrThrow(() => window.vendor.propertiesPanel.preact.compat, '5.0.0');
