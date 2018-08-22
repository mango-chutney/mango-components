// @flow

import styled from 'styled-components';
// import { darken } from 'polished';
import get from 'lodash/get';

const InputComponent = styled.input`
  height: 100%;
  left: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9001;

  &[disabled] {
    cursor: not-allowed;
  }

  :checked + ${({ InputDecoratorComponent }) => InputDecoratorComponent} {
    &::before {
      top: 0;
      left: 0;
    }

    &::before {
      border: 6px solid
        ${({ theme }) => get(theme, 'checkbox.activeBackgroundColor')};
    }
  }
`;

export default InputComponent;
