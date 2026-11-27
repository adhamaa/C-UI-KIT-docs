# TextInput

Import: `import { TextInput } from '@adhamaa/ui-kit'`

A single-line text field with a label, description and error. Every kit form control shares the same field props, so what you learn here applies to the others.

```tsx
import { TextInput } from '@adhamaa/ui-kit'
```

```tsx
const Sections = () => <div style={{ display: 'grid', gap: 16 }}>
    <TextInput
        onValueChange={() => {}}
        label="Website"
        placeholder="example.com"
        leftSection={<span>https://</span>} />
    <TextInput
        onValueChange={() => {}}
        label="Search"
        placeholder="Search packages"
        leftSection={<icons.SearchIcon />}
        clearable
        defaultValue="Road upgrade" />
    <TextInput
        onValueChange={() => {}}
        label="Length"
        placeholder="0"
        rightSection={<span>km</span>} />
</div>;
```

| You need | Use |
| --- | --- |
| One line of text | `TextInput` |
| A search box with a debounced callback | `SearchInput` |
| A password | `PasswordInput` |
| A number, money or a percentage | `NumberInput` |
| Several lines | `Textarea` |

## Playground

```tsx
const Playground = () => <TextInput label="Package name" placeholder="PKG-001" onValueChange={() => {}} />;
```

## Examples

### Field states

These props are the same on every kit input, select and picker:

- `label`, and `description` for helper text under the control.
- `error`: a message, or `true` to mark the field invalid without one.
- `required` makes the field natively required and adds an asterisk. `withAsterisk` adds only the asterisk.
- `disabled` and `readOnly`. A read-only field stays focusable and is submitted with the form. A disabled one is neither.

```tsx
const States = () => <div style={{ display: 'grid', gap: 16 }}>
    <TextInput
        placeholder="PKG-001"
        onValueChange={() => {}}
        label="With description"
        description="As written on the contract." />
    <TextInput placeholder="PKG-001" onValueChange={() => {}} label="Required" required />
    <TextInput
        placeholder="PKG-001"
        onValueChange={() => {}}
        label="With error"
        error="Enter a package name" />
    <TextInput
        placeholder="PKG-001"
        onValueChange={() => {}}
        label="Disabled"
        disabled
        defaultValue="PKG-014" />
    <TextInput
        placeholder="PKG-001"
        onValueChange={() => {}}
        label="Read-only"
        readOnly
        defaultValue="PKG-014" />
</div>;
```

### Sizes

`size` sets the height from the `--kit-h-*` tokens, the same scale as buttons.

```tsx
const Sizes = (args) => (
  <div style={{ display: 'grid', gap: 12 }}>
    {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
      <TextInput key={size} {...args} size={size} label={`Size ${size}`} />
    ))}
  </div>
);
```

### Sections and clear button

`leftSection` and `rightSection` sit inside the field, before and after the text: an icon, a prefix like `https://` or a unit. `clearable` adds a button that empties the field and shows only while there's text.

```tsx
const Sections = () => <div style={{ display: 'grid', gap: 16 }}>
    <TextInput
        onValueChange={() => {}}
        label="Website"
        placeholder="example.com"
        leftSection={<span>https://</span>} />
    <TextInput
        onValueChange={() => {}}
        label="Search"
        placeholder="Search packages"
        leftSection={<icons.SearchIcon />}
        clearable
        defaultValue="Road upgrade" />
    <TextInput
        onValueChange={() => {}}
        label="Length"
        placeholder="0"
        rightSection={<span>km</span>} />
</div>;
```

### Controlled

`onValueChange` receives the new text after any change: typing, clearing or a form reset. `onChange` is the native change event, as on a plain `<input>`. Use `defaultValue` instead of `value` to leave the state to the input.

```tsx
const Controlled = () => {
    const [value, setValue] = useState('Road upgrade section 4')

    return (
        <>
            <TextInput
                label="Package name"
                placeholder="PKG-001"
                clearable
                value={value}
                onValueChange={setValue} />
            <p style={{ marginTop: 8 }}>Value: {JSON.stringify(value)}</p>
        </>
    );
};
```

### Input types

`type` and any other native input attribute (`autoComplete`, `inputMode`, `pattern`, `maxLength`…) pass through to the `<input>`.

```tsx
const Types = () => <div style={{ display: 'grid', gap: 16 }}>
    <TextInput
        onValueChange={() => {}}
        label="Email"
        type="email"
        placeholder="name@example.com"
        autoComplete="email" />
    <TextInput
        onValueChange={() => {}}
        label="Phone"
        type="tel"
        placeholder="012-345 6789"
        autoComplete="tel" />
    <TextInput onValueChange={() => {}} label="URL" type="url" placeholder="https://" />
</div>;
```

## Use with react-hook-form

```tsx
import { RHFTextInput } from '@adhamaa/ui-kit/form'

<RHFTextInput name="packageName" label="Package name" rules={{ required: true }} />
```

`RHFTextInput` takes the same props plus `name` and `rules`, and shows the field's error message for you. See **Forms with react-hook-form**.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
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
| `value` | `string` |  |  |
| `defaultValue` | `string` |  |  |
| `onChange` | `ChangeEventHandler<HTMLInputElement, Element>` |  | The native change event, as with a plain `<input>`. |
| `onValueChange` | `((value: string) => void)` |  | The new text, after any change: typing, clearing or a form reset. |
| `leftSection` | `ReactNode` |  | Content inside the input, before the text, like an icon. |
| `rightSection` | `ReactNode` |  | Content inside the input, after the text. |
| `clearable` | `boolean` |  | Show a button that clears the text. |

The ref goes to the `<input>`.

## Styling

These classes are shared by every text-like field (TextInput, SearchInput, PasswordInput, NumberInput, Select…).

| Selector | `classNames` key | Part |
| --- | --- | --- |
| `.kit-field` | `root` | The wrapper around label, control and messages |
| `.kit-field__label` | `label` | The label |
| `.kit-field__asterisk` | — | The required asterisk |
| `.kit-field__description` | `description` | The helper text |
| `.kit-field__error` | `error` | The error message |
| `.kit-input` | `control` | The box with the border |
| `.kit-input__control` | — | The `<input>` itself |
| `.kit-input__section` | — | The left or right section |
| `.kit-input__clear` | — | The clear button |
| `[data-size]`, `[data-kind]` | — | On `.kit-field`: the size, and which control it holds |
| `[data-invalid]`, `[data-disabled]` | — | Invalid and disabled state (from ui-sdk) |

Borders use the `input` token, the focus ring uses `ring` and `ringBorder`, and errors use `destructive`.

## Accessibility

Built on [ui-sdk Input](https://ui-sdk.dev/docs/react/components/input) and [Field](https://ui-sdk.dev/docs/react/components/field). The label names the input, the description and error describe it, and an invalid field gets `aria-invalid`. Clicking the label focuses the input. The input is a native `<input>`, so text editing, selection and autofill work as usual.

- Without a visible `label`, give the input an `aria-label`.
- The clear button is named "Clear".

## Usage guidelines

**Do**

- Always use a `label`. A placeholder isn't a label: it disappears as soon as someone types.
- Put format hints in `description`: "As written on the contract".
- Set `type` and `autoComplete` so phones show the right keyboard and browsers can autofill.

**Don't**

- Don't use `TextInput` for numbers people do maths with. Use `NumberInput`.
- Don't show an error before the user has had a chance to fill the field.

## Related

- **SearchInput**, **PasswordInput**, **NumberInput**, **Textarea**: specialised text fields.
- **Autocomplete**: free text with suggestions.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-inputs-textinput--docs
