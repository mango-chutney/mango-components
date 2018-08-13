// @flow

import { InputDecoratorComponent as BaseInputDecoratorComponent } from '../Input';

const InputDecoratorComponent = BaseInputDecoratorComponent.extend`
  &::after {
    display: none;
  }
`;

export default InputDecoratorComponent;
