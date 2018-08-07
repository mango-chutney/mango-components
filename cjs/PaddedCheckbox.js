"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/es6.object.freeze");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var React = _interopRequireWildcard(require("react"));

var _polished = require("polished");

var _Checkbox = require("./Checkbox");

var _constants = require("./constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    :checked + label {\n      transition: all 300ms ease;\n      background: ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 2rem;\n    display: inline-block;\n    font-size: ", ";\n    background: ", ";\n    border-radius: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseComponents = (0, _Checkbox.createStyledComponents)(_Checkbox.defaultStyleProps);

var defaultStyleProps = _objectSpread({}, _Checkbox.defaultStyleProps, {
  CheckboxContainerComponent: baseComponents.CheckboxContainerComponent,
  InputComponent: baseComponents.InputComponent,
  InputDecoratorComponent: baseComponents.InputDecoratorComponent,
  WrapperComponent: baseComponents.WrapperComponent
});

exports.defaultStyleProps = defaultStyleProps;

var createStyledComponents = function createStyledComponents(styleProps) {
  var CheckboxContainerComponent = styleProps.CheckboxContainerComponent,
      InputComponent = styleProps.InputComponent,
      InputDecoratorComponent = styleProps.InputDecoratorComponent,
      LabelComponent = styleProps.LabelComponent,
      WrapperComponent = styleProps.WrapperComponent;
  var StyledWrapperComponent = WrapperComponent.extend(_templateObject(), (0, _polished.rem)(24), (0, _polished.transparentize)(0.5, _constants.palette.border), (0, _polished.rem)(4));
  var StyledInputComponent = InputComponent.extend(_templateObject2(), function (_ref) {
    var checkboxColor = _ref.checkboxColor;
    return checkboxColor ? (0, _polished.transparentize)(0.8, checkboxColor) : (0, _polished.transparentize)(0.8, styleProps.checkboxColor);
  });
  return {
    CheckboxContainerComponent: CheckboxContainerComponent,
    InputComponent: StyledInputComponent,
    InputDecoratorComponent: InputDecoratorComponent,
    LabelComponent: LabelComponent,
    WrapperComponent: StyledWrapperComponent
  };
};

exports.createStyledComponents = createStyledComponents;

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(_Checkbox.Checkbox, _objectSpread({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;