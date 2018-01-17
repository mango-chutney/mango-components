import 'raf/polyfill';
import 'jest-styled-components';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Field, reduxForm, reducer as formReducer } from 'redux-form';
import renderer from 'react-test-renderer';
import MC from '../../src';

const Input = MC.Input.createComponent();
const TextArea = MC.TextArea.createComponent();
const Checkbox = MC.Checkbox.createComponent();
const PaddedCheckbox = MC.PaddedCheckbox.createComponent();

const store = createStore(combineReducers({ form: formReducer }));

function Form() {
  return (
    <form>
      <Field
        type="text"
        name="input"
        placeholder="Input"
        label="Input"
        component={Input}
      />
      <Field
        name="textarea"
        placeholder="Text Area"
        label="Text Area"
        component={TextArea}
      />
      <Field
        name="checkbox"
        label="Checkbox"
        placeholder="Checkbox"
        component={Checkbox}
      />
      <Field
        name="padded-checkbox"
        label="PaddedCheckbox"
        placeholder="PaddedCheckbox"
        component={PaddedCheckbox}
      />
    </form>
  );
}

const Component = reduxForm({
  form: 'Form',
})(Form);

it('Input renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Component />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});