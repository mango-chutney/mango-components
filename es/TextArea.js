import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n          &::after {\n            display: none;\n          }\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    height: auto;\n    padding: 1.25rem 1rem;\n    resize: vertical;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import * as React from 'react';
import { createFormControlElementProps, createInputDecoratorProps, createLabelProps, createStyledComponents as createStyledInputComponents, defaultStyleProps as defaultInputStyleProps } from './Input';
var defaultStyledInputComponents = createStyledInputComponents(defaultInputStyleProps);
export var defaultStyleProps = {
  InputComponent: defaultStyledInputComponents.InputComponent,
  InputDecoratorComponent: defaultStyledInputComponents.InputDecoratorComponent,
  LabelComponent: defaultStyledInputComponents.LabelComponent,
  shouldDisplayInputDecorator: false
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var InputComponent = styleProps.InputComponent,
      InputDecoratorComponent = styleProps.InputDecoratorComponent,
      LabelComponent = styleProps.LabelComponent;
  var TextAreaComponent = InputComponent.withComponent('textarea').extend(_templateObject());
  return {
    InputDecoratorComponent: styleProps.shouldDisplayInputDecorator ? InputDecoratorComponent : InputDecoratorComponent.extend(_templateObject2()),
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