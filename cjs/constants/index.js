"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalBorder = exports.globalRadius = exports.fontStack = exports.fontWeights = exports.palette = void 0;

var _polished = require("polished");

var palette = {
  primary: '#2ea1f8',
  secondary: '#1bb934',
  tertiary: '#222c3c',
  lightGray: '#fafbfc',
  mediumGray: '#cacaca',
  darkGray: '#7f8fa4',
  white: '#fefefe',
  black: '#354052',
  body: '#7f8fa4',
  heading: '#354052',
  subheading: '#7f8fa4',
  border: '#e2e7ee',
  success: '#00D161',
  alert: '#F85359',
  inactive: '#C5D0DE'
};
exports.palette = palette;
var fontWeights = {
  light: 300,
  normal: 'normal',
  medium: 500,
  semibold: 600,
  bold: 800,
  extrabold: 900
};
exports.fontWeights = fontWeights;
var fontStack = 'proxima-nova,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,sans-serif';
exports.fontStack = fontStack;
var globalRadius = (0, _polished.rem)(4);
exports.globalRadius = globalRadius;
var globalBorder = "".concat((0, _polished.rem)(1), " solid ").concat(palette.border);
exports.globalBorder = globalBorder;