import styled from 'styled-components';
import { rem } from 'polished';
// TODO: use themes for this :(
import * as checkboxStyles from './styles';

const CheckboxContainerComponent = styled.div`
  position: relative;
  margin: 0;
  height: ${rem(checkboxStyles.checkboxSize)};
  width: ${rem(checkboxStyles.checkboxSize)};
  display: inline-block;
`;

export default CheckboxContainerComponent;
