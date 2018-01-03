// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';
import { rem, transparentize } from 'polished';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';
import {
  createStyledComponents as createStyledCheckboxComponents,
  Checkbox,
} from './Checkbox';
import type { $StyledProps as $StyledCheckboxProps } from './Checkbox';
import { palette } from './constants';

export type $StyledProps = {
  ...$StyledCheckboxProps,
};

export type $Props = {
  ...$StyledProps,
};

export const defaultStyleProps: {|
  checkboxSize: number,
  checkboxColor: string,
|} = {
  checkboxSize: 40,
  checkboxColor: palette.primary,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    LabelComponent: ReactComponentStyled<*>,
    InputComponent: ReactComponentStyled<*>,
    WrapperComponent: ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
  // eslint-disable-next-line no-unused-vars
> = styleProps => {
  const baseComponents = createStyledCheckboxComponents({
    ...defaultStyleProps,
    ...styleProps,
  });

  const StyledLabelComponent = styled(baseComponents.LabelComponent)`
    padding: 2rem;
    display: inline-block;
    font-size: ${rem(24)};
    background: ${transparentize(0.5, palette.border)};
    border-radius: ${rem(4)};
  `;

  const StyledInputComponent = styled(baseComponents.InputComponent)`
    :checked + label {
      transition: all 300ms ease;
      background: ${props =>
        props.checkboxColor
          ? transparentize(0.8, props.checkboxColor)
          : transparentize(0.8, styleProps.checkboxColor)};
    }
  `;

  return {
    ...baseComponents,
    LabelComponent: StyledLabelComponent,
    InputComponent: StyledInputComponent,
  };
};

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <Checkbox {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
