import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,r as a,u as o}from"./blocks-SWAFQvtI.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./Tokens.stories-C-vkDs6K.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(t.h1,{id:`tokens`,children:`Tokens`}),`
`,(0,g.jsxs)(t.p,{children:[`Every component reads its colours, radius, shadows, fonts and heights from CSS variables. The swatches below show the live values. Use the `,(0,g.jsx)(t.strong,{children:`Theme`}),` and `,(0,g.jsx)(t.strong,{children:`Scheme`}),` switches in the toolbar to see them change.`]}),`
`,(0,g.jsxs)(t.p,{children:[`To change a token for your app, use `,(0,g.jsx)(t.code,{children:`defineTheme()`}),` or `,(0,g.jsx)(t.code,{children:`extendTheme()`}),`. See `,(0,g.jsx)(t.strong,{children:`Theming`}),`. To use one in your own code, read the variable, or call `,(0,g.jsx)(t.code,{children:`tokenVar()`}),` in JavaScript:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`import { tokenVar } from '@adhamaa/ui-kit'

<div style={{ color: tokenVar('mutedForeground') }} />   // var(--ui-muted-foreground)
`})}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-css`,children:`.my-panel {
  background: var(--kit-surface-raised);
  border: 1px solid var(--ui-border);
  border-radius: var(--ui-radius);
}
`})}),`
`,(0,g.jsx)(t.h2,{id:`colours`,children:`Colours`}),`
`,(0,g.jsxs)(t.p,{children:[`Variables named `,(0,g.jsx)(t.code,{children:`--ui-*`}),` are shared with ui-sdk. Variables named `,(0,g.jsx)(t.code,{children:`--kit-*`}),` are the kit's own. Each colour has a light and a dark value.`]}),`
`,(0,g.jsx)(a,{of:p,sourceState:`none`}),`
`,(0,g.jsxs)(t.p,{children:[`Pair each background token with its `,(0,g.jsx)(t.code,{children:`…Foreground`}),` token for text on it, so the contrast holds in both schemes.`]}),`
`,(0,g.jsx)(t.h2,{id:`radius`,children:`Radius`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`radius`}),` is the default for fields and buttons. `,(0,g.jsx)(t.code,{children:`radiusSm`}),` is for small inner parts like list items and chips. `,(0,g.jsx)(t.code,{children:`radiusLg`}),` is for floating layers and containers like dropdown lists, cards and dialogs.`]}),`
`,(0,g.jsx)(a,{of:d,sourceState:`none`}),`
`,(0,g.jsx)(t.h2,{id:`shadows`,children:`Shadows`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`shadow`}),` is for slightly raised elements. `,(0,g.jsx)(t.code,{children:`shadowLg`}),` is for floating layers like dropdown lists, menus and dialogs.`]}),`
`,(0,g.jsx)(a,{of:c,sourceState:`none`}),`
`,(0,g.jsx)(t.h2,{id:`typography`,children:`Typography`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`fontSans`}),` is the interface font. `,(0,g.jsx)(t.code,{children:`fontMono`}),` is for codes, IDs and numbers that should line up. `,(0,g.jsx)(t.code,{children:`fontSize`}),` and `,(0,g.jsx)(t.code,{children:`lineHeight`}),` set the base text size.`]}),`
`,(0,g.jsx)(a,{of:u,sourceState:`none`}),`
`,(0,g.jsx)(t.h2,{id:`control-heights`,children:`Control heights`}),`
`,(0,g.jsxs)(t.p,{children:[`Buttons, inputs and selects of the same `,(0,g.jsx)(t.code,{children:`size`}),` share a height, so they line up in a row. These variables aren't part of the theme API. Override them in CSS if you need to.`]}),`
`,(0,g.jsx)(a,{of:l,sourceState:`none`})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),o(),f()})))()}_();export{h as default};