const { returnOrThrow } = require('../helper.js');

module.exports = returnOrThrow(() => window.vendor?.propertiesPanel?.dmn, '5.0.0');
