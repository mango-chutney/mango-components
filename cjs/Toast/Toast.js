"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createComponent = exports.Toast = exports.createStyledComponents = exports.defaultStyleProps = exports.animations = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _constants = require("../constants");

var _ToastProvider = require("./ToastProvider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var animations = {
  enter: (0, _styledComponents.keyframes)(["0%{transform:translateY(-100%);opacity:0;}85%{opacity:0.5;}100%{opacity:1;transform:translateY(0%);}"]),
  exit: (0, _styledComponents.keyframes)(["0%{opacity:1;}50%{color:transparent;opacity:0;}100%{padding:0 1rem;height:0;margin:0;opacity:0;}"])
};
exports.animations = animations;
var defaultStyleProps = {
  color: 'inherit',
  animations: animations
};
exports.defaultStyleProps = defaultStyleProps;

var createStyledComponents = function createStyledComponents(styleProps) {
  var ToastComponent = _styledComponents.default.button.withConfig({
    componentId: "s3rftr-0"
  })(["animation:", " 0.15s ease-out normal forwards;background:#fff;border-radius:", ";box-shadow:0 0.25rem 0.5rem rgba(0,0,0,0.2);cursor:pointer;display:inline-block;margin:0.25rem;overflow:hidden;padding:0.5rem 1rem;pointer-events:all;user-select:none;transition:all 15ms ease;", ";", ";", ";", ";"], animations.enter, (0, _polished.rem)(4), function (_ref) {
    var transitionState = _ref.transitionState;
    return transitionState === _ToastProvider.transitionStates.EXITING && (0, _styledComponents.css)(["animation:", " 0.3s ease-out normal forwards;"], animations.exit);
  }, function (_ref2) {
    var alert = _ref2.alert;
    return alert && (0, _styledComponents.css)(["background:", ";color:white;"], _constants.palette.alert);
  }, function (_ref3) {
    var success = _ref3.success;
    return success && (0, _styledComponents.css)(["background:", ";color:white;"], _constants.palette.success);
  }, function (_ref4) {
    var inactive = _ref4.inactive;
    return inactive && (0, _styledComponents.css)(["background:", ";color:white;"], _constants.palette.inactive);
  });

  return {
    ToastComponent: ToastComponent
  };
};

exports.createStyledComponents = createStyledComponents;

var Toast = function Toast(props) {
  var children = props.children,
      ToastComponent = props.ToastComponent,
      transitionState = props.transitionState,
      rest = _objectWithoutProperties(props, ["children", "ToastComponent", "transitionState"]);

  return React.createElement(ToastComponent, _objectSpread({}, rest, {
    transitionState: transitionState
  }), children);
};

exports.Toast = Toast;

var createComponent = function createComponent() {
  var _createStyledComponen = createStyledComponents(defaultStyleProps),
      ToastComponent = _createStyledComponen.ToastComponent;

  return function (props) {
    return React.createElement(Toast, _objectSpread({
      ToastComponent: ToastComponent
    }, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;