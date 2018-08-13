# Mango components

A repository of re-useable styled components

## Hacking

Install dependencies and peer dependencies:

```
# You need to run this install-peers command again each time you run `yarn`.
$ yarn && yarn run install-peers
```

Make changes and run tests:

```
$ yarn run tests
```

Run the examples:

```
$ cd examples
$ yarn && yarn run start
```

Finally, run the build script and commit the changes:

```
$ yarn run build
```

## Usage

#### Using default styles

```js
import { Input } from 'mango-components';
import { Field } from 'redux-form';

export default () => (
  <Field
    type="email"
    name="email"
    placeholder="Please enter your email"
    label="Email address"
    component={Input}
  />
);
```

## Composition of styles

### Either replace individual components

```js
import { Input } from 'mango-components';
import styled from 'styled-components';
import { Field } from 'redux-form';

const InputComponent = styled.input`
  position: relative;
`;

const InputDecoratorComponent = styled.span`
  &::after {
    content: '🙅';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const StyledInput = (props: $Props) => (
  <Input
    {...{
      InputDecoratorComponent,
      ...props,
    }}
  />
);

export default () => (
  <Field
    type="email"
    name="email"
    placeholder="Please enter your email"
    label="Email address"
    component={StyledInput}
  />
);
```

### Or recompose the whole thing

This way, the default styles don't need to end up in the bundle at all.

```js
import {
  InputComposer,
  createFormControlElementProps,
  createInputDecoratorProps,
  createLabelProps,
} from 'mango-components';
import { Field } from 'redux-form';

const InputComponent = styled.input``;
const InputDecoratorComponent = styled.span``;
const InputLabelComponent = styled.label``;

const StyledInput = (props: $Props) => (
  <InputComposer
    {...{
      InputComponent,
      InputDecoratorComponent,
      InputLabelComponent,
      createFormControlElementProps,
      createInputDecoratorProps,
      createLabelProps,
      ...props,
    }}
  />
);

export default () => (
  <Field
    type="email"
    name="email"
    placeholder="Please enter your email"
    label="Email address"
    component={StyledInput}
  />
);
```
