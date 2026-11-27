import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-Spk4s02i.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./NumberInput.stories-CdIs0gOj.js";function v(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a,{of:h}),`
`,(0,b.jsx)(t.h1,{id:`numberinput`,children:`NumberInput`}),`
`,(0,b.jsxs)(t.p,{children:[`A field for numbers. It parses what's typed, keeps the value between `,(0,b.jsx)(t.code,{children:`min`}),` and `,(0,b.jsx)(t.code,{children:`max`}),`, and formats it for display (`,(0,b.jsx)(t.code,{children:`1,250,000.00`}),`), while your value stays a plain `,(0,b.jsx)(t.code,{children:`number`}),`.`]}),`
`,(0,b.jsx)(o,{language:`tsx`,dark:!0,code:`import { NumberInput } from '@adhamaa/ui-kit'`}),`
`,(0,b.jsx)(c,{of:p}),`
`,(0,b.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(c,{of:u}),`
`,(0,b.jsx)(i,{of:u}),`
`,(0,b.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,b.jsx)(t.h3,{id:`money`,children:`Money`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`prefix`}),` and `,(0,b.jsx)(t.code,{children:`suffix`}),` show text beside the number. `,(0,b.jsx)(t.code,{children:`decimalScale`}),` sets the digits after the point, and `,(0,b.jsx)(t.code,{children:`fixedDecimalScale`}),` always shows them. Thousands are grouped unless you set `,(0,b.jsx)(t.code,{children:`thousandSeparator={false}`}),`.`]}),`
`,(0,b.jsx)(c,{of:p}),`
`,(0,b.jsx)(t.h3,{id:`percentages-and-steps`,children:`Percentages and steps`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`step`}),` is how far the arrow keys and step buttons move the value. `,(0,b.jsx)(t.code,{children:`withControls`}),` shows the step buttons.`]}),`
`,(0,b.jsx)(c,{of:f}),`
`,(0,b.jsx)(t.h3,{id:`other-units`,children:`Other units`}),`
`,(0,b.jsxs)(t.p,{children:[`For anything the shorthands don't cover, pass `,(0,b.jsx)(t.code,{children:`Intl.NumberFormat`}),` options to `,(0,b.jsx)(t.code,{children:`format`}),`. They override `,(0,b.jsx)(t.code,{children:`decimalScale`}),`, `,(0,b.jsx)(t.code,{children:`fixedDecimalScale`}),` and `,(0,b.jsx)(t.code,{children:`thousandSeparator`}),`. `,(0,b.jsx)(t.code,{children:`locale`}),` defaults to the page's language.`]}),`
`,(0,b.jsx)(c,{of:g}),`
`,(0,b.jsx)(t.h3,{id:`controlled`,children:`Controlled`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`onChange`}),` receives a `,(0,b.jsx)(t.code,{children:`number`}),`, or `,(0,b.jsx)(t.code,{children:`null`}),` when the field is empty, as the user types or steps. `,(0,b.jsx)(t.code,{children:`onValueCommit`}),` runs once an edit is finished: on Enter, blur or a step. Use it to save, so you don't save on every key press.`]}),`
`,(0,b.jsx)(c,{of:_}),`
`,(0,b.jsxs)(t.p,{children:[`The form submits the plain number (`,(0,b.jsx)(t.code,{children:`1250000`}),`), not the formatted text.`]}),`
`,(0,b.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,b.jsx)(c,{of:m}),`
`,(0,b.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { RHFNumberInput } from '@adhamaa/ui-kit/form'

<RHFNumberInput name="contractValue" label="Contract value" prefix="RM" decimalScale={2} rules={{ required: true, min: 0 }} />
`})}),`
`,(0,b.jsxs)(t.p,{children:[`The form value is a `,(0,b.jsx)(t.code,{children:`number`}),` or `,(0,b.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsx)(s,{of:h}),`
`,(0,b.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,b.jsxs)(t.p,{children:[`Uses the `,(0,b.jsx)(t.strong,{children:`TextInput`}),` classes, plus:`]}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`Selector`}),(0,b.jsx)(t.th,{children:`Part`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-input__affix`})}),(0,b.jsx)(t.td,{children:`The prefix or suffix`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-number__steppers`})}),(0,b.jsx)(t.td,{children:`The step buttons' column`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-number__step`})}),(0,b.jsx)(t.td,{children:`One step button`})]})]})]}),`
`,(0,b.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,b.jsxs)(t.p,{children:[`Built on `,(0,b.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/number-input`,rel:`nofollow`,children:`ui-sdk Number Input`}),`, which follows the keyboard model of the WAI-ARIA spinbutton pattern on a native text input, so normal text editing still works.`]}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`Key`}),(0,b.jsx)(t.th,{children:`Does`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`ArrowUp, ArrowDown`}),(0,b.jsxs)(t.td,{children:[`Steps by `,(0,b.jsx)(t.code,{children:`step`})]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`Shift + arrow, Page Up, Page Down`}),(0,b.jsx)(t.td,{children:`Steps by ten steps`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`Alt (Option) + arrow`}),(0,b.jsx)(t.td,{children:`Steps by a tenth of a step`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`Home, End`}),(0,b.jsxs)(t.td,{children:[`Goes to `,(0,b.jsx)(t.code,{children:`min`}),` or `,(0,b.jsx)(t.code,{children:`max`}),`, when set`]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`Enter`}),(0,b.jsx)(t.td,{children:`Commits the typed text`})]})]})]}),`
`,(0,b.jsx)(t.p,{children:`The step buttons stay out of the Tab order, because the arrow keys do the same thing.`}),`
`,(0,b.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,b.jsx)(t.p,{children:(0,b.jsx)(t.strong,{children:`Do`})}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsx)(t.li,{children:`Use it for values people calculate with: money, quantities, lengths, percentages.`}),`
`,(0,b.jsxs)(t.li,{children:[`Set `,(0,b.jsx)(t.code,{children:`min`}),` and `,(0,b.jsx)(t.code,{children:`max`}),` when the value has real limits.`]}),`
`,(0,b.jsxs)(t.li,{children:[`Show the unit with `,(0,b.jsx)(t.code,{children:`prefix`}),`, `,(0,b.jsx)(t.code,{children:`suffix`}),` or `,(0,b.jsx)(t.code,{children:`format`}),`, not only in the label.`]}),`
`]}),`
`,(0,b.jsx)(t.p,{children:(0,b.jsx)(t.strong,{children:`Don't`})}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[`Don't use it for numbers that are really codes: phone numbers, IC numbers, postcodes. Use `,(0,b.jsx)(t.code,{children:`TextInput`}),` with `,(0,b.jsx)(t.code,{children:`inputMode="numeric"`}),`.`]}),`
`,(0,b.jsxs)(t.li,{children:[`Don't add `,(0,b.jsx)(t.code,{children:`withControls`}),` for large values like money. Nobody steps to RM 1,250,000.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`TextInput`}),`: for numeric codes.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`DataTable`}),`: `,(0,b.jsx)(t.code,{children:`NumberCellEditor`}),` edits numbers inside a table.`]}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),r(),l(),d()})))()}x();export{y as default};