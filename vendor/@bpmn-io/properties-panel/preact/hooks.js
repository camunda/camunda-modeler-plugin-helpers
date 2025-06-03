const { returnOrThrow } = require('../../../../helper.js');

module.exports = returnOrThrow(() => window.vendor?.propertiesPanel?.preact?.hooks, '5.0.0');
