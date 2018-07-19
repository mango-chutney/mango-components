"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = Checkbox;
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.array.find");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var defaultStyleProps = {
  checkboxSize: 20,
  checkboxColor: _constants.palette.primary
};
exports.defaultStyleProps = defaultStyleProps;

var Wrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wrapper, _React$Component);

  function Wrapper() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Wrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        focused: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var inputChildRef = _this.findInputChildRef();

        if (inputChildRef !== null) {
          inputChildRef.addEventListener('focus', _this.handleInputChildFocus);
          inputChildRef.addEventListener('blur', _this.handleInputChildBlur);
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "componentWillUnmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var inputChildRef = _this.findInputChildRef();

        if (inputChildRef !== null) {
          inputChildRef.removeEventListener('focus', _this.handleInputChildFocus);
          inputChildRef.removeEventListener('blur', _this.handleInputChildBlur);
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "ref", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty(_assertThisInitialized(_this), "findInputChildRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.ref !== null) {
          return Array.from(_this.ref.children).find(function (element) {
            return element.nodeName === 'INPUT';
          });
        }

        return null;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClickOrKeyPress", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var inputChildRef = _this.findInputChildRef();

        if (inputChildRef !== null) {
          inputChildRef.click();
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleInputChildBlur", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          focused: false
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleInputChildFocus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          focused: true
        });
      }
    }), _temp));
  }

  _createClass(Wrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ["children"]);

      var focused = this.state.focused;
      return React.createElement("div", _extends({}, rest, {
        role: "presentation",
        ref: function ref(_ref2) {
          _this2.ref = _ref2;
        },
        "data-focused": focused,
        onClick: this.handleClickOrKeyPress
      }), children);
    }
  }]);

  return Wrapper;
}(React.Component);

var createStyledComponents = function createStyledComponents(styleProps) {
  var WrapperComponent =
  /*#__PURE__*/
  (0, _styledComponents.default)(Wrapper).withConfig({
    componentId: "s13kzk6m-0"
  })(["position:relative;margin-bottom:1rem;text-align:left;display:inline-block;"]); // some label stuff in checkbox to get :checked property

  var LabelComponent =
  /*#__PURE__*/
  _styledComponents.default.label.withConfig({
    componentId: "s13kzk6m-1"
  })(["cursor:pointer;font-weight:", ";display:inline-block;font-size:1rem;> div{min-height:", ";line-height:", ";position:relative;border:1px solid transparent;display:block;&::before,&::after{width:", ";height:", ";cursor:pointer;content:'';display:inline-block;border-radius:4px;vertical-align:middle;}&::before{border:1px solid ", ";background:", ";margin-right:1rem;}&::after{position:absolute;left:0;border:1px solid transparent;line-height:", ";margin-top:", ";text-align:center;transform:scale(0);}}"], _constants.fontWeights.semibold, (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize), _constants.palette.border, _constants.palette.lightGray, (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize * 0.1));

  var InputComponent =
  /*#__PURE__*/
  _styledComponents.default.input.withConfig({
    componentId: "s13kzk6m-2"
  })(["opacity:0;width:0;position:absolute;&[disabled]{cursor:pointer;}:checked + label > div{&::before{background:", ";border-color:", ";transition:background-color 0.3s;}&::after{content:'';background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCcgd2lkdGg9JzE2LjUnIGhlaWdodD0nMTUnIHZpZXdCb3g9JzAgMCAxNi41IDE1Jz48cGF0aCBmaWxsPScjZmZmJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi41MTUsMS4wNzEgQzE2LjM5OSwwLjgyNyAxNS45MTQsLTAuMDMwIDE1LjUxNSwwLjAwMSBDMTQuMjg5LDAuNzY1IDEyLjY5MywyLjM1NCAxMS42MzgsMy4zNjIgQzkuNTI4LDUuMzc4IDcuNTAzLDcuNDg2IDUuNTA4LDkuNjI0IEwxLjUxNiw1Ljg5NyBMMC4wMDUsNy40ODYgQzIuMjAwLDkuODM3IDQuNTY3LDEyLjM3MyA2LjUwNSwxNS4wMDAgQzguOTg2LDEwLjYzMiAxMy4wMzUsNC4zNzAgMTYuNTE1LDEuMDcxIEwxNi41MTUsMS4wNzEgWicvPjwvc3ZnPg==');background-position:50% 40%;background-repeat:no-repeat;background-size:70%;transition:all 0.25s;transform:scale(1);}}"], function (props) {
    return props.checkboxColor ? props.checkboxColor : styleProps.checkboxColor;
  }, function (props) {
    return props.checkboxColor ? (0, _polished.darken)(0.05, props.checkboxColor) : (0, _polished.darken)(0.05, styleProps.checkboxColor);
  });

  return {
    LabelComponent: LabelComponent,
    InputComponent: InputComponent,
    WrapperComponent: WrapperComponent
  };
};

exports.createStyledComponents = createStyledComponents;

function Checkbox(_ref3) {
  var InputComponent = _ref3.InputComponent,
      LabelComponent = _ref3.LabelComponent,
      WrapperComponent = _ref3.WrapperComponent,
      children = _ref3.children,
      checkboxColor = _ref3.checkboxColor,
      input = _ref3.input,
      meta = _ref3.meta,
      label = _ref3.label,
      rest = _objectWithoutProperties(_ref3, ["InputComponent", "LabelComponent", "WrapperComponent", "children", "checkboxColor", "input", "meta", "label"]);

  return React.createElement(WrapperComponent, null, React.createElement(InputComponent, _extends({}, input, {
    id: rest.id || input && input.name,
    type: "checkbox",
    checkboxColor: checkboxColor
  }, rest)), React.createElement(LabelComponent, {
    htmlFor: rest.id || input && input.name,
    checkboxColor: checkboxColor
  }, React.createElement("div", null, children || label || '')));
}

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Checkbox, _extends({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;