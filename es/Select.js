import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.function.name";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, transparentize, darken } from 'polished';
import tristicons from 'tristicons';
import { palette, fontWeights, fontStack } from './constants';
export var defaultStyleProps = {
  backgroundColor: palette.lightGray,
  borderColor: palette.border,
  color: palette.black,
  fontFamily: fontStack,
  placeholderColor: String(transparentize(0.2, palette.darkGray)),
  activeBorderColor: palette.black,
  fontSize: rem(14),
  fontWeight: fontWeights.semibold
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var SelectComponent = styled.select.withConfig({
    componentId: "s4vmyyd-0"
  })(["appearance:none;background-color:", ";background-image:linear-gradient( ", ",", " );border-color:", ";border-radius:0.25rem;border-style:solid;border-width:0.05rem;color:", ";display:block;font-family:", ";height:2.6rem;margin-bottom:1rem;outline:0;padding:0.5rem 1rem;transition:border-color 300ms ease;width:100%;::-ms-expand{display:none;}:active,:focus{border-color:", ";}option{width:100%;}", ";", ";"], styleProps.backgroundColor, palette.white, styleProps.backgroundColor, styleProps.borderColor, styleProps.color, styleProps.fontFamily, styleProps.activeBorderColor, function (_ref) {
    var invalid = _ref.invalid;
    return invalid && css(["border-color:", ";"], palette.alert);
  }, function (_ref2) {
    var disabled = _ref2.disabled;
    return disabled && css(["background-color:", ";background-image:linear-gradient( ", ",", " );color:", ";cursor:not-allowed;"], darken(0.05, styleProps.backgroundColor), darken(0.05, palette.white), darken(0.05, styleProps.backgroundColor), darken(0.05, styleProps.color));
  });
  var LabelComponent = styled.span.withConfig({
    componentId: "s4vmyyd-1"
  })(["font-size:", ";font-weight:", ";display:block;", ";"], styleProps.fontSize, styleProps.fontWeight, function (_ref3) {
    var invalid = _ref3.invalid;
    return invalid && css(["color:", ";"], palette.alert);
  });
  var SelectContainerComponent = styled.div.withConfig({
    componentId: "s4vmyyd-2"
  })(["position:relative;&::after{content:", ";color:", ";font:normal normal normal ", " tristicons;line-height:1rem;position:absolute;right:1rem;top:0.75rem;}"], "\"" + tristicons['chevron-down'] + "\"", styleProps.placeholderColor, rem(14));
  return {
    SelectComponent: SelectComponent,
    SelectContainerComponent: SelectContainerComponent,
    LabelComponent: LabelComponent
  };
};
export function Select(_ref4) {
  var SelectComponent = _ref4.SelectComponent,
      SelectContainerComponent = _ref4.SelectContainerComponent,
      LabelComponent = _ref4.LabelComponent,
      children = _ref4.children,
      input = _ref4.input,
      label = _ref4.label,
      meta = _ref4.meta,
      invalid = _ref4.invalid,
      disabled = _ref4.disabled,
      rest = _objectWithoutPropertiesLoose(_ref4, ["SelectComponent", "SelectContainerComponent", "LabelComponent", "children", "input", "label", "meta", "invalid", "disabled"]);

  return React.createElement("label", {
    htmlFor: rest.id || input && input.name
  }, label && React.createElement(LabelComponent, {
    invalid: invalid
  }, label), React.createElement(SelectContainerComponent, null, React.createElement(SelectComponent, _extends({}, input, rest, {
    invalid: invalid,
    disabled: disabled,
    id: rest.id || input && input.name
  }), children)));
}
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Select, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};