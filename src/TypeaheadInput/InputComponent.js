// @flow

import { css } from 'styled-components';
import { InputComponent as BaseInputComponent } from '../Input';

const InputComponent = BaseInputComponent.extend`
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

export default InputComponent;
