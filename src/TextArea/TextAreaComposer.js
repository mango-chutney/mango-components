// @flow

import * as React from 'react';
import type { FieldProps as $FieldProps } from 'redux-form';

export type $Props = {
  InputDecoratorComponent: React.ElementType,
  LabelComponent: React.ElementType,
  TextAreaComponent: React.ElementType,
  label: string | React.ElementConfig<'label'>,
} & React.ElementConfig<'textarea'> &
  $FieldProps;

const TextAreaComposer = (props: $Props) => {
  const {
    InputDecoratorComponent,
    LabelComponent,
    TextAreaComponent,
    label,
    createLabelProps,
    createInputDecoratorProps,
    createFormControlElementProps,
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
};

export default TextAreaComposer;
