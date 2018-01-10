// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';
import type { FieldProps } from 'redux-form';
import { rem, transparentize } from 'polished';
import { palette, fontWeights, fontStack } from './constants';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';

export type $StyledProps = {
  ...FieldProps,
  label: string,
  placeholder: string,
};

export type $Props = {
  ...$StyledProps,
  InputComponent: React.ComponentType<*>,
  SpanComponent: React.ComponentType<*>,
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
    InputComponent: ReactComponentStyled<*>,
    SpanComponent: ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const InputComponent = styled.input`
    appearance: none;
    background-color: ${styleProps.backgroundColor};
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

    ::placeholder {
      color: ${styleProps.placeholderColor};
    }

    :active,
    :focus {
      border-color: ${styleProps.activeBorderColor};
    }
  `;

  const SpanComponent = styled.span`
    font-size: ${styleProps.fontSize};
    font-weight: ${styleProps.fontWeight};
  `;

  return { InputComponent, SpanComponent };
};

export function Input({
  InputComponent,
  SpanComponent,
  input,
  meta,
  label,
  ...rest
}: $Props) {
  return (
    <label htmlFor={rest.id || (input && input.name)}>
      {label && <SpanComponent>{label}</SpanComponent>}
      <span>
        <InputComponent
          {...input}
          {...rest}
          id={rest.id || (input && input.name)}
        />
      </span>
    </label>
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
