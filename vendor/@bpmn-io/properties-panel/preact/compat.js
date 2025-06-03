const { returnOrThrow } = require('../../../../helper.js');

module.exports = returnOrThrow(() => window.vendor?.propertiesPanel?.preact?.compat, '5.0.0');
