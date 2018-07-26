import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled from 'styled-components';
import { darken, rem } from 'polished';
import { fontWeights, globalBorder, globalRadius, palette } from './constants';
export var defaultStyleProps = {
  background: "linear-gradient(\n    " + palette.lightGray + " 0%,\n    " + String(darken(0.04, palette.lightGray)) + " 100%\n  )",
  borderBottom: globalBorder,
  color: palette.black,
  fontSize: rem(16),
  fontWeight: fontWeights.semibold,
  radius: globalRadius
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var PanelHeadingComponent = styled.div.withConfig({
    componentId: "s1wcbu82-0"
  })(["background:", ";border-radius:", " ", " 0 0;border-bottom:", ";margin:-2rem -2rem 2rem;padding:1rem 2rem;color:", ";font-weight:", ";font-size:", ";overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;+ .panel-section{margin-top:-2rem;}"], styleProps.background, styleProps.radius, styleProps.radius, styleProps.borderBottom, styleProps.color, styleProps.fontWeight, styleProps.fontSize);
  return {
    PanelHeadingComponent: PanelHeadingComponent
  };
};
export function PanelHeading(props) {
  var PanelHeadingComponent = props.PanelHeadingComponent,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["PanelHeadingComponent", "children"]);

  return React.createElement(PanelHeadingComponent, rest, children);
}
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(PanelHeading, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};