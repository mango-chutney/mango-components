import "core-js/modules/es6.function.name";
import "core-js/modules/es6.object.assign";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.array.from";
import "core-js/modules/es6.array.find";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import styled, { css } from 'styled-components';
import { rem, darken } from 'polished';
import { palette, fontWeights } from './constants';
export var defaultStyleProps = {
  checkboxSize: 20,
  checkboxColor: palette.primary
};

var Wrapper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Wrapper, _React$Component);

  function Wrapper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ref", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focused: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      var inputChildRef = _this.findInputChildRef();

      if (inputChildRef !== null) {
        inputChildRef.addEventListener('focus', _this.handleInputChildFocus);
        inputChildRef.addEventListener('blur', _this.handleInputChildBlur);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
      var inputChildRef = _this.findInputChildRef();

      if (inputChildRef !== null) {
        inputChildRef.removeEventListener('focus', _this.handleInputChildFocus);
        inputChildRef.removeEventListener('blur', _this.handleInputChildBlur);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "findInputChildRef", function () {
      if (_this.ref !== null) {
        return Array.from(_this.ref.children).find(function (element) {
          return element.nodeName === 'INPUT';
        });
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOrKeyPress", function () {
      var inputChildRef = _this.findInputChildRef();

      if (inputChildRef !== null) {
        inputChildRef.click();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChildBlur", function () {
      _this.setState({
        focused: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChildFocus", function () {
      _this.setState({
        focused: true
      });
    });

    return _this;
  }

  var _proto = Wrapper.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children"]);

    var focused = this.state.focused;
    return React.createElement("div", _extends({}, rest, {
      role: "presentation",
      ref: function ref(_ref) {
        _this2.ref = _ref;
      },
      "data-focused": focused,
      onClick: this.handleClickOrKeyPress
    }), children);
  };

  return Wrapper;
}(React.Component);

export var createStyledComponents = function createStyledComponents(styleProps) {
  var WrapperComponent = styled(Wrapper).withConfig({
    componentId: "s156yctp-0"
  })(["position:relative;margin-bottom:1rem;text-align:left;display:inline-block;"]); // some label stuff in checkbox to get :checked property

  var LabelComponent = styled.label.withConfig({
    componentId: "s156yctp-1"
  })(["cursor:pointer;font-weight:", ";display:inline-block;font-size:1rem;", ";> div{min-height:", ";line-height:", ";position:relative;border:1px solid transparent;display:block;&::before,&::after{width:", ";height:", ";cursor:pointer;content:'';display:inline-block;border-radius:4px;vertical-align:middle;}&::before{border:1px solid ", ";background:", ";margin-right:1rem;", ";}&::after{position:absolute;left:0;border:1px solid transparent;line-height:", ";margin-top:", ";text-align:center;transform:scale(0);}}"], fontWeights.semibold, function (_ref2) {
    var invalid = _ref2.invalid;
    return invalid && css(["color:", ";"], palette.alert);
  }, rem(styleProps.checkboxSize), rem(styleProps.checkboxSize), rem(styleProps.checkboxSize), rem(styleProps.checkboxSize), palette.border, palette.lightGray, function (_ref3) {
    var invalid = _ref3.invalid;
    return invalid && css(["border-color:", ";"], palette.alert);
  }, rem(styleProps.checkboxSize), rem(styleProps.checkboxSize * 0.1));
  var InputComponent = styled.input.withConfig({
    componentId: "s156yctp-2"
  })(["opacity:0;width:0;position:absolute;&[disabled]{cursor:pointer;}:checked + label > div{&::before{background:", ";border-color:", ";transition:background-color 0.3s;}&::after{content:'';background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCcgd2lkdGg9JzE2LjUnIGhlaWdodD0nMTUnIHZpZXdCb3g9JzAgMCAxNi41IDE1Jz48cGF0aCBmaWxsPScjZmZmJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi41MTUsMS4wNzEgQzE2LjM5OSwwLjgyNyAxNS45MTQsLTAuMDMwIDE1LjUxNSwwLjAwMSBDMTQuMjg5LDAuNzY1IDEyLjY5MywyLjM1NCAxMS42MzgsMy4zNjIgQzkuNTI4LDUuMzc4IDcuNTAzLDcuNDg2IDUuNTA4LDkuNjI0IEwxLjUxNiw1Ljg5NyBMMC4wMDUsNy40ODYgQzIuMjAwLDkuODM3IDQuNTY3LDEyLjM3MyA2LjUwNSwxNS4wMDAgQzguOTg2LDEwLjYzMiAxMy4wMzUsNC4zNzAgMTYuNTE1LDEuMDcxIEwxNi41MTUsMS4wNzEgWicvPjwvc3ZnPg==');background-position:50% 40%;background-repeat:no-repeat;background-size:70%;transition:all 0.25s;transform:scale(1);}}"], function (_ref4) {
    var checkboxColor = _ref4.checkboxColor;
    return checkboxColor || styleProps.checkboxColor;
  }, function (_ref5) {
    var checkboxColor = _ref5.checkboxColor;
    return checkboxColor ? darken(0.05, checkboxColor) : darken(0.05, styleProps.checkboxColor);
  });
  return {
    LabelComponent: LabelComponent,
    InputComponent: InputComponent,
    WrapperComponent: WrapperComponent
  };
};
export function Checkbox(_ref6) {
  var InputComponent = _ref6.InputComponent,
      LabelComponent = _ref6.LabelComponent,
      WrapperComponent = _ref6.WrapperComponent,
      children = _ref6.children,
      checkboxColor = _ref6.checkboxColor,
      input = _ref6.input,
      meta = _ref6.meta,
      label = _ref6.label,
      invalid = _ref6.invalid,
      rest = _objectWithoutPropertiesLoose(_ref6, ["InputComponent", "LabelComponent", "WrapperComponent", "children", "checkboxColor", "input", "meta", "label", "invalid"]);

  return React.createElement(WrapperComponent, null, React.createElement(InputComponent, _extends({}, input, {
    id: rest.id || input && input.name,
    type: "checkbox",
    checkboxColor: checkboxColor,
    invalid: invalid
  }, rest)), React.createElement(LabelComponent, {
    htmlFor: rest.id || input && input.name,
    checkboxColor: checkboxColor,
    invalid: invalid
  }, React.createElement("div", null, children || label || '')));
}
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Checkbox, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};