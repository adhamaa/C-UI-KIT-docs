# Theming

Every component reads its colours, radius and fonts from CSS variables. The colours that ui-sdk already defines keep its names (`--ui-primary`, `--ui-border`, …). The kit adds a few of its own (`--kit-success`, `--kit-table-header`, …).

## Use a preset

```tsx
import { UIKitProvider, neutralTheme, swiftoTheme } from '@adhamaa/ui-kit'

<UIKitProvider theme={swiftoTheme}>…</UIKitProvider>
```

- `neutralTheme`: slate greys with a blue primary. It's the default.
- `swiftoTheme`: SWIFTO's gold and slate palette, Helvetica / Noto Sans.

## Define your app's theme

```ts
import { defineTheme, extendTheme, neutralTheme } from '@adhamaa/ui-kit'

// From scratch: anything left out keeps the default.
export const claimsTheme = defineTheme({
  name: 'claims',
  colors: {
    primary: ['oklch(0.55 0.2 260)', 'oklch(0.7 0.15 260)'], // [light, dark]
    primaryForeground: 'white',                               // same in both
    primarySoft: ['oklch(0.96 0.03 260)', 'oklch(0.3 0.06 260)'],
  },
  scalars: { radius: '0.5rem', fontSans: '"Inter", sans-serif' },
})

// Or start from a preset.
export const myTheme = extendTheme(neutralTheme, { colors: { primary: '#0f766e' } })
```

A colour is a single CSS colour, or a `[light, dark]` pair. Pairs compile to CSS `light-dark()`, so changing scheme needs no re-render.

### Colour tokens

| Token | Variable | Used for |
| --- | --- | --- |
| `background` / `foreground` | `--ui-background` / `--ui-foreground` | Page and text |
| `muted` / `mutedForeground` | `--ui-muted` / `--ui-muted-foreground` | Quiet surfaces, secondary text |
| `border` / `input` | `--ui-border` / `--ui-input` | Dividers / field borders |
| `ring` / `ringBorder` | `--ui-ring` / `--ui-ring-border` | Focus glow / focused border |
| `primary` / `primaryForeground` | `--ui-primary` / `--ui-primary-foreground` | Filled buttons, checked controls |
| `primarySoft` / `primarySoftForeground` | `--kit-primary-soft` / `…-foreground` | Light buttons, selected options, current page |
| `destructive` / `destructiveForeground` | `--ui-destructive` / `--kit-destructive-foreground` | Errors, danger buttons |
| `success`, `warning`, `info` (+ `…Foreground`) | `--kit-success`, … | Badges, toasts, timeline |
| `surface` / `surfaceRaised` | `--kit-surface` / `--kit-surface-raised` | Dropzones / dialogs, cards, popovers |
| `tableHeader` / `tableHeaderForeground` / `tableRowHover` | `--kit-table-*` | DataTable |

### Scalar tokens

`radius`, `radiusSm`, `radiusLg`, `fontSans`, `fontMono`, `fontSize`, `lineHeight`, `spacing`, `shadow`, `shadowLg`.

## Theme with CSS only

You don't need the provider's theme. Pass `theme={null}` and set the variables in your own CSS:

```css
:root {
  --ui-primary: light-dark(#0f766e, #2dd4bf);
  --ui-primary-foreground: white;
  --ui-radius: 0.5rem;
}
```

To read a token in JavaScript, like for a chart, use `tokenVar('primary')`, which returns `'var(--ui-primary)'`.

Disabled and read-only fields have their own optional variables, so an app can give them a plain look without changing `--ui-muted` everywhere:

```css
:root {
  --kit-disabled-bg: #f8fafc;       /* default: var(--ui-muted) */
  --kit-disabled-border: transparent; /* default: var(--ui-input) */
  --kit-disabled-fg: #64748b;       /* default: var(--ui-muted-foreground) */
}
```

## Light and dark

```tsx
<UIKitProvider defaultColorScheme="auto">  {/* follows the OS */}
```

```tsx
import { useColorScheme, ColorSchemeToggle } from '@adhamaa/ui-kit'

const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme()
<ColorSchemeToggle />
```

The scheme sets `color-scheme` on `<html>`, plus `data-theme="dark"` and the `dark` class, so Tailwind's `dark:` variant works too. The user's choice is remembered in localStorage; turn that off with `persistColorScheme={false}`.

## The data table follows the theme

`DataTable` uses `createAgGridTheme()`, which is AG Grid's Quartz theme wired to the same variables. To use AG Grid directly elsewhere with the same look:

```tsx
import { createAgGridTheme } from '@adhamaa/ui-kit/table'

const gridTheme = createAgGridTheme({ rowVerticalPaddingScale: 0.8 })
<AgGridReact theme={gridTheme} … />
```

## Override one component

Every component accepts `className`, and form fields accept `classNames` per part (`root`, `label`, `control`, `description`, `error`):

```tsx
<TextInput label="Code" classNames={{ label: 'uppercase tracking-wide', control: 'bg-amber-50' }} />
```

The kit's styles live in the `ui-kit` cascade layer, so your classes win without `!important`.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/theming--docs
