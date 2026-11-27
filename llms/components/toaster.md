# Toast

Import: `import { Toaster } from '@adhamaa/ui-kit'`

Short messages that appear in a corner and go away on their own: "Package saved", "Upload failed". Call `toast()` from anywhere, including outside components, like in a mutation's `onSuccess`.

```tsx
import { toast } from '@adhamaa/ui-kit'
```

```tsx
const Kinds = () => (
  <div style={row}>
    <Button variant="default" onClick={() => toast('Route archived')}>
      Default
    </Button>
    <Button variant="default" onClick={() => toast.success('Package saved')}>
      Success
    </Button>
    <Button
      variant="default"
      onClick={() =>
        toast.error('Upload failed', {
          description: 'The file is over 10 MB.',
        })
      }
    >
      Error
    </Button>
    <Button
      variant="default"
      onClick={() => toast.warning('Session expires in 5 minutes')}
    >
      Warning
    </Button>
    <Button
      variant="default"
      onClick={() => toast.info('New version available')}
    >
      Info
    </Button>
  </div>
);
```

`UIKitProvider` renders the `Toaster`, the place toasts appear, so `toast()` works with no setup.

## Examples

### Kinds

`toast(title)` shows a plain message. `toast.success`, `toast.error`, `toast.warning` and `toast.info` add an icon and a colour. Each takes a second `options` argument with a `description`.

```tsx
toast.success('Package saved')
toast.error('Upload failed', { description: 'The file is over 10 MB.' })
```

### Loading, then the result

`toast.loading()` shows a spinner and stays until updated. It returns an id: call another `toast` with the same `id` to replace it with the result.

```tsx
const LoadingToResult = () => (
  <Button
    variant="default"
    onClick={() => {
      const id = toast.loading('Exporting report…')
      setTimeout(
        () => toast.success('Report ready', { id, duration: 4000 }),
        1500,
      )
    }}
  >
    Export report
  </Button>
);
```

```tsx
const id = toast.loading('Exporting report…')
try {
  await api.exportReport()
  toast.success('Report ready', { id })
} catch {
  toast.error('Export failed', { id })
}
```

### Action

`action` adds a button, like Undo.

```tsx
const WithAction = () => (
  <Button
    variant="default"
    onClick={() =>
      toast('Route archived', {
        action: { label: 'Undo', onClick: () => toast('Restored') },
      })
    }
  >
    Archive route
  </Button>
);
```

### Duration and dismissing

Toasts close after 4 seconds. Set `duration` in ms, or `Infinity` to keep one until it's dismissed. `toast.dismiss(id)` closes one, and `toast.dismiss()` closes them all. `onDismiss` runs when it closes.

```tsx
const Persistent = () => (
  <div style={row}>
    <Button
      variant="default"
      onClick={() =>
        toast.warning('Connection lost', {
          id: 'offline',
          duration: Number.POSITIVE_INFINITY,
          description: 'Changes will sync when you are back online.',
        })
      }
    >
      Show until dismissed
    </Button>
    <Button variant="subtle" onClick={() => toast.dismiss('offline')}>
      Dismiss it
    </Button>
  </div>
);
```

## API

### toast(title, options?)

| Option | Type | Description |
| --- | --- | --- |
| `description` | `ReactNode` | A second line under the title |
| `duration` | `number` | In ms. `Infinity` keeps it until dismissed. Default 4000 |
| `id` | `string` | Reuse an id to update a toast instead of adding another |
| `action` | `{ label, onClick }` | A button in the toast |
| `onDismiss` | `() => void` | Runs when it closes |

Also `toast.success`, `toast.error`, `toast.warning`, `toast.info`, `toast.loading` (same arguments, each returns the id) and `toast.dismiss(id?)`.

### Toaster

Render it yourself only if you set `withToaster={false}` on `UIKitProvider`, for example to change where toasts appear.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `side` | `'top' \| 'bottom'` | `bottom` |  |
| `align` | `'end' \| 'center' \| 'start'` | `end` |  |
| `maxVisible` | `number` | `3` |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-toaster` | The stack of toasts |
| `.kit-toast` | One toast |
| `.kit-toast__icon` | The icon (`[data-type]` is the kind: `success`, `error`…) |
| `.kit-toast__title`, `.kit-toast__description` | The text |
| `.kit-toast__close` | The close button |

## Accessibility

Built on [ui-sdk Toast](https://ui-sdk.dev/docs/react/components/toast). Toasts are announced by screen readers through a live region without moving focus. The timer pauses while the pointer is over a toast or focus is inside it, so people have time to read it and reach the action.

## Usage guidelines

**Do**

- Confirm actions people just took: saved, deleted, sent.
- Keep the title short, and put details in `description`.
- Offer Undo instead of a confirmation dialog for actions that can be undone.

**Don't**

- Don't use a toast for errors people must fix in a form. Show them next to the field.
- Don't put the only copy of important information in a toast. It disappears.

## Related

- **ConfirmDialog**: for decisions before an action.
- **UIKitProvider**: renders the Toaster.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-overlays-toast--docs
