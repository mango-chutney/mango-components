// @flow

import 'raf/polyfill';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { createComponent as createRadialProgressBarComponent } from '../../src/RadialProgressBar';

const RadialProgressBar = createRadialProgressBarComponent();

function RadialProgressBarComponent() {
  return (
    <RadialProgressBar
      backgroundColor="#ffca00"
      percentage={75}
      width={100}
      strokeWidthScale={20}
      strokeLinecap="round"
    />
  );
}

it('RadialProgressBar component renders correctly', () => {
  const tree = renderer.create(<RadialProgressBarComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
