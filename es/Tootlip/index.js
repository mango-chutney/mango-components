import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Portal } from 'react-portal';
import { Arrow, Popper } from 'react-popper';
import styled from 'styled-components';
import PopperJS from 'popper.js';
import ParentNodePopperManager from './ParentNodePopperManager';
export var placements = PopperJS.placements.map(function (placement) {
  var _ref;

  return _ref = {}, _ref[placement] = placement, _ref;
}).reduce(function (prev, next) {
  return Object.assign({}, prev, next);
}, {});
export function UnmanagedTootlip(props) {
  var ArrowComponent = props.ArrowComponent,
      PopperComponent = props.PopperComponent,
      children = props.children,
      clickable = props.clickable,
      visible = props.visible,
      rest = _objectWithoutPropertiesLoose(props, ["ArrowComponent", "PopperComponent", "children", "clickable", "visible"]);

  return React.createElement(Portal, null, React.createElement(PopperComponent, Object.assign({
    clickable: clickable,
    visible: visible
  }, rest), children, React.createElement(ArrowComponent, {
    visible: visible
  })));
}
UnmanagedTootlip.defaultProps = {
  clickable: false,
  placement: placements.auto
};
export function ManagedTootlip(props) {
  return React.createElement(ParentNodePopperManager, {
    tag: "span"
  }, React.createElement(UnmanagedTootlip, props));
}
export var defaultStyleProps = {
  backgroundColor: '#222',
  color: '#fff',
  fontSize: '13px',
  maxWidth: '300px',
  minWidth: '150px',
  padding: '8px 21px',
  radius: '5px',
  transition: 'opacity 300ms ease-in'
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var PopperComponent = styled(function (_ref2) {
    var visible = _ref2.visible,
        clickable = _ref2.clickable,
        rest = _objectWithoutPropertiesLoose(_ref2, ["visible", "clickable"]);

    return React.createElement(Popper, rest);
  }).withConfig({
    componentId: "hwdic4-0"
  })(["color:", ";background-color:", ";border-radius:", ";cursor:help;display:inline-block;font-size:", ";min-width:", ";padding:", ";pointer-events:", ";position:absolute;text-align:center;transition:", ";opacity:", ";max-width:", ";&[data-placement^='top']{margin-bottom:", ";}&[data-placement^='bottom']{margin-top:", ";}&[data-placement^='right']{margin-left:", ";}&[data-placement^='left']{margin-right:", ";}"], styleProps.color, styleProps.backgroundColor, styleProps.radius, styleProps.fontSize, styleProps.minWidth, styleProps.padding, function (_ref3) {
    var clickable = _ref3.clickable;
    return clickable ? 'auto' : 'none';
  }, styleProps.transition, function (_ref4) {
    var visible = _ref4.visible;
    return visible ? 0.9 : 0;
  }, styleProps.maxWidth, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.radius); // prettier insists on adding a space between
  // `${PopperComponent}[data-placement^='left']` like `${PopperComponent}
  // [data-placement^='left']`, which causes flow to complain
  // prettier-ignore

  var ArrowComponent = styled(function (_ref5) {
    var visible = _ref5.visible,
        rest = _objectWithoutPropertiesLoose(_ref5, ["visible"]);

    return React.createElement(Arrow, rest);
  }).withConfig({
    componentId: "hwdic4-1"
  })(["", " &{width:0;height:0;border-style:solid;position:absolute;margin:", ";}", "[data-placement^='top'] &{border-width:", " ", " 0 ", ";border-color:", " transparent transparent transparent;bottom:-", ";left:calc(50% - ", ");margin-top:0;margin-bottom:0;}", "[data-placement^='bottom'] &{border-width:0 ", " ", " ", ";border-color:transparent transparent ", " transparent;top:-", ";left:calc(50% - ", ");margin-top:0;margin-bottom:0;}", "[data-placement^='right'] &{border-width:", " ", " ", " 0;border-color:transparent ", " transparent transparent;left:-", ";top:calc(50% - ", ");margin-left:0;margin-right:0;}", "[data-placement^='left'] &{border-width:", " 0 ", " ", ";border-color:transparent transparent transparent ", ";right:-", ";top:calc(50% - ", ");margin-left:0;margin-right:0;}"], PopperComponent, styleProps.radius, PopperComponent, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.backgroundColor, styleProps.radius, styleProps.radius, PopperComponent, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.backgroundColor, styleProps.radius, styleProps.radius, PopperComponent, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.backgroundColor, styleProps.radius, styleProps.radius, PopperComponent, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.backgroundColor, styleProps.radius, styleProps.radius);
  return {
    PopperComponent: PopperComponent,
    ArrowComponent: ArrowComponent
  };
};
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(ManagedTootlip, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent,
  placements: placements
};