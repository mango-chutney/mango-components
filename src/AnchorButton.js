// @flow

import * as React from 'react';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';
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
  AnchorButtonComponent: React.ElementType,
};

export function AnchorButton(props: $Props) {
  const { children, href, AnchorButtonComponent, ...rest } = props;

  return (
    <AnchorButtonComponent href={href} {...rest}>
      {children}
    </AnchorButtonComponent>
  );
}

export { defaultStyleProps };

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    AnchorButtonComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
  // eslint-disable-next-line no-unused-vars
> = styleProps => {
  const AnchorButtonComponent = createStyledButtonComponents(
    defaultStyleProps,
  ).ButtonComponent.withComponent('a');

  return { AnchorButtonComponent };
};

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <AnchorButton {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
