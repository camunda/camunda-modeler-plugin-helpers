import { returnOrThrow } from '../helper.js';

/**
 * React object used by Camunda Modeler. Use it to create UI extension.
 *
 * @type {import('react')}
 */
export default returnOrThrow(() => window.react, '3.4');