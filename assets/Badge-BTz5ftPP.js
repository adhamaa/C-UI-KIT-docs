import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-7uT58uVX.js";import{a as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./Badge.stories-DgYBWE6H.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`badge`,children:`Badge`}),`
`,(0,y.jsx)(t.p,{children:`A short label for a status, a category or a count.`}),`
`,(0,y.jsx)(o,{language:`tsx`,dark:!0,code:`import { Badge } from '@adhamaa/ui-kit'`}),`
`,(0,y.jsx)(c,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,y.jsx)(c,{of:m}),`
`,(0,y.jsx)(i,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,y.jsx)(t.h3,{id:`colours-and-variants`,children:`Colours and variants`}),`
`,(0,y.jsxs)(t.p,{children:[`Six colours (`,(0,y.jsx)(t.code,{children:`neutral`}),`, `,(0,y.jsx)(t.code,{children:`primary`}),`, `,(0,y.jsx)(t.code,{children:`success`}),`, `,(0,y.jsx)(t.code,{children:`warning`}),`, `,(0,y.jsx)(t.code,{children:`danger`}),`, `,(0,y.jsx)(t.code,{children:`info`}),`) in four variants: `,(0,y.jsx)(t.code,{children:`light`}),` (tinted, default), `,(0,y.jsx)(t.code,{children:`filled`}),`, `,(0,y.jsx)(t.code,{children:`outline`}),` and `,(0,y.jsx)(t.code,{children:`dot`}),` (a coloured dot beside plain text).`]}),`
`,(0,y.jsx)(c,{of:f}),`
`,(0,y.jsx)(t.h3,{id:`statuses`,children:`Statuses`}),`
`,(0,y.jsx)(t.p,{children:`Map each status to a colour once and reuse the map, so a status looks the same on every page.`}),`
`,(0,y.jsx)(c,{of:u}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`const statusColor = { draft: 'neutral', review: 'info', approved: 'success', rejected: 'danger' } as const

<Badge color={statusColor[pkg.status]} variant="dot">{statusLabel[pkg.status]}</Badge>
`})}),`
`,(0,y.jsx)(t.h3,{id:`sizes-icons-and-counts`,children:`Sizes, icons and counts`}),`
`,(0,y.jsx)(c,{of:d}),`
`,(0,y.jsx)(c,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(s,{of:g}),`
`,(0,y.jsxs)(t.p,{children:[`Other `,(0,y.jsx)(t.code,{children:`<span>`}),` attributes pass through.`]}),`
`,(0,y.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,y.jsxs)(t.p,{children:[`| Selector | Part |
| --- | --- |
| `,(0,y.jsx)(t.code,{children:`.kit-badge`}),` | The badge (`,(0,y.jsx)(t.code,{children:`[data-color]`}),`, `,(0,y.jsx)(t.code,{children:`[data-variant]`}),`, `,(0,y.jsx)(t.code,{children:`[data-size]`}),`) |
| `,(0,y.jsx)(t.code,{children:`.kit-badge__dot`}),` | The dot (`,(0,y.jsx)(t.code,{children:`variant="dot"`}),`) |
| `,(0,y.jsx)(t.code,{children:`.kit-badge__section`}),` | The left section |`]}),`
`,(0,y.jsxs)(t.p,{children:[`Colours come from the `,(0,y.jsx)(t.code,{children:`success`}),`, `,(0,y.jsx)(t.code,{children:`warning`}),`, `,(0,y.jsx)(t.code,{children:`info`}),`, `,(0,y.jsx)(t.code,{children:`destructive`}),` and `,(0,y.jsx)(t.code,{children:`primary`}),` tokens.`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.p,{children:[`A badge is plain text. Don't rely on its colour alone to carry meaning: the text must say the status. For a count, add context for screen readers, like `,(0,y.jsx)(t.code,{children:`aria-label="12 unread"`}),`.`]}),`
`,(0,y.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Do`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Keep it to one or two words.`}),`
`,(0,y.jsx)(t.li,{children:`Use the same colour for the same meaning across the app.`}),`
`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Don't`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Don't make badges clickable. Use `,(0,y.jsx)(t.code,{children:`Chip`}),` or `,(0,y.jsx)(t.code,{children:`Button`}),`.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Chip`}),`: a label that toggles.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),l(),h()})))()}b();export{v as default};