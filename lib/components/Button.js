'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Button = Button;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultStyleProps = exports.defaultStyleProps = {
  color: _constants.palette.darkGray,
  fontWeight: _constants.fontWeights.semibold
};

var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var ButtonComponent = _styledComponents2.default.button.withConfig({
    componentId: 's1rao6fz-0'
  })(['background-color:#f0f3f8;border-radius:0.25rem;border:0;color:', ';cursor:pointer;display:', ';font-family:inherit;font-weight:', ';margin-bottom:1rem;padding:0.65rem 1.25rem;text-align:center;text-decoration:none;width:', ';'], styleProps.color, function (props) {
    return props.expanded ? 'block' : 'inline-block';
  }, styleProps.fontWeight, function (props) {
    return props.expanded ? '100%' : 'auto';
  });

  return { ButtonComponent: ButtonComponent };
};

function Button(props) {
  var children = props.children,
      onClick = props.onClick,
      ButtonComponent = props.ButtonComponent,
      rest = _objectWithoutProperties(props, ['children', 'onClick', 'ButtonComponent']);

  return React.createElement(
    ButtonComponent,
    _extends({ onClick: onClick }, rest),
    children
  );
}

Button.defaultProps = {
  expanded: false
};

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Button, _extends({}, defaultStyledComponents, props));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};