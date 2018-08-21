// @flow

import * as React from 'react';
import { Input as ComposedInputComponent } from '../Input';
import { Select as ComposedSelectComponent } from '../Select';
import CoolChildrenWrapperComponent from './CoolChildrenWrapperComponent';
import CooltipComposer from './CooltipComposer';
import CooltipWrapperComponent from './CooltipWrapperComponent';
import PipComponent from './PipComponent';
import SelectWrapperComponent from './SelectWrapperComponent';
import TiptextComponent from './TiptextComponent';
import TiptextWrapperComponent from './TiptextWrapperComponent';
import type { $Props as $ChildProps } from './CooltipComposer';

type $Props = {
  ...$ChildProps,
  ComposedInputComponent?: $PropertyType<$ChildProps, 'ComposedInputComponent'>,
  ComposedSelectComponent?: $PropertyType<
    $ChildProps,
    'ComposedSelectComponent',
  >,
  CoolChildrenWrapperComponent?: $PropertyType<
    $ChildProps,
    'CoolChildrenWrapperComponent',
  >,
  CooltipWrapperComponent?: $PropertyType<
    $ChildProps,
    'CooltipWrapperComponent',
  >,
  PipComponent?: $PropertyType<$ChildProps, 'PipComponent'>,
  SelectWrapperComponent?: $PropertyType<$ChildProps, 'SelectWrapperComponent'>,
  TiptextComponent?: $PropertyType<$ChildProps, 'TiptextComponent'>,
  TiptextWrapperComponent?: $PropertyType<
    $ChildProps,
    'TiptextWrapperComponent',
  >,
};

const Cooltip = (props: $Props) => (
  <CooltipComposer
    {...{
      ComposedInputComponent,
      ComposedSelectComponent,
      CoolChildrenWrapperComponent,
      CooltipWrapperComponent,
      PipComponent,
      SelectWrapperComponent,
      TiptextComponent,
      TiptextWrapperComponent,
      ...props,
    }}
  />
);

export default Cooltip;
