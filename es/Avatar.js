import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.function.name";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { palette, fontWeights } from './constants';
export var defaultStyleProps = {
  backgroundColor: '#00b4ff',
  fontWeight: fontWeights.semibold
};
var colorBackgrounds = ['#00d161', '#00b4ff', '#ff3add', '#ffca00', '#8151f3', '#ff7741'];

function selectColor(namespace) {
  var hash = 0;

  for (var i = 0; i < namespace.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = (hash << 5) - hash + namespace.charCodeAt(i); // eslint-disable-next-line no-bitwise

    hash |= 0; // Convert to 32bit integer
  }

  return colorBackgrounds[Math.abs(hash) % colorBackgrounds.length];
}

export var createStyledComponents = function createStyledComponents(styleProps) {
  var AvatarComponent = styled.div.withConfig({
    componentId: "s1ykk4fe-0"
  })(["background-color:", ";background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:50%;color:", ";font-size:", ";font-weight:", ";height:", ";line-height:", ";text-align:center;text-transform:uppercase;width:", ";"], styleProps.backgroundColor, palette.white, function (_ref) {
    var fontSize = _ref.fontSize;
    return fontSize;
  }, fontWeights.semibold, function (_ref2) {
    var width = _ref2.width;
    return width;
  }, function (_ref3) {
    var width = _ref3.width;
    return width;
  }, function (_ref4) {
    var width = _ref4.width;
    return width;
  });
  return {
    AvatarComponent: AvatarComponent
  };
};
export function Avatar(props) {
  var AvatarComponent = props.AvatarComponent,
      backgroundColor = props.backgroundColor,
      backgroundImage = props.backgroundImage,
      children = props.children,
      name = props.name,
      style = props.style,
      width = props.width,
      rest = _objectWithoutPropertiesLoose(props, ["AvatarComponent", "backgroundColor", "backgroundImage", "children", "name", "style", "width"]);

  return React.createElement(AvatarComponent, _extends({
    backgroundColor: backgroundColor,
    style: Object.assign({
      backgroundColor: name && selectColor(name),
      backgroundImage: backgroundImage && "url(" + backgroundImage + ")"
    }, style),
    width: width
  }, rest), !backgroundImage && name && name.charAt(0) || children);
}
Avatar.defaultProps = {
  width: rem(46),
  fontSize: rem(18)
};
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Avatar, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};