# Select

Import: `import { Select } from '@adhamaa/ui-kit'`

Picks one option from a list. Add `searchable` to filter the list, `clearable` to allow no value, and the async props to search and page through options on the server.

```tsx
import { Select } from '@adhamaa/ui-kit'
```

```tsx
const Searchable = () => <Select
    label="State"
    data={[
      'Johor',
      'Kedah',
      'Kelantan',
      'Melaka',
      'Negeri Sembilan',
      'Pahang',
      'Perak',
      'Perlis',
      'Pulau Pinang',
      'Sabah',
      'Sarawak',
      'Selangor',
      'Terengganu',
    ]}
    placeholder="Pick a state"
    onChange={() => {}}
    searchable
    clearable />;
```

**Pick the right list component:**

| You need | Use |
| --- | --- |
| One value from a fixed list | `Select` |
| Several values, or values the user can create | `MultiSelect` |
| Free text with suggestions, where any text is allowed | `Autocomplete` |
| One value from a large remote list that loads page by page | `InfiniteSelect`, or `Select` with the async props (below) |
| Two to five options, all visible at once | `SegmentedControl` or `RadioGroup` |

## Playground

```tsx
const Playground = () => <Select
    label="State"
    data={[
      'Johor',
      'Kedah',
      'Kelantan',
      'Melaka',
      'Negeri Sembilan',
      'Pahang',
      'Perak',
      'Perlis',
      'Pulau Pinang',
      'Sabah',
      'Sarawak',
      'Selangor',
      'Terengganu',
    ]}
    placeholder="Pick a state"
    onChange={() => {}} />;
```

## Examples

### Options

`data` takes three shapes, and you can mix them:

```tsx
// Strings: each one is both the value and the label.
data={['Draft', 'Published']}

// Objects: a separate value and label, and optionally disabled.
data={[{ value: 'draft', label: 'Draft' }, { value: 'archived', label: 'Archived', disabled: true }]}

// Groups: options under a heading.
data={[{ group: 'Pavement', items: ['Flexible', 'Rigid'] }]}
```

```tsx
const OptionObjects = () => <Select
    label="Status"
    data={[
      { value: 'draft', label: 'Draft' },
      { value: 'review', label: 'In review' },
      { value: 'published', label: 'Published' },
      { value: 'archived', label: 'Archived', disabled: true },
    ]}
    placeholder="Pick a status"
    onChange={() => {}} />;
```

### Groups

```tsx
const Grouped = () => <Select
    label="Asset"
    data={[
      { group: 'Pavement', items: ['Flexible', 'Rigid'] },
      {
        group: 'Structures',
        items: [
          'Bridge',
          'Culvert',
          { value: 'tunnel', label: 'Tunnel', disabled: true },
        ],
      },
    ]}
    placeholder="Pick an asset"
    onChange={() => {}} />;
```

### Controlled

Pass `value` and `onChange` to own the state. `onChange` receives the value, or `null` when cleared, plus the whole option object. Use `defaultValue` instead to let the Select keep its own state.

```tsx
const Controlled = () => {
    const [value, setValue] = useState<string | null>('Selangor')

    return (
        <>
            <Select
                label="State"
                data={[
                  'Johor',
                  'Kedah',
                  'Kelantan',
                  'Melaka',
                  'Negeri Sembilan',
                  'Pahang',
                  'Perak',
                  'Perlis',
                  'Pulau Pinang',
                  'Sabah',
                  'Sarawak',
                  'Selangor',
                  'Terengganu',
                ]}
                placeholder="Pick a state"
                clearable
                value={value}
                onChange={setValue} />
            <p style={{ marginTop: 8 }}>Value: {String(value)}</p>
        </>
    );
};
```

```tsx
const [status, setStatus] = useState<string | null>(null)

<Select
  label="Status"
  data={statuses}
  value={status}
  onChange={(value, option) => setStatus(value)}
/>
```

### Field states

Select takes the same field props as every kit input: `label`, `description`, `error`, `required`, `withAsterisk`, `disabled` and `readOnly`. A read-only Select stays focusable and submits its value. A disabled one does neither.

