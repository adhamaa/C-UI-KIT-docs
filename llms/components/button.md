# Button

Import: `import { Button } from '@adhamaa/ui-kit'`

Runs an action. It comes in six variants and four sizes, takes icons on either side, and stays pending while an async `onClick` runs, so a form can't be submitted twice.

```tsx
import { Button, IconButton } from '@adhamaa/ui-kit'
```

```tsx
const Variants = (args) => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    {variants.map((variant) => (
      <Button key={variant} {...args} variant={variant}>
        {variant === 'danger'
          ? 'Delete'
          : variant[0].toUpperCase() + variant.slice(1)}
      </Button>
    ))}
  </div>
);
```

## Playground

Change the props below to see every combination.

```tsx
const Playground = () => <Button variant="filled" size="md" onClick={() => {}}>Save package</Button>;
```

## Examples

### Variants

| Variant | Use it for |
| --- | --- |
| `filled` (default) | The main action on a page or in a dialog. Use one per view. |
| `light` | A secondary action that should still stand out. |
| `outline` | A secondary action next to a filled button. |
| `subtle` | Low-emphasis actions in toolbars, table rows and cards. |
| `default` | Neutral actions like Cancel or Back. |
| `danger` | Destructive actions like Delete. Pair it with a confirmation. |

The preview at the top of the page shows all six.

### Sizes

`size` sets the height from the `--kit-h-*` tokens: `xs` 28px, `sm` 32px, `md` 36px (default), `lg` 44px. Form fields use the same scale, so a button and a field of the same size line up.

```tsx
const Sizes = (args) => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    {sizes.map((size) => (
      <Button key={size} {...args} size={size}>
        Size {size}
      </Button>
    ))}
  </div>
);
```

### With icons

`leftSection` and `rightSection` take any node, usually one of the kit's `icons`. Put a forward-pointing icon on the right and an add or action icon on the left.

```tsx
const WithIcons = () => <div style={{ display: 'flex', gap: 12 }}>
    <Button
        variant="filled"
        size="md"
        onClick={() => {}}
        leftSection={<icons.PlusIcon />}>Add package
              </Button>
    <Button
        size="md"
        onClick={() => {}}
        variant="default"
        rightSection={<icons.ChevronRightIcon />}>Next
              </Button>
</div>;
```

### Icon only

Use `IconButton` for a button with no visible text. It is square, defaults to the `subtle` variant, and **requires `aria-label`**, which TypeScript enforces.

```tsx
const IconOnly = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <IconButton aria-label="Refresh">
      <icons.RefreshIcon />
    </IconButton>
    <IconButton aria-label="More actions" variant="default">
      <icons.DotsVerticalIcon />
    </IconButton>
    <IconButton aria-label="Add" variant="filled" size="lg">
      <icons.PlusIcon />
    </IconButton>
  </div>
);
```

### Loading

`loading` shows a spinner in place of the left section and blocks presses. The button stays focusable, so keyboard users don't lose their place.

```tsx
const Loading = () => <Button variant="filled" size="md" onClick={() => {}} loading>Saving</Button>;
```

### Async click

Return a Promise from `onClick` and the button becomes pending until it settles: it gets `aria-busy`, ignores more presses and, if the action takes longer than a second, tells screen readers it's loading. You don't need a `loading` state of your own for this.

```tsx
const AsyncClick = () => <Button
    variant="filled"
    size="md"
    onClick={fn(() => new Promise((resolve) => setTimeout(resolve, 1000)))}>Submit (1s)</Button>;
```

```tsx
<Button onClick={() => api.savePackage(values)}>Save</Button>
```

This tracks the Promise from the button's own `onClick`. For a form's async `onSubmit`, keep a pending flag and pass it to `loading` instead.

### Disabled and full width

```tsx
const Disabled = () => <Button variant="filled" size="md" onClick={() => {}} disabled>Save package</Button>;
```
```tsx
const FullWidth = () => <Button variant="filled" size="md" onClick={() => {}} fullWidth>Save package</Button>;
```

## Props

