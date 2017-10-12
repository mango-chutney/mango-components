'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

class FakeDocumentBody {
  constructor({ height, left, top, width }) {
    this.height = 0;
    this.left = 0;
    this.top = 0;
    this.width = 0;

    this.height = height || 0;
    this.left = left || 0;
    this.top = top || 0;
    this.width = width || 0;
  }

  getBoundingClientRect() {
    return {
      height: this.height,
      left: this.left,
      top: this.top,
      width: this.width
    };
  }
}

const positions = {
  TOP_LEFT: 'TOP_LEFT',
  TOP_CENTER: 'TOP_CENTER',
  TOP_RIGHT: 'TOP_RIGHT',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  BOTTOM_LEFT: 'BOTTOM_LEFT',
  BOTTOM_CENTER: 'BOTTOM_CENTER',
  BOTTOM_RIGHT: 'BOTTOM_RIGHT'
};

const topStyles = `
  ::before {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    bottom: -8px;
    margin-left: -10px;
  }

  ::after {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    bottom: -6px;
    margin-left: -8px;
  }
`;

const bottomStyles = `
  &::before {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    margin-left: -10px;
    top: -8px;
  }

  &::after {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    margin-left: -8px;
    top: -6px;
  }
`;

const horizontalStyles = `
  ::after {
    border-bottom: 5px solid transparent;
    border-top: 5px solid transparent;
    top: 50%;
    transform: translateY(-50%);
  }
`;

/**
 * Simple tooltip, made because existing tooltip components didn't do what I
 * wanted (show/hide based on the value of some property).  Should be the child
 * of an element which is relatively positioned.
 *
 * <a data-tip='hover on me will keep the tootlip'>(･ω´･ )́)</a>`
 */

