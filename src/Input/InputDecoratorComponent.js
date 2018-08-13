// @flow

import styled, { keyframes, css } from 'styled-components';
import { rem } from 'polished';
import tristicons from 'tristicons';
import * as styles from './styles';
import { palette } from '../constants';

const transforms = 'translateY(-50%)';

const tristiconsSpin = keyframes`
  0% {
    transform: rotate(0deg) ${transforms};
  }

  100% {
    transform: rotate(359deg) ${transforms};
  }
`;

const InputDecoratorComponent = styled.span`
  display: block;
  position: relative;

  &::after {
    content: '';
    color: ${styles.placeholderColor};
    font: normal normal normal ${rem(14)} tristicons;
    line-height: 1rem;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: ${transforms};
  }

  ${({ meta: { asyncValidating } }) =>
    asyncValidating &&
    css`
      ::after {
        animation: ${tristiconsSpin} 2s infinite linear;
        content: ${`"${tristicons.loading}"`};
      }
    `};

  ${({ meta: { error, touched } }) =>
    error &&
    touched &&
    css`
      ::after {
        color: ${palette.alert};
        content: ${`"${tristicons['cross-circle']}"`};
      }
    `};
`;

export default InputDecoratorComponent;
