import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    &::after {\n      content: ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, transparentize, darken } from 'polished';
import tristicons from 'tristicons';
import { palette, fontWeights, fontStack } from './constants';
import { createFormControlElementProps, createInputDecoratorProps, createLabelProps, createStyledComponents as createStyledInputComponents, defaultStyleProps as defaultInputStyleProps } from './Input';
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
    var _ref$meta = _ref.meta,
        error = _ref$meta.error,
        touched = _ref$meta.touched;
    return error && touched && css(["border-color:", ";"], palette.alert);
  }, function (_ref2) {
    var disabled = _ref2.disabled;
    return disabled && css(["background-color:", ";background-image:linear-gradient( ", ",", " );color:", ";cursor:not-allowed;"], darken(0.05, styleProps.backgroundColor), darken(0.05, palette.white), darken(0.05, styleProps.backgroundColor), darken(0.05, styleProps.color));
  });

  var _createStyledInputCom = createStyledInputComponents(defaultInputStyleProps),
      LabelComponent = _createStyledInputCom.LabelComponent,
      BaseInputDecoratorComponent = _createStyledInputCom.InputDecoratorComponent;

  var InputDecoratorComponent = BaseInputDecoratorComponent.extend(_templateObject(), "\"" + tristicons['chevron-down'] + "\"");
  return {
    SelectComponent: SelectComponent,
    InputDecoratorComponent: InputDecoratorComponent,
    LabelComponent: LabelComponent
  };
};
export function Select(props) {
  var SelectComponent = props.SelectComponent,
      InputDecoratorComponent = props.InputDecoratorComponent,
      LabelComponent = props.LabelComponent,
      label = props.label,
      selectChildren = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["SelectComponent", "InputDecoratorComponent", "LabelComponent", "label", "children"]);

  var _createLabelProps = createLabelProps(label, rest),
      labelChildren = _createLabelProps.children,
      labelProps = _objectWithoutPropertiesLoose(_createLabelProps, ["children"]);

  return React.createElement(LabelComponent, labelProps, labelChildren, React.createElement(InputDecoratorComponent, createInputDecoratorProps(rest), React.createElement(SelectComponent, createFormControlElementProps(rest), selectChildren)));
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