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
  label: string,
};

export type $Props = {
  ...$StyledProps,
  LabelComponent: React.ComponentType<*>,
  CheckboxComponent: React.ComponentType<*>,
  DivComponent: React.ComponentType<*>,
};

export const defaultStyleProps: {|
  checkboxSize: number,
|} = {
  checkboxSize: 20,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    LabelComponent: ReactComponentStyled<*>,
    CheckboxComponent: ReactComponentStyled<*>,
    DivComponent: ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const DivComponent = styled.div`
    position: relative;
    margin-bottom: 1rem;
    text-align: left;
    display: inline-block;
  `;

  // most label stuff in checkboxto get :checked property
  const LabelComponent = styled.label`
    cursor: pointer;
    border: 1px solid transparent;
    display: block;
    font-size: 1rem;
    font-weight: ${fontWeights.semibold};
    height: ${rem(styleProps.checkboxSize)};
    line-height: ${rem(styleProps.checkboxSize)};
    padding: 0rem 2rem;

    &::before,
    &::after {
      position: absolute;
      width: ${rem(styleProps.checkboxSize)};
      height: ${rem(styleProps.checkboxSize)};
      cursor: pointer;
      content: '';
      display: inline-block;
      border-radius: 4px;
      top: 0;
      left: 0;
    }

    &::before {
      border: 1px solid ${palette.border};
      background: ${palette.lightGray};
    }

    &::after {
      border: 1px solid transparent;
      line-height: ${rem(styleProps.checkboxSize)};
      margin-top: ${rem(styleProps.checkboxSize * 0.1)};
      text-align: center;
      transform: scale(0);
    }
  `;

  const CheckboxComponent = styled.input`
    opacity: 0;
    width: 0;
    position: absolute;

    &[disabled] {
      cursor: pointer;
    }

    :checked + label {
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

  return { LabelComponent, CheckboxComponent, DivComponent };
};

export function Checkbox({
  CheckboxComponent,
  LabelComponent,
  DivComponent,
  input,
  meta,
  label,
  ...rest
}: $Props) {
  return (
    <DivComponent>
      <CheckboxComponent
        {...input}
        id={rest.id || (input && input.name)}
        type="checkbox"
        {...rest}
      />
      <LabelComponent htmlFor={rest.id || (input && input.name)}>
        {label && <span>{label}</span>}
      </LabelComponent>
    </DivComponent>
  );
}

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <Checkbox {...{ ...props, ...defaultStyledComponents }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
