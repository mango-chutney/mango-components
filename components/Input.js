// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { FieldProps } from 'redux-form';
import { transparentize } from 'polished';
import { palette, fontStack } from './constants';

export default (
  { styles: { input: inputStyles } }: { styles: { input: string } } = {
    styles: { input: '' },
  },
) => {
  const StyledInput = styled.input`
    appearance: none;
    background-color: #fafbfc;
    border-color: ${palette.lightGray};
    border-radius: 0.25rem;
    border-style: solid;
    border-width: 0.05rem;
    color: ${palette.black};
    display: block;
    width: 100%;
    font-family: ${fontStack};
    height: 2.6rem;
    margin-bottom: 1rem;
    outline: 0;
    padding: 0.5rem;

    ::placeholder {
      color: ${transparentize(0.2, palette.darkGray)};
    }
  `.extend(inputStyles);

  return function Input({ input, meta, placeholder, ...rest }: FieldProps) {
    return (
      <label htmlFor={rest.id || input.name}>
        <span>
          <StyledInput {...input} id={rest.id || input.name} />
        </span>
      </label>
    );
  };
};
