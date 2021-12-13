const { returnOrThrow } = require('../../../helper');

module.exports = returnOrThrow(() => window.propertiesPanel.common, '5.0.0');
