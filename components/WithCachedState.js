import { returnOrThrow } from '../helper.js';

/**
 * A higher order component that lazily
 * initiates the given wrapped component
 * via the `Component#createCachedState` method.
 *
 * Passes props as well as destructured
 * wrapped component state to `Component`.
 *
 * The resulting component must be called
 * with the `id` and `cache` prop.
 *
 * Forwards refs, too.
 *
 * @type {Function}
 *
 * @param {import('react').Component} Component
 *
 * @return {import('react').Component} WrappedComponent
 */
export default returnOrThrow(() => window.components?.WithCachedState, '5.29');