// @flow

import { rem, transparentize } from 'polished';
import { palette, fontWeights, fontStack } from '../constants';

export const activeBorderColor = palette.black;
export const backgroundColor = palette.lightGray;
export const borderColor = palette.border;
export const borderRadius = '4px';
export const borderStyle = 'solid';
export const borderWidth = '1px';
export const color = palette.black;
export const fontFamily = fontStack;
export const fontSize = rem(14);
export const fontWeight = fontWeights.semibold;
export const height = '2.6rem';
export const padding = '0.5rem 1rem';
export const placeholderColor = String(transparentize(0.2, palette.darkGray));
