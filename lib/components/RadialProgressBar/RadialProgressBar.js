"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadialProgressBar = RadialProgressBar;
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/es6.object.assign");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _constants = require("../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var dashArray = 251;
var defaultStrokeWidthScale = 7;
var defaultSize = 50;

var strokeAnimation = function strokeAnimation(strokeDashoffset) {
  return (0, _styledComponents.keyframes)(["0%{stroke-dashoffset:", ";}100%{stroke-dashoffset:", ";}"], dashArray, strokeDashoffset);
};

var defaultStyleProps = {
  background: _constants.palette.white
};
exports.defaultStyleProps = defaultStyleProps;

var createStyledComponents = function createStyledComponents(styleProps) {
  var WrapperComponent =
  /*#__PURE__*/
  _styledComponents.default.div.withConfig({
    componentId: "s1soksjt-0"
  })(["height:", ";position:relative;width:", ";"], function (props) {
    return props.width ? (0, _polished.rem)(props.width) : (0, _polished.rem)(defaultSize);
  }, function (props) {
    return props.width ? (0, _polished.rem)(props.width) : (0, _polished.rem)(defaultSize);
  });

  var ContainerComponent =
  /*#__PURE__*/
  _styledComponents.default.div.withConfig({
    componentId: "s1soksjt-1"
  })(["height:100%;transform-origin:center;transform:rotateZ(-90deg);width:100%;svg{overflow:visible;}circle{transition:stroke-dashoffset 0.5s linear;}"]);

  var BackgroundCircleComponent =
  /*#__PURE__*/
  _styledComponents.default.circle.withConfig({
    componentId: "s1soksjt-2"
  })(["stroke:", ";"], _constants.palette.border);

  var ProgressCircleComponent =
  /*#__PURE__*/
  _styledComponents.default.circle.withConfig({
    componentId: "s1soksjt-3"
  })(["stroke:", ";animation:", ";"], function (props) {
    return props.backgroundColor || _constants.palette.primary;
  }, function (props) {
    return "".concat(strokeAnimation(props.strokeDashoffset), " 0.5s normal forwards");
  });

  return {
    WrapperComponent: WrapperComponent,
    ContainerComponent: ContainerComponent,
    BackgroundCircleComponent: BackgroundCircleComponent,
    ProgressCircleComponent: ProgressCircleComponent
  };
};

exports.createStyledComponents = createStyledComponents;

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
      rest = _objectWithoutProperties(props, ["backgroundColor", "percentage", "strokeLinecap", "strokeWidthScale", "width", "WrapperComponent", "ContainerComponent", "BackgroundCircleComponent", "ProgressCircleComponent", "children"]);

  var percentageToDashoffset = percentage ? percentage >= 100 && '0' || percentage < 0 && dashArray - dashArray * 0.01 || dashArray - dashArray * percentage / 100 : dashArray - dashArray * 0.01;
  var strokeWidth = defaultSize / (width ? width * 0.9 : defaultSize) * (strokeWidthScale || defaultStrokeWidthScale);
  return React.createElement(WrapperComponent, _extends({
    width: width
  }, rest), React.createElement(ContainerComponent, null, React.createElement("svg", {
    height: "100%",
    width: "100%",
    viewBox: "0 0 100 100"
  }, React.createElement(BackgroundCircleComponent, {
    cx: 50,
    cy: 50,
    fill: "none",
    r: 40,
    strokeWidth: strokeWidth
  }), React.createElement(ProgressCircleComponent, {
    backgroundColor: backgroundColor,
    cx: 50,
    cy: 50,
    fill: "none",
    r: 40,
    strokeDasharray: dashArray,
    strokeDashoffset: percentageToDashoffset,
    strokeLinecap: strokeLinecap,
    strokeWidth: strokeWidth
  }))));
}

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(RadialProgressBar, _extends({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;