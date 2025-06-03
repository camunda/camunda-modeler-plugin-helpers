const { returnOrThrow } = require('../../../helper.js');

module.exports = returnOrThrow(() => window.vendor?.propertiesPanel?.common, '5.0.0');
