// @flow

import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';
import { palette } from './constants';

const dashArray = 251;
const defaultStrokeWidthScale = 7;
const defaultSize = 50;

const strokeAnimation = strokeDashoffset => keyframes`
  0% {
    stroke-dashoffset: ${dashArray};
  }

  100% {
    stroke-dashoffset: ${strokeDashoffset};
  }
`;

export type $StyledProps = {
  backgroundColor?: string,
  percentage?: number,
  strokeLinecap?: string | number,
  strokeWidthScale?: number,
  width?: number,
};

export type $Props = {
  ...$StyledProps,
  WrapperComponent: React.ElementType,
  ContainerComponent: React.ElementType,
  BackgroundCircleComponent: React.ElementType,
  ProgressCircleComponent: React.ElementType,
};

export const defaultStyleProps: {|
  background: string,
|} = {
  background: palette.white,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    WrapperComponent: $ReactComponentStyled<*>,
    ContainerComponent: $ReactComponentStyled<*>,
    BackgroundCircleComponent: $ReactComponentStyled<*>,
    ProgressCircleComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
  // eslint-disable-next-line no-unused-vars
> = styleProps => {
  const WrapperComponent = styled.div`
    height: ${({ width }) => (width ? rem(width) : rem(defaultSize))};
    position: relative;
    width: ${({ width }) => (width ? rem(width) : rem(defaultSize))};
  `;

  const ContainerComponent = styled.div`
    height: 100%;
    transform-origin: center;
    transform: rotateZ(-90deg);
    width: 100%;

    svg {
      overflow: visible;
    }

    circle {
      transition: stroke-dashoffset 0.5s linear;
    }
  `;

  const BackgroundCircleComponent = styled.circle`
    stroke: ${palette.border};
  `;

  const ProgressCircleComponent = styled.circle`
    stroke: ${({ backgroundColor }) => backgroundColor || palette.primary};
    animation: ${({ strokeDashoffset }) =>
      `${strokeAnimation(strokeDashoffset)} 0.5s normal forwards`};
  `;

  return {
    WrapperComponent,
    ContainerComponent,
    BackgroundCircleComponent,
    ProgressCircleComponent,
  };
};

export function RadialProgressBar(props: $Props) {
  const {
    backgroundColor,
    percentage,
    strokeLinecap,
    strokeWidthScale,
    width,
    WrapperComponent,
    ContainerComponent,
    BackgroundCircleComponent,
    ProgressCircleComponent,
    ...rest
  } = props;

  const percentageToDashoffset = percentage
    ? (percentage >= 100 && '0') ||
      (percentage < 0 && dashArray - dashArray * 0.01) ||
      dashArray - (dashArray * percentage) / 100
    : dashArray - dashArray * 0.01;

  const strokeWidth =
    (defaultSize / (width ? width * 0.9 : defaultSize)) *
    (strokeWidthScale || defaultStrokeWidthScale);

  return (
    <WrapperComponent width={width} {...rest}>
      <ContainerComponent>
        <svg height="100%" width="100%" viewBox="0 0 100 100">
          <BackgroundCircleComponent
            cx={50}
            cy={50}
            fill="none"
            r={40}
            strokeWidth={strokeWidth}
          />
          <ProgressCircleComponent
            backgroundColor={backgroundColor}
            cx={50}
            cy={50}
            fill="none"
            r={40}
            strokeDasharray={dashArray}
            strokeDashoffset={percentageToDashoffset}
            strokeLinecap={strokeLinecap}
            strokeWidth={strokeWidth}
          />
        </svg>
      </ContainerComponent>
    </WrapperComponent>
  );
}

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <RadialProgressBar {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
