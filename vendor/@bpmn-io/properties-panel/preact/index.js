import { returnOrThrow } from '../../../../helper.js';

export default returnOrThrow(() => window.vendor?.propertiesPanel?.preact?.root, '5.0.0');
