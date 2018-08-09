// @flow

import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import { rem } from 'polished';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from '../types';
import { palette } from '../constants';
import { transitionStates } from './ToastProvider';
import type { $Toast, $TransitionState } from './ToastProvider';

export type $Props = {
  ToastComponent: $Toast,
  children?: React.Node,
  dismiss: () => void,
  transitionState: $TransitionState,
};

export const animations = {
  enter: keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  85% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`,
  exit: keyframes`
  0% {
    opacity: 1;
  }

  50% {
    color: transparent;
    opacity: 0;
  }

  100% {
    padding: 0 1rem;
    height: 0;
    margin: 0;
    opacity: 0;
  }
`,
};

export const defaultStyleProps: {|
  color: ?string,
  animations: { enter: string, exit: string },
|} = {
  color: 'inherit',
  animations,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    ToastComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
  // eslint-disable-next-line no-unused-vars
> = styleProps => {
  const ToastComponent = styled.button`
    animation: ${animations.enter} 0.15s ease-out normal forwards;
    background: #fff;
    border-radius: ${rem(4)};
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: inline-block;
    margin: 0.25rem;
    overflow: hidden;
    padding: 0.5rem 1rem;
    pointer-events: all;
    user-select: none;
    transition: all 15ms ease;

    ${({ transitionState }) =>
      transitionState === transitionStates.EXITING &&
      css`
        animation: ${animations.exit} 0.3s ease-out normal forwards;
      `};

    ${({ alert }) =>
      alert &&
      css`
        background: ${palette.alert};
        color: white;
      `};

    ${({ success }) =>
      success &&
      css`
        background: ${palette.success};
        color: white;
      `};

    ${({ inactive }) =>
      inactive &&
      css`
        background: ${palette.inactive};
        color: white;
      `};
  `;

  return { ToastComponent };
};

export const Toast = (props: $Props) => {
  const { children, ToastComponent, transitionState, ...rest } = props;

  return (
    <ToastComponent {...{ ...rest, transitionState }}>
      {children}
    </ToastComponent>
  );
};

export const createComponent: $ComponentFactory<$Props> = () => {
  const { ToastComponent } = createStyledComponents(defaultStyleProps);

  return (props: $Props) => <Toast {...{ ToastComponent, ...props }} />;
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $Props>);
