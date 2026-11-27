# UIKitProvider

Applies a theme and hosts the toast region and modal stack. Place it once, near the root of the app. Every page of these docs is rendered inside one.

```tsx
import { UIKitProvider } from '@adhamaa/ui-kit'
```

```tsx
import '@adhamaa/ui-kit/styles.css'
import { UIKitProvider, swiftoTheme } from '@adhamaa/ui-kit'

export function Root() {
  return (
    <UIKitProvider theme={swiftoTheme} defaultColorScheme="light">
      <App />
    </UIKitProvider>
  )
}
```

## What it does

- **Theme:** injects a `<style>` tag with the theme's CSS variables. Pass a preset (`neutralTheme`, default, or `swiftoTheme`) or your own from `defineTheme()` / `extendTheme()`. Pass `null` when the app sets the CSS variables itself.
- **Colour scheme:** starts in `defaultColorScheme` (`auto` follows the operating system), and remembers the user's choice in localStorage unless `persistColorScheme={false}`.
- **Toasts:** renders the `Toaster`, so `toast()` works anywhere. Turn it off with `withToaster={false}` if you place `<Toaster />` yourself.
- **Modals:** renders the stack for `modals.open()` and `modals.confirm()`. Turn it off with `withModals={false}`.

With a Content Security Policy, pass `nonce` so the injected style tag is allowed.

## Next.js

The provider uses state and effects, so render it from a client component:

```tsx
// app/providers.tsx
'use client'
import { UIKitProvider } from '@adhamaa/ui-kit'
export function Providers({ children }: { children: React.ReactNode }) {
  return <UIKitProvider>{children}</UIKitProvider>
}
```

## Props

See the props of `UIKitProvider` on the docs page or in its TypeScript types.

## Related

- **Theming** and **Tokens**: defining a theme and what each token does.
- **ColorSchemeToggle** and `useColorScheme`: changing the scheme.
- **Toast** and **Dialog** (`modals`): what the provider hosts.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-theming-uikitprovider--docs
