import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./iframe-DlPXEdOm.js";import{i,r as a}from"./react-DITjJg24.js";import{c as o,l as s,n as c,u as l}from"./blocks-DItH5EBd.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{title:`Components/Theming/UIKitProvider`}),`
`,(0,f.jsx)(t.h1,{id:`uikitprovider`,children:`UIKitProvider`}),`
`,(0,f.jsx)(t.p,{children:`Applies a theme and hosts the toast region and modal stack. Place it once, near the root of the app. Every page of these docs is rendered inside one.`}),`
`,(0,f.jsx)(s,{language:`tsx`,dark:!0,code:`import { UIKitProvider } from '@adhamaa/ui-kit'`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`import '@adhamaa/ui-kit/styles.css'
import { UIKitProvider, swiftoTheme } from '@adhamaa/ui-kit'

export function Root() {
  return (
    <UIKitProvider theme={swiftoTheme} defaultColorScheme="light">
      <App />
    </UIKitProvider>
  )
}
`})}),`
`,(0,f.jsx)(t.h2,{id:`what-it-does`,children:`What it does`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Theme:`}),` injects a `,(0,f.jsx)(t.code,{children:`<style>`}),` tag with the theme's CSS variables. Pass a preset (`,(0,f.jsx)(t.code,{children:`neutralTheme`}),`, default, or `,(0,f.jsx)(t.code,{children:`swiftoTheme`}),`) or your own from `,(0,f.jsx)(t.code,{children:`defineTheme()`}),` / `,(0,f.jsx)(t.code,{children:`extendTheme()`}),`. Pass `,(0,f.jsx)(t.code,{children:`null`}),` when the app sets the CSS variables itself.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Colour scheme:`}),` starts in `,(0,f.jsx)(t.code,{children:`defaultColorScheme`}),` (`,(0,f.jsx)(t.code,{children:`auto`}),` follows the operating system), and remembers the user's choice in localStorage unless `,(0,f.jsx)(t.code,{children:`persistColorScheme={false}`}),`.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Toasts:`}),` renders the `,(0,f.jsx)(t.code,{children:`Toaster`}),`, so `,(0,f.jsx)(t.code,{children:`toast()`}),` works anywhere. Turn it off with `,(0,f.jsx)(t.code,{children:`withToaster={false}`}),` if you place `,(0,f.jsx)(t.code,{children:`<Toaster />`}),` yourself.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Modals:`}),` renders the stack for `,(0,f.jsx)(t.code,{children:`modals.open()`}),` and `,(0,f.jsx)(t.code,{children:`modals.confirm()`}),`. Turn it off with `,(0,f.jsx)(t.code,{children:`withModals={false}`}),`.`]}),`
`]}),`
`,(0,f.jsxs)(t.p,{children:[`With a Content Security Policy, pass `,(0,f.jsx)(t.code,{children:`nonce`}),` so the injected style tag is allowed.`]}),`
`,(0,f.jsx)(t.h2,{id:`nextjs`,children:`Next.js`}),`
`,(0,f.jsx)(t.p,{children:`The provider uses state and effects, so render it from a client component:`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`// app/providers.tsx
'use client'
import { UIKitProvider } from '@adhamaa/ui-kit'
export function Providers({ children }: { children: React.ReactNode }) {
  return <UIKitProvider>{children}</UIKitProvider>
}
`})}),`
`,(0,f.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,f.jsx)(c,{of:n}),`
`,(0,f.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Theming`}),` and `,(0,f.jsx)(t.strong,{children:`Tokens`}),`: defining a theme and what each token does.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`ColorSchemeToggle`}),` and `,(0,f.jsx)(t.code,{children:`useColorScheme`}),`: changing the scheme.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Toast`}),` and `,(0,f.jsx)(t.strong,{children:`Dialog`}),` (`,(0,f.jsx)(t.code,{children:`modals`}),`): what the provider hosts.`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),a(),l(),r()})))()}p();export{d as default};