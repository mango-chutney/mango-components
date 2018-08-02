"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = Checkbox;
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _constants = require("./constants");

var _Input = require("./Input");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultStyleProps = {
  checkboxSize: 20,
  checkboxColor: _constants.palette.primary
};
exports.defaultStyleProps = defaultStyleProps;

var createStyledComponents = function createStyledComponents(styleProps) {
  var WrapperComponent = _styledComponents.default.div.withConfig({
    componentId: "s156yctp-0"
  })(["margin:1rem 0;"]);

  var CheckboxContainerComponent = _styledComponents.default.div.withConfig({
    componentId: "s156yctp-1"
  })(["position:relative;margin:0;height:", ";width:", ";display:inline-block;"], (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize)); // some label stuff in checkbox to get :checked property


  var CheckboxBackgroundComponent = _styledComponents.default.div.withConfig({
    componentId: "s156yctp-2"
  })(["cursor:pointer;font-weight:", ";display:inline-block;font-size:1rem;", ";min-height:", ";line-height:", ";position:relative;border:1px solid transparent;display:block;&::before,&::after{width:", ";height:", ";cursor:pointer;content:'';display:inline-block;border-radius:4px;vertical-align:middle;}&::before{border:1px solid ", ";background:", ";margin-right:1rem;", ";", ";}&::after{position:absolute;left:0;border:1px solid transparent;line-height:", ";margin-top:", ";text-align:center;transform:scale(0);}"], _constants.fontWeights.semibold, function (_ref) {
    var error = _ref.error,
        touched = _ref.touched;
    return error && touched && (0, _styledComponents.css)(["color:", ";"], _constants.palette.alert);
  }, (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize), _constants.palette.border, _constants.palette.lightGray, function (_ref2) {
    var error = _ref2.error,
        touched = _ref2.touched;
    return error && touched && (0, _styledComponents.css)(["border-color:", ";"], _constants.palette.alert);
  }, function (_ref3) {
    var disabled = _ref3.disabled;
    return disabled && (0, _styledComponents.css)(["background-color:", ";cursor:not-allowed;"], (0, _polished.darken)(0.05, _constants.palette.lightGray));
  }, (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize * 0.1));

  var InputComponent = _styledComponents.default.input.withConfig({
    componentId: "s156yctp-3"
  })(["width:100%;height:100%;position:absolute;padding:0;margin:0;top:0;left:0;z-index:9001;opacity:0;&[disabled]{cursor:not-allowed;}:checked + ", "{&::before,&::after{top:0;left:0;}&::before{background:", ";border-color:", ";transition:background-color 0.3s;}&::after{content:'';background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCcgd2lkdGg9JzE2LjUnIGhlaWdodD0nMTUnIHZpZXdCb3g9JzAgMCAxNi41IDE1Jz48cGF0aCBmaWxsPScjZmZmJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi41MTUsMS4wNzEgQzE2LjM5OSwwLjgyNyAxNS45MTQsLTAuMDMwIDE1LjUxNSwwLjAwMSBDMTQuMjg5LDAuNzY1IDEyLjY5MywyLjM1NCAxMS42MzgsMy4zNjIgQzkuNTI4LDUuMzc4IDcuNTAzLDcuNDg2IDUuNTA4LDkuNjI0IEwxLjUxNiw1Ljg5NyBMMC4wMDUsNy40ODYgQzIuMjAwLDkuODM3IDQuNTY3LDEyLjM3MyA2LjUwNSwxNS4wMDAgQzguOTg2LDEwLjYzMiAxMy4wMzUsNC4zNzAgMTYuNTE1LDEuMDcxIEwxNi41MTUsMS4wNzEgWicvPjwvc3ZnPg==');background-position:50% 40%;background-repeat:no-repeat;background-size:70%;transition:all 0.25s;transform:scale(1);}}"], CheckboxBackgroundComponent, styleProps.checkboxColor, (0, _polished.darken)(0.05, styleProps.checkboxColor));

  var LabelComponent = _styledComponents.default.label.withConfig({
    componentId: "s156yctp-4"
  })(["margin-left:1rem;"]);

  return {
    CheckboxContainerComponent: CheckboxContainerComponent,
    CheckboxBackgroundComponent: CheckboxBackgroundComponent,
    LabelComponent: LabelComponent,
    InputComponent: InputComponent,
    WrapperComponent: WrapperComponent
  };
};

exports.createStyledComponents = createStyledComponents;

function Checkbox(props) {
  var CheckboxBackgroundComponent = props.CheckboxBackgroundComponent,
      CheckboxContainerComponent = props.CheckboxContainerComponent,
      InputComponent = props.InputComponent,
      LabelComponent = props.LabelComponent,
      WrapperComponent = props.WrapperComponent,
      label = props.label,
      value = props.value,
      rest = _objectWithoutProperties(props, ["CheckboxBackgroundComponent", "CheckboxContainerComponent", "InputComponent", "LabelComponent", "WrapperComponent", "label", "value"]); // Pull these out to pass to the CheckboxBackgroundComponent, but don't remove
  // them from the 'rest' object (so that they still get applied to the input
  // and label components).


  var disabled = props.disabled,
      meta = props.meta;

  var _createLabelProps = (0, _Input.createLabelProps)(label, rest),
      children = _createLabelProps.children,
      labelProps = _objectWithoutProperties(_createLabelProps, ["children"]);

  return React.createElement(WrapperComponent, null, React.createElement(CheckboxContainerComponent, null, React.createElement(InputComponent, (0, _Input.createFormControlElementProps)(rest, {
    type: 'checkbox',
    checked: value
  })), React.createElement(CheckboxBackgroundComponent, _objectSpread({}, meta, {
    disabled: disabled
  }))), React.createElement(LabelComponent, labelProps, children));
}

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Checkbox, _objectSpread({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;