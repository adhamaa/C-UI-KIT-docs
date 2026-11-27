# InfiniteSelect

Import: `import { InfiniteSelect } from '@adhamaa/ui-kit'`

A Select whose options come from a paged, searchable API. Give it one `loadOptions` function and it handles the rest: it waits for typing to pause, loads the next page as the list scrolls, cancels requests that a newer search made stale, and remembers the labels of chosen values. Add `multiple` for a MultiSelect.

```tsx
import { InfiniteSelect } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <InfiniteSelect
    label="Contractor"
    placeholder="Search contractors"
    loadOptions={fetchContractors} />;
```

## Examples

### Loading options

`loadOptions` receives `{ search, page, signal }` and returns `{ options, hasMore }`. `page` starts at 0. Pass `signal` to `fetch`, so a stale request is cancelled. It works with any fetcher and has no data-library dependency.

```tsx
<InfiniteSelect
  label="Contractor"
  loadOptions={async ({ search, page, signal }) => {
    const res = await api.contractors({ search, page: page + 1, size: 20 }, { signal })
    return {
      options: res.data.map((c) => ({ value: c.uuid, label: c.name })),
      hasMore: res.meta.page < res.meta.last_page,
    }
  }}
/>
```

`debounceMs` (300 by default) sets how long to wait after typing before searching.

### Multiple

```tsx
const Multiple = () => (
  <InfiniteSelect
    multiple
    label="Contractors"
    placeholder="Add contractors"
    loadOptions={fetchContractors}
  />
);
```

### Editing a saved value

When a form opens with a saved value, its option may be on a page that hasn't loaded yet. Pass it in `initialOptions` so the field shows its label straight away.

```tsx
const EditSavedValue = () => {
  const [value, setValue] = useState<string | null>('c-42')
  return (
    <>
      <InfiniteSelect
        label="Contractor"
        loadOptions={fetchContractors}
        value={value}
        onChange={setValue}
        initialOptions={[{ value: 'c-42', label: 'Contractor 42 Sdn Bhd' }]}
      />
      <p style={{ marginTop: 8 }}>Value: {String(value)}</p>
    </>
  )
};
```

## Use with react-hook-form

```tsx
import { RHFInfiniteSelect } from '@adhamaa/ui-kit/form'

<RHFInfiniteSelect name="contractorId" label="Contractor" loadOptions={loadContractors} />
```

## Props

Takes the props of **Select** (or **MultiSelect** with `multiple`), except `data` and the async props, which it manages. Plus:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `loadOptions` (required) | `LoadOptions` |  | Fetches one page of options for a search. |
| `initialOptions` | `SelectOption[]` |  | Options for values already selected, so their labels show before their page loads, like when editing a saved record. |
| `debounceMs` | `number` | `300` | Wait this long after typing before searching, in ms. |
| `multiple` | `boolean` |  |  |

## Styling

Same as **Select**, or **MultiSelect** with `multiple`.

## Accessibility

Same as **Select** or **MultiSelect**. Reaching the last option with the keyboard loads the next page, and a status in the list tells screen readers while it loads.

## Usage guidelines

**Do**

- Use it for lists that are too long to load at once: contractors, users, assets.
- Return 20 or so options a page.

**Don't**

- Don't use it for short, fixed lists. Use `Select`.

## Related

- **Select** with the async props: if you'd rather manage paging yourself, for example with TanStack Query's `useInfiniteQuery`.
- **MultiSelect**: several values from a list you already have.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-combobox-infiniteselect--docs
