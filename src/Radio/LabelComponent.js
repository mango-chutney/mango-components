// @flow

import styled from 'styled-components';
import { InputLabelComponent } from '../Input';
import defaultTheme from './styles';

const LabelComponent = styled(InputLabelComponent)`
  display: inline-block;
  margin-left: 1rem;
`;

LabelComponent.defaultProps = {
  theme: defaultTheme,
};

export default LabelComponent;
