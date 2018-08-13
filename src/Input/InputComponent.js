// @flow

import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { palette } from '../constants';
import * as styles from './styles';

const InputComponent = styled.input`
  appearance: none;
  background-color: ${styles.backgroundColor};
  border-color: ${styles.borderColor};
  border-radius: ${styles.borderRadius};
  border-style: ${styles.borderStyle};
  border-width: ${styles.borderWidth};
  color: ${styles.color};
  display: block;
  font-family: ${styles.fontFamily};
  height: ${styles.height};
  margin-bottom: 1rem;
  outline: 0;
  padding: ${styles.padding};
  transition: border-color 300ms ease;
  width: 100%;

  ::placeholder {
    color: ${styles.placeholderColor};
  }

  :active,
  :focus {
    border-color: ${styles.activeBorderColor};
  }

  ${({ meta: { error, touched } }) =>
    error &&
    touched &&
    css`
      border-color: ${palette.alert};

      ::placeholder {
        color: ${palette.alert};
      }
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${darken(0.05, styles.backgroundColor)};
      color: ${darken(0.05, styles.color)};
      cursor: not-allowed;

      ::placeholder {
        color: ${darken(0.05, styles.placeholderColor)};
      }
    `};
`;

export default InputComponent;
