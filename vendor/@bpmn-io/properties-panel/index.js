const { returnOrThrow } = require('../../../helper');

module.exports = returnOrThrow(() => window.vendor.propertiesPanel.common, '5.0.0');
