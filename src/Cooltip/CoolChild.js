// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';

export const StyledCoolChild = styled.button.attrs({ type: 'button' })`
  background-color: ${({ theme }) => get(theme, 'coolChild.backgroundColor')};
  border: 1px solid ${({ theme }) => get(theme, 'coolChild.border')};
  color: ${({ theme }) => get(theme, 'coolChild.color')};
  flex: 1;
  margin: -1px;
  overflow: hidden;
  padding: 1rem;
  text-align: center;

  &:focus {
    z-index: 1;
  }

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) =>
        get(theme, 'coolChild.activeBackgroundColor')};
      border: 1px solid
        ${({ theme }) => get(theme, 'coolChild.activeBackgroundColor')};
      color: ${({ theme }) => get(theme, 'coolChild.activeColor')};
    `};
`;

export type $Props = {
  children?: React.Node,
  label?: string,
};

function CoolChild(props: $Props) {
  const { children, label, ...rest } = props;

  return <StyledCoolChild {...rest}>{label}</StyledCoolChild>;
}

export default CoolChild;
