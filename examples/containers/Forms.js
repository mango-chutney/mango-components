// @flow

import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import matchSorter from 'match-sorter';
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

type Props = {} & $FormProps;

type State = {
  done: boolean,
};

const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'orange', color: 'orange' },
  { name: 'pear', color: 'green' },
  { name: 'banana', color: 'yellow' },
];

export class Form extends React.Component<Props, State> {
  submit = (): Promise<void> =>
    new Promise(resolve => setTimeout(() => resolve(), 3000));

  render() {
    const { submitting, submitSucceeded, handleSubmit, reset } = this.props;

    if (submitSucceeded) {
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
            name="async-validating-text"
            placeholder="async-validating-text"
            label="async validating field"
            component={Input}
          />
          <Field
            name="textarea"
            label="TextArea"
            placeholder="TextArea"
            component={TextArea}
          />
          <Field
            name="invalid-textarea"
            label="Invalid TextArea"
            placeholder="Invalid TextArea"
            component={TextAreaWithTootlip}
          />
          <Field
            name="disabled-textarea"
            label="Disabled TextArea"
            placeholder="Disabled TextArea"
            component={TextArea}
            disabled
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
            <Field name="checken2" placeholder="checken2" component={Checkbox}>
              This guy has a link:{' '}
              <a href="http://mangochutney.com.au">
                http://mangochutney.com.au
              </a>
            </Field>
          </div>
          <div>
            <Field name="checken3" placeholder="checken3" component={Checkbox}>
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
          <Field
            name="fruit"
            label="Enter fruit name"
            items={fruits}
            placeholder="Enter fruit name"
            filterItems={(items, inputValue) =>
              matchSorter(items, inputValue, {
                keys: ['name'],
                maxRanking: matchSorter.rankings.STARTS_WITH,
              })
            }
            renderItem={item => (
              <span style={{ color: item.color }}>{item.name}</span>
            )}
            mapItemToString={fruit => (fruit ? fruit.name : '')}
            component={TypeaheadInput}
          />
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

  if (!values.password) {
    errors.password = 'Please enter a password!';
  }

  if (!values.email) {
    errors.email = 'Please enter your email address!';
  }

  if (!values.fruit) {
    errors.fruit = 'Please enter your fruit!';
  }

  if (!fruits.some(({ name }) => name === values.fruit)) {
    errors.fruit = 'That is not one of the available fruits!';
  }

  errors['invalid-select'] = true;
  errors['invalid-soup'] = true;
  errors['invalid-text'] = true;
  errors['invalid-textarea'] = true;
  errors['invalid-checken'] = true;

  return errors;
};

const asyncValidate = () =>
  new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
    const errors = { 'async-validating-text': ':(' };
    throw errors;
  });

export const component = reduxForm({
  form: 'Form',
  validate,
  asyncValidate,
  asyncBlurFields: ['async-validating-text'],
})(Form);

export default component;
