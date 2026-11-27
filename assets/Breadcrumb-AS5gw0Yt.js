import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-7uT58uVX.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./Breadcrumb.stories-4bn9Rn9C.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h1,{id:`breadcrumb`,children:`Breadcrumb`}),`
`,(0,v.jsx)(t.p,{children:`Shows where the current page sits in the app, with links back up the trail.`}),`
`,(0,v.jsx)(o,{language:`tsx`,dark:!0,code:`import { Breadcrumb } from '@adhamaa/ui-kit'`}),`
`,(0,v.jsx)(c,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,v.jsx)(t.h3,{id:`items`,children:`Items`}),`
`,(0,v.jsxs)(t.p,{children:[`Each item is `,(0,v.jsx)(t.code,{children:`{ label, href }`}),`, with an optional `,(0,v.jsx)(t.code,{children:`icon`}),`. The last item is the current page and doesn't link.`]}),`
`,(0,v.jsx)(t.h3,{id:`your-routers-links`,children:`Your router's links`}),`
`,(0,v.jsxs)(t.p,{children:[`By default items render as `,(0,v.jsx)(t.code,{children:`<a>`}),`. Pass your router's link as `,(0,v.jsx)(t.code,{children:`linkComponent`}),` so navigation stays client-side. It receives `,(0,v.jsx)(t.code,{children:`href`}),`, `,(0,v.jsx)(t.code,{children:`className`}),` and `,(0,v.jsx)(t.code,{children:`children`}),`.`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import Link from 'next/link'

<Breadcrumb
  linkComponent={Link}
  items={[{ label: 'Packages', href: '/packages' }, { label: 'PKG-004' }]}
/>
`})}),`
`,(0,v.jsx)(c,{of:u}),`
`,(0,v.jsx)(t.h3,{id:`long-trails`,children:`Long trails`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`maxItems`}),` collapses the middle items into an ellipsis when there are more than that many.`]}),`
`,(0,v.jsx)(c,{of:f}),`
`,(0,v.jsx)(t.h3,{id:`separator`,children:`Separator`}),`
`,(0,v.jsx)(c,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(s,{of:h}),`
`,(0,v.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,v.jsxs)(t.p,{children:[`| Selector | Part |
| --- | --- |
| `,(0,v.jsx)(t.code,{children:`.kit-breadcrumb`}),` | The `,(0,v.jsx)(t.code,{children:`<nav>`}),` |
| `,(0,v.jsx)(t.code,{children:`.kit-breadcrumb__list`}),`, `,(0,v.jsx)(t.code,{children:`.kit-breadcrumb__item`}),` | The list and one item |
| `,(0,v.jsx)(t.code,{children:`.kit-breadcrumb__link`}),` | A link |
| `,(0,v.jsx)(t.code,{children:`.kit-breadcrumb__current`}),` | The current page |
| `,(0,v.jsx)(t.code,{children:`.kit-breadcrumb__separator`}),` | A separator |
| `,(0,v.jsx)(t.code,{children:`.kit-breadcrumb__gap`}),` | The collapsed ellipsis |`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.p,{children:[`It's a `,(0,v.jsx)(t.code,{children:`<nav>`}),` named "Breadcrumb" (change it with `,(0,v.jsx)(t.code,{children:`aria-label`}),`), holding an ordered list. The current page has `,(0,v.jsx)(t.code,{children:`aria-current="page"`}),`. Separators and the ellipsis are hidden from screen readers.`]}),`
`,(0,v.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Do`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Put it at the top of detail pages, above the page title.`}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Don't`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Don't use it as the main navigation. It's a secondary aid.`}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Tabs`}),`: navigation within one page.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),l(),p()})))()}y();export{_ as default};