'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.MadeWithMangoChutney = MadeWithMangoChutney;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MangoChutneyLogo = require('./MangoChutneyLogo');

var _MangoChutneyLogo2 = _interopRequireDefault(_MangoChutneyLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultStyleProps = exports.defaultStyleProps = {};

// At the time of writing, `styleProps` wasn't used for anything, but I don't
// want to remove it in case someone uses this to see what arguments
// `createStyledComponents` usually expects.
/* eslint-disable no-unused-vars */
var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var AnchorComponent = _styledComponents2.default.a.withConfig({
    componentId: 's1502ehz-0'
  })(['width:180px;height:15px;display:inline-block;']);

  var DivComponent = _styledComponents2.default.div.withConfig({
    componentId: 's1502ehz-1'
  })(['margin:2rem 0;text-align:center;']);

  return { AnchorComponent: AnchorComponent, DivComponent: DivComponent };
};
/* eslint-enable no-unused-vars */

function MadeWithMangoChutney(props) {
  var AnchorComponent = props.AnchorComponent,
      DivComponent = props.DivComponent,
      href = props.href,
      rest = _objectWithoutProperties(props, ['AnchorComponent', 'DivComponent', 'href']);

  return React.createElement(
    DivComponent,
    null,
    React.createElement(
      AnchorComponent,
      _extends({}, rest, {
        href: href,
        target: '_blank',
        rel: 'noopener noreferrer'
      }),
      React.createElement(_MangoChutneyLogo2.default, null)
    )
  );
}

MadeWithMangoChutney.defaultProps = {
  href: 'http://mangochutney.com.au'
};

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(MadeWithMangoChutney, _extends({}, defaultStyledComponents, props));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};