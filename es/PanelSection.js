import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { palette } from './constants';
export var defaultStyleProps = {
  borderBottomColor: palette.border
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var PanelSectionComponent = styled.div.withConfig({
    componentId: "s1mov63-0"
  })(["margin:0 -2rem;padding:1.5rem 2rem;border-bottom:1px solid ", ";:first-child{margin-top:-2rem;}:last-child{border-bottom:0;}"], styleProps.borderBottomColor);
  return {
    PanelSectionComponent: PanelSectionComponent
  };
};
export function Panel(props) {
  var PanelSectionComponent = props.PanelSectionComponent,
      className = props.className,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["PanelSectionComponent", "className", "children"]);

  return React.createElement(PanelSectionComponent, _extends({
    className: classNames('panel-section', className)
  }, rest), children);
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