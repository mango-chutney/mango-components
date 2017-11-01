// @flow

import * as React from 'react';
import type { ReactComponentStyled } from 'styled-components';

export type $ComponentFactory<
  $StyledComponentsFactoryProps,
> = () => React.ComponentType<$StyledComponentsFactoryProps>;

export type $StyledComponents = { [string]: ReactComponentStyled };

export type $StyledSubComponentsFactory<
  $StyledComponents,
  $StyledComponentsFactoryProps,
> = (styleProps: $StyledComponentsFactoryProps) => $StyledComponents;

export type $MangoComponent<
  $StyledComponentsFactoryProps,
  $StyledComponentProps,
> = {
  defaultStyleProps: $StyledComponentsFactoryProps,
  createStyledComponents: $StyledSubComponentsFactory<
    $StyledComponents,
    $StyledComponentsFactoryProps,
  >,
  createComponent: $ComponentFactory<$StyledComponentProps>,
};
