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
  TextAreaComponent: React.ComponentType<*>,
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
    TextAreaComponent: ReactComponentStyled<*>,
    LabelComponent: ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const TextAreaComponent = styled.textarea`
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
    padding: 1.25rem 1rem
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

  const LabelComponent = styled.span`
    font-size: ${styleProps.fontSize};
    font-weight: ${styleProps.fontWeight};
    display: block;
  `;

  return { TextAreaComponent, LabelComponent };
};

export function Input({
  TextAreaComponent,
  LabelComponent,
  input,
  meta,
  label,
  ...rest
}: $Props) {
  return (
    <label htmlFor={rest.id || (input && input.name)}>
      {label && <LabelComponent>{label}</LabelComponent>}
      <span>
        <TextAreaComponent
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
