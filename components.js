if (!window.components) {
  throw new Error('Not compatible with Camunda Modeler < 3.4');
}

/**
 * Fill component.
 *
 * @type {import('react').ComponentType<{ group: string, name: string }>}
 */
export const Fill = window.components.Fill;

/**
 * Modal component.
 *
 * @type {import('react').ComponentType<{ onClose: Function }>}
 */
export const Modal = window.components.Modal;