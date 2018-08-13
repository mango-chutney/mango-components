// @flow

import * as React from 'react';
import type { FieldProps as $FieldProps } from 'redux-form';

export type $Props = {
  InputDecoratorComponent: React.ElementType,
  CheckboxContainerComponent: React.ElementType,
  InputComponent: React.ElementType,
  LabelComponent: React.ElementType,
  WrapperComponent: React.ElementType,
  label: string | React.ElementConfig<'label'>,
} & React.ElementConfig<'input'> &
  $FieldProps;

const CheckboxComposer = (props: $Props) => {
  const {
    CheckboxContainerComponent,
    InputComponent,
    InputDecoratorComponent,
    LabelComponent,
    WrapperComponent,
    createFormControlElementProps,
    createInputDecoratorProps,
    createLabelProps,
    label,
    value,
    ...rest
  } = props;

  const { children: labelChildren, ...labelProps } = createLabelProps(
    label,
    rest,
  );

  return (
    <WrapperComponent>
      <CheckboxContainerComponent>
        <InputComponent
          {...{
            ...createFormControlElementProps(rest, {
              type: 'checkbox',
              checked: value,
            }),
            // Pass the classname of input-decorator component to the styled component.
            InputDecoratorComponent,
          }}
        />
        <InputDecoratorComponent {...createInputDecoratorProps(rest)} />
      </CheckboxContainerComponent>
      <LabelComponent {...labelProps}>{labelChildren}</LabelComponent>
    </WrapperComponent>
  );
};

export default CheckboxComposer;
