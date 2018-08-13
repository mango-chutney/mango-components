// @flow

import { InputComponent } from '../Input';

const SelectComponent = InputComponent.withComponent('select').extend`
  ::-ms-expand {
    display: none;
  }

  option {
    width: 100%;
  }
`;

export default SelectComponent;
