"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tristicon = Tristicon;
exports.default = exports.createComponent = exports.createStyledComponents = exports.createFontFace = exports.defaultStyleProps = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _tristicons = _interopRequireDefault(require("tristicons"));

var _base64Woff = require("tristicons/dist/json/base64-woff.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultStyleProps = {
  color: 'inherit'
};
exports.defaultStyleProps = defaultStyleProps;

function getTristiconContent(iconName) {
  return _tristicons.default[iconName];
}

var createFontFace = function createFontFace() {
  return (0, _styledComponents.css)(["@font-face{font-family:tristicons;font-style:normal;font-weight:normal;src:url(data:application/x-font-woff;charset=utf-8;base64,", ");}"], _base64Woff.woff);
};

exports.createFontFace = createFontFace;

var createStyledComponents = function createStyledComponents(styleProps) {
  var TristiconComponent = _styledComponents.default.i.withConfig({
    componentId: "n99u6v-0"
  })(["&::before{content:\"", "\";display:inline-block;font:normal normal normal ", " tristicons;font-size:", ";text-rendering:auto;vertical-align:inherit;}"], function (_ref) {
    var icon = _ref.icon;
    return icon ? getTristiconContent(icon) : '';
  }, (0, _polished.rem)(14), function (_ref2) {
    var fontSize = _ref2.fontSize;
    return fontSize || 'inherit';
  });

  return {
    TristiconComponent: TristiconComponent
  };
};

exports.createStyledComponents = createStyledComponents;

function Tristicon(props) {
  var children = props.children,
      icon = props.icon,
      TristiconComponent = props.TristiconComponent,
      rest = _objectWithoutProperties(props, ["children", "icon", "TristiconComponent"]);

  return React.createElement(TristiconComponent, _extends({
    icon: icon
  }, rest), children);
}

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Tristicon, _objectSpread({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;