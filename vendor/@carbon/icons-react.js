import { returnOrThrow } from '../../helper.js';

/**
 * Use this to access Carbon icons globally in UI extensions.
 *
 * @type {import('@carbon/icons-react')}
 */
export default returnOrThrow(() => window.vendor?.carbonIconsReact, '5.38');