```tsx
const States = () => <div style={{ display: 'grid', gap: 16 }}>
    <Select
        data={[
          'Johor',
          'Kedah',
          'Kelantan',
          'Melaka',
          'Negeri Sembilan',
          'Pahang',
          'Perak',
          'Perlis',
          'Pulau Pinang',
          'Sabah',
          'Sarawak',
          'Selangor',
          'Terengganu',
        ]}
        placeholder="Pick a state"
        onChange={() => {}}
        label="With description"
        description="Where the work takes place." />
    <Select
        data={[
          'Johor',
          'Kedah',
          'Kelantan',
          'Melaka',
          'Negeri Sembilan',
          'Pahang',
          'Perak',
          'Perlis',
          'Pulau Pinang',
          'Sabah',
          'Sarawak',
          'Selangor',
          'Terengganu',
        ]}
        placeholder="Pick a state"
        onChange={() => {}}
        label="Required"
        required />
    <Select
        data={[
          'Johor',
          'Kedah',
          'Kelantan',
          'Melaka',
          'Negeri Sembilan',
          'Pahang',
          'Perak',
          'Perlis',
          'Pulau Pinang',
          'Sabah',
          'Sarawak',
          'Selangor',
          'Terengganu',
        ]}
        placeholder="Pick a state"
        onChange={() => {}}
        label="With error"
        error="Pick a state" />
    <Select
        data={[
          'Johor',
          'Kedah',
          'Kelantan',
          'Melaka',
          'Negeri Sembilan',
          'Pahang',
          'Perak',
          'Perlis',
          'Pulau Pinang',
          'Sabah',
          'Sarawak',
          'Selangor',
          'Terengganu',
        ]}
        placeholder="Pick a state"
        onChange={() => {}}
        label="Disabled"
        disabled
        defaultValue="Johor" />
    <Select
        data={[
          'Johor',
          'Kedah',
          'Kelantan',
          'Melaka',
          'Negeri Sembilan',
          'Pahang',
          'Perak',
          'Perlis',
          'Pulau Pinang',
          'Sabah',
          'Sarawak',
          'Selangor',
          'Terengganu',
        ]}
        placeholder="Pick a state"
        onChange={() => {}}
        label="Read-only"
        readOnly
        defaultValue="Johor" />
</div>;
```

### Sizes

```tsx
const Sizes = (args) => (
  <div style={{ display: 'grid', gap: 12 }}>
    {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
      <Select key={size} {...args} size={size} label={`Size ${size}`} />
    ))}
  </div>
);
```

### Left section

```tsx
const WithLeftSection = () => <Select
    label="State"
    data={[
      'Johor',
      'Kedah',
      'Kelantan',
      'Melaka',
      'Negeri Sembilan',
      'Pahang',
      'Perak',
      'Perlis',
      'Pulau Pinang',
      'Sabah',
      'Sarawak',
      'Selangor',
      'Terengganu',
    ]}
    placeholder="Pick a state"
    onChange={() => {}}
    leftSection={<icons.SearchIcon />} />;
```

### Server-side search and paging

For a list too big to load at once, search and page on the server:

- `onSearchChange` is called as the user types. Setting it turns off local filtering and shows the search field.
- `loading` shows a loader in the list.
- `hasMore` and `onLoadMore` load the next page when the list scrolls to the end.
- `getOptionLabel` gives the trigger a label for a selected value that isn't in the current page of `data`.

```tsx
const ServerSide = () => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [options, setOptions] = useState<SelectOption[]>([])
    const matches = contractors.filter((c) =>
      c.label.toLowerCase().includes(search.toLowerCase()),
    )

    useEffect(() => {
      setLoading(true)
      const timer = setTimeout(() => {
        setOptions(matches.slice(0, (page + 1) * 10))
        setLoading(false)
      }, 400)
      return () => clearTimeout(timer)
    }, [search, page])

    return (
        <Select
            onChange={() => {}}
            label="Contractor"
            placeholder="Search contractors"
            data={options}
            loading={loading}
            onSearchChange={(query) => {
              setSearch(query)
              setPage(0)
            }}
            hasMore={options.length < matches.length}
            onLoadMore={() => setPage((p) => p + 1)} />
    );
};
```

