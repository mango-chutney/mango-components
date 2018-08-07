import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import * as React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { createComponent as createInputComponent, createLabelProps, createStyledComponents as createStyledInputComponents, defaultStyleProps as defaultInputStyleProps } from './Input';
var defaultStyledInputComponents = createStyledInputComponents(defaultInputStyleProps);
export var defaultStyleProps = {
  InputComponent: defaultStyledInputComponents.InputComponent,
  InputDecoratorComponent: defaultStyledInputComponents.InputDecoratorComponent
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var MenuComponent = styled.div.withConfig({
    componentId: "s1ah6m0p-0"
  })(["background:white;position:absolute;top:100%;left:0;width:100%;z-index:4;"]);
  var InputComponent = styleProps.InputComponent,
      InputDecoratorComponent = styleProps.InputDecoratorComponent;
  var MenuWrapperComponent = InputDecoratorComponent;
  var ItemComponent = styled.span.withConfig({
    componentId: "s1ah6m0p-1"
  })(["display:block;color:", ";border-left:", " ", " ", ";border-right:", " ", " ", ";padding:0.5rem 1rem;background-color:", ";&:last-child{border-bottom:", " ", " ", ";border-bottom-right-radius:", ";border-bottom-left-radius:", ";}"], defaultInputStyleProps.color, defaultInputStyleProps.borderWidth, defaultInputStyleProps.borderStyle, defaultInputStyleProps.activeBorderColor, defaultInputStyleProps.borderWidth, defaultInputStyleProps.borderStyle, defaultInputStyleProps.activeBorderColor, function (_ref) {
    var highlightedIndex = _ref.highlightedIndex,
        index = _ref.index;
    return highlightedIndex === index ? darken(0.05, defaultInputStyleProps.backgroundColor) : defaultInputStyleProps.backgroundColor;
  }, defaultInputStyleProps.borderWidth, defaultInputStyleProps.borderStyle, defaultInputStyleProps.activeBorderColor, defaultInputStyleProps.borderRadius, defaultInputStyleProps.borderRadius);
  var StyledInputComponent = InputComponent.extend(_templateObject(), function (_ref2) {
    var inputComponentStyleProps = _ref2.styleProps;
    return inputComponentStyleProps && inputComponentStyleProps.isOpen && inputComponentStyleProps.hasItems && css(["&,&:active,&:focus{border-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}"]);
  });
  return {
    InputComponent: StyledInputComponent,
    ItemComponent: ItemComponent,
    MenuComponent: MenuComponent,
    MenuWrapperComponent: MenuWrapperComponent
  };
};

var TypeaheadInput =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TypeaheadInput, _React$Component);

  function TypeaheadInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

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
        case Downshift.stateChangeTypes.keyDownEnter:
        case Downshift.stateChangeTypes.clickItem:
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

        case Downshift.stateChangeTypes.changeInput:
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
          ComposedInputComponent = _this$props.ComposedInputComponent,
          InputComponent = _this$props.InputComponent,
          ItemComponent = _this$props.ItemComponent,
          MenuComponent = _this$props.MenuComponent,
          MenuWrapperComponent = _this$props.MenuWrapperComponent,
          WrapperComponent = _this$props.WrapperComponent,
          filterItems = _this$props.filterItems,
          input = _this$props.input,
          items = _this$props.items,
          label = _this$props.label,
          mapItemToString = _this$props.mapItemToString,
          renderItem = _this$props.renderItem,
          rest = _objectWithoutPropertiesLoose(_this$props, ["ComposedInputComponent", "InputComponent", "ItemComponent", "MenuComponent", "MenuWrapperComponent", "WrapperComponent", "filterItems", "input", "items", "label", "mapItemToString", "renderItem"]);

      var filteredItems = filterItems(items, inputValue);
      var inputProps = Object.assign({}, rest, {
        label: createLabelProps(label, getLabelProps()),
        input: Object.assign({}, input, getInputProps(input), {
          onChange: _this.createChangeHandler({
            getInputProps: getInputProps
          })
        }),
        InputDecoratorComponent: MenuWrapperComponent
      });

      var createItemProps = function createItemProps(item, index) {
        return Object.assign({}, getItemProps({
          key: mapItemToString(item),
          index: index,
          item: item
        }), {
          index: index,
          selectedItem: selectedItem,
          highlightedIndex: highlightedIndex
        });
      };

      var styleProps = {
        isOpen: isOpen,
        hasItems: filteredItems.length > 0
      };
      return React.createElement(WrapperComponent, null, React.createElement(ComposedInputComponent, Object.assign({}, inputProps, {
        styleProps: styleProps,
        InputComponent: InputComponent
      }), isOpen && !!filteredItems.length && React.createElement(MenuComponent, {
        styleProps: styleProps
      }, filteredItems.map(function (item, index) {
        return React.createElement(ItemComponent, Object.assign({}, createItemProps(item, index), {
          styleProps: styleProps
        }), typeof renderItem === 'function' ? renderItem(item) : mapItemToString(item));
      }))));
    });

    return _this;
  }

  var _proto = TypeaheadInput.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        input = _this$props2.input,
        mapItemToString = _this$props2.mapItemToString;
    return React.createElement(Downshift, {
      inputValue: input.value,
      onStateChange: this.handleStateChange,
      itemToString: mapItemToString
    }, this.renderCallback);
  };

  return TypeaheadInput;
}(React.Component);

_defineProperty(TypeaheadInput, "defaultProps", {
  filterItems: function filterItems(items, inputValue) {
    return matchSorter(items, inputValue, {
      maxRanking: matchSorter.rankings.STARTS_WITH
    });
  },
  // Your mapItemToString function will be used as the key for each item, so
  // make sure it's unique.
  mapItemToString: function mapItemToString(item) {
    return item || '';
  },
  WrapperComponent: 'div' // Downshift wants to be wrapped in a div.

});

export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  var ComposedInputComponent = createInputComponent();
  return function (props) {
    return React.createElement(TypeaheadInput, Object.assign({
      ComposedInputComponent: ComposedInputComponent
    }, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};