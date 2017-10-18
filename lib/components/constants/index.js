'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalBorder = exports.globalRadius = exports.fontStack = exports.fontWeights = exports.palette = undefined;

var _polished = require('polished');

var palette = exports.palette = {
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
  border: '#e2e7ee'
};

var fontWeights = exports.fontWeights = {
  light: 300,
  normal: 'normal',
  medium: 500,
  semibold: 600,
  bold: 800,
  extrabold: 900
};

var fontStack = exports.fontStack = 'proxima-nova,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,sans-serif';

var globalRadius = exports.globalRadius = (0, _polished.rem)(4);

var globalBorder = exports.globalBorder = (0, _polished.rem)(1) + ' solid ' + palette.border;