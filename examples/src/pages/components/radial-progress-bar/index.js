// @flow

import * as React from 'react';

import { createComponent as createRadialProgressBarComponent } from 'mango-components/es/RadialProgressBar';
import { createComponent as createNestedRadialProgressBarsComponent } from 'mango-components/es/NestedRadialProgressBars';
import Layout from '../../../containers/Layout';

const RadialProgressBar = createRadialProgressBarComponent();
const NestedRadialProgressBars = createNestedRadialProgressBarsComponent();

type Props = {};

type State = {};

export class RadialProgressBarExample extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <Layout>
        <h1>
          <code>
            {
              // prettier-ignore
              '<RadialProgressBar />'
            }
          </code>
        </h1>
        <RadialProgressBar percentage={60} />
        <div>
          <p>Props:</p>
          <code>
            <ul>
              <li>backgroundColor: string</li>
              <li>percentage: number</li>
              <li>strokeLinecap: string (default:butt|round|square)</li>
              <li>strokeWidthScale: number (default: 7)</li>
              <li>width: number</li>
            </ul>
          </code>
        </div>
        <hr />
        <div>
          <div>
            <div>default</div>
          </div>
          <div>
            <div>
              <p>
                <code>
                  {
                    // prettier-ignore
                    '<RadialProgressBar />'
                  }
                </code>
              </p>
              <RadialProgressBar />
            </div>
            <div>
              <p>
                <code>
                  {
                    // prettier-ignore
                    '<RadialProgressBar backgroundColor="#ffca00" percentage={50} />'
                  }
                </code>
              </p>
              <RadialProgressBar backgroundColor="#ffca00" percentage={50} />
            </div>
            <div>
              <p>
                <code>
                  {
                    // prettier-ignore
                    '<RadialProgressBar backgroundColor="#8151f3" percentage={100} />'
                  }
                </code>
              </p>
              <RadialProgressBar backgroundColor="#8151f3" percentage={100} />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <div>
              <h3>different widths</h3>
            </div>
          </div>
          <div>
            <div>
              <p>100:</p>
              <p>
                <code>
                  {// prettier-ignore
                  `<RadialProgressBar
                      backgroundColor="#ffca00"
                      percentage={60}
                      width={100}
                    />`}
                </code>
              </p>
              <RadialProgressBar
                backgroundColor="#ffca00"
                percentage={60}
                width={100}
              />
            </div>
            <div>
              <p>200:</p>
              <p>
                <code>
                  {// prettier-ignore
                  `<RadialProgressBar
                    backgroundColor="#8151f3"
                    percentage={75}
                    width={200}
                  />`}
                </code>
              </p>
              <RadialProgressBar
                backgroundColor="#8151f3"
                percentage={75}
                width={200}
              />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <div>different strokeWidthScale & strokeLinecap</div>
          </div>
          <div>
            <div>
              <p>20 | {`"square"`}</p>
              <p>
                <code>
                  {// prettier-ignore
                  `<RadialProgressBar
                    backgroundColor="#ffca00"
                    percentage={60}
                    width={100}
                    strokeWidthScale={20}
                    strokeLinecap="square"
                  />`}
                </code>
              </p>
              <RadialProgressBar
                backgroundColor="#ffca00"
                percentage={60}
                width={100}
                strokeWidthScale={20}
                strokeLinecap="square"
              />
            </div>
            <div>
              <p>20 | {`"round"`}</p>
              <p>
                <code>
                  {// prettier-ignore
                  `<RadialProgressBar
                    backgroundColor="#8151f3"
                    percentage={75}
                    width={100}
                    strokeWidthScale={20}
                    strokeLinecap="round"
                  />`}
                </code>
              </p>
              <RadialProgressBar
                backgroundColor="#8151f3"
                percentage={75}
                width={100}
                strokeWidthScale={20}
                strokeLinecap="round"
              />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <p>
              using {`<NestedRadialProgressBars/>`} as wrapper containing
              multiple {`<RadialProgressBar/>`}
            </p>
          </div>
          <NestedRadialProgressBars>
            <RadialProgressBar
              backgroundColor="#8151f3"
              percentage={85}
              width={150}
              strokeWidthScale={20}
              strokeLinecap="round"
            />
            <RadialProgressBar
              backgroundColor="#ffca00"
              percentage={75}
              width={100}
              strokeWidthScale={20}
              strokeLinecap="round"
            />
            <RadialProgressBar
              backgroundColor="#00d161"
              percentage={65}
              width={50}
              strokeWidthScale={20}
              strokeLinecap="round"
            />
          </NestedRadialProgressBars>
        </div>
      </Layout>
    );
  }
}

export default RadialProgressBarExample;
