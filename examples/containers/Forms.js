// @flow

import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import type { FormProps as $FormProps } from 'redux-form';
import { createComponent as createTootlipComponent } from 'mango-components/es/Tootlip';
import { createComponent as createButtonComponent } from 'mango-components/es/Button';
import { createComponent as createInputComponent } from 'mango-components/es/Input';
import { createComponent as createCheckboxComponent } from 'mango-components/es/Checkbox';
import { createComponent as createPaddedCheckboxComponent } from 'mango-components/es/PaddedCheckbox';
import { createComponent as createTextAreaComponent } from 'mango-components/es/TextArea';
import { createComponent as createSelectComponent } from 'mango-components/es/Select';
import { createComponent as createTypeaheadInputComponent } from 'mango-components/es/TypeaheadInput';
import { createComponent as createDatePickerComponent } from 'mango-components/es/DatePicker';

const Tootlip = createTootlipComponent();
const Button = createButtonComponent();
const Input = createInputComponent();
const Checkbox = createCheckboxComponent();
const PaddedCheckbox = createPaddedCheckboxComponent();
const TextArea = createTextAreaComponent();
const Select = createSelectComponent();
const TypeaheadInput = createTypeaheadInputComponent();
const DatePicker = createDatePickerComponent();

type Props = {} & $FormProps;

type State = {
  done: boolean,
};

export class Form extends React.Component<Props, State> {
  submit = (): Promise<void> =>
    new Promise(resolve => setTimeout(() => resolve(), 3000));

  render() {
    const {
      submitting,
      submitSucceeded,
      submitFailed,
      handleSubmit,
      reset,
    } = this.props;

    if (submitSucceeded || submitFailed) {
      setTimeout(() => reset(), 3000);
    }

    return (
      <div>
        <h2>Forms</h2>
        <h3>Input</h3>
        <form>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            label="email"
            component={Input}
          />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            label="password"
            component={Input}
          />
          <Field
            type="textarea"
            name="textarea"
            label="textarea"
            placeholder="textarea"
            component={TextArea}
          />
          <div>
            <Field
              name="checken"
              label="checken"
              placeholder="checken"
              component={Checkbox}
            />
          </div>
          <div>
            <Field
              name="checken2"
              label="checken2"
              placeholder="checken2"
              component={Checkbox}
            />
          </div>
          <div>
            <Field
              name="paddedchecken"
              label="paddedchecken"
              placeholder="paddedchecken"
              component={PaddedCheckbox}
            />
          </div>
          <div>
            <Field
              name="select"
              label="select"
              placeholder="select"
              component={Select}
            >
              <option value="option-1">Option 1</option>
              <option value="option-2">Option 2</option>
            </Field>
          </div>
          <Field
            name="fruit"
            label="Enter fruit name"
            items={['apple', 'orange', 'pear', 'banana']}
            component={TypeaheadInput}
          />
          <Field
            name="vegetable"
            label="Enter vegetable date"
            component={DatePicker}
          />
          <Button onClick={handleSubmit(this.submit)}>
            Go
            <Tootlip visible={submitting}>OK, please wait a moment…</Tootlip>
            <Tootlip visible={submitSucceeded}>
              Thanks for submitting the form{' '}
              <span role="img" aria-label="Thumbs up sign">
                👍
              </span>
            </Tootlip>
          </Button>
        </form>
      </div>
    );
  }
}
const validate = values => {
  const errors = {};

  if (values.password) {
    if (values.password.length === 0) {
      errors.password = 'Please enter a password!';
    }
  } else {
    errors.password = 'Please enter a password!';
  }
  if (values.email) {
    if (values.email.length === 0) {
      errors.email = 'Please enter your email address!';
    }
  } else {
    errors.email = 'Please enter your email address!';
  }
  return errors;
};

export const component = reduxForm({
  form: 'Form',
  validate,
})(Form);

export default component;