exports.default = ({ styles: { wrapper: wrapperStyles } } = {
  styles: { wrapper: '' }
}) => {
  var _class, _temp2;

  return _temp2 = _class = class Tootlip extends React.Component {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.state = {
        position: {
          left: 0,
          top: 0,
          positionalStyles: ''
        }
      }, this.didFinishRepositioning = false, this.updatePosition = remainingPositions => {
        this.didFinishRepositioning = false;

        const { position: desiredPosition, allowedPositions } = this.props;

        // eslint-disable-next-line no-underscore-dangle
        const _remainingPositions = remainingPositions === undefined ? [...allowedPositions] : remainingPositions;

        const position = (() => {
          if (remainingPositions === undefined) {
            return desiredPosition;
          }
          if (_remainingPositions && _remainingPositions.length > 0) {
            return _remainingPositions.pop();
          }
          return desiredPosition;
        })();

        try {
          this.setState({ position: _extends({}, this.getPosition(position)) });
          // eslint-disable-next-line react/no-find-dom-node
          const element = (0, _reactDom.findDOMNode)(this.portal);
          if (element) {
            if (Tootlip.isTouching(element) && _remainingPositions && _remainingPositions.length > 0) {
              this.updatePosition(_remainingPositions);
            } else {
              this.didFinishRepositioning = true;
              this.forceUpdate();
            }
          }
        } catch (error) {
          // fail silently if node was unmounted
        }
      }, _temp;
    }

    static getComputedDimensions(node) {
      const fallback = { height: 0, width: 0 };

      if (!(0, _canUseDOM2.default)()) {
        return fallback;
      }

      const { height, width } = window.getComputedStyle(node);

      if (height.includes('px') && width.includes('px')) {
        // remove 'px' from these so we can do arithmetic
        return {
          height: parseInt(height.slice(0, -2), 10),
          width: parseInt(width.slice(0, -2), 10)
        };
      }

      return fallback;
    }

    static getDimensions(element) {
      if (!element || !(0, _canUseDOM2.default)()) {
        return {
          width: 0,
          height: 0,
          xOffset: 0,
          yOffset: 0
        };
      }

      // $FlowFixMe
      const boundingClientRect = element.getBoundingClientRect();
      const xOffset = window.pageXOffset;
      const yOffset = window.pageYOffset;

      const addPageOffsetToBoundingClientRect = ({ top, left }) => ({
        xOffset: left + xOffset,
        yOffset: top + yOffset
      });

      return _extends({
        width: boundingClientRect.width,
        height: boundingClientRect.height
      }, addPageOffsetToBoundingClientRect(boundingClientRect));
    }

    static getPosition({
      element,
      anchor,
      position,
      xOffset = 0,
      yOffset = 0
    }) {
      const ownDimensions = Tootlip.getDimensions(element);
      const anchorDimensions = Tootlip.getDimensions(anchor);

      switch (position) {
        case Tootlip.positions.LEFT:
          {
            return {
              left: anchorDimensions.xOffset - (ownDimensions.width + xOffset),
              top: anchorDimensions.yOffset + (anchorDimensions.height / 2 - ownDimensions.height / 2),
              positionalStyles: `
            ::after {
              right: -6px;
            }
          `
            };
          }

        case Tootlip.positions.RIGHT:
          {
            return {
              left: anchorDimensions.xOffset + anchorDimensions.width + xOffset,
              top: anchorDimensions.yOffset + (anchorDimensions.height / 2 - ownDimensions.height / 2),
              positionalStyles: `
            ${horizontalStyles}

            ::after {
              left: -6px;
            }
          `
            };
          }

        case Tootlip.positions.BOTTOM_LEFT:
          {
            return {
              left: anchorDimensions.xOffset,
              top: anchorDimensions.yOffset + anchorDimensions.height + yOffset,
              positionalStyles: `
            ${bottomStyles}

            ::before {
              left: 2rem;
            }

            ::after {
              left: 2rem;
            }
          `
            };
          }

        case Tootlip.positions.BOTTOM_CENTER:
          {
            return {
              left: anchorDimensions.xOffset + (anchorDimensions.width / 2 - ownDimensions.width / 2),
              top: anchorDimensions.yOffset + anchorDimensions.height + yOffset,
              positionalStyles: `
            ${topStyles}

            ::before {
              left: 50%;
            }

            ::after {
              left: 50%;
            }
          `
            };
          }

        case Tootlip.positions.BOTTOM_RIGHT:
          {
            return {
              left: anchorDimensions.xOffset + (anchorDimensions.width - ownDimensions.width),
              top: anchorDimensions.yOffset + anchorDimensions.height + yOffset,
              positionalStyles: `
            ${bottomStyles}

            ::before {
              left: calc(100% - 2rem);
            }

            ::after {
              left: calc(100% - 2rem);
            }
          `
            };
          }

        case Tootlip.positions.TOP_LEFT:
          {
            return {
              left: anchorDimensions.xOffset,
              top: anchorDimensions.yOffset - (ownDimensions.height + yOffset),
              positionalStyles: `
            ${topStyles}

            ::before {
              left: 2rem;
            }

            ::after {
              left: 2rem;
            }
          `
            };
          }

        case Tootlip.positions.TOP_CENTER:
        default:
          {
            return {
              left: anchorDimensions.xOffset + (anchorDimensions.width / 2 - ownDimensions.width / 2),
              top: anchorDimensions.yOffset - (ownDimensions.height + yOffset),
              positionalStyles: `
            ${topStyles}

            ::before {
              left: 50%;
            }

            ::after {
              left: 50%;
            }
          `
            };
          }

        case Tootlip.positions.TOP_RIGHT:
          {
            return {
              left: anchorDimensions.xOffset + (anchorDimensions.width - ownDimensions.width),
              top: anchorDimensions.yOffset - (ownDimensions.height + yOffset),
              positionalStyles: `
            ${topStyles}

            ::before {
              left: calc(100% - 2rem);
            }

            ::after {
              left: calc(100% - 2rem);
            }
          `
            };
          }
      }
    }

    /**
     * @param {HTMLElement} element
     * @param {HTMLElement|undefined} [boundingElement]
     * @return {boolean}
     */
    static isTouching(element, boundingElement = new FakeDocumentBody({
      width: (0, _canUseDOM2.default)() ? window.innerWidth : 0,
      height: (0, _canUseDOM2.default)() && document.body ? document.body.clientHeight : 0,
      top: 0,
      left: 0
    })) {
      const ownDimensions = Tootlip.getDimensions(element);
      const boundingElementDimensions = Tootlip.getDimensions(boundingElement);
      const top = ownDimensions.yOffset >= boundingElementDimensions.yOffset;
      const left = ownDimensions.xOffset >= boundingElementDimensions.xOffset;
      const bottom = ownDimensions.height + ownDimensions.yOffset <= boundingElementDimensions.height + boundingElementDimensions.yOffset;
      const right = ownDimensions.width + ownDimensions.xOffset <= boundingElementDimensions.width + boundingElementDimensions.xOffset;

      return ![top, left, bottom, right].every(thingIsTrue => /* every */thingIsTrue);
    }

    componentWillMount() {
      window.addEventListener('orientationchange', this.updatePosition);
      window.addEventListener('resize', this.updatePosition);
    }

    componentWillReceiveProps() {
      this.updatePosition();
    }

    componentWillUnmount() {
      window.removeEventListener('orientationchange', this.updatePosition);
      window.removeEventListener('resize', this.updatePosition);
    }

    getPosition(position) {
      const fallback = { top: 0, left: 0 };

      if (!(0, _canUseDOM2.default)() || !this.portal) {
        return fallback;
      }

      // eslint-disable-next-line react/no-find-dom-node
      const element = (0, _reactDom.findDOMNode)(this.portal);

      if (!element) {
        return { top: 0, left: 0 };
      }

      if (!this.anchorChild) {
        return { top: 0, left: 0 };
      }

      const anchor = this.anchorChild.parentNode;

      const { xOffset, yOffset } = this.props;

      return Tootlip.getPosition({
        element,
        anchor,
        position,
        xOffset,
        yOffset
      });
    }

    render() {
      const { appElement, children, visible } = this.props;

      const { position: { top, left, positionalStyles } } = this.state;

      const Wrapper = _styledComponents2.default.div.withConfig({
        componentId: 's12ue5xj-0'
      })(['color:#fff;background-color:#222;border-radius:5px;cursor:help;display:inline-block;font-size:13px;min-width:180px;padding:8px 21px;pointer-events:', ';position:absolute;text-align:center;transition:opacity 300ms ease-in;max-width:calc(100vw - (1rem * 2));::before,::after{content:\'\';height:0;position:absolute;width:0;}', ';'], props => props.clickable ? 'auto' : 'none', positionalStyles).extend(wrapperStyles);

      return React.createElement(
        'span',
        {
          ref: node => {
            this.anchorChild = node;
          }
        },
        React.createElement(
          _reactPortal.Portal,
          {
            node: appElement,
            ref: node => {
              this.portal = node;
            }
          },
          React.createElement(
            Wrapper,
            {
              style: {
                top,
                left,
                opacity: visible && this.didFinishRepositioning ? 0.9 : 0
              }
            },
            children
          )
        )
      );
    }
  }, _class.defaultProps = {
    allowedPositions: ['TOP_CENTER', 'LEFT', 'RIGHT', 'BOTTOM_CENTER'],
    appElement: (0, _canUseDOM2.default)() ? document.body : undefined,
    children: undefined,
    position: 'TOP_CENTER',
    visible: false,
    xOffset: 16,
    yOffset: 16
  }, _class.positions = _extends({}, positions), _temp2;
};