// @flow

import 'raf/polyfill';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import MC from '../../src';

const Button = MC.Button.createComponent();

function ButtonComponent() {
  return (
    <div>
      <Button onClick={() => {}}>Button</Button>
      <Button onClick={() => {}} expanded>
        Expanded Button
      </Button>
    </div>
  );
}

it('Button component renders correctly', () => {
  const tree = renderer.create(<ButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
