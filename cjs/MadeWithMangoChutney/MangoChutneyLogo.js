"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.fill");

var React = _interopRequireWildcard(require("react"));

var _MangoChutneyLogoPaths = require("./MangoChutneyLogoPaths.json");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MangoChutneyPath = _MangoChutneyLogoPaths.mango_chutney.join(' ');

var MadeWithPath = _MangoChutneyLogoPaths.made_with.join(' ');

var MangoChutneyLogo = function MangoChutneyLogo(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill,
      rest = _objectWithoutProperties(_ref, ["width", "height", "fill"]);

  return React.createElement("svg", _extends({
    width: width,
    height: height,
    viewBox: "0 0 ".concat(width, " ").concat(height)
  }, rest), React.createElement("g", {
    fill: fill,
    fillRule: "evenodd"
  }, React.createElement("g", {
    opacity: 0.75
  }, React.createElement("path", {
    d: MangoChutneyPath
  })), React.createElement("g", {
    opacity: 0.2
  }, React.createElement("path", {
    d: MadeWithPath
  }))));
};

MangoChutneyLogo.defaultProps = {
  width: 180,
  height: 15,
  fill: '#222C3C'
};
var _default = MangoChutneyLogo;
exports.default = _default;