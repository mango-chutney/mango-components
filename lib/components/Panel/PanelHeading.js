'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.PanelHeading = PanelHeading;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultStyleProps = exports.defaultStyleProps = {
  background: 'linear-gradient(\n    ' + _constants.palette.lightGray + ' 0%,\n    ' + String((0, _polished.darken)(0.04, _constants.palette.lightGray)) + ' 100%\n  )',
  borderBottom: _constants.globalBorder,
  color: _constants.palette.black,
  fontSize: (0, _polished.rem)(16),
  fontWeight: _constants.fontWeights.semibold,
  radius: _constants.globalRadius
};

var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var PanelHeadingComponent = _styledComponents2.default.div.withConfig({
    componentId: 's11b2wmi-0'
  })(['background:', ';border-radius:', ' ', ' 0 0;border-bottom:', ';margin:-2rem -2rem 2rem;padding:1rem 2rem;color:', ';font-weight:', ';font-size:', ';overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;+ .panel-section{margin-top:-2rem;}'], styleProps.background, styleProps.radius, styleProps.radius, styleProps.borderBottom, styleProps.color, styleProps.fontWeight, styleProps.fontSize);

  return { PanelHeadingComponent: PanelHeadingComponent };
};

function PanelHeading(props) {
  var PanelHeadingComponent = props.PanelHeadingComponent,
      children = props.children,
      rest = _objectWithoutProperties(props, ['PanelHeadingComponent', 'children']);

  return React.createElement(
    PanelHeadingComponent,
    rest,
    children
  );
}

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(PanelHeading, _extends({}, defaultStyledComponents, props));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};