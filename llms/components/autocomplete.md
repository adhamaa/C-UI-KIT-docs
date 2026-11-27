# Autocomplete

Import: `import { Autocomplete } from '@adhamaa/ui-kit'`

A text field that suggests values as you type. Unlike **Select**, any text is a valid value: the suggestions only help fill it in.

```tsx
import { Autocomplete } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <Autocomplete
    label="District"
    data={[
      'Gombak',
      'Hulu Langat',
      'Hulu Selangor',
      'Klang',
      'Kuala Langat',
      'Kuala Selangor',
      'Petaling',
      'Sabak Bernam',
      'Sepang',
    ]}
    placeholder="Type a district"
    onChange={() => {}} />;
```

## Examples

### Free text

`onChange` receives the text, whether it was typed or picked from the suggestions.

```tsx
const FreeText = () => {
    const [value, setValue] = useState('Kajang')

    return (
        <>
            <Autocomplete
                label="District"
                data={[
                  'Gombak',
                  'Hulu Langat',
                  'Hulu Selangor',
                  'Klang',
                  'Kuala Langat',
                  'Kuala Selangor',
                  'Petaling',
                  'Sabak Bernam',
                  'Sepang',
                ]}
                placeholder="Type a district"
                value={value}
                onChange={setValue} />
            <p style={{ marginTop: 8 }}>Value: {JSON.stringify(value)}</p>
        </>
    );
};
```

### No match

`nothingFoundMessage` shows while nothing matches. Leave it out to show nothing.

```tsx
const NothingFound = () => <Autocomplete
    label="District"
    data={[
      'Gombak',
      'Hulu Langat',
      'Hulu Selangor',
      'Klang',
      'Kuala Langat',
      'Kuala Selangor',
      'Petaling',
      'Sabak Bernam',
      'Sepang',
    ]}
    placeholder="Type a district"
    onChange={() => {}}
    nothingFoundMessage="No matching district. You can still use it." />;
```

## Use with react-hook-form

```tsx
import { RHFAutocomplete } from '@adhamaa/ui-kit/form'

<RHFAutocomplete name="district" label="District" data={districts} />
```

The form value is a `string`.

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
| `data` | `SelectData` |  | Suggestions. The value is free text; suggestions only help fill it. |
| `value` | `string` |  |  |
| `defaultValue` | `string` |  |  |
| `onChange` | `((value: string) => void)` |  |  |
| `onBlur` | `FocusEventHandler<HTMLInputElement>` |  |  |
| `placeholder` | `string` |  |  |
| `nothingFoundMessage` | `ReactNode` |  | Text while no suggestion matches. Leave empty to show nothing. |
| `maxDropdownHeight` | `number` | `240` | Max height of the list, in px. |

## Styling

The field uses the **TextInput** classes and the suggestions use the **Select** list classes (`.kit-listbox*`).

## Accessibility

Built on [ui-sdk Autocomplete](https://ui-sdk.dev/docs/react/components/autocomplete), which follows the WAI-ARIA combobox pattern with list autocomplete. Focus stays in the input while the arrow keys move the highlight.

| Key | Does |
| --- | --- |
| Typing | Filters the suggestions and opens the list |
| ArrowDown, ArrowUp | Move the highlight |
| Enter | Fills in the highlighted suggestion and closes the list, without submitting |
| Escape | Closes the list and keeps the text |

## Usage guidelines

**Do**

- Use it when most answers come from a known list, but others are allowed.

**Don't**

- Don't use it when the value must come from the list. Use `Select` with `searchable`.

## Related

- **Select**: when only listed values are allowed.
- **SearchInput**: a search box without suggestions.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-combobox-autocomplete--docs
