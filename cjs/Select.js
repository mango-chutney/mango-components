"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = Select;
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _tristicons = _interopRequireDefault(require("tristicons"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultStyleProps = {
  backgroundColor: _constants.palette.lightGray,
  borderColor: _constants.palette.border,
  color: _constants.palette.black,
  fontFamily: _constants.fontStack,
  placeholderColor: String((0, _polished.transparentize)(0.2, _constants.palette.darkGray)),
  activeBorderColor: _constants.palette.black,
  fontSize: (0, _polished.rem)(14),
  fontWeight: _constants.fontWeights.semibold
};
exports.defaultStyleProps = defaultStyleProps;

var createStyledComponents = function createStyledComponents(styleProps) {
  var SelectComponent = _styledComponents.default.select.withConfig({
    componentId: "s4vmyyd-0"
  })(["appearance:none;background-color:", ";background-image:linear-gradient( ", ",", " );border-color:", ";border-radius:0.25rem;border-style:solid;border-width:0.05rem;color:", ";display:block;font-family:", ";height:2.6rem;margin-bottom:1rem;outline:0;padding:0.5rem 1rem;transition:border-color 300ms ease;width:100%;::-ms-expand{display:none;}:active,:focus{border-color:", ";}option{width:100%;}", ";"], styleProps.backgroundColor, _constants.palette.white, styleProps.backgroundColor, styleProps.borderColor, styleProps.color, styleProps.fontFamily, styleProps.activeBorderColor, function (_ref) {
    var invalid = _ref.invalid;
    return invalid && (0, _styledComponents.css)(["border-color:", ";"], _constants.palette.alert);
  });

  var LabelComponent = _styledComponents.default.span.withConfig({
    componentId: "s4vmyyd-1"
  })(["font-size:", ";font-weight:", ";display:block;", ";"], styleProps.fontSize, styleProps.fontWeight, function (_ref2) {
    var invalid = _ref2.invalid;
    return invalid && (0, _styledComponents.css)(["color:", ";"], _constants.palette.alert);
  });

  var SelectContainerComponent = _styledComponents.default.div.withConfig({
    componentId: "s4vmyyd-2"
  })(["position:relative;&::after{content:", ";color:", ";font:normal normal normal ", " tristicons;line-height:1rem;position:absolute;right:1rem;top:0.75rem;}"], "\"".concat(_tristicons.default['chevron-down'], "\""), styleProps.placeholderColor, (0, _polished.rem)(14));

  return {
    SelectComponent: SelectComponent,
    SelectContainerComponent: SelectContainerComponent,
    LabelComponent: LabelComponent
  };
};

exports.createStyledComponents = createStyledComponents;

function Select(_ref3) {
  var SelectComponent = _ref3.SelectComponent,
      SelectContainerComponent = _ref3.SelectContainerComponent,
      LabelComponent = _ref3.LabelComponent,
      children = _ref3.children,
      input = _ref3.input,
      label = _ref3.label,
      meta = _ref3.meta,
      invalid = _ref3.invalid,
      rest = _objectWithoutProperties(_ref3, ["SelectComponent", "SelectContainerComponent", "LabelComponent", "children", "input", "label", "meta", "invalid"]);

  return React.createElement("label", {
    htmlFor: rest.id || input && input.name
  }, label && React.createElement(LabelComponent, {
    invalid: invalid
  }, label), React.createElement(SelectContainerComponent, null, React.createElement(SelectComponent, _extends({}, input, rest, {
    invalid: invalid,
    id: rest.id || input && input.name
  }), children)));
}

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Select, _objectSpread({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;