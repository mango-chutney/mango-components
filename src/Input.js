// @flow

import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type { FieldProps as $FieldProps } from 'redux-form';
import { rem, transparentize, darken } from 'polished';
import invariant from 'invariant';
import tristicons from 'tristicons';
import { palette, fontWeights, fontStack } from './constants';
import type {
  $ComponentFactory,
  $FormControlElementConfig,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';

export type $Props = {
  InputComponent: React.ElementType,
  InputDecoratorComponent: React.ElementType,
  LabelComponent: React.ElementType,
  label: string | React.ElementConfig<'label'>,
} & React.ElementConfig<'input'> &
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

const tristiconsSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
`;

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

    ${({ error, touched }) =>
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

  const InputDecoratorComponent = styled.span`
    display: block;
    position: relative;

    &::after {
      content: '';
      color: ${styleProps.placeholderColor};
      font: normal normal normal ${rem(14)} tristicons;
      line-height: 1rem;
      position: absolute;
      right: 1rem;
      top: 0.75rem;
    }

    ${({ asyncValidating }) =>
      asyncValidating &&
      css`
        ::after {
          animation: ${tristiconsSpin} 2s infinite linear;
          content: ${`"${tristicons.loading}"`};
        }
      `};

    ${({ error, touched }) =>
      error &&
      touched &&
      css`
        ::after {
          color: ${palette.alert};
          content: ${`"${tristicons['cross-circle']}"`};
        }
      `};
  `;

  const LabelComponent = styled.label`
    font-size: ${styleProps.fontSize};
    font-weight: ${styleProps.fontWeight};
    display: block;

    ${({ error, touched }) =>
      error &&
      touched &&
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

const createLabelObject = (
  label: string | React.ElementConfig<'label'> | void,
): React.ElementConfig<'label'> => {
  if (!label) {
    return {};
  }

  if (typeof label === 'string') {
    return {
      children: label,
    };
  }

  return {
    ...label,
  };
};

export const createInputIdAttribute = ({
  id,
  input,
}: $FormControlElementConfig & $FieldProps): string => {
  if (id) {
    return id;
  }

  if (input && typeof input === 'object' && typeof input.name === 'string') {
    return input.name;
  }

  return invariant(
    false,
    `Couldn't find or infer 'id' attribute for input element`,
  );
};

const createLabelForAttribute = (
  props: $FormControlElementConfig & $FieldProps,
): string => {
  const { id, label } = props;

  if (label && typeof label === 'object' && typeof label.htmlFor === 'string') {
    return label.htmlFor;
  }

  if (id) {
    return id;
  }

  return createInputIdAttribute(props);
};

export const createLabelProps = (
  label: string | React.ElementConfig<'label'> | void,
  props: $FormControlElementConfig & $FieldProps,
): React.ElementConfig<'label'> => {
  const {
    meta,
    input, // don't apply input element props to label
    custom, // don't apply input element props to label
    children,
    ...rest
  } = props;

  const labelProps = createLabelObject(label);

  return {
    ...meta,
    ...rest,
    ...labelProps,
    children: children || labelProps.children || undefined,
    htmlFor: createLabelForAttribute(props),
  };
};

export const createFormControlElementProps = (
  props: $FormControlElementConfig & $FieldProps,
  extraProps?: $FormControlElementConfig,
): $FormControlElementConfig => {
  const {
    children, // don't apply label's children to input
    label,
    meta,
    input,
    ...rest
  } = props;

  return {
    ...input,
    ...meta,
    ...rest,
    ...extraProps,
    id: createInputIdAttribute(props),
  };
};

export const createInputDecoratorProps = ({
  disabled,
  meta,
}: $FormControlElementConfig & $FieldProps): { [string]: string } => ({
  disabled,
  ...meta,
});

export function Input(props: $Props) {
  const {
    InputComponent,
    InputDecoratorComponent,
    LabelComponent,
    label,
    children: inputDecoratorChildren,
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
        <InputComponent {...createFormControlElementProps(rest)} />
        {inputDecoratorChildren}
      </InputDecoratorComponent>
    </LabelComponent>
  );
}

export const createComponent: $ComponentFactory<$Props> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);

  // This is a class in order to statisfy react-day-picker.
  // https://github.com/gpbl/react-day-picker/issues/748
  // eslint-disable-next-line react/prefer-stateless-function
  class ComposedInput extends React.Component<$Props> {
    render() {
      return <Input {...{ ...defaultStyledComponents, ...this.props }} />;
    }
  }

  return ComposedInput;
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $Props>);
