// @flow

import styled, { css } from 'styled-components';
import get from 'lodash/get';
import defaultTheme from './styles';

const InputLabelComponent = styled.label`
  display: block;
  font-size: ${({ theme }) => get(theme, 'label.fontSize')};
  font-weight: ${({ theme }) => get(theme, 'label.fontWeight')};

  ${({ meta }) =>
    meta &&
    meta.error &&
    meta.touched &&
    css`
      color: ${({ theme }) => get(theme, 'input.alertColor')};
    `};
`;

InputLabelComponent.defaultProps = {
  theme: defaultTheme,
};

export default InputLabelComponent;
