// @flow

import * as React from 'react';
import type { FieldProps as $FieldProps } from 'redux-form';

export type $Props = {
  InputComponent: React.ElementType,
  InputDecoratorComponent: React.ElementType,
  InputLabelComponent: React.ElementType,
  label: string | React.ElementConfig<'label'>,
} & React.ElementConfig<'input'> &
  $FieldProps;

const InputComposer = (props: $Props) => {
  const {
    InputComponent,
    InputDecoratorComponent,
    InputLabelComponent,
    children: inputDecoratorChildren,
    createFormControlElementProps,
    createInputDecoratorProps,
    createLabelProps,
    label,
    ...rest
  } = props;

  const { children: labelChildren, ...labelProps } = createLabelProps(
    label,
    rest,
  );

  return (
    <InputLabelComponent {...labelProps}>
      {labelChildren}
      <InputDecoratorComponent {...createInputDecoratorProps(rest)}>
        <InputComponent {...createFormControlElementProps(rest)} />
        {inputDecoratorChildren}
      </InputDecoratorComponent>
    </InputLabelComponent>
  );
};

export default InputComposer;
