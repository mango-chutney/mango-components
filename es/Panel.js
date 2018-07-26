import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled from 'styled-components';
import { palette, globalRadius, globalBorder } from './constants';
export var defaultStyleProps = {
  background: palette.white,
  border: globalBorder,
  radius: globalRadius
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var PanelComponent = styled.div.withConfig({
    componentId: "s1bpcb0t-0"
  })(["background:", ";margin:0 0 1rem;padding:2rem;border:", ";border-radius:", ";overflow:hidden;> .panel-section{:last-child{margin-bottom:-2rem;}}"], styleProps.background, styleProps.border, styleProps.radius);
  return {
    PanelComponent: PanelComponent
  };
};
export function Panel(props) {
  var PanelComponent = props.PanelComponent,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["PanelComponent", "children"]);

  return React.createElement(PanelComponent, rest, children);
}
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Panel, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};