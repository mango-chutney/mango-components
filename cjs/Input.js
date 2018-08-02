"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = Input;
exports.default = exports.createComponent = exports.remapLabelProps = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _constants = require("./constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultStyleProps = {
  activeBorderColor: _constants.palette.black,
  backgroundColor: _constants.palette.lightGray,
  borderColor: _constants.palette.border,
  color: _constants.palette.black,
  fontFamily: _constants.fontStack,
  fontSize: (0, _polished.rem)(14),
  fontWeight: _constants.fontWeights.semibold,
  placeholderColor: String((0, _polished.transparentize)(0.2, _constants.palette.darkGray))
};
exports.defaultStyleProps = defaultStyleProps;

var createStyledComponents = function createStyledComponents(styleProps) {
  var InputComponent = _styledComponents.default.input.withConfig({
    componentId: "ga0twe-0"
  })(["appearance:none;background-color:", ";border-color:", ";border-radius:4px;border-style:solid;border-width:1px;color:", ";display:block;font-family:", ";height:2.6rem;margin-bottom:1rem;outline:0;padding:0.5rem 1rem;transition:border-color 300ms ease;width:100%;::placeholder{color:", ";}:active,:focus{border-color:", ";}", ";", ";"], styleProps.backgroundColor, styleProps.borderColor, styleProps.color, styleProps.fontFamily, styleProps.placeholderColor, styleProps.activeBorderColor, function (_ref) {
    var invalid = _ref.invalid;
    return invalid && (0, _styledComponents.css)(["border-color:", ";::placeholder{color:", ";}"], _constants.palette.alert, _constants.palette.alert);
  }, function (_ref2) {
    var disabled = _ref2.disabled;
    return disabled && (0, _styledComponents.css)(["background-color:", ";color:", ";cursor:not-allowed;::placeholder{color:", ";}"], (0, _polished.darken)(0.05, styleProps.backgroundColor), (0, _polished.darken)(0.05, styleProps.color), (0, _polished.darken)(0.05, styleProps.placeholderColor));
  });

  var InputDecoratorComponent = _styledComponents.default.span.withConfig({
    componentId: "ga0twe-1"
  })(["display:block;"]);

  var LabelComponent = _styledComponents.default.label.withConfig({
    componentId: "ga0twe-2"
  })(["font-size:", ";font-weight:", ";display:block;", ";"], styleProps.fontSize, styleProps.fontWeight, function (_ref3) {
    var invalid = _ref3.invalid;
    return invalid && (0, _styledComponents.css)(["color:", ";"], _constants.palette.alert);
  });

  return {
    InputComponent: InputComponent,
    InputDecoratorComponent: InputDecoratorComponent,
    LabelComponent: LabelComponent
  };
};

exports.createStyledComponents = createStyledComponents;

var remapLabelProps = function remapLabelProps(label, extraProps) {
  if (!label) {
    return _objectSpread({
      children: null
    }, extraProps);
  }

  if (typeof label === 'string') {
    return _objectSpread({}, extraProps, {
      children: label
    });
  }

  return _objectSpread({}, label, extraProps);
};

exports.remapLabelProps = remapLabelProps;

function Input(_ref4) {
  var InputComponent = _ref4.InputComponent,
      InputDecoratorComponent = _ref4.InputDecoratorComponent,
      LabelComponent = _ref4.LabelComponent,
      children = _ref4.children,
      disabled = _ref4.disabled,
      id = _ref4.id,
      input = _ref4.input,
      label = _ref4.label,
      meta = _ref4.meta,
      rest = _objectWithoutProperties(_ref4, ["InputComponent", "InputDecoratorComponent", "LabelComponent", "children", "disabled", "id", "input", "label", "meta"]);

  var invalid = meta.invalid;

  var _remapLabelProps = remapLabelProps(label, {
    htmlFor: label && label.htmlFor || id || input && input.name,
    invalid: invalid,
    disabled: disabled
  }),
      labelChild = _remapLabelProps.children,
      labelProps = _objectWithoutProperties(_remapLabelProps, ["children"]);

  return React.createElement(LabelComponent, labelProps, labelChild, React.createElement(InputDecoratorComponent, null, React.createElement(InputComponent, _objectSpread({}, input, rest, {
    id: id || input && input.name,
    invalid: invalid,
    disabled: disabled
  })), children));
}

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Input, _objectSpread({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;