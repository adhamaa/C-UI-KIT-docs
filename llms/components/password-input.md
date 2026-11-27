# PasswordInput

Import: `import { PasswordInput } from '@adhamaa/ui-kit'`

A password field with a button that shows or hides what's typed.

```tsx
import { PasswordInput } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <PasswordInput label="Password" />;
```

## Examples

### New password

Set `autoComplete="new-password"` on sign-up and change-password forms, so password managers offer to generate one. The default, `current-password`, is right for sign-in forms.

```tsx
const NewPassword = () => {
    const [value, setValue] = useState('')

    return (
        <div style={{ display: 'grid', gap: 8 }}>
            <PasswordInput
                label="Create a password"
                autoComplete="new-password"
                required
                value={value}
                onValueChange={setValue} />
            <ul
                aria-label="Password requirements"
                style={{ margin: 0, paddingInlineStart: 20, fontSize: 13 }}>
                {rules.map((rule) => (
                  <li key={rule.label}>
                    {rule.test(value) ? '✓ ' : '✗ '}
                    {rule.label}
                  </li>
                ))}
            </ul>
        </div>
    );
};
```

### States

PasswordInput takes the same field props as **TextInput**.

```tsx
const States = () => <div style={{ display: 'grid', gap: 16 }}>
    <PasswordInput label="With error" error="Wrong password" />
    <PasswordInput label="Disabled" disabled defaultValue="secret123" />
    <PasswordInput label="With icon" leftSection={<icons.CheckIcon />} />
</div>;
```

## Use with react-hook-form

```tsx
import { RHFPasswordInput } from '@adhamaa/ui-kit/form'

<RHFPasswordInput name="password" label="Password" rules={{ required: true, minLength: 8 }} />
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
| `value` | `string` |  | The password, to control the field. |
| `defaultValue` | `string` |  | The starting password, when uncontrolled. |
| `onValueChange` | `((value: string) => void)` |  | Called with the new text after any change: typing, clearing or a form reset. |
| `onChange` | `ChangeEventHandler<HTMLInputElement, Element>` |  | The native change event of the inner `<input>`. |
| `onBlur` | `FocusEventHandler<HTMLInputElement>` |  | Called when the input loses focus. |
| `placeholder` | `string` |  | Shown while the field is empty. |
| `autoComplete` | `(string & {}) \| "current-password" \| "new-password" \| "off"` | `'current-password'` | `current-password` for sign-in forms, `new-password` for sign-up and change-password forms, so password managers fill or generate correctly. |
| `leftSection` | `ReactNode` |  | Content inside the field, before the text, like an icon. |

## Styling

Uses the **TextInput** classes. The show/hide button is `.kit-input__toggle`.

## Accessibility

Built on [ui-sdk Password Input](https://ui-sdk.dev/docs/react/components/password-input). The field stays a native password input. The toggle is a toggle button with `aria-pressed` and keeps the same name whether the password is shown or hidden.

| Key | Does |
| --- | --- |
| Tab | Moves from the input to the toggle |
| Space, Enter | On the toggle, shows or hides the password |
| Enter | In the input, submits the form (it never presses the toggle) |

Clicking the toggle with the mouse keeps the caret in the input.

## Usage guidelines

**Do**

- List the password rules up front, and show which are met as the user types.
- Let the browser autofill: always set `autoComplete`.

**Don't**

- Don't block pasting. It breaks password managers.
- Don't ask for the password twice. The show/hide toggle lets people check it.

## Related

- **TextInput**: shares the field props and styling.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-inputs-passwordinput--docs
