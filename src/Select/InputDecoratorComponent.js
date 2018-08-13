// @flow

import tristicons from 'tristicons';
import { InputDecoratorComponent as BaseInputDecoratorComponent } from '../Input';

const InputDecoratorComponent = BaseInputDecoratorComponent.extend`
  &::after {
    content: ${`"${tristicons['chevron-down']}"`};
  }
`;

export default InputDecoratorComponent;
