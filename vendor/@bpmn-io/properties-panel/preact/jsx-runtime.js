const { returnOrThrow } = require('../../../../helper');

module.exports = returnOrThrow(() => window.propertiesPanel.preact.jsxRuntime, '5.0.0');
