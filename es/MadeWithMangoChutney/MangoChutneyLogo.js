import "core-js/modules/es6.object.assign";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.array.fill";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { mango_chutney as MangoChutney, made_with as MadeWith } from './MangoChutneyLogoPaths.json';
var MangoChutneyPath = MangoChutney.join(' ');
var MadeWithPath = MadeWith.join(' ');

var MangoChutneyLogo = function MangoChutneyLogo(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill,
      rest = _objectWithoutPropertiesLoose(_ref, ["width", "height", "fill"]);

  return React.createElement("svg", _extends({
    width: width,
    height: height,
    viewBox: "0 0 " + width + " " + height
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
export default MangoChutneyLogo;