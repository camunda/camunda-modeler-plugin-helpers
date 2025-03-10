import { returnOrThrow } from '../../../helper.js';

export default returnOrThrow(() => window.vendor?.propertiesPanel?.common, '5.0.0');
