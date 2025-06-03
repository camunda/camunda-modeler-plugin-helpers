const { returnOrThrow } = require('../../../../helper.js');

module.exports = returnOrThrow(() => window.vendor?.propertiesPanel?.preact?.root, '5.0.0');
