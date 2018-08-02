// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type { FieldProps as $FieldProps } from 'redux-form';
import { rem, transparentize, darken } from 'polished';
import { palette, fontWeights, fontStack } from './constants';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';

export type $StyledProps = {
  label: string | React.ElementConfig<'label'>,
} & React.ElementConfig<'input'> &
  $FieldProps;

export type $Props = {
  InputComponent: React.ComponentType<*>,
  InputDecoratorComponent: React.ComponentType<*>,
  LabelComponent: React.ComponentType<*>,
} & $StyledProps;

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
    InputComponent: $ReactComponentStyled<*>,
    InputDecoratorComponent: $ReactComponentStyled<*>,
    LabelComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const InputComponent = styled.input`
    appearance: none;
    background-color: ${styleProps.backgroundColor};
    border-color: ${styleProps.borderColor};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    color: ${styleProps.color};
    display: block;
    font-family: ${styleProps.fontFamily};
    height: 2.6rem;
    margin-bottom: 1rem;
    outline: 0;
    padding: 0.5rem 1rem;
    transition: border-color 300ms ease;
    width: 100%;

    ::placeholder {
      color: ${styleProps.placeholderColor};
    }

    :active,
    :focus {
      border-color: ${styleProps.activeBorderColor};
    }

    ${({ invalid }) =>
      invalid &&
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

  const InputDecoratorComponent = styled.span`
    display: block;
  `;

  const LabelComponent = styled.label`
    font-size: ${styleProps.fontSize};
    font-weight: ${styleProps.fontWeight};
    display: block;

    ${({ invalid }) =>
      invalid &&
      css`
        color: ${palette.alert};
      `};
  `;

  return {
    InputComponent,
    InputDecoratorComponent,
    LabelComponent,
  };
};

export const remapLabelProps = (
  label: string | React.ElementConfig<'label'> | void,
  extraProps: React.ElementConfig<'label'>,
): React.ElementConfig<'label'> => {
  if (!label) {
    return {
      ...extraProps,
    };
  }

  if (typeof label === 'string') {
    return {
      ...extraProps,
      children: label,
    };
  }

  return {
    ...label,
    ...extraProps,
  };
};

export function Input({
  InputComponent,
  InputDecoratorComponent,
  LabelComponent,
  children,
  disabled,
  id,
  input,
  label,
  meta,
  ...rest
}: $Props) {
  const { invalid } = meta;

  const { children: labelChild, ...labelProps } = remapLabelProps(label, {
    htmlFor: (label && label.htmlFor) || id || (input && input.name),
    invalid,
    disabled,
  });

  return (
    <LabelComponent {...labelProps}>
      {labelChild}
      <InputDecoratorComponent>
        <InputComponent
          {...{
            ...input,
            ...rest,
            id: id || (input && input.name),
            invalid,
            disabled,
          }}
        />
        {children}
      </InputDecoratorComponent>
    </LabelComponent>
  );
}

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <Input {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
