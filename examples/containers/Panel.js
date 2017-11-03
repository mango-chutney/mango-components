// @flow

import * as React from 'react';
// Explicitly import from index.js, not from the "main" property of package.json
// in the directory.
import MC from 'mango-components';

const Panel = MC.Panel.createComponent();
const PanelHeading = MC.PanelHeading.createComponent();
const PanelSection = MC.PanelSection.createComponent();

type Props = {};

type State = {};

export class PanelExample extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <h2>Panel</h2>
        <Panel>
          <PanelHeading>PanelHeading</PanelHeading>
          Lorem ipsum
        </Panel>
        <Panel>
          <PanelHeading>PanelHeading</PanelHeading>
          <PanelSection>PanelSection</PanelSection>
          <PanelSection>PanelSection</PanelSection>
          <PanelSection>PanelSection</PanelSection>
        </Panel>
        <Panel>
          <PanelSection>PanelSection</PanelSection>
          <PanelSection>PanelSection</PanelSection>
          <PanelSection>PanelSection</PanelSection>
        </Panel>
      </div>
    );
  }
}

export const component = PanelExample;

export default component;
