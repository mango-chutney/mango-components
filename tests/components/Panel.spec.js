// @flow

import 'raf/polyfill';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import MC from '../../src';

const Panel = MC.Panel.createComponent();
const PanelHeading = MC.PanelHeading.createComponent();
const PanelSection = MC.PanelSection.createComponent();

function PanelComponents() {
  return (
    <Panel>
      <PanelHeading>Panel Heading</PanelHeading>
      <PanelSection>Panel Section 1</PanelSection>
      <PanelSection>Panel Section 1</PanelSection>
    </Panel>
  );
}

it('Panel components (Panel, PanelHeading, PanelSection) renders correctly', () => {
  const tree = renderer.create(<PanelComponents />).toJSON();
  expect(tree).toMatchSnapshot();
});
