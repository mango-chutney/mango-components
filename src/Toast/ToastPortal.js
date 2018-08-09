// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import { Portal } from 'react-portal';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from '../types';

export const defaultStyleProps: {} = {};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    ToastPortalComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
  // eslint-disable-next-line no-unused-vars
> = styleProps => {
  const ToastPortalComponent = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    nleft: 0;
    margin: 0;
    pointer-events: none;
    position: fixed;
    text-align: center;
    top: 0;
    width: 100%;
  `;

  return { ToastPortalComponent };
};

export type $Props = {
  children?: React.Node,
  ToastPortalComponent: React.ComponentType<any>,
};

export const ToastPortal = ({
  ToastPortalComponent,
  children,
  ...rest
}: $Props) => (
  <Portal>
    <ToastPortalComponent {...rest}>{children}</ToastPortalComponent>
  </Portal>
);

export const createComponent: $ComponentFactory<$Props> = () => {
  const { ToastPortalComponent } = createStyledComponents(defaultStyleProps);

  return (props: $Props) => (
    <ToastPortal {...{ ToastPortalComponent, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $Props>);
