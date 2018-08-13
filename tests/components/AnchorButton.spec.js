// @flow

import 'raf/polyfill';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { createComponent as createAnchorButtonComponent } from '../../src/AnchorButton';

const AnchorButton = createAnchorButtonComponent();

function AnchorButtonComponent() {
  return (
    <div>
      <AnchorButton href="">Anchor Button</AnchorButton>
      <AnchorButton href="" expanded>
        Expanded Anchor Button
      </AnchorButton>
    </div>
  );
}

it('AnchorButton component renders correctly', () => {
  const tree = renderer.create(<AnchorButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});