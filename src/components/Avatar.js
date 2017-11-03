// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';
import { rem } from 'polished';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';
import { palette, fontWeights } from './constants';

export type $StyledProps = {
  children: React.Node,
  name?: string,
  backgroundColor?: string,
  backgroundImage?: string,
  size?: string | number,
  fontSize?: string | number,
};

export type $Props = {
  ...$StyledProps,
  AvatarComponent: React.ComponentType<*>,
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
    AvatarComponent: ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const AvatarComponent = styled.div`
    background-color: ${styleProps.backgroundColor};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    height: ${props => props.size};
    width: ${props => props.size};
    line-height: ${props => props.size};
    text-align: center;
    color: ${palette.white};
    font-weight: ${fontWeights.semibold};
    text-transform: uppercase;
    font-size: ${props => props.fontSize};
  `;

  return { AvatarComponent };
};

export function Avatar(props: $Props) {
  const {
    children,
    name,
    backgroundColor,
    backgroundImage,
    AvatarComponent,
    ...rest
  } = props;

  return (
    <AvatarComponent
      backgroundColor={backgroundColor}
      style={{
        backgroundColor: name && selectColor(name),
        backgroundImage: backgroundImage && `url(${backgroundImage})`,
      }}
      {...rest}
    >
      {(!backgroundImage && name && name.charAt(0)) || children}
    </AvatarComponent>
  );
}

Avatar.defaultProps = {
  size: rem(46),
  fontSize: rem(18),
};

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <Avatar {...{ ...props, ...defaultStyledComponents }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
