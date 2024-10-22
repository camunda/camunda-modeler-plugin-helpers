if (!window.components) {
  throw notCompatible('3.4');
}

function notCompatible(requiredVersion) {
  return new Error('Not compatible with Camunda Modeler < v' + requiredVersion);
}

export const NotCompatible = function(requiredVersion) {
  return function NotCompatibleComponent() {
    throw notCompatible(requiredVersion);
  };
};

/**
 * Fill component. Set `slot` to "toolbar" to include in the top toolbar.
 * Use `group` and `priority=0` to place for correct ordering. The higher
 * the priority, the earlier the Fill is displayed within the group.
 *
 * @type {import('react').ComponentType<{ slot: string, group?: string, priority?: Number }>}
 *
 * @example
 *
 * import { Fill } from 'camunda-modeler-plugin-helpers/components';
 *
 * function CustomFill(props) {
 *   return (
 *     <Fill group="4_export" slot="toolbar" priority={100}>
 *       <button type="button" onClick={ props.openExportTool }>
 *         Open Export Tool
 *       </button>
 *     </Fill>
 *   );
 * }
 */
export const Fill = window.components.Fill;

/**
 * Modal component.
 *
 * @type {import('react').ComponentType<{ onClose: Function }>}
 *
 * @example
 *
 * import { Modal } from 'camunda-modeler-plugin-helpers/components';
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
export const Modal = window.components.Modal;

/**
 * Overlay component.
 *
 * @type {import('react').ComponentType<{ 
 *  onClose: Function, 
 *  anchor: Node, 
 *  offset?: { top?: number, bottom?: number, left?: number, right?: number }, 
 *  maxWidth?: number | string,
 *  maxHeight?: number | string,
 *  minWidth?: number | string,
 *  minHeight?: number | string
 * }>}
 *
 * @example
 * 
 * import { Overlay } from 'camunda-modeler-plugin-helpers/components';
 *
 * function CustomOverlay(props) {
 *   return (
 *    <Overlay onClose={ props.onClose } anchor={ props.btn_ref } offset={ props.anchor }>
 *      <Overlay.Title>
 *        Custom Modal
 *      </Overlay.Title>
 *      <Overlay.Body>
 *        Hello world!
 *      </Overlay.Body>
 *      <Overlay.Footer>
 *        <button type="button" onClick={ props.onClose }>
 *          Close
 *        </button>
 *      </Overlay.Footer>
 *    </Overlay>
 *   );
 * }
 */
 export const Overlay = window.components.Overlay || NotCompatible('5.0');

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
export const Section = window.components.Section || NotCompatible('5.0');

 /**
 * ToggleSwitch component.
 *
 * @type {import('react').ComponentType<{ id: string, name: string, label?: string, switcherLabel?: string, description?: string }>}
 *
 * @example
 * 
 * import { ToggleSwitch } from 'camunda-modeler-plugin-helpers/components';
 *
 * function CustomToggle(props) {
 *   return (
 *    <Formik initialValues={ initialValues } onSubmit={ this.onSubmit }>
 *      {() => (
 *        <Form>
 *          <Field
 *            component={ ToggleSwitch }
 *            switcherLabel="Switcher label"
 *            id={ id }
 *            name={ name }
 *            description="Toggle description"
 *          />
 *        </Form>
 *       )}
 *    </Formik>
 *   );
 * }
 */
export const ToggleSwitch = window.components.ToggleSwitch || NotCompatible('5.0');

 /**
 * TextInput component.
 *
 * @type {import('react').ComponentType<{ hint: string, name: string, label: string, fieldError: string, multiline: boolean, description: string }>}
 *
 * @example
 * 
 * import { TextInput } from 'camunda-modeler-plugin-helpers/components';
 *
 * function CustomInput(props) {
 *   return (
 *    <Formik initialValues={ initialValues } onSubmit={ this.onSubmit }>
 *      {() => (
 *        <Form>
 *          <Field
 *            component={ TextInput }
 *            label="My input"
 *            id={ id }
 *            multiline={ false }
 *            name={ name }
 *            description="Custom description"
 *          />
 *        </Form>
 *       )}
 *    </Formik>
 *   );
 * }
 */
export const TextInput = window.components.TextInput || NotCompatible('5.29');

 /**
 * CachedComponent class.
 *
 * @type {import('react').ComponentClass}
 *
 * @example
 * 
 * import { CachedComponent } from 'camunda-modeler-plugin-helpers/components';
 * 
 * class ComponentWithCachedState extends CachedComponent {
 *  constructor(props) {
 *   super(props);
 *  }
 * 
 *  getCachedState() {
 *    return this.getCached()
 *  }
 * 
 *  setCachedState(values) {
 *    this.setCached(values)
 *  }
 * }
 * 
 */
export const CachedComponent = window.components.CachedComponent || NotCompatible('5.29');

/**
 * A higher order component that passes cache to a wrapped component.
 * Forwards refs, too.
 * 
 * @type {Function}
 * @param {Component} Comp
 */
export const WithCache = window.components.WithCache || NotCompatible('5.29');

/**
 * A higher order component that lazily
 * initiates the given wrapped component
 * via the `Comp#createCachedState` method.
 *
 * Passes props as well as destructured
 * wrapped component state to `Comp`.
 *
 * The resulting component must be called
 * with the `id` and `cache` prop.
 *
 * Forwards refs, too.
 *
 * @type {Function}
 * @param {Component} Comp
 */
export const WithCachedState = window.components.WithCachedState || NotCompatible('5.29');

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
 * @returns {React.Component} The created EditorTab component.
 */
export const createTab = window.components.createTab || NotCompatible('5.29');