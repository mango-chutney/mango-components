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
  checkboxColor: string,
};

export type $Props = {
  ...$StyledProps,
  LabelComponent: React.ComponentType<*>,
  InputComponent: React.ComponentType<*>,
  WrapperComponent: React.ComponentType<*>,
};

export const defaultStyleProps: {|
  checkboxSize: number,
  checkboxColor: string,
|} = {
  checkboxSize: 20,
  checkboxColor: palette.primary,
};

class Wrapper extends React.Component<any, { focused: boolean }> {
  state = { focused: false };

  componentDidMount = () => {
    const inputChildRef = this.findInputChildRef();

    if (inputChildRef !== null) {
      inputChildRef.addEventListener('focus', this.handleInputChildFocus);
      inputChildRef.addEventListener('blur', this.handleInputChildBlur);
    }
  };

  componentWillUnmount = () => {
    const inputChildRef = this.findInputChildRef();

    if (inputChildRef !== null) {
      inputChildRef.removeEventListener('focus', this.handleInputChildFocus);
      inputChildRef.removeEventListener('blur', this.handleInputChildBlur);
    }
  };

  ref = null;

  findInputChildRef = () => {
    if (this.ref !== null) {
      return Array.from(this.ref.children).find(
        element => element.nodeName === 'INPUT',
      );
    }

    return null;
  };

  handleClickOrKeyPress = () => {
    const inputChildRef = this.findInputChildRef();

    if (inputChildRef !== null) {
      inputChildRef.click();
    }
  };

  handleInputChildBlur = () => {
    this.setState({ focused: false });
  };

  handleInputChildFocus = () => {
    this.setState({ focused: true });
  };

  render() {
    const { children, ...rest } = this.props;
    const { focused } = this.state;
    return (
      <div
        {...rest}
        role="presentation"
        ref={ref => {
          this.ref = ref;
        }}
        data-focused={focused}
        onClick={this.handleClickOrKeyPress}
      >
        {children}
      </div>
    );
  }
}

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    LabelComponent: ReactComponentStyled<*>,
    InputComponent: ReactComponentStyled<*>,
    WrapperComponent: ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const WrapperComponent = styled(Wrapper)`
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
        background: ${props =>
          props.checkboxColor ? props.checkboxColor : styleProps.checkboxColor};
        border-color: ${props =>
          props.checkboxColor
            ? darken(0.05, props.checkboxColor)
            : darken(0.05, styleProps.checkboxColor)};
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

  return { LabelComponent, InputComponent, WrapperComponent };
};

export function Checkbox({
  InputComponent,
  LabelComponent,
  WrapperComponent,
  children,
  checkboxColor,
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
        checkboxColor={checkboxColor}
        {...rest}
      />
      <LabelComponent
        htmlFor={rest.id || (input && input.name)}
        checkboxColor={checkboxColor}
      >
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
