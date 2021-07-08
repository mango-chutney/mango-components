// @flow

import * as React from 'react';
import MangoChutneyLogoPaths from './MangoChutneyLogoPaths.json';

const MangoChutneyPath: string = MangoChutneyLogoPaths.mango_chutney.join(' ');
const MadeWithPath: string = MangoChutneyLogoPaths.made_with.join(' ');

const MangoChutneyLogo = ({
  width,
  height,
  fill,
  ...rest
}: {
  height: number | string,
  width: number | string,
  fill: string,
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    {...rest}
  >
    <g fill={fill} fillRule="evenodd">
      <g opacity={0.75}>
        <path d={MangoChutneyPath} />
      </g>
      <g opacity={0.2}>
        <path d={MadeWithPath} />
      </g>
    </g>
  </svg>
);

MangoChutneyLogo.defaultProps = {
  width: 180,
  height: 15,
  fill: '#222C3C',
};

export default MangoChutneyLogo;
