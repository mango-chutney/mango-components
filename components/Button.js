// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, darken } from 'polished';
import { palette as _palette, fontWeights } from './constants';

export type Props = {
  children: React.Node,
  onClick: Function,
};

export type Palette = {
  primary: string,
  secondary: string,
  tertiary: string,
};

export const buttonThemeMixin = (
  props: {
    primary: boolean,
    secondary: boolean,
    tertiary: boolean,
    gray: boolean,
  },
  palette?: Palette,
) => {
  if (
    [props.primary, props.secondary, props.tertiary, props.gray].filter(
      isTruthy => isTruthy,
    ).length > 1
  ) {
    throw Error('...');
  }

  if (props.primary) {
    return css`
      background-color: ${(palette && palette.primary) || _palette.primary};
    `;
  }

  if (props.secondary) {
    return css`
      background-color: ${(palette && palette.secondary) || _palette.secondary};
    `;
  }

  if (props.tertiary) {
    return css`
      background-color: ${(palette && palette.tertiary) || _palette.tertiary};
    `;
  }

  if (props.gray) {
    return css`
      background-color: #f0f3f8;
      color: ${_palette.darkGray};
      border: 1px solid ${_palette.border};
    `;
  }
};

export const StyledButton = styled.a`
  background-color: ${_palette.darkGray};
  border: 0;
  border-radius: 0.25rem;
  color: ${_palette.white};
  cursor: pointer;
  display: ${props => (props.expanded ? 'block' : 'inline-block')};
  font-weight: ${fontWeights.semibold};
  margin-bottom: 1rem;
  padding: 0.5rem 1.25rem;
  text-decoration: none;
  text-align: center;
`;

export default ({
  styles,
  palette,
}: {
  styles?: { a: string },
  palette?: Palette,
}) => {
  // grab custom palette if needed
  let ExtendedStyledButton = StyledButton.extend`
    ${props => buttonThemeMixin(props, palette)};
  `;

  if (styles && styles.a) {
    ExtendedStyledButton = ExtendedStyledButton.extend([styles.a]);
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
