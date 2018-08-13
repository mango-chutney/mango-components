// @flow

import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { darken, rem } from 'polished';
// TODO: use themes for this :(
import * as checkboxStyles from './styles';
import { palette } from '../constants';

const InputDecoratorComponent = styled.div.attrs({
  className: ({ className }) => classNames('input-decorator', className),
})`
  cursor: pointer;
  display: inline-block;

  min-height: ${rem(checkboxStyles.checkboxSize)};
  line-height: ${rem(checkboxStyles.checkboxSize)};
  position: relative;
  border: 1px solid transparent;
  display: block;

  &::before,
  &::after {
    width: ${rem(checkboxStyles.checkboxSize)};
    height: ${rem(checkboxStyles.checkboxSize)};
    cursor: pointer;
    content: '';
    display: inline-block;
    border-radius: 4px;
    vertical-align: middle;
  }

  &::before {
    border: 1px solid ${palette.border};
    background: ${palette.lightGray};
    margin-right: 1rem;

    ${({ meta: { error, touched } }) =>
      error &&
      touched &&
      css`
        border-color: ${palette.alert};
      `};

    ${({ disabled }) =>
      disabled &&
      css`
        background-color: ${darken(0.05, palette.lightGray)};
        cursor: not-allowed;
      `};
  }

  &::after {
    position: absolute;
    left: 0;
    border: 1px solid transparent;
    line-height: ${rem(checkboxStyles.checkboxSize)};
    margin-top: ${rem(checkboxStyles.checkboxSize * 0.1)};
    text-align: center;
    transform: scale(0);
  }
`;

export default InputDecoratorComponent;
