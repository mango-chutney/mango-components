// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import { darken, rem } from 'polished';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from '../types';
import { fontWeights, globalBorder, globalRadius, palette } from '../constants';

export type $StyledProps = {
  children: React.Node,
};

export type $Props = {
  ...$StyledProps,
  PanelHeadingComponent: React.ComponentType<*>,
};

export const defaultStyleProps: {|
  background: string,
  borderBottom: string,
  color: string,
  fontSize: string,
  fontWeight: number | string,
  radius: string,
|} = {
  background: `linear-gradient(
    ${palette.lightGray} 0%,
    ${String(darken(0.04, palette.lightGray))} 100%
  )`,
  borderBottom: globalBorder,
  color: palette.black,
  fontSize: rem(16),
  fontWeight: fontWeights.semibold,
  radius: globalRadius,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    PanelHeadingComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const PanelHeadingComponent = styled.div`
    background: ${styleProps.background};
    border-radius: ${styleProps.radius} ${styleProps.radius} 0 0;
    border-bottom: ${styleProps.borderBottom};
    margin: -2rem -2rem 2rem;
    padding: 1rem 2rem;
    color: ${styleProps.color};
    font-weight: ${styleProps.fontWeight};
    font-size: ${styleProps.fontSize};
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    + .panel-section {
      margin-top: -2rem;
    }
  `;

  return { PanelHeadingComponent };
};

export function PanelHeading(props: $Props) {
  const { PanelHeadingComponent, children, ...rest } = props;

  return <PanelHeadingComponent {...rest}>{children}</PanelHeadingComponent>;
}

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <PanelHeading {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
