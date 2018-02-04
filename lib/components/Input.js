'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Input = Input;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultStyleProps = exports.defaultStyleProps = {
  backgroundColor: _constants.palette.lightGray,
  borderColor: _constants.palette.border,
  color: _constants.palette.black,
  fontFamily: _constants.fontStack,
  placeholderColor: String((0, _polished.transparentize)(0.2, _constants.palette.darkGray)),
  activeBorderColor: _constants.palette.black,
  fontSize: (0, _polished.rem)(14),
  fontWeight: _constants.fontWeights.semibold
};

var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var InputComponent = /*#__PURE__*/_styledComponents2.default.input.withConfig({
    componentId: 's167wyo5-0'
  })(['appearance:none;background-color:', ';border-color:', ';border-radius:4px;border-style:solid;border-width:1px;color:', ';display:block;font-family:', ';height:2.6rem;margin-bottom:1rem;outline:0;padding:0.5rem 1rem;transition:border-color 300ms ease;width:100%;::placeholder{color:', ';}:active,:focus{border-color:', ';}'], styleProps.backgroundColor, styleProps.borderColor, styleProps.color, styleProps.fontFamily, styleProps.placeholderColor, styleProps.activeBorderColor);

  var LabelComponent = /*#__PURE__*/_styledComponents2.default.span.withConfig({
    componentId: 's167wyo5-1'
  })(['font-size:', ';font-weight:', ';display:block;'], styleProps.fontSize, styleProps.fontWeight);

  return { InputComponent: InputComponent, LabelComponent: LabelComponent };
};

function Input(_ref) {
  var InputComponent = _ref.InputComponent,
      LabelComponent = _ref.LabelComponent,
      input = _ref.input,
      meta = _ref.meta,
      label = _ref.label,
      rest = _objectWithoutProperties(_ref, ['InputComponent', 'LabelComponent', 'input', 'meta', 'label']);

  return React.createElement(
    'label',
    { htmlFor: rest.id || input && input.name },
    label && React.createElement(
      LabelComponent,
      null,
      label
    ),
    React.createElement(
      'span',
      null,
      React.createElement(InputComponent, _extends({}, input, rest, {
        id: rest.id || input && input.name
      }))
    )
  );
}

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Input, _extends({}, defaultStyledComponents, props));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};