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

#### Using default component

```js
import { createComponent as createInputComponent } from 'mango-components/es/Input';

const Input = createInputComponent();

export default props => <Input {...props} />;
```

## Composition of styles

#### Example

```js
import {
  createComponent as createInputComponent,
  createStyledComponents as createStyledInputComponents,
  defaultStyleProps as defaultInputStyleProps,
} from 'mango-components/es/Input';

const Input = createInputComponent();

const { InputComponent, SpanComponent } = createStyledInputComponents(
  defaultStyleProps,
);

const StyledInputComponent = styled(InputComponent)`
  ...;
`;

const StyledSpanComponent = styled(SpanComponent)`
  ...;
`;

export const StyledInput = (props: {}) => (
  <Input
    InputComponent={StyledInputComponent}
    SpanComponent={StyledSpanComponent}
    {...props}
  />
);

export default StyledInput;
```
