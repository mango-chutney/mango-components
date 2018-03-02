"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnchorButton = AnchorButton;
Object.defineProperty(exports, "defaultStyleProps", {
  enumerable: true,
  get: function get() {
    return _Button.defaultStyleProps;
  }
});
exports.default = exports.createComponent = exports.createStyledComponents = void 0;

require("core-js/modules/es6.object.assign");

var React = _interopRequireWildcard(require("react"));

var _Button = require("./Button");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AnchorButton(props) {
  var children = props.children,
      href = props.href,
      AnchorButtonComponent = props.AnchorButtonComponent,
      rest = _objectWithoutProperties(props, ["children", "href", "AnchorButtonComponent"]);

  return React.createElement(AnchorButtonComponent, _extends({
    href: props.href
  }, rest), children);
}

var createStyledComponents = function createStyledComponents(styleProps) {
  var AnchorButtonComponent = (0, _Button.createStyledComponents)(_Button.defaultStyleProps).ButtonComponent.withComponent('a');
  return {
    AnchorButtonComponent: AnchorButtonComponent
  };
};

exports.createStyledComponents = createStyledComponents;

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(_Button.defaultStyleProps);
  return function (props) {
    return React.createElement(AnchorButton, _extends({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: _Button.defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;