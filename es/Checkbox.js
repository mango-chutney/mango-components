import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.function.name";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, darken } from 'polished';
import { palette, fontWeights } from './constants';
export var defaultStyleProps = {
  checkboxSize: 20,
  checkboxColor: palette.primary
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var WrapperComponent = styled.div.withConfig({
    componentId: "s156yctp-0"
  })(["margin:1rem 0;"]);
  var CheckboxContainerComponent = styled.div.withConfig({
    componentId: "s156yctp-1"
  })(["position:relative;margin:0;height:", ";width:", ";display:inline-block;"], rem(styleProps.checkboxSize), rem(styleProps.checkboxSize)); // some label stuff in checkbox to get :checked property

  var CheckboxBackgroundComponent = styled.div.withConfig({
    componentId: "s156yctp-2"
  })(["cursor:pointer;font-weight:", ";display:inline-block;font-size:1rem;", ";min-height:", ";line-height:", ";position:relative;border:1px solid transparent;display:block;&::before,&::after{width:", ";height:", ";cursor:pointer;content:'';display:inline-block;border-radius:4px;vertical-align:middle;}&::before{border:1px solid ", ";background:", ";margin-right:1rem;", ";", ";}&::after{position:absolute;left:0;border:1px solid transparent;line-height:", ";margin-top:", ";text-align:center;transform:scale(0);}"], fontWeights.semibold, function (_ref) {
    var invalid = _ref.invalid;
    return invalid && css(["color:", ";"], palette.alert);
  }, rem(styleProps.checkboxSize), rem(styleProps.checkboxSize), rem(styleProps.checkboxSize), rem(styleProps.checkboxSize), palette.border, palette.lightGray, function (_ref2) {
    var invalid = _ref2.invalid;
    return invalid && css(["border-color:", ";"], palette.alert);
  }, function (_ref3) {
    var disabled = _ref3.disabled;
    return disabled && css(["background-color:", ";cursor:not-allowed;"], darken(0.05, palette.lightGray));
  }, rem(styleProps.checkboxSize), rem(styleProps.checkboxSize * 0.1));
  var InputComponent = styled.input.withConfig({
    componentId: "s156yctp-3"
  })(["width:100%;height:100%;position:absolute;padding:0;margin:0;top:0;left:0;z-index:9001;opacity:0;&[disabled]{cursor:not-allowed;}:checked + ", "{&::before,&::after{top:0;left:0;}&::before{background:", ";border-color:", ";transition:background-color 0.3s;}&::after{content:'';background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCcgd2lkdGg9JzE2LjUnIGhlaWdodD0nMTUnIHZpZXdCb3g9JzAgMCAxNi41IDE1Jz48cGF0aCBmaWxsPScjZmZmJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi41MTUsMS4wNzEgQzE2LjM5OSwwLjgyNyAxNS45MTQsLTAuMDMwIDE1LjUxNSwwLjAwMSBDMTQuMjg5LDAuNzY1IDEyLjY5MywyLjM1NCAxMS42MzgsMy4zNjIgQzkuNTI4LDUuMzc4IDcuNTAzLDcuNDg2IDUuNTA4LDkuNjI0IEwxLjUxNiw1Ljg5NyBMMC4wMDUsNy40ODYgQzIuMjAwLDkuODM3IDQuNTY3LDEyLjM3MyA2LjUwNSwxNS4wMDAgQzguOTg2LDEwLjYzMiAxMy4wMzUsNC4zNzAgMTYuNTE1LDEuMDcxIEwxNi41MTUsMS4wNzEgWicvPjwvc3ZnPg==');background-position:50% 40%;background-repeat:no-repeat;background-size:70%;transition:all 0.25s;transform:scale(1);}}"], CheckboxBackgroundComponent, styleProps.checkboxColor, darken(0.05, styleProps.checkboxColor));
  var LabelComponent = styled.label.withConfig({
    componentId: "s156yctp-4"
  })(["margin-left:1rem;"]);
  return {
    CheckboxContainerComponent: CheckboxContainerComponent,
    CheckboxBackgroundComponent: CheckboxBackgroundComponent,
    LabelComponent: LabelComponent,
    InputComponent: InputComponent,
    WrapperComponent: WrapperComponent
  };
};
export function Checkbox(_ref4) {
  var CheckboxBackgroundComponent = _ref4.CheckboxBackgroundComponent,
      CheckboxContainerComponent = _ref4.CheckboxContainerComponent,
      InputComponent = _ref4.InputComponent,
      LabelComponent = _ref4.LabelComponent,
      WrapperComponent = _ref4.WrapperComponent,
      children = _ref4.children,
      id = _ref4.id,
      _ref4$input = _ref4.input,
      name = _ref4$input.name,
      value = _ref4$input.value,
      inputProps = _objectWithoutPropertiesLoose(_ref4$input, ["name", "value"]),
      label = _ref4.label,
      meta = _ref4.meta,
      invalid = _ref4.invalid,
      disabled = _ref4.disabled,
      rest = _objectWithoutPropertiesLoose(_ref4, ["CheckboxBackgroundComponent", "CheckboxContainerComponent", "InputComponent", "LabelComponent", "WrapperComponent", "children", "id", "input", "label", "meta", "invalid", "disabled"]);

  return React.createElement(WrapperComponent, null, React.createElement(CheckboxContainerComponent, null, React.createElement(InputComponent, Object.assign({}, rest, inputProps, {
    id: id || name,
    name: name,
    checked: value,
    type: 'checkbox',
    invalid: invalid,
    disabled: disabled
  })), React.createElement(CheckboxBackgroundComponent, {
    invalid: invalid,
    disabled: disabled
  })), React.createElement(LabelComponent, {
    htmlFor: id || name
  }, children || label || ''));
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