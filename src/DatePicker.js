// @flow

import * as React from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateTime } from 'luxon';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import type { FieldProps as $FieldProps } from 'redux-form';
import { rem } from 'polished';
import {
  defaultStyleProps as defaultInputStyleProps,
  createStyledComponents as createInputStyledComponents,
} from './Input';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';
import { palette, fontWeights } from './constants';

export type $StyledProps = {
  id?: string,
  label: string,
  placeholder: string,
} & $FieldProps;

export type $Props = {
  InputComponent: React.ComponentType<*>,
  LabelComponent: React.ComponentType<*>,
  OverlayWrapperComponent: React.ComponentType<*>,
  OverlayComponent: React.ComponentType<*>,
  dateFormat: string,
  calendarProps: *,
} & $StyledProps;

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

const formatDate = (dateObject, format) =>
  DateTime.fromJSDate(dateObject).toFormat(format);

const parseDate = (dateString, format) => {
  const dateFromFormat = DateTime.fromFormat(dateString, format);

  if (dateFromFormat.isValid) {
    return dateFromFormat.toJSDate();
  }

  return undefined;
};

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    InputComponent: $ReactComponentStyled<*>,
    LabelComponent: $ReactComponentStyled<*>,
    OverlayWrapperComponent: $ReactComponentStyled<*>,
    OverlayComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
> = styleProps => {
  const LabelComponent = styled.span`
    font-size: ${styleProps.fontSize};
    font-weight: ${styleProps.fontWeight};
    display: block;
  `;

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
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');
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
    ...createInputStyledComponents(defaultInputStyleProps),
    LabelComponent,
    OverlayWrapperComponent,
    OverlayComponent,
  };
};

function DatePicker({
  InputComponent,
  LabelComponent,
  OverlayWrapperComponent,
  OverlayComponent,
  input,
  label,
  dateFormat,
  inputProps,
  calendarProps,
  ...rest
}: $Props) {
  return (
    <label htmlFor={input.name}>
      {label && <LabelComponent>{label}</LabelComponent>}
      <DayPickerInput
        format={dateFormat}
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={`${DateTime.local().toFormat(dateFormat)}`}
        inputProps={{ ...input }}
        component={props => <InputComponent {...props} />}
        onDayChange={day => input.onChange(formatDate(day, dateFormat))}
        overlayComponent={({
          children,
          ...props
        }: {
          children: React.Node,
        }) => (
          <OverlayWrapperComponent {...props}>
            <OverlayComponent>{children}</OverlayComponent>
          </OverlayWrapperComponent>
        )}
        dayPickerProps={{ ...calendarProps }}
        {...rest}
      />
    </label>
  );
}

DatePicker.defaultProps = {
  dateFormat: 'dd/LL/yyyy',
};

export const createComponent: $ComponentFactory<$Props> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $Props) => (
    <DatePicker {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $Props>);
