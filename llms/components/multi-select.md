# MultiSelect

Import: `import { MultiSelect } from '@adhamaa/ui-kit'`

Picks several options. Chosen values show as removable chips in the field, and typing filters the list. It can create options from the typed text, and search and page through options on the server.

```tsx
import { MultiSelect } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <MultiSelect
    label="States"
    data={states}
    placeholder="Add states"
    defaultValue={['Johor', 'Selangor']}
    onChange={() => {}} />;
```

## Examples

### Limit and clear

`maxValues` caps how many can be chosen: once reached, the other options are disabled. `clearable` adds a button that removes every value.

```tsx
const MaxValues = () => <MultiSelect
    label="States"
    data={states}
    placeholder="Add states"
    defaultValue={['Johor', 'Selangor']}
    onChange={() => {}}
    maxValues={3}
    clearable
    description="Up to 3 states" />;
```

### Create options

With `creatable`, the list offers the typed text as a new option. `onCreateOption` receives the text and returns the new option, or a Promise of it, for example after saving it on the server. The option is then selected. Add it to `data` as well, so it keeps its label.

```tsx
const Creatable = () => {
    const [value, setValue] = useState<string[]>(['urgent'])
    const [tags, setTags] = useState([
      { value: 'urgent', label: 'Urgent' },
      { value: 'night-work', label: 'Night work' },
      { value: 'lane-closure', label: 'Lane closure' },
    ])

    return (
        <MultiSelect
            defaultValue={['Johor', 'Selangor']}
            label="Tags"
            placeholder="Add or create tags"
            data={tags}
            value={value}
            onChange={setValue}
            creatable
            onCreateOption={(query) => {
              const option = { value: query.toLowerCase(), label: query }
              setTags((t) => [...t, option])
              return option
            }} />
    );
};
```

```tsx
<MultiSelect
  label="Tags"
  data={tags}
  creatable
  onCreateOption={async (query) => {
    const tag = await api.createTag(query)
    return { value: tag.id, label: tag.name }
  }}
/>
```

### Groups

`data` takes the same shapes as **Select**, including groups.

```tsx
const Grouped = () => <MultiSelect
    label="Assets"
    data={[
      { group: 'Pavement', items: ['Flexible', 'Rigid'] },
      { group: 'Structures', items: ['Bridge', 'Culvert', 'Tunnel'] },
    ]}
    placeholder="Pick assets"
    defaultValue={[]}
    onChange={() => {}} />;
```

### Server-side search and paging

MultiSelect has the same async props as Select: `onSearchChange`, `loading`, `hasMore` and `onLoadMore`, plus `getOptionLabel` for chosen values that aren't in the current page. See **Select** for an example, or use `InfiniteSelect` with `multiple`. `keepSearchOnSelect` keeps the typed text after each choice, so people can pick several matches in a row.

### States

```tsx
const States = () => <div style={{ display: 'grid', gap: 16 }}>
    <MultiSelect
        data={states}
        placeholder="Add states"
        onChange={() => {}}
        label="Required"
        required
        defaultValue={[]}
        error="Pick at least one state" />
    <MultiSelect
        data={states}
        placeholder="Add states"
        defaultValue={['Johor', 'Selangor']}
        onChange={() => {}}
        label="Disabled"
        disabled />
</div>;
```

## Use with react-hook-form

```tsx
import { RHFMultiSelect } from '@adhamaa/ui-kit/form'

<RHFMultiSelect name="states" label="States" data={states} rules={{ validate: (v) => v.length > 0 || 'Pick at least one' }} />
```

The form value is a `string[]`.

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
| `onSearchChange` | `((query: string) => void)` |  | Called with the search text as the user types. Pair it with `filter={false}` (set automatically) to search on the server. |
| `loading` | `boolean` |  | Show a loading state in the list. |
| `hasMore` | `boolean` |  | More options exist: `onLoadMore` runs when the list scrolls to the end. |
| `onLoadMore` | `(() => void)` |  | Load the next page. |
| `nothingFoundMessage` | `ReactNode` | `'Nothing found'` | Text while nothing matches. |
| `data` | `SelectData` |  |  |
| `value` | `string[]` |  |  |
| `defaultValue` | `string[]` |  |  |
| `onChange` | `((value: string[]) => void)` |  |  |
| `onBlur` | `(() => void)` |  |  |
| `placeholder` | `string` |  |  |
| `maxValues` | `number` |  | The most values that can be chosen. |
| `clearable` | `boolean` |  | Show a button that clears every value. |
| `creatable` | `boolean` |  | Offer to create an option from the search text. |
| `onCreateOption` | `((query: string) => SelectOption \| Promise<SelectOption \| null> \| null) \| undefined` |  | Turn the search text into a new option. Return the option (or a Promise of it) and it's selected. Required with `creatable`. |
| `getOptionLabel` | `((value: string) => string)` |  | Label for values not present in `data`, like async results. |
| `keepSearchOnSelect` | `boolean` |  | Keep the search text after choosing an option. |
| `maxDropdownHeight` | `number` | `280` | Max height of the list, in px. |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-input.kit-multiselect` | The field box |
| `.kit-multiselect__chips` | The chips row |
| `.kit-chip-tag` | One chosen value |
| `.kit-chip-tag__remove` | A chip's remove button |
| `.kit-multiselect__input` | The search input |
| `.kit-listbox__create` | The "Create …" option |

The popup list uses the same `.kit-listbox*` classes as **Select**.

## Accessibility

Built on [ui-sdk Combobox](https://ui-sdk.dev/docs/react/components/combobox) with multiple selection. The input is a combobox named by the label. The chips are a toolbar named by the same label, and each remove button is named after its value.

| Key | Does |
| --- | --- |
| Typing | Filters the options and opens the list |
| ArrowDown, ArrowUp | Opens the list, then moves the highlight |
| Enter | Chooses the highlighted option, or creates one |
| Escape | Closes the list |
| Backspace | In an empty input, removes the last chip |
| ArrowLeft, ArrowRight | Move between chips |

## Usage guidelines

**Do**

- Use it when people need more than one value from a long list.
- Set `maxValues` when there's a real limit, and say so in `description`.

**Don't**

- Don't use it for fewer than about six options. Use checkboxes.
- Don't allow `creatable` unless new values are really welcome. It invites typos and duplicates.

## Related

- **Select**: one value.
- **InfiniteSelect**: the same with `multiple`, for large remote lists.
- **Chip**: filters as toggles.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-combobox-multiselect--docs
