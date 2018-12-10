// @flow

import * as React from 'react';
import { Formik, Field, Form as FormikForm } from 'formik';
import matchSorter from 'match-sorter';
import identity from 'lodash/identity';
import type { FormikProps } from 'formik';
import {
  Button,
  Checkbox,
  Cooltip,
  CoolChild,
  OtherChild,
  Radio,
  Tootlip,
  Input,
  TypeaheadInput,
  TextArea,
  Select,
  DatePicker,
} from 'mango-components';
import Layout from '../../../containers/Layout';

const TextAreaWithTootlip = ({
  meta,
  ...rest
}: React.ElementConfig<typeof TextArea>): React.Node => (
  <TextArea {...{ ...rest, meta }}>
    <Tootlip visible={meta.touched && meta.error}>
      There is an error with this field.
    </Tootlip>
  </TextArea>
);

type Props = {};

type State = {
  done: boolean,
};

const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'orange', color: 'orange' },
  { name: 'pear', color: 'green' },
  { name: 'banana', color: 'yellow' },
];

const coolChildren = [
  <CoolChild value="100" label="$100">
    1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non mi
    in felis ornare tincidunt vitae sit amet enim.
  </CoolChild>,
  <CoolChild value="250" label="$250">
    2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non mi
    in felis ornare tincidunt vitae sit amet enim.
  </CoolChild>,
  <CoolChild value="500" label="$500">
    3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non mi
    in felis ornare tincidunt vitae sit amet enim.
  </CoolChild>,
  <CoolChild value="1000" label="$1,000">
    4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non mi
    in felis ornare tincidunt vitae sit amet enim.
  </CoolChild>,
];

const otherChild = (
  <OtherChild label="Other">
    Other Tiptext: 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas non mi in felis ornare tincidunt vitae sit amet enim.
  </OtherChild>
);

const validate = (values: any) => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Please enter a password!';
  }

  if (!values.email) {
    errors.email = 'Please enter your email address!';
  }

  return errors;
};

// eslint-disable-next-line react/prefer-stateless-function
export class Form extends React.Component<Props, State> {
  state = {
    done: false,
  };

