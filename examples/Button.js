// @flow

import * as React from 'react';
// Explicitly import from index.js, not from the "main" property of package.json
// in the directory.
import MC from '../index';

const Button = MC.Button.createComponent();
const AnchorButton = MC.AnchorButton.createComponent();

type Props = {};

type State = {};

export default class ButtonExample extends React.Component<Props, State> {
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
