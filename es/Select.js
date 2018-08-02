import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, transparentize, darken } from 'polished';
import tristicons from 'tristicons';
import { palette, fontWeights, fontStack } from './constants';
import { createFormControlElementProps, createLabelProps } from './Input';
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
    var error = _ref.error,
        touched = _ref.touched;
    return error && touched && css(["border-color:", ";"], palette.alert);
  }, function (_ref2) {
    var disabled = _ref2.disabled;
    return disabled && css(["background-color:", ";background-image:linear-gradient( ", ",", " );color:", ";cursor:not-allowed;"], darken(0.05, styleProps.backgroundColor), darken(0.05, palette.white), darken(0.05, styleProps.backgroundColor), darken(0.05, styleProps.color));
  });
  var LabelComponent = styled.label.withConfig({
    componentId: "s4vmyyd-1"
  })(["font-size:", ";font-weight:", ";display:block;", ";"], styleProps.fontSize, styleProps.fontWeight, function (_ref3) {
    var error = _ref3.error,
        touched = _ref3.touched;
    return error && touched && css(["color:", ";"], palette.alert);
  });
  var InputDecoratorComponent = styled.span.withConfig({
    componentId: "s4vmyyd-2"
  })(["display:block;position:relative;&::after{content:", ";color:", ";font:normal normal normal ", " tristicons;line-height:1rem;position:absolute;right:1rem;top:0.75rem;}"], "\"" + tristicons['chevron-down'] + "\"", styleProps.placeholderColor, rem(14));
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

  return React.createElement(LabelComponent, labelProps, labelChildren, React.createElement(InputDecoratorComponent, null, React.createElement(SelectComponent, createFormControlElementProps(rest), selectChildren)));
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