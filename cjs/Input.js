"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = Input;
exports.default = exports.createComponent = exports.createInputDecoratorProps = exports.createFormControlElementProps = exports.createLabelProps = exports.createInputIdAttribute = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _invariant = _interopRequireDefault(require("invariant"));

var _tristicons = _interopRequireDefault(require("tristicons"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var tristiconsSpin = (0, _styledComponents.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(359deg);}"]);

var createStyledComponents = function createStyledComponents(styleProps) {
  var InputComponent = _styledComponents.default.input.withConfig({
    componentId: "ga0twe-0"
  })(["appearance:none;background-color:", ";border-color:", ";border-radius:4px;border-style:solid;border-width:1px;color:", ";display:block;font-family:", ";height:2.6rem;margin-bottom:1rem;outline:0;padding:0.5rem 1rem;transition:border-color 300ms ease;width:100%;::placeholder{color:", ";}:active,:focus{border-color:", ";}", ";", ";"], styleProps.backgroundColor, styleProps.borderColor, styleProps.color, styleProps.fontFamily, styleProps.placeholderColor, styleProps.activeBorderColor, function (_ref) {
    var _ref$meta = _ref.meta,
        error = _ref$meta.error,
        touched = _ref$meta.touched;
    return error && touched && (0, _styledComponents.css)(["border-color:", ";::placeholder{color:", ";}"], _constants.palette.alert, _constants.palette.alert);
  }, function (_ref2) {
    var disabled = _ref2.disabled;
    return disabled && (0, _styledComponents.css)(["background-color:", ";color:", ";cursor:not-allowed;::placeholder{color:", ";}"], (0, _polished.darken)(0.05, styleProps.backgroundColor), (0, _polished.darken)(0.05, styleProps.color), (0, _polished.darken)(0.05, styleProps.placeholderColor));
  });

  var InputDecoratorComponent = _styledComponents.default.span.withConfig({
    componentId: "ga0twe-1"
  })(["display:block;position:relative;&::after{content:'';color:", ";font:normal normal normal ", " tristicons;line-height:1rem;position:absolute;right:1rem;top:0.75rem;}", ";", ";"], styleProps.placeholderColor, (0, _polished.rem)(14), function (_ref3) {
    var asyncValidating = _ref3.meta.asyncValidating;
    return asyncValidating && (0, _styledComponents.css)(["::after{animation:", " 2s infinite linear;content:", ";}"], tristiconsSpin, "\"".concat(_tristicons.default.loading, "\""));
  }, function (_ref4) {
    var _ref4$meta = _ref4.meta,
        error = _ref4$meta.error,
        touched = _ref4$meta.touched;
    return error && touched && (0, _styledComponents.css)(["::after{color:", ";content:", ";}"], _constants.palette.alert, "\"".concat(_tristicons.default['cross-circle'], "\""));
  });

  var LabelComponent = _styledComponents.default.label.withConfig({
    componentId: "ga0twe-2"
  })(["font-size:", ";font-weight:", ";display:block;", ";"], styleProps.fontSize, styleProps.fontWeight, function (_ref5) {
    var _ref5$meta = _ref5.meta,
        error = _ref5$meta.error,
        touched = _ref5$meta.touched;
    return error && touched && (0, _styledComponents.css)(["color:", ";"], _constants.palette.alert);
  });

  return {
    InputComponent: InputComponent,
    InputDecoratorComponent: InputDecoratorComponent,
    LabelComponent: LabelComponent
  };
};

exports.createStyledComponents = createStyledComponents;

var createLabelObject = function createLabelObject(label) {
  if (!label) {
    return {};
  }

  if (typeof label === 'string') {
    return {
      children: label
    };
  }

  return _objectSpread({}, label);
};

var createInputIdAttribute = function createInputIdAttribute(_ref6) {
  var id = _ref6.id,
      input = _ref6.input;

  if (id) {
    return id;
  }

  if (input && _typeof(input) === 'object' && typeof input.name === 'string') {
    return input.name;
  }

  return (0, _invariant.default)(false, "Couldn't find or infer 'id' attribute for input element");
};

exports.createInputIdAttribute = createInputIdAttribute;

var createLabelForAttribute = function createLabelForAttribute(props) {
  var id = props.id,
      label = props.label;

  if (label && _typeof(label) === 'object' && typeof label.htmlFor === 'string') {
    return label.htmlFor;
  }

  if (id) {
    return id;
  }

  return createInputIdAttribute(props);
};

var createLabelProps = function createLabelProps(label, props) {
  var meta = props.meta,
      input = props.input,
      custom = props.custom,
      children = props.children,
      rest = _objectWithoutProperties(props, ["meta", "input", "custom", "children"]);

  var labelProps = createLabelObject(label);
  return _objectSpread({}, rest, labelProps, {
    meta: meta,
    children: children || labelProps.children || undefined,
    htmlFor: createLabelForAttribute(props)
  });
};

exports.createLabelProps = createLabelProps;

var createFormControlElementProps = function createFormControlElementProps(props, extraProps) {
  var children = props.children,
      label = props.label,
      meta = props.meta,
      input = props.input,
      rest = _objectWithoutProperties(props, ["children", "label", "meta", "input"]);

  return _objectSpread({}, input, rest, extraProps, {
    meta: meta,
    id: createInputIdAttribute(props)
  });
};

exports.createFormControlElementProps = createFormControlElementProps;

var createInputDecoratorProps = function createInputDecoratorProps(_ref7) {
  var disabled = _ref7.disabled,
      meta = _ref7.meta;
  return {
    disabled: disabled,
    meta: meta
  };
};

exports.createInputDecoratorProps = createInputDecoratorProps;

function Input(props) {
  var InputComponent = props.InputComponent,
      InputDecoratorComponent = props.InputDecoratorComponent,
      LabelComponent = props.LabelComponent,
      label = props.label,
      inputDecoratorChildren = props.children,
      rest = _objectWithoutProperties(props, ["InputComponent", "InputDecoratorComponent", "LabelComponent", "label", "children"]);

  var _createLabelProps = createLabelProps(label, rest),
      labelChildren = _createLabelProps.children,
      labelProps = _objectWithoutProperties(_createLabelProps, ["children"]);

  return React.createElement(LabelComponent, labelProps, labelChildren, React.createElement(InputDecoratorComponent, createInputDecoratorProps(rest), React.createElement(InputComponent, createFormControlElementProps(rest)), inputDecoratorChildren));
}

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps); // This is a class in order to statisfy react-day-picker.
  // https://github.com/gpbl/react-day-picker/issues/748
  // eslint-disable-next-line react/prefer-stateless-function

  var ComposedInput =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ComposedInput, _React$Component);

    function ComposedInput() {
      _classCallCheck(this, ComposedInput);

      return _possibleConstructorReturn(this, _getPrototypeOf(ComposedInput).apply(this, arguments));
    }

    _createClass(ComposedInput, [{
      key: "render",
      value: function render() {
        return React.createElement(Input, _objectSpread({}, defaultStyledComponents, this.props));
      }
    }]);

    return ComposedInput;
  }(React.Component);

  return ComposedInput;
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;