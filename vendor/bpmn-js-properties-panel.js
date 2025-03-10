import { returnOrThrow } from '../helper.js';

export default returnOrThrow(() => window.vendor?.propertiesPanel?.bpmn, '5.0.0');
