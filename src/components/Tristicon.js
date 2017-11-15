// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';
import { rem } from 'polished';
import tristicons from 'tristicons';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';

export type $StyledProps = {
  children: React.Node,
  icon: string,
};

export type $Props = {
  ...$StyledProps,
  TristiconComponent: React.ComponentType<*>,
};

export const defaultStyleProps: {|
  color: ?string,
|} = {
  color: 'inherit',
};

function getTristiconContent(iconName) {
  return tristicons[iconName];
}

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    TristiconComponent: ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
  // eslint-disable-next-line no-unused-vars
> = styleProps => {
  const TristiconComponent = styled.i`
    &::before {
      content: "${props =>
        props.icon ? getTristiconContent(props.icon) : ''}";
      display: inline-block;
      font: normal normal normal ${rem(14)} tristicons;
      font-size: inherit;
      text-rendering: auto;
      vertical-align: inherit;
    }
  `;

  return { TristiconComponent };
};

export function Tristicon(props: $Props) {
  const { children, icon, TristiconComponent, ...rest } = props;

  return (
    <TristiconComponent icon={icon} {...rest}>
      {children}
    </TristiconComponent>
  );
}

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <Tristicon {...{ ...props, ...defaultStyledComponents }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
