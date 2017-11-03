'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _MangoChutneyLogoPaths = require('./MangoChutneyLogoPaths.json');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MangoChutneyPath = _MangoChutneyLogoPaths.mango_chutney.join(' ');
var MadeWithPath = _MangoChutneyLogoPaths.made_with.join(' ');

var MangoChutneyLogo = function MangoChutneyLogo(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill,
      rest = _objectWithoutProperties(_ref, ['width', 'height', 'fill']);

  return React.createElement(
    'svg',
    _extends({
      width: width,
      height: height,
      viewBox: '0 0 ' + width + ' ' + height
    }, rest),
    React.createElement(
      'g',
      { fill: fill, fillRule: 'evenodd' },
      React.createElement(
        'g',
        { opacity: 0.75 },
        React.createElement('path', { d: MangoChutneyPath })
      ),
      React.createElement(
        'g',
        { opacity: 0.2 },
        React.createElement('path', { d: MadeWithPath })
      )
    )
  );
};

MangoChutneyLogo.defaultProps = {
  width: 180,
  height: 15,
  fill: '#222C3C'
};

exports.default = MangoChutneyLogo;