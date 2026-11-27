import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-D8m9WcGw.js";import{i as u,n as d,r as f,t as p}from"./ColorSchemeToggle.stories-Ck62ExWQ.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`colorschemetoggle`,children:`ColorSchemeToggle`}),`
`,(0,g.jsx)(t.p,{children:`An icon button that switches the app between light and dark. It shows a moon in light mode and a sun in dark mode.`}),`
`,(0,g.jsx)(o,{language:`tsx`,dark:!0,code:`import { ColorSchemeToggle, useColorScheme } from '@adhamaa/ui-kit'`}),`
`,(0,g.jsx)(c,{of:d}),`
`,(0,g.jsx)(t.p,{children:`Pressing it here changes the whole docs page, just as it would in an app.`}),`
`,(0,g.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,g.jsx)(t.h3,{id:`usecolorscheme`,children:`useColorScheme`}),`
`,(0,g.jsxs)(t.p,{children:[`For your own controls, like a Light / Dark / System setting, use the hook. It works anywhere under `,(0,g.jsx)(t.code,{children:`UIKitProvider`}),`.`]}),`
`,(0,g.jsx)(c,{of:f}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`const { setting, colorScheme, setColorScheme, toggleColorScheme } = useColorScheme()
// setting: 'light' | 'dark' | 'auto' (what the user chose)
// colorScheme: 'light' | 'dark' (in effect, after resolving 'auto')
`})}),`
`,(0,g.jsxs)(t.p,{children:[`The choice is saved in localStorage unless `,(0,g.jsx)(t.code,{children:`UIKitProvider`}),` has `,(0,g.jsx)(t.code,{children:`persistColorScheme={false}`}),`. Switching sets `,(0,g.jsx)(t.code,{children:`color-scheme`}),`, a `,(0,g.jsx)(t.code,{children:`data-theme`}),` attribute and a `,(0,g.jsx)(t.code,{children:`dark`}),` class on `,(0,g.jsx)(t.code,{children:`<html>`}),`, so app CSS and Tailwind's `,(0,g.jsx)(t.code,{children:`dark:`}),` variant follow it too.`]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.p,{children:[`Takes the `,(0,g.jsx)(t.strong,{children:`IconButton`}),` props except `,(0,g.jsx)(t.code,{children:`onClick`}),` and `,(0,g.jsx)(t.code,{children:`children`}),`.`]}),`
`,(0,g.jsx)(s,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.p,{children:[`It's an `,(0,g.jsx)(t.code,{children:`IconButton`}),` named "Switch to dark mode" or "Switch to light mode", so the name says what pressing it will do. Pass `,(0,g.jsx)(t.code,{children:`aria-label`}),` to translate it.`]}),`
`,(0,g.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`UIKitProvider`}),`: sets the starting scheme.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Theming`}),`: how colours are defined for both schemes.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),l(),u()})))()}_();export{h as default};