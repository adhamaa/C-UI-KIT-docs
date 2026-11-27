import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,u as a}from"./blocks-C0i7n7Fz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Theming`}),`
`,(0,c.jsx)(t.h1,{id:`theming`,children:`Theming`}),`
`,(0,c.jsxs)(t.p,{children:[`Every component reads its colours, radius and fonts from CSS variables. The colours that ui-sdk already defines keep its names (`,(0,c.jsx)(t.code,{children:`--ui-primary`}),`, `,(0,c.jsx)(t.code,{children:`--ui-border`}),`, …). The kit adds a few of its own (`,(0,c.jsx)(t.code,{children:`--kit-success`}),`, `,(0,c.jsx)(t.code,{children:`--kit-table-header`}),`, …).`]}),`
`,(0,c.jsx)(t.h2,{id:`use-a-preset`,children:`Use a preset`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { UIKitProvider, neutralTheme, swiftoTheme } from '@adhamaa/ui-kit'

<UIKitProvider theme={swiftoTheme}>…</UIKitProvider>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`neutralTheme`}),`: slate greys with a blue primary. It's the default.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`swiftoTheme`}),`: SWIFTO's gold and slate palette, Helvetica / Noto Sans.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`define-your-apps-theme`,children:`Define your app's theme`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import { defineTheme, extendTheme, neutralTheme } from '@adhamaa/ui-kit'

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
`})}),`
`,(0,c.jsxs)(t.p,{children:[`A colour is a single CSS colour, or a `,(0,c.jsx)(t.code,{children:`[light, dark]`}),` pair. Pairs compile to CSS `,(0,c.jsx)(t.code,{children:`light-dark()`}),`, so changing scheme needs no re-render.`]}),`
`,(0,c.jsx)(t.h3,{id:`colour-tokens`,children:`Colour tokens`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Token`}),(0,c.jsx)(t.th,{children:`Variable`}),(0,c.jsx)(t.th,{children:`Used for`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`background`}),` / `,(0,c.jsx)(t.code,{children:`foreground`})]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`--ui-background`}),` / `,(0,c.jsx)(t.code,{children:`--ui-foreground`})]}),(0,c.jsx)(t.td,{children:`Page and text`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`muted`}),` / `,(0,c.jsx)(t.code,{children:`mutedForeground`})]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`--ui-muted`}),` / `,(0,c.jsx)(t.code,{children:`--ui-muted-foreground`})]}),(0,c.jsx)(t.td,{children:`Quiet surfaces, secondary text`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`border`}),` / `,(0,c.jsx)(t.code,{children:`input`})]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`--ui-border`}),` / `,(0,c.jsx)(t.code,{children:`--ui-input`})]}),(0,c.jsx)(t.td,{children:`Dividers / field borders`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`ring`}),` / `,(0,c.jsx)(t.code,{children:`ringBorder`})]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`--ui-ring`}),` / `,(0,c.jsx)(t.code,{children:`--ui-ring-border`})]}),(0,c.jsx)(t.td,{children:`Focus glow / focused border`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`primary`}),` / `,(0,c.jsx)(t.code,{children:`primaryForeground`})]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`--ui-primary`}),` / `,(0,c.jsx)(t.code,{children:`--ui-primary-foreground`})]}),(0,c.jsx)(t.td,{children:`Filled buttons, checked controls`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`primarySoft`}),` / `,(0,c.jsx)(t.code,{children:`primarySoftForeground`})]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`--kit-primary-soft`}),` / `,(0,c.jsx)(t.code,{children:`…-foreground`})]}),(0,c.jsx)(t.td,{children:`Light buttons, selected options, current page`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`destructive`}),` / `,(0,c.jsx)(t.code,{children:`destructiveForeground`})]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`--ui-destructive`}),` / `,(0,c.jsx)(t.code,{children:`--kit-destructive-foreground`})]}),(0,c.jsx)(t.td,{children:`Errors, danger buttons`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`success`}),`, `,(0,c.jsx)(t.code,{children:`warning`}),`, `,(0,c.jsx)(t.code,{children:`info`}),` (+ `,(0,c.jsx)(t.code,{children:`…Foreground`}),`)`]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`--kit-success`}),`, …`]}),(0,c.jsx)(t.td,{children:`Badges, toasts, timeline`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`surface`}),` / `,(0,c.jsx)(t.code,{children:`surfaceRaised`})]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`--kit-surface`}),` / `,(0,c.jsx)(t.code,{children:`--kit-surface-raised`})]}),(0,c.jsx)(t.td,{children:`Dropzones / dialogs, cards, popovers`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`tableHeader`}),` / `,(0,c.jsx)(t.code,{children:`tableHeaderForeground`}),` / `,(0,c.jsx)(t.code,{children:`tableRowHover`})]}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--kit-table-*`})}),(0,c.jsx)(t.td,{children:`DataTable`})]})]})]}),`
`,(0,c.jsx)(t.h3,{id:`scalar-tokens`,children:`Scalar tokens`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`radius`}),`, `,(0,c.jsx)(t.code,{children:`radiusSm`}),`, `,(0,c.jsx)(t.code,{children:`radiusLg`}),`, `,(0,c.jsx)(t.code,{children:`fontSans`}),`, `,(0,c.jsx)(t.code,{children:`fontMono`}),`, `,(0,c.jsx)(t.code,{children:`fontSize`}),`, `,(0,c.jsx)(t.code,{children:`lineHeight`}),`, `,(0,c.jsx)(t.code,{children:`spacing`}),`, `,(0,c.jsx)(t.code,{children:`shadow`}),`, `,(0,c.jsx)(t.code,{children:`shadowLg`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`theme-with-css-only`,children:`Theme with CSS only`}),`
`,(0,c.jsxs)(t.p,{children:[`You don't need the provider's theme. Pass `,(0,c.jsx)(t.code,{children:`theme={null}`}),` and set the variables in your own CSS:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`:root {
  --ui-primary: light-dark(#0f766e, #2dd4bf);
  --ui-primary-foreground: white;
  --ui-radius: 0.5rem;
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`To read a token in JavaScript, like for a chart, use `,(0,c.jsx)(t.code,{children:`tokenVar('primary')`}),`, which returns `,(0,c.jsx)(t.code,{children:`'var(--ui-primary)'`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Disabled and read-only fields have their own optional variables, so an app can give them a plain look without changing `,(0,c.jsx)(t.code,{children:`--ui-muted`}),` everywhere:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`:root {
  --kit-disabled-bg: #f8fafc;       /* default: var(--ui-muted) */
  --kit-disabled-border: transparent; /* default: var(--ui-input) */
  --kit-disabled-fg: #64748b;       /* default: var(--ui-muted-foreground) */
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`light-and-dark`,children:`Light and dark`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<UIKitProvider defaultColorScheme="auto">  {/* follows the OS */}
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { useColorScheme, ColorSchemeToggle } from '@adhamaa/ui-kit'

const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme()
<ColorSchemeToggle />
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The scheme sets `,(0,c.jsx)(t.code,{children:`color-scheme`}),` on `,(0,c.jsx)(t.code,{children:`<html>`}),`, plus `,(0,c.jsx)(t.code,{children:`data-theme="dark"`}),` and the `,(0,c.jsx)(t.code,{children:`dark`}),` class, so Tailwind's `,(0,c.jsx)(t.code,{children:`dark:`}),` variant works too. The user's choice is remembered in localStorage; turn that off with `,(0,c.jsx)(t.code,{children:`persistColorScheme={false}`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`the-data-table-follows-the-theme`,children:`The data table follows the theme`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DataTable`}),` uses `,(0,c.jsx)(t.code,{children:`createAgGridTheme()`}),`, which is AG Grid's Quartz theme wired to the same variables. To use AG Grid directly elsewhere with the same look:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { createAgGridTheme } from '@adhamaa/ui-kit/table'

const gridTheme = createAgGridTheme({ rowVerticalPaddingScale: 0.8 })
<AgGridReact theme={gridTheme} … />
`})}),`
`,(0,c.jsx)(t.h2,{id:`override-one-component`,children:`Override one component`}),`
`,(0,c.jsxs)(t.p,{children:[`Every component accepts `,(0,c.jsx)(t.code,{children:`className`}),`, and form fields accept `,(0,c.jsx)(t.code,{children:`classNames`}),` per part (`,(0,c.jsx)(t.code,{children:`root`}),`, `,(0,c.jsx)(t.code,{children:`label`}),`, `,(0,c.jsx)(t.code,{children:`control`}),`, `,(0,c.jsx)(t.code,{children:`description`}),`, `,(0,c.jsx)(t.code,{children:`error`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<TextInput label="Code" classNames={{ label: 'uppercase tracking-wide', control: 'bg-amber-50' }} />
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The kit's styles live in the `,(0,c.jsx)(t.code,{children:`ui-kit`}),` cascade layer, so your classes win without `,(0,c.jsx)(t.code,{children:`!important`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};