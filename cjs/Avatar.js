"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = Avatar;
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultStyleProps = {
  backgroundColor: '#00b4ff',
  fontWeight: _constants.fontWeights.semibold
};
exports.defaultStyleProps = defaultStyleProps;
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

var createStyledComponents = function createStyledComponents(styleProps) {
  var AvatarComponent = _styledComponents.default.div.withConfig({
    componentId: "s1ykk4fe-0"
  })(["background-color:", ";background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:50%;color:", ";font-size:", ";font-weight:", ";height:", ";line-height:", ";text-align:center;text-transform:uppercase;width:", ";"], styleProps.backgroundColor, _constants.palette.white, function (_ref) {
    var fontSize = _ref.fontSize;
    return fontSize;
  }, _constants.fontWeights.semibold, function (_ref2) {
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

exports.createStyledComponents = createStyledComponents;

function Avatar(props) {
  var AvatarComponent = props.AvatarComponent,
      backgroundColor = props.backgroundColor,
      backgroundImage = props.backgroundImage,
      children = props.children,
      name = props.name,
      style = props.style,
      width = props.width,
      rest = _objectWithoutProperties(props, ["AvatarComponent", "backgroundColor", "backgroundImage", "children", "name", "style", "width"]);

  return React.createElement(AvatarComponent, _extends({
    backgroundColor: backgroundColor,
    style: _objectSpread({
      backgroundColor: name && selectColor(name),
      backgroundImage: backgroundImage && "url(".concat(backgroundImage, ")")
    }, style),
    width: width
  }, rest), !backgroundImage && name && name.charAt(0) || children);
}

Avatar.defaultProps = {
  width: (0, _polished.rem)(46),
  fontSize: (0, _polished.rem)(18)
};

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Avatar, _objectSpread({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;