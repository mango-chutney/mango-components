// @flow

import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form';
// Explicitly import from index.js, not from the "main" property of package.json
// in the directory.
import MC from 'mango-components';

const Tootlip = MC.Tootlip.createComponent();
const Button = MC.Button.createComponent();
const Input = MC.Input.createComponent();
const Checkbox = MC.Checkbox.createComponent();
const PaddedCheckbox = MC.PaddedCheckbox.createComponent();

type Props = {} & FormProps;

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
            component={Input}
          />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            component={Input}
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
