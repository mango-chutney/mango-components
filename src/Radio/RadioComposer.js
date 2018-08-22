// @flow

import * as React from 'react';
import type { FieldProps as $FieldProps } from 'redux-form';
import { ThemeProvider } from 'styled-components';
import defaultsDeep from 'lodash/defaultsDeep';
import * as constants from '../constants';

export type $Props = {
  InputComponent: React.ElementType,
  InputDecoratorComponent: React.ElementType,
  label: string | React.ElementConfig<'label'>,
  LabelComponent: React.ElementType,
  RadioContainerComponent: React.ElementType,
  theme: any,
  WrapperComponent: React.ElementType,
} & React.ElementConfig<'input'> &
  $FieldProps;

const defaultTheme = {
  checkbox: {
    activeBackgroundColor: constants.palette.primary,
    alertColor: constants.palette.alert,
    backgroundColor: constants.palette.lightGray,
    borderColor: constants.palette.border,
    size: '20px',
  },
};

const RadioComposer = (props: $Props) => {
  const {
    createFormControlElementProps,
    createInputDecoratorProps,
    createLabelProps,
    InputComponent,
    InputDecoratorComponent,
    label,
    LabelComponent,
    theme,
    value,
    WrapperComponent,
    ...rest
  } = props;

  const { children: labelChildren, ...labelProps } = createLabelProps(
    label,
    rest,
  );

  return (
    <ThemeProvider theme={defaultsDeep({ ...theme }, defaultTheme)}>
      <WrapperComponent>
        <InputComponent
          {...{
            ...createFormControlElementProps(rest, {
              type: 'radio',
            }),
            // Pass the classname of input-decorator component to the styled component.
            InputDecoratorComponent,
          }}
        />
        <InputDecoratorComponent {...createInputDecoratorProps(rest)} />
        <LabelComponent {...labelProps}>{labelChildren}</LabelComponent>
      </WrapperComponent>
    </ThemeProvider>
  );
};

export default RadioComposer;
