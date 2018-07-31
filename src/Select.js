// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type { FieldProps as $FieldProps } from 'redux-form';
import { rem, transparentize, darken } from 'polished';
import tristicons from 'tristicons';
import { palette, fontWeights, fontStack } from './constants';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';

export type $StyledProps = {
  ...$FieldProps,
  id?: string,
  children: React.Node,
  label: string,
  placeholder: string,
  invalid?: boolean,
  disabled?: boolean,
};

export type $Props = {
  ...$StyledProps,
  SelectComponent: React.ComponentType<*>,
  SelectContainerComponent: React.ComponentType<*>,
  LabelComponent: React.ComponentType<*>,
};

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
    SelectContainerComponent: $ReactComponentStyled<*>,
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

    ${({ invalid }) =>
      invalid &&
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

  const LabelComponent = styled.span`
    font-size: ${styleProps.fontSize};
    font-weight: ${styleProps.fontWeight};
    display: block;

    ${({ invalid }) =>
      invalid &&
      css`
        color: ${palette.alert};
      `};
  `;

  const SelectContainerComponent = styled.div`
    position: relative;

    &::after {
      content: ${`"${tristicons['chevron-down']}"`};
      color: ${styleProps.placeholderColor};
      font: normal normal normal ${rem(14)} tristicons;
      line-height: 1rem;
      position: absolute;
      right: 1rem;
      top: 0.75rem;
    }
  `;

  return { SelectComponent, SelectContainerComponent, LabelComponent };
};

export function Select({
  SelectComponent,
  SelectContainerComponent,
  LabelComponent,
  children,
  input,
  label,
  meta,
  invalid,
  disabled,
  ...rest
}: $Props) {
  return (
    <label htmlFor={rest.id || (input && input.name)}>
      {label && <LabelComponent invalid={invalid}>{label}</LabelComponent>}
      <SelectContainerComponent>
        <SelectComponent
          {...input}
          {...rest}
          invalid={invalid}
          disabled={disabled}
          id={rest.id || (input && input.name)}
        >
          {children}
        </SelectComponent>
      </SelectContainerComponent>
    </label>
  );
}

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <Select {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
