"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MadeWithMangoChutney = MadeWithMangoChutney;
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _MangoChutneyLogo = _interopRequireDefault(require("./MangoChutneyLogo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultStyleProps = {}; // At the time of writing, `styleProps` wasn't used for anything, but I don't
// want to remove it in case someone uses this to see what arguments
// `createStyledComponents` usually expects.

/* eslint-disable no-unused-vars */

exports.defaultStyleProps = defaultStyleProps;

var createStyledComponents = function createStyledComponents(styleProps) {
  var AnchorComponent = _styledComponents.default.a.withConfig({
    componentId: "s1srkjmy-0"
  })(["width:180px;height:15px;display:inline-block;"]);

  var DivComponent = _styledComponents.default.div.withConfig({
    componentId: "s1srkjmy-1"
  })(["margin:2rem 0;text-align:center;"]);

  return {
    AnchorComponent: AnchorComponent,
    DivComponent: DivComponent
  };
};
/* eslint-enable no-unused-vars */


exports.createStyledComponents = createStyledComponents;

function MadeWithMangoChutney(props) {
  var AnchorComponent = props.AnchorComponent,
      DivComponent = props.DivComponent,
      href = props.href,
      rest = _objectWithoutProperties(props, ["AnchorComponent", "DivComponent", "href"]);

  return React.createElement(DivComponent, null, React.createElement(AnchorComponent, _extends({}, rest, {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer"
  }), React.createElement(_MangoChutneyLogo.default, null)));
}

MadeWithMangoChutney.defaultProps = {
  href: 'http://mangochutney.com.au'
};

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(MadeWithMangoChutney, _objectSpread({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;