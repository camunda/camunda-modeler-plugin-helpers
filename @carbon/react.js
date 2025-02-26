if (!window.carbon) {
  throw new Error('Not compatible with Camunda Modeler < v5.33.0');
}

/**
 * Carbon React components provided by the host application.
 * Use this to access Carbon components globally in UI extensions.
 *
 * @type {import('@carbon/react')}
 */
export default window.carbon;
