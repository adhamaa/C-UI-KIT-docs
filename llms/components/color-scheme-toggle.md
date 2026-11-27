# ColorSchemeToggle

Import: `import { ColorSchemeToggle } from '@adhamaa/ui-kit'`

An icon button that switches the app between light and dark. It shows a moon in light mode and a sun in dark mode.

```tsx
import { ColorSchemeToggle, useColorScheme } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <ColorSchemeToggle />;
```

Pressing it here changes the whole docs page, just as it would in an app.

## Examples

### useColorScheme

For your own controls, like a Light / Dark / System setting, use the hook. It works anywhere under `UIKitProvider`.

```tsx
const WithHook = () => <SchemeReadout />;
```

```tsx
const { setting, colorScheme, setColorScheme, toggleColorScheme } = useColorScheme()
// setting: 'light' | 'dark' | 'auto' (what the user chose)
// colorScheme: 'light' | 'dark' (in effect, after resolving 'auto')
```

The choice is saved in localStorage unless `UIKitProvider` has `persistColorScheme={false}`. Switching sets `color-scheme`, a `data-theme` attribute and a `dark` class on `<html>`, so app CSS and Tailwind's `dark:` variant follow it too.

## Props

Takes the **IconButton** props except `onClick` and `children`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |  |
| `className` | `string` |  |  |
| `style` | `CSSProperties \| ((state: ButtonState) => CSSProperties)` |  | Styles, or a function of the part's state that returns them. |
| `variant` | `'light' \| 'filled' \| 'outline' \| 'subtle' \| 'default' \| 'danger'` | `'filled'` |  |
| `loading` | `boolean` |  | Shows a spinner and blocks presses. A Promise returned from `onClick` does this on its own. |
| `type` | `'button' \| 'reset' \| 'submit'` |  | What a native button does in a form: `"submit"` submits it and `"reset"` resets it. Ignored when the button renders as something else. @defaultValue "button" |
| `render` | `RenderProp<ButtonState>` |  | Renders your own element: one that receives the part's props, or a function of the props and the state. |
| `focusableWhenDisabled` | `boolean` |  | Keeps a disabled button in the tab order with `aria-disabled` instead of the native attribute, so it can hold focus while it becomes disabled and host a tooltip that says why. Presses still do nothing. @defaultValue false |
| `pendingAnnouncement` | `string` |  | What screen readers hear once the button has been pending for a second, so a slow action doesn't pass in silence. Set it in the page's language. An empty string says nothing. @defaultValue "Loading" |
| `debug` | `boolean` |  | Logs every state change with its reason to the console, in development builds. |
| `aria-label` | `string` |  |  |

## Accessibility

It's an `IconButton` named "Switch to dark mode" or "Switch to light mode", so the name says what pressing it will do. Pass `aria-label` to translate it.

## Related

- **UIKitProvider**: sets the starting scheme.
- **Theming**: how colours are defined for both schemes.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-theming-colorschemetoggle--docs
