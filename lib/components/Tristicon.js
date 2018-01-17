'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Tristicon = Tristicon;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _tristicons = require('tristicons');

var _tristicons2 = _interopRequireDefault(_tristicons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultStyleProps = exports.defaultStyleProps = {
  color: 'inherit'
};

function getTristiconContent(iconName) {
  return _tristicons2.default[iconName];
}

var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var TristiconComponent = _styledComponents2.default.i.withConfig({
    componentId: 'jvk03h-0'
  })(['&::before{content:"', '";display:inline-block;font:normal normal normal ', ' tristicons;font-size:', ';text-rendering:auto;vertical-align:inherit;}'], function (props) {
    return props.icon ? getTristiconContent(props.icon) : '';
  }, (0, _polished.rem)(14), function (props) {
    return props.fontSize || 'inherit';
  });

  return { TristiconComponent: TristiconComponent };
};

function Tristicon(props) {
  var children = props.children,
      icon = props.icon,
      TristiconComponent = props.TristiconComponent,
      rest = _objectWithoutProperties(props, ['children', 'icon', 'TristiconComponent']);

  return React.createElement(
    TristiconComponent,
    _extends({ icon: icon }, rest),
    children
  );
}

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Tristicon, _extends({}, defaultStyledComponents, props));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};