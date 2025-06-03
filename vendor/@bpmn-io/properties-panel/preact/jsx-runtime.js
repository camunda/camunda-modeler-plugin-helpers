const { returnOrThrow } = require('../../../../helper.js');

module.exports = returnOrThrow(() => window.vendor?.propertiesPanel?.preact?.jsxRuntime, '5.0.0');
