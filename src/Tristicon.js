// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import { rem } from 'polished';
import tristicons from 'tristicons';
import { woff } from 'tristicons/dist/json/base64-woff.json';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';

export type $StyledProps = {
  children?: React.Node,
  icon: string,
};

export type $Props = {
  ...$StyledProps,
  TristiconComponent: React.ElementType,
};

export const defaultStyleProps: {|
  color: ?string,
|} = {
  color: 'inherit',
};

function getTristiconContent(iconName) {
  return tristicons[iconName];
}

export const createFontFace = () => css`
  @font-face {
    font-family: tristicons;
    font-style: normal;
    font-weight: normal;
    src: url(data:application/x-font-woff;charset=utf-8;base64,${woff});
  }
`;

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    TristiconComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
  // eslint-disable-next-line no-unused-vars
> = styleProps => {
  const TristiconComponent = styled.i`
    &::before {
      content: "${({ icon }) => (icon ? getTristiconContent(icon) : '')}";
      display: inline-block;
      font: normal normal normal ${rem(14)} tristicons;
      font-size: ${({ fontSize }) => fontSize || 'inherit'};
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
    <Tristicon {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
