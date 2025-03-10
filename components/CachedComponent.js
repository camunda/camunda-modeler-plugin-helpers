import { returnOrThrow } from '../helper.js';

/**
 * CachedComponent class.
 *
 * @type {import('react').ComponentClass}
 *
 * @example
 *
 * import CachedComponent from 'camunda-modeler-plugin-helpers/components/CachedComponent.js';
 *
 * class ComponentWithCachedState extends CachedComponent {
 *  constructor(props) {
 *   super(props);
 *  }
 *
 *  getCachedState() {
 *    return this.getCached()
 *  }
 *
 *  setCachedState(values) {
 *    this.setCached(values)
 *  }
 * }
 *
 */
export const CachedComponent = returnOrThrow(() => window.components?.CachedComponent, '5.29');