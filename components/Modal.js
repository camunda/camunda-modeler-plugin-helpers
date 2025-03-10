import { returnOrThrow } from '../helper.js';

/**
 * Modal component.
 *
 * @type {import('react').ComponentType<{ onClose: Function }>}
 *
 * @example
 *
 * import Modal from 'camunda-modeler-plugin-helpers/components/Modal.js';
 *
 * function CustomModal(props) {
 *   return (
 *    <Modal onClose={ props.onClose }>
 *      <Modal.Title>
 *        Custom Modal
 *      </Modal.Title>
 *      <Modal.Body>
 *        Hello world!
 *      </Modal.Body>
 *      <Modal.Footer>
 *        <button type="button" onClick={ props.onClose }>
 *          Close
 *        </button>
 *      </Modal.Footer>
 *    </Modal>
 *   );
 * }
 */
export default returnOrThrow(() => window.components?.Modal, '5.0');