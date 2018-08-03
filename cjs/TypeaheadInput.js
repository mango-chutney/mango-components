"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var React = _interopRequireWildcard(require("react"));

var _downshift = _interopRequireDefault(require("downshift"));

var _matchSorter = _interopRequireDefault(require("match-sorter"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Input = require("./Input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultStyleProps = {};
exports.defaultStyleProps = defaultStyleProps;

var createStyledComponents = function createStyledComponents(styleProps) {
  var MenuComponent = _styledComponents.default.div.withConfig({
    componentId: "s1ah6m0p-0"
  })(["background:white;position:absolute;top:100%;left:0;width:100%;z-index:4;"]);

  var MenuWrapperComponent = _styledComponents.default.div.withConfig({
    componentId: "s1ah6m0p-1"
  })(["position:relative;"]);

  var ItemComponent = _styledComponents.default.div.withConfig({
    componentId: "s1ah6m0p-2"
  })(["background-color:", ";font-weight:", ";"], function (_ref) {
    var highlightedIndex = _ref.highlightedIndex,
        index = _ref.index;
    return highlightedIndex === index ? 'lightgray' : 'white';
  }, function (_ref2) {
    var selectedItem = _ref2.selectedItem,
        item = _ref2.item;
    return selectedItem === item ? 'bold' : 'normal';
  });

  return {
    ItemComponent: ItemComponent,
    MenuComponent: MenuComponent,
    MenuWrapperComponent: MenuWrapperComponent
  };
};

exports.createStyledComponents = createStyledComponents;

var TypeaheadInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TypeaheadInput, _React$Component);

  function TypeaheadInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TypeaheadInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TypeaheadInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelect", function (selectedItem) {
      var onChange = _this.props.input.onChange; // Unlike `createChangeHandler`, don't compose this with the one from
      // Downshift because the value we are provided is not an event.  We could
      // fake an event, but redux-form does some duck-typing to test whether the
      // argument onChange receives is an event or just a value:
      // https://github.com/erikras/redux-form/blob/2e2a6b02af6083dfda5606fb596d0a189edb9460/src/events/isEvent.js#L3
      // That could also be avoided by setting those properties to something
      // truthy, but I don't think it's worth the maintenance cost (it might
      // change in the future).  Just be aware that if you use something other
      // than redux-form that the 'onChange' prop will be called with a value, not
      // an event.
      // The type signature in redux-form:
      // https://github.com/erikras/redux-form/blob/2811705a22430450540b84cddf429b42b222e28d/src/FieldProps.types.js.flow#L33

      if (typeof onChange === 'function') {
        onChange(selectedItem);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createChangeHandler", function (_ref3) {
      var getInputProps = _ref3.getInputProps;
      return function (event) {
        // Make this event stick around so that we can pass it to other event
        // handlers.
        event.persist();
        var input = _this.props.input; // Get the original onChange handler passed to this component composed with
        // the one from Downshift.

        var _getInputProps = getInputProps(input),
            onChange = _getInputProps.onChange;

        if (typeof onChange === 'function') {
          onChange(event);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleStateChange", function (_ref4) {
      var inputValue = _ref4.inputValue,
          selectedItem = _ref4.selectedItem,
          type = _ref4.type;

      switch (type) {
        case _downshift.default.stateChangeTypes.keyDownEnter:
        case _downshift.default.stateChangeTypes.clickItem:
          {
            // Sometimes one of these is defined and the other isn't.
            _this.handleSelect(inputValue || selectedItem);

            break;
          }

        /*
        // Don't care about the rest, but they are listed for reference.
        case Downshift.stateChangeTypes.mouseUp:
        case Downshift.stateChangeTypes.itemMouseEnter:
        case Downshift.stateChangeTypes.keydownDownArrowUp:
        case Downshift.stateChangeTypes.keyDownArrowDown:
        case Downshift.stateChangeTypes.keyDownEscape:
        case Downshift.stateChangeTypes.blurInput:
        case Downshift.stateChangeTypes.keyDownSpaceButton:
        case Downshift.stateChangeTypes.clickButton:
        case Downshift.stateChangeTypes.blurButton:
        case Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem:
        case Downshift.stateChangeTypes.touchStart:
        case Downshift.stateChangeTypes.unknown:
        */
        // `changeInput` is already taken care of by passing the `input` prop to
        // the `InputComponent`.

        case _downshift.default.stateChangeTypes.changeInput:
        default:
          {
            break;
          }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderCallback", function (_ref5) {
      var getInputProps = _ref5.getInputProps,
          getItemProps = _ref5.getItemProps,
          getLabelProps = _ref5.getLabelProps,
          isOpen = _ref5.isOpen,
          inputValue = _ref5.inputValue,
          highlightedIndex = _ref5.highlightedIndex,
          selectedItem = _ref5.selectedItem;

      var _this$props = _this.props,
          WrapperComponent = _this$props.WrapperComponent,
          InputComponent = _this$props.InputComponent,
          ItemComponent = _this$props.ItemComponent,
          MenuComponent = _this$props.MenuComponent,
          MenuWrapperComponent = _this$props.MenuWrapperComponent,
          filterItems = _this$props.filterItems,
          input = _this$props.input,
          items = _this$props.items,
          label = _this$props.label,
          mapItemToString = _this$props.mapItemToString,
          renderItem = _this$props.renderItem,
          rest = _objectWithoutProperties(_this$props, ["WrapperComponent", "InputComponent", "ItemComponent", "MenuComponent", "MenuWrapperComponent", "filterItems", "input", "items", "label", "mapItemToString", "renderItem"]);

      var filteredItems = filterItems(items, inputValue);

      var inputProps = _objectSpread({}, rest, {
        label: (0, _Input.createLabelProps)(label, getLabelProps()),
        input: _objectSpread({}, input, getInputProps(input), {
          onChange: _this.createChangeHandler({
            getInputProps: getInputProps
          })
        }),
        InputDecoratorComponent: MenuWrapperComponent
      });

      var createItemProps = function createItemProps(item, index) {
        return _objectSpread({}, getItemProps({
          key: mapItemToString(item),
          index: index,
          item: item
        }), {
          index: index,
          selectedItem: selectedItem,
          highlightedIndex: highlightedIndex
        });
      };

      return React.createElement(WrapperComponent, null, React.createElement(InputComponent, inputProps, isOpen && !!filteredItems.length && React.createElement(MenuComponent, null, filteredItems.map(function (item, index) {
        return React.createElement(ItemComponent, createItemProps(item, index), typeof renderItem === 'function' ? renderItem(item) : mapItemToString(item));
      }))));
    });

    return _this;
  }

  _createClass(TypeaheadInput, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          input = _this$props2.input,
          mapItemToString = _this$props2.mapItemToString;
      return React.createElement(_downshift.default, {
        inputValue: input.value,
        onStateChange: this.handleStateChange,
        itemToString: mapItemToString
      }, this.renderCallback);
    }
  }]);

  return TypeaheadInput;
}(React.Component);

_defineProperty(TypeaheadInput, "defaultProps", {
  filterItems: function filterItems(items, inputValue) {
    return (0, _matchSorter.default)(items, inputValue, {
      maxRanking: _matchSorter.default.rankings.STARTS_WITH
    });
  },
  // Your mapItemToString function will be used as the key for each item, so
  // make sure it's unique.
  mapItemToString: function mapItemToString(item) {
    return item || '';
  },
  WrapperComponent: 'div' // Downshift wants to be wrapped in a div.

});

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  var InputComponent = (0, _Input.createComponent)();
  return function (props) {
    return React.createElement(TypeaheadInput, _objectSpread({
      InputComponent: InputComponent
    }, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;