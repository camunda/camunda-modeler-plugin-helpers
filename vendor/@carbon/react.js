import { returnOrThrow } from '../../helper.js';

/**
 * Use this to access Carbon icons globally in UI extensions.
 *
 * @type {import('@carbon/react')}
 */
export default returnOrThrow(() => window.vendor?.carbonReact, '5.38');
