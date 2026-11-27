import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-C0i7n7Fz.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./Timeline.stories-B9Uirrdt.js";function v(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a,{of:g}),`
`,(0,b.jsx)(t.h1,{id:`timeline`,children:`Timeline`}),`
`,(0,b.jsx)(t.p,{children:`A vertical list of events: an activity log, an audit trail, or a workflow's stages. It comes plain, or as cards in SWIFTO's style, with stages alternating left and right.`}),`
`,(0,b.jsx)(o,{language:`tsx`,dark:!0,code:`import { Timeline, type TimelineEvent } from '@adhamaa/ui-kit'`}),`
`,(0,b.jsx)(c,{of:_}),`
`,(0,b.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(i,{of:_}),`
`,(0,b.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,b.jsx)(t.h3,{id:`events`,children:`Events`}),`
`,(0,b.jsxs)(t.p,{children:[`Each event needs an `,(0,b.jsx)(t.code,{children:`id`}),` and a `,(0,b.jsx)(t.code,{children:`title`}),`. Add any of:`]}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.code,{children:`actor`}),`: who did it, beside the title.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.code,{children:`dateTime`}),` (machine-readable, for the `,(0,b.jsx)(t.code,{children:`<time>`}),` element) and `,(0,b.jsx)(t.code,{children:`time`}),` (what's shown).`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.code,{children:`description`}),`, and `,(0,b.jsx)(t.code,{children:`metadata`}),` as label/value pairs.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.code,{children:`status`}),` to colour the marker: `,(0,b.jsx)(t.code,{children:`success`}),`, `,(0,b.jsx)(t.code,{children:`error`}),`, `,(0,b.jsx)(t.code,{children:`pending`}),`, `,(0,b.jsx)(t.code,{children:`info`}),`, `,(0,b.jsx)(t.code,{children:`warning`}),` or `,(0,b.jsx)(t.code,{children:`neutral`}),`.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.code,{children:`icon`}),` inside the marker.`]}),`
`,(0,b.jsxs)(t.li,{children:[`For workflows: `,(0,b.jsx)(t.code,{children:`department`}),` and `,(0,b.jsx)(t.code,{children:`stage`}),` (shown after the actor as "Aina, Planning & Verification"), `,(0,b.jsx)(t.code,{children:`reason`}),` (like a rejection reason) and `,(0,b.jsx)(t.code,{children:`sentFrom`}),` (`,(0,b.jsx)(t.code,{children:`{ name, department?, stage? }`}),`, shown as a "Sent from" block).`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.code,{children:`date`}),`, shown with `,(0,b.jsx)(t.code,{children:`time`}),`.`]}),`
`]}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`<Timeline
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
`,(0,b.jsx)(t.h3,{id:`stages`,children:`Stages`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`variant="status"`}),` is roomier, for a workflow's stages rather than a dense log.`]}),`
`,(0,b.jsx)(c,{of:m}),`
`,(0,b.jsx)(t.h3,{id:`cards-alternating-left-and-right`,children:`Cards, alternating left and right`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`appearance="card"`}),` puts each event in a bordered card coloured by its status. With `,(0,b.jsx)(t.code,{children:`variant="status"`}),` the markers grow and show a status icon (a tick, a cross, a clock…), and the time shows as a pill. `,(0,b.jsx)(t.code,{children:`alternating`}),` adds SWIFTO's zigzag: a centred line, with events alternating left and right and the time on the opposite side.`]}),`
`,(0,b.jsx)(c,{of:h}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`<Timeline
  variant="status"
  appearance="card"
  alternating
  aria-label="Work order history"
  events={history.map((h) => ({
    id: h.uuid,
    title: h.action,
    actor: h.user.name,
    department: h.user.department,
    stage: h.stage,
    reason: h.remarks,
    sentFrom: h.from ? { name: h.from.name, stage: h.from.stage } : undefined,
    dateTime: h.created_at,
    time: formatDateTime(h.created_at),
    status: h.action === 'Rejected' ? 'error' : 'success',
  }))}
/>
`})}),`
`,(0,b.jsxs)(t.p,{children:[`The colours come from the theme. A finished stage (`,(0,b.jsx)(t.code,{children:`success`}),`) and the time pill use `,(0,b.jsx)(t.code,{children:`primary`}),`, so with `,(0,b.jsx)(t.code,{children:`swiftoTheme`}),` they're SWIFTO's gold, and with the neutral theme they're blue. Errors use `,(0,b.jsx)(t.code,{children:`destructive`}),` and pending stages use `,(0,b.jsx)(t.code,{children:`warning`}),`. It works in dark mode like everything else.`]}),`
`,(0,b.jsxs)(t.p,{children:[`When the timeline is narrower than 40rem, the zigzag falls back to one column, so it still fits a side panel or a phone. You can also leave `,(0,b.jsx)(t.code,{children:`alternating`}),` off:`]}),`
`,(0,b.jsx)(c,{of:u}),`
`,(0,b.jsx)(t.h3,{id:`activity-cards`,children:`Activity cards`}),`
`,(0,b.jsxs)(t.p,{children:[`With `,(0,b.jsx)(t.code,{children:`variant="activity"`}),`, cards get a dot with a soft ring, a dashed line, and a row with the `,(0,b.jsx)(t.code,{children:`date`}),` and `,(0,b.jsx)(t.code,{children:`time`}),` beside calendar and clock icons.`]}),`
`,(0,b.jsx)(c,{of:p}),`
`,(0,b.jsx)(t.h3,{id:`empty`,children:`Empty`}),`
`,(0,b.jsx)(c,{of:f}),`
`,(0,b.jsx)(t.h3,{id:`custom-rendering`,children:`Custom rendering`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`renderIcon(event)`}),` replaces an event's marker content, and `,(0,b.jsx)(t.code,{children:`renderContent(event)`}),` replaces its body (with cards, the title and card too). Your event type can carry extra fields: `,(0,b.jsx)(t.code,{children:`Timeline`}),` is generic over it.`]}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`sentFromLabel`}),` translates the "Sent from" label.`]}),`
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsx)(s,{of:g}),`
`,(0,b.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`Selector`}),(0,b.jsx)(t.th,{children:`Part`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-timeline`})}),(0,b.jsxs)(t.td,{children:[`The list (`,(0,b.jsx)(t.code,{children:`[data-variant]`}),`, `,(0,b.jsx)(t.code,{children:`[data-appearance]`}),`, `,(0,b.jsx)(t.code,{children:`[data-alternating]`}),`)`]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-timeline__item`})}),(0,b.jsx)(t.td,{children:`One event`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-timeline__marker`})}),(0,b.jsxs)(t.td,{children:[`The dot (`,(0,b.jsx)(t.code,{children:`[data-status]`}),`)`]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-timeline__connector`})}),(0,b.jsx)(t.td,{children:`The line between markers`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsxs)(t.td,{children:[(0,b.jsx)(t.code,{children:`.kit-timeline__title`}),`, `,(0,b.jsx)(t.code,{children:`.kit-timeline__actor`}),`, `,(0,b.jsx)(t.code,{children:`.kit-timeline__time`})]}),(0,b.jsx)(t.td,{children:`The heading`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-timeline__description`})}),(0,b.jsx)(t.td,{children:`The description`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsxs)(t.td,{children:[(0,b.jsx)(t.code,{children:`.kit-timeline__meta`}),`, `,(0,b.jsx)(t.code,{children:`.kit-timeline__meta-row`})]}),(0,b.jsx)(t.td,{children:`The metadata`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-timeline__reason`})}),(0,b.jsx)(t.td,{children:`The reason`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsxs)(t.td,{children:[(0,b.jsx)(t.code,{children:`.kit-timeline__sent-from`}),`, `,(0,b.jsx)(t.code,{children:`.kit-timeline__sent-from-label`})]}),(0,b.jsx)(t.td,{children:`The "Sent from" block`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-timeline__card`})}),(0,b.jsxs)(t.td,{children:[`A card (`,(0,b.jsx)(t.code,{children:`[data-status]`}),`), with `,(0,b.jsx)(t.code,{children:`appearance="card"`})]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-timeline__people`})}),(0,b.jsx)(t.td,{children:`The actor line in a card`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsxs)(t.td,{children:[(0,b.jsx)(t.code,{children:`.kit-timeline__stamp`}),`, `,(0,b.jsx)(t.code,{children:`.kit-timeline__pill`})]}),(0,b.jsxs)(t.td,{children:[`The time pill, with cards and `,(0,b.jsx)(t.code,{children:`variant="status"`})]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsxs)(t.td,{children:[(0,b.jsx)(t.code,{children:`.kit-timeline__when`}),`, `,(0,b.jsx)(t.code,{children:`.kit-timeline__when-part`})]}),(0,b.jsxs)(t.td,{children:[`The date and time row, with cards and `,(0,b.jsx)(t.code,{children:`variant="activity"`})]})]})]})]}),`
`,(0,b.jsxs)(t.p,{children:[`The marker size is the CSS variable `,(0,b.jsx)(t.code,{children:`--kit-tl-size`}),` on `,(0,b.jsx)(t.code,{children:`.kit-timeline`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,b.jsxs)(t.p,{children:[`Built on `,(0,b.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/timeline`,rel:`nofollow`,children:`ui-sdk Timeline`}),`. It's a list named by `,(0,b.jsx)(t.code,{children:`aria-label`}),` ("Timeline" by default), and the arrow keys move between events. Times use `,(0,b.jsx)(t.code,{children:`<time dateTime>`}),`, so assistive technology gets an exact value. Status colours are decorative: say the status in the title too.`]}),`
`,(0,b.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,b.jsx)(t.p,{children:(0,b.jsx)(t.strong,{children:`Do`})}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsx)(t.li,{children:`Put the newest event first in an activity log, and the first stage first in a workflow.`}),`
`,(0,b.jsxs)(t.li,{children:[`Name the timeline with `,(0,b.jsx)(t.code,{children:`aria-label`}),` when there's more than one on a page.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Badge`}),`: a single status.`]}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),r(),l(),d()})))()}x();export{y as default};