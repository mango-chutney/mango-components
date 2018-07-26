import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled from 'styled-components';
import { palette, fontWeights } from './constants';
export var defaultStyleProps = {
  color: palette.darkGray,
  fontWeight: fontWeights.semibold
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var ButtonComponent = styled.button.withConfig({
    componentId: "s1pmszcx-0"
  })(["background-color:#f0f3f8;border-radius:0.25rem;border:0;color:", ";cursor:pointer;display:", ";font-family:inherit;font-weight:", ";margin-bottom:1rem;padding:0.65rem 1.25rem;text-align:center;text-decoration:none;width:", ";"], styleProps.color, function (_ref) {
    var expanded = _ref.expanded;
    return expanded ? 'block' : 'inline-block';
  }, styleProps.fontWeight, function (_ref2) {
    var expanded = _ref2.expanded;
    return expanded ? '100%' : 'auto';
  });
  return {
    ButtonComponent: ButtonComponent
  };
};
export function Button(props) {
  var children = props.children,
      onClick = props.onClick,
      ButtonComponent = props.ButtonComponent,
      rest = _objectWithoutPropertiesLoose(props, ["children", "onClick", "ButtonComponent"]);

  return React.createElement(ButtonComponent, _extends({
    onClick: onClick
  }, rest), children);
}
Button.defaultProps = {
  expanded: false
};
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Button, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};