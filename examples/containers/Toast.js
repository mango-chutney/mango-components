// @flow

import * as React from 'react';
// Explicitly import from index.js, not from the "main" property of package.json
// in the directory.
import MC from 'mango-components';

const Toast = MC.Toast.createComponent();

type Props = {};

type State = {
  toast1: boolean,
  toast2: boolean,
  toast3: boolean,
  toast4: boolean,
  toast5: boolean,
  toast6: boolean,
};

export class ToastExample extends React.Component<Props, State> {
  state = {
    toast1: false,
    toast2: false,
    toast3: false,
    toast4: false,
    toast5: false,
    toast6: false,
  };

  render() {
    const { toast1, toast2, toast3, toast4, toast5, toast6 } = this.state;
    return (
      <div>
        <h1>Toast</h1>
        <p>
          <code>
            {// prettier-ignore
            `<Toast active={stateToggle} duration={3}>Lorem Ipsum</Toast>`}
          </code>
        </p>
        <hr />
        <table
          style={{
            'text-align': 'left',
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <code>active</code>
              </th>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <th>
                <code>duration</code>
              </th>
              <td>
                <code>number</code> (in seconds. if 0 then infinite)
              </td>
              <td>
                <code>10</code>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <p>
          You will need to reset the toast active prop if you want to play it
          again
        </p>
        <div>
          <Toast active={toast1} duration={3}>
            Toast
          </Toast>

          <button
            type="button"
            onClick={() => {
              this.setState({
                toast1: !toast1,
              });
            }}
          >
            activate me
          </button>
        </div>
        <div>
          <Toast active={toast2} duration={2}>
            Toast
          </Toast>

          <button
            type="button"
            onClick={() => {
              this.setState({
                toast2: !toast2,
              });
            }}
          >
            activate me
          </button>
        </div>
        <div>
          <Toast active={toast3} duration={0}>
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
          </Toast>

          <button
            type="button"
            onClick={() => {
              this.setState({
                toast3: !toast3,
              });
            }}
          >
            activate me - infinite
          </button>
        </div>
        <div>
          <Toast active={toast4} duration={5} alert>
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
          </Toast>

          <button
            type="button"
            onClick={() => {
              this.setState({
                toast4: !toast4,
              });
            }}
          >
            activate me - alert
          </button>
        </div>
        <div>
          <Toast active={toast5} duration={5} success>
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
          </Toast>

          <button
            type="button"
            onClick={() => {
              this.setState({
                toast5: !toast5,
              });
            }}
          >
            activate me - success
          </button>
        </div>
        <div>
          <Toast active={toast6} duration={5} inactive>
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
          </Toast>

          <button
            type="button"
            onClick={() => {
              this.setState({
                toast6: !toast6,
              });
            }}
          >
            activate me - inactive
          </button>
        </div>
      </div>
    );
  }
}

export const component = ToastExample;

export default component;
