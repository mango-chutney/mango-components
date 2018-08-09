"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var RainbowGradient = function RainbowGradient(_ref) {
  var colors = _ref.colors,
      duration = _ref.duration;
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    width: "100px",
    height: "100px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve"
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: "gradient",
    y2: "1",
    spreadMethod: "reflect"
  }, colors.map(function (color, index, arr) {
    return {
      stopProps: {
        stopColor: color,
        offset: "".concat(Math.floor(index / arr.length * 100), "%")
      },
      animateProps: {
        values: _toConsumableArray(arr.slice(index, arr.length)).concat(_toConsumableArray(arr.slice(0, index)), [color]).join(';'),
        attributeName: 'stop-color',
        repeatCount: 'indefinite',
        dur: duration
      }
    };
  }).map(function (_ref2) {
    var stopProps = _ref2.stopProps,
        animateProps = _ref2.animateProps;
    return React.createElement("stop", _extends({}, stopProps, {
      key: stopProps.offset
    }), React.createElement("animate", animateProps));
  }))), React.createElement("rect", {
    fill: "url(#gradient)",
    width: "100",
    height: "100",
    x: "0",
    y: "0",
    strokeWidth: "16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

RainbowGradient.defaultProps = {
  colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
  duration: '3s'
};
var _default = RainbowGradient;
exports.default = _default;