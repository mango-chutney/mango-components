/*
 * tests/components/Tootlip.spec.js
 */

import React from 'react';
import { shallow } from 'enzyme';
import { Tootlip } from '../../src/js';

const component = 'Tootlip';

test(`${component}: renders className on the portal`, () => {
  const wrapper = shallow(<Tootlip className="some-class" />);
  const portal = wrapper.childAt(0);
  expect(portal.hasClass('some-class')).toBe(true);
});
