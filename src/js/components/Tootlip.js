/*
 * components/Tootlip.js
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Portal from 'react-portal';

class FakeDocumentBody {
  constructor({ height, left, top, width }) {
    this.height = height;
    this.left = left;
    this.top = top;
    this.width = width;
  }

  getBoundingClientRect() {
    return {
      height: this.height,
      left: this.left,
      top: this.top,
      width: this.width,
    };
  }
}

/**
 * Simple tooltip, made because existing tooltip components didn't do what I
 * wanted (show/hide based on the value of some property).  Should be the child
 * of an element which is relatively positioned.
 *
 * <a data-tip='hover on me will keep the tootlip'>(･ω´･ )́)</a>`
 */
export default class Tootlip extends Component {
  static propTypes = {
    allowedPositions: PropTypes.arrayOf(PropTypes.string),
    appElement: PropTypes.instanceOf(window.HTMLElement),
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.string,
    type: PropTypes.string,
    visible: PropTypes.bool.isRequired,
    xOffset: PropTypes.number.isRequired, // pixels
    yOffset: PropTypes.number.isRequired, // pixels
  }

  static defaultProps = {
    allowedPositions: [
      'TOP_CENTER',
      'LEFT',
      'RIGHT',
      'BOTTOM_CENTER',
    ],
    appElement: document.body,
    children: undefined,
    className: undefined,
    position: 'TOP_CENTER',
    type: 'dark',
    visible: false,
    xOffset: 16,
    yOffset: 16,
  }

  static getComputedDimensions(node) {
    const { height, width } = window.getComputedStyle(node);

    if (height.includes('px') && width.includes('px')) {
      // remove 'px' from these so we can do arithmetic
      return {
        height: parseInt(height.slice(0, -2), 10),
        width: parseInt(width.slice(0, -2), 10),
      };
    }

    return { height: 0, width: 0 };
  }

  static getDimensions(element) {
    const boundingClientRect = element.getBoundingClientRect();
    const xOffset = window.pageXOffset;
    const yOffset = window.pageYOffset;

    const addPageOffsetToBoundingClientRect = ({ top, left }) => ({
      xOffset: left + xOffset,
      yOffset: top + yOffset,
    });

    return {
      width: boundingClientRect.width,
      height: boundingClientRect.height,
      ...addPageOffsetToBoundingClientRect(boundingClientRect),
    };
  }

  static positions = {
    TOP_LEFT: 'TOP_LEFT',
    TOP_CENTER: 'TOP_CENTER',
    TOP_RIGHT: 'TOP_RIGHT',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    BOTTOM_LEFT: 'BOTTOM_LEFT',
    BOTTOM_CENTER: 'BOTTOM_CENTER',
    BOTTOM_RIGHT: 'BOTTOM_RIGHT',
  };

  static getPosition({
    element,
    anchor,
    position,
    xOffset = 0,
    yOffset = 0,
  }) {
    const ownDimensions = Tootlip.getDimensions(element);
    const anchorDimensions = Tootlip.getDimensions(anchor);

    switch (position) {
      case Tootlip.positions.LEFT: {
        return {
          left: anchorDimensions.xOffset - (ownDimensions.width + xOffset),
          top: anchorDimensions.yOffset
             + ((anchorDimensions.height / 2) - (ownDimensions.height / 2)),
          classNames: 'tootlip--place-left',
        };
      }

      case Tootlip.positions.RIGHT: {
        return {
          left: anchorDimensions.xOffset + anchorDimensions.width + xOffset,
          top: anchorDimensions.yOffset
             + ((anchorDimensions.height / 2) - (ownDimensions.height / 2)),
          classNames: 'tootlip--place-right',
        };
      }

      case Tootlip.positions.BOTTOM_LEFT: {
        return {
          left: anchorDimensions.xOffset,
          top: anchorDimensions.yOffset + anchorDimensions.height + yOffset,
          classNames: 'tootlip--place-bottom tootlip--place-bottom--left',
        };
      }

      case Tootlip.positions.BOTTOM_CENTER: {
        return {
          left: anchorDimensions.xOffset
            + ((anchorDimensions.width / 2) - (ownDimensions.width / 2)),
          top: anchorDimensions.yOffset + anchorDimensions.height + yOffset,
          classNames: 'tootlip--place-bottom tootlip--place-bottom--center',
        };
      }

      case Tootlip.positions.BOTTOM_RIGHT: {
        return {
          left: anchorDimensions.xOffset
              + (anchorDimensions.width - ownDimensions.width),
          top: anchorDimensions.yOffset + anchorDimensions.height + yOffset,
          classNames: 'tootlip--place-bottom tootlip--place-bottom--right',
        };
      }

      case Tootlip.positions.TOP_LEFT: {
        return {
          left: anchorDimensions.xOffset,
          top: anchorDimensions.yOffset - (ownDimensions.height + yOffset),
          classNames: 'tootlip--place-top tootlip--place-top--left',
        };
      }

      case Tootlip.positions.TOP_CENTER:
      default: {
        return {
          left: anchorDimensions.xOffset
            + ((anchorDimensions.width / 2) - (ownDimensions.width / 2)),
          top: anchorDimensions.yOffset - (ownDimensions.height + yOffset),
          classNames: 'tootlip--place-top tootlip--place-top--center',
        };
      }

      case Tootlip.positions.TOP_RIGHT: {
        return {
          left: anchorDimensions.xOffset
            + (anchorDimensions.width - ownDimensions.width),
          top: anchorDimensions.yOffset - (ownDimensions.height + yOffset),
          classNames: 'tootlip--place-top tootlip--place-top--right',
        };
      }
    }
  }

