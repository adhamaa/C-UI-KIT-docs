# Dialog

Import: `import { Dialog } from '@adhamaa/ui-kit'`

Opens a focused task over the page, like editing a record or filling in a short form. It has a title, an optional description, a body and a footer for actions. Focus moves into the dialog when it opens, stays inside while it's open, and returns to where it was when it closes.

The kit has three ways to open one:

| You need | Use |
| --- | --- |
| A dialog with your own content and state | `Dialog` |
| A yes/no question before an action | `ConfirmDialog` |
| Either of those from an event handler, with no state to manage | `modals.open()` / `modals.confirm()` |

```tsx
import { ConfirmDialog, Dialog, modals } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <DialogDemo
    opened={false}
    onClose={() => {}}
    title="Edit package"
    size="md"
    withCloseButton
    closeOnClickOutside
    closeOnEscape
    centered />;
```

## Examples

### Basic usage

`Dialog` is controlled: you keep `opened` in state and close it in `onClose`. `onClose` runs on Escape, a press on the backdrop, or the × button.

```tsx
const [opened, setOpened] = useState(false)
const close = () => setOpened(false)

<Button onClick={() => setOpened(true)}>Edit package</Button>
<Dialog
  opened={opened}
  onClose={close}
  title="Edit package"
  description="Changes apply to every linked work order."
  footer={
    <>
      <Button variant="default" onClick={close}>Cancel</Button>
      <Button onClick={save}>Save</Button>
    </>
  }
>
  <TextInput label="Package name" />
</Dialog>
```

### Composition

A Dialog is built from these parts, top to bottom. Every part except the body is optional.

| Part | Prop | Notes |
| --- | --- | --- |
| Header | `title`, `withCloseButton` | The title names the dialog for screen readers. The × button shows by default. |
| Description | `description` | Read out when the dialog opens. Text renders in a `<p>`, anything richer in a `<div>`. |
| Body | `children` | Scrolls when the content is taller than the screen. |
| Footer | `footer` | Actions, right-aligned. Put Cancel first and the primary action last. |

### Sizes

`size` takes a preset (`xs` 352px, `sm` 416px, `md` 512px, `lg` 720px, `xl` 960px, `full`), a number of pixels, or any CSS length. `fullScreen` fills the viewport.

```tsx
const Sizes = args => <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
      <DialogDemo
        key={size}
        {...args}
        size={size}
        title={`Size ${size}`}
        trigger={size}
      />
    ))}
    <DialogDemo
        opened={false}
        onClose={() => {}}
        withCloseButton
        closeOnClickOutside
        closeOnEscape
        centered
        size="min(90vw, 1000px)"
        title="Custom width"
        trigger="min(90vw, 1000px)" />
    <DialogDemo
        opened={false}
        onClose={() => {}}
        size="md"
        withCloseButton
        closeOnClickOutside
        closeOnEscape
        centered
        fullScreen
        title="Full screen"
        trigger="fullScreen" />
</div>;
```

### Required decisions

Turn off `withCloseButton`, `closeOnEscape` and `closeOnClickOutside` when the user must pick an action in the footer. Keep this rare: a dialog people can't dismiss feels like a trap.

```tsx
const MustChoose = () => <DialogDemo
    opened={false}
    onClose={() => {}}
    title="Accept the new terms"
    size="md"
    withCloseButton={false}
    closeOnClickOutside={false}
    closeOnEscape={false}
    centered
    description="You need to accept them to keep using the portal."><p style={{ margin: 0 }}>The terms changed on 1 November.</p></DialogDemo>;
```

### Confirm an action

`ConfirmDialog` asks a question and renders the Cancel and Confirm buttons for you. Return a Promise from `onConfirm` and the dialog stays open, with the confirm button pending, until it settles. It closes when the Promise resolves and stays open if it rejects, so you can show the error. Add `danger` for destructive actions.

```tsx
const ConfirmAction = () => {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Button variant="danger" onClick={() => setOpened(true)}>
        Delete route
      </Button>
      <ConfirmDialog
        opened={opened}
        onClose={() => setOpened(false)}
        title="Delete route?"
        description="Route R-12 and its 4 work orders will be removed. This can't be undone."
        confirmLabel="Delete"
        danger
        onConfirm={() => new Promise((resolve) => setTimeout(resolve, 1200))}
      />
    </>
  )
};
```

```tsx
<ConfirmDialog
  opened={opened}
  onClose={close}
  title="Delete route?"
  description="This can't be undone."
  confirmLabel="Delete"
  danger
  onConfirm={() => api.deleteRoute(id)}
/>
```

### Open from anywhere

`modals.open()` and `modals.confirm()` open a dialog from any event handler, with no state or JSX of your own. They need `UIKitProvider` with `withModals` (on by default).

