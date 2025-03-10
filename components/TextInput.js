import { returnOrThrow } from '../helper.js';

/**
 * TextInput component.
 *
 * @type {import('react').ComponentType<{ hint: string, name: string, label: string, fieldError: string, multiline: boolean, description: string }>}
 *
 * @example
 *
 * import TextInput from 'camunda-modeler-plugin-helpers/components/TextInput.js';
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
export default returnOrThrow(() => window.components?.TextInput, '5.29');