if (!window.carbonicons) {
  throw new Error('Not compatible with Camunda Modeler < v5.33.0');
}

/**
 * Use this to access Carbon icons globally in UI extensions.
 *
 * @type {import('@carbon/icons-react')}
 */
export default window.carbonicons;
