// @flow

import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
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
  PanelSectionComponent: React.ComponentType<*>,
};

export const defaultStyleProps: {|
  borderBottomColor: string,
|} = {
  borderBottomColor: palette.border,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    PanelSectionComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const PanelSectionComponent = styled.div`
    margin: 0 -2rem;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid ${styleProps.borderBottomColor};

    :first-child {
      margin-top: -2rem;
    }

    :last-child {
      border-bottom: 0;
    }
  `;

  return { PanelSectionComponent };
};

export function Panel(props: $Props) {
  const { PanelSectionComponent, className, children, ...rest } = props;

  return (
    <PanelSectionComponent
      className={classNames('panel-section', className)}
      {...rest}
    >
      {children}
    </PanelSectionComponent>
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
