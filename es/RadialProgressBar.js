import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';
import { palette } from './constants';
var dashArray = 251;
var defaultStrokeWidthScale = 7;
var defaultSize = 50;

var strokeAnimation = function strokeAnimation(strokeDashoffset) {
  return keyframes(["0%{stroke-dashoffset:", ";}100%{stroke-dashoffset:", ";}"], dashArray, strokeDashoffset);
};

export var defaultStyleProps = {
  background: palette.white
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var WrapperComponent = styled.div.withConfig({
    componentId: "s1mgoo75-0"
  })(["height:", ";position:relative;width:", ";"], function (_ref) {
    var width = _ref.width;
    return width ? rem(width) : rem(defaultSize);
  }, function (_ref2) {
    var width = _ref2.width;
    return width ? rem(width) : rem(defaultSize);
  });
  var ContainerComponent = styled.div.withConfig({
    componentId: "s1mgoo75-1"
  })(["height:100%;transform-origin:center;transform:rotateZ(-90deg);width:100%;svg{overflow:visible;}circle{transition:stroke-dashoffset 0.5s linear;}"]);
  var BackgroundCircleComponent = styled.circle.withConfig({
    componentId: "s1mgoo75-2"
  })(["stroke:", ";"], palette.border);
  var ProgressCircleComponent = styled.circle.withConfig({
    componentId: "s1mgoo75-3"
  })(["stroke:", ";animation:", ";"], function (_ref3) {
    var backgroundColor = _ref3.backgroundColor;
    return backgroundColor || palette.primary;
  }, function (_ref4) {
    var strokeDashoffset = _ref4.strokeDashoffset;
    return strokeAnimation(strokeDashoffset) + " 0.5s normal forwards";
  });
  return {
    WrapperComponent: WrapperComponent,
    ContainerComponent: ContainerComponent,
    BackgroundCircleComponent: BackgroundCircleComponent,
    ProgressCircleComponent: ProgressCircleComponent
  };
};
export function RadialProgressBar(props) {
  var backgroundColor = props.backgroundColor,
      percentage = props.percentage,
      strokeLinecap = props.strokeLinecap,
      strokeWidthScale = props.strokeWidthScale,
      width = props.width,
      WrapperComponent = props.WrapperComponent,
      ContainerComponent = props.ContainerComponent,
      BackgroundCircleComponent = props.BackgroundCircleComponent,
      ProgressCircleComponent = props.ProgressCircleComponent,
      rest = _objectWithoutPropertiesLoose(props, ["backgroundColor", "percentage", "strokeLinecap", "strokeWidthScale", "width", "WrapperComponent", "ContainerComponent", "BackgroundCircleComponent", "ProgressCircleComponent"]);

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
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(RadialProgressBar, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};