```tsx
const Imperative = () => (
  <div style={{ display: 'flex', gap: 12 }}>
    <Button
      variant="default"
      onClick={() =>
        modals.open({
          title: 'Route details',
          size: 'lg',
          children: <p>Anything can go here.</p>,
        })
      }
    >
      modals.open
    </Button>
    <Button
      onClick={() =>
        modals.confirm({
          title: 'Publish package?',
          description: 'It becomes visible to contractors.',
          confirmLabel: 'Publish',
          onConfirm: () => toast.success('Published'),
        })
      }
    >
      modals.confirm
    </Button>
  </div>
);
```

```tsx
modals.confirm({
  title: 'Publish package?',
  description: 'It becomes visible to contractors.',
  confirmLabel: 'Publish',
  onConfirm: () => api.publish(id),
})
```

For a dialog that holds a react-hook-form form, use `FormDialog` or `openFormDialog()` from `@adhamaa/ui-kit/form`. See **Forms with react-hook-form**.

## Props

### Dialog

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `opened` (required) | `boolean` |  | Whether it's open. |
| `onClose` (required) | `() => void` |  | Called when the dialog asks to close: Escape, the backdrop, or the close button. |
| `title` | `ReactNode` |  |  |
| `description` | `ReactNode` |  | A line under the title, read out when the dialog opens. |
| `footer` | `ReactNode` |  | Buttons along the bottom, usually Cancel and a primary action. |
| `size` | `number \| (string & {}) \| DialogSize` | `md` | Width preset, a number of pixels, or any CSS length like `'640px'` or `'min(90vw, 1200px)'`. |
| `withCloseButton` | `boolean` | `true` | Show the × button. |
| `closeIcon` | `ReactNode` |  | What the × button shows instead of the kit's × icon. |
| `closeOnClickOutside` | `boolean` | `true` | Close when the backdrop is pressed. |
| `closeOnEscape` | `boolean` | `true` | Close on Escape. |
| `keepMounted` | `boolean` | `false` | Keep the dialog in the page while closed. |
| `centered` | `boolean` | `true` | Centre vertically. |
| `fullScreen` | `boolean` |  | Fill the viewport. |
| `onTransitionEnd` | `((opened: boolean) => void)` |  | Called once it has finished opening or closing, after any animation. |
| `className` | `string` |  |  |
| `classNames` | `Partial<Record<DialogPart, string>>` |  |  |
| `style` | `CSSProperties` |  |  |

### ConfirmDialog

Takes every Dialog prop except `footer`, plus these:

See the props of `ConfirmDialog` on the docs page or in its TypeScript types.

## Styling

| Selector | `classNames` key | Part |
| --- | --- | --- |
| `.kit-dialog__backdrop` | `backdrop` | The dimmed layer behind |
| `.kit-dialog` | `content` | The dialog box |
| `.kit-dialog__header` | `header` | Title and × button row |
| `.kit-dialog__title` | `title` | The title |
| `.kit-dialog__description` | — | The description |
| `.kit-dialog__body` | `body` | Your content |
| `.kit-dialog__footer` | `footer` | The actions row |
| `.kit-dialog [aria-label="Close"]` | `close` | The × button |

| Attribute or variable | Means |
| --- | --- |
| `--kit-dialog-width` | The resolved width from `size` |
| `[data-centered]` | Present when `centered` |
| `[data-fullscreen]` | Present when `fullScreen` |
| `[data-open]`, `[data-starting-style]`, `[data-ending-style]` | Open state and animation hooks (from ui-sdk) |

The box uses the `surfaceRaised` token. The backdrop is a fixed 50% dark tint; override `.kit-dialog__backdrop` to change it.

## Accessibility

Built on [ui-sdk Dialog](https://ui-sdk.dev/docs/react/components/dialog), which follows the WAI-ARIA modal dialog pattern. The dialog sets `aria-modal`, is labelled by its title, and is described by its description.

| Key | Does |
| --- | --- |
| Tab, Shift+Tab | Moves through the dialog's controls, staying inside |
| Escape | Closes the topmost dialog and returns focus to the element that opened it (unless `closeOnEscape` is off) |

- Always give a dialog a `title`. Without one, screen readers announce an unnamed dialog.
- Opening by touch focuses the dialog itself, so no on-screen keyboard appears.

## Usage guidelines

**Do**

- Keep dialogs for short, focused tasks. Use a page for anything long or multi-step.
- Make the title a clear question or task: "Delete route?", "Edit package".
- Name the confirm button after the action ("Delete", "Publish"), not "OK" or "Yes".

**Don't**

- Don't open a dialog from another dialog. Change the content of the open one instead.
- Don't use a dialog for messages that need no decision. Use a `toast`.
- Don't use `ConfirmDialog` for actions that can be undone. Do the action and offer Undo in a toast.

## Related

- **ConfirmDialog** and `modals`: shortcuts for common dialogs.
- **FormDialog**: a dialog with a react-hook-form form.
- **Popover**: for small content next to its trigger, without blocking the page.
- **Toast**: for messages that need no decision.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-overlays-dialog--docs
