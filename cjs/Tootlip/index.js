"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnmanagedTootlip = UnmanagedTootlip;
exports.ManagedTootlip = ManagedTootlip;
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = exports.placements = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var React = _interopRequireWildcard(require("react"));

var _reactPortal = require("react-portal");

var _reactPopper = require("react-popper");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _popper = _interopRequireDefault(require("popper.js"));

var _ParentNodePopperManager = _interopRequireDefault(require("./ParentNodePopperManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var placements = _popper.default.placements.map(function (placement) {
  return _defineProperty({}, placement, placement);
}).reduce(function (prev, next) {
  return _objectSpread({}, prev, next);
}, {});

exports.placements = placements;

function UnmanagedTootlip(props) {
  var ArrowComponent = props.ArrowComponent,
      PopperComponent = props.PopperComponent,
      children = props.children,
      clickable = props.clickable,
      visible = props.visible,
      rest = _objectWithoutProperties(props, ["ArrowComponent", "PopperComponent", "children", "clickable", "visible"]);

  return React.createElement(_reactPortal.Portal, null, React.createElement(PopperComponent, _objectSpread({
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

function ManagedTootlip(props) {
  return React.createElement(_ParentNodePopperManager.default, {
    tag: "span"
  }, React.createElement(UnmanagedTootlip, props));
}

var defaultStyleProps = {
  backgroundColor: '#222',
  color: '#fff',
  fontSize: '13px',
  maxWidth: '300px',
  minWidth: '150px',
  padding: '8px 21px',
  radius: '5px',
  transition: 'opacity 300ms ease-in'
};
exports.defaultStyleProps = defaultStyleProps;

var createStyledComponents = function createStyledComponents(styleProps) {
  var PopperComponent = (0, _styledComponents.default)(function (_ref2) {
    var visible = _ref2.visible,
        clickable = _ref2.clickable,
        rest = _objectWithoutProperties(_ref2, ["visible", "clickable"]);

    return React.createElement(_reactPopper.Popper, rest);
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

  var ArrowComponent = (0, _styledComponents.default)(function (_ref5) {
    var visible = _ref5.visible,
        rest = _objectWithoutProperties(_ref5, ["visible"]);

    return React.createElement(_reactPopper.Arrow, rest);
  }).withConfig({
    componentId: "hwdic4-1"
  })(["", " &{width:0;height:0;border-style:solid;position:absolute;margin:", ";}", "[data-placement^='top'] &{border-width:", " ", " 0 ", ";border-color:", " transparent transparent transparent;bottom:-", ";left:calc(50% - ", ");margin-top:0;margin-bottom:0;}", "[data-placement^='bottom'] &{border-width:0 ", " ", " ", ";border-color:transparent transparent ", " transparent;top:-", ";left:calc(50% - ", ");margin-top:0;margin-bottom:0;}", "[data-placement^='right'] &{border-width:", " ", " ", " 0;border-color:transparent ", " transparent transparent;left:-", ";top:calc(50% - ", ");margin-left:0;margin-right:0;}", "[data-placement^='left'] &{border-width:", " 0 ", " ", ";border-color:transparent transparent transparent ", ";right:-", ";top:calc(50% - ", ");margin-left:0;margin-right:0;}"], PopperComponent, styleProps.radius, PopperComponent, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.backgroundColor, styleProps.radius, styleProps.radius, PopperComponent, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.backgroundColor, styleProps.radius, styleProps.radius, PopperComponent, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.backgroundColor, styleProps.radius, styleProps.radius, PopperComponent, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.backgroundColor, styleProps.radius, styleProps.radius);
  return {
    PopperComponent: PopperComponent,
    ArrowComponent: ArrowComponent
  };
};

exports.createStyledComponents = createStyledComponents;

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(ManagedTootlip, _objectSpread({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent,
  placements: placements
};
exports.default = _default;