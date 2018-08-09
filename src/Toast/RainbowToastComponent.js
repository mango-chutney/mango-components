import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import keys from 'lodash/keys';
import pick from 'lodash/pick';
import { btoa } from 'isomorphic-base64';
import RainbowGradient from './RainbowGradient';
import {
  createStyledComponents as createStyledToastComponents,
  defaultStyleProps as defaultToastStyleProps,
} from './Toast';

const { ToastComponent } = createStyledToastComponents(defaultToastStyleProps);

const RainbowToastComponent = ToastComponent.extend`
  /* fallback for old browsers */
  background: linear-gradient(135deg, ${({ colors }) => colors.join(', ')});
  background: url(data:image/svg+xml;base64,${props =>
    btoa(
      renderToStaticMarkup(
        <RainbowGradient
          {...pick(props, keys(RainbowGradient.defaultProps))}
        />,
      ),
    )});
  background-size: cover;
  color: white;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`;

RainbowToastComponent.defaultProps = {
  ...RainbowGradient.defaultProps,
  ...ToastComponent.defaultProps,
};

export default RainbowToastComponent;
