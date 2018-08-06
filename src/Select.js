// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type { FieldProps as $FieldProps } from 'redux-form';
import { rem, transparentize, darken } from 'polished';
import tristicons from 'tristicons';
import { palette, fontWeights, fontStack } from './constants';
import {
  createFormControlElementProps,
  createInputDecoratorProps,
  createLabelProps,
  createStyledComponents as createStyledInputComponents,
  defaultStyleProps as defaultInputStyleProps,
} from './Input';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';

export type $Props = {
  SelectComponent: React.ElementType,
  InputDecoratorComponent: React.ElementType,
  LabelComponent: React.ElementType,
  label: string | React.ElementConfig<'label'>,
} & React.ElementConfig<'select'> &
  $FieldProps;

export const defaultStyleProps: {|
  backgroundColor: string,
  borderColor: string,
  color: string,
  fontFamily: string,
  placeholderColor: string,
  activeBorderColor: string,
  fontSize: string,
  fontWeight: string | number,
|} = {
  backgroundColor: palette.lightGray,
  borderColor: palette.border,
  color: palette.black,
  fontFamily: fontStack,
  placeholderColor: String(transparentize(0.2, palette.darkGray)),
  activeBorderColor: palette.black,
  fontSize: rem(14),
  fontWeight: fontWeights.semibold,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    SelectComponent: $ReactComponentStyled<*>,
    InputDecoratorComponent: $ReactComponentStyled<*>,
    LabelComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const SelectComponent = styled.select`
    appearance: none;
    background-color: ${styleProps.backgroundColor};
    background-image: linear-gradient(
      ${palette.white},
      ${styleProps.backgroundColor}
    );
    border-color: ${styleProps.borderColor};
    border-radius: 0.25rem;
    border-style: solid;
    border-width: 0.05rem;
    color: ${styleProps.color};
    display: block;
    font-family: ${styleProps.fontFamily};
    height: 2.6rem;
    margin-bottom: 1rem;
    outline: 0;
    padding: 0.5rem 1rem;
    transition: border-color 300ms ease;
    width: 100%;

    ::-ms-expand {
      display: none;
    }

    :active,
    :focus {
      border-color: ${styleProps.activeBorderColor};
    }

    option {
      width: 100%;
    }

    ${({ meta: { error, touched } }) =>
      error &&
      touched &&
      css`
        border-color: ${palette.alert};
      `};

    ${({ disabled }) =>
      disabled &&
      css`
        background-color: ${darken(0.05, styleProps.backgroundColor)};
        background-image: linear-gradient(
          ${darken(0.05, palette.white)},
          ${darken(0.05, styleProps.backgroundColor)}
        );
        color: ${darken(0.05, styleProps.color)};
        cursor: not-allowed;
      `};
  `;

  const {
    LabelComponent,
    InputDecoratorComponent: BaseInputDecoratorComponent,
  } = createStyledInputComponents(defaultInputStyleProps);

  const InputDecoratorComponent = BaseInputDecoratorComponent.extend`
    &::after {
      content: ${`"${tristicons['chevron-down']}"`};
    }
  `;

  return { SelectComponent, InputDecoratorComponent, LabelComponent };
};

export function Select(props: $Props) {
  const {
    SelectComponent,
    InputDecoratorComponent,
    LabelComponent,
    label,
    children: selectChildren,
    ...rest
  } = props;

  const { children: labelChildren, ...labelProps } = createLabelProps(
    label,
    rest,
  );

  return (
    <LabelComponent {...labelProps}>
      {labelChildren}
      <InputDecoratorComponent {...createInputDecoratorProps(rest)}>
        <SelectComponent {...createFormControlElementProps(rest)}>
          {selectChildren}
        </SelectComponent>
      </InputDecoratorComponent>
    </LabelComponent>
  );
}

export const createComponent: $ComponentFactory<$Props> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $Props) => (
    <Select {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $Props>);
