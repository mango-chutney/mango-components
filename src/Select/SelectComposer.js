// @flow

import * as React from 'react';
import type { FieldProps as $FieldProps } from 'redux-form';

export type $Props = {
  SelectComponent: React.ElementType,
  InputDecoratorComponent: React.ElementType,
  LabelComponent: React.ElementType,
  label: string | React.ElementConfig<'label'>,
} & React.ElementConfig<'select'> &
  $FieldProps;

const SelectComposer = (props: $Props) => {
  const {
    SelectComponent,
    InputDecoratorComponent,
    LabelComponent,
    label,
    createFormControlElementProps,
    createInputDecoratorProps,
    createLabelProps,
    children: selectChildren,
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
        <SelectComponent {...createFormControlElementProps(rest)}>
          {selectChildren}
        </SelectComponent>
      </InputDecoratorComponent>
    </LabelComponent>
  );
};

export default SelectComposer;
