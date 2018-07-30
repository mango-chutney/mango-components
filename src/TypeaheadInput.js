// @flow

import * as React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import styled from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type { FieldProps as $FieldProps } from 'redux-form';
import {
  defaultStyleProps as defaultInputStyleProps,
  createStyledComponents as createInputStyledComponents,
} from './Input';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';

export type $StyledProps = {
  id?: string,
  label: string,
  placeholder: string,
} & $FieldProps;

export type $Props = {
  InputComponent: React.ComponentType<*>,
  ItemComponent: React.ComponentType<*>,
  LabelComponent: React.ComponentType<*>,
  MenuComponent: React.ComponentType<*>,
  MenuWrapperComponent: React.ComponentType<*>,
  filterItems: (
    items: Array<any>,
    mapItemToString: (item: any) => string,
    inputValue: any,
  ) => Array<any>,
  items: Array<any>,
  mapItemToString: (item: any) => string,
  renderItem: (item: any) => React.Node,
} & $StyledProps;

export const defaultStyleProps = defaultInputStyleProps;

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    InputComponent: $ReactComponentStyled<*>,
    ItemComponent: $ReactComponentStyled<*>,
    LabelComponent: $ReactComponentStyled<*>,
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

  const MenuWrapperComponent = styled.div`
    position: relative;
  `;

  const ItemComponent = styled.div`
    background-color: ${({ highlightedIndex, index }) =>
      highlightedIndex === index ? 'lightgray' : 'white'};
    font-weight: ${({ selectedItem, item }) =>
      selectedItem === item ? 'bold' : 'normal'};
  `;

  return {
    ...createInputStyledComponents(defaultInputStyleProps),
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
  inputRef = React.createRef();

  static defaultProps = {
    filterItems: (items, inputValue) =>
      matchSorter(items, inputValue, {
        maxRanking: matchSorter.rankings.STARTS_WITH,
      }),

    mapItemToString: item => item || '',
    renderItem: item => item || '',
  };

  state = {
    selectionStart: 0,
    selectionEnd: 0,
  };

  componentDidUpdate() {
    if (this.inputRef.current === null) {
      return;
    }

    if (this.inputRef.current) {
      const { selectionStart, selectionEnd } = this.state;

      this.inputRef.current.setSelectionRange(selectionStart, selectionEnd);
    }
  }

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

    // The type signature in redux-form: https://github.com/erikras/redux-form/blob/2811705a22430450540b84cddf429b42b222e28d/src/FieldProps.types.js.flow#L33

    if (this.inputRef.current && selectedItem) {
      this.setState({
        selectionStart: selectedItem.length,
        selectionEnd: selectedItem.length,
      });
    }

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

    if (this.inputRef.current) {
      this.setState({
        selectionStart: this.inputRef.current.selectionStart,
        selectionEnd: this.inputRef.current.selectionEnd,
      });
    }

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
      InputComponent,
      ItemComponent,
      LabelComponent,
      MenuComponent,
      MenuWrapperComponent,
      filterItems,
      input,
      items,
      label,
      mapItemToString,
      meta,
      renderItem,
      ...rest
    } = this.props;

    const filteredItems = filterItems(items, inputValue);

    return (
      <div>
        <LabelComponent {...getLabelProps()}>
          {label}
          <MenuWrapperComponent>
            <InputComponent
              {...{
                ...getInputProps(input),
                ...rest,
                onChange: this.createChangeHandler({ getInputProps }),
                // This ref dance is to preserve the cursor position.
                //
                // See these issues for more details:
                // https://github.com/facebook/react/issues/955
                // https://github.com/facebook/react/issues/12762
                // https://github.com/paypal/downshift/issues/217
                // https://github.com/erikras/redux-form/issues/2049
                // https://github.com/erikras/redux-form/issues/3253
                //
                // Also, we're using the `innerRef` prop because
                // styled-components won't propagate the `ref` prop.  If
                // `InputComponent` is not a styled-component, you will need to
                // map the `inputRef` prop to `ref`.
                innerRef: this.inputRef,
              }}
            />
            {isOpen &&
              !!filteredItems.length && (
                <MenuComponent>
                  {filteredItems.map((item, index) => (
                    <ItemComponent
                      {...{
                        ...getItemProps({
                          key: mapItemToString(item),
                          index,
                          item,
                        }),
                        index,
                        selectedItem,
                        highlightedIndex,
                      }}
                    >
                      {renderItem(item)}
                    </ItemComponent>
                  ))}
                </MenuComponent>
              )}
          </MenuWrapperComponent>
        </LabelComponent>
      </div>
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
  return (props: $Props) => (
    <TypeaheadInput {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $Props>);
