// @flow

import 'raf/polyfill';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import MC from '../../src';

const Avatar = MC.Avatar.createComponent();

function AvatarComponent() {
  return (
    <div>
      <Avatar />
      <Avatar name="test" />
      <Avatar backgroundImage="https://placeholdit.imgix.net/~text?txtsize=33&txt=&w=50&h=50" />
      <Avatar size="200px" />
      <Avatar fontSize="40px" />
    </div>
  );
}

it('Avatar component renders correctly', () => {
  const tree = renderer.create(<AvatarComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
