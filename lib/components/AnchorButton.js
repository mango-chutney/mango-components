'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.AnchorButton = AnchorButton;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _constants = require('./constants');

var _Button = require('./Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function AnchorButton(props) {
  var children = props.children,
      href = props.href,
      AnchorButtonComponent = props.AnchorButtonComponent,
      rest = _objectWithoutProperties(props, ['children', 'href', 'AnchorButtonComponent']);

  return React.createElement(
    AnchorButtonComponent,
    _extends({ href: props.href }, rest),
    children
  );
}

exports.defaultStyleProps = _Button.defaultStyleProps;
var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var AnchorButtonComponent = (0, _Button.createStyledComponents)(_Button.defaultStyleProps).ButtonComponent.withComponent('a');

  return { AnchorButtonComponent: AnchorButtonComponent };
};

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(_Button.defaultStyleProps);
  return function (props) {
    return React.createElement(AnchorButton, _extends({}, props, defaultStyledComponents));
  };
};

exports.default = {
  defaultStyleProps: _Button.defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};