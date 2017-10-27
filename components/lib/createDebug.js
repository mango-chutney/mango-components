// @flow

import debug from 'debug';
import { name } from '../../package.json';

// Returns a decorated version of console.error
export default function(namespace: string): (...data: Array<any>) => void {
  return debug(`${name}:${namespace}`);
}
