# Popover

Import: `import { Popover } from '@adhamaa/ui-kit'`

A button that opens a floating panel of any content beside it: a notification list, a filter form, extra details. Escape and a press outside close it, and focus returns to the button. It doesn't block the page the way a Dialog does.

```tsx
import { Popover } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <Popover
    aria-label="Notifications"
    trigger={<span aria-hidden>🔔</span>}
    title="Notifications"
    width={320}
    side="bottom"
    align="start"
    onOpenChange={() => {}}><p style={{ margin: 0 }}>You're all caught up.</p></Popover>;
```

## Examples

### Trigger and title

Popover renders its own trigger: a small, square `subtle` icon button. Pass an icon as `trigger`, not a `<Button>`, and name it with `aria-label`. `title` is a heading in the popup and also names it for screen readers. Without a title, use `contentLabel`.

### A form inside

Control it with `opened` and `onOpenChange` to close it from inside, for example on Apply.

```tsx
const FilterPanel = () => {
  const [opened, setOpened] = useState(false)
  return (
    <Popover
      aria-label="Filters"
      trigger={<icons.SearchIcon />}
      title="Filter work orders"
      width={300}
      opened={opened}
      onOpenChange={setOpened}
    >
      <div style={{ display: 'grid', gap: 12 }}>
        <TextInput label="Contractor" size="sm" />
        <Checkbox label="Overdue only" size="sm" />
        <Checkbox label="Night work" size="sm" />
        <Button size="sm" onClick={() => setOpened(false)}>
          Apply
        </Button>
      </div>
    </Popover>
  )
};
```

### Placement

`side` picks the side of the trigger to open on, and `align` how the popup lines up with it. It flips to the other side when there isn't room.

```tsx
const Placement = (args) => (
  <div style={{ display: 'flex', gap: 12, alignSelf: 'center' }}>
    {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
      <Popover
        key={side}
        {...args}
        side={side}
        align="center"
        aria-label={`Opens on the ${side}`}
        trigger={<span aria-hidden>{side[0].toUpperCase()}</span>}
        title={`side="${side}"`}
        width={200}
      >
        <p style={{ margin: 0 }}>Opens on the {side}.</p>
      </Popover>
    ))}
  </div>
);
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `trigger` (required) | `ReactNode` |  | The trigger's content, like an icon. |
| `aria-label` | `string` |  | Accessible name of the trigger. Required when the trigger is icon-only. |
| `title` | `ReactNode` |  | A heading at the top of the popup; also its accessible name. |
| `contentLabel` | `string` |  | Names the popup when there's no visible `title`. |
| `children` (required) | `ReactNode` |  | The popup's content. |
| `opened` | `boolean` |  | Controlled open state. |
| `defaultOpened` | `boolean` |  |  |
| `onOpenChange` | `((opened: boolean) => void)` |  |  |
| `side` | `enum` | `bottom` | Which side of the trigger the popup opens on. |
| `align` | `enum` | `start` | How the popup lines up with the trigger. |
| `width` | `string \| number` | `fits the content` | Popup width, any CSS length. |
| `className` | `string` |  | Classes for the trigger button. |
| `contentClassName` | `string` |  | Classes for the popup. |
| `disabled` | `boolean` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-button.kit-icon-button` | The trigger (`className` adds to it) |
| `.kit-popover.kit-popover-panel` | The popup (`contentClassName` adds to it) |
| `.kit-popover-panel__title` | The title |

The popup uses the `surfaceRaised`, `radiusLg` and `shadowLg` tokens.

## Accessibility

Built on [ui-sdk Popover](https://ui-sdk.dev/docs/react/components/popover). The trigger is a button with `aria-expanded` and the popup is a dialog named by `title` or `contentLabel`. Focus moves into the popup when it opens.

| Key | Does |
| --- | --- |
| Enter, Space | On the trigger, opens or closes the popup |
| Tab | Moves through the popup's content |
| Escape | Closes it and returns focus to the trigger |

## Usage guidelines

**Do**

- Use it for content that relates to the trigger and can be dismissed without losing work.

**Don't**

- Don't use it for a list of actions. Use `ActionMenu`, which has menu keyboard behaviour.
- Don't put a long form in it. Use a `Dialog`.
- Don't use it for a hint. Use `Tooltip`.

## Related

- **ActionMenu**: a list of actions from a button.
- **Tooltip**: a short hint on hover.
- **Dialog**: for tasks that need the user's full attention.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-overlays-popover--docs
