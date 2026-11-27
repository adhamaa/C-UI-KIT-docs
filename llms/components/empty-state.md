# EmptyState

Import: `import { EmptyState } from '@adhamaa/ui-kit'`

What to show where a list or page has nothing yet: say what's missing and how to fix it.

```tsx
import { EmptyState } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <EmptyState
    title="No packages yet"
    description="Packages you create show up here."
    action={<Button leftSection={<icons.PlusIcon />}>Add package</Button>} />;
```

## Examples

### No results

After a search or filter, say why it's empty and offer a way back, like clearing the filters. `icon` replaces the default inbox icon.

```tsx
const NoResults = () => <EmptyState
    title="No matching work orders"
    description="Try another search or clear the filters."
    action={<Button variant="default">Clear filters</Button>}
    icon={<icons.SearchIcon />} />;
```

### Title only

```tsx
const TitleOnly = () => <EmptyState title="Nothing to review" description={undefined} action={undefined} />;
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` (required) | `ReactNode` |  |  |
| `description` | `ReactNode` |  |  |
| `icon` | `ReactNode` | `an inbox icon` |  |
| `action` | `ReactNode` |  | A button or link to recover, like "Add package". |
| `size` | `enum` | `md` |  |
| `className` | `string` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-empty` | The wrapper |
| `.kit-empty__icon` | The icon |
| `.kit-empty__title`, `.kit-empty__description` | The text |
| `.kit-empty__action` | The action |

## Accessibility

The icon is decorative and hidden from screen readers. The title and description are plain text, so they're read in order.

## Usage guidelines

**Do**

- Tell people what will appear here and give them the action that creates it.
- Tell "nothing yet" apart from "nothing matches": they need different actions.

**Don't**

- Don't show an empty state while data is still loading. Use `Skeleton`.

## Related

- **DataTable**: shows an empty state when there are no rows.
- **Skeleton**: while loading.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-data-display-emptystate--docs
