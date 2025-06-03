const { returnOrThrow } = require('../../helper.js');

/**
 * Use this to access Carbon icons globally in UI extensions.
 *
 * @type {import('@carbon/react')}
 */
module.exports = returnOrThrow(() => window.vendor?.carbonReact, '5.38');
