import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.function.name";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, transparentize, darken } from 'polished';
import { palette, fontWeights, fontStack } from './constants';
export var defaultStyleProps = {
  activeBorderColor: palette.black,
  backgroundColor: palette.lightGray,
  borderColor: palette.border,
  color: palette.black,
  fontFamily: fontStack,
  fontSize: rem(14),
  fontWeight: fontWeights.semibold,
  placeholderColor: String(transparentize(0.2, palette.darkGray))
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
  var InputDecoratorComponent = styled.span.withConfig({
    componentId: "ga0twe-1"
  })(["display:block;"]);
  var LabelComponent = styled.label.withConfig({
    componentId: "ga0twe-2"
  })(["font-size:", ";font-weight:", ";display:block;", ";"], styleProps.fontSize, styleProps.fontWeight, function (_ref3) {
    var invalid = _ref3.invalid;
    return invalid && css(["color:", ";"], palette.alert);
  });
  return {
    InputComponent: InputComponent,
    InputDecoratorComponent: InputDecoratorComponent,
    LabelComponent: LabelComponent
  };
};
export var remapLabelProps = function remapLabelProps(label, extraProps) {
  if (!label) {
    return Object.assign({
      children: null
    }, extraProps);
  }

  if (typeof label === 'string') {
    return Object.assign({}, extraProps, {
      children: label
    });
  }

  return Object.assign({}, label, extraProps);
};
export function Input(_ref4) {
  var InputComponent = _ref4.InputComponent,
      InputDecoratorComponent = _ref4.InputDecoratorComponent,
      LabelComponent = _ref4.LabelComponent,
      children = _ref4.children,
      disabled = _ref4.disabled,
      id = _ref4.id,
      input = _ref4.input,
      label = _ref4.label,
      meta = _ref4.meta,
      rest = _objectWithoutPropertiesLoose(_ref4, ["InputComponent", "InputDecoratorComponent", "LabelComponent", "children", "disabled", "id", "input", "label", "meta"]);

  var invalid = meta.invalid;

  var _remapLabelProps = remapLabelProps(label, {
    htmlFor: label && label.htmlFor || id || input && input.name,
    invalid: invalid,
    disabled: disabled
  }),
      labelChild = _remapLabelProps.children,
      labelProps = _objectWithoutPropertiesLoose(_remapLabelProps, ["children"]);

  return React.createElement(LabelComponent, labelProps, labelChild, React.createElement(InputDecoratorComponent, null, React.createElement(InputComponent, Object.assign({}, input, rest, {
    id: id || input && input.name,
    invalid: invalid,
    disabled: disabled
  })), children));
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