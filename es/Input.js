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
  var InputComponent = styled.input.withConfig({
    componentId: "ga0twe-0"
  })(["appearance:none;background-color:", ";border-color:", ";border-radius:4px;border-style:solid;border-width:1px;color:", ";display:block;font-family:", ";height:2.6rem;margin-bottom:1rem;outline:0;padding:0.5rem 1rem;transition:border-color 300ms ease;width:100%;::placeholder{color:", ";}:active,:focus{border-color:", ";}", ";", ";"], styleProps.backgroundColor, styleProps.borderColor, styleProps.color, styleProps.fontFamily, styleProps.placeholderColor, styleProps.activeBorderColor, function (_ref) {
    var invalid = _ref.invalid;
    return invalid && css(["border-color:", ";::placeholder{color:", ";}"], palette.alert, palette.alert);
  }, function (_ref2) {
    var disabled = _ref2.disabled;
    return disabled && css(["background-color:", ";color:", ";cursor:not-allowed;::placeholder{color:", ";}"], darken(0.05, styleProps.backgroundColor), darken(0.05, styleProps.color), darken(0.05, styleProps.placeholderColor));
  });
  var LabelComponent = styled.span.withConfig({
    componentId: "ga0twe-1"
  })(["font-size:", ";font-weight:", ";display:block;", ";"], styleProps.fontSize, styleProps.fontWeight, function (_ref3) {
    var invalid = _ref3.invalid;
    return invalid && css(["color:", ";"], palette.alert);
  });
  return {
    InputComponent: InputComponent,
    LabelComponent: LabelComponent
  };
};
export function Input(_ref4) {
  var InputComponent = _ref4.InputComponent,
      LabelComponent = _ref4.LabelComponent,
      input = _ref4.input,
      meta = _ref4.meta,
      label = _ref4.label,
      invalid = _ref4.invalid,
      disabled = _ref4.disabled,
      rest = _objectWithoutPropertiesLoose(_ref4, ["InputComponent", "LabelComponent", "input", "meta", "label", "invalid", "disabled"]);

  return React.createElement("label", {
    htmlFor: rest.id || input && input.name
  }, label && React.createElement(LabelComponent, {
    invalid: invalid,
    disabled: disabled
  }, label), React.createElement("span", null, React.createElement(InputComponent, _extends({}, input, rest, {
    invalid: invalid,
    disabled: disabled,
    id: rest.id || input && input.name
  }))));
}
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Input, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};