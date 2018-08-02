// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
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
import type { $Props as $CheckboxProps } from './Checkbox';
import { palette } from './constants';

export type $Props = {
  ...$CheckboxProps,
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
    CheckboxBackgroundComponent: $ReactComponentStyled<*>,
    CheckboxContainerComponent: $ReactComponentStyled<*>,
    InputComponent: $ReactComponentStyled<*>,
    LabelComponent: $ReactComponentStyled<*>,
    WrapperComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
  // eslint-disable-next-line no-unused-vars
> = styleProps => {
  const baseComponents = createStyledCheckboxComponents({
    ...defaultStyleProps,
    ...styleProps,
  });

  const StyledWrapperComponent = styled(baseComponents.WrapperComponent)`
    padding: 2rem;
    display: inline-block;
    font-size: ${rem(24)};
    background: ${transparentize(0.5, palette.border)};
    border-radius: ${rem(4)};
  `;

  const StyledInputComponent = styled(baseComponents.InputComponent)`
    :checked + label {
      transition: all 300ms ease;
      background: ${({ checkboxColor }) =>
        checkboxColor
          ? transparentize(0.8, checkboxColor)
          : transparentize(0.8, styleProps.checkboxColor)};
    }
  `;

  return {
    ...baseComponents,
    WrapperComponent: StyledWrapperComponent,
    InputComponent: StyledInputComponent,
  };
};

export const createComponent: $ComponentFactory<$Props> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $Props) => (
    <Checkbox {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $Props>);
