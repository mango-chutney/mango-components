// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';
import { rem, darken } from 'polished';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';
import { fontWeights } from './constants';
import {
  createStyledComponents as createStyledButtonComponents,
  defaultStyleProps,
} from './Button';
import type { $StyledProps as $StyledButtonProps } from './Button';

export type $StyledProps = {
  ...$StyledButtonProps,
  href: string,
};

export type $Props = {
  ...$StyledProps,
  AnchorButtonComponent: React.ComponentType<*>,
};

export function AnchorButton(props: $Props) {
  const { children, href, AnchorButtonComponent, ...rest } = props;

  return (
    <AnchorButtonComponent href={props.href} {...rest}>
      {children}
    </AnchorButtonComponent>
  );
}

export { defaultStyleProps };

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    AnchorButtonComponent: ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const AnchorButtonComponent = createStyledButtonComponents(
    defaultStyleProps,
  ).ButtonComponent.withComponent('a');

  return { AnchorButtonComponent };
};

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <AnchorButton {...{ ...props, ...defaultStyledComponents }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
