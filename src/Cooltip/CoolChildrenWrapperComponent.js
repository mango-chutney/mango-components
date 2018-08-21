// @flow

import styled, { css } from 'styled-components';
import get from 'lodash/get';

const CoolChildrenWrapperComponent = styled.div`
  border-radius: 4px;
  display: flex;
  flex-flow: row nowrap;

  ${({ theme }) => css`
    @media (max-width: ${get(theme, 'breakpointForTinyMode')}) {
      display: none;
    }
  `};
`;

export default CoolChildrenWrapperComponent;
