const { returnOrThrow } = require('../helper');

module.exports = returnOrThrow(() => window.vendor.propertiesPanel.dmn, '5.0.0');
