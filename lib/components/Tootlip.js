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

var _popper = require('popper.js');

var _popper2 = _interopRequireDefault(_popper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Tootlip.__proto__ || Object.getPrototypeOf(Tootlip)).call.apply(_ref3, [this].concat(args))), _this), _this.applyPopperStyle = function (data) {
        console.log(data);
      }, _this.componentDidMount = function () {
        if (_this.anchorChild && _this.portal) {
          if (_this.anchorChild.parentNode) {
            var reference = _this.anchorChild.parentNode;
            var popper = (0, _reactDom.findDOMNode)(_this.portal);

            new _popper2.default(reference, popper, {
              modifiers: {
                applyStyle: { enabled: false },
                applyReactStyle: {
                  enabled: true,
                  fn: _this.applyReactStyle,
                  order: 800
                }
              }
            });
          }
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // static getComputedDimensions(node) {
    //   const fallback = { height: 0, width: 0 };

    //   if (!canUseDOM()) {
    //     return fallback;
    //   }

    //   const { height, width } = window.getComputedStyle(node);

    //   if (height.includes('px') && width.includes('px')) {
    //     // remove 'px' from these so we can do arithmetic
    //     return {
    //       height: parseInt(height.slice(0, -2), 10),
    //       width: parseInt(width.slice(0, -2), 10),
    //     };
    //   }

    //   return fallback;
    // }

    // static getDimensions(element) {
    //   if (!element || !canUseDOM()) {
    //     return {
    //       width: 0,
    //       height: 0,
    //       xOffset: 0,
    //       yOffset: 0,
    //     };
    //   }

    //   // $FlowFixMe
    //   const boundingClientRect = (element:
    //     | Element
    //     | FakeDocumentBody).getBoundingClientRect();
    //   const xOffset = window.pageXOffset;
    //   const yOffset = window.pageYOffset;

    //   const addPageOffsetToBoundingClientRect = ({ top, left }) => ({
    //     xOffset: left + xOffset,
    //     yOffset: top + yOffset,
    //   });

    //   return {
    //     width: boundingClientRect.width,
    //     height: boundingClientRect.height,
    //     ...addPageOffsetToBoundingClientRect(boundingClientRect),
    //   };
    // }

    // static getPosition({
    //   element,
    //   anchor,
    //   position,
    //   xOffset = 0,
    //   yOffset = 0,
    // }) {
    //   const ownDimensions = Tootlip.getDimensions(element);
    //   const anchorDimensions = Tootlip.getDimensions(anchor);

    //   switch (position) {
    //     case Tootlip.positions.LEFT: {
    //       return {
    //         left: anchorDimensions.xOffset - (ownDimensions.width + xOffset),
    //         top:
    //           anchorDimensions.yOffset +
    //           (anchorDimensions.height / 2 - ownDimensions.height / 2),
    //         positionalStyles: `
    //         ::after {
    //           right: -6px;
    //         }
    //       `,
    //       };
    //     }

    //     case Tootlip.positions.RIGHT: {
    //       return {
    //         left: anchorDimensions.xOffset + anchorDimensions.width + xOffset,
    //         top:
    //           anchorDimensions.yOffset +
    //           (anchorDimensions.height / 2 - ownDimensions.height / 2),
    //         positionalStyles: `
    //         ${horizontalStyles}

    //         ::after {
    //           left: -6px;
    //         }
    //       `,
    //       };
    //     }

    //     case Tootlip.positions.BOTTOM_LEFT: {
    //       return {
    //         left: anchorDimensions.xOffset,
    //         top: anchorDimensions.yOffset + anchorDimensions.height + yOffset,
    //         positionalStyles: `
    //         ${bottomStyles}

    //         ::before {
    //           left: 2rem;
    //         }

    //         ::after {
    //           left: 2rem;
    //         }
    //       `,
    //       };
    //     }

    //     case Tootlip.positions.BOTTOM_CENTER: {
    //       return {
    //         left:
    //           anchorDimensions.xOffset +
    //           (anchorDimensions.width / 2 - ownDimensions.width / 2),
    //         top: anchorDimensions.yOffset + anchorDimensions.height + yOffset,
    //         positionalStyles: `
    //         ${topStyles}

    //         ::before {
    //           left: 50%;
    //         }

    //         ::after {
    //           left: 50%;
    //         }
    //       `,
    //       };
    //     }

    //     case Tootlip.positions.BOTTOM_RIGHT: {
    //       return {
    //         left:
    //           anchorDimensions.xOffset +
    //           (anchorDimensions.width - ownDimensions.width),
    //         top: anchorDimensions.yOffset + anchorDimensions.height + yOffset,
    //         positionalStyles: `
    //         ${bottomStyles}

    //         ::before {
    //           left: calc(100% - 2rem);
    //         }

    //         ::after {
    //           left: calc(100% - 2rem);
    //         }
    //       `,
    //       };
    //     }

    //     case Tootlip.positions.TOP_LEFT: {
    //       return {
    //         left: anchorDimensions.xOffset,
    //         top: anchorDimensions.yOffset - (ownDimensions.height + yOffset),
    //         positionalStyles: `
    //         ${topStyles}

    //         ::before {
    //           left: 2rem;
    //         }

    //         ::after {
    //           left: 2rem;
    //         }
    //       `,
    //       };
    //     }

    //     case Tootlip.positions.TOP_CENTER:
    //     default: {
    //       return {
    //         left:
    //           anchorDimensions.xOffset +
    //           (anchorDimensions.width / 2 - ownDimensions.width / 2),
    //         top: anchorDimensions.yOffset - (ownDimensions.height + yOffset),
    //         positionalStyles: `
    //         ${topStyles}

    //         ::before {
    //           left: 50%;
    //         }

    //         ::after {
    //           left: 50%;
    //         }
    //       `,
    //       };
    //     }

    //     case Tootlip.positions.TOP_RIGHT: {
    //       return {
    //         left:
    //           anchorDimensions.xOffset +
    //           (anchorDimensions.width - ownDimensions.width),
    //         top: anchorDimensions.yOffset - (ownDimensions.height + yOffset),
    //         positionalStyles: `
    //         ${topStyles}

    //         ::before {
    //           left: calc(100% - 2rem);
    //         }

    //         ::after {
    //           left: calc(100% - 2rem);
    //         }
    //       `,
    //       };
    //     }
    //   }
    // }

    // /**
    //  * @param {HTMLElement} element
    //  * @param {HTMLElement|undefined} [boundingElement]
    //  * @return {boolean}
    //  */
    // static isTouching(
    //   element,
    //   boundingElement = new FakeDocumentBody({
    //     width: canUseDOM() ? window.innerWidth : 0,
    //     height: canUseDOM() && document.body ? document.body.clientHeight : 0,
    //     top: 0,
    //     left: 0,
    //   }),
    // ) {
    //   const ownDimensions = Tootlip.getDimensions(element);
    //   const boundingElementDimensions = Tootlip.getDimensions(boundingElement);
    //   const top = ownDimensions.yOffset >= boundingElementDimensions.yOffset;
    //   const left = ownDimensions.xOffset >= boundingElementDimensions.xOffset;
    //   const bottom =
    //     ownDimensions.height + ownDimensions.yOffset <=
    //     boundingElementDimensions.height + boundingElementDimensions.yOffset;
    //   const right =
    //     ownDimensions.width + ownDimensions.xOffset <=
    //     boundingElementDimensions.width + boundingElementDimensions.xOffset;

    //   return ![top, left, bottom, right].every(
    //     thingIsTrue => /* every */ thingIsTrue,
    //   );
    // }

    // state: State = {
    //   position: {
    //     left: 0,
    //     top: 0,
    //     positionalStyles: '',
    //   },
    // };

    // componentWillMount() {
    //   window.addEventListener('orientationchange', this.updatePosition);
    //   window.addEventListener('resize', this.updatePosition);
    // }

    // componentWillReceiveProps() {
    //   this.updatePosition();
    // }

    // componentWillUnmount() {
    //   window.removeEventListener('orientationchange', this.updatePosition);
    //   window.removeEventListener('resize', this.updatePosition);
    // }

    // getPosition(position: ?AllowedPosition) {
    //   const fallback = { top: 0, left: 0 };

    //   if (!canUseDOM() || !this.portal) {
    //     return fallback;
    //   }

    //   // eslint-disable-next-line react/no-find-dom-node
    //   const element = findDOMNode(this.portal);

    //   if (!element) {
    //     return { top: 0, left: 0 };
    //   }

    //   if (!this.anchorChild) {
    //     return { top: 0, left: 0 };
    //   }

    //   const anchor = this.anchorChild.parentNode;

    //   const { xOffset, yOffset } = this.props;

    //   return Tootlip.getPosition({
    //     element,
    //     anchor,
    //     position,
    //     xOffset,
    //     yOffset,
    //   });
    // }

    // didFinishRepositioning: boolean = false;
    // anchorChild: ?Element;
    // portal: ?Element;

    // updatePosition = (remainingPositions: ?Array<AllowedPosition>) => {
    //   this.didFinishRepositioning = false;

    //   const { position: desiredPosition, allowedPositions } = this.props;

    //   // eslint-disable-next-line no-underscore-dangle
    //   const _remainingPositions =
    //     remainingPositions === undefined
    //       ? [...allowedPositions]
    //       : remainingPositions;

    //   const position = ((): ?AllowedPosition => {
    //     if (remainingPositions === undefined) {
    //       return desiredPosition;
    //     }
    //     if (_remainingPositions && _remainingPositions.length > 0) {
    //       return _remainingPositions.pop();
    //     }
    //     return desiredPosition;
    //   })();

    //   try {
    //     this.setState({ position: { ...this.getPosition(position) } });
    //     // eslint-disable-next-line react/no-find-dom-node
    //     const element = findDOMNode(this.portal);
    //     if (element) {
    //       if (
    //         Tootlip.isTouching(element) &&
    //         _remainingPositions &&
    //         _remainingPositions.length > 0
    //       ) {
    //         this.updatePosition(_remainingPositions);
    //       } else {
    //         this.didFinishRepositioning = true;
    //         this.forceUpdate();
    //       }
    //     }
    //   } catch (error) {
    //     // fail silently if node was unmounted
    //   }
    // };

    _createClass(Tootlip, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            appElement = _props.appElement,
            children = _props.children,
            visible = _props.visible;

        /* const { position: { top, left, positionalStyles } } = this.state;*/

        var top = 0;
        var left = 0;
        var positionalStyles = 0;

        var Wrapper = _styledComponents2.default.div.withConfig({
          componentId: 'eo6fm-0'
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
                  left: left
                }
              },
              children
            )
          )
        );
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