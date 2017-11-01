'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = exports.placements = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.UnmanagedTootlip = UnmanagedTootlip;
exports.ManagedTootlip = ManagedTootlip;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactPortal = require('react-portal');

var _reactPopper = require('react-popper');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _popper = require('popper.js');

var _popper2 = _interopRequireDefault(_popper);

var _canUseDOM = require('./lib/canUseDOM');

var _canUseDOM2 = _interopRequireDefault(_canUseDOM);

var _ParentNodePopperManager = require('./ParentNodePopperManager');

var _ParentNodePopperManager2 = _interopRequireDefault(_ParentNodePopperManager);

var _createDebug = require('./lib/createDebug');

var _createDebug2 = _interopRequireDefault(_createDebug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var debug = (0, _createDebug2.default)('Tootlip');

var placements = exports.placements = _popper2.default.placements.map(function (placement) {
  return _defineProperty({}, placement, placement);
}).reduce(function (prev, next) {
  return _extends({}, prev, next);
}, {});

function UnmanagedTootlip(props) {
  var ArrowComponent = props.ArrowComponent,
      PopperComponent = props.PopperComponent,
      children = props.children,
      clickable = props.clickable,
      visible = props.visible,
      placement = props.placement,
      rest = _objectWithoutProperties(props, ['ArrowComponent', 'PopperComponent', 'children', 'clickable', 'visible', 'placement']);

  return React.createElement(
    _reactPortal.Portal,
    null,
    React.createElement(
      PopperComponent,
      { clickable: clickable, visible: visible },
      children,
      React.createElement(ArrowComponent, { visible: visible })
    )
  );
}

UnmanagedTootlip.defaultProps = {
  clickable: false,
  placement: placements.auto
};

function ManagedTootlip(props) {
  return React.createElement(
    _ParentNodePopperManager2.default,
    { tag: 'span' },
    React.createElement(UnmanagedTootlip, props)
  );
}

var defaultStyleProps = exports.defaultStyleProps = {
  backgroundColor: '#222',
  color: '#fff',
  fontSize: '13px',
  maxWidth: '300px',
  minWidth: '150px',
  padding: '8px 21px',
  radius: '5px',
  transition: 'opacity 300ms ease-in'
};

var createStyledComponents = function createStyledComponents(styleProps) {
  var PopperComponent = (0, _styledComponents2.default)(function (_ref2) {
    var visible = _ref2.visible,
        clickable = _ref2.clickable,
        rest = _objectWithoutProperties(_ref2, ['visible', 'clickable']);

    return React.createElement(_reactPopper.Popper, rest);
  }).withConfig({
    componentId: 'wtnxq5-0'
  })(['color:', ';background-color:', ';border-radius:', ';cursor:help;display:inline-block;font-size:', ';min-width:', ';padding:', ';pointer-events:', ';position:absolute;text-align:center;transition:', ';opacity:', ';max-width:', ';&[data-placement^=\'top\']{margin-bottom:', ';}&[data-placement^=\'bottom\']{margin-top:', ';}&[data-placement^=\'right\']{margin-left:', ';}&[data-placement^=\'left\']{margin-right:', ';}'], styleProps.color, styleProps.backgroundColor, styleProps.radius, styleProps.fontSize, styleProps.minWidth, styleProps.padding, function (props) {
    return props.clickable ? 'auto' : 'none';
  }, styleProps.transition, function (props) {
    return props.visible ? 0.9 : 0;
  }, styleProps.maxWidth, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.radius);

  // prettier insists on adding a space between
  // `${PopperComponent}[data-placement^='left']` like `${PopperComponent}
  // [data-placement^='left']`, which causes flow to complain
  // prettier-ignore
  var ArrowComponent = (0, _styledComponents2.default)(function (_ref3) {
    var visible = _ref3.visible,
        rest = _objectWithoutProperties(_ref3, ['visible']);

    return React.createElement(_reactPopper.Arrow, rest);
  }).withConfig({
    componentId: 'wtnxq5-1'
  })(['', ' &{width:0;height:0;border-style:solid;position:absolute;margin:', ';}', '[data-placement^=\'top\'] &{border-width:', ' ', ' 0 ', ';border-color:', ' transparent transparent transparent;bottom:-', ';left:calc(50% - ', ');margin-top:0;margin-bottom:0;}', '[data-placement^=\'bottom\'] &{border-width:0 ', ' ', ' ', ';border-color:transparent transparent ', ' transparent;top:-', ';left:calc(50% - ', ');margin-top:0;margin-bottom:0;}', '[data-placement^=\'right\'] &{border-width:', ' ', ' ', ' 0;border-color:transparent ', ' transparent transparent;left:-', ';top:calc(50% - ', ');margin-left:0;margin-right:0;}', '[data-placement^=\'left\'] &{border-width:', ' 0 ', ' ', ';border-color:transparent transparent transparent ', ';right:-', ';top:calc(50% - ', ');margin-left:0;margin-right:0;}'], PopperComponent, styleProps.radius, PopperComponent, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.backgroundColor, styleProps.radius, styleProps.radius, PopperComponent, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.backgroundColor, styleProps.radius, styleProps.radius, PopperComponent, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.backgroundColor, styleProps.radius, styleProps.radius, PopperComponent, styleProps.radius, styleProps.radius, styleProps.radius, styleProps.backgroundColor, styleProps.radius, styleProps.radius);

  return {
    PopperComponent: PopperComponent,
    ArrowComponent: ArrowComponent
  };
};

exports.createStyledComponents = createStyledComponents;
var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(ManagedTootlip, _extends({}, props, defaultStyledComponents));
  };
};