'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Panel = Panel;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultStyleProps = exports.defaultStyleProps = {
  background: _constants.palette.white,
  border: _constants.globalBorder,
  radius: _constants.globalRadius
};

var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var PanelComponent = _styledComponents2.default.div.withConfig({
    componentId: 'mt5uwh-0'
  })(['background:', ';margin:0 0 1rem;padding:2rem;border:', ';border-radius:', ';overflow:hidden;> .panel-section{:last-child{margin-bottom:-2rem;}}'], styleProps.background, styleProps.border, styleProps.radius);

  return { PanelComponent: PanelComponent };
};

function Panel(props) {
  var PanelComponent = props.PanelComponent,
      children = props.children,
      rest = _objectWithoutProperties(props, ['PanelComponent', 'children']);

  return React.createElement(
    PanelComponent,
    rest,
    children
  );
}

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Panel, _extends({}, props, defaultStyledComponents));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};