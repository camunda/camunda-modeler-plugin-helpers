import { returnOrThrow } from '../helper.js';

export default returnOrThrow(() => window.vendor?.propertiesPanel?.dmn, '5.0.0');
