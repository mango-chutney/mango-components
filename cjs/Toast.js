"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _reactPortal = require("react-portal");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _constants = require("./constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultStyleProps = {
  color: 'inherit'
};
exports.defaultStyleProps = defaultStyleProps;

var ToasterFrame = _styledComponents.default.div.withConfig({
  componentId: "s2v7azq-0"
})(["align-items:center;display:flex;flex-flow:column nowrap;left:0;margin:0;pointer-events:none;position:fixed;text-align:center;top:0;width:100%;"]);

var CloseButton = _styledComponents.default.span.withConfig({
  componentId: "s2v7azq-1"
})(["font-size:", ";margin-left:1rem;"], (0, _polished.rem)(12));

var toastAnimation = (0, _styledComponents.keyframes)(["0%{transform:translateY(-100%);opacity:0;}85%{opacity:0.5;}100%{opacity:1;transform:translateY(0%);}"]);
var fadeOutAnimation = (0, _styledComponents.keyframes)(["0%{opacity:1;}50%{color:transparent;opacity:0;}100%{padding:0 1rem;height:0;margin:0;opacity:0;}"]);

var createStyledComponents = function createStyledComponents(styleProps) {
  var ToastComponent = _styledComponents.default.a.withConfig({
    componentId: "s2v7azq-2"
  })(["animation:", " 0.15s ease-out normal forwards;background:#fff;border-radius:", ";box-shadow:0 0.25rem 0.5rem rgba(0,0,0,0.2);cursor:pointer;display:inline-block;margin:0.25rem;overflow:hidden;padding:0.5rem 1rem;pointer-events:all;user-select:none;transition:all 15ms ease;", ";", ";", ";", ";"], toastAnimation, (0, _polished.rem)(4), function (_ref) {
    var fadingOut = _ref.fadingOut;
    return fadingOut && (0, _styledComponents.css)(["animation:", " 0.3s ease-out normal forwards;"], fadeOutAnimation);
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

var Toast =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Toast)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      shouldRender: false,
      fadingOut: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "timeout", void 0);

    return _this;
  }

  _createClass(Toast, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // create toaster if doesn't exist
      if (document && document.body && document.body !== null && !document.getElementById('mc-toaster-wrapper')) {
        var wrapper = document.createElement('div');
        wrapper.id = 'mc-toaster-wrapper';

        if (document.body !== null) {
          document.body.appendChild(wrapper);
          ReactDOM.render(React.createElement(ToasterFrame, {
            id: "mc-toaster"
          }), wrapper);
        }
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref5) {
      var next = _ref5.active;
      var prev = this.props.active;

      if (next && next !== prev) {
        this.activate();
      } else if (!next && next !== prev) {
        this.close();
      }
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      this.setState({
        fadingOut: true
      });
      setTimeout(function () {
        _this2.setState({
          shouldRender: false
        });
      }, 300);
    }
  }, {
    key: "activate",
    value: function activate() {
      var _this3 = this;

      var duration = this.props.duration;
      clearTimeout(this.timeout);
      this.setState({
        fadingOut: false,
        shouldRender: true
      });

      if (parseInt(duration, 10) > 0) {
        this.timeout = setTimeout(function () {
          _this3.close();
        }, parseInt(duration, 10) * 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          children = _this$props.children,
          duration = _this$props.duration,
          active = _this$props.active,
          ToastComponent = _this$props.ToastComponent,
          rest = _objectWithoutProperties(_this$props, ["children", "duration", "active", "ToastComponent"]);

      var _this$state = this.state,
          shouldRender = _this$state.shouldRender,
          fadingOut = _this$state.fadingOut;
      return shouldRender && document && document.getElementById('mc-toaster') && React.createElement(_reactPortal.Portal, {
        node: document && document.getElementById('mc-toaster')
      }, React.createElement(ToastComponent, _extends({
        active: active,
        duration: duration,
        fadingOut: fadingOut,
        onClick: function onClick() {
          _this4.close();
        }
      }, rest), children, " ", React.createElement(CloseButton, null, "\xD7")));
    }
  }]);

  return Toast;
}(React.Component);

_defineProperty(Toast, "defaultProps", {
  duration: 10,
  active: false
});

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Toast, _objectSpread({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;