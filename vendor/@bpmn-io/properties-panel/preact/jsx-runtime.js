const { returnOrThrow } = require('../../../../helper');

module.exports = returnOrThrow(() => window.vendor.propertiesPanel.preact.jsxRuntime, '5.0.0');