### Button

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `style` | `CSSProperties \| ((state: ButtonState) => CSSProperties)` |  | Styles, or a function of the part's state that returns them. |
| `onClick` | `((event: MouseEvent<HTMLElement, MouseEvent>, details: ActionDetails) => unknown)` |  | Runs when the button is pressed. Return a Promise to make the button pending until it settles: it gets `aria-busy`, `aria-disabled` and `data-pending`, keeps focus, ignores presses meanwhile, so a form can't submit twice, and says `pendingAnnouncement` after a second. The event's element is whatever `render` renders, like a link. `details.source` says how it was pressed, for changes made after an `await`. |
| `type` | `enum` | `button` | What a native button does in a form: `"submit"` submits it and `"reset"` resets it. Ignored when the button renders as something else. @defaultValue "button" |
| `render` | `RenderProp<ButtonState>` |  | Renders your own element: one that receives the part's props, or a function of the props and the state. |
| `focusableWhenDisabled` | `boolean` |  | Keeps a disabled button in the tab order with `aria-disabled` instead of the native attribute, so it can hold focus while it becomes disabled and host a tooltip that says why. Presses still do nothing. @defaultValue false |
| `pendingAnnouncement` | `string` |  | What screen readers hear once the button has been pending for a second, so a slow action doesn't pass in silence. Set it in the page's language. An empty string says nothing. @defaultValue "Loading" |
| `debug` | `boolean` |  | Logs every state change with its reason to the console, in development builds. |
| `variant` | `enum` | `subtle` |  |
| `size` | `enum` | `md` |  |
| `leftSection` | `ReactNode` |  | Content before the label, usually an icon. |
| `rightSection` | `ReactNode` |  | Content after the label. |
| `loading` | `boolean` |  | Shows a spinner and blocks presses. A Promise returned from `onClick` does this on its own. |
| `fullWidth` | `boolean` |  | Stretch to the container's width. |
| `className` | `string` |  |  |

Button also accepts the props of ui-sdk's Button, such as `type`, `onClick` and `focusableWhenDisabled`. `type` defaults to `'button'`, so set `type="submit"` to submit a form.

### IconButton

See the props of `IconButton` on the docs page or in its TypeScript types.

## Styling

| Selector | Part |
| --- | --- |
| `.kit-button` | The button, for both Button and IconButton |
| `.kit-icon-button` | Added on IconButton |
| `.kit-button--full` | Added with `fullWidth` |
| `.kit-button__section` | The left or right section, and the loading spinner |
| `.kit-button__label` | The text |
| `[data-variant]`, `[data-size]` | The current variant and size |
| `[data-loading]` | Present while `loading` is set |
| `[data-pending]` | Present while an async `onClick` runs (from ui-sdk) |
| `[data-disabled]` | Present while disabled (from ui-sdk) |

Colours come from the theme tokens: `primary` and `primaryForeground` for `filled`, `primarySoft` for `light`, `destructive` for `danger`. See **Tokens** for the full list. To restyle one button, pass `className`. The kit's rules sit in `@layer ui-kit`, so your unlayered CSS wins without `!important`.

## Accessibility

Built on [ui-sdk Button](https://ui-sdk.dev/docs/react/components/button), which renders a native `<button>`.

| Key | Does |
| --- | --- |
| Enter, Space | Presses the focused button |

- Give every button a text label that says what it does: "Save package", not "OK".
- `IconButton` must have an `aria-label`. Add a `Tooltip` with the same text for sighted mouse users.
- While pending, the button sets `aria-busy="true"` and `aria-disabled="true"` and keeps focus.
- Use `focusableWhenDisabled` when a disabled button should still be reachable, for example to show a tooltip explaining why it's disabled.

## Usage guidelines

**Do**

- Keep one `filled` button per view, for the main action.
- Start labels with a verb: "Add package", "Export report".
- Put Cancel (`default`) before the primary action in dialog footers.

**Don't**

- Don't use a button to go to another page. Use a link.
- Don't change the label to "Saving…" while pending. The spinner and the screen reader announcement already say it's working, and a changing label shifts the button's width.
- Don't use `danger` for actions that can be undone.

## Related

- **Dialog** and **ConfirmDialog**: footers built from buttons.
- **Tooltip**: names an `IconButton` for mouse users.
- **ActionMenu**: when a row has more actions than fit as buttons.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-buttons-button--docs
