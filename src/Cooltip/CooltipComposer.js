// @flow

import * as React from 'react';
import defaultsDeep from 'lodash/defaultsDeep';
import omit from 'lodash/omit';
import { ThemeProvider } from 'styled-components';
import type { FieldProps as $FieldProps } from 'formik';
import CoolChild from './CoolChild';
import OtherChild from './OtherChild';
import defaultTheme from './styles';

const defaultOtherChildInputFormatter = (input: string) => {
  if (/^\$[^$]/.test(input)) {
    return input;
  }
  if (/^\$+/.test(input)) {
    return input.replace(/^\$+/, '$');
  }
  return `$${input || ''}`;
};

const defaultOtherChildInputDeformatter = (input: string) =>
  input.replace(/\$/, '');

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

export type $Props = {
  children?: any,
  ComposedInputComponent: React.ElementType,
  ComposedSelectComponent: React.ElementType,
  coolChildren: Array<typeof CoolChild>,
  CoolChildrenWrapperComponent: React.ElementType,
  CoolChildrenWrapperComponent: React.ElementType,
  cooltipLabel?: string => string,
  CooltipWrapperComponent: React.ElementType,
  deformatOtherChild: string => string,
  formatOtherChild: string => string,
  initialValue: any,
  LabelComponent: React.ElementType,
  mapItemToString: (item: any) => string,
  otherChild?: typeof OtherChild,
  PipComponent: React.ElementType,
  selectLabel?: string,
  SelectWrapperComponent: React.ElementType,
  theme: any,
  TiptextComponent: React.ElementType,
  TiptextWrapperComponent: React.ElementType,
} & $FieldProps;

type $State = {
  activeIndex: number,
};

class Cooltip extends React.Component<$Props, $State> {
  static findActiveIndex(value: any, nextProps: $Props) {
    const { otherChild, coolChildren } = nextProps;

    const mergedCoolChildren = mergeCoolChildren(coolChildren, otherChild);

    const maybeActiveIndex = mergedCoolChildren.findIndex(
      (child: any) => child.props.value === value,
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

    return activeIndex;
  }

  static defaultProps = {
    mapItemToString: (item: any): string => item || '',
    theme: defaultTheme,
    formatOtherChild: defaultOtherChildInputFormatter,
    deformatOtherChild: defaultOtherChildInputDeformatter,
  };

  state = { activeIndex: -1 };

  static getDerivedStateFromProps(nextProps: $Props, prevState: $State) {
    const { field } = nextProps;

    const { activeIndex: oldActiveIndex } = prevState;

    if (oldActiveIndex === -1) {
      return {
        activeIndex: Cooltip.findActiveIndex(field.value, nextProps),
      };
    }

    return null;
  }

  renderNormalMode() {
    const {
      coolChildren,
      CoolChildrenWrapperComponent,
      otherChild,
      field,
      form,
    } = this.props;

    const { activeIndex } = this.state;

    const mergedCoolChildren = mergeCoolChildren(coolChildren, otherChild);

    return (
      <CoolChildrenWrapperComponent>
        {mergedCoolChildren.map((ChildComponent: any, index) =>
          React.cloneElement(ChildComponent, {
            onClick: e => {
              e.persist();

              form.setFieldValue(field.name, ChildComponent.props.value);

              this.setState({
                activeIndex: Cooltip.findActiveIndex(
                  e.target.value || '',
                  this.props,
                ),
              });
            },
            key: String(ChildComponent.props.value || index),
            active: index === activeIndex,
            field,
            form,
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
      otherChild,
      selectLabel,
      theme, // remove theme to not clobber parent theme
      field,
      form,
      ...rest
    } = this.props;

    const { activeIndex } = this.state;

    const mergedCoolChildren = mergeCoolChildren(coolChildren, otherChild);

    const inputProps = {
      ...rest,
      field: {
        ...field,
        value:
          activeIndex === mergedCoolChildren.length - 1
            ? ''
            : mergedCoolChildren[activeIndex].props.value,
      },
      form,
    };

    return (
      <SelectWrapperComponent>
        <ComposedSelectComponent
          {...{ ...omit(inputProps, ['field.onChange', 'field.onBlur']) }}
          name={`${field.name}-select`}
          id={`${field.name}-select`}
          label={selectLabel}
          onChange={e => {
            e.persist();

            form.setFieldValue(e.target.value || '');

            this.setState({
              activeIndex: Cooltip.findActiveIndex(
                e.target.value || '',
                this.props,
              ),
            });
          }}
        >
          {mergedCoolChildren.map((ChildComponent: any, index) => (
            <option
              value={ChildComponent.props.value || ''}
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
      cooltipLabel,
      CooltipWrapperComponent,
      deformatOtherChild,
      formatOtherChild,
      LabelComponent,
      otherChild,
      PipComponent,
      theme,
      TiptextComponent,
      TiptextWrapperComponent,
      field,
      form,
      ...rest
    } = this.props;

    const { activeIndex } = this.state;

    const inputProps = omit(
      {
        ...rest,
        field: {
          ...field,
          value: formatOtherChild(field.value),
        },
        form,
      },
      ['field.onChange', 'field.onBlur'],
    );

    const mergedCoolChildren = mergeCoolChildren(coolChildren, otherChild);

    const activeCoolChild: any = mergedCoolChildren[activeIndex];

    return (
      mergedCoolChildren && (
        <ThemeProvider theme={defaultsDeep({ ...theme }, defaultTheme)}>
          <CooltipWrapperComponent
            aria-labelledby={cooltipLabel && `${field.name}-outer-label`}
          >
            {cooltipLabel && (
              <LabelComponent
                id={`${field.name}-outer-label`}
                {...{ form, field }}
              >
                {cooltipLabel}
              </LabelComponent>
            )}
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
                    name={`${field.name}-input`}
                    id={`${field.name}-input`}
                    onChange={e => {
                      form.setFieldValue(
                        field.name,
                        deformatOtherChild(e.target.value) || '',
                      );
                    }}
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

export default Cooltip;
