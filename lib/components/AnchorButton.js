'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAnchorButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    ', ';\n  '], ['\n    ', ';\n  ']);

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

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledAnchorButton = exports.StyledAnchorButton = _Button.StyledButton.withComponent('a');

exports.default = function (_ref) {
  var styles = _ref.styles,
      palette = _ref.palette;

  // grab custom palette if needed
  var ExtendedStyledAnchorButton = StyledAnchorButton.extend(_templateObject, function (props) {
    return (0, _Button.buttonThemeMixin)(props, palette);
  });

  if (styles && styles.a) {
    ExtendedStyledAnchorButton = ExtendedStyledAnchorButton.extend([styles.a]);
  }

  return function AnchorButton(props) {
    var children = props.children,
        href = props.href,
        rest = _objectWithoutProperties(props, ['children', 'href']);

    return React.createElement(
      ExtendedStyledAnchorButton,
      _extends({ href: props.href }, rest),
      children
    );
  };
};