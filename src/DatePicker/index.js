// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { FieldProps as $FieldProps } from 'redux-form';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateTime } from 'luxon';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import { rem } from 'polished';
import { createComponent as createInputComponent } from '../Input';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from '../types';
import type { $ReactDayPickerInputProps } from './types';
import { palette, fontWeights } from '../constants';

export type $StyledProps = {
  id?: string,
  label: string,
  placeholder: string,
  invalid?: boolean,
  disabled?: boolean,
} & $FieldProps;

export type $Props = {
  InputComponent: React.ComponentType<*>,
  LabelComponent: React.ComponentType<*>,
  OverlayWrapperComponent: React.ComponentType<*>,
  OverlayComponent: React.ComponentType<*>,
} & $StyledProps &
  $ReactDayPickerInputProps;

export const defaultStyleProps: {|
  overlayBackgroundColor: string,
  captionFontSize: string,
  color: string,
  disabledColor: string,
  fontSize: string,
  fontWeight: string | number,
  navButtonColor: string,
  outsideColor: string,
  todayButtonFontSize: string,
  todayColor: string,
  todayFontWeight: string | number,
  weekDayColor: string,
  weekDayFontSize: string,
  weekNumberBorderColor: string,
  weekNumberColor: string,
  weekNumberFontSize: string,
|} = {
  captionFontSize: rem(20),
  color: palette.darkGray,
  disabledColor: palette.lightGray,
  fontSize: rem(14),
  fontWeight: fontWeights.semibold,
  navButtonColor: palette.darkGray,
  outsideColor: palette.mediumGray,
  overlayBackgroundColor: palette.white,
  todayButtonFontSize: rem(8),
  todayColor: palette.primary,
  todayFontWeight: fontWeights.bold,
  weekDayColor: palette.darkGray,
  weekDayFontSize: rem(14),
  weekNumberBorderColor: palette.lightGray,
  weekNumberColor: palette.darkGray,
  weekNumberFontSize: rem(8),
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    OverlayWrapperComponent: $ReactComponentStyled<*>,
    OverlayComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const OverlayWrapperComponent = styled.div`
    position: relative;
  `;

  const OverlayComponent = styled.div`
    left: 0;
    z-index: 1;
    position: absolute;
    background: ${styleProps.overlayBackgroundColor};
    box-shadow: 0 ${rem(2)} ${rem(5)} rgba(0, 0, 0, 0.15);

    .DayPicker {
      display: inline-block;
    }

    .DayPicker-wrapper {
      position: relative;
      user-select: none;
      padding-bottom: 1rem;
      flex-direction: row;
    }

    .DayPicker-Months {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .DayPicker-Month {
      display: table;
      border-collapse: collapse;
      border-spacing: 0;
      user-select: none;
      margin: 0 1rem;
      margin-top: 1rem;
    }

    .DayPicker-NavButton {
      position: absolute;
      cursor: pointer;
      top: 1rem;
      right: 1.5rem;
      margin-top: 2px;
      color: ${styleProps.navButtonColor};
      width: 1.25rem;
      height: 1.25rem;
      display: inline-block;
      background-size: 50%;
      background-repeat: no-repeat;
      background-position: center;
    }

    .DayPicker-NavButton:hover {
      opacity: 0.8;
    }

    .DayPicker-NavButton--prev {
      margin-right: 1.5rem;
      nnbackground-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');
    }

    .DayPicker-NavButton--next {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');
    }

    .DayPicker-NavButton--interactionDisabled {
      display: none;
    }

    .DayPicker-Caption {
      padding: 0 0.5rem;
      display: table-caption;
      text-align: left;
      margin-bottom: 0.5rem;
    }

    .DayPicker-Caption > div {
      font-size: ${styleProps.captionFontSize};
      font-weight: ${styleProps.fontWeight};
    }

    .DayPicker-Weekdays {
      margin-top: 1rem;
      display: table-header-group;
    }

    .DayPicker-WeekdaysRow {
      display: table-row;
    }

    .DayPicker-Weekday {
      display: table-cell;
      padding: 0.5rem;
      font-size: ${styleProps.weekDayFontSize};
      text-align: center;
      color: ${styleProps.weekDayColor};
    }

    .DayPicker-Weekday abbr[title] {
      border-bottom: none;
      text-decoration: none;
    }

    .DayPicker-Body {
      display: table-row-group;
    }

    .DayPicker-Week {
      display: table-row;
    }

    .DayPicker-Day {
      display: table-cell;
      padding: 0.5rem;
      text-align: center;
      cursor: pointer;
      vertical-align: middle;
      border-radius: 50%;
    }

    .DayPicker-WeekNumber {
      display: table-cell;
      padding: 0.5rem;
      text-align: right;
      vertical-align: middle;
      min-width: 1rem;
      font-size: ${styleProps.weekNumberFontSize};
      cursor: pointer;
      color: ${styleProps.weekNumberColor};
      border-right: ${rem(1)} solid ${styleProps.weekNumberBorderColor};
    }

    .DayPicker--interactionDisabled .DayPicker-Day {
      cursor: default;
    }

    .DayPicker-Footer {
      padding-top: 0.5rem;
    }

    .DayPicker-TodayButton {
      border: none;
      background-image: none;
      background-color: transparent;
      box-shadow: none;
      cursor: pointer;
      color: ${styleProps.color};
      font-size: ${styleProps.todayButtonFontSize};
    }

    .DayPicker-Day--today {
      color: ${styleProps.todayColor};
      font-weight: ${styleProps.todayFontWeight};
    }

    .DayPicker-Day--outside {
      cursor: default;
      color: ${styleProps.outsideColor};
    }

    .DayPicker-Day--disabled {
      color: ${styleProps.disabledColor};
      cursor: default;
    }
  `;

  return {
    OverlayWrapperComponent,
    OverlayComponent,
  };
};

