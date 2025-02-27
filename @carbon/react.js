if (!window.carbon) {
  throw new Error('Not compatible: @carbon/react is not available in this environment.');
}

/**
 * Carbon React components provided by the host application.
 * Use this to access Carbon components globally in UI extensions.
 *
 * @type {import('@carbon/react')}
 */
module.exports = window.carbon;
