import { returnOrThrow } from '../../../helper.js';

/**
 * Use this to access Carbon icons globally in UI extensions.
 *
 * @type {import('@carbon/icons-react')}
 */
export default returnOrThrow(() => window.carbonicons, '5.33');