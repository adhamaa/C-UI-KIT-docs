# Skeleton

Import: `import { Skeleton } from '@adhamaa/ui-kit'`

A grey placeholder shape that stands in for content while it loads, so the page doesn't jump when the content arrives.

```tsx
import { Skeleton } from '@adhamaa/ui-kit'
```

```tsx
const ListItem = () => (
  <div style={{ display: 'grid', gap: 16, maxWidth: 360 }}>
    {[1, 2, 3].map((n) => (
      <div key={n} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Skeleton circle height={40} />
        <div style={{ flex: 1, display: 'grid', gap: 8 }}>
          <Skeleton height={14} width="70%" />
          <Skeleton height={12} width="40%" />
        </div>
      </div>
    ))}
  </div>
);
```

## Playground

```tsx
const Playground = () => <Skeleton height={20} width="60%" animate />;
```

## Examples

### Shapes

Set `width` and `height` (any CSS length, or pixels), `circle` for a circle of `height`, and `radius` for the corners. Build the same layout as the content that will load.

```tsx
const ListItem = () => (
  <div style={{ display: 'grid', gap: 16, maxWidth: 360 }}>
    {[1, 2, 3].map((n) => (
      <div key={n} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Skeleton circle height={40} />
        <div style={{ flex: 1, display: 'grid', gap: 8 }}>
          <Skeleton height={14} width="70%" />
          <Skeleton height={12} width="40%" />
        </div>
      </div>
    ))}
  </div>
);
```

### Wrap the content

Wrap the real content and pass `visible`: while `true`, the skeleton shows at the content's size. Once `false`, the content shows.

```tsx
const WrapContent = () => {
  const [loading, setLoading] = useState(true)
  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 360 }}>
      <Button
        size="sm"
        variant="default"
        onClick={() => setLoading((l) => !l)}
      >
        {loading ? 'Finish loading' : 'Load again'}
      </Button>
      <Skeleton visible={loading}>
        <Card title="Contract value" description="Including variations">
          RM 1,250,000.00
        </Card>
      </Skeleton>
    </div>
  )
};
```

```tsx
<Skeleton visible={query.isLoading}>
  <ContractSummary contract={query.data} />
</Skeleton>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | `string \| number` |  |  |
| `height` | `string \| number` |  |  |
| `circle` | `boolean` |  | A circle of `height`. |
| `radius` | `string \| number` | `the theme radius` | Corner radius, any CSS length. |
| `animate` | `boolean` | `true` | Animate the shimmer. |
| `visible` | `boolean` | `true` | Show the skeleton instead of `children` while true; show `children` once false. |
| `className` | `string` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-skeleton` | The shape (`[data-animate]` while shimmering) |
| `.kit-skeleton__ghost` | The hidden content inside, when wrapping |

The shape uses the `muted` token.

## Accessibility

Skeletons are hidden from screen readers (`aria-hidden`). Tell assistive technology that the region is loading another way, for example `aria-busy` on the container.

## Usage guidelines

**Do**

- Match the real layout closely: same number of lines, same avatar size.

**Don't**

- Don't use skeletons for content that loads in under 300ms.

## Related

- **Loader**, **LoadingOverlay**.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-feedback-skeleton--docs
