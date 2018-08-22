// @flow

import tristicons from 'tristicons';
import styled from 'styled-components';
import { InputDecoratorComponent as BaseInputDecoratorComponent } from '../Input';
import defaultTheme from './styles';

const InputDecoratorComponent = styled(BaseInputDecoratorComponent)`
  &::after {
    content: ${`"${tristicons['chevron-down']}"`};
  }
`;

InputDecoratorComponent.defaultProps = {
  theme: defaultTheme,
};

export default InputDecoratorComponent;
