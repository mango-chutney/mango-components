// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import type { FieldProps } from 'redux-form';
import { rem, transparentize } from 'polished';
import { palette, fontWeights, fontStack } from './constants';

export type InputProps = {
  ...FieldProps,
  label: string,
  placeholder: string,
};

export default (
  { styles }: { styles: { input: string, label: string } } = {
    styles: { input: '', label: '' },
  },
) => {
  let StyledInput = styled.input`
    appearance: none;
    background-color: ${palette.lightGray};
    border-color: ${palette.border};
    border-radius: 0.25rem;
    border-style: solid;
    border-width: 0.05rem;
    color: ${palette.black};
    display: block;
    font-family: ${fontStack};
    height: 2.6rem;
    margin-bottom: 1rem;
    outline: 0;
    padding: 0.5rem 1rem;
    transition: border-color 300ms ease;
    width: 100%;

    ::placeholder {
      color: ${transparentize(0.2, palette.darkGray)};
    }

    :active,
    :focus {
      border-color: ${palette.black};
    }
  `;

  let StyledLabel = styled.span`
    font-size: ${rem(14)};
    font-weight: ${fontWeights.semibold};
  `;

  if (styles && styles.input) {
    StyledInput = StyledInput.extend([styles.input]);
  }

  if (styles && styles.label) {
    StyledLabel = StyledLabel.extend([styles.label]);
  }

  return function Input({
    input,
    meta,
    label,
    placeholder,
    ...rest
  }: InputProps) {
    return (
      <label htmlFor={rest.id || (input && input.name)}>
        {label && <StyledLabel>{label}</StyledLabel>}
        <span>
          <StyledInput
            {...input}
            id={rest.id || (input && input.name)}
            placeholder={placeholder}
          />
        </span>
      </label>
    );
  };
};
