// @flow

import type { FieldProps as $FieldProps } from 'formik';
import type { $FormControlElementConfig } from './types';
import createInputIdAttribute from './createInputIdAttribute';

export default (
  props: $FormControlElementConfig & $FieldProps,
  extraProps?: $FormControlElementConfig,
): $FormControlElementConfig => {
  const {
    children, // don't apply label's children to input
    label,
    field,
    ...rest
  } = props;

  return {
    ...field,
    ...rest,
    ...extraProps,
    id: createInputIdAttribute(props),
  };
};
