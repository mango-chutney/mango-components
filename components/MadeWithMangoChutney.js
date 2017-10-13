// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

const href = 'http://mangochutney.com.au/';

export type Props = {
  children: React.Node,
};

export default ({
  styles,
  baseURL,
}: {
  styles: { a: string, div: string },
  baseURL: string,
}) => {
  let StyledLink = styled.a`
      background-repeat: no-repeat;
      width: 180px;
      height: 15px;
      display: inline-block;
      background-image: url("${baseURL}/img/mangochutney.svg");
    `;

  let StyledDiv = styled.div`
    margin: 2rem 0;
    text-align: center;
  `;

  if (styles && styles.div) {
    StyledDiv = StyledDiv.extend([styles.div]);
  }

  if (styles && styles.a) {
    StyledLink = StyledLink.extend([styles.a]);
  }

  return function MadeWithMangoChutney(props: Props) {
    const { children, ...rest } = props;

    return (
      <StyledDiv>
        <StyledLink
          {...rest}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </StyledLink>
      </StyledDiv>
    );
  };
};
