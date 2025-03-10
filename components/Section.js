import { returnOrThrow } from '../helper.js';

/**
 * Section component.
 *
 * @type {import('react').ComponentType<{ maxHeight: Number | String, relativePos: Boolean } }>}
 *
 * @example
 *
 * import { Section } from 'camunda-modeler-plugin-helpers/components';
 *
 * function CustomSection(props) {
 *   return (
 *    <Section maxHeight="240px">
 *     <Section.Header>
 *       Custom section
 *     </Section.Header>
 *     <Section.Body>
 *       Hello world!
 *     </Section.Body>
 *     <Section.Actions>
 *      <button type="button" onClick={ props.onClose }>
 *        Close
 *      </button>
 *     </Section.Actions>
 *    </Section>
 *   );
 * }
 */
export default returnOrThrow(() => window.components?.Section, '5.0');