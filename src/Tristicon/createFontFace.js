// @flow

import { css } from 'styled-components';
import base64Woff from 'tristicons/dist/json/base64-woff.json';

const createFontFace = () => css`
  @font-face {
    font-family: tristicons;
    font-style: normal;
    font-weight: normal;
    src: url(data:application/x-font-woff;charset=utf-8;base64,${encodeURIComponent(
      base64Woff.woff,
    )});
  }
`;

export default createFontFace;
