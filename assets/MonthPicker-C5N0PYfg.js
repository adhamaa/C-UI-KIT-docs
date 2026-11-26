import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-DdMgE_eQ.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./MonthPicker.stories-BTjRPceL.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:f}),`
`,(0,v.jsx)(t.h1,{id:`monthpicker`,children:`MonthPicker`}),`
`,(0,v.jsxs)(t.p,{children:[`A month field for reports, claims and anything billed by the month. It opens a year switcher and a grid of months. The value is a `,(0,v.jsx)(t.code,{children:`YYYY-MM`}),` string.`]}),`
`,(0,v.jsx)(o,{language:`tsx`,dark:!0,code:`import { MonthPicker, toMonthString } from '@adhamaa/ui-kit'`}),`
`,(0,v.jsx)(c,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,v.jsx)(i,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,v.jsx)(t.h3,{id:`controlled`,children:`Controlled`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`onChange`}),` receives `,(0,v.jsx)(t.code,{children:`YYYY-MM`}),`, or `,(0,v.jsx)(t.code,{children:`null`}),` when cleared. `,(0,v.jsx)(t.code,{children:`value`}),` also accepts a `,(0,v.jsx)(t.code,{children:`Date`}),`. `,(0,v.jsx)(t.code,{children:`toMonthString(value)`}),` converts a Date or ISO string for you.`]}),`
`,(0,v.jsx)(c,{of:h}),`
`,(0,v.jsx)(t.h3,{id:`range-and-format`,children:`Range and format`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`minMonth`}),` and `,(0,v.jsx)(t.code,{children:`maxMonth`}),` limit which months can be picked. `,(0,v.jsx)(t.code,{children:`monthFormat`}),` shows "March 2026" (`,(0,v.jsx)(t.code,{children:`long`}),`, default) or "Mar 2026" (`,(0,v.jsx)(t.code,{children:`short`}),`).`]}),`
`,(0,v.jsx)(c,{of:u}),`
`,(0,v.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,v.jsx)(c,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { RHFMonthPicker } from '@adhamaa/ui-kit/form'

<RHFMonthPicker name="reportMonth" label="Reporting month" rules={{ required: true }} />
`})}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(s,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,v.jsxs)(t.p,{children:[`| Selector | Part |
| --- | --- |
| `,(0,v.jsx)(t.code,{children:`.kit-month__trigger`}),` | The field, a button that opens the popup |
| `,(0,v.jsx)(t.code,{children:`.kit-month__value`}),` | The month shown in the field |
| `,(0,v.jsx)(t.code,{children:`.kit-month__popup`}),` | The popup |
| `,(0,v.jsx)(t.code,{children:`.kit-month__header`}),`, `,(0,v.jsx)(t.code,{children:`.kit-month__year`}),`, `,(0,v.jsx)(t.code,{children:`.kit-month__nav`}),` | The year switcher |
| `,(0,v.jsx)(t.code,{children:`.kit-month__grid`}),`, `,(0,v.jsx)(t.code,{children:`.kit-month__cell`}),` | The months |`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsx)(t.p,{children:`The kit builds this one on ui-sdk's popover. The field is a button named by its label that opens the popup, and focus moves to the chosen month (or the current one).`}),`
`,(0,v.jsx)(t.p,{children:`| Key | Does |
| --- | --- |
| Enter, Space | On the field, opens the popup. On a month, picks it |
| Arrow keys | Move between months |
| Page Up, Page Down | Previous or next year |
| Home, End | January or December |
| Escape | Closes the popup |`}),`
`,(0,v.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Do`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Use it whenever the day doesn't matter, rather than a DatePicker with the day ignored.`}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`DatePicker`}),`: a full date.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),l(),p()})))()}y();export{_ as default};