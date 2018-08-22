// @flow

import { rem } from 'polished';
import * as constants from '../constants';
import { defaultTheme as inputDefaultTheme } from '../Input';

export default {
  ...inputDefaultTheme,
  radio: {
    activeBackgroundColor: constants.palette.primary,
    alertColor: constants.palette.alert,
    backgroundColor: constants.palette.lightGray,
    borderColor: constants.palette.border,
    size: rem(20),
  },
  label: {
    fontSize: rem(16),
    fontWeight: 'normal',
  },
};
