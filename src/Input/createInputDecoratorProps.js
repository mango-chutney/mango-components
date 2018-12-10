// @flow

import type { FieldProps as $FieldProps } from 'formik';
import type { $FormControlElementConfig } from './types';

export default ({
  field,
  form,
}: $FormControlElementConfig & $FieldProps): {
  field: $PropertyType<$FieldProps, 'field'>,
  form: $PropertyType<$FieldProps, 'form'>,
 } => ({
  field,
  form,
});
