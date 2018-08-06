"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = TextArea;
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.freeze");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _constants = require("./constants");

var _Input = require("./Input");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          &::after {\n            display: none;\n          }\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    resize: vertical;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultStyleProps = {
  shouldDisplayInputDecorator: false
};
exports.defaultStyleProps = defaultStyleProps;

var createStyledComponents = function createStyledComponents(styleProps) {
  var _createStyledInputCom = (0, _Input.createStyledComponents)(_Input.defaultStyleProps),
      InputComponent = _createStyledInputCom.InputComponent,
      InputDecoratorComponent = _createStyledInputCom.InputDecoratorComponent,
      LabelComponent = _createStyledInputCom.LabelComponent;

  var TextAreaComponent = InputComponent.withComponent('textarea').extend(_templateObject());
  return {
    InputDecoratorComponent: styleProps.shouldDisplayInputDecorator ? InputDecoratorComponent : InputDecoratorComponent.extend(_templateObject2()),
    LabelComponent: LabelComponent,
    TextAreaComponent: TextAreaComponent
  };
};

exports.createStyledComponents = createStyledComponents;

function TextArea(props) {
  var InputDecoratorComponent = props.InputDecoratorComponent,
      LabelComponent = props.LabelComponent,
      TextAreaComponent = props.TextAreaComponent,
      label = props.label,
      inputDecoratorChildren = props.children,
      rest = _objectWithoutProperties(props, ["InputDecoratorComponent", "LabelComponent", "TextAreaComponent", "label", "children"]);

  var _createLabelProps = (0, _Input.createLabelProps)(label, rest),
      labelChildren = _createLabelProps.children,
      labelProps = _objectWithoutProperties(_createLabelProps, ["children"]);

  return React.createElement(LabelComponent, labelProps, labelChildren, React.createElement(InputDecoratorComponent, (0, _Input.createInputDecoratorProps)(rest), React.createElement(TextAreaComponent, (0, _Input.createFormControlElementProps)(rest)), inputDecoratorChildren));
}

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(TextArea, _objectSpread({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;