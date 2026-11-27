# Checkbox

Import: `import { Checkbox } from '@adhamaa/ui-kit'`

A checkbox with its label beside it, for yes/no choices and for picking several items from a list.

```tsx
import { Checkbox } from '@adhamaa/ui-kit'
```

```tsx
const States = () => <div style={{ display: 'grid', gap: 12 }}>
    <Checkbox onChange={() => {}} label="Unchecked" />
    <Checkbox onChange={() => {}} label="Checked" defaultChecked />
    <Checkbox onChange={() => {}} label="Indeterminate" indeterminate />
    <Checkbox
        onChange={() => {}}
        label="With description"
        description="Contractors see it in their portal." />
    <Checkbox
        onChange={() => {}}
        label="I accept the terms"
        required
        error="Accept the terms to continue" />
    <Checkbox onChange={() => {}} label="Disabled" disabled defaultChecked />
</div>;
```

| You need | Use |
| --- | --- |
| A choice that takes effect when the form is submitted | `Checkbox` |
| A setting that takes effect immediately | `Switch` |
| One of a few options | `RadioGroup` or `SegmentedControl` |
| Several of many options | `MultiSelect`, or several checkboxes |
| A filter toggle in a toolbar | `Chip` |

## Playground

```tsx
const Playground = () => <Checkbox label="Publish to ATM" onChange={() => {}} />;
```

## Examples

### States

`onChange` receives `true` or `false`. Use `checked` to control it, or `defaultChecked` to leave the state to the checkbox. Checkbox takes the field props (`description`, `error`, `required`, `disabled`…) like the other inputs.

```tsx
const States = () => <div style={{ display: 'grid', gap: 12 }}>
    <Checkbox onChange={() => {}} label="Unchecked" />
    <Checkbox onChange={() => {}} label="Checked" defaultChecked />
    <Checkbox onChange={() => {}} label="Indeterminate" indeterminate />
    <Checkbox
        onChange={() => {}}
        label="With description"
        description="Contractors see it in their portal." />
    <Checkbox
        onChange={() => {}}
        label="I accept the terms"
        required
        error="Accept the terms to continue" />
    <Checkbox onChange={() => {}} label="Disabled" disabled defaultChecked />
</div>;
```

### Select all

`indeterminate` shows a dash: some of the items it stands for are checked. Clicking it calls `onChange(true)`.

```tsx
const SelectAll = args => {
    const [checked, setChecked] = useState<string[]>(['Drainage'])
    const all = checked.length === items.length

    return (
        <div style={{ display: 'grid', gap: 8 }}>
            <Checkbox
                label="All work types"
                checked={all}
                indeterminate={checked.length > 0 && !all}
                onChange={(next) => setChecked(next ? items : [])} />
            <div style={{ display: 'grid', gap: 8, paddingInlineStart: 28 }}>
                {items.map((item) => (
                  <Checkbox
                    key={item}
                    {...args}
                    label={item}
                    checked={checked.includes(item)}
                    onChange={(next) =>
                      setChecked((c) =>
                        next ? [...c, item] : c.filter((x) => x !== item),
                      )
                    }
                  />
                ))}
            </div>
        </div>
    );
};
```

### Sizes

```tsx
const Sizes = (args) => (
  <div style={{ display: 'grid', gap: 12 }}>
    {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
      <Checkbox key={size} {...args} size={size} label={`Size ${size}`} />
    ))}
  </div>
);
```

## Use with react-hook-form

```tsx
import { RHFCheckbox } from '@adhamaa/ui-kit/form'

<RHFCheckbox name="acceptTerms" label="I accept the terms" rules={{ required: 'Accept the terms to continue' }} />
```

The form value is a `boolean`.

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
| `checked` | `boolean` |  |  |
| `defaultChecked` | `boolean` |  |  |
| `onChange` | `((checked: boolean) => void)` |  | Called with the new checked state. |
| `onBlur` | `FocusEventHandler<HTMLButtonElement>` |  |  |
| `value` | `string` | `'on'` | What the control submits while checked. |
| `indeterminate` | `boolean` |  | Show a dash: part of a group is checked. |

In a native form, a checked checkbox submits `value` (`'on'` by default) under `name`.

## Styling

| Selector | Part |
| --- | --- |
| `.kit-field.kit-field--inline` | The wrapper, with the label beside the box |
| `.kit-checkbox` | The box |
| `.kit-checkbox__indicator` | The check mark |
| `.kit-checkbox__dash` | The indeterminate dash |
| `[data-checked]`, `[data-indeterminate]` | State on the box (from ui-sdk) |

A checked box uses the `primary` and `primaryForeground` tokens.

## Accessibility

Built on [ui-sdk Checkbox](https://ui-sdk.dev/docs/react/components/checkbox), which follows the WAI-ARIA checkbox pattern. The label is linked to the box, so clicking the label toggles it. An indeterminate checkbox reports `aria-checked="mixed"`.

| Key | Does |
| --- | --- |
| Space | Toggles the focused checkbox |

## Usage guidelines

**Do**

- Phrase the label positively, so checked means yes: "Send me updates", not "Don't send me updates".
- Stack several checkboxes vertically, one per line.

**Don't**

- Don't use a checkbox for a setting that applies the moment it's clicked. Use `Switch`.

## Related

- **Switch**, **RadioGroup**, **Chip**: other choice controls.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-inputs-checkbox--docs
