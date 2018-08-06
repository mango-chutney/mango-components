// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type { FieldProps as $FieldProps } from 'redux-form';
import { rem, transparentize, darken } from 'polished';
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
  InputDecoratorComponent: React.ElementType,
  LabelComponent: React.ElementType,
  TextAreaComponent: React.ElementType,
  label: string | React.ElementConfig<'label'>,
} & React.ElementConfig<'textarea'> &
  $FieldProps;

export const defaultStyleProps: {|
  activeBorderColor: string,
  backgroundColor: string,
  borderColor: string,
  color: string,
  fontFamily: string,
  fontSize: string,
  fontWeight: string | number,
  placeholderColor: string,
|} = {
  activeBorderColor: palette.black,
  backgroundColor: palette.lightGray,
  borderColor: palette.border,
  color: palette.black,
  fontFamily: fontStack,
  fontSize: rem(14),
  fontWeight: fontWeights.semibold,
  placeholderColor: String(transparentize(0.2, palette.darkGray)),
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    InputDecoratorComponent: $ReactComponentStyled<*>,
    LabelComponent: $ReactComponentStyled<*>,
    TextAreaComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const {
    InputDecoratorComponent,
    LabelComponent,
  } = createStyledInputComponents(defaultInputStyleProps);

  const TextAreaComponent = styled.textarea`
    resize: vertical;
    appearance: none;
    background-color: ${styleProps.backgroundColor};
    border-color: ${styleProps.borderColor};
    border-radius: 0.25rem;
    border-style: solid;
    border-width: 0.05rem;
    color: ${styleProps.color};
    display: block;
    font-family: ${styleProps.fontFamily};
    margin-bottom: 1rem;
    outline: 0;
    padding: 1.25rem 1rem;
    transition: border-color 300ms ease;
    width: 100%;

    ::placeholder {
      color: ${styleProps.placeholderColor};
    }

    :active,
    :focus {
      border-color: ${styleProps.activeBorderColor};
    }

    ${({ meta: { error, touched } }) =>
      error &&
      touched &&
      css`
        border-color: ${palette.alert};

        ::placeholder {
          color: ${palette.alert};
        }
      `};

    ${({ disabled }) =>
      disabled &&
      css`
        background-color: ${darken(0.05, styleProps.backgroundColor)};
        color: ${darken(0.05, styleProps.color)};
        cursor: not-allowed;

        ::placeholder {
          color: ${darken(0.05, styleProps.placeholderColor)};
        }
      `};
  `;

  return {
    InputDecoratorComponent,
    LabelComponent,
    TextAreaComponent,
  };
};

export function TextArea(props: $Props) {
  const {
    InputDecoratorComponent,
    LabelComponent,
    TextAreaComponent,
    label,
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
        <TextAreaComponent {...createFormControlElementProps(rest)} />
      </InputDecoratorComponent>
    </LabelComponent>
  );
}

export const createComponent: $ComponentFactory<$Props> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $Props) => (
    <TextArea {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $Props>);
