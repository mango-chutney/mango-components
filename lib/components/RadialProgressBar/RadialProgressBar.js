'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.RadialProgressBar = RadialProgressBar;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var dashArray = 251;
var defaultStrokeWidthScale = 7;
var defaultSize = 50;

var strokeAnimation = function strokeAnimation(strokeDashoffset) {
  return (0, _styledComponents.keyframes)(['0%{stroke-dashoffset:', ';}100%{stroke-dashoffset:', ';}'], dashArray, strokeDashoffset);
};

var defaultStyleProps = exports.defaultStyleProps = {
  background: _constants.palette.white
};

var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var WrapperComponent = _styledComponents2.default.div.withConfig({
    componentId: 's79l1v4-0'
  })(['height:', ';position:relative;width:', ';'], function (props) {
    return props.width ? (0, _polished.rem)(props.width) : (0, _polished.rem)(defaultSize);
  }, function (props) {
    return props.width ? (0, _polished.rem)(props.width) : (0, _polished.rem)(defaultSize);
  });

  var ContainerComponent = _styledComponents2.default.div.withConfig({
    componentId: 's79l1v4-1'
  })(['height:100%;transform-origin:center;transform:rotateZ(-90deg);width:100%;svg{overflow:visible;}circle{transition:stroke-dashoffset 0.5s linear;}']);

  var BackgroundCircleComponent = _styledComponents2.default.circle.withConfig({
    componentId: 's79l1v4-2'
  })(['stroke:', ';'], _constants.palette.border);

  var ProgressCircleComponent = _styledComponents2.default.circle.withConfig({
    componentId: 's79l1v4-3'
  })(['stroke:', ';animation:', ';'], function (props) {
    return props.backgroundColor || _constants.palette.primary;
  }, function (props) {
    return strokeAnimation(props.strokeDashoffset) + ' 0.5s normal forwards';
  });

  return {
    WrapperComponent: WrapperComponent,
    ContainerComponent: ContainerComponent,
    BackgroundCircleComponent: BackgroundCircleComponent,
    ProgressCircleComponent: ProgressCircleComponent
  };
};

function RadialProgressBar(props) {
  var backgroundColor = props.backgroundColor,
      percentage = props.percentage,
      strokeLinecap = props.strokeLinecap,
      strokeWidthScale = props.strokeWidthScale,
      width = props.width,
      WrapperComponent = props.WrapperComponent,
      ContainerComponent = props.ContainerComponent,
      BackgroundCircleComponent = props.BackgroundCircleComponent,
      ProgressCircleComponent = props.ProgressCircleComponent,
      children = props.children,
      rest = _objectWithoutProperties(props, ['backgroundColor', 'percentage', 'strokeLinecap', 'strokeWidthScale', 'width', 'WrapperComponent', 'ContainerComponent', 'BackgroundCircleComponent', 'ProgressCircleComponent', 'children']);

  var percentageToDashoffset = percentage ? percentage >= 100 && '0' || percentage < 0 && dashArray - dashArray * 0.01 || dashArray - dashArray * percentage / 100 : dashArray - dashArray * 0.01;

  var strokeWidth = defaultSize / (width ? width * 0.9 : defaultSize) * (strokeWidthScale || defaultStrokeWidthScale);

  return React.createElement(
    WrapperComponent,
    _extends({ width: width }, rest),
    React.createElement(
      ContainerComponent,
      null,
      React.createElement(
        'svg',
        { height: '100%', width: '100%', viewBox: '0 0 100 100' },
        React.createElement(BackgroundCircleComponent, {
          cx: 50,
          cy: 50,
          fill: 'none',
          r: 40,
          strokeWidth: strokeWidth
        }),
        React.createElement(ProgressCircleComponent, {
          backgroundColor: backgroundColor,
          cx: 50,
          cy: 50,
          fill: 'none',
          r: 40,
          strokeDasharray: dashArray,
          strokeDashoffset: percentageToDashoffset,
          strokeLinecap: strokeLinecap,
          strokeWidth: strokeWidth
        })
      )
    )
  );
}

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(RadialProgressBar, _extends({}, defaultStyledComponents, props));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};