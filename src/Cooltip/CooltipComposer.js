// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { change } from 'redux-form';
import defaultsDeep from 'lodash/defaultsDeep';
import { ThemeProvider } from 'styled-components';
import type { FieldProps as $FieldProps } from 'redux-form';
import CoolChild from './CoolChild';
import OtherChild from './OtherChild';
import { defaultPipSize } from './PipComponent';
import * as constants from '../constants';

export type $Props = {
  children?: any,
  CoolChildrenWrapperComponent: React.ElementType,
  CooltipWrapperComponent: React.ElementType,
  ComposedInputComponent: React.ElementType,
  ComposedSelectComponent: React.ElementType,
  SelectWrapperComponent: React.ElementType,
  coolChildren: Array<typeof CoolChild>,
  CoolChildrenWrapperComponent: React.ElementType,
  defaultValue?: any,
  handleChange: (value: any) => any,
  initialize: () => any,
  initialValue: any,
  mapItemToString: (item: any) => string,
  meta: $PropertyType<$FieldProps, 'meta'>,
  otherChild?: typeof OtherChild,
  PipComponent: React.ElementType,
  selectLabel?: string,
  TiptextComponent: React.ElementType,
  TiptextWrapperComponent: React.ElementType,
  theme: any,
  value?: any,
  valueFormatter?: () => any,
} & $FieldProps;

type $State = {
  activeIndex: number,
};

function mergeCoolChildren(coolChildren: any, otherChild: any) {
  if (!otherChild) {
    return coolChildren;
  }

  return [...coolChildren, otherChild];
}

function isOtherChild(
  component:
    | React.Element<typeof CoolChild>
    | React.Element<typeof OtherChild>
    | any,
): boolean {
  // $FlowFixMe
  return component.type.displayName === OtherChild.displayName;
}

const defaultTheme = {
  pipSize: defaultPipSize,
  breakpointForTinyMode: '600px',
  coolChild: {
    color: constants.palette.darkGray,
    backgroundColor: constants.palette.lightGray,
    border: constants.palette.border,
    activeBackgroundColor: constants.palette.primary,
    activeColor: constants.palette.white,
  },
};

class Cooltip extends React.Component<$Props, $State> {
  static defaultProps = {
    mapItemToString: (item: any): string => item || '',
    theme: defaultTheme,
  };

  state = { activeIndex: -1 };

  componentDidMount() {
    const { initialize } = this.props;

    initialize();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { otherChild, coolChildren, initialValue, input } = nextProps;

    const { activeIndex: oldActiveIndex } = prevState;

    const mergedCoolChildren = mergeCoolChildren(coolChildren, otherChild);

    const maybeActiveIndex = mergedCoolChildren.findIndex(
      (child: any) =>
        child.props.value ===
        (oldActiveIndex > -1 ? input.value : initialValue),
    );

    const activeIndex =
      maybeActiveIndex > -1
        ? maybeActiveIndex
        : mergedCoolChildren.findIndex(isOtherChild);

    if (activeIndex === -1) {
      throw new Error(
        'Unable to find active index, please set an initial value',
      );
    }

    return {
      activeIndex,
    };
  }

  renderNormalMode() {
    const {
      coolChildren,
      CoolChildrenWrapperComponent,
      handleChange,
      meta,
      otherChild,
      ...rest
    } = this.props;

    const { activeIndex } = this.state;

    const mergedCoolChildren = mergeCoolChildren(coolChildren, otherChild);

    return (
      <CoolChildrenWrapperComponent {...rest}>
        {mergedCoolChildren.map((ChildComponent: any, index) =>
          React.cloneElement(ChildComponent, {
            onClick: () => {
              handleChange(
                isOtherChild(ChildComponent) ? '' : ChildComponent.props.value,
              )();
            },
            meta,
            key: String(ChildComponent.props.value || index),
            active: index === activeIndex,
          }),
        )}
      </CoolChildrenWrapperComponent>
    );
  }

  renderTinyMode() {
    const {
      ComposedSelectComponent,
      SelectWrapperComponent,
      coolChildren,
      input,
      meta,
      otherChild,
      selectLabel,
      ...rest
    } = this.props;

    const mergedCoolChildren = mergeCoolChildren(coolChildren, otherChild);

    const inputProps = {
      ...rest,
      input,
      meta,
    };

    return (
      <SelectWrapperComponent>
        <ComposedSelectComponent
          {...{ ...inputProps }}
          name={`${input.name}-select`}
          id={`${input.name}-select`}
          label={selectLabel}
        >
          {mergedCoolChildren.map((ChildComponent: any, index) => (
            <option
              value={ChildComponent.props.value || input.value}
              key={String(ChildComponent.props.value || index)}
            >
              {ChildComponent.props.label}
            </option>
          ))}
        </ComposedSelectComponent>
      </SelectWrapperComponent>
    );
  }

  render() {
    const {
      children,
      ComposedInputComponent,
      ComposedSelectComponent,
      coolChildren,
      CoolChildrenWrapperComponent,
      CooltipWrapperComponent,
      defaultValue,
      handleChange,
      input,
      meta,
      otherChild,
      PipComponent,
      selectLabel,
      TiptextComponent,
      TiptextWrapperComponent,
      theme,
      valueFormatter,
      ...rest
    } = this.props;

    const { activeIndex } = this.state;

    const inputProps = {
      ...rest,
      input,
      meta,
    };

    const mergedCoolChildren = mergeCoolChildren(coolChildren, otherChild);

    const activeCoolChild: any = mergedCoolChildren[activeIndex];

    return (
      mergedCoolChildren && (
        <ThemeProvider theme={defaultsDeep({ ...theme }, defaultTheme)}>
          <CooltipWrapperComponent>
            {this.renderNormalMode()}
            {this.renderTinyMode()}
            {activeCoolChild && (
              <TiptextWrapperComponent>
                {activeCoolChild.props.children && (
                  <>
                    <PipComponent
                      coolChildrenLength={mergedCoolChildren.length}
                      activeIndex={activeIndex}
                    />
                    <TiptextComponent>
                      {activeCoolChild.props.children}
                    </TiptextComponent>
                  </>
                )}
                {isOtherChild(activeCoolChild) && (
                  <ComposedInputComponent
                    {...{ ...inputProps }}
                    name={`${input.name}-input`}
                    id={`${input.name}-input`}
                  />
                )}
              </TiptextWrapperComponent>
            )}
            {children}
          </CooltipWrapperComponent>
        </ThemeProvider>
      )
    );
  }
}

const mapDispatchToProps = (
  dispatch: (actionCreator: any) => void,
  ownProps: $Props,
) => ({
  handleChange(value) {
    return () => {
      dispatch(change(ownProps.meta.form, ownProps.input.name, value));
    };
  },
  initialize() {
    return dispatch(
      change(ownProps.meta.form, ownProps.input.name, ownProps.initialValue),
    );
  },
});

export default connect(
  undefined,
  // $FlowFixMe
  mapDispatchToProps,
)(Cooltip);
