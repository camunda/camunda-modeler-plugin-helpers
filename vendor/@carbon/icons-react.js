const { returnOrThrow } = require('../../helper.js');

/**
 * Use this to access Carbon icons globally in UI extensions.
 *
 * @type {import('@carbon/icons-react')}
 */
module.exports = returnOrThrow(() => window.vendor?.carbonIconsReact, '5.38');
