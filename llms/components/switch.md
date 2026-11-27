# Switch

Import: `import { Switch } from '@adhamaa/ui-kit'`

An on/off switch for settings that take effect straight away, like turning notifications on.

```tsx
import { Switch } from '@adhamaa/ui-kit'
```

```tsx
const States = () => <div style={{ display: 'grid', gap: 12 }}>
    <Switch onChange={() => {}} label="Off" />
    <Switch onChange={() => {}} label="On" defaultChecked />
    <Switch
        onChange={() => {}}
        label="With description"
        description="Get an email when a work order changes." />
    <Switch onChange={() => {}} label="Disabled" disabled defaultChecked />
</div>;
```

## Playground

```tsx
const Playground = () => <Switch label="Email notifications" onChange={() => {}} />;
```

## Examples

### States

`onChange` receives `true` or `false`. Use `checked` or `defaultChecked`, as with Checkbox.

```tsx
const States = () => <div style={{ display: 'grid', gap: 12 }}>
    <Switch onChange={() => {}} label="Off" />
    <Switch onChange={() => {}} label="On" defaultChecked />
    <Switch
        onChange={() => {}}
        label="With description"
        description="Get an email when a work order changes." />
    <Switch onChange={() => {}} label="Disabled" disabled defaultChecked />
</div>;
```

### Label on top

By default the label sits beside the switch. `labelPosition="top"` puts it above, like a text field's label, so a switch lines up with the other fields in a form grid.

```tsx
const LabelOnTop = () => <Switch label="DLP status" onChange={() => {}} labelPosition="top" defaultChecked />;
```

### Sizes

```tsx
const Sizes = (args) => (
  <div style={{ display: 'grid', gap: 12 }}>
    {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
      <Switch key={size} {...args} size={size} label={`Size ${size}`} />
    ))}
  </div>
);
```

## Use with react-hook-form

```tsx
import { RHFSwitch } from '@adhamaa/ui-kit/form'

<RHFSwitch name="active" label="Active" />
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
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Control height and text size. |
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
| `labelPosition` | `'end' \| 'top'` | `end` | Where the label sits: beside the switch, or above it like other fields. |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-switch` | The track |
| `.kit-switch__thumb` | The moving knob |
| `[data-checked]` | Present while on (from ui-sdk) |

## Accessibility

Built on [ui-sdk Switch](https://ui-sdk.dev/docs/react/components/switch), which follows the WAI-ARIA switch pattern: the control has the `switch` role and reports `aria-checked`. The label names it, and clicking the label toggles it.

| Key | Does |
| --- | --- |
| Space, Enter | Toggles the switch |

## Usage guidelines

**Do**

- Use a switch when the change applies immediately, without a Save button.
- Label the setting, not the state: "Email notifications", not "On".

**Don't**

- Don't use a switch inside a form that needs submitting. Use `Checkbox`.

## Related

- **Checkbox**: for choices that apply on submit.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-inputs-switch--docs
