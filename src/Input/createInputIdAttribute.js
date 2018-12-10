// @flow

import invariant from 'invariant';
import type { FieldProps as $FieldProps } from 'formik';
import type { $FormControlElementConfig } from './types';

export default ({
  id,
  field,
}: $FormControlElementConfig & $FieldProps): string => {
  if (id) {
    return id;
  }

  if (field && typeof field === 'object' && typeof field.name === 'string') {
    return field.name;
  }

  return invariant(
    false,
    `Couldn't find or infer 'id' attribute for input element`,
  );
};
