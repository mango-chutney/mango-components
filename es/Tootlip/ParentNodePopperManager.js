function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Manager } from 'react-popper';

var ParentNodeManager =
/*#__PURE__*/
function (_Manager) {
  _inheritsLoose(ParentNodeManager, _Manager);

  function ParentNodeManager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Manager.call.apply(_Manager, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      shouldRender: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "anchorChild", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_setTargetNode", function (node) {
      _this.anchorChild = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getTargetNode", function () {
      return _this.anchorChild.parentNode;
    });

    return _this;
  }

  var _proto = ParentNodeManager.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // Hack to get this node to mount BEFORE the nodes rendered by
    // super.render() (otherwise this.anchorChild.parentNode will be null).
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      shouldRender: true
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.setState({
      shouldRender: false
    });
  };

  _proto.render = function render() {
    var shouldRender = this.state.shouldRender;
    return (// eslint-disable-next-line no-underscore-dangle
      React.createElement("span", {
        ref: this._setTargetNode
      }, shouldRender && _Manager.prototype.render.call(this))
    );
  };

  return ParentNodeManager;
}(Manager);

export default ParentNodeManager;