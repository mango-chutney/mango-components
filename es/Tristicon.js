import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import tristicons from 'tristicons';
import { woff } from 'tristicons/dist/json/base64-woff.json';
export var defaultStyleProps = {
  color: 'inherit'
};

function getTristiconContent(iconName) {
  return tristicons[iconName];
}

export var createFontFace = function createFontFace() {
  return css(["@font-face{font-family:tristicons;font-style:normal;font-weight:normal;src:url(data:application/x-font-woff;charset=utf-8;base64,", ");}"], woff);
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var TristiconComponent = styled.i.withConfig({
    componentId: "n99u6v-0"
  })(["&::before{content:\"", "\";display:inline-block;font:normal normal normal ", " tristicons;font-size:", ";text-rendering:auto;vertical-align:inherit;}"], function (_ref) {
    var icon = _ref.icon;
    return icon ? getTristiconContent(icon) : '';
  }, rem(14), function (_ref2) {
    var fontSize = _ref2.fontSize;
    return fontSize || 'inherit';
  });
  return {
    TristiconComponent: TristiconComponent
  };
};
export function Tristicon(props) {
  var children = props.children,
      icon = props.icon,
      TristiconComponent = props.TristiconComponent,
      rest = _objectWithoutPropertiesLoose(props, ["children", "icon", "TristiconComponent"]);

  return React.createElement(TristiconComponent, _extends({
    icon: icon
  }, rest), children);
}
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Tristicon, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};