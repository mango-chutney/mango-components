import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, transparentize, darken } from 'polished';
import { palette, fontWeights, fontStack } from './constants';
import { createFormControlElementProps, createInputDecoratorProps, createLabelProps, createStyledComponents as createStyledInputComponents, defaultStyleProps as defaultInputStyleProps } from './Input';
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
  var _createStyledInputCom = createStyledInputComponents(defaultInputStyleProps),
      InputDecoratorComponent = _createStyledInputCom.InputDecoratorComponent,
      LabelComponent = _createStyledInputCom.LabelComponent;

  var TextAreaComponent = styled.textarea.withConfig({
    componentId: "orybjj-0"
  })(["resize:vertical;appearance:none;background-color:", ";border-color:", ";border-radius:0.25rem;border-style:solid;border-width:0.05rem;color:", ";display:block;font-family:", ";margin-bottom:1rem;outline:0;padding:1.25rem 1rem;transition:border-color 300ms ease;width:100%;::placeholder{color:", ";}:active,:focus{border-color:", ";}", ";", ";"], styleProps.backgroundColor, styleProps.borderColor, styleProps.color, styleProps.fontFamily, styleProps.placeholderColor, styleProps.activeBorderColor, function (_ref) {
    var _ref$meta = _ref.meta,
        error = _ref$meta.error,
        touched = _ref$meta.touched;
    return error && touched && css(["border-color:", ";::placeholder{color:", ";}"], palette.alert, palette.alert);
  }, function (_ref2) {
    var disabled = _ref2.disabled;
    return disabled && css(["background-color:", ";color:", ";cursor:not-allowed;::placeholder{color:", ";}"], darken(0.05, styleProps.backgroundColor), darken(0.05, styleProps.color), darken(0.05, styleProps.placeholderColor));
  });
  return {
    InputDecoratorComponent: InputDecoratorComponent,
    LabelComponent: LabelComponent,
    TextAreaComponent: TextAreaComponent
  };
};
export function TextArea(props) {
  var InputDecoratorComponent = props.InputDecoratorComponent,
      LabelComponent = props.LabelComponent,
      TextAreaComponent = props.TextAreaComponent,
      label = props.label,
      inputDecoratorChildren = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["InputDecoratorComponent", "LabelComponent", "TextAreaComponent", "label", "children"]);

  var _createLabelProps = createLabelProps(label, rest),
      labelChildren = _createLabelProps.children,
      labelProps = _objectWithoutPropertiesLoose(_createLabelProps, ["children"]);

  return React.createElement(LabelComponent, labelProps, labelChildren, React.createElement(InputDecoratorComponent, createInputDecoratorProps(rest), React.createElement(TextAreaComponent, createFormControlElementProps(rest)), inputDecoratorChildren));
}
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(TextArea, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};