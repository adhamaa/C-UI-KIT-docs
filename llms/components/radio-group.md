# RadioGroup

Import: `import { RadioGroup } from '@adhamaa/ui-kit'`

Picks one of a few options, all visible at once. Pass the options as `data` and the group renders the radios.

```tsx
import { RadioGroup } from '@adhamaa/ui-kit'
```

```tsx
const Horizontal = () => <RadioGroup
    label="Severity"
    data={['Low', 'Medium', 'High']}
    defaultValue="Medium"
    onChange={() => {}}
    orientation="horizontal" />;
```

## Playground

```tsx
const Playground = () => <RadioGroup
    label="Severity"
    data={['Low', 'Medium', 'High']}
    defaultValue="Medium"
    onChange={() => {}} />;
```

## Examples

### Layout

Radios stack vertically by default. `orientation="horizontal"` puts them in a row, for two to four short options.

```tsx
const Horizontal = () => <RadioGroup
    label="Severity"
    data={['Low', 'Medium', 'High']}
    defaultValue="Medium"
    onChange={() => {}}
    orientation="horizontal" />;
```

### Options

`data` takes the same shapes as **Select**: strings, or `{ value, label, disabled }` objects.

```tsx
const OptionObjects = () => <RadioGroup
    label="Payment"
    data={[
      { value: 'monthly', label: 'Monthly claim' },
      { value: 'milestone', label: 'By milestone' },
      { value: 'lump', label: 'Lump sum', disabled: true },
    ]}
    defaultValue="monthly"
    onChange={() => {}} />;
```

### Controlled

`onChange` receives the chosen value.

```tsx
const Controlled = () => {
    const [value, setValue] = useState<string | null>('High')

    return (
        <>
            <RadioGroup
                label="Severity"
                data={['Low', 'Medium', 'High']}
                defaultValue="Medium"
                value={value}
                onChange={setValue} />
            <p style={{ marginTop: 8 }}>Value: {String(value)}</p>
        </>
    );
};
```

### States

The group takes the field props. `label` names the whole group, and `error` and `required` apply to it.

```tsx
const States = () => <div style={{ display: 'grid', gap: 24 }}>
    <RadioGroup
        data={['Low', 'Medium', 'High']}
        onChange={() => {}}
        label="With error"
        defaultValue={null}
        required
        error="Pick a severity" />
    <RadioGroup
        data={['Low', 'Medium', 'High']}
        defaultValue="Medium"
        onChange={() => {}}
        label="Disabled"
        disabled />
</div>;
```

## Use with react-hook-form

```tsx
import { RHFRadioGroup } from '@adhamaa/ui-kit/form'

<RHFRadioGroup name="severity" label="Severity" data={['Low', 'Medium', 'High']} rules={{ required: true }} />
```

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
| `data` (required) | `SelectData` |  | The choices. |
| `value` | `string \| null` |  |  |
| `defaultValue` | `string \| null` |  |  |
| `onChange` | `((value: string \| null) => void)` |  |  |
| `orientation` | `enum` | `'vertical'` | Lay the radios out in a row. |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-radio-group` | The group |
| `.kit-radio-group__option` | One radio with its label |
| `.kit-radio` | The circle |
| `.kit-radio__indicator` | The dot |
| `[data-checked]` | On the chosen radio (from ui-sdk) |

## Accessibility

Built on [ui-sdk Radio](https://ui-sdk.dev/docs/react/components/radio), which follows the WAI-ARIA radio group pattern. The group has the `radiogroup` role and is named by `label`. The whole group is one Tab stop.

| Key | Does |
| --- | --- |
| Tab | Moves into the group, onto the chosen radio (or the first) |
| Arrow keys | Move to the next or previous radio and choose it |
| Space | Chooses the focused radio |

## Usage guidelines

**Do**

- Use it for two to five options that people should compare.
- Pick a sensible default when there is one.

**Don't**

- Don't use it for more than about five options. Use `Select`.
- Don't use a single radio. Use `Checkbox`.

## Related

- **SegmentedControl**: a more compact way to pick one of a few options.
- **Select**: for longer lists.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-inputs-radiogroup--docs
