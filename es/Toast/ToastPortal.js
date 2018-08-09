import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
export var defaultStyleProps = {};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var ToastPortalComponent = styled.div.withConfig({
    componentId: "s1ypsezo-0"
  })(["align-items:center;display:flex;flex-flow:column nowrap;nleft:0;margin:0;pointer-events:none;position:fixed;text-align:center;top:0;width:100%;"]);
  return {
    ToastPortalComponent: ToastPortalComponent
  };
};
export var ToastPortal = function ToastPortal(_ref) {
  var ToastPortalComponent = _ref.ToastPortalComponent,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["ToastPortalComponent", "children"]);

  return React.createElement(Portal, null, React.createElement(ToastPortalComponent, rest, children));
};
export var createComponent = function createComponent() {
  var _createStyledComponen = createStyledComponents(defaultStyleProps),
      ToastPortalComponent = _createStyledComponen.ToastPortalComponent;

  return function (props) {
    return React.createElement(ToastPortal, Object.assign({
      ToastPortalComponent: ToastPortalComponent
    }, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};