// @flow

import styled from 'styled-components';
import { InputLabelComponent as BaseInputLabelComponent } from '../Input';
import defaultTheme from './styles';

const InputLabelComponent = styled(BaseInputLabelComponent)`
  display: inline-block;
  margin-left: 1rem;
`;

InputLabelComponent.defaultProps = {
  theme: defaultTheme,
};

export default InputLabelComponent;
