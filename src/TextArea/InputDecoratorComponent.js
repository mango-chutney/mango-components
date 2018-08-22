// @flow

import styled from 'styled-components';
import { InputDecoratorComponent as BaseInputDecoratorComponent } from '../Input';
import defaultTheme from './styles';

const InputDecoratorComponent = styled(BaseInputDecoratorComponent)`
  &::after {
    display: none;
  }
`;

InputDecoratorComponent.defaultProps = {
  theme: defaultTheme,
};

export default InputDecoratorComponent;
