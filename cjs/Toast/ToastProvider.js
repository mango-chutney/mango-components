"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ToastConsumer = exports.transitionStates = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.entries");

var React = _interopRequireWildcard(require("react"));

var _once = _interopRequireDefault(require("lodash/once"));

var _reactPortal = require("react-portal");

var _Transition = _interopRequireWildcard(require("react-transition-group/Transition"));

var _noop = _interopRequireDefault(require("lodash/noop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var transitionStates = {
  UNMOUNTED: _Transition.UNMOUNTED,
  EXITED: _Transition.EXITED,
  ENTERING: _Transition.ENTERING,
  ENTERED: _Transition.ENTERED,
  EXITING: _Transition.EXITING
};
exports.transitionStates = transitionStates;
var defaultToastContext = {
  createToast: _noop.default
};
var ToastContext = React.createContext(defaultToastContext);
var ToastConsumer = ToastContext.Consumer;
exports.ToastConsumer = ToastConsumer;

var _createToast = function createToast(toast, options, id) {
  return function (state) {
    return _objectSpread({}, state, {
      toasts: _objectSpread({}, state.toasts, _defineProperty({}, id, {
        options: options,
        toast: toast,
        in: true
      }))
    });
  };
};

var removeToast = function removeToast(id) {
  return function (state) {
    return _objectSpread({}, state, {
      toasts: Object.entries(state.toasts).filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            key = _ref2[0];

        return String(id) !== key;
      }).reduce(function (prev, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        return _objectSpread({}, prev, _defineProperty({}, key, value));
      }, {})
    });
  };
};

var toggleToastState = function toggleToastState(id) {
  return function (state) {
    return _objectSpread({}, state, {
      toasts: _objectSpread({}, state.toasts, _defineProperty({}, id, _objectSpread({}, state.toasts[id], {
        in: !state.toasts[id].in
      })))
    });
  };
}; // eslint-disable-next-line no-underscore-dangle


var __toastId = -1;

var ToastProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ToastProvider, _React$Component);

  function ToastProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ToastProvider);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToastProvider)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      toasts: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createToastContextValue", function () {
      return {
        createToast: function createToast(toast, options) {
          var defaultToastOptions = _this.props.defaultToastOptions;
          __toastId += 1;

          _this.setState(_createToast(toast, _objectSpread({}, defaultToastOptions, options), __toastId));
        }
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderToasts", function () {
      var toasts = _this.state.toasts;
      return React.createElement(React.Fragment, null, Object.keys(toasts).map(function (id) {
        var _toasts$id = toasts[id],
            Component = _toasts$id.toast,
            options = _toasts$id.options,
            inProp = _toasts$id.in;
        var dismiss = (0, _once.default)(function () {
          return _this.setState(toggleToastState(id));
        });

        var transitionProps = _objectSpread({}, options, {
          in: inProp,
          onEntered: function onEntered() {
            if (typeof options.onEntered === 'function') {
              options.onEntered.apply(options, arguments);
            }

            if (!options.persistent) {
              dismiss();
            }
          },
          onExited: function onExited() {
            if (typeof options.onExited === 'function') {
              options.onExited.apply(options, arguments);
            }

            _this.setState(removeToast(id));
          }
        });

        return React.createElement(_Transition.default, _extends({}, transitionProps, {
          key: id
        }), function (transitionState) {
          return React.createElement(Component, {
            transitionState: transitionState,
            dismiss: dismiss
          });
        });
      }));
    });

    return _this;
  }

  _createClass(ToastProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          PortalComponent = _this$props.PortalComponent;
      return React.createElement(ToastContext.Provider, {
        value: this.createToastContextValue()
      }, React.createElement(PortalComponent, null, this.renderToasts()), children);
    }
  }]);

  return ToastProvider;
}(React.Component);

_defineProperty(ToastProvider, "defaultProps", {
  PortalComponent: _reactPortal.Portal,
  defaultToastOptions: {
    timeout: {
      enter: 1000,
      exit: 1000
    },
    unmountOnExit: true,
    appear: true
  }
});

var _default = ToastProvider;
exports.default = _default;