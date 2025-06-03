const { returnOrThrow } = require('../helper.js');

/**
 * React object used by Camunda Modeler. Use it to create UI extension.
 *
 * @type {import('react')}
 */
module.exports = returnOrThrow(() => window.react, '3.4');
