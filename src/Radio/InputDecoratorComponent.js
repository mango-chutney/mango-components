// @flow

import styled, { css } from 'styled-components';
import classNames from 'classnames';
import get from 'lodash/get';
import { darken } from 'polished';

const InputDecoratorComponent = styled.div.attrs({
  className: ({ className }) => classNames('input-decorator', className),
})`
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-block;
  line-height: ${({ theme }) => get(theme, 'checkbox.size')};
  min-height: ${({ theme }) => get(theme, 'checkbox.size')};
  position: relative;

  &::before {
    border-radius: 50%;
    box-sizing: border-box;
    content: '';
    cursor: pointer;
    display: inline-block;
    height: ${({ theme }) => get(theme, 'checkbox.size')};
    vertical-align: middle;
    width: ${({ theme }) => get(theme, 'checkbox.size')};
  }

  &::before {
    border: 1px solid ${({ theme }) => get(theme, 'checkbox.borderColor')};
    background: ${({ theme }) => get(theme, 'checkbox.backgroundColor')};

    ${({ meta }) =>
      meta &&
      meta.error &&
      meta.touched &&
      css`
        border-color: ${({ theme }) => get(theme, 'checkbox.alertColor')};
      `};

    ${({ disabled }) =>
      disabled &&
      css`
        background-color: ${({ theme }) =>
          darken(0.05, get(theme, 'checkbox.backgroundColor'))};
        cursor: not-allowed;
      `};
  }
`;

export default InputDecoratorComponent;
