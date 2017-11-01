// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from '../types';
import { palette, globalRadius, globalBorder } from '../constants';

export type $StyledProps = {
  children: React.Node,
};

export type $Props = {
  ...$StyledProps,
  PanelComponent: React.ComponentType<*>,
};

export const defaultStyleProps: {|
  background: string,
  border: string,
  radius: string,
|} = {
  background: palette.white,
  border: globalBorder,
  radius: globalRadius,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    PanelComponent: ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const PanelComponent = styled.div`
    background: ${styleProps.background};
    margin: 0 0 1rem;
    padding: 2rem;
    border: ${styleProps.border};
    border-radius: ${styleProps.radius};
    overflow: hidden;

    > .panel-section {
      :last-child {
        margin-bottom: -2rem;
      }
    }
  `;

  return { PanelComponent };
};

export function Panel(props: $Props) {
  const { PanelComponent, children, ...rest } = props;

  return <PanelComponent {...rest}>{children}</PanelComponent>;
}

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <Panel {...{ ...props, ...defaultStyledComponents }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
