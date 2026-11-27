# ColorInput and ColorPicker

Import: `import { ColorInput } from '@adhamaa/ui-kit'`

`ColorInput` is a text field for a colour, with a swatch that opens a picker. `ColorPicker` is the same picker shown inline: a saturation area, a hue slider and optional swatches.

```tsx
import { ColorInput, ColorPicker } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <ColorInput
    label="Route colour"
    defaultValue="#1971c2"
    swatches={[
      '#e03131',
      '#f08c00',
      '#2f9e44',
      '#1971c2',
      '#7048e8',
      '#f2c45a',
    ]}
    onChange={() => {}}
    onChangeEnd={() => {}} />;
```

## Examples

### Formats

The value is a CSS colour string in `format`: `hex` (default), `srgb` (`rgb()`), `hsl` or `oklch`. Typed colours in any CSS syntax are converted to it.

```tsx
const Formats = (args) => (
  <div style={{ display: 'grid', gap: 16 }}>
    {(['hex', 'srgb', 'hsl', 'oklch'] as const).map((format) => (
      <ColorInput
        key={format}
        {...args}
        format={format}
        label={`format="${format}"`}
      />
    ))}
  </div>
);
```

### Transparency

`withAlpha` adds an alpha slider. Use a format that can hold alpha, like `srgb` or `oklch`.

```tsx
const WithAlpha = () => <ColorInput
    label="Overlay colour"
    defaultValue="#1971c2"
    swatches={[
      '#e03131',
      '#f08c00',
      '#2f9e44',
      '#1971c2',
      '#7048e8',
      '#f2c45a',
    ]}
    onChange={() => {}}
    onChangeEnd={() => {}}
    withAlpha
    format="srgb" />;
```

### Controlled

`onChange` runs as the colour changes, including while dragging. `onChangeEnd` runs once the drag is released or the edit is committed. Save in `onChangeEnd`.

```tsx
const Controlled = () => {
    const [colour, setColour] = useState('#2f9e44')

    return (
        <div style={{ display: 'grid', gap: 12 }}>
            <ColorInput
                label="Route colour"
                defaultValue="#1971c2"
                swatches={[
                  '#e03131',
                  '#f08c00',
                  '#2f9e44',
                  '#1971c2',
                  '#7048e8',
                  '#f2c45a',
                ]}
                onChangeEnd={() => {}}
                value={colour}
                onChange={setColour} />
            <div
                style={{
                  height: 40,
                  borderRadius: 'var(--ui-radius)',
                  background: colour,
                }} />
        </div>
    );
};
```

### Inline picker

```tsx
const InlinePicker = () => (
  <ColorPicker
    aria-label="Route colour"
    defaultValue="#7048e8"
    swatches={swatches}
  />
);
```

## Use with react-hook-form

```tsx
import { RHFColorInput } from '@adhamaa/ui-kit/form'

<RHFColorInput name="routeColour" label="Route colour" swatches={brandColours} />
```

## Props

### ColorInput

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` |  | A CSS colour, written in `format`. |
| `defaultValue` | `string` |  |  |
| `onChange` | `((value: string) => void)` |  | Called as the colour changes, including mid-drag. |
| `onChangeEnd` | `((value: string) => void)` |  | Called once a change ends: a drag released or an edit committed. |
| `format` | `enum` | `'hex'` |  |
| `swatches` | `string[]` |  | Preset colours to pick from. |
| `withAlpha` | `boolean` |  | Show an alpha slider. |
| `label` | `ReactNode` |  | The visible label. |
| `description` | `ReactNode` |  | Helper text under the control. |
| `error` | `ReactNode` |  | An error to show. A string or node shows that message; `true` marks the field invalid without a message; `false` or empty clears it. |
| `required` | `boolean` |  | Marks the field required: the browser blocks submit and the label shows an asterisk. |
| `withAsterisk` | `boolean` |  | Show the asterisk without making the control natively required. |
| `disabled` | `boolean` |  |  |
| `readOnly` | `boolean` |  |  |
| `size` | `enum` | `'md'` | Control height and text size. |
| `className` | `string` |  | Classes for the outer wrapper. |
| `classNames` | `Partial<Record<FieldPart, string>>` |  | Classes for each part: `root`, `label`, `description`, `error`, `control`. |
| `style` | `CSSProperties` |  |  |
| `name` | `string` |  | The name the control submits under. |
| `id` | `string` |  |  |
| `placeholder` | `string` |  |  |

### ColorPicker

See the props of `ColorPicker` on the docs page or in its TypeScript types.

## Styling

| Selector | Part |
| --- | --- |
| `.kit-color` | The picker |
| `.kit-color--popover` | The picker inside ColorInput's popup |
| `.kit-color__area` | The saturation and brightness area |
| `.kit-color__slider` | The hue or alpha slider |
| `.kit-color__thumb` | A draggable handle |
| `.kit-color__swatches`, `.kit-color__swatch` | The preset colours |
| `.kit-color__preview` | The swatch in ColorInput's field |

## Accessibility

Built on [ui-sdk Color Picker](https://ui-sdk.dev/docs/react/components/color-picker). The area and sliders are sliders for assistive technology, and each swatch is a button named by its colour. Give a `ColorPicker` without a label an `aria-label`.

| Key | Does |
| --- | --- |
| Arrow keys | On the area or a slider, move the handle |
| Enter | In the text field, commits the typed colour |
| Escape | Closes ColorInput's popup |

## Usage guidelines

**Do**

- Offer `swatches` for your brand or status colours, so people pick consistent colours.
- Check that text on the chosen colour is still readable.

**Don't**

- Don't use colour as the only way to tell things apart. Add a label or icon.

## Related

- **Tokens**: the theme's colours.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-inputs-colorinput--docs
