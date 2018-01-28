'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _reactPortal = require('react-portal');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultStyleProps = exports.defaultStyleProps = {
  color: 'inherit'
};

var ToasterFrame = /*#__PURE__*/_styledComponents2.default.div.withConfig({
  componentId: 's1m4cfrf-0'
})(['align-items:center;display:flex;flex-flow:column nowrap;left:0;margin:0;pointer-events:none;position:fixed;text-align:center;top:0;width:100%;']);

var CloseButton = /*#__PURE__*/_styledComponents2.default.span.withConfig({
  componentId: 's1m4cfrf-1'
})(['font-size:', ';margin-left:1rem;'], (0, _polished.rem)(12));

var toastAnimation = /*#__PURE__*/(0, _styledComponents.keyframes)(['0%{transform:translateY(-100%);opacity:0;}85%{opacity:0.5;}100%{opacity:1;transform:translateY(0%);}']);

var fadeOutAnimation = /*#__PURE__*/(0, _styledComponents.keyframes)(['0%{opacity:1;}50%{color:transparent;opacity:0;}100%{padding:0 1rem;height:0;margin:0;opacity:0;}']);

var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var ToastComponent = /*#__PURE__*/_styledComponents2.default.a.withConfig({
    componentId: 's1m4cfrf-2'
  })(['animation:', ' 0.15s ease-out normal forwards;background:#fff;border-radius:', ';box-shadow:0 0.25rem 0.5rem rgba(0,0,0,0.2);cursor:pointer;display:inline-block;margin:0.25rem;overflow:hidden;padding:0.5rem 1rem;pointer-events:all;user-select:none;transition:all 15ms ease;', ';', ';', ';', ';'], toastAnimation, (0, _polished.rem)(4), function (props) {
    return props.fadingOut && (0, _styledComponents.css)(['animation:', ' 0.3s ease-out normal forwards;'], fadeOutAnimation);
  }, function (props) {
    return props.alert && (0, _styledComponents.css)(['background:', ';color:white;'], _constants.palette.alert);
  }, function (props) {
    return props.success && (0, _styledComponents.css)(['background:', ';color:white;'], _constants.palette.success);
  }, function (props) {
    return props.inactive && (0, _styledComponents.css)(['background:', ';color:white;'], _constants.palette.inactive);
  });

  return { ToastComponent: ToastComponent };
};

var Toast = function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.state = { shouldRender: false, fadingOut: false }, _this.timeout = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toast, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // create toaster if doesn't exist
      if (document && document.body && document.body !== null && !document.getElementById('mc-toaster-wrapper')) {
        var wrapper = document.createElement('div');
        wrapper.id = 'mc-toaster-wrapper';
        if (document.body !== null) {
          document.body.appendChild(wrapper);
          ReactDOM.render(React.createElement(ToasterFrame, { id: 'mc-toaster' }), wrapper);
        }
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active && nextProps.active !== this.props.active) {
        this.activate();
      } else if (!nextProps.active && nextProps.active !== this.props.active) {
        this.close();
      }
    }
  }, {
    key: 'close',
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
    key: 'activate',
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
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          children = _props.children,
          duration = _props.duration,
          active = _props.active,
          ToastComponent = _props.ToastComponent,
          rest = _objectWithoutProperties(_props, ['children', 'duration', 'active', 'ToastComponent']);

      var _state = this.state,
          shouldRender = _state.shouldRender,
          fadingOut = _state.fadingOut;


      return shouldRender && document && document.getElementById('mc-toaster') && React.createElement(
        _reactPortal.Portal,
        { node: document && document.getElementById('mc-toaster') },
        React.createElement(
          ToastComponent,
          _extends({
            active: active,
            duration: duration,
            fadingOut: fadingOut,
            onClick: function onClick() {
              _this4.close();
            }
          }, rest),
          children,
          ' ',
          React.createElement(
            CloseButton,
            null,
            '\xD7'
          )
        )
      );
    }
  }]);

  return Toast;
}(React.Component);

Toast.defaultProps = {
  duration: 10,
  active: false
};
var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Toast, _extends({}, defaultStyledComponents, props));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};