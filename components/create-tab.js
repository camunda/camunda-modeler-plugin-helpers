import { returnOrThrow } from '../helper.js';

/**
 * A helper function to create Tab components
 * to be used with the TabProvider.
 *
 * @type {Function}
 * @param {string} tabName - The name of the tab.
 * @param {object} providers - The providers object.
 * @param {string} providers.type - The type of the provider.
 * @param {React.Component} providers.editor - The editor component.
 * @param {string} providers.defaultName - The default name of the provider.
 *
 * @returns {import('react').Component} The created EditorTab component.
 */
export default returnOrThrow(() => window.components?.createTab, '5.29');