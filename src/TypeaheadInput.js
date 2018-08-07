// @flow

import * as React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type { FieldProps as $FieldProps } from 'redux-form';
import {
  createComponent as createInputComponent,
  createLabelProps,
  createStyledComponents as createStyledInputComponents,
  defaultStyleProps as defaultInputStyleProps,
} from './Input';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';

export type $StyledProps = {
  label: string | React.ElementConfig<'label'>,
} & $FieldProps;

export type $Props = {
  ComposedInputComponent: React.ElementType,
  InputComponent: React.ElementType,
  ItemComponent: React.ElementType,
  MenuComponent: React.ElementType,
  MenuWrapperComponent: React.ElementType,
  WrapperComponent: React.ElementType,
  filterItems: (
    items: Array<any>,
    mapItemToString: (item: any) => string,
    inputValue: any,
  ) => Array<any>,
  items: Array<any>,
  mapItemToString: (item: any) => string,
  renderItem?: (item: any) => React.Node, // defaults to mapItemToString
} & $StyledProps;

const defaultStyledInputComponents = createStyledInputComponents(
  defaultInputStyleProps,
);

export const defaultStyleProps: {|
  InputComponent: $ReactComponentStyled<*>,
  InputDecoratorComponent: $ReactComponentStyled<*>,
|} = {
  InputComponent: defaultStyledInputComponents.InputComponent,
  InputDecoratorComponent: defaultStyledInputComponents.InputDecoratorComponent,
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    InputComponent: $ReactComponentStyled<*>,
    ItemComponent: $ReactComponentStyled<*>,
    MenuComponent: $ReactComponentStyled<*>,
    MenuWrapperComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
  // eslint-disable-next-line no-unused-vars
> = styleProps => {
  const MenuComponent = styled.div`
    background: white;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 4;
  `;

  const {
    InputComponent,
    InputDecoratorComponent,
  } = createStyledInputComponents(defaultInputStyleProps);

  const MenuWrapperComponent = InputDecoratorComponent;

  const ItemComponent = styled.span`
    display: block;

    color: ${defaultInputStyleProps.color};
    border-left: ${defaultInputStyleProps.borderWidth}
      ${defaultInputStyleProps.borderStyle}
      ${defaultInputStyleProps.activeBorderColor};
    border-right: ${defaultInputStyleProps.borderWidth}
      ${defaultInputStyleProps.borderStyle}
      ${defaultInputStyleProps.activeBorderColor};
    padding: 0.5rem 1rem;

    background-color: ${({ highlightedIndex, index }) =>
      highlightedIndex === index
        ? darken(0.05, defaultInputStyleProps.backgroundColor)
        : defaultInputStyleProps.backgroundColor};

    &:last-child {
      border-bottom: ${defaultInputStyleProps.borderWidth}
        ${defaultInputStyleProps.borderStyle}
        ${defaultInputStyleProps.activeBorderColor};
      border-bottom-right-radius: ${defaultInputStyleProps.borderRadius};
      border-bottom-left-radius: ${defaultInputStyleProps.borderRadius};
    }
  `;

  const StyledInputComponent = InputComponent.extend`
    ${({ styleProps: inputComponentStyleProps }) =>
      inputComponentStyleProps &&
      inputComponentStyleProps.isOpen &&
      inputComponentStyleProps.hasItems &&
      css`
        border-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `};
  `;

  return {
    InputComponent: StyledInputComponent,
    ItemComponent,
    MenuComponent,
    MenuWrapperComponent,
  };
};

type $State = {
  selectionStart: number,
  selectionEnd: number,
};

class TypeaheadInput extends React.Component<$Props, $State> {
  static defaultProps = {
    filterItems: (items, inputValue) =>
      matchSorter(items, inputValue, {
        maxRanking: matchSorter.rankings.STARTS_WITH,
      }),

    // Your mapItemToString function will be used as the key for each item, so
    // make sure it's unique.
    mapItemToString: item => item || '',

    WrapperComponent: 'div', // Downshift wants to be wrapped in a div.
  };

  handleSelect = (selectedItem: any) => {
    const {
      input: { onChange },
    } = this.props;
    // Unlike `createChangeHandler`, don't compose this with the one from
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
  };

  createChangeHandler = ({ getInputProps }) => (
    event: SyntheticInputEvent<HTMLInputElement>,
  ) => {
    // Make this event stick around so that we can pass it to other event
    // handlers.
    event.persist();

    const { input } = this.props;

    // Get the original onChange handler passed to this component composed with
    // the one from Downshift.
    const { onChange } = getInputProps(input);

    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  handleStateChange = ({ inputValue, selectedItem, type }) => {
    switch (type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem: {
        // Sometimes one of these is defined and the other isn't.
        this.handleSelect(inputValue || selectedItem);
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
      default: {
        break;
      }
    }
  };

  renderCallback = ({
    getInputProps,
    getItemProps,
    getLabelProps,
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItem,
  }) => {
    const {
      ComposedInputComponent,
      InputComponent,
      ItemComponent,
      MenuComponent,
      MenuWrapperComponent,
      WrapperComponent,
      filterItems,
      input,
      items,
      label,
      mapItemToString,
      renderItem,
      ...rest
    } = this.props;

    const filteredItems = filterItems(items, inputValue);

    const inputProps = {
      ...rest,
      label: createLabelProps(label, getLabelProps()),
      input: {
        ...input,
        ...getInputProps(input),
        onChange: this.createChangeHandler({ getInputProps }),
      },
      InputDecoratorComponent: MenuWrapperComponent,
    };

    const createItemProps = (item, index) => ({
      ...getItemProps({
        key: mapItemToString(item),
        index,
        item,
      }),
      index,
      selectedItem,
      highlightedIndex,
    });

    const styleProps = { isOpen, hasItems: filteredItems.length > 0 };

    return (
      <WrapperComponent>
        <ComposedInputComponent
          {...{ ...inputProps, styleProps, InputComponent }}
        >
          {isOpen &&
            !!filteredItems.length && (
              <MenuComponent {...{ styleProps }}>
                {filteredItems.map((item, index) => (
                  <ItemComponent
                    {...{ ...createItemProps(item, index), styleProps }}
                  >
                    {typeof renderItem === 'function'
                      ? renderItem(item)
                      : mapItemToString(item)}
                  </ItemComponent>
                ))}
              </MenuComponent>
            )}
        </ComposedInputComponent>
      </WrapperComponent>
    );
  };

  render() {
    const { input, mapItemToString } = this.props;

    return (
      <Downshift
        inputValue={input.value}
        onStateChange={this.handleStateChange}
        itemToString={mapItemToString}
      >
        {this.renderCallback}
      </Downshift>
    );
  }
}

export const createComponent: $ComponentFactory<$Props> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  const ComposedInputComponent = createInputComponent();
  return (props: $Props) => (
    <TypeaheadInput
      {...{ ComposedInputComponent, ...defaultStyledComponents, ...props }}
    />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $Props>);
