import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled from 'styled-components';
import MangoChutneyLogo from './MangoChutneyLogo';
export var defaultStyleProps = {}; // At the time of writing, `styleProps` wasn't used for anything, but I don't
// want to remove it in case someone uses this to see what arguments
// `createStyledComponents` usually expects.

/* eslint-disable no-unused-vars */

export var createStyledComponents = function createStyledComponents(styleProps) {
  var AnchorComponent = styled.a.withConfig({
    componentId: "s1srkjmy-0"
  })(["width:180px;height:15px;display:inline-block;"]);
  var DivComponent = styled.div.withConfig({
    componentId: "s1srkjmy-1"
  })(["margin:2rem 0;text-align:center;"]);
  return {
    AnchorComponent: AnchorComponent,
    DivComponent: DivComponent
  };
};
/* eslint-enable no-unused-vars */

export function MadeWithMangoChutney(props) {
  var AnchorComponent = props.AnchorComponent,
      DivComponent = props.DivComponent,
      href = props.href,
      rest = _objectWithoutPropertiesLoose(props, ["AnchorComponent", "DivComponent", "href"]);

  return React.createElement(DivComponent, null, React.createElement(AnchorComponent, _extends({}, rest, {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer"
  }), React.createElement(MangoChutneyLogo, null)));
}
MadeWithMangoChutney.defaultProps = {
  href: 'http://mangochutney.com.au'
};
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(MadeWithMangoChutney, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};