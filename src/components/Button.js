// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';
import { palette, fontWeights } from './constants';

export type $StyledProps = {
  children: React.Node,
  onClick?: Function,
  expanded?: boolean,
};

export type $Props = {
  ...$StyledProps,
  ButtonComponent: React.ComponentType<*>,
};

export const defaultStyleProps: {|
  color: string,
  fontWeight: string | number,
|} = {
  color: palette.darkGray,
  fontWeight: fontWeights.semibold,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    ButtonComponent: ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const ButtonComponent = styled.button`
    background-color: #f0f3f8;
    border-radius: 0.25rem;
    border: 0;
    color: ${styleProps.color};
    cursor: pointer;
    display: ${props => (props.expanded ? 'block' : 'inline-block')};
    font-family: inherit;
    font-weight: ${styleProps.fontWeight};
    margin-bottom: 1rem;
    padding: 0.65rem 1.25rem;
    text-align: center;
    text-decoration: none;
  `;

  return { ButtonComponent };
};

export function Button(props: $Props) {
  const { children, onClick, ButtonComponent, ...rest } = props;

  return (
    <ButtonComponent onClick={onClick} {...rest}>
      {children}
    </ButtonComponent>
  );
}

Button.defaultProps = {
  expanded: false,
};

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <Button {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
