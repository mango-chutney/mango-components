// @flow

import styled from 'styled-components';
import get from 'lodash/get';

const TiptextComponent = styled.div`
  background-color: ${({ theme }) =>
    get(theme, 'tiptext.backgroundColor') ||
    get(theme, 'coolChild.activeBackgroundColor')};
  border-radius: 4px;
  color: ${({ theme }) =>
    get(theme, 'tiptext.color') || get(theme, 'coolChild.activeColor')};
  margin-bottom: 1rem;
  padding: 1.5rem 2rem;
  position: relative;
`;

export default TiptextComponent;
