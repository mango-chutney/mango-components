// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from '../types';
import MangoChutneyLogo from './MangoChutneyLogo';

export type $StyledProps = {
  children?: React.Node,
  href?: string,
};

export type $Props = {
  ...$StyledProps,
  AnchorComponent: React.ComponentType<*>,
  DivComponent: React.ComponentType<*>,
};

export const defaultStyleProps: {} = {};

// At the time of writing, `styleProps` wasn't used for anything, but I don't
// want to remove it in case someone uses this to see what arguments
// `createStyledComponents` usually expects.
/* eslint-disable no-unused-vars */
export const createStyledComponents: $StyledSubComponentsFactory<
  {
    AnchorComponent: $ReactComponentStyled<*>,
    DivComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const AnchorComponent = styled.a`
    width: 180px;
    height: 15px;
    display: inline-block;
  `;

  const DivComponent = styled.div`
    margin: 2rem 0;
    text-align: center;
  `;

  return { AnchorComponent, DivComponent };
};
/* eslint-enable no-unused-vars */

export function MadeWithMangoChutney(props: $Props) {
  const { AnchorComponent, DivComponent, href, ...rest } = props;

  return (
    <DivComponent>
      <AnchorComponent
        {...rest}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MangoChutneyLogo />
      </AnchorComponent>
    </DivComponent>
  );
}

MadeWithMangoChutney.defaultProps = {
  href: 'http://mangochutney.com.au',
};

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <MadeWithMangoChutney {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
