// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import { rem } from 'polished';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';
import { palette, fontWeights } from './constants';

export type $StyledProps = {
  backgroundColor?: string,
  backgroundImage?: string,
  children?: React.Node,
  fontSize?: string | number,
  name?: string,
  style?: {},
  width?: string | number,
};

export type $Props = {
  ...$StyledProps,
  AvatarComponent: React.ElementType,
};

export const defaultStyleProps: {|
  backgroundColor: ?string,
  fontWeight: ?string | ?number,
|} = {
  backgroundColor: '#00b4ff',
  fontWeight: fontWeights.semibold,
};

const colorBackgrounds = [
  '#00d161',
  '#00b4ff',
  '#ff3add',
  '#ffca00',
  '#8151f3',
  '#ff7741',
];

function selectColor(namespace) {
  let hash = 0;

  for (let i = 0; i < namespace.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash |= 0; // Convert to 32bit integer
  }

  return colorBackgrounds[Math.abs(hash) % colorBackgrounds.length];
}

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    AvatarComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const AvatarComponent = styled.div`
    background-color: ${styleProps.backgroundColor};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    color: ${palette.white};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${fontWeights.semibold};
    height: ${({ width }) => width};
    line-height: ${({ width }) => width};
    text-align: center;
    text-transform: uppercase;
    width: ${({ width }) => width};
  `;

  return { AvatarComponent };
};

export function Avatar(props: $Props) {
  const {
    AvatarComponent,
    backgroundImage,
    children,
    name,
    style,
    ...rest
  } = props;

  return (
    <AvatarComponent
      style={{
        backgroundColor: name && selectColor(name),
        backgroundImage: backgroundImage && `url(${backgroundImage})`,
        ...style,
      }}
      {...rest}
    >
      {(!backgroundImage && name && name.charAt(0)) || children}
    </AvatarComponent>
  );
}

Avatar.defaultProps = {
  width: rem(46),
  fontSize: rem(18),
};

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <Avatar {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
