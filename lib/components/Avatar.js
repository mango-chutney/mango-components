'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Avatar = Avatar;

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
  backgroundColor: '#00b4ff',
  fontWeight: _constants.fontWeights.semibold
};

var colorBackgrounds = ['#00d161', '#00b4ff', '#ff3add', '#ffca00', '#8151f3', '#ff7741'];

function selectColor(namespace) {
  var hash = 0;

  for (var i = 0; i < namespace.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash |= 0; // Convert to 32bit integer
  }

  return colorBackgrounds[Math.abs(hash) % colorBackgrounds.length];
}

var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var AvatarComponent = _styledComponents2.default.div.withConfig({
    componentId: 's1rab4up-0'
  })(['background-color:', ';background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:50%;height:', ';width:', ';line-height:', ';text-align:center;color:', ';font-weight:', ';text-transform:uppercase;font-size:', ';'], styleProps.backgroundColor, function (props) {
    return props.size;
  }, function (props) {
    return props.size;
  }, function (props) {
    return props.size;
  }, _constants.palette.white, _constants.fontWeights.semibold, function (props) {
    return props.fontSize;
  });

  return { AvatarComponent: AvatarComponent };
};

function Avatar(props) {
  var children = props.children,
      name = props.name,
      backgroundColor = props.backgroundColor,
      backgroundImage = props.backgroundImage,
      AvatarComponent = props.AvatarComponent,
      rest = _objectWithoutProperties(props, ['children', 'name', 'backgroundColor', 'backgroundImage', 'AvatarComponent']);

  return React.createElement(
    AvatarComponent,
    _extends({
      backgroundColor: backgroundColor,
      style: {
        backgroundColor: name && selectColor(name),
        backgroundImage: backgroundImage && 'url(' + backgroundImage + ')'
      }
    }, rest),
    !backgroundImage && name && name.charAt(0) || children
  );
}

Avatar.defaultProps = {
  size: (0, _polished.rem)(46),
  fontSize: (0, _polished.rem)(18)
};

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Avatar, _extends({}, props, defaultStyledComponents));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};