import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled from 'styled-components';
import { palette } from './constants';
export var defaultStyleProps = {
  background: palette.white
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var NestedRadialProgressBarsComponent = styled.div.withConfig({
    componentId: "s1oe6upv-0"
  })(["position:relative;> div:first-child{margin:0 auto;}> div:nth-child(n + 2){position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);}"]);
  return {
    NestedRadialProgressBarsComponent: NestedRadialProgressBarsComponent
  };
};
export function Panel(props) {
  var NestedRadialProgressBarsComponent = props.NestedRadialProgressBarsComponent,
      className = props.className,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["NestedRadialProgressBarsComponent", "className", "children"]);

  return React.createElement(NestedRadialProgressBarsComponent, rest, children);
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