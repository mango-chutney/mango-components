import "core-js/modules/es6.object.assign";
import * as React from 'react';
import styled from 'styled-components';
import { rem, transparentize } from 'polished';
import { createStyledComponents as createStyledCheckboxComponents, Checkbox } from './Checkbox';
import { palette } from './constants';
export var defaultStyleProps = {
  checkboxSize: 40,
  checkboxColor: palette.primary
};
export var createStyledComponents = function createStyledComponents(styleProps) {
  var baseComponents = createStyledCheckboxComponents(Object.assign({}, defaultStyleProps, styleProps));
  var StyledLabelComponent = styled(baseComponents.LabelComponent).withConfig({
    componentId: "s3sxrcn-0"
  })(["padding:2rem;display:inline-block;font-size:", ";background:", ";border-radius:", ";"], rem(24), transparentize(0.5, palette.border), rem(4));
  var StyledInputComponent = styled(baseComponents.InputComponent).withConfig({
    componentId: "s3sxrcn-1"
  })([":checked + label{transition:all 300ms ease;background:", ";}"], function (_ref) {
    var checkboxColor = _ref.checkboxColor;
    return checkboxColor ? transparentize(0.8, checkboxColor) : transparentize(0.8, styleProps.checkboxColor);
  });
  return Object.assign({}, baseComponents, {
    LabelComponent: StyledLabelComponent,
    InputComponent: StyledInputComponent
  });
};
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Checkbox, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};