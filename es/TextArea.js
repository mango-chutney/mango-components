import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.function.name";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled from 'styled-components';
import { rem, transparentize } from 'polished';
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
  var TextAreaComponent = styled.textarea.withConfig({
    componentId: "orybjj-0"
  })(["appearance:none;background-color:", ";border-color:", ";border-radius:0.25rem;border-style:solid;border-width:0.05rem;color:", ";display:block;font-family:", ";margin-bottom:1rem;outline:0;padding:1.25rem 1rem;transition:border-color 300ms ease;width:100%;::placeholder{color:", ";}:active,:focus{border-color:", ";}"], styleProps.backgroundColor, styleProps.borderColor, styleProps.color, styleProps.fontFamily, styleProps.placeholderColor, styleProps.activeBorderColor);
  var LabelComponent = styled.span.withConfig({
    componentId: "orybjj-1"
  })(["font-size:", ";font-weight:", ";display:block;"], styleProps.fontSize, styleProps.fontWeight);
  return {
    TextAreaComponent: TextAreaComponent,
    LabelComponent: LabelComponent
  };
};
export function Input(_ref) {
  var TextAreaComponent = _ref.TextAreaComponent,
      LabelComponent = _ref.LabelComponent,
      input = _ref.input,
      meta = _ref.meta,
      label = _ref.label,
      rest = _objectWithoutPropertiesLoose(_ref, ["TextAreaComponent", "LabelComponent", "input", "meta", "label"]);

  return React.createElement("label", {
    htmlFor: rest.id || input && input.name
  }, label && React.createElement(LabelComponent, null, label), React.createElement("span", null, React.createElement(TextAreaComponent, _extends({}, input, rest, {
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