// @flow

import 'raf/polyfill';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { createComponent as createPanelComponent } from '../../src/Panel';
import { createComponent as createPanelHeadingComponent } from '../../src/PanelHeading';
import { createComponent as createPanelSectionComponent } from '../../src/PanelSection';

const Panel = createPanelComponent();
const PanelHeading = createPanelHeadingComponent();
const PanelSection = createPanelSectionComponent();

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
