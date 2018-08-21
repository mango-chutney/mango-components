// @flow

import styled, { css } from 'styled-components';

const TiptextWrapperComponent = styled.div`
  position: relative;
  padding: 1rem 1.5rem 0;

  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpointForTinyMode}) {
        padding: 1rem 1rem 0;
      }
    `};
`;

export default TiptextWrapperComponent;
