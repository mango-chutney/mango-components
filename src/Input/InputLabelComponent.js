// @flow

import styled, { css } from 'styled-components';
import { palette } from '../constants';
import * as styles from './styles';

const InputLabelComponent = styled.label`
  font-size: ${styles.fontSize};
  font-weight: ${styles.fontWeight};
  display: block;

  ${({ meta: { error, touched } }) =>
    error &&
    touched &&
    css`
      color: ${palette.alert};
    `};
`;

export default InputLabelComponent;
