// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';
import type { FieldProps } from 'redux-form';
import { rem, darken } from 'polished';
import { palette, fontWeights } from './constants';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';

export type $StyledProps = {
  ...FieldProps,
  children: React.Node,
  label: string,
};

export type $Props = {
  ...$StyledProps,
  LabelComponent: React.ComponentType<*>,
  InputComponent: React.ComponentType<*>,
  WrapperComponent: React.ComponentType<*>,
};

export const defaultStyleProps: {|
  checkboxSize: number,
|} = {
  checkboxSize: 20,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    LabelComponent: ReactComponentStyled<*>,
    InputComponent: ReactComponentStyled<*>,
    WrapperComponent: ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const WrapperComponent = styled.div`
    position: relative;
    margin-bottom: 1rem;
    text-align: left;
    display: inline-block;
  `;

  // some label stuff in checkbox to get :checked property
  const LabelComponent = styled.label`
    cursor: pointer;
    font-weight: ${fontWeights.semibold};
    display: inline-block;
    font-size: 1rem;

    > div {
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
    }
  `;

  const InputComponent = styled.input`
    opacity: 0;
    width: 0;
    position: absolute;

    &[disabled] {
      cursor: pointer;
    }

    :checked + label > div {
      &::before {
        background: ${palette.primary};
        border-color: ${darken(0.05, palette.primary)};
        transition: background-color 0.3s;
      }

      &::after {
        content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCcgd2lkdGg9JzE2LjUnIGhlaWdodD0nMTUnIHZpZXdCb3g9JzAgMCAxNi41IDE1Jz48cGF0aCBmaWxsPScjZmZmJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi41MTUsMS4wNzEgQzE2LjM5OSwwLjgyNyAxNS45MTQsLTAuMDMwIDE1LjUxNSwwLjAwMSBDMTQuMjg5LDAuNzY1IDEyLjY5MywyLjM1NCAxMS42MzgsMy4zNjIgQzkuNTI4LDUuMzc4IDcuNTAzLDcuNDg2IDUuNTA4LDkuNjI0IEwxLjUxNiw1Ljg5NyBMMC4wMDUsNy40ODYgQzIuMjAwLDkuODM3IDQuNTY3LDEyLjM3MyA2LjUwNSwxNS4wMDAgQzguOTg2LDEwLjYzMiAxMy4wMzUsNC4zNzAgMTYuNTE1LDEuMDcxIEwxNi41MTUsMS4wNzEgWicvPjwvc3ZnPg==');
        transition: all 0.25s;
        transform: scale(0.75);
      }
    }
  `;

  return { LabelComponent, InputComponent, WrapperComponent };
};

export function Checkbox({
  InputComponent,
  LabelComponent,
  WrapperComponent,
  children,
  input,
  meta,
  label,
  ...rest
}: $Props) {
  return (
    <WrapperComponent>
      <InputComponent
        {...input}
        id={rest.id || (input && input.name)}
        type="checkbox"
        {...rest}
      />
      <LabelComponent htmlFor={rest.id || (input && input.name)}>
        <div>{children || label || ''}</div>
      </LabelComponent>
    </WrapperComponent>
  );
}

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
