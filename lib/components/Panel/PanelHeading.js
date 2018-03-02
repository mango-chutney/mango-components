"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelHeading = PanelHeading;
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/es6.object.assign");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var defaultStyleProps = {
  background: "linear-gradient(\n    ".concat(_constants.palette.lightGray, " 0%,\n    ").concat(String((0, _polished.darken)(0.04, _constants.palette.lightGray)), " 100%\n  )"),
  borderBottom: _constants.globalBorder,
  color: _constants.palette.black,
  fontSize: (0, _polished.rem)(16),
  fontWeight: _constants.fontWeights.semibold,
  radius: _constants.globalRadius
};
exports.defaultStyleProps = defaultStyleProps;

var createStyledComponents = function createStyledComponents(styleProps) {
  var PanelHeadingComponent =
  /*#__PURE__*/
  _styledComponents.default.div.withConfig({
    componentId: "pd47w6-0"
  })(["background:", ";border-radius:", " ", " 0 0;border-bottom:", ";margin:-2rem -2rem 2rem;padding:1rem 2rem;color:", ";font-weight:", ";font-size:", ";overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;+ .panel-section{margin-top:-2rem;}"], styleProps.background, styleProps.radius, styleProps.radius, styleProps.borderBottom, styleProps.color, styleProps.fontWeight, styleProps.fontSize);

  return {
    PanelHeadingComponent: PanelHeadingComponent
  };
};

exports.createStyledComponents = createStyledComponents;

function PanelHeading(props) {
  var PanelHeadingComponent = props.PanelHeadingComponent,
      children = props.children,
      rest = _objectWithoutProperties(props, ["PanelHeadingComponent", "children"]);

  return React.createElement(PanelHeadingComponent, rest, children);
}

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(PanelHeading, _extends({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;