# Chip

Import: `import { Chip } from '@adhamaa/ui-kit'`

A pill that toggles on and off, for filters and tags. A checked chip shows a check mark.

```tsx
import { Chip } from '@adhamaa/ui-kit'
```

```tsx
const Filters = (args) => {
  const [active, setActive] = useState<string[]>(['Overdue'])
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <fieldset
        aria-label="Filters"
        style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          border: 0,
          margin: 0,
          padding: 0,
        }}
      >
        {filters.map((f) => (
          <Chip
            key={f}
            {...args}
            checked={active.includes(f)}
            onChange={(on) =>
              setActive((a) => (on ? [...a, f] : a.filter((x) => x !== f)))
            }
          >
            {f}
          </Chip>
        ))}
      </fieldset>
      <p style={{ margin: 0 }}>Active: {active.join(', ') || 'none'}</p>
    </div>
  )
};
```

## Playground

```tsx
const Playground = () => <Chip onChange={() => {}}>Overdue</Chip>;
```

## Examples

### Filters

Chips have no group of their own: keep the checked values in state and render one chip per option. Wrap them in a `<fieldset>` with an `aria-label` (or a `<legend>`) so screen readers know they belong together.

```tsx
const Filters = (args) => {
  const [active, setActive] = useState<string[]>(['Overdue'])
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <fieldset
        aria-label="Filters"
        style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          border: 0,
          margin: 0,
          padding: 0,
        }}
      >
        {filters.map((f) => (
          <Chip
            key={f}
            {...args}
            checked={active.includes(f)}
            onChange={(on) =>
              setActive((a) => (on ? [...a, f] : a.filter((x) => x !== f)))
            }
          >
            {f}
          </Chip>
        ))}
      </fieldset>
      <p style={{ margin: 0 }}>Active: {active.join(', ') || 'none'}</p>
    </div>
  )
};
```

### States

`withoutIcon` hides the check mark.

```tsx
const States = () => <div style={{ display: 'flex', gap: 8 }}>
    <Chip onChange={() => {}}>Unchecked</Chip>
    <Chip onChange={() => {}} defaultChecked>Checked
              </Chip>
    <Chip onChange={() => {}} defaultChecked withoutIcon>No check mark
              </Chip>
    <Chip onChange={() => {}} disabled>Disabled
              </Chip>
</div>;
```

### Sizes

```tsx
const Sizes = (args) => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
      <Chip key={size} {...args} size={size} defaultChecked>
        Size {size}
      </Chip>
    ))}
  </div>
);
```

## Use with react-hook-form

`RHFChip` binds one chip to a boolean field:

```tsx
import { RHFChip } from '@adhamaa/ui-kit/form'

<RHFChip name="urgent">Urgent</RHFChip>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `boolean` |  |  |
| `defaultChecked` | `boolean` |  |  |
| `onChange` | `((checked: boolean) => void)` |  |  |
| `disabled` | `boolean` |  |  |
| `size` | `enum` | `md` |  |
| `className` | `string` |  |  |
| `withoutIcon` | `boolean` |  | Hide the check mark shown while checked. |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-chip` | The pill |
| `.kit-chip__icon` | The check mark |
| `[data-pressed]` | Present while checked (from ui-sdk) |

A checked chip uses the `primarySoft` tokens.

## Accessibility

Built on [ui-sdk Toggle](https://ui-sdk.dev/docs/react/components/toggle). Each chip is a toggle button with `aria-pressed`.

| Key | Does |
| --- | --- |
| Space, Enter | Toggles the focused chip |

## Usage guidelines

**Do**

- Keep chip labels to one or two words.
- Show the result of the filter straight away.

**Don't**

- Don't use chips for actions. Use `Button`.
- Don't use chips inside forms in place of checkboxes.

## Related

- **Checkbox**: for choices inside a form.
- **Badge**: a label that can't be toggled.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-inputs-chip--docs
