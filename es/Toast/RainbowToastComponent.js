import "core-js/modules/es6.object.assign";

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  /* fallback for old browsers */\n  background: linear-gradient(135deg, ", ");\n  background: url(data:image/svg+xml;base64,", ");\n  background-size: cover;\n  color: white;\n  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import keys from 'lodash/keys';
import pick from 'lodash/pick';
import { btoa } from 'isomorphic-base64';
import RainbowGradient from './RainbowGradient';
import { createStyledComponents as createStyledToastComponents, defaultStyleProps as defaultToastStyleProps } from './Toast';

var _createStyledToastCom = createStyledToastComponents(defaultToastStyleProps),
    ToastComponent = _createStyledToastCom.ToastComponent;

var RainbowToastComponent = ToastComponent.extend(_templateObject(), function (_ref) {
  var colors = _ref.colors;
  return colors.join(', ');
}, function (props) {
  return btoa(renderToStaticMarkup(React.createElement(RainbowGradient, pick(props, keys(RainbowGradient.defaultProps)))));
});
RainbowToastComponent.defaultProps = Object.assign({}, RainbowGradient.defaultProps, ToastComponent.defaultProps);
export default RainbowToastComponent;