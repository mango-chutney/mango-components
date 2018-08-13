// @flow

import { InputComponent } from '../Input';

const TextAreaComponent = InputComponent.withComponent('textarea').extend`
    height: auto;
    padding: 1.25rem 1rem;
    resize: vertical;
  `;

export default TextAreaComponent;
