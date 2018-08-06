// @flow

import * as React from 'react';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type { FieldProps as $FieldProps } from 'redux-form';
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
  shouldDisplayInputDecorator: boolean,
|} = {
  shouldDisplayInputDecorator: false,
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
    InputComponent,
    InputDecoratorComponent,
    LabelComponent,
  } = createStyledInputComponents(defaultInputStyleProps);

  const TextAreaComponent = InputComponent.withComponent('textarea').extend`
    resize: vertical;
  `;

  return {
    InputDecoratorComponent: styleProps.shouldDisplayInputDecorator
      ? InputDecoratorComponent
      : InputDecoratorComponent.extend`
          &::after {
            display: none;
          }
        `,
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
        <TextAreaComponent {...createFormControlElementProps(rest)} />
        {inputDecoratorChildren}
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
