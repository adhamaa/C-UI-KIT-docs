import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-D8m9WcGw.js";import{a as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./DatePicker.stories-Dp0L7WmU.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(t.h1,{id:`datepicker`,children:`DatePicker`}),`
`,(0,y.jsxs)(t.p,{children:[`A date field: type the date, or pick it from a calendar. The value is always an ISO `,(0,y.jsx)(t.code,{children:`YYYY-MM-DD`}),` string, whatever the field shows.`]}),`
`,(0,y.jsx)(o,{language:`tsx`,dark:!0,code:`import { DatePicker, toDateString } from '@adhamaa/ui-kit'`}),`
`,(0,y.jsx)(c,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,y.jsx)(t.h3,{id:`values`,children:`Values`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`onChange`}),` receives `,(0,y.jsx)(t.code,{children:`YYYY-MM-DD`}),`, or `,(0,y.jsx)(t.code,{children:`null`}),` when cleared. `,(0,y.jsx)(t.code,{children:`value`}),` and `,(0,y.jsx)(t.code,{children:`defaultValue`}),` also accept a `,(0,y.jsx)(t.code,{children:`Date`}),`, or any string `,(0,y.jsx)(t.code,{children:`Date`}),` can read, like the HTTP date format some APIs send. They are converted to the local calendar date.`]}),`
`,(0,y.jsx)(c,{of:g}),`
`,(0,y.jsxs)(t.p,{children:[`To convert a value yourself, use `,(0,y.jsx)(t.code,{children:`toDateString(value)`}),`.`]}),`
`,(0,y.jsx)(t.h3,{id:`min-and-max`,children:`Min and max`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`minDate`}),` and `,(0,y.jsx)(t.code,{children:`maxDate`}),` limit which dates can be picked. Dates outside the range are disabled in the calendar.`]}),`
`,(0,y.jsx)(c,{of:m}),`
`,(0,y.jsx)(t.h3,{id:`written-out`,children:`Written out`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`displayFormat`}),` takes `,(0,y.jsx)(t.code,{children:`Intl.DateTimeFormat`}),` options and shows the date written out, like "17 November 2026". The field then can't be typed in: pressing it opens the calendar. `,(0,y.jsx)(t.code,{children:`locale`}),` sets the language and defaults to the page's.`]}),`
`,(0,y.jsx)(c,{of:p}),`
`,(0,y.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,y.jsx)(c,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`import { RHFDatePicker } from '@adhamaa/ui-kit/form'

<RHFDatePicker name="startDate" label="Start date" minDate="2026-01-01" rules={{ required: true }} />
`})}),`
`,(0,y.jsxs)(t.p,{children:[`The form value is a `,(0,y.jsx)(t.code,{children:`YYYY-MM-DD`}),` string or `,(0,y.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(s,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Selector`}),(0,y.jsx)(t.th,{children:`Part`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-input.kit-date`})}),(0,y.jsx)(t.td,{children:`The field box`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-date__input`})}),(0,y.jsx)(t.td,{children:`The typed input`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-date__display`})}),(0,y.jsxs)(t.td,{children:[`The written-out date (with `,(0,y.jsx)(t.code,{children:`displayFormat`}),`)`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-date__trigger`})}),(0,y.jsx)(t.td,{children:`The calendar button`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-popover.kit-calendar`})}),(0,y.jsx)(t.td,{children:`The calendar popup`})]})]})]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.p,{children:[`Built on `,(0,y.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/date-picker`,rel:`nofollow`,children:`ui-sdk Date Picker`}),`, which follows the WAI-ARIA date picker dialog pattern: a plain text input, a button that opens a dialog, and a grid of days inside it. Focus moves into the grid when it opens and back to the button when a date is picked.`]}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Key`}),(0,y.jsx)(t.th,{children:`Where`}),(0,y.jsx)(t.th,{children:`Does`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Enter`}),(0,y.jsx)(t.td,{children:`Input`}),(0,y.jsx)(t.td,{children:`Commits the typed date`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Alt + ArrowDown`}),(0,y.jsx)(t.td,{children:`Input`}),(0,y.jsx)(t.td,{children:`Opens the calendar`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Enter, Space`}),(0,y.jsx)(t.td,{children:`Calendar button`}),(0,y.jsx)(t.td,{children:`Opens or closes the calendar`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Arrow keys`}),(0,y.jsx)(t.td,{children:`Calendar`}),(0,y.jsx)(t.td,{children:`Move between days`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Page Up, Page Down`}),(0,y.jsx)(t.td,{children:`Calendar`}),(0,y.jsx)(t.td,{children:`Previous or next month`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Escape`}),(0,y.jsx)(t.td,{children:`Calendar`}),(0,y.jsx)(t.td,{children:`Closes it`})]})]})]}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`triggerLabel`}),` sets the calendar button's name ("Choose date" by default). Translate it for other languages.`]}),`
`,(0,y.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Do`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Set `,(0,y.jsx)(t.code,{children:`minDate`}),` and `,(0,y.jsx)(t.code,{children:`maxDate`}),` when only some dates make sense.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Use `,(0,y.jsx)(t.code,{children:`displayFormat`}),` when the date is usually picked, not typed, and reading it matters, like on a summary form.`]}),`
`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Don't`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Don't format the value yourself before saving. Send the ISO string to the API.`}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`MonthPicker`}),`: when only the month matters.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`TimeInput`}),`: a time of day.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),l(),h()})))()}b();export{v as default};