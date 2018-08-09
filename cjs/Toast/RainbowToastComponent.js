"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.freeze");

var React = _interopRequireWildcard(require("react"));

var _server = require("react-dom/server");

var _keys = _interopRequireDefault(require("lodash/keys"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _isomorphicBase = require("isomorphic-base64");

var _RainbowGradient = _interopRequireDefault(require("./RainbowGradient"));

var _Toast = require("./Toast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* fallback for old browsers */\n  background: linear-gradient(135deg, ", ");\n  background: url(data:image/svg+xml;base64,", ");\n  background-size: cover;\n  color: white;\n  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _createStyledToastCom = (0, _Toast.createStyledComponents)(_Toast.defaultStyleProps),
    ToastComponent = _createStyledToastCom.ToastComponent;

var RainbowToastComponent = ToastComponent.extend(_templateObject(), function (_ref) {
  var colors = _ref.colors;
  return colors.join(', ');
}, function (props) {
  return (0, _isomorphicBase.btoa)((0, _server.renderToStaticMarkup)(React.createElement(_RainbowGradient.default, (0, _pick.default)(props, (0, _keys.default)(_RainbowGradient.default.defaultProps)))));
});
RainbowToastComponent.defaultProps = _objectSpread({}, _RainbowGradient.default.defaultProps, ToastComponent.defaultProps);
var _default = RainbowToastComponent;
exports.default = _default;