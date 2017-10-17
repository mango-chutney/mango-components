// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, darken } from 'polished';
import { fontWeights } from './constants';
import { StyledButton, buttonThemeMixin } from './Button';
import type { Palette } from './Button';

export type Props = {
  children: React.Node,
  href: string,
};

export const StyledAnchorButton = StyledButton.withComponent('a');

export default ({
  styles,
  palette,
}: {
  styles?: { a: string },
  palette?: Palette,
}) => {
  // grab custom palette if needed
  let ExtendedStyledAnchorButton = StyledAnchorButton.extend`
    ${props => buttonThemeMixin(props, palette)};
  `;

  if (styles && styles.a) {
    ExtendedStyledAnchorButton = ExtendedStyledAnchorButton.extend([styles.a]);
  }

  return function AnchorButton(props: Props) {
    const { children, href, ...rest } = props;

    return (
      <ExtendedStyledAnchorButton href={props.href} {...rest}>
        {children}
      </ExtendedStyledAnchorButton>
    );
  };
};
