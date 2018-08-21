// @flow

import styled, { css } from 'styled-components';
import get from 'lodash/get';

const SelectWrapperComponent = styled.div`
  display: none;

  ${({ theme }) =>
    css`
      @media (max-width: ${get(theme, 'breakpointForTinyMode')}) {
        display: block;
      }
    `};
`;

export default SelectWrapperComponent;
