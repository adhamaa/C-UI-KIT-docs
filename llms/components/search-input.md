# SearchInput

Import: `import { SearchInput } from '@adhamaa/ui-kit'`

A text field for searching. It has a search icon and a clear button, and calls `onSearch` once the user stops typing, so you don't send a request on every key press.

```tsx
import { SearchInput } from '@adhamaa/ui-kit'
```

## Playground

```tsx
const Playground = () => <SearchInput placeholder="Search packages" onSearch={() => {}} debounceMs={300} />;
```

## Examples

### Debounced search

`onSearch` runs `debounceMs` milliseconds (300 by default) after the last change, including a clear. Use it to filter a list or fetch results. `onValueChange` still runs on every change if you need the raw text.

```tsx
const [query, setQuery] = useState('')
const { data } = useQuery({ queryKey: ['packages', query], queryFn: () => api.search(query) })

<SearchInput placeholder="Search packages" onSearch={setQuery} />
```

### With a label

Without a `label`, the input is named "Search" for screen readers. Add a label when the search sits in a form or there's more than one on the page.

```tsx
const WithLabel = () => <SearchInput
    placeholder="Name or registration no."
    onSearch={() => {}}
    debounceMs={300}
    label="Find a contractor" />;
```

## Props

Takes every `TextInput` prop except `type`, plus:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `clearable` | `boolean` |  | Show a button that clears the text. |
| `leftSection` | `ReactNode` |  | Content inside the input, before the text, like an icon. |
| `onSearch` | `((value: string) => void)` |  | Called with the text after the user pauses typing. |
| `debounceMs` | `number` | `300` | Pause before `onSearch`, in ms. |

`clearable` defaults to `true` and `leftSection` to the search icon. Pass your own to replace them.

## Styling

Uses the same classes as **TextInput**. The `<input>` has `type="search"`.

## Accessibility

Built on [ui-sdk Input](https://ui-sdk.dev/docs/react/components/input). The input has `type="search"`, so screen readers announce it as a search field, and it gets the accessible name "Search" unless you give it a `label` or `aria-label`.

## Usage guidelines

**Do**

- Say what's being searched in the placeholder: "Search packages".
- Keep the debounce at 300ms or more for server requests.

**Don't**

- Don't add a separate Search button that does the same thing as typing.

## Related

- **TextInput**: the field it's built on.
- **Autocomplete**: when the user should pick from suggestions.
- **DataTable**: has its own quick-filter search in the toolbar.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-inputs-searchinput--docs
