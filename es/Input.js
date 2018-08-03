import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.function.name";
import "core-js/modules/es6.object.assign";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, transparentize, darken } from 'polished';
import invariant from 'invariant';
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
    var error = _ref.error,
        touched = _ref.touched;
    return error && touched && css(["border-color:", ";::placeholder{color:", ";}"], palette.alert, palette.alert);
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
    var error = _ref3.error,
        touched = _ref3.touched;
    return error && touched && css(["color:", ";"], palette.alert);
  });
  return {
    InputComponent: InputComponent,
    InputDecoratorComponent: InputDecoratorComponent,
    LabelComponent: LabelComponent
  };
};

var createLabelObject = function createLabelObject(label) {
  if (!label) {
    return {};
  }

  if (typeof label === 'string') {
    return {
      children: label
    };
  }

  return Object.assign({}, label);
};

export var createInputIdAttribute = function createInputIdAttribute(_ref4) {
  var id = _ref4.id,
      input = _ref4.input;

  if (id) {
    return id;
  }

  if (input && typeof input === 'object' && typeof input.name === 'string') {
    return input.name;
  }

  return invariant(false, "Couldn't find or infer 'id' attribute for input element");
};

var createLabelForAttribute = function createLabelForAttribute(props) {
  var id = props.id,
      label = props.label;

  if (label && typeof label === 'object' && typeof label.htmlFor === 'string') {
    return label.htmlFor;
  }

  if (id) {
    return id;
  }

  return createInputIdAttribute(props);
};

export var createLabelProps = function createLabelProps(label, props) {
  var meta = props.meta,
      input = props.input,
      custom = props.custom,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["meta", "input", "custom", "children"]);

  var labelProps = createLabelObject(label);
  return Object.assign({}, meta, rest, labelProps, {
    children: children || labelProps.children || undefined,
    htmlFor: createLabelForAttribute(props)
  });
};
export var createFormControlElementProps = function createFormControlElementProps(props, extraProps) {
  var children = props.children,
      label = props.label,
      meta = props.meta,
      input = props.input,
      rest = _objectWithoutPropertiesLoose(props, ["children", "label", "meta", "input"]);

  return Object.assign({}, input, meta, rest, extraProps, {
    id: createInputIdAttribute(props)
  });
};
export function Input(props) {
  var InputComponent = props.InputComponent,
      InputDecoratorComponent = props.InputDecoratorComponent,
      LabelComponent = props.LabelComponent,
      label = props.label,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["InputComponent", "InputDecoratorComponent", "LabelComponent", "label", "children"]);

  var _createLabelProps = createLabelProps(label, rest),
      labelChildren = _createLabelProps.children,
      labelProps = _objectWithoutPropertiesLoose(_createLabelProps, ["children"]);

  return React.createElement(LabelComponent, labelProps, labelChildren, React.createElement(InputDecoratorComponent, null, React.createElement(InputComponent, createFormControlElementProps(rest)), children));
}
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps); // This is a class in order to statisfy react-day-picker.
  // https://github.com/gpbl/react-day-picker/issues/748
  // eslint-disable-next-line react/prefer-stateless-function

  var ComposedInput =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ComposedInput, _React$Component);

    function ComposedInput() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = ComposedInput.prototype;

    _proto.render = function render() {
      return React.createElement(Input, Object.assign({}, defaultStyledComponents, this.props));
    };

    return ComposedInput;
  }(React.Component);

  return ComposedInput;
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};