  /**
   * @param {HTMLElement} element
   * @param {HTMLElement|undefined} [boundingElement]
   * @return {boolean}
   */
  static isTouching({
    element,
    boundingElement = new FakeDocumentBody({
      width: window.innerWidth,
      height: document.body.clientHeight,
      top: 0,
      left: 0,
    }),
    checkLeftAndRightOnly = false,
    checkTopAndBottomOnly = false,
  }) {
    const ownDimensions = Tootlip.getDimensions(element);
    const boundingElementDimensions = Tootlip.getDimensions(boundingElement);
    const top = (ownDimensions.yOffset >= boundingElementDimensions.yOffset);
    const left = (ownDimensions.xOffset >= boundingElementDimensions.xOffset);
    const bottom = ((ownDimensions.height + ownDimensions.yOffset)
                    <= (boundingElementDimensions.height
                        + boundingElementDimensions.yOffset));
    const right = ((ownDimensions.width + ownDimensions.xOffset)
                   <= (boundingElementDimensions.width
                       + boundingElementDimensions.xOffset));

    if (checkLeftAndRightOnly) {
      return !(left === right === true);
    }

    if (checkTopAndBottomOnly) {
      return !(top === bottom === true);
    }

    return !([top, left, bottom, right]
             .every(thingIsTrue => /* every */thingIsTrue));
  }

  constructor(props) {
    super(props);
    this.state = { position: { left: 0, top: 0 } };
    this.updatePosition = this.updatePosition.bind(this);
    this.anchorChild = null;
    this.didFinishRepositioning = false;
    this.portal = null;
    this.timeout = null;
  }

  componentWillMount() {
    window.addEventListener('orientationchange', this.updatePosition);
    window.addEventListener('resize', this.updatePosition);
  }

  componentWillReceiveProps() {
    this.updatePosition();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    window.removeEventListener('orientationchange', this.updatePosition);
    window.removeEventListener('resize', this.updatePosition);
  }

  getPosition(position) {
    if (!this.portal) {
      return { top: 0, left: 0 };
    }

    if (!this.portal.node) {
      return { top: 0, left: 0 };
    }

    if (!this.anchorChild) {
      return { top: 0, left: 0 };
    }

    const anchor = this.anchorChild.parentNode;
    const element = this.portal.node;

    const { xOffset, yOffset } = this.props;

    return Tootlip.getPosition({ element, anchor, position, xOffset, yOffset });
  }

  updatePosition(remainingPositions) {
    this.didFinishRepositioning = false;

    const { position: desiredPosition, allowedPositions } = this.props;

    const _remainingPositions = remainingPositions === undefined
          ? [...allowedPositions] : remainingPositions;

    const position = (() => {
      if (remainingPositions === undefined) {
        return desiredPosition;
      } if (_remainingPositions.length > 0) {
        return _remainingPositions.pop();
      }
      return desiredPosition;
    })();

    this.timeout = setTimeout(() => {
      try {
        this.setState({ position: { ...this.getPosition(position) } });
        if (this.portal.node) {
          if (Tootlip.isTouching({ element: this.portal.node })
              && (_remainingPositions.length > 0)) {
            this.updatePosition(_remainingPositions);
          } else {
            this.didFinishRepositioning = true;
            this.forceUpdate();
          }
        }
      } catch (error) {
        // fail silently if node was unmounted
      }
    }, 0);
  }

  render() {
    const {
      appElement,
      children,
      className,
      type,
      visible,
    } = this.props;

    const {
      position: {
        classNames: computedClassNames,
        ...computedStyles
      },
    } = this.state;

    const portalClassNames = classNames(
      className, 'tootlip', computedClassNames, {
        'tootlip--visible tootlip--clickable': visible
          && this.didFinishRepositioning,
        'tootlip--type-dark': type === 'dark',
        'tootlip--type-light': type === 'light',
      });

    return (
      <span
        ref={(node) => { this.anchorChild = node; }}
        className="tootlip-anchor"
      >
        <Portal
          appElement={appElement}
          isOpen={visible}
          className={portalClassNames}
          style={{ ...computedStyles }}
          ref={(node) => { this.portal = node; }}
        >
          <div>
            {children}
          </div>
        </Portal>
      </span>
    );
  }
}
