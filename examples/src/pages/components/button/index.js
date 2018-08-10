// @flow

import * as React from 'react';
import { createComponent as createButtonComponent } from 'mango-components/es/Button';
import { createComponent as createAnchorButtonComponent } from 'mango-components/es/AnchorButton';
import Layout from '../../../containers/Layout';

const Button = createButtonComponent();
const AnchorButton = createAnchorButtonComponent();

type Props = {};

type State = {};

export class ButtonExample extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <Layout>
        <h2>Button</h2>
        <Button onClick={() => {}}>Button</Button>
        <h2>AnchorButton</h2>
        <AnchorButton href="/">AnchorButton</AnchorButton>
      </Layout>
    );
  }
}

export default ButtonExample;
