// @flow

import * as React from 'react';
import { createComponent as createPanelComponent } from 'mango-components/es/Panel';
import { createComponent as createPanelSectionComponent } from 'mango-components/es/PanelSection';
import { createComponent as createPanelHeadingComponent } from 'mango-components/es/PanelHeading';
import Layout from '../../../containers/Layout';

const Panel = createPanelComponent();
const PanelHeading = createPanelHeadingComponent();
const PanelSection = createPanelSectionComponent();

type Props = {};

type State = {};

export class PanelExample extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}

export const component = PanelExample;

export default component;
