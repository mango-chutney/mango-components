// @flow

import * as React from 'react';
// Explicitly import from index.js, not from the "main" property of package.json
// in the directory.
import MC from 'mango-components';

const Tristicon = MC.Tristicon.createComponent();

type Props = {};

type State = {};

export class TristiconExample extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <h2>Tristicon</h2>
        <p>
          You will need to include the tristicon fonts with webpack copy or a
          font loader (or w/e you please).
        </p>
        <div>
          <code>
            {// prettier-ignore
            `
              <Tristicon icon="facebook" />
            `}
          </code>
          <p>
            <Tristicon icon="facebook" />
          </p>
        </div>
      </div>
    );
  }
}

export const component = TristiconExample;

export default component;
