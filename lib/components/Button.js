'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = exports.buttonThemeMixin = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    ', ';\n  '], ['\n    ', ';\n  ']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var buttonThemeMixin = exports.buttonThemeMixin = function buttonThemeMixin(props, palette) {
  if ([props.primary, props.secondary, props.tertiary, props.gray].filter(function (isTruthy) {
    return isTruthy;
  }).length > 1) {
    throw Error('...');
  }

  if (props.primary) {
    return (0, _styledComponents.css)(['background-color:', ';'], palette && palette.primary || _constants.palette.primary);
  }

  if (props.secondary) {
    return (0, _styledComponents.css)(['background-color:', ';'], palette && palette.secondary || _constants.palette.secondary);
  }

  if (props.tertiary) {
    return (0, _styledComponents.css)(['background-color:', ';'], palette && palette.tertiary || _constants.palette.tertiary);
  }

  if (props.gray) {
    return (0, _styledComponents.css)(['background-color:#f0f3f8;color:', ';border:1px solid ', ';'], _constants.palette.darkGray, _constants.palette.border);
  }
};

var StyledButton = exports.StyledButton = _styledComponents2.default.a.withConfig({
  componentId: 's1db2ox4-0'
})(['background-color:', ';border:0;border-radius:0.25rem;color:', ';cursor:pointer;display:', ';font-weight:', ';margin-bottom:1rem;padding:0.5rem 1.25rem;text-decoration:none;text-align:center;'], _constants.palette.darkGray, _constants.palette.white, function (props) {
  return props.expanded ? 'block' : 'inline-block';
}, _constants.fontWeights.semibold);

exports.default = function (_ref) {
  var styles = _ref.styles,
      palette = _ref.palette;

  // grab custom palette if needed
  var ExtendedStyledButton = StyledButton.extend(_templateObject, function (props) {
    return buttonThemeMixin(props, palette);
  });

  if (styles && styles.a) {
    ExtendedStyledButton = ExtendedStyledButton.extend([styles.a]);
  }

  return function Button(props) {
    var children = props.children,
        onClick = props.onClick,
        rest = _objectWithoutProperties(props, ['children', 'onClick']);

    return React.createElement(
      ExtendedStyledButton,
      _extends({ onClick: onClick }, rest),
      children
    );
  };
};