// @flow

import * as React from 'react';
import { createComponent as createButtonComponent } from 'mango-components/es/Button';
import { createComponent as createAnchorButtonComponent } from 'mango-components/es/AnchorButton';

const Button = createButtonComponent();
const AnchorButton = createAnchorButtonComponent();

type Props = {};

type State = {};

export class ButtonExample extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <h2>Button</h2>
        <Button onClick={() => {}}>Button</Button>
        <h2>AnchorButton</h2>
        <AnchorButton href="/">AnchorButton</AnchorButton>
      </div>
    );
  }
}

export const component = ButtonExample;

export default component;
