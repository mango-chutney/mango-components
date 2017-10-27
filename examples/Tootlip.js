// @flow

import * as React from 'react';
// Explicitly import from index.js, not from the "main" property of package.json
// in the directory.
import MC from '../index';

const { placements, createComponent: createTootlipComponent } = MC.Tootlip;

const Tootlip = createTootlipComponent();

type Props = {};

type State = {
  exampleBottomPlacementButtonIsActive: boolean,
  exampleButtonIsActive: boolean,
  exampleLeftPlacementButtonIsActive: boolean,
  exampleRightPlacementButtonIsActive: boolean,
  exampleTopPlacementButtonIsActive: boolean,
  isHovering: boolean,
};

export default class TootlipExample extends React.Component<Props, State> {
  state = {
    exampleBottomPlacementButtonIsActive: false,
    exampleButtonIsActive: false,
    exampleLeftPlacementButtonIsActive: false,
    exampleRightPlacementButtonIsActive: false,
    exampleTopPlacementButtonIsActive: false,
    isHovering: false,
  };

  render() {
    const {
      exampleBottomPlacementButtonIsActive,
      exampleButtonIsActive,
      exampleLeftPlacementButtonIsActive,
      exampleRightPlacementButtonIsActive,
      exampleTopPlacementButtonIsActive,
      isHovering,
    } = this.state;

    return (
      <div>
        <h2>Tootlip</h2>
        <p>
          <span
            onMouseOver={() => {
              this.setState({ isHovering: true });
            }}
            onFocus={() => {
              this.setState({ isHovering: true });
            }}
            onMouseOut={() => {
              this.setState({ isHovering: false });
            }}
            onBlur={() => {
              this.setState({ isHovering: false });
            }}
          >
            Hover on me
            <Tootlip
              visible={isHovering}
              appElement={document.getElementById('app')}
              placement={placements.auto}
            >
              Hey
            </Tootlip>
          </span>{' '}
          for a tootlip.
        </p>
        <p>You can use it with buttons too.</p>
        <div>
          <button
            type="button"
            onClick={() => {
              this.setState({
                exampleButtonIsActive: !exampleButtonIsActive,
              });
            }}
          >
            {'Press (･ω´･ )́)'}
            <Tootlip
              visible={exampleButtonIsActive}
              placement={placements.auto}
            >
              Thanks for following the instructions.
            </Tootlip>
          </button>
        </div>
        <p>There are a couple of positioning options.</p>
        <p>
          If it looks like the tooltip is colliding with the edge of the
          viewport, it will try other positions.
        </p>
        <div>
          <button
            type="button"
            onClick={() => {
              this.setState({
                exampleRightPlacementButtonIsActive: !exampleRightPlacementButtonIsActive,
              });
            }}
          >
            {'Right (･ω´･ )́)'}
            <Tootlip
              visible={exampleRightPlacementButtonIsActive}
              placement={placements.right}
            >
              Mango Chutney
            </Tootlip>
          </button>
          <button
            type="button"
            onClick={() =>
              this.setState({
                exampleLeftPlacementButtonIsActive: !exampleLeftPlacementButtonIsActive,
              })}
          >
            {'Left (･ω´･ )́)'}
            <Tootlip
              visible={exampleLeftPlacementButtonIsActive}
              placement={placements.left}
            >
              Among Chutney
            </Tootlip>
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({
                exampleTopPlacementButtonIsActive: !exampleTopPlacementButtonIsActive,
              });
            }}
          >
            {'Top (･ω´･ )́)'}
            <Tootlip
              visible={exampleTopPlacementButtonIsActive}
              placement={placements.top}
            >
              Ace Gunny Moth
            </Tootlip>
          </button>
          <button
            type="button"
            onClick={() =>
              this.setState({
                exampleBottomPlacementButtonIsActive: !exampleBottomPlacementButtonIsActive,
              })}
          >
            {'Bottom (･ω´･ )́)'}
            <Tootlip
              visible={exampleBottomPlacementButtonIsActive}
              placement={placements.bottom}
            >
              Cage Ohm Tunny
            </Tootlip>
          </button>
        </div>
      </div>
    );
  }
}
