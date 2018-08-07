import "core-js/modules/es6.object.assign";

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n    :checked + label {\n      transition: all 300ms ease;\n      background: ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    padding: 2rem;\n    display: inline-block;\n    font-size: ", ";\n    background: ", ";\n    border-radius: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import * as React from 'react';
import { rem, transparentize } from 'polished';
import { defaultStyleProps as defaultCheckboxStyleProps, createStyledComponents as createStyledCheckboxComponents, Checkbox } from './Checkbox';
import { palette } from './constants';
var baseComponents = createStyledCheckboxComponents(defaultCheckboxStyleProps);
export var defaultStyleProps = Object.assign({}, defaultCheckboxStyleProps, {
  CheckboxContainerComponent: baseComponents.CheckboxContainerComponent,
  InputComponent: baseComponents.InputComponent,
  InputDecoratorComponent: baseComponents.InputDecoratorComponent,
  WrapperComponent: baseComponents.WrapperComponent
});
export var createStyledComponents = function createStyledComponents(styleProps) {
  var CheckboxContainerComponent = styleProps.CheckboxContainerComponent,
      InputComponent = styleProps.InputComponent,
      InputDecoratorComponent = styleProps.InputDecoratorComponent,
      LabelComponent = styleProps.LabelComponent,
      WrapperComponent = styleProps.WrapperComponent;
  var StyledWrapperComponent = WrapperComponent.extend(_templateObject(), rem(24), transparentize(0.5, palette.border), rem(4));
  var StyledInputComponent = InputComponent.extend(_templateObject2(), function (_ref) {
    var checkboxColor = _ref.checkboxColor;
    return checkboxColor ? transparentize(0.8, checkboxColor) : transparentize(0.8, styleProps.checkboxColor);
  });
  return {
    CheckboxContainerComponent: CheckboxContainerComponent,
    InputComponent: StyledInputComponent,
    InputDecoratorComponent: InputDecoratorComponent,
    LabelComponent: LabelComponent,
    WrapperComponent: StyledWrapperComponent
  };
};
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Checkbox, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};