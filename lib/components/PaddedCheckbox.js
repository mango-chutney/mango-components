'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    padding: 2rem;\n    display: inline-block;\n    font-size: ', ';\n    background: ', ';\n    border-radius: ', ';\n  '], ['\n    padding: 2rem;\n    display: inline-block;\n    font-size: ', ';\n    background: ', ';\n    border-radius: ', ';\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    :checked + label {\n      transition: all 300ms ease;\n      background: ', ';\n    }\n  '], ['\n    :checked + label {\n      transition: all 300ms ease;\n      background: ', ';\n    }\n  ']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _polished = require('polished');

var _Checkbox = require('./Checkbox');

var _constants = require('./constants');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultStyleProps = exports.defaultStyleProps = {
  checkboxSize: 40,
  checkboxColor: _constants.palette.primary
};

var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var baseComponents = (0, _Checkbox.createStyledComponents)(_extends({}, defaultStyleProps, styleProps));

  var StyledLabelComponent = baseComponents.LabelComponent.extend(_templateObject, (0, _polished.rem)(24), (0, _polished.transparentize)(0.5, _constants.palette.border), (0, _polished.rem)(4));

  var StyledInputComponent = baseComponents.InputComponent.extend(_templateObject2, function (props) {
    return props.checkboxColor ? (0, _polished.transparentize)(0.8, props.checkboxColor) : (0, _polished.transparentize)(0.8, styleProps.checkboxColor);
  });

  return _extends({}, baseComponents, {
    LabelComponent: StyledLabelComponent,
    InputComponent: StyledInputComponent
  });
};

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(_Checkbox.Checkbox, _extends({}, defaultStyledComponents, props));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};