import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-SWAFQvtI.js";import{a as u,i as d,n as f,r as p,t as m}from"./Timeline.stories-kWCSS9ea.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:d}),`
`,(0,_.jsx)(t.h1,{id:`timeline`,children:`Timeline`}),`
`,(0,_.jsx)(t.p,{children:`A vertical list of events: an activity log, an audit trail, or a workflow's stages.`}),`
`,(0,_.jsx)(o,{language:`tsx`,dark:!0,code:`import { Timeline, type TimelineEvent } from '@adhamaa/ui-kit'`}),`
`,(0,_.jsx)(c,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(i,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`events`,children:`Events`}),`
`,(0,_.jsxs)(t.p,{children:[`Each event needs an `,(0,_.jsx)(t.code,{children:`id`}),` and a `,(0,_.jsx)(t.code,{children:`title`}),`. Add any of:`]}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`actor`}),`: who did it, beside the title.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`dateTime`}),` (machine-readable, for the `,(0,_.jsx)(t.code,{children:`<time>`}),` element) and `,(0,_.jsx)(t.code,{children:`time`}),` (what's shown).`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`description`}),`, and `,(0,_.jsx)(t.code,{children:`metadata`}),` as label/value pairs.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`status`}),` to colour the marker: `,(0,_.jsx)(t.code,{children:`success`}),`, `,(0,_.jsx)(t.code,{children:`error`}),`, `,(0,_.jsx)(t.code,{children:`pending`}),`, `,(0,_.jsx)(t.code,{children:`info`}),`, `,(0,_.jsx)(t.code,{children:`warning`}),` or `,(0,_.jsx)(t.code,{children:`neutral`}),`.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`icon`}),` inside the marker.`]}),`
`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`<Timeline
  aria-label="Package history"
  events={history.map((h) => ({
    id: h.id,
    title: h.action,
    actor: h.user.name,
    dateTime: h.createdAt,
    time: formatDateTime(h.createdAt),
    status: h.action === 'Rejected' ? 'error' : 'success',
  }))}
/>
`})}),`
`,(0,_.jsx)(t.h3,{id:`stages`,children:`Stages`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`variant="status"`}),` is roomier, for a workflow's stages rather than a dense log.`]}),`
`,(0,_.jsx)(c,{of:p}),`
`,(0,_.jsx)(t.h3,{id:`empty`,children:`Empty`}),`
`,(0,_.jsx)(c,{of:f}),`
`,(0,_.jsx)(t.h3,{id:`custom-rendering`,children:`Custom rendering`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`renderIcon(event)`}),` replaces an event's marker content, and `,(0,_.jsx)(t.code,{children:`renderContent(event)`}),` replaces its body. Your event type can carry extra fields: `,(0,_.jsx)(t.code,{children:`Timeline`}),` is generic over it.`]}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(s,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,_.jsxs)(t.p,{children:[`| Selector | Part |
| --- | --- |
| `,(0,_.jsx)(t.code,{children:`.kit-timeline`}),` | The list (`,(0,_.jsx)(t.code,{children:`[data-variant]`}),`) |
| `,(0,_.jsx)(t.code,{children:`.kit-timeline__item`}),` | One event |
| `,(0,_.jsx)(t.code,{children:`.kit-timeline__marker`}),` | The dot (`,(0,_.jsx)(t.code,{children:`[data-status]`}),`) |
| `,(0,_.jsx)(t.code,{children:`.kit-timeline__connector`}),` | The line between markers |
| `,(0,_.jsx)(t.code,{children:`.kit-timeline__title`}),`, `,(0,_.jsx)(t.code,{children:`.kit-timeline__actor`}),`, `,(0,_.jsx)(t.code,{children:`.kit-timeline__time`}),` | The heading |
| `,(0,_.jsx)(t.code,{children:`.kit-timeline__description`}),` | The description |
| `,(0,_.jsx)(t.code,{children:`.kit-timeline__meta`}),`, `,(0,_.jsx)(t.code,{children:`.kit-timeline__meta-row`}),` | The metadata |`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`Built on `,(0,_.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/timeline`,rel:`nofollow`,children:`ui-sdk Timeline`}),`. It's a list named by `,(0,_.jsx)(t.code,{children:`aria-label`}),` ("Timeline" by default), and the arrow keys move between events. Times use `,(0,_.jsx)(t.code,{children:`<time dateTime>`}),`, so assistive technology gets an exact value. Status colours are decorative: say the status in the title too.`]}),`
`,(0,_.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Do`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Put the newest event first in an activity log, and the first stage first in a workflow.`}),`
`,(0,_.jsxs)(t.li,{children:[`Name the timeline with `,(0,_.jsx)(t.code,{children:`aria-label`}),` when there's more than one on a page.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Badge`}),`: a single status.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),l(),u()})))()}v();export{g as default};