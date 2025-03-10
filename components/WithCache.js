import { returnOrThrow } from '../helper.js';

/**
 * A higher order component that passes cache to a wrapped component.
 * Forwards refs, too.
 *
 * @type {Function}
 *
 * @param {import('react').Component} Component
 *
 * @return {import('react').Component} WrappedComponent
 */
export default returnOrThrow(() => window.components?.WithCache, '5.29');