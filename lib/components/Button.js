'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// export for AnchorButton
var StyledButton = exports.StyledButton = _styledComponents2.default.button.withConfig({
  componentId: 'oawg0q-0'
})(['background-color:#f0f3f8;border-radius:0.25rem;border:0;color:', ';cursor:pointer;display:', ';font-family:inherit;font-weight:', ';margin-bottom:1rem;padding:0.65rem 1.25rem;text-align:center;text-decoration:none;'], _constants.palette.darkGray, function (props) {
  return props.expanded ? 'block' : 'inline-block';
}, _constants.fontWeights.semibold);

exports.default = function (_ref) {
  var styles = _ref.styles;

  var ExtendedStyledButton = StyledButton;

  if (styles && styles.button) {
    ExtendedStyledButton = ExtendedStyledButton.extend([styles.button]);
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