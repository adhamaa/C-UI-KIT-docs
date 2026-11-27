# Loader

Import: `import { Loader } from '@adhamaa/ui-kit'`

Shows that something is loading: three staggered dots, or a spinning ring.

```tsx
import { Loader } from '@adhamaa/ui-kit'
```

```tsx
const Variants = () => <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
    <Loader size="md" variant="dots" />
    <Loader size="md" variant="spinner" />
</div>;
```

| You need | Use |
| --- | --- |
| A short wait with no layout to show | `Loader` |
| The shape of content that's coming | `Skeleton` |
| To block a panel or form while it works | `LoadingOverlay` |
| A button that's working | `Button` with `loading`, or an async `onClick` |

## Playground

```tsx
const Playground = () => <Loader variant="dots" size="md" />;
```

## Examples

### Sizes

`size` goes from `xs` to `xl`. `color` takes any CSS colour. It defaults to the `primary` token, and to the text colour inside a button.

```tsx
const Sizes = (args) => (
  <div style={{ display: 'grid', gap: 16 }}>
    {(['dots', 'spinner'] as const).map((variant) => (
      <div
        key={variant}
        style={{ display: 'flex', gap: 24, alignItems: 'center' }}
      >
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Loader key={size} {...args} variant={variant} size={size} />
        ))}
      </div>
    ))}
  </div>
);
```

### In context

Pass `label={null}` when text nearby already says what's loading, so screen readers don't hear it twice.

```tsx
const InContext = () => (
  <div
    style={{
      display: 'grid',
      justifyItems: 'center',
      gap: 12,
      padding: 32,
      border: '1px dashed var(--ui-border)',
      borderRadius: 'var(--ui-radius)',
      maxWidth: 360,
    }}
  >
    <Loader label={null} />
    <span>Loading work orders…</span>
    <Button size="sm" loading>
      Buttons have their own
    </Button>
  </div>
);
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'dots' \| 'spinner'` | `dots` | `dots` is the staggered three-dot loader; `spinner` a ring. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `md` |  |
| `color` | `string` |  | Colour: any CSS colour. Defaults to the primary foreground of the context. |
| `label` | `string \| null` | `Loading` | What screen readers hear. Pass `null` when something nearby already says it's loading, like a button label. |
| `className` | `string` |  |  |
| `style` | `CSSProperties` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-loader` | The loader (`[data-variant]`, `[data-size]`) |
| `.kit-loader__dot` | One dot |
| `.kit-loader__ring` | The ring |

## Accessibility

The loader has `role="status"` and is named by `label` ("Loading" by default), so screen readers announce it. With `label={null}` it's hidden from assistive technology. The animation slows down for people who ask for reduced motion.

## Usage guidelines

**Do**

- Say what's loading when the wait may be long: "Loading work orders…".

**Don't**

- Don't show a loader for waits under about 300ms. It flickers.
- Don't use a loader where the page layout is known. A `Skeleton` keeps the page from jumping.

## Related

- **Skeleton**, **LoadingOverlay**, **Button**.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-feedback-loader--docs
