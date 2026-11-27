# Tooltip

Import: `import { Tooltip } from '@adhamaa/ui-kit'`

A short hint that shows when the pointer rests on an element or it gets keyboard focus. On touch screens, pressing the element toggles it.

```tsx
import { Tooltip } from '@adhamaa/ui-kit'
```

```tsx
const IconButtons = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Tooltip label="Refresh">
      <IconButton aria-label="Refresh">
        <icons.RefreshIcon />
      </IconButton>
    </Tooltip>
    <Tooltip label="Add package">
      <IconButton aria-label="Add package">
        <icons.PlusIcon />
      </IconButton>
    </Tooltip>
    <Tooltip label="More actions">
      <IconButton aria-label="More actions">
        <icons.DotsVerticalIcon />
      </IconButton>
    </Tooltip>
  </div>
);
```

## Playground

```tsx
const Playground = () => <Tooltip label="Export to PDF" side="top" align="center" delay={300}><Button variant="default">Export</Button></Tooltip>;
```

## Examples

### Icon buttons

The most common use: an icon-only button names itself with `aria-label`, and the tooltip shows that name to sighted mouse users. The child must accept a ref and props, like a button, a link or a kit component.

```tsx
const IconButtons = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Tooltip label="Refresh">
      <IconButton aria-label="Refresh">
        <icons.RefreshIcon />
      </IconButton>
    </Tooltip>
    <Tooltip label="Add package">
      <IconButton aria-label="Add package">
        <icons.PlusIcon />
      </IconButton>
    </Tooltip>
    <Tooltip label="More actions">
      <IconButton aria-label="More actions">
        <icons.DotsVerticalIcon />
      </IconButton>
    </Tooltip>
  </div>
);
```

### Arrow and long text

`withArrow` draws an arrow at the trigger. Text wraps at `maxWidth` (20rem by default).

```tsx
const WithArrow = () => <Tooltip label="Export to PDF" side="top" align="center" delay={300} withArrow><Button variant="default">Export</Button></Tooltip>;
```
```tsx
const LongText = () => <Tooltip
    label="Exports every visible column for the current filter. Large tables can take a minute."
    side="top"
    align="center"
    delay={300}
    maxWidth={240}
    withArrow><Button variant="default">Export</Button></Tooltip>;
```

### Sides

```tsx
const Sides = (args) => (
  <div style={{ display: 'flex', gap: 12 }}>
    {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
      <Tooltip key={side} {...args} side={side} label={`side="${side}"`}>
        <Button variant="default">{side}</Button>
      </Tooltip>
    ))}
  </div>
);
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` (required) | `ReactNode` |  | What the tooltip says. With no label, the child renders on its own. |
| `children` (required) | `ReactElement<Record<string, any>, string \| JSXElementConstructor<any>>` |  | The element the tooltip points at. It must accept a ref and props, like a button, a link or a kit component. |
| `side` | `enum` | `top` |  |
| `align` | `enum` | `center` |  |
| `withArrow` | `boolean` |  | Draw an arrow pointing at the trigger. |
| `maxWidth` | `string \| number` | `20rem` | Wrap long text at this width, any CSS length. |
| `delay` | `number` | `300` | Pause before opening, in ms. |
| `disabled` | `boolean` |  | Don't show the tooltip; the child still renders. |
| `type` | `enum` | `description` | `description` (default) adds the label to the trigger's description. `label` makes it the trigger's name, for icon-only buttons. |
| `className` | `string` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-tooltip` | The tooltip (`className` adds to it) |
| `.kit-tooltip__arrow` | The arrow |

## Accessibility

Built on [ui-sdk Tooltip](https://ui-sdk.dev/docs/react/components/tooltip). By default (`type="description"`) the label is added to the trigger's description, so screen readers read it after the trigger's name. With `type="label"` it becomes the trigger's name instead, for an icon button that has no `aria-label`.

- It opens on keyboard focus as well as hover, after `delay` (300ms).
- Escape closes it.
- Never put interactive content in a tooltip. It can't be reached with the keyboard.

## Usage guidelines

**Do**

- Keep it to a few words: name the action, or add one fact.
- Give every icon-only button a tooltip.

**Don't**

- Don't hide important information in a tooltip. People on touch screens rarely find it.
- Don't add a tooltip that repeats a visible label.

## Related

- **IconButton**: the usual trigger.
- **Popover**: for longer or interactive content.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-overlays-tooltip--docs
