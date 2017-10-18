// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, darken } from 'polished';
import { fontWeights } from './constants';
import { StyledButton } from './Button';

export type Props = {
  children: React.Node,
  href: string,
};

export default ({ styles }: { styles?: { a: string } }) => {
  // grab custom palette if needed
  let StyledAnchorButton = StyledButton.withComponent('a');

  if (styles && styles.a) {
    StyledAnchorButton = StyledAnchorButton.extend([styles.a]);
  }

  return function AnchorButton(props: Props) {
    const { children, href, ...rest } = props;

    return (
      <StyledAnchorButton href={props.href} {...rest}>
        {children}
      </StyledAnchorButton>
    );
  };
};
