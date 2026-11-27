# Getting started

## 1. Let npm find the package

The kit is a private package on GitHub Packages. Add this line to your app's `.npmrc`, next to `package.json`. It holds no secret, so commit it:

```ini
@adhamaa:registry=https://npm.pkg.github.com
```

Then give your own machine a token, once:

1. On GitHub, open **Settings → Developer settings → Personal access tokens → Tokens (classic)**.
2. Create a token with only the **`read:packages`** scope. GitHub's npm registry doesn't accept fine-grained tokens.
3. Add it to the `.npmrc` in your **home folder** (`~/.npmrc`, or `C:\Users\<you>\.npmrc` on Windows), never the project's:

```ini
//npm.pkg.github.com/:_authToken=ghp_your_token_here
```

**Deploy servers** (QA, prod, and the Docker build host) need the same line in their `~/.npmrc`. Use a token from a bot or machine account so deploys don't depend on one person. See *Server setup* in the repository README.

## 2. Install

```bash
yarn add @adhamaa/ui-kit
```

That's all most apps need. ui-sdk comes with the kit, so don't install `@ui-sdk/*` yourself: a second copy would split its React context. Requires React 19 or newer.

### Optional: tables and react-hook-form

Two parts of the kit live in their own entry points and need a library the kit doesn't install for you. Add one only if your app imports that entry point:

| If you import | Install |
| --- | --- |
| `@adhamaa/ui-kit/table` (`DataTable`) | `yarn add ag-grid-community ag-grid-react` (35 or 36) |
| `@adhamaa/ui-kit/form` (`RHF*` fields, `FormFields`, `FormDialog`) | `yarn add react-hook-form` (7.50 or newer) |

If you import one of these without its library, the build fails with a "module not found" error naming the package to add.

## 3. Load the styles once

**With Tailwind CSS v4**, at the top of your global stylesheet:

```css
@import "tailwindcss";
@import "@adhamaa/ui-kit/styles.css" layer(components);
```

The kit's stylesheet already includes ui-sdk's base styles. Putting it in Tailwind's `components` layer keeps Tailwind's base reset from undoing them, while utility classes still win. So `className="mt-4"` on any kit component works.

**Without Tailwind**, import it once at your app's entry, such as `app/layout.tsx` or `main.tsx`:

```ts
import '@adhamaa/ui-kit/styles.css'
```

## 4. Add the provider

```tsx
import { UIKitProvider, swiftoTheme } from '@adhamaa/ui-kit'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UIKitProvider theme={swiftoTheme} defaultColorScheme="light">
      {children}
    </UIKitProvider>
  )
}
```

The provider applies the theme and hosts the toast region and the modal stack. In a Next.js App Router project, put it in a `'use client'` providers file and render that from `app/layout.tsx`.

## 5. Use components

```tsx
import { Button, TextInput, toast } from '@adhamaa/ui-kit'
import { DataTable } from '@adhamaa/ui-kit/table'
import { RHFTextInput } from '@adhamaa/ui-kit/form'
```

The package has three entry points, so an app that never uses tables or react-hook-form doesn't load them:

| Import from | Contains | Needs |
| --- | --- | --- |
| `…/ui-kit` | Theme, fields, overlays, display | (ui-sdk is included) |
| `…/ui-kit/form` | `RHF*` fields, `FormFields`, `FormDialog` | react-hook-form |
| `…/ui-kit/table` | `DataTable`, AG Grid theme, cell editors | AG Grid |

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/getting-started--docs
