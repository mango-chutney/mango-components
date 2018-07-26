// @flow

import 'raf/polyfill';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { createComponent as createTristiconComponent } from '../../src/Tristicon';

const Tristicon = createTristiconComponent();

function TristiconComponent() {
  return <Tristicon icon="star" />;
}

it('Tristicon component renders correctly', () => {
  const tree = renderer.create(<TristiconComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
