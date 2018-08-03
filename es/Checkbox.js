import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    display: inline-block;\n    margin-left: 1rem;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, darken } from 'polished';
import { palette } from './constants';
import { createFormControlElementProps, createInputDecoratorProps, createLabelProps, createStyledComponents as createStyledInputComponents, defaultStyleProps as defaultInputStyleProps } from './Input';
export var defaultStyleProps = {
  checkboxSize: 20,
  checkboxColor: palette.primary
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var _createStyledInputCom = createStyledInputComponents(defaultInputStyleProps),
      InputLabelComponent = _createStyledInputCom.LabelComponent;

  var LabelComponent = InputLabelComponent.extend(_templateObject());
  var WrapperComponent = styled.div.withConfig({
    componentId: "s156yctp-0"
  })(["margin:1rem 0;"]);
  var CheckboxContainerComponent = styled.div.withConfig({
    componentId: "s156yctp-1"
  })(["position:relative;margin:0;height:", ";width:", ";display:inline-block;"], rem(styleProps.checkboxSize), rem(styleProps.checkboxSize));
  var InputDecoratorComponent = styled.div.withConfig({
    componentId: "s156yctp-2"
  })(["cursor:pointer;display:inline-block;min-height:", ";line-height:", ";position:relative;border:1px solid transparent;display:block;&::before,&::after{width:", ";height:", ";cursor:pointer;content:'';display:inline-block;border-radius:4px;vertical-align:middle;}&::before{border:1px solid ", ";background:", ";margin-right:1rem;", ";", ";}&::after{position:absolute;left:0;border:1px solid transparent;line-height:", ";margin-top:", ";text-align:center;transform:scale(0);}"], rem(styleProps.checkboxSize), rem(styleProps.checkboxSize), rem(styleProps.checkboxSize), rem(styleProps.checkboxSize), palette.border, palette.lightGray, function (_ref) {
    var error = _ref.error,
        touched = _ref.touched;
    return error && touched && css(["border-color:", ";"], palette.alert);
  }, function (_ref2) {
    var disabled = _ref2.disabled;
    return disabled && css(["background-color:", ";cursor:not-allowed;"], darken(0.05, palette.lightGray));
  }, rem(styleProps.checkboxSize), rem(styleProps.checkboxSize * 0.1));
  var InputComponent = styled.input.withConfig({
    componentId: "s156yctp-3"
  })(["width:100%;height:100%;position:absolute;padding:0;margin:0;top:0;left:0;z-index:9001;opacity:0;&[disabled]{cursor:not-allowed;}:checked + ", "{&::before,&::after{top:0;left:0;}&::before{background:", ";border-color:", ";transition:background-color 0.3s;}&::after{content:'';background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCcgd2lkdGg9JzE2LjUnIGhlaWdodD0nMTUnIHZpZXdCb3g9JzAgMCAxNi41IDE1Jz48cGF0aCBmaWxsPScjZmZmJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi41MTUsMS4wNzEgQzE2LjM5OSwwLjgyNyAxNS45MTQsLTAuMDMwIDE1LjUxNSwwLjAwMSBDMTQuMjg5LDAuNzY1IDEyLjY5MywyLjM1NCAxMS42MzgsMy4zNjIgQzkuNTI4LDUuMzc4IDcuNTAzLDcuNDg2IDUuNTA4LDkuNjI0IEwxLjUxNiw1Ljg5NyBMMC4wMDUsNy40ODYgQzIuMjAwLDkuODM3IDQuNTY3LDEyLjM3MyA2LjUwNSwxNS4wMDAgQzguOTg2LDEwLjYzMiAxMy4wMzUsNC4zNzAgMTYuNTE1LDEuMDcxIEwxNi41MTUsMS4wNzEgWicvPjwvc3ZnPg==');background-position:50% 40%;background-repeat:no-repeat;background-size:70%;transition:all 0.25s;transform:scale(1);}}"], InputDecoratorComponent, styleProps.checkboxColor, darken(0.05, styleProps.checkboxColor));
  return {
    CheckboxContainerComponent: CheckboxContainerComponent,
    InputDecoratorComponent: InputDecoratorComponent,
    LabelComponent: LabelComponent,
    InputComponent: InputComponent,
    WrapperComponent: WrapperComponent
  };
};
export function Checkbox(props) {
  var InputDecoratorComponent = props.InputDecoratorComponent,
      CheckboxContainerComponent = props.CheckboxContainerComponent,
      InputComponent = props.InputComponent,
      LabelComponent = props.LabelComponent,
      WrapperComponent = props.WrapperComponent,
      label = props.label,
      value = props.value,
      rest = _objectWithoutPropertiesLoose(props, ["InputDecoratorComponent", "CheckboxContainerComponent", "InputComponent", "LabelComponent", "WrapperComponent", "label", "value"]);

  var _createLabelProps = createLabelProps(label, rest),
      children = _createLabelProps.children,
      labelProps = _objectWithoutPropertiesLoose(_createLabelProps, ["children"]);

  return React.createElement(WrapperComponent, null, React.createElement(CheckboxContainerComponent, null, React.createElement(InputComponent, createFormControlElementProps(rest, {
    type: 'checkbox',
    checked: value
  })), React.createElement(InputDecoratorComponent, createInputDecoratorProps(rest))), React.createElement(LabelComponent, labelProps, children));
}
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