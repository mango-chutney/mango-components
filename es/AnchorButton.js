import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { createStyledComponents as createStyledButtonComponents, defaultStyleProps } from './Button';
export function AnchorButton(props) {
  var children = props.children,
      href = props.href,
      AnchorButtonComponent = props.AnchorButtonComponent,
      rest = _objectWithoutPropertiesLoose(props, ["children", "href", "AnchorButtonComponent"]);

  return React.createElement(AnchorButtonComponent, _extends({
    href: href
  }, rest), children);
}
export { defaultStyleProps };
export var createStyledComponents = function createStyledComponents(styleProps) {
  var AnchorButtonComponent = createStyledButtonComponents(defaultStyleProps).ButtonComponent.withComponent('a');
  return {
    AnchorButtonComponent: AnchorButtonComponent
  };
};
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(AnchorButton, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};