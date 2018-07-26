// @flow

import 'raf/polyfill';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { createComponent as createMadeWithMangoChutneyComponent } from '../../src/MadeWithMangoChutney';

const MadeWithMangoChutney = createMadeWithMangoChutneyComponent();

function MadeWithMangoChutneyComponent() {
  return <MadeWithMangoChutney />;
}

it('MadeWithMangoChutney component renders correctly', () => {
  const tree = renderer.create(<MadeWithMangoChutneyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
