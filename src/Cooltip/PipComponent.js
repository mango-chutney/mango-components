// @flow

import styled, { css } from 'styled-components';
import get from 'lodash/get';

export const defaultPipSize = '8px';

const PipComponent = styled.div`
  border: ${({ theme }) => get(theme, 'pipSize')} inset;
  border-bottom-style: solid;
  border-color: transparent transparent
    ${({ theme }) => get(theme, 'coolChild.activeBackgroundColor')};
  border-top-width: 0;
  position: absolute;
  top: calc(1rem + 1px - ${({ theme }) => get(theme, 'pipSize')});
  transition: left 500ms ease-in-out;

  ${({ coolChildrenLength, theme, activeIndex }) => css`
    left: calc(
      ((100% / ${coolChildrenLength}) * ${activeIndex}) +
        ((100% / ${coolChildrenLength}) / 2) - ${get(theme, 'pipSize')}
    );
  `};

  ${({ theme }) =>
    theme &&
    css`
      @media (max-width: ${get(theme, 'breakpointForTinyMode')}) {
        left: calc(50% - ${get(theme, 'pipSize')});
      }
    `};
`;

export default PipComponent;
