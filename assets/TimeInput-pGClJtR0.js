import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-DItH5EBd.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./TimeInput.stories-BmEq1kjr.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:d}),`
`,(0,v.jsx)(t.h1,{id:`timeinput`,children:`TimeInput`}),`
`,(0,v.jsxs)(t.p,{children:[`A time-of-day field, typed segment by segment: hours, minutes and, on a 12-hour clock, AM or PM. The value is always 24-hour `,(0,v.jsx)(t.code,{children:`HH:mm`}),`.`]}),`
`,(0,v.jsx)(o,{language:`tsx`,dark:!0,code:`import { TimeInput } from '@adhamaa/ui-kit'`}),`
`,(0,v.jsx)(c,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,v.jsx)(i,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,v.jsx)(t.h3,{id:`clocks`,children:`Clocks`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`hourCycle`}),` shows a 12 or 24-hour clock, and defaults to the locale's. `,(0,v.jsx)(t.code,{children:`withSeconds`}),` adds a seconds segment.`]}),`
`,(0,v.jsx)(c,{of:h}),`
`,(0,v.jsx)(t.h3,{id:`controlled`,children:`Controlled`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`onChange`}),` receives `,(0,v.jsx)(t.code,{children:`HH:mm`}),` (or `,(0,v.jsx)(t.code,{children:`HH:mm:ss`}),` with seconds), or `,(0,v.jsx)(t.code,{children:`null`}),` while the time is incomplete or empty. That's true even when a 12-hour clock is shown.`]}),`
`,(0,v.jsx)(c,{of:f}),`
`,(0,v.jsx)(t.h3,{id:`min-and-max`,children:`Min and max`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`min`}),` and `,(0,v.jsx)(t.code,{children:`max`}),` take `,(0,v.jsx)(t.code,{children:`HH:mm`}),`. A time outside the range is marked invalid.`]}),`
`,(0,v.jsx)(c,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { RHFTimeInput } from '@adhamaa/ui-kit/form'

<RHFTimeInput name="inspectionTime" label="Inspection time" rules={{ required: true }} />
`})}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(s,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,v.jsxs)(t.p,{children:[`The box uses the `,(0,v.jsx)(t.strong,{children:`TextInput`}),` classes. The segments are inside `,(0,v.jsx)(t.code,{children:`.kit-time__input`}),`, and each has `,(0,v.jsx)(t.code,{children:`[data-type]`}),` (`,(0,v.jsx)(t.code,{children:`hour`}),`, `,(0,v.jsx)(t.code,{children:`minute`}),`, `,(0,v.jsx)(t.code,{children:`second`}),`, `,(0,v.jsx)(t.code,{children:`dayPeriod`}),`) from ui-sdk.`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.p,{children:[`Built on `,(0,v.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/time-input`,rel:`nofollow`,children:`ui-sdk Time Input`}),`. The field is a group named by its label, and each segment is a spinbutton named by its unit.`]}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Key`}),(0,v.jsx)(t.th,{children:`Does`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`Digits`}),(0,v.jsx)(t.td,{children:`Fill the segment and move to the next`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`ArrowUp, ArrowDown`}),(0,v.jsx)(t.td,{children:`Step the segment, wrapping around`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`Page Up, Page Down`}),(0,v.jsx)(t.td,{children:`Bigger steps`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`ArrowLeft, ArrowRight`}),(0,v.jsx)(t.td,{children:`Move between segments`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`Backspace`}),(0,v.jsx)(t.td,{children:`Empties the segment, then moves back`})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Do`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Store and send the 24-hour value. Let the field show the user's clock.`}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Don't`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`Don't use it for durations ("2 hours 30 minutes"). Use `,(0,v.jsx)(t.code,{children:`NumberInput`}),`.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`DatePicker`}),`: a date.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),l(),p()})))()}y();export{_ as default};