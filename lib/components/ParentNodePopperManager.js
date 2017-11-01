'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactPopper = require('react-popper');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentNodeManager = function (_Manager) {
  _inherits(ParentNodeManager, _Manager);

  function ParentNodeManager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ParentNodeManager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ParentNodeManager.__proto__ || Object.getPrototypeOf(ParentNodeManager)).call.apply(_ref, [this].concat(args))), _this), _this.state = { shouldRender: false }, _this.anchorChild = null, _this._setTargetNode = function (node) {
      _this.anchorChild = node;
    }, _this._getTargetNode = function () {
      return _this.anchorChild.parentNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ParentNodeManager, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Hack to get this node to mount BEFORE the nodes rendered by
      // super.render() (otherwise this.anchorChild.parentNode will be null).
      this.setState({ shouldRender: true });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setState({ shouldRender: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var shouldRender = this.state.shouldRender;


      return React.createElement(
        'span',
        { ref: this._setTargetNode },
        shouldRender && _get(ParentNodeManager.prototype.__proto__ || Object.getPrototypeOf(ParentNodeManager.prototype), 'render', this).call(this)
      );
    }
  }]);

  return ParentNodeManager;
}(_reactPopper.Manager);

exports.default = ParentNodeManager;