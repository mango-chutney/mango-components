// @flow

import styled from 'styled-components';
import { palette, fontWeights } from '../constants';

export default styled.button`
  background-color: #f0f3f8;
  border-radius: 0.25rem;
  border: 0;
  color: ${palette.darkGray};
  cursor: pointer;
  display: ${({ expanded }) => (expanded ? 'block' : 'inline-block')};
  font-family: inherit;
  font-weight: ${fontWeights.semibold};
  margin-bottom: 1rem;
  padding: 0.65rem 1.25rem;
  text-align: center;
  text-decoration: none;
  width: ${({ expanded }) => (expanded ? '100%' : 'auto')};
`;
