import "core-js/modules/es6.object.assign";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Portal } from 'react-portal';
import styled, { css, keyframes } from 'styled-components';
import { rem } from 'polished';
import { palette } from './constants';
export var defaultStyleProps = {
  color: 'inherit'
};
var ToasterFrame = styled.div.withConfig({
  componentId: "s2v7azq-0"
})(["align-items:center;display:flex;flex-flow:column nowrap;left:0;margin:0;pointer-events:none;position:fixed;text-align:center;top:0;width:100%;"]);
var CloseButton = styled.span.withConfig({
  componentId: "s2v7azq-1"
})(["font-size:", ";margin-left:1rem;"], rem(12));
var toastAnimation = keyframes(["0%{transform:translateY(-100%);opacity:0;}85%{opacity:0.5;}100%{opacity:1;transform:translateY(0%);}"]);
var fadeOutAnimation = keyframes(["0%{opacity:1;}50%{color:transparent;opacity:0;}100%{padding:0 1rem;height:0;margin:0;opacity:0;}"]);
export var createStyledComponents = function createStyledComponents(styleProps) {
  var ToastComponent = styled.a.withConfig({
    componentId: "s2v7azq-2"
  })(["animation:", " 0.15s ease-out normal forwards;background:#fff;border-radius:", ";box-shadow:0 0.25rem 0.5rem rgba(0,0,0,0.2);cursor:pointer;display:inline-block;margin:0.25rem;overflow:hidden;padding:0.5rem 1rem;pointer-events:all;user-select:none;transition:all 15ms ease;", ";", ";", ";", ";"], toastAnimation, rem(4), function (_ref) {
    var fadingOut = _ref.fadingOut;
    return fadingOut && css(["animation:", " 0.3s ease-out normal forwards;"], fadeOutAnimation);
  }, function (_ref2) {
    var alert = _ref2.alert;
    return alert && css(["background:", ";color:white;"], palette.alert);
  }, function (_ref3) {
    var success = _ref3.success;
    return success && css(["background:", ";color:white;"], palette.success);
  }, function (_ref4) {
    var inactive = _ref4.inactive;
    return inactive && css(["background:", ";color:white;"], palette.inactive);
  });
  return {
    ToastComponent: ToastComponent
  };
};

var Toast =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Toast, _React$Component);

  function Toast() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      shouldRender: false,
      fadingOut: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "timeout", void 0);

    return _this;
  }

  var _proto = Toast.prototype;

  _proto.componentDidMount = function componentDidMount() {
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
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(_ref5) {
    var next = _ref5.active;
    var prev = this.props.active;

    if (next && next !== prev) {
      this.activate();
    } else if (!next && next !== prev) {
      this.close();
    }
  };

  _proto.close = function close() {
    var _this2 = this;

    this.setState({
      fadingOut: true
    });
    setTimeout(function () {
      _this2.setState({
        shouldRender: false
      });
    }, 300);
  };

  _proto.activate = function activate() {
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
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$props = this.props,
        children = _this$props.children,
        duration = _this$props.duration,
        active = _this$props.active,
        ToastComponent = _this$props.ToastComponent,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children", "duration", "active", "ToastComponent"]);

    var _this$state = this.state,
        shouldRender = _this$state.shouldRender,
        fadingOut = _this$state.fadingOut;
    return shouldRender && document && document.getElementById('mc-toaster') && React.createElement(Portal, {
      node: document && document.getElementById('mc-toaster')
    }, React.createElement(ToastComponent, _extends({
      active: active,
      duration: duration,
      fadingOut: fadingOut,
      onClick: function onClick() {
        _this4.close();
      }
    }, rest), children, " ", React.createElement(CloseButton, null, "\xD7")));
  };

  return Toast;
}(React.Component);

_defineProperty(Toast, "defaultProps", {
  duration: 10,
  active: false
});

export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Toast, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};