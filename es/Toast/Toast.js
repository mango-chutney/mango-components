import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rem } from 'polished';
import { palette } from '../constants';
import { transitionStates } from './ToastProvider';
export var animations = {
  enter: keyframes(["0%{transform:translateY(-100%);opacity:0;}85%{opacity:0.5;}100%{opacity:1;transform:translateY(0%);}"]),
  exit: keyframes(["0%{opacity:1;}50%{color:transparent;opacity:0;}100%{padding:0 1rem;height:0;margin:0;opacity:0;}"])
};
export var defaultStyleProps = {
  color: 'inherit',
  animations: animations
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var ToastComponent = styled.button.withConfig({
    componentId: "s3rftr-0"
  })(["animation:", " 0.15s ease-out normal forwards;background:#fff;border-radius:", ";box-shadow:0 0.25rem 0.5rem rgba(0,0,0,0.2);cursor:pointer;display:inline-block;margin:0.25rem;overflow:hidden;padding:0.5rem 1rem;pointer-events:all;user-select:none;transition:all 15ms ease;", ";", ";", ";", ";"], animations.enter, rem(4), function (_ref) {
    var transitionState = _ref.transitionState;
    return transitionState === transitionStates.EXITING && css(["animation:", " 0.3s ease-out normal forwards;"], animations.exit);
  }, function (_ref2) {
    var alert = _ref2.alert;
    return alert && css(["background:", ";color:white;"], palette.alert);
  }, function (_ref3) {
    var success = _ref3.success;
    return success && css(["background:", ";color:white;"], palette.success);
  }, function (_ref4) {
    var inactive = _ref4.inactive;
    return inactive && css(["background:", ";color:white;"], palette.inactive);
  });
  return {
    ToastComponent: ToastComponent
  };
};
export var Toast = function Toast(props) {
  var children = props.children,
      ToastComponent = props.ToastComponent,
      transitionState = props.transitionState,
      rest = _objectWithoutPropertiesLoose(props, ["children", "ToastComponent", "transitionState"]);

  return React.createElement(ToastComponent, Object.assign({}, rest, {
    transitionState: transitionState
  }), children);
};
export var createComponent = function createComponent() {
  var _createStyledComponen = createStyledComponents(defaultStyleProps),
      ToastComponent = _createStyledComponen.ToastComponent;

  return function (props) {
    return React.createElement(Toast, Object.assign({
      ToastComponent: ToastComponent
    }, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};