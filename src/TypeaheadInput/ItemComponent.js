// @flow

import styled from 'styled-components';
import { darken } from 'polished';

// TODO: use themes for this instead of reaching into Input's styles.js :(
import * as inputStyles from '../Input/styles';

const ItemComponent = styled.span`
  display: block;

  color: ${inputStyles.color};
  border-left: ${inputStyles.borderWidth} ${inputStyles.borderStyle}
    ${inputStyles.activeBorderColor};
  border-right: ${inputStyles.borderWidth} ${inputStyles.borderStyle}
    ${inputStyles.activeBorderColor};
  padding: 0.5rem 1rem;

  background-color: ${({ highlightedIndex, index }) =>
    highlightedIndex === index
      ? darken(0.05, inputStyles.backgroundColor)
      : inputStyles.backgroundColor};

  &:last-child {
    border-bottom: ${inputStyles.borderWidth} ${inputStyles.borderStyle}
      ${inputStyles.activeBorderColor};
    border-bottom-right-radius: ${inputStyles.borderRadius};
    border-bottom-left-radius: ${inputStyles.borderRadius};
  }
`;

export default ItemComponent;
