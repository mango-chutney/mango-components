// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from '../types';
import { palette } from '../constants';

export type $StyledProps = {
  className?: string,
  children: React.Node,
};

export type $Props = {
  ...$StyledProps,
  NestedRadialProgressBarsComponent: React.ComponentType<*>,
};

export const defaultStyleProps: {|
  background: string,
|} = {
  background: palette.white,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    NestedRadialProgressBarsComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
  // eslint-disable-next-line no-unused-vars
> = styleProps => {
  const NestedRadialProgressBarsComponent = styled.div`
    position: relative;

    > div:first-child {
      margin: 0 auto;
    }

    > div:nth-child(n + 2) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  `;

  return { NestedRadialProgressBarsComponent };
};

export function Panel(props: $Props) {
  const {
    NestedRadialProgressBarsComponent,
    className,
    children,
    ...rest
  } = props;

  return (
    <NestedRadialProgressBarsComponent {...rest}>
      {children}
    </NestedRadialProgressBarsComponent>
  );
}

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <Panel {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
