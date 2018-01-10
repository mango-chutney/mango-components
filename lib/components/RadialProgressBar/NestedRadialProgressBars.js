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
  background: _constants.palette.white
};

var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var NestedRadialProgressBarsComponent = _styledComponents2.default.div.withConfig({
    componentId: 'ji4u3a-0'
  })(['position:relative;> div:first-child{margin:0 auto;}> div:nth-child(n + 2){position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);}']);

  return { NestedRadialProgressBarsComponent: NestedRadialProgressBarsComponent };
};

function Panel(props) {
  var NestedRadialProgressBarsComponent = props.NestedRadialProgressBarsComponent,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, ['NestedRadialProgressBarsComponent', 'className', 'children']);

  return React.createElement(
    NestedRadialProgressBarsComponent,
    rest,
    children
  );
}

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Panel, _extends({}, defaultStyledComponents, props));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};