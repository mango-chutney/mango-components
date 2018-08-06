"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = Select;
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.freeze");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _tristicons = _interopRequireDefault(require("tristicons"));

var _constants = require("./constants");

var _Input = require("./Input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    &::after {\n      content: ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
  })(["appearance:none;background-color:", ";background-image:linear-gradient( ", ",", " );border-color:", ";border-radius:0.25rem;border-style:solid;border-width:0.05rem;color:", ";display:block;font-family:", ";height:2.6rem;margin-bottom:1rem;outline:0;padding:0.5rem 1rem;transition:border-color 300ms ease;width:100%;::-ms-expand{display:none;}:active,:focus{border-color:", ";}option{width:100%;}", ";", ";"], styleProps.backgroundColor, _constants.palette.white, styleProps.backgroundColor, styleProps.borderColor, styleProps.color, styleProps.fontFamily, styleProps.activeBorderColor, function (_ref) {
    var _ref$meta = _ref.meta,
        error = _ref$meta.error,
        touched = _ref$meta.touched;
    return error && touched && (0, _styledComponents.css)(["border-color:", ";"], _constants.palette.alert);
  }, function (_ref2) {
    var disabled = _ref2.disabled;
    return disabled && (0, _styledComponents.css)(["background-color:", ";background-image:linear-gradient( ", ",", " );color:", ";cursor:not-allowed;"], (0, _polished.darken)(0.05, styleProps.backgroundColor), (0, _polished.darken)(0.05, _constants.palette.white), (0, _polished.darken)(0.05, styleProps.backgroundColor), (0, _polished.darken)(0.05, styleProps.color));
  });

  var _createStyledInputCom = (0, _Input.createStyledComponents)(_Input.defaultStyleProps),
      LabelComponent = _createStyledInputCom.LabelComponent,
      BaseInputDecoratorComponent = _createStyledInputCom.InputDecoratorComponent;

  var InputDecoratorComponent = BaseInputDecoratorComponent.extend(_templateObject(), "\"".concat(_tristicons.default['chevron-down'], "\""));
  return {
    SelectComponent: SelectComponent,
    InputDecoratorComponent: InputDecoratorComponent,
    LabelComponent: LabelComponent
  };
};

exports.createStyledComponents = createStyledComponents;

function Select(props) {
  var SelectComponent = props.SelectComponent,
      InputDecoratorComponent = props.InputDecoratorComponent,
      LabelComponent = props.LabelComponent,
      label = props.label,
      selectChildren = props.children,
      rest = _objectWithoutProperties(props, ["SelectComponent", "InputDecoratorComponent", "LabelComponent", "label", "children"]);

  var _createLabelProps = (0, _Input.createLabelProps)(label, rest),
      labelChildren = _createLabelProps.children,
      labelProps = _objectWithoutProperties(_createLabelProps, ["children"]);

  return React.createElement(LabelComponent, labelProps, labelChildren, React.createElement(InputDecoratorComponent, (0, _Input.createInputDecoratorProps)(rest), React.createElement(SelectComponent, (0, _Input.createFormControlElementProps)(rest), selectChildren)));
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