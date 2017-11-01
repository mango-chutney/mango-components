// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { Portal } from 'react-portal';
import { Arrow, Popper } from 'react-popper';
import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';
import PopperJS from 'popper.js';
import canUseDOM from './lib/canUseDOM';
import ParentNodePopperManager from './ParentNodePopperManager';
import type { $ComponentFactory, $StyledSubComponentsFactory } from './types';
import createDebug from './lib/createDebug';

const debug = createDebug('Tootlip');

export const placements = PopperJS.placements
  .map(placement => ({
    [placement]: placement,
  }))
  .reduce((prev, next) => ({ ...prev, ...next }), {});

export type StyledProps = {
  children: React.Node,
  clickable?: boolean,
  placement?: $Keys<typeof placements>,
  visible: boolean,
};

export type Props = {
  ArrowComponent: React.ComponentType<*>,
  PopperComponent: React.ComponentType<*>,
} & StyledProps;

export function UnmanagedTootlip(props: Props) {
  const {
    ArrowComponent,
    PopperComponent,
    children,
    clickable,
    visible,
    placement,
    ...rest
  } = props;

  return (
    <Portal>
      <PopperComponent {...{ clickable, visible }}>
        {children}
        <ArrowComponent {...{ visible }} />
      </PopperComponent>
    </Portal>
  );
}

UnmanagedTootlip.defaultProps = {
  clickable: false,
  placement: placements.auto,
};

export function ManagedTootlip(props: Props) {
  return (
    <ParentNodePopperManager tag="span">
      <UnmanagedTootlip {...props} />
    </ParentNodePopperManager>
  );
}

export const defaultStyleProps: {|
  backgroundColor: string,
  color: string,
  fontSize: string,
  maxWidth: string,
  minWidth: string,
  padding: string,
  radius: string,
  transition: string,
|} = {
  backgroundColor: '#222',
  color: '#fff',
  fontSize: '13px',
  maxWidth: '300px',
  minWidth: '150px',
  padding: '8px 21px',
  radius: '5px',
  transition: 'opacity 300ms ease-in',
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    PopperComponent: ReactComponentStyled,
    ArrowComponent: ReactComponentStyled,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const PopperComponent = styled(({ visible, clickable, ...rest }) => (
    <Popper {...rest} />
  ))`
    color: ${styleProps.color};
    background-color: ${styleProps.backgroundColor};
    border-radius: ${styleProps.radius};
    cursor: help;
    display: inline-block;
    font-size: ${styleProps.fontSize};
    min-width: ${styleProps.minWidth};
    padding: ${styleProps.padding};
    pointer-events: ${props => (props.clickable ? 'auto' : 'none')};
    position: absolute;
    text-align: center;
    transition: ${styleProps.transition};
    opacity: ${props => (props.visible ? 0.9 : 0)};
    max-width: ${styleProps.maxWidth};

    &[data-placement^='top'] {
      margin-bottom: ${styleProps.radius};
    }

    &[data-placement^='bottom'] {
      margin-top: ${styleProps.radius};
    }

    &[data-placement^='right'] {
      margin-left: ${styleProps.radius};
    }

    &[data-placement^='left'] {
      margin-right: ${styleProps.radius};
    }
  `;

  // prettier insists on adding a space between
  // `${PopperComponent}[data-placement^='left']` like `${PopperComponent}
  // [data-placement^='left']`, which causes flow to complain
  // prettier-ignore
  const ArrowComponent = styled(({ visible, ...rest }) => <Arrow {...rest} />)`
    ${PopperComponent} & {
      width: 0;
      height: 0;
      border-style: solid;
      position: absolute;
      margin: ${styleProps.radius};
    }

    ${PopperComponent}[data-placement^='top'] & {
      border-width: ${styleProps.radius} ${styleProps.radius} 0
        ${styleProps.radius};
      border-color: ${styleProps.backgroundColor} transparent transparent
        transparent;
      bottom: -${styleProps.radius};
      left: calc(50% - ${styleProps.radius});
      margin-top: 0;
      margin-bottom: 0;
    }

    ${PopperComponent}[data-placement^='bottom'] & {
      border-width: 0 ${styleProps.radius} ${styleProps.radius}
        ${styleProps.radius};
      border-color: transparent transparent ${styleProps.backgroundColor}
        transparent;
      top: -${styleProps.radius};
      left: calc(50% - ${styleProps.radius});
      margin-top: 0;
      margin-bottom: 0;
    }

    ${PopperComponent}[data-placement^='right'] & {
      border-width: ${styleProps.radius} ${styleProps.radius}
        ${styleProps.radius} 0;
      border-color: transparent ${styleProps.backgroundColor} transparent
        transparent;
      left: -${styleProps.radius};
      top: calc(50% - ${styleProps.radius});
      margin-left: 0;
      margin-right: 0;
    }

    ${PopperComponent}[data-placement^='left'] & {
      border-width: ${styleProps.radius} 0 ${styleProps.radius}
        ${styleProps.radius};
      border-color: transparent transparent transparent
        ${styleProps.backgroundColor};
      right: -${styleProps.radius};
      top: calc(50% - ${styleProps.radius});
      margin-left: 0;
      margin-right: 0;
    }
  `;

  return {
    PopperComponent,
    ArrowComponent,
  };
};

export const createComponent: $ComponentFactory<StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: StyledProps) => (
    <ManagedTootlip {...{ ...props, ...defaultStyledComponents }} />
  );
};
