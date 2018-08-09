import "core-js/modules/es6.object.assign";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import once from 'lodash/once';
import { createComponent as createToastComponent, createStyledComponents as createStyledToastComponents, defaultStyleProps as defaultToastStyleProps } from './Toast';
var Toast = createToastComponent();

var _createStyledToastCom = createStyledToastComponents(defaultToastStyleProps),
    ToastComponent = _createStyledToastCom.ToastComponent; // This is a class for the sake of restricting dimiss to run once.  If this were
// a functional component, each render would create a new `once` bound function,
// so it wouldn't actually limit dismiss from being called more than once.  This
// way, it gets bound when the instance is created only.
//
// More info: https://stackoverflow.com/a/28046731


var PersistentToast =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PersistentToast, _React$Component);

  function PersistentToast() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", once(function () {
      var dismiss = _this.props.dismiss;
      dismiss();
    }));

    return _this;
  }

  var _proto = PersistentToast.prototype;

  _proto.render = function render() {
    return React.createElement(Toast, Object.assign({
      onClick: this.handleClick,
      ToastComponent: ToastComponent
    }, this.props));
  };

  return PersistentToast;
}(React.Component);

export default PersistentToast;