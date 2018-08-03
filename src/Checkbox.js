// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type { FieldProps as $FieldProps } from 'redux-form';
import { rem, darken } from 'polished';
import { palette, fontWeights } from './constants';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';
import { createFormControlElementProps, createLabelProps } from './Input';

export type $Props = {
  CheckboxBackgroundComponent: React.ElementType,
  CheckboxContainerComponent: React.ElementType,
  InputComponent: React.ElementType,
  LabelComponent: React.ElementType,
  WrapperComponent: React.ElementType,
  label: string | React.ElementConfig<'label'>,
} & React.ElementConfig<'input'> &
  $FieldProps;

export const defaultStyleProps: {|
  checkboxSize: number,
  checkboxColor: string,
|} = {
  checkboxSize: 20,
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
> = styleProps => {
  const WrapperComponent = styled.div`
    margin: 1rem 0;
  `;

  const CheckboxContainerComponent = styled.div`
    position: relative;
    margin: 0;
    height: ${rem(styleProps.checkboxSize)};
    width: ${rem(styleProps.checkboxSize)};
    display: inline-block;
  `;

  // some label stuff in checkbox to get :checked property
  const CheckboxBackgroundComponent = styled.div`
    cursor: pointer;
    font-weight: ${fontWeights.semibold};
    display: inline-block;
    font-size: 1rem;

    ${({ error, touched }) =>
      error &&
      touched &&
      css`
        color: ${palette.alert};
      `};

    min-height: ${rem(styleProps.checkboxSize)};
    line-height: ${rem(styleProps.checkboxSize)};
    position: relative;
    border: 1px solid transparent;
    display: block;

    &::before,
    &::after {
      width: ${rem(styleProps.checkboxSize)};
      height: ${rem(styleProps.checkboxSize)};
      cursor: pointer;
      content: '';
      display: inline-block;
      border-radius: 4px;
      vertical-align: middle;
    }

    &::before {
      border: 1px solid ${palette.border};
      background: ${palette.lightGray};
      margin-right: 1rem;

      ${({ error, touched }) =>
        error &&
        touched &&
        css`
          border-color: ${palette.alert};
        `};

      ${({ disabled }) =>
        disabled &&
        css`
          background-color: ${darken(0.05, palette.lightGray)};
          cursor: not-allowed;
        `};
    }

    &::after {
      position: absolute;
      left: 0;
      border: 1px solid transparent;
      line-height: ${rem(styleProps.checkboxSize)};
      margin-top: ${rem(styleProps.checkboxSize * 0.1)};
      text-align: center;
      transform: scale(0);
    }
  `;

  const InputComponent = styled.input`
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    z-index: 9001;
    opacity: 0;

    &[disabled] {
      cursor: not-allowed;
    }

    :checked + ${CheckboxBackgroundComponent} {
      &::before,
      &::after {
        top: 0;
        left: 0;
      }

      &::before {
        background: ${styleProps.checkboxColor};
        border-color: ${darken(0.05, styleProps.checkboxColor)};
        transition: background-color 0.3s;
      }

      &::after {
        content: '';
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCcgd2lkdGg9JzE2LjUnIGhlaWdodD0nMTUnIHZpZXdCb3g9JzAgMCAxNi41IDE1Jz48cGF0aCBmaWxsPScjZmZmJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi41MTUsMS4wNzEgQzE2LjM5OSwwLjgyNyAxNS45MTQsLTAuMDMwIDE1LjUxNSwwLjAwMSBDMTQuMjg5LDAuNzY1IDEyLjY5MywyLjM1NCAxMS42MzgsMy4zNjIgQzkuNTI4LDUuMzc4IDcuNTAzLDcuNDg2IDUuNTA4LDkuNjI0IEwxLjUxNiw1Ljg5NyBMMC4wMDUsNy40ODYgQzIuMjAwLDkuODM3IDQuNTY3LDEyLjM3MyA2LjUwNSwxNS4wMDAgQzguOTg2LDEwLjYzMiAxMy4wMzUsNC4zNzAgMTYuNTE1LDEuMDcxIEwxNi41MTUsMS4wNzEgWicvPjwvc3ZnPg==');
        background-position: 50% 40%;
        background-repeat: no-repeat;
        background-size: 70%;
        transition: all 0.25s;
        transform: scale(1);
      }
    }
  `;

  const LabelComponent = styled.label`
    margin-left: 1rem;
  `;

  return {
    CheckboxContainerComponent,
    CheckboxBackgroundComponent,
    LabelComponent,
    InputComponent,
    WrapperComponent,
  };
};

export function Checkbox(props: $Props) {
  const {
    CheckboxBackgroundComponent,
    CheckboxContainerComponent,
    InputComponent,
    LabelComponent,
    WrapperComponent,
    label,
    value,
    ...rest
  } = props;

  // Pull these out to pass to the CheckboxBackgroundComponent, but don't remove
  // them from the 'rest' object (so that they still get applied to the input
  // and label components).
  const { disabled, meta } = props;

  const { children, ...labelProps } = createLabelProps(label, rest);

  return (
    <WrapperComponent>
      <CheckboxContainerComponent>
        <InputComponent
          {...createFormControlElementProps(rest, {
            type: 'checkbox',
            checked: value,
          })}
        />
        <CheckboxBackgroundComponent {...{ ...meta, disabled }} />
      </CheckboxContainerComponent>
      <LabelComponent {...labelProps}>{children}</LabelComponent>
    </WrapperComponent>
  );
}

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
