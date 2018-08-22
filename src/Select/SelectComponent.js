// @flow

import styled from 'styled-components';
import { InputComponent } from '../Input';
import defaultTheme from './styles';

const SelectComponent = styled(InputComponent.withComponent('select'))`
  ::-ms-expand {
    display: none;
  }

  option {
    width: 100%;
  }
`;

SelectComponent.defaultProps = {
  theme: defaultTheme,
};

export default SelectComponent;
