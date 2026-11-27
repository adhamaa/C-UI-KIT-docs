# Badge

Import: `import { Badge } from '@adhamaa/ui-kit'`

A short label for a status, a category or a count.

```tsx
import { Badge } from '@adhamaa/ui-kit'
```

```tsx
const Statuses = () => {
  const status = {
    Draft: 'neutral',
    'In review': 'info',
    Approved: 'success',
    Overdue: 'warning',
    Rejected: 'danger',
  } as const
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {Object.entries(status).map(([label, color]) => (
        <Badge key={label} color={color} variant="dot">
          {label}
        </Badge>
      ))}
    </div>
  )
};
```

## Playground

```tsx
const Playground = () => <Badge color="success" variant="light" size="sm">Published</Badge>;
```

## Examples

### Colours and variants

Six colours (`neutral`, `primary`, `success`, `warning`, `danger`, `info`) in four variants: `light` (tinted, default), `filled`, `outline` and `dot` (a coloured dot beside plain text).

```tsx
const ColorsAndVariants = (args) => (
  <div style={{ display: 'grid', gap: 12 }}>
    {variants.map((variant) => (
      <div
        key={variant}
        style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}
      >
        {colors.map((color) => (
          <Badge key={color} {...args} variant={variant} color={color}>
            {color}
          </Badge>
        ))}
      </div>
    ))}
  </div>
);
```

### Statuses

Map each status to a colour once and reuse the map, so a status looks the same on every page.

```tsx
const Statuses = () => {
  const status = {
    Draft: 'neutral',
    'In review': 'info',
    Approved: 'success',
    Overdue: 'warning',
    Rejected: 'danger',
  } as const
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {Object.entries(status).map(([label, color]) => (
        <Badge key={label} color={color} variant="dot">
          {label}
        </Badge>
      ))}
    </div>
  )
};
```

```tsx
const statusColor = { draft: 'neutral', review: 'info', approved: 'success', rejected: 'danger' } as const

<Badge color={statusColor[pkg.status]} variant="dot">{statusLabel[pkg.status]}</Badge>
```

### Sizes, icons and counts

```tsx
const Sizes = (args) => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
      <Badge key={size} {...args} size={size}>
        Size {size}
      </Badge>
    ))}
  </div>
);
```
```tsx
const WithIconAndCount = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Badge color="success" leftSection={<icons.CheckIcon />}>
      Verified
    </Badge>
    <Badge color="primary" variant="filled">
      12
    </Badge>
  </div>
);
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'light' \| 'filled' \| 'outline' \| 'dot'` | `light` | `light`: tinted. `filled`: solid. `outline`: bordered. `dot`: a coloured dot and text. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `sm` |  |
| `leftSection` | `ReactNode` |  |  |

Other `<span>` attributes pass through.

## Styling

| Selector | Part |
| --- | --- |
| `.kit-badge` | The badge (`[data-color]`, `[data-variant]`, `[data-size]`) |
| `.kit-badge__dot` | The dot (`variant="dot"`) |
| `.kit-badge__section` | The left section |

Colours come from the `success`, `warning`, `info`, `destructive` and `primary` tokens.

## Accessibility

A badge is plain text. Don't rely on its colour alone to carry meaning: the text must say the status. For a count, add context for screen readers, like `aria-label="12 unread"`.

## Usage guidelines

**Do**

- Keep it to one or two words.
- Use the same colour for the same meaning across the app.

**Don't**

- Don't make badges clickable. Use `Chip` or `Button`.

## Related

- **Chip**: a label that toggles.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-data-display-badge--docs
