// @flow

import * as AnchorButton from './components/AnchorButton';
import * as Button from './components/Button';
import Input from './components/Input';
import MadeWithMangoChutney from './components/MadeWithMangoChutney';
import Panel, { PanelHeading, PanelSection } from './components/Panel';
import * as Tootlip from './components/Tootlip';
import type { $MangoComponent } from './components/types';

const components: { [string]: $MangoComponent<*, *> } = {
  AnchorButton,
  Button,
  Input,
  MadeWithMangoChutney,
  Panel,
  PanelHeading,
  PanelSection,
  Tootlip,
};

export default components;
