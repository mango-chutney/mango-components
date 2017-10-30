// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, darken } from 'polished';
import { palette, fontWeights } from './constants';

export type Props = {
  children: React.Node,
  onClick: Function,
};

// export for AnchorButton
export const StyledButton = styled.button`
  background-color: #f0f3f8;
  border-radius: 0.25rem;
  border: 0;
  color: ${palette.darkGray};
  cursor: pointer;
  display: ${props => (props.expanded ? 'block' : 'inline-block')};
  font-family: inherit;
  font-weight: ${fontWeights.semibold};
  margin-bottom: 1rem;
  padding: 0.65rem 1.25rem;
  text-align: center;
  text-decoration: none;
`;

export default ({ styles }: { styles?: { button: string } }) => {
  let ExtendedStyledButton = StyledButton;

  if (styles && styles.button) {
    ExtendedStyledButton = ExtendedStyledButton.extend([styles.button]);
  }

  return function Button(props: Props) {
    const { children, onClick, ...rest } = props;

    return (
      <ExtendedStyledButton onClick={onClick} {...rest}>
        {children}
      </ExtendedStyledButton>
    );
  };
};
