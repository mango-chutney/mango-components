// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';
import { rem, darken } from 'polished';
import type { $ComponentFactory, $StyledSubComponentsFactory } from './types';
import { fontWeights } from './constants';
import {
  createStyledComponents as _createStyledComponents,
  defaultStyleProps,
} from './Button';
import type {StyledProps as _StyledProps} from './Button';


export type StyledProps = {
  href: string,
} & _StyledProps;

export type Props = {
  AnchorButtonComponent: React.ComponentType<*>,
} & StyledProps;

export function AnchorButton(props: Props) {
  const { children, href, AnchorButtonComponent, ...rest } = props;

  return (
    <AnchorButtonComponent href={props.href} {...rest}>
      {children}
    </AnchorButtonComponent>
  );
}

export const createStyledComponents: $StyledSubComponentsFactory<{
    AnchorButtonComponent: ReactComponentStyled,
  },
  typeof defaultStyleProps,> = styleProps => {
  const AnchorButtonComponent = _createStyledComponents(
    defaultStyleProps,
  ).ButtonComponent.withComponent('a');

  return { AnchorButtonComponent };
};


export const createComponent: $ComponentFactory<StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: StyledProps) => (
    <AnchorButton {...{ ...props, ...defaultStyledComponents }} />
  );
};
