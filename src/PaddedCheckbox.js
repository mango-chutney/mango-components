// @flow

import * as React from 'react';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import { rem, transparentize } from 'polished';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';
import {
  defaultStyleProps as defaultCheckboxStyleProps,
  createStyledComponents as createStyledCheckboxComponents,
  Checkbox,
} from './Checkbox';
import type { $Props as $CheckboxProps } from './Checkbox';
import { palette } from './constants';

export type $Props = {
  ...$CheckboxProps,
};

const baseComponents = createStyledCheckboxComponents(
  defaultCheckboxStyleProps,
);

export const defaultStyleProps: {|
  ...typeof defaultCheckboxStyleProps,
  CheckboxContainerComponent: $ReactComponentStyled<*>,
  InputComponent: $ReactComponentStyled<*>,
  InputDecoratorComponent: $ReactComponentStyled<*>,
  WrapperComponent: $ReactComponentStyled<*>,
|} = {
  ...defaultCheckboxStyleProps,
  CheckboxContainerComponent: baseComponents.CheckboxContainerComponent,
  InputComponent: baseComponents.InputComponent,
  InputDecoratorComponent: baseComponents.InputDecoratorComponent,
  WrapperComponent: baseComponents.WrapperComponent,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    CheckboxContainerComponent: $ReactComponentStyled<*>,
    InputComponent: $ReactComponentStyled<*>,
    InputDecoratorComponent: $ReactComponentStyled<*>,
    LabelComponent: $ReactComponentStyled<*>,
    WrapperComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
  // eslint-disable-next-line no-unused-vars
> = styleProps => {
  const {
    CheckboxContainerComponent,
    InputComponent,
    InputDecoratorComponent,
    LabelComponent,
    WrapperComponent,
  } = styleProps;

  const StyledWrapperComponent = WrapperComponent.extend`
    padding: 2rem;
    display: inline-block;
    font-size: ${rem(24)};
    background: ${transparentize(0.5, palette.border)};
    border-radius: ${rem(4)};
  `;

  const StyledInputComponent = InputComponent.extend`
    :checked + label {
      transition: all 300ms ease;
      background: ${({ checkboxColor }) =>
        checkboxColor
          ? transparentize(0.8, checkboxColor)
          : transparentize(0.8, styleProps.checkboxColor)};
    }
  `;

  return {
    CheckboxContainerComponent,
    InputComponent: StyledInputComponent,
    InputDecoratorComponent,
    LabelComponent,
    WrapperComponent: StyledWrapperComponent,
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
