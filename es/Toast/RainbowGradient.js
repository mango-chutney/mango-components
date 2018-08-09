import "core-js/modules/es6.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

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
        offset: Math.floor(index / arr.length * 100) + "%"
      },
      animateProps: {
        values: arr.slice(index, arr.length).concat(arr.slice(0, index), [color]).join(';'),
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
export default RainbowGradient;