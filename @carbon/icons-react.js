if (!window.carbonicons) {
  throw new Error('Not compatible: @carbon/icons-react is not available in this environment.');
}
  
/**
 * Use this to access Carbon icons globally in UI extensions.
 *
 * @type {import('@carbon/icons-react')}
 */
module.exports = window.carbonicons;