class DatePicker extends React.Component<$Props, void> {
  datePickerRef = React.createRef();

  static defaultProps = {
    dateFormat: 'dd/LL/yyyy',
    formatDate: (date: Date, format: string): string =>
      DateTime.fromJSDate(date).toFormat(format),
    parseDate: (date: string, format: string): ?Date => {
      const dateFromFormat = DateTime.fromFormat(date, format);

      if (dateFromFormat.isValid) {
        return dateFromFormat.toJSDate();
      }

      return undefined;
    },
  };

  handleOnDayChange = day => {
    const { dateFormat, formatDate, input, onDayChange } = this.props;

    if (day) {
      input.onChange(formatDate(day, dateFormat));

      if (this.datePickerRef.current) {
        this.datePickerRef.current.hideDayPicker();
      }
    }

    if (onDayChange && typeof onDayChange === 'function') {
      onDayChange(day);
    }
  };

  render() {
    const {
      InputComponent,
      OverlayWrapperComponent,
      OverlayComponent,
      classNames,
      clickUnselectsDay,
      component, // Unused, use InputComponent instead.
      dateFormat,
      dayPickerProps,
      // `format` will always be undefined when a Field child.  Use `dateFormat`
      // instead, it will get passed down as `format` to the wrapped
      // DayPickerInput component.
      format,
      formatDate,
      hideOnDayClick,
      inputProps,
      keepFocus,
      onBlur,
      onChange,
      onClick,
      onDayChange, // Will be called after this.handleOnDayChange.
      onFocus,
      onKeyUp,
      overlayComponent,
      parseDate,
      placeholder, // This will always be undefined if used as a Field child.
      showOverlay,
      value, // This will always be undefined if used as a Field child.
      input, // Passed down by redux-form when used as a Field child
      meta, // Passed down by redux-form when used as a Field child
      ...rest // these will be applied to InputComponent.
    } = this.props;

    const ComposedOverlayComponent = ({
      children,
      ...overlayProps
    }: {
      children: React.Node,
    }) => (
      <OverlayWrapperComponent {...overlayProps}>
        <OverlayComponent>{children}</OverlayComponent>
      </OverlayWrapperComponent>
    );

    const fieldProps = {
      ...inputProps,
      ...rest,
      input,
      meta,
      // Currently this component doesn't provide a good experience if you try
      // to edit the value yourself.  Just make it read only for now, so the
      // only way to manipulate it is by using the picker.
      readOnly: true,
    };

    const composedDatePickerProps = {
      ref: this.datePickerRef,
      value, // this will always be undefined if used as a Field child
      inputProps: fieldProps,
      placeholder,
      format: dateFormat,
      formatDate,
      parseDate,
      showOverlay,
      dayPickerProps,
      hideOnDayClick,
      clickUnselectsDay,
      keepFocus,
      component: InputComponent,
      overlayComponent: ComposedOverlayComponent,
      classNames,
      onDayChange: this.handleOnDayChange,
      onChange,
      onClick,
      onFocus,
      onBlur,
      onKeyUp,
    };

    return <DayPickerInput {...composedDatePickerProps} />;
  }
}

export const createComponent: $ComponentFactory<$Props> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  const InputComponent = createInputComponent();

  return (props: $Props) => (
    <DatePicker {...{ InputComponent, ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $Props>);
