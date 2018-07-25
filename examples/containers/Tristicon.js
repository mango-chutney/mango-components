// @flow

import * as React from 'react';
// Explicitly import from index.js, not from the "main" property of package.json
// in the directory.
import MC from 'mango-components';
import { injectGlobal } from 'styled-components';
import stripIndent from 'strip-indent';

const Tristicon = MC.Tristicon.createComponent();

type Props = {};

type State = {};

injectGlobal`
  ${MC.Tristicon.createFontFace()}
`;

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
        <p>
          Another option is to use the Base 64 encoded WOFF file inline, so you
          don't have to copy font files. You can use the{' '}
          <code>createFontFace</code> export from the <code>Tristicon</code>{' '}
          component for this:
        </p>
        <pre>
          <code>
            {// prettier-ignore
            stripIndent(`
              injectGlobal\`
                \${MC.Tristicon.createFontFace()}
              \`;
            `)}
          </code>
        </pre>
        <h3>Example</h3>
        <div>
          <pre>
            <code>
              {// prettier-ignore
              stripIndent(`
                <Tristicon icon="facebook" />
              `)}
            </code>
          </pre>
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
