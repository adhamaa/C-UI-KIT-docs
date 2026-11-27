# Textarea

Import: `import { Textarea } from '@adhamaa/ui-kit'`

A multi-line text field for remarks, descriptions and notes. It can grow with its text and show a character count.

```tsx
import { Textarea } from '@adhamaa/ui-kit'
```

```tsx
const Autosize = () => <Textarea
    label="Remarks"
    placeholder="Anything the contractor should know"
    onValueChange={() => {}}
    autosize
    minRows={2}
    maxRows={6} />;
```

## Playground

```tsx
const Playground = () => <Textarea
    label="Remarks"
    placeholder="Anything the contractor should know"
    onValueChange={() => {}} />;
```

## Examples

### Grow with the text

`autosize` makes the field grow and shrink with its content between `minRows` (3 by default) and `maxRows`, then scroll.

```tsx
const Autosize = () => <Textarea
    label="Remarks"
    placeholder="Anything the contractor should know"
    onValueChange={() => {}}
    autosize
    minRows={2}
    maxRows={6} />;
```

### Character count

`showCount` shows "used / max" under the field when `maxLength` is set. The browser stops input at the limit.

```tsx
const CharacterCount = () => <Textarea
    label="Remarks"
    placeholder="Anything the contractor should know"
    onValueChange={() => {}}
    maxLength={280}
    showCount
    defaultValue="Night work only." />;
```

### States

Textarea takes the same field props as **TextInput**.

```tsx
const States = () => <div style={{ display: 'grid', gap: 16 }}>
    <Textarea
        placeholder="Anything the contractor should know"
        onValueChange={() => {}}
        label="With description"
        description="Shown on the work order." />
    <Textarea
        placeholder="Anything the contractor should know"
        onValueChange={() => {}}
        label="With error"
        error="Add a remark"
        required />
    <Textarea
        placeholder="Anything the contractor should know"
        onValueChange={() => {}}
        label="Disabled"
        disabled
        defaultValue="Approved." />
</div>;
```

## Use with react-hook-form

```tsx
import { RHFTextarea } from '@adhamaa/ui-kit/form'

<RHFTextarea name="remarks" label="Remarks" autosize maxLength={500} showCount />
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
| `value` | `string` |  | The text, to control the field. |
| `defaultValue` | `string` |  | The starting text, when uncontrolled. |
| `onChange` | `ChangeEventHandler<HTMLTextAreaElement, Element>` |  | The native change event, as with a plain `<textarea>`. |
| `onValueChange` | `((value: string) => void)` |  | Called with the new text after any change. |
| `autosize` | `boolean` |  | Grow and shrink with the text, between `minRows` and `maxRows`. |
| `minRows` | `number` | `3` |  |
| `maxRows` | `number` |  |  |
| `showCount` | `boolean` |  | Show "used / max" under the field when `maxLength` is set. |

Native `<textarea>` attributes pass through. The ref goes to the `<textarea>`.

## Styling

| Selector | `classNames` key | Part |
| --- | --- | --- |
| `.kit-textarea` | `control` | The `<textarea>` |
| `.kit-field__count` | — | The character count |

The label, description and error use the **TextInput** field classes.

## Accessibility

Built on [ui-sdk Textarea](https://ui-sdk.dev/docs/react/components/textarea). It stays a native `<textarea>`, so editing, selection and spell checking work as usual. Enter adds a new line and never submits the form.

## Usage guidelines

**Do**

- Size the field to the expected length: `minRows={2}` for a short note, more for a description.
- Set `maxLength` when the server has a limit, and show the count.

**Don't**

- Don't use it for one-line values. Use `TextInput`.

## Related

- **TextInput**: one line of text.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-inputs-textarea--docs
