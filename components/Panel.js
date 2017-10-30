// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, darken } from 'polished';
import { palette, globalBorder, globalRadius, fontWeights } from './constants';

export type Props = {
  children: React.Node,
};

// this has to be outside so other ocmponents can access
let StyledPanelSection = styled.div`
  margin: 0 -2rem;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid ${palette.border};

  :last-child {
    border-bottom: 0;
  }
`;

export const PanelSection = (
  { styles }: { styles: { div: string } } = {
    styles: { div: '' },
  },
) => {
  if (styles && styles.div) {
    StyledPanelSection = StyledPanelSection.extend([styles.div]);
  }

  return function PanelSection(props: Props) {
    const { children, ...rest } = props;

    return <StyledPanelSection {...rest}>{children}</StyledPanelSection>;
  };
};

export const PanelHeading = (
  { styles }: { styles: { div: string } } = {
    styles: { div: '' },
  },
) => {
  let StyledDiv = styled.div`
    background: linear-gradient(
      ${palette.lightGray} 0%,
      ${darken(0.04, palette.lightGray)} 100%
    );
    border-radius: ${globalRadius} ${globalRadius} 0 0;
    border-bottom: ${globalBorder};
    margin: -2rem -2rem 2rem;
    padding: 1rem 2rem;
    color: ${palette.black};
    font-weight: ${fontWeights.semibold};
    font-size: ${rem(16)};
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    + ${StyledPanelSection} {
      margin-top: -2rem;
    }
  `;

  if (styles && styles.div) {
    StyledDiv = StyledDiv.extend([styles.div]);
  }

  return function PanelHeading(props: Props) {
    const { children, ...rest } = props;

    return <StyledDiv {...rest}>{children}</StyledDiv>;
  };
};

export default (
  { styles }: { styles: { div: string } } = {
    styles: { div: '' },
  },
) => {
  let StyledDiv = styled.div`
    background: ${palette.white};
    margin: 0 0 1rem;
    padding: 2rem;
    border: ${globalBorder};
    border-radius: ${globalRadius};
    overflow: hidden;

    > ${StyledPanelSection} {
      :last-child {
        margin-bottom: -2rem;
      }
    }
  `;

  if (styles && styles.div) {
    StyledDiv = StyledDiv.extend([styles.div]);
  }

  return function Panel(props: Props) {
    const { children, ...rest } = props;

    return <StyledDiv {...rest}>{children}</StyledDiv>;
  };
};