```tsx
const [search, setSearch] = useState('')
const query = useInfiniteQuery({ queryKey: ['contractors', search], … })

<Select
  label="Contractor"
  data={query.data?.pages.flat().map((c) => ({ value: c.uuid, label: c.name }))}
  onSearchChange={setSearch}
  loading={query.isFetching}
  hasMore={query.hasNextPage}
  onLoadMore={query.fetchNextPage}
/>
```

If you'd rather pass a single `loadOptions` function and let the component handle paging, use `InfiniteSelect`.

## Use with react-hook-form

`RHFSelect` from `@adhamaa/ui-kit/form` takes the same props plus `name`, and wires value, change, blur and the error message to the form.

```tsx
import { FormProvider, useForm } from 'react-hook-form'
import { RHFSelect } from '@adhamaa/ui-kit/form'

const form = useForm({ defaultValues: { state: null } })

<FormProvider {...form}>
  <RHFSelect name="state" label="State" data={states} rules={{ required: true }} />
</FormProvider>
```

See **Forms with react-hook-form** for config-driven forms.

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
| `data` | `SelectData` |  | The options. |
| `value` | `string \| null` |  | The selected value, or `null` for none. |
| `defaultValue` | `string \| null` |  |  |
| `onChange` | `((value: string \| null, option: SelectOption \| null) => void)` |  | Called with the new value, or `null` when cleared. |
| `onBlur` | `(() => void)` |  |  |
| `placeholder` | `string` |  |  |
| `searchable` | `boolean` |  | Add a search field to the list. |
| `clearable` | `boolean` |  | Show a button that clears the selection. |
| `getOptionLabel` | `((value: string) => string)` |  | Label for a value not present in `data`, like an async result. |
| `leftSection` | `ReactNode` |  | Content inside the trigger, before the value. |
| `maxDropdownHeight` | `number` | `280` | Max height of the list, in px. |

The ref goes to the trigger button.

## Styling

| Selector | Part |
| --- | --- |
| `.kit-input.kit-select` | The field box around the trigger |
| `.kit-select__trigger` | The button that opens the list |
| `.kit-select__value` | The selected label, or the placeholder |
| `.kit-select__chevron` | The arrow on the right |
| `.kit-input__clear` | The clear button (`clearable`) |
| `.kit-listbox` | The popup list |
| `.kit-listbox__search` | The search field in the list |
| `.kit-listbox__item` | One option |
| `.kit-listbox__group-label` | A group heading |
| `.kit-listbox__empty` | The "Nothing found" message |
| `[data-highlighted]`, `[data-selected]` | On the item under the keyboard or pointer, and on the chosen item (from ui-sdk) |

The `classNames` prop adds classes to the field parts: `root`, `label`, `description`, `error` and `control`. Selected options use the `primarySoft` token.

## Accessibility

Built on [ui-sdk Select](https://ui-sdk.dev/docs/react/components/select), which follows the WAI-ARIA select-only combobox pattern. The trigger has the `combobox` role and the list is a `listbox`. The `label` names the trigger, and the description and error describe it.

| Key | Does |
| --- | --- |
| Enter, Space, ArrowDown | On the trigger, opens the list |
| ArrowUp, ArrowDown | Moves through the options, skipping disabled ones |
| Home, End | Goes to the first or last option |
| Typing | Jumps to the next option that starts with the typed text |
| Enter | Chooses the option, closes the list and returns focus to the trigger |
| Escape | Closes without choosing and returns focus to the trigger |

If a Select has no visible `label`, give it an `aria-label`.

## Usage guidelines

**Do**

- Always give it a `label`. The placeholder disappears once there's a value.
- Add `searchable` when there are more than about 10 options.
- Use option objects with stable IDs as values, so renaming a label doesn't break saved data.

**Don't**

- Don't use Select for two or three options. Show them all with `SegmentedControl` or `RadioGroup`.
- Don't load thousands of options at once. Use the server-side props or `InfiniteSelect`.
- Don't use the placeholder as a label or for instructions. Use `description`.

## Related

- **MultiSelect**, **Autocomplete** and **InfiniteSelect**: the rest of the combobox family.
- **SegmentedControl** and **RadioGroup**: for a few options.
- **RHFSelect**: the react-hook-form version.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-combobox-select--docs
