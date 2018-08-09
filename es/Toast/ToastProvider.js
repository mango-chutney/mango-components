import "core-js/modules/es6.object.keys";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es7.object.entries";
import "core-js/modules/es6.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import once from 'lodash/once';
import { Portal } from 'react-portal';
import Transition, { UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING } from 'react-transition-group/Transition';
import noop from 'lodash/noop';
export var transitionStates = {
  UNMOUNTED: UNMOUNTED,
  EXITED: EXITED,
  ENTERING: ENTERING,
  ENTERED: ENTERED,
  EXITING: EXITING
};
var defaultToastContext = {
  createToast: noop
};
var ToastContext = React.createContext(defaultToastContext);
export var ToastConsumer = ToastContext.Consumer;

var _createToast = function createToast(toast, options, id) {
  return function (state) {
    var _Object$assign;

    return Object.assign({}, state, {
      toasts: Object.assign({}, state.toasts, (_Object$assign = {}, _Object$assign[id] = {
        options: options,
        toast: toast,
        in: true
      }, _Object$assign))
    });
  };
};

var removeToast = function removeToast(id) {
  return function (state) {
    return Object.assign({}, state, {
      toasts: Object.entries(state.toasts).filter(function (_ref) {
        var key = _ref[0];
        return String(id) !== key;
      }).reduce(function (prev, _ref2) {
        var _Object$assign2;

        var key = _ref2[0],
            value = _ref2[1];
        return Object.assign({}, prev, (_Object$assign2 = {}, _Object$assign2[key] = value, _Object$assign2));
      }, {})
    });
  };
};

var toggleToastState = function toggleToastState(id) {
  return function (state) {
    var _Object$assign3;

    return Object.assign({}, state, {
      toasts: Object.assign({}, state.toasts, (_Object$assign3 = {}, _Object$assign3[id] = Object.assign({}, state.toasts[id], {
        in: !state.toasts[id].in
      }), _Object$assign3))
    });
  };
}; // eslint-disable-next-line no-underscore-dangle


var __toastId = -1;

var ToastProvider =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ToastProvider, _React$Component);

  function ToastProvider() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      toasts: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createToastContextValue", function () {
      return {
        createToast: function createToast(toast, options) {
          var defaultToastOptions = _this.props.defaultToastOptions;
          __toastId += 1;

          _this.setState(_createToast(toast, Object.assign({}, defaultToastOptions, options), __toastId));
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
        var dismiss = once(function () {
          return _this.setState(toggleToastState(id));
        });
        var transitionProps = Object.assign({}, options, {
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
        return React.createElement(Transition, _extends({}, transitionProps, {
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

  var _proto = ToastProvider.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        PortalComponent = _this$props.PortalComponent;
    return React.createElement(ToastContext.Provider, {
      value: this.createToastContextValue()
    }, React.createElement(PortalComponent, null, this.renderToasts()), children);
  };

  return ToastProvider;
}(React.Component);

_defineProperty(ToastProvider, "defaultProps", {
  PortalComponent: Portal,
  defaultToastOptions: {
    timeout: {
      enter: 1000,
      exit: 1000
    },
    unmountOnExit: true,
    appear: true
  }
});

export default ToastProvider;