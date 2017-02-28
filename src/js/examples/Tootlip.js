/*
 * examples/Tootlip.js
 */

import React, { Component } from 'react';
import { Tootlip } from '../';

export default class TootlipExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bottomLeftSideButtonIsActive: false,
      buttonIsActive: false,
      isHovering: false,
      leftSideButtonIsActive: false,
      rightSideButtonIsActive: false,
      topRightSideButtonIsActive: false,
    };
  }

  render() {
    const {
      bottomLeftSideButtonIsActive,
      buttonIsActive,
      isHovering,
      leftSideButtonIsActive,
      rightSideButtonIsActive,
      topRightSideButtonIsActive,
    } = this.state;

    return (
      <div>
        <h2>Tootlip</h2>
        <p>
          <a
            onMouseOver={() => this.setState({ isHovering: true })}
            onMouseOut={() => this.setState({ isHovering: false })}
          >
            Hover on me
            <Tootlip
              visible={isHovering}
              appElement={document.getElementById('app')}
            >
              Hey
            </Tootlip>
          </a> for a tootlip.
        </p>
        <p>You can use it with buttons too.</p>
        <div>
          <button
            type="button"
            className="button primary"
            onClick={() =>
              this.setState({
                buttonIsActive: !buttonIsActive,
              })}
          >
            {'Press (･ω´･ )́)'}
            <Tootlip visible={buttonIsActive}>
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
            className="button primary"
            onClick={() =>
              this.setState({
                rightSideButtonIsActive: !rightSideButtonIsActive,
              })}
          >
            {'Right (･ω´･ )́)'}
            <Tootlip
              visible={rightSideButtonIsActive}
              position={Tootlip.positions.RIGHT}
            >
              Mango Chutney
            </Tootlip>
          </button>
          <button
            type="button"
            className="button primary"
            onClick={() =>
              this.setState({
                leftSideButtonIsActive: !leftSideButtonIsActive,
              })}
          >
            {'Left (･ω´･ )́)'}
            <Tootlip
              visible={leftSideButtonIsActive}
              position={Tootlip.positions.LEFT}
            >
              Among Chutney
            </Tootlip>
          </button>
          <button
            type="button"
            className="button primary"
            onClick={() =>
              this.setState({
                topRightSideButtonIsActive: !topRightSideButtonIsActive,
              })}
          >
            {'Top right (･ω´･ )́)'}
            <Tootlip
              visible={topRightSideButtonIsActive}
              position={Tootlip.positions.TOP_RIGHT}
            >
              Ace Gunny Moth
            </Tootlip>
          </button>
          <button
            type="button"
            className="button primary"
            onClick={() =>
              this.setState({
                bottomLeftSideButtonIsActive: !bottomLeftSideButtonIsActive,
              })}
          >
            {'Bottom left (･ω´･ )́)'}
            <Tootlip
              visible={bottomLeftSideButtonIsActive}
              position={Tootlip.positions.BOTTOM_LEFT}
            >
              Cage Ohm Tunny
            </Tootlip>
          </button>
        </div>
      </div>
    );
  }
}
