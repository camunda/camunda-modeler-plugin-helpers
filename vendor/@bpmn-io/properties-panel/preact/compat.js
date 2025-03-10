import { returnOrThrow } from '../../../../helper.js';

export default returnOrThrow(() => window.vendor?.propertiesPanel?.preact?.compat, '5.0.0');