  render() {
    const { done } = this.state;

    return (
      <Layout>
        <h2>Forms</h2>
        <h3>Input</h3>
        <Formik
          initialValues={{
            email: '',
            password: '',
            cooltip: '250',
            'themed-cooltip': '500',
          }}
          {...{ validate }}
          onSubmit={(values, actions) => {
            new Promise(resolve => setTimeout(() => resolve(), 3000)).then(
              () => {
                this.setState({ done: true });
                actions.setSubmitting(false);
              },
            );
          }}
        >
          {({ isSubmitting }: FormikProps<any>) => (
            <FormikForm>
              <Field
                type="email"
                name="email"
                component={Input}
                label="email"
                placeholder="Email"
              />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                label="password"
                component={Input}
              />
              <Field
                type="text"
                name="invalid-text"
                placeholder="invalid field"
                label="invalid field"
                component={Input}
              />
              <Field
                type="text"
                name="disabled-text"
                placeholder="disabled field"
                label="disabled field"
                component={Input}
                disabled
              />
              <Field
                type="text"
                name="themed-text"
                placeholder="themed field"
                label="themed field"
                component={Input}
                theme={{
                  input: {
                    color: '#002fff',
                    borderColor: '#002fff',
                    activeBorderColor: '#ff7e00',
                    placeholderColor: '#002fff',
                  },
                  label: {
                    color: '#002fff',
                  },
                }}
              />
              <Field
                name="textarea"
                label="TextArea"
                placeholder="TextArea"
                component={TextArea}
              />
              <Field
                name="themed-textarea"
                label="Themed TextArea"
                placeholder="Themed TextArea"
                component={TextArea}
                theme={{
                  input: {
                    color: '#002fff',
                    borderColor: '#002fff',
                    activeBorderColor: '#ff7e00',
                    placeholderColor: '#002fff',
                  },
                  label: {
                    color: '#002fff',
                  },
                }}
              />
              <div>
                <Field
                  name="checken"
                  label="This guy has no children, but a label prop."
                  placeholder="checken"
                  component={Checkbox}
                />
              </div>
              <div>
                <Field
                  name="checken2"
                  placeholder="checken2"
                  component={Checkbox}
                >
                  This guy has a link:{' '}
                  <a href="http://mangochutney.com.au">
                    http://mangochutney.com.au
                  </a>
                </Field>
              </div>
              <div>
                <Field
                  name="checken3"
                  placeholder="checken3"
                  component={Checkbox}
                >
                  This guy has a Button:{' '}
                  <button
                    type="button"
                    onClick={() => {
                      // eslint-disable-next-line no-alert
                      alert('Thanks for following the instructions.');
                    }}
                  >
                    press me
                  </button>
                </Field>
              </div>
              <div>
                <Field
                  name="invalid-checken"
                  label="This guy is invalid."
                  placeholder="invalid checken"
                  component={Checkbox}
                />
              </div>
              <div>
                <Field
                  name="disabled-checken"
                  label="This guy is disabled."
                  placeholder="disabled checken"
                  component={Checkbox}
                  disabled
                />
              </div>
              <div>
                <Field
                  name="themed-checken"
                  label="This guy is themed."
                  placeholder="themed checken"
                  component={Checkbox}
                  theme={{
                    checkbox: {
                      color: '#002fff',
                      borderColor: '#002fff',
                      activeBackgroundColor: '#ff7e00',
                    },
                    label: {
                      color: '#002fff',
                    },
                  }}
                />
              </div>
              <div>
                <Field
                  name="radio"
                  id="radio-option-1"
                  value="radio-option-1"
                  label="radio option 1"
                  type="radio"
                  component={Radio}
                />
                <Field
                  name="radio"
                  id="radio-option-2"
                  value="radio-option-2"
                  label="radio option 2"
                  type="radio"
                  component={Radio}
                />
              </div>
              <div>
                <Field
                  name="disabled-radio"
                  value="disabled-radio-option-1"
                  label="disabled radio option"
                  type="radio"
                  component={Radio}
                  disabled
                />
                <Field
                  name="invalid-radio"
                  id="invalid-radio-option-1"
                  value="invalid-radio-option-1"
                  label="invalid radio option 1"
                  type="radio"
                  component={Radio}
                />
                <Field
                  name="invalid-radio"
                  id="invalid-radio-option-2"
                  value="invalid-radio-option-2"
                  label="invalid radio option 2"
                  type="radio"
                  component={Radio}
                />
                <Field
                  name="themed-radio"
                  id="themed-radio-option-1"
                  value="themed-radio-option-1"
                  label="themed radio option 1"
                  type="radio"
                  component={Radio}
                  theme={{
                    radio: {
                      color: '#002fff',
                      borderColor: '#002fff',
                      activeBackgroundColor: '#ff7e00',
                    },
                    label: {
                      color: '#002fff',
                    },
                  }}
                />
                <Field
                  name="themed-radio"
                  id="themed-radio-option-2"
                  value="themed-radio-option-2"
                  label="themed radio option 2"
                  type="radio"
                  component={Radio}
                  theme={{
                    radio: {
                      color: '#002fff',
                      borderColor: '#002fff',
                      activeBackgroundColor: '#ff7e00',
                    },
                    label: {
                      color: '#002fff',
                    },
                  }}
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
              <div>
                <Field
                  name="disabled-select"
                  label="disabled select"
                  placeholder="disabled select"
                  component={Select}
                  disabled
                >
                  <option value="option-1">Option 1</option>
                  <option value="option-2">Option 2</option>
                </Field>
              </div>
              <div>
                <Field
                  name="invalid-select"
                  label="invalid select"
                  placeholder="invalid select"
                  component={Select}
                >
                  <option value="option-1">Option 1</option>
                  <option value="option-2">Option 2</option>
                </Field>
              </div>
              <div>
                <Field
                  name="themed-select"
                  label="themed select"
                  placeholder="themed select"
                  component={Select}
                  theme={{
                    input: {
                      color: '#002fff',
                      borderColor: '#002fff',
                      placeholderColor: '#002fff',
                    },
                    label: {
                      color: '#002fff',
                    },
                  }}
                >
                  <option value="option-1">Option 1</option>
                  <option value="option-2">Option 2</option>
                </Field>
              </div>
              <Field
                name="soup"
                label="Enter soup date"
                autoComplete="off"
                component={DatePicker}
                placeholder="DD/MM/YYYY"
              />
              <Field
                name="invalid-soup"
                label="Enter soup date invalid"
                autoComplete="off"
                component={DatePicker}
                placeholder="DD/MM/YYYY"
              />
              <Field
                name="disabled-soup"
                label="Enter soup date disabled"
                disabled
                autoComplete="off"
                component={DatePicker}
                placeholder="DD/MM/YYYY"
              />
              <Field
                name="cooltip"
                component={Cooltip}
                coolChildren={coolChildren}
                otherChild={otherChild}
                label="Other Amount Label"
                placeholder="Other Amount Placeholder"
              />
              <Field
                name="themed-cooltip"
                component={Cooltip}
                coolChildren={coolChildren}
                otherChild={otherChild}
                cooltipLabel="Cooltip Label"
                label="Other Amount Label"
                placeholder="Other Amount Placeholder"
                theme={{ coolChild: { activeBackgroundColor: '#000' } }}
                formatOtherChild={identity}
                seformatOtherChild={identity}
              />
              <Button type="submit">
                Go
                <Tootlip visible={isSubmitting}>
                  OK, please wait a moment…
                </Tootlip>
                <Tootlip visible={done}>
                  Thanks for submitting the form{' '}
                  <span role="img" aria-label="Thumbs up sign">
                    👍
                  </span>
                </Tootlip>
              </Button>
            </FormikForm>
          )}
        </Formik>
      </Layout>
    );
  }
}

export default Form;
