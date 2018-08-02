// @flow

import * as React from 'react';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';

export type $ComponentFactory<
  $StyledComponentsFactoryProps,
> = () => React.ComponentType<$StyledComponentsFactoryProps>;

export type $StyledComponents = { [string]: $ReactComponentStyled<*> };

export type $StyledSubComponentsFactory<
  $StyledComponents, // eslint-disable-line no-shadow
  $StyledComponentsFactoryProps,
> = (styleProps: $StyledComponentsFactoryProps) => $StyledComponents;

export interface $MangoComponent<
  $StyledComponentsFactoryProps,
  $StyledComponentProps,
> {
  defaultStyleProps: $StyledComponentsFactoryProps;
  createStyledComponents: $StyledSubComponentsFactory<
    $StyledComponents,
    $StyledComponentsFactoryProps,
  >;
  createComponent: $ComponentFactory<$StyledComponentProps>;
}

export type $FormControlElementConfig = $Rest<
  | React.ElementConfig<'input'>
  | React.ElementConfig<'textarea'>
  | React.ElementConfig<'select'>,
  {| children: React.Node |},
>;
