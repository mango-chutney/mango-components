// @flow

import 'raf/polyfill';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import MC from '../../src';

const RadialProgressBar = MC.RadialProgressBar.createComponent();

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
