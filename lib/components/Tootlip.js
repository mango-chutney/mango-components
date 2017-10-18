'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactPortal = require('react-portal');

var _canUseDOM = require('./lib/canUseDOM');

var _canUseDOM2 = _interopRequireDefault(_canUseDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeDocumentBody = function () {
  function FakeDocumentBody(_ref) {
    var height = _ref.height,
        left = _ref.left,
        top = _ref.top,
        width = _ref.width;

    _classCallCheck(this, FakeDocumentBody);

    this.height = 0;
    this.left = 0;
    this.top = 0;
    this.width = 0;

    this.height = height || 0;
    this.left = left || 0;
    this.top = top || 0;
    this.width = width || 0;
  }

  _createClass(FakeDocumentBody, [{
    key: 'getBoundingClientRect',
    value: function getBoundingClientRect() {
      return {
        height: this.height,
        left: this.left,
        top: this.top,
        width: this.width
      };
    }
  }]);

  return FakeDocumentBody;
}();

var positions = {
  TOP_LEFT: 'TOP_LEFT',
  TOP_CENTER: 'TOP_CENTER',
  TOP_RIGHT: 'TOP_RIGHT',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  BOTTOM_LEFT: 'BOTTOM_LEFT',
  BOTTOM_CENTER: 'BOTTOM_CENTER',
  BOTTOM_RIGHT: 'BOTTOM_RIGHT'
};

var topStyles = '\n  ::before {\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    bottom: -8px;\n    margin-left: -10px;\n  }\n\n  ::after {\n    border-left: 8px solid transparent;\n    border-right: 8px solid transparent;\n    bottom: -6px;\n    margin-left: -8px;\n  }\n';

var bottomStyles = '\n  &::before {\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    margin-left: -10px;\n    top: -8px;\n  }\n\n  &::after {\n    border-left: 8px solid transparent;\n    border-right: 8px solid transparent;\n    margin-left: -8px;\n    top: -6px;\n  }\n';

var horizontalStyles = '\n  ::after {\n    border-bottom: 5px solid transparent;\n    border-top: 5px solid transparent;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n';

/**
 * Simple tooltip, made because existing tooltip components didn't do what I
 * wanted (show/hide based on the value of some property).  Should be the child
 * of an element which is relatively positioned.
 *
 * <a data-tip='hover on me will keep the tootlip'>(･ω´･ )́)</a>`
 */

exports.default = function () {
  var _class, _temp2;

  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    styles: { wrapper: '' }
  },
      wrapperStyles = _ref2.styles.wrapper;

  return _temp2 = _class = function (_React$Component) {
    _inherits(Tootlip, _React$Component);

    function Tootlip() {
      var _ref3;

      var _temp, _this, _ret;

      _classCallCheck(this, Tootlip);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Tootlip.__proto__ || Object.getPrototypeOf(Tootlip)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
        position: {
          left: 0,
          top: 0,
          positionalStyles: ''
        }
      }, _this.didFinishRepositioning = false, _this.updatePosition = function (remainingPositions) {
        _this.didFinishRepositioning = false;

        var _this$props = _this.props,
            desiredPosition = _this$props.position,
            allowedPositions = _this$props.allowedPositions;

        // eslint-disable-next-line no-underscore-dangle

        var _remainingPositions = remainingPositions === undefined ? [].concat(_toConsumableArray(allowedPositions)) : remainingPositions;

        var position = function () {
          if (remainingPositions === undefined) {
            return desiredPosition;
          }
          if (_remainingPositions && _remainingPositions.length > 0) {
            return _remainingPositions.pop();
          }
          return desiredPosition;
        }();

        try {
          _this.setState({ position: _extends({}, _this.getPosition(position)) });
          // eslint-disable-next-line react/no-find-dom-node
          var element = (0, _reactDom.findDOMNode)(_this.portal);
          if (element) {
            if (Tootlip.isTouching(element) && _remainingPositions && _remainingPositions.length > 0) {
              _this.updatePosition(_remainingPositions);
            } else {
              _this.didFinishRepositioning = true;
              _this.forceUpdate();
            }
          }
        } catch (error) {
          // fail silently if node was unmounted
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Tootlip, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        window.addEventListener('orientationchange', this.updatePosition);
        window.addEventListener('resize', this.updatePosition);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps() {
        this.updatePosition();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('orientationchange', this.updatePosition);
        window.removeEventListener('resize', this.updatePosition);
      }
    }, {
      key: 'getPosition',
      value: function getPosition(position) {
        var fallback = { top: 0, left: 0 };

        if (!(0, _canUseDOM2.default)() || !this.portal) {
          return fallback;
        }

        // eslint-disable-next-line react/no-find-dom-node
        var element = (0, _reactDom.findDOMNode)(this.portal);

        if (!element) {
          return { top: 0, left: 0 };
        }

        if (!this.anchorChild) {
          return { top: 0, left: 0 };
        }

        var anchor = this.anchorChild.parentNode;

        var _props = this.props,
            xOffset = _props.xOffset,
            yOffset = _props.yOffset;


        return Tootlip.getPosition({
          element: element,
          anchor: anchor,
          position: position,
          xOffset: xOffset,
          yOffset: yOffset
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props2 = this.props,
            appElement = _props2.appElement,
            children = _props2.children,
            visible = _props2.visible;
        var _state$position = this.state.position,
            top = _state$position.top,
            left = _state$position.left,
            positionalStyles = _state$position.positionalStyles;


        var Wrapper = _styledComponents2.default.div.withConfig({
          componentId: 's12ue5xj-0'
        })(['color:#fff;background-color:#222;border-radius:5px;cursor:help;display:inline-block;font-size:13px;min-width:180px;padding:8px 21px;pointer-events:', ';position:absolute;text-align:center;transition:opacity 300ms ease-in;max-width:calc(100vw - (1rem * 2));::before,::after{content:\'\';height:0;position:absolute;width:0;}', ';'], function (props) {
          return props.clickable ? 'auto' : 'none';
        }, positionalStyles).extend(wrapperStyles);

        return React.createElement(
          'span',
          {
            ref: function ref(node) {
              _this2.anchorChild = node;
            }
          },
          React.createElement(
            _reactPortal.Portal,
            {
              node: appElement,
              ref: function ref(node) {
                _this2.portal = node;
              }
            },
            React.createElement(
              Wrapper,
              {
                style: {
                  top: top,
                  left: left,
                  opacity: visible && this.didFinishRepositioning ? 0.9 : 0
                }
              },
              children
            )
          )
        );
      }
    }], [{
      key: 'getComputedDimensions',
      value: function getComputedDimensions(node) {
        var fallback = { height: 0, width: 0 };

        if (!(0, _canUseDOM2.default)()) {
          return fallback;
        }

        var _window$getComputedSt = window.getComputedStyle(node),
            height = _window$getComputedSt.height,
            width = _window$getComputedSt.width;

        if (height.includes('px') && width.includes('px')) {
          // remove 'px' from these so we can do arithmetic
          return {
            height: parseInt(height.slice(0, -2), 10),
            width: parseInt(width.slice(0, -2), 10)
          };
        }

        return fallback;
      }
    }, {
      key: 'getDimensions',
      value: function getDimensions(element) {
        if (!element || !(0, _canUseDOM2.default)()) {
          return {
            width: 0,
            height: 0,
            xOffset: 0,
            yOffset: 0
          };
        }

        // $FlowFixMe
        var boundingClientRect = element.getBoundingClientRect();
        var xOffset = window.pageXOffset;
        var yOffset = window.pageYOffset;

        var addPageOffsetToBoundingClientRect = function addPageOffsetToBoundingClientRect(_ref4) {
          var top = _ref4.top,
              left = _ref4.left;
          return {
            xOffset: left + xOffset,
            yOffset: top + yOffset
          };
        };

        return _extends({
          width: boundingClientRect.width,
          height: boundingClientRect.height
        }, addPageOffsetToBoundingClientRect(boundingClientRect));
      }
    }, {
      key: 'getPosition',
      value: function getPosition(_ref5) {
        var element = _ref5.element,
            anchor = _ref5.anchor,
            position = _ref5.position,
            _ref5$xOffset = _ref5.xOffset,
            xOffset = _ref5$xOffset === undefined ? 0 : _ref5$xOffset,
            _ref5$yOffset = _ref5.yOffset,
            yOffset = _ref5$yOffset === undefined ? 0 : _ref5$yOffset;

        var ownDimensions = Tootlip.getDimensions(element);
        var anchorDimensions = Tootlip.getDimensions(anchor);

        switch (position) {
          case Tootlip.positions.LEFT:
            {
              return {
                left: anchorDimensions.xOffset - (ownDimensions.width + xOffset),
                top: anchorDimensions.yOffset + (anchorDimensions.height / 2 - ownDimensions.height / 2),
                positionalStyles: '\n            ::after {\n              right: -6px;\n            }\n          '
              };
            }

          case Tootlip.positions.RIGHT:
            {
              return {
                left: anchorDimensions.xOffset + anchorDimensions.width + xOffset,
                top: anchorDimensions.yOffset + (anchorDimensions.height / 2 - ownDimensions.height / 2),
                positionalStyles: '\n            ' + horizontalStyles + '\n\n            ::after {\n              left: -6px;\n            }\n          '
              };
            }

          case Tootlip.positions.BOTTOM_LEFT:
            {
              return {
                left: anchorDimensions.xOffset,
                top: anchorDimensions.yOffset + anchorDimensions.height + yOffset,
                positionalStyles: '\n            ' + bottomStyles + '\n\n            ::before {\n              left: 2rem;\n            }\n\n            ::after {\n              left: 2rem;\n            }\n          '
              };
            }

          case Tootlip.positions.BOTTOM_CENTER:
            {
              return {
                left: anchorDimensions.xOffset + (anchorDimensions.width / 2 - ownDimensions.width / 2),
                top: anchorDimensions.yOffset + anchorDimensions.height + yOffset,
                positionalStyles: '\n            ' + topStyles + '\n\n            ::before {\n              left: 50%;\n            }\n\n            ::after {\n              left: 50%;\n            }\n          '
              };
            }

          case Tootlip.positions.BOTTOM_RIGHT:
            {
              return {
                left: anchorDimensions.xOffset + (anchorDimensions.width - ownDimensions.width),
                top: anchorDimensions.yOffset + anchorDimensions.height + yOffset,
                positionalStyles: '\n            ' + bottomStyles + '\n\n            ::before {\n              left: calc(100% - 2rem);\n            }\n\n            ::after {\n              left: calc(100% - 2rem);\n            }\n          '
              };
            }

          case Tootlip.positions.TOP_LEFT:
            {
              return {
                left: anchorDimensions.xOffset,
                top: anchorDimensions.yOffset - (ownDimensions.height + yOffset),
                positionalStyles: '\n            ' + topStyles + '\n\n            ::before {\n              left: 2rem;\n            }\n\n            ::after {\n              left: 2rem;\n            }\n          '
              };
            }

          case Tootlip.positions.TOP_CENTER:
          default:
            {
              return {
                left: anchorDimensions.xOffset + (anchorDimensions.width / 2 - ownDimensions.width / 2),
                top: anchorDimensions.yOffset - (ownDimensions.height + yOffset),
                positionalStyles: '\n            ' + topStyles + '\n\n            ::before {\n              left: 50%;\n            }\n\n            ::after {\n              left: 50%;\n            }\n          '
              };
            }

          case Tootlip.positions.TOP_RIGHT:
            {
              return {
                left: anchorDimensions.xOffset + (anchorDimensions.width - ownDimensions.width),
                top: anchorDimensions.yOffset - (ownDimensions.height + yOffset),
                positionalStyles: '\n            ' + topStyles + '\n\n            ::before {\n              left: calc(100% - 2rem);\n            }\n\n            ::after {\n              left: calc(100% - 2rem);\n            }\n          '
              };
            }
        }
      }

      /**
       * @param {HTMLElement} element
       * @param {HTMLElement|undefined} [boundingElement]
       * @return {boolean}
       */

    }, {
      key: 'isTouching',
      value: function isTouching(element) {
        var boundingElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FakeDocumentBody({
          width: (0, _canUseDOM2.default)() ? window.innerWidth : 0,
          height: (0, _canUseDOM2.default)() && document.body ? document.body.clientHeight : 0,
          top: 0,
          left: 0
        });

        var ownDimensions = Tootlip.getDimensions(element);
        var boundingElementDimensions = Tootlip.getDimensions(boundingElement);
        var top = ownDimensions.yOffset >= boundingElementDimensions.yOffset;
        var left = ownDimensions.xOffset >= boundingElementDimensions.xOffset;
        var bottom = ownDimensions.height + ownDimensions.yOffset <= boundingElementDimensions.height + boundingElementDimensions.yOffset;
        var right = ownDimensions.width + ownDimensions.xOffset <= boundingElementDimensions.width + boundingElementDimensions.xOffset;

        return ![top, left, bottom, right].every(function (thingIsTrue) {
          return (/* every */thingIsTrue
          );
        });
      }
    }]);

    return Tootlip;
  }(React.Component), _class.defaultProps = {
    allowedPositions: ['TOP_CENTER', 'LEFT', 'RIGHT', 'BOTTOM_CENTER'],
    appElement: (0, _canUseDOM2.default)() ? document.body : undefined,
    children: undefined,
    position: 'TOP_CENTER',
    visible: false,
    xOffset: 16,
    yOffset: 16
  }, _class.positions = _extends({}, positions), _temp2;
};