# Pagination

Import: `import { Pagination } from '@adhamaa/ui-kit'`

Page buttons with previous and next, for lists and tables split into pages.

```tsx
import { Pagination } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <Pagination total={12} defaultPage={3} siblings={1} boundaries={1} onChange={() => {}} />;
```

## Examples

### Controlled

`total` is the number of pages. `page` and `onChange` use page numbers starting at 1.

```tsx
const Controlled = args => {
    const [page, setPage] = useState(5)

    return (
        <div style={{ display: 'grid', gap: 8 }}>
            <Pagination
                total={12}
                siblings={1}
                boundaries={1}
                defaultPage={undefined}
                page={page}
                onChange={setPage} />
            <p style={{ margin: 0 }}>Page {page}of {args.total}
            </p>
        </div>
    );
};
```

```tsx
const [page, setPage] = useState(1)
const query = useQuery({ queryKey: ['packages', page], queryFn: () => api.packages({ page }) })

<Pagination total={query.data?.meta.last_page ?? 1} page={page} onChange={setPage} />
```

### Siblings and boundaries

`siblings` is how many pages show either side of the current one, and `boundaries` how many always show at each end. Gaps show as an ellipsis.

```tsx
const SiblingsAndBoundaries = () => (
  <div style={{ display: 'grid', gap: 16 }}>
    <Pagination total={30} defaultPage={15} />
    <Pagination total={30} defaultPage={15} siblings={2} />
    <Pagination total={30} defaultPage={15} boundaries={2} />
  </div>
);
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `total` (required) | `number` |  | Number of pages. |
| `page` | `number` |  | The current page, starting at 1. |
| `defaultPage` | `number` |  |  |
| `onChange` | `((page: number) => void)` |  | Called with the new page, starting at 1. |
| `siblings` | `number` | `1` | Pages shown either side of the current one. |
| `boundaries` | `number` | `1` | Pages always shown at each end. |
| `aria-label` | `string` | `'Pagination'` |  |
| `className` | `string` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-pagination` | The `<nav>` |
| `.kit-pagination__list` | The list of pages |
| `.kit-pagination__link` | A page button (`[aria-current]` on the current page) |
| `.kit-pagination__control` | Previous and next |
| `.kit-pagination__ellipsis` | A gap |

## Accessibility

Built on [ui-sdk Pagination](https://ui-sdk.dev/docs/react/components/pagination). It's a `<nav>` named "Pagination" (change it with `aria-label` when there's more than one). The current page has `aria-current="page"`, and the arrows are named "Previous page" and "Next page".

## Related

- **DataTable**: has pagination built in.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-navigation-pagination--docs
