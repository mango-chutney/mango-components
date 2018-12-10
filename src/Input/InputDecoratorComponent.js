// @flow

import styled, { keyframes, css } from 'styled-components';
import { rem } from 'polished';
import tristicons from 'tristicons';
import get from 'lodash/get';
import defaultTheme from './styles';

const transforms = 'translateY(-50%)';

const tristiconsSpin = keyframes`
  0% {
    transform: ${transforms} rotate(0deg);
  }

  100% {
    transform: ${transforms} rotate(359deg);
  }
`;

const InputDecoratorComponent = styled.span`
  display: block;
  position: relative;

  &::after {
    color: ${({ theme }) => get(theme, 'input.placeholderColor')};
    content: '';
    font: normal normal normal ${rem(14)} tristicons;
    line-height: 1rem;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: ${transforms};
  }

  ${({ field: { name }, form: { touched, errors } }) =>
    errors[name] &&
    touched[name] &&
    css`
      ::after {
        color: ${({ theme }) => theme.input.alertColor};
        content: ${`"${tristicons['cross-circle']}"`};
      }
    `};
`;

InputDecoratorComponent.defaultProps = {
  theme: defaultTheme,
};
export default InputDecoratorComponent;
