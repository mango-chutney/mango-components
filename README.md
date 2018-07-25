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
import MC from 'mango-components';

const Input = MC.Input.createComponent();
```

## Styling components

#### Example

```js
import MC from 'mango-components';

const Input = MC.Input.createComponent();

const { InputComponent, SpanComponent } = MC.Input.createStyledComponents(
  MC.Input.defaultStyleProps,
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

# Components

## Input

#### Properties

| Name             | Type                     | Default | Description |
| ---------------- | ------------------------ | ------- | ----------- |
| `InputComponent` | `React.ComponentType<*>` | -       | -           |
| `LabelComponent` | `React.ComponentType<*>` | -       | -           |
| `FieldProps`     | `redux-form.FieldProps`  | -       |
| `label`          | `string`                 | -       | -           |
| `placeholder`    | `string`                 | -       | -           |

## TextArea

#### Properties

| Name                | Type                     | Default | Description |
| ------------------- | ------------------------ | ------- | ----------- |
| `TextAreaComponent` | `React.ComponentType<*>` | -       | -           |
| `LabelComponent`    | `React.ComponentType<*>` | -       | -           |
| `FieldProps`        | `redux-form.FieldProps`  | -       |
| `label`             | `string`                 | -       | -           |
| `placeholder`       | `string`                 | -       | -           |

## Checkbox

#### Properties

| Name               | Type                     | Default   | Description |
| ------------------ | ------------------------ | --------- | ----------- |
| `WrapperComponent` | `React.ComponentType<*>` | -         | -           |
| `InputComponent`   | `React.ComponentType<*>` | -         | -           |
| `LabelComponent`   | `React.ComponentType<*>` | -         | -           |
| `FieldProps`       | `redux-form.FieldProps`  | -         |
| `children`         | `React.Node`             | -         | -           |
| `label`            | `string`                 | -         | -           |
| `checkboxColor`    | `string`                 | `#2ea1f8` | -           |
| `checkboxSize`     | `string`                 | `20`      | -           |

## PaddedCheckbox

#### Properties

| Name               | Type                     | Default   | Description |
| ------------------ | ------------------------ | --------- | ----------- |
| `WrapperComponent` | `React.ComponentType<*>` | -         | -           |
| `InputComponent`   | `React.ComponentType<*>` | -         | -           |
| `LabelComponent`   | `React.ComponentType<*>` | -         | -           |
| `FieldProps`       | `redux-form.FieldProps`  | -         |
| `children`         | `React.Node`             | -         | -           |
| `label`            | `string`                 | -         | -           |
| `checkboxColor`    | `string`                 | `#2ea1f8` | -           |
| `checkboxSize`     | `string`                 | `40`      | -           |

## Button

#### Properties

| Name              | Type                     | Default | Description |
| ----------------- | ------------------------ | ------- | ----------- |
| `ButtonComponent` | `React.ComponentType<*>` | -       | -           |
| `children`        | `React.Node`             | -       | -           |
| `onClick`         | `Function`               | -       | -           |
| `expanded`        | `boolean`                | -       | -           |

## AnchorButton

#### Properties

| Name                    | Type                     | Default | Description |
| ----------------------- | ------------------------ | ------- | ----------- |
| `AnchorButtonComponent` | `React.ComponentType<*>` | -       | -           |
| `children`              | `React.Node`             | -       | -           |
| `href`                  | `string`                 | -       | -           |
| `expanded`              | `boolean`                | -       | -           |

## Panel

#### Properties

| Name             | Type                     | Default | Description |
| ---------------- | ------------------------ | ------- | ----------- |
| `PanelComponent` | `React.ComponentType<*>` | -       | -           |

## PanelHeading

#### Properties

| Name                    | Type                     | Default | Description |
| ----------------------- | ------------------------ | ------- | ----------- |
| `PanelHeadingComponent` | `React.ComponentType<*>` | -       | -           |

## PanelSection

#### Properties

| Name                    | Type                     | Default | Description |
| ----------------------- | ------------------------ | ------- | ----------- |
| `PanelSectionComponent` | `React.ComponentType<*>` | -       | -           |

## Avatar

#### Properties

| Name              | Type                     | Default   | Description |
| ----------------- | ------------------------ | --------- | ----------- |
| `AvatarComponent` | `React.ComponentType<*>` | -         | -           |
| `children`        | `React.Node`             | -         | -           |
| `name`            | `string`                 | -         | -           |
| `backgroundColor` | `string`                 | -         | -           |
| `backgroundImage` | `string`                 | -         | -           |
| `width`           | `string \| number`       | `rem(46)` | -           |
| `fontSize`        | `string \| number`       | `rem(18)` | -           |

## RadialProgressBar

#### Properties

| Name                        | Type                     | Default   | Description                                                            |
| --------------------------- | ------------------------ | --------- | ---------------------------------------------------------------------- |
| `WrapperComponent`          | `React.ComponentType<*>` | -         | -                                                                      |
| `ContainerComponent`        | `React.ComponentType<*>` | -         | -                                                                      |
| `ProgressCircleComponent`   | `React.ComponentType<*>` | -         | -                                                                      |
| `BackgroundCircleComponent` | `React.ComponentType<*>` | -         | -                                                                      |
| `children`                  | `React.Node`             | -         | -                                                                      |
| `width`                     | `number`                 | `50`      | the height and width of the circle (note: doesn't change stroke-width) |
| `backgroundColor`           | `string`                 | `#2ea1f8` | -                                                                      |
| `percentage`                | `number`                 | 0         | -                                                                      |
| `strokeLinecap`             | `number`                 | -         | The linecap type eg `square`\|`round`\|`butt`                          |
| `strokeWidthScale`          | `number`                 | 7         | How wide the bar is                                                    |

## NestedRadialProgressBars

#### Properties

| Name                                | Type                     | Default | Description |
| ----------------------------------- | ------------------------ | ------- | ----------- |
| `NestedRadialProgressBarsComponent` | `React.ComponentType<*>` | -       | -           |

## MadeWithMangoChutney

#### Properties

| Name              | Type                     | Default | Description |
| ----------------- | ------------------------ | ------- | ----------- |
| `AnchorComponent` | `React.ComponentType<*>` | -       | -           |
| `DivComponent`    | `React.ComponentType<*>` | -       | -           |

## Tootlip

#### Properties

| Name              | Type                       | Default | Description |
| ----------------- | -------------------------- | ------- | ----------- |
| `ArrowComponent`  | `React.ComponentType<*>`   | -       | -           |
| `PopperComponent` | `React.ComponentType<*>`   | -       | -           |
| `children`        | `React.Node`               | -       | -           |
| `clickable`       | `string`                   | -       | -           |
| `placement`       | `$Keys<typeof placements>` | -       | -           |
| `visible`         | `boolean`                  | -       | -           |

## Tristicon

#### Properties

| Name                 | Type                     | Default | Description |
| -------------------- | ------------------------ | ------- | ----------- |
| `TristiconComponent` | `React.ComponentType<*>` | -       | -           |
| `children`           | `React.Node`             | -       | -           |
| `icon`               | `string`                 | -       | -           |
