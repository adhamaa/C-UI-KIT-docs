# Breadcrumb

Import: `import { Breadcrumb } from '@adhamaa/ui-kit'`

Shows where the current page sits in the app, with links back up the trail.

```tsx
import { Breadcrumb } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <Breadcrumb
    items={[
      { label: 'Home', href: '#home' },
      { label: 'Packages', href: '#packages' },
      { label: 'Selangor', href: '#selangor' },
      { label: 'PKG-004' },
    ]} />;
```

## Examples

### Items

Each item is `{ label, href }`, with an optional `icon`. The last item is the current page and doesn't link.

### Your router's links

By default items render as `<a>`. Pass your router's link as `linkComponent` so navigation stays client-side. It receives `href`, `className` and `children`.

```tsx
import Link from 'next/link'

<Breadcrumb
  linkComponent={Link}
  items={[{ label: 'Packages', href: '/packages' }, { label: 'PKG-004' }]}
/>
```

```tsx
const WithRouterLink = () => <Breadcrumb
    items={[
      { label: 'Home', href: '#home' },
      { label: 'Packages', href: '#packages' },
      { label: 'Selangor', href: '#selangor' },
      { label: 'PKG-004' },
    ]}
    linkComponent={RouterLink} />;
```

### Long trails

`maxItems` collapses the middle items into an ellipsis when there are more than that many.

```tsx
const Collapsed = () => <Breadcrumb
    items={[
      { label: 'Home', href: '#home' },
      { label: 'Packages', href: '#packages' },
      { label: 'Selangor', href: '#selangor' },
      { label: 'Petaling', href: '#petaling' },
      { label: 'PKG-004', href: '#pkg-004' },
      { label: 'Route R-12' },
    ]}
    maxItems={3} />;
```

### Separator

```tsx
const CustomSeparator = () => <Breadcrumb
    items={[
      { label: 'Home', href: '#home' },
      { label: 'Packages', href: '#packages' },
      { label: 'Selangor', href: '#selangor' },
      { label: 'PKG-004' },
    ]}
    separator="/" />;
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` (required) | `BreadcrumbItem[]` |  |  |
| `linkComponent` | `ComponentType<BreadcrumbLinkProps>` | `an `<a>`` | The link component, so the app's router handles navigation, like Next.js's `Link`. |
| `separator` | `ReactNode` | `a chevron` |  |
| `maxItems` | `number` |  | Collapse the middle items when there are more than this many. |
| `aria-label` | `string` | `'Breadcrumb'` |  |
| `className` | `string` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-breadcrumb` | The `<nav>` |
| `.kit-breadcrumb__list`, `.kit-breadcrumb__item` | The list and one item |
| `.kit-breadcrumb__link` | A link |
| `.kit-breadcrumb__current` | The current page |
| `.kit-breadcrumb__separator` | A separator |
| `.kit-breadcrumb__gap` | The collapsed ellipsis |

## Accessibility

It's a `<nav>` named "Breadcrumb" (change it with `aria-label`), holding an ordered list. The current page has `aria-current="page"`. Separators and the ellipsis are hidden from screen readers.

## Usage guidelines

**Do**

- Put it at the top of detail pages, above the page title.

**Don't**

- Don't use it as the main navigation. It's a secondary aid.

## Related

- **Tabs**: navigation within one page.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-navigation-breadcrumb--docs
