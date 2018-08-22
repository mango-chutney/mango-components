// @flow

import styled, { css } from 'styled-components';
import { InputComponent as BaseInputComponent } from '../Input';
import defaultTheme from './styles';

const InputComponent = styled(BaseInputComponent)`
  ${({ styleProps: inputComponentStyleProps }) =>
    inputComponentStyleProps &&
    inputComponentStyleProps.isOpen &&
    inputComponentStyleProps.hasItems &&
    css`
      &,
      &:active,
      &:focus {
        border-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `};
`;

InputComponent.defaultProps = {
  theme: defaultTheme,
};

export default InputComponent;
