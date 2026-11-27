import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-TMb5GUqB.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./Checkbox.stories-BikXpkri.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h1,{id:`checkbox`,children:`Checkbox`}),`
`,(0,v.jsx)(t.p,{children:`A checkbox with its label beside it, for yes/no choices and for picking several items from a list.`}),`
`,(0,v.jsx)(o,{language:`tsx`,dark:!0,code:`import { Checkbox } from '@adhamaa/ui-kit'`}),`
`,(0,v.jsx)(c,{of:u}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`You need`}),(0,v.jsx)(t.th,{children:`Use`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`A choice that takes effect when the form is submitted`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`Checkbox`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`A setting that takes effect immediately`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`Switch`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`One of a few options`}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`RadioGroup`}),` or `,(0,v.jsx)(t.code,{children:`SegmentedControl`})]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`Several of many options`}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`MultiSelect`}),`, or several checkboxes`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`A filter toggle in a toolbar`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`Chip`})})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,v.jsx)(c,{of:f}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,v.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`onChange`}),` receives `,(0,v.jsx)(t.code,{children:`true`}),` or `,(0,v.jsx)(t.code,{children:`false`}),`. Use `,(0,v.jsx)(t.code,{children:`checked`}),` to control it, or `,(0,v.jsx)(t.code,{children:`defaultChecked`}),` to leave the state to the checkbox. Checkbox takes the field props (`,(0,v.jsx)(t.code,{children:`description`}),`, `,(0,v.jsx)(t.code,{children:`error`}),`, `,(0,v.jsx)(t.code,{children:`required`}),`, `,(0,v.jsx)(t.code,{children:`disabled`}),`…) like the other inputs.`]}),`
`,(0,v.jsx)(c,{of:u}),`
`,(0,v.jsx)(t.h3,{id:`select-all`,children:`Select all`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`indeterminate`}),` shows a dash: some of the items it stands for are checked. Clicking it calls `,(0,v.jsx)(t.code,{children:`onChange(true)`}),`.`]}),`
`,(0,v.jsx)(c,{of:m}),`
`,(0,v.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,v.jsx)(c,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { RHFCheckbox } from '@adhamaa/ui-kit/form'

<RHFCheckbox name="acceptTerms" label="I accept the terms" rules={{ required: 'Accept the terms to continue' }} />
`})}),`
`,(0,v.jsxs)(t.p,{children:[`The form value is a `,(0,v.jsx)(t.code,{children:`boolean`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(s,{of:h}),`
`,(0,v.jsxs)(t.p,{children:[`In a native form, a checked checkbox submits `,(0,v.jsx)(t.code,{children:`value`}),` (`,(0,v.jsx)(t.code,{children:`'on'`}),` by default) under `,(0,v.jsx)(t.code,{children:`name`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Selector`}),(0,v.jsx)(t.th,{children:`Part`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`.kit-field.kit-field--inline`})}),(0,v.jsx)(t.td,{children:`The wrapper, with the label beside the box`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`.kit-checkbox`})}),(0,v.jsx)(t.td,{children:`The box`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`.kit-checkbox__indicator`})}),(0,v.jsx)(t.td,{children:`The check mark`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`.kit-checkbox__dash`})}),(0,v.jsx)(t.td,{children:`The indeterminate dash`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`[data-checked]`}),`, `,(0,v.jsx)(t.code,{children:`[data-indeterminate]`})]}),(0,v.jsx)(t.td,{children:`State on the box (from ui-sdk)`})]})]})]}),`
`,(0,v.jsxs)(t.p,{children:[`A checked box uses the `,(0,v.jsx)(t.code,{children:`primary`}),` and `,(0,v.jsx)(t.code,{children:`primaryForeground`}),` tokens.`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.p,{children:[`Built on `,(0,v.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/checkbox`,rel:`nofollow`,children:`ui-sdk Checkbox`}),`, which follows the WAI-ARIA checkbox pattern. The label is linked to the box, so clicking the label toggles it. An indeterminate checkbox reports `,(0,v.jsx)(t.code,{children:`aria-checked="mixed"`}),`.`]}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Key`}),(0,v.jsx)(t.th,{children:`Does`})]})}),(0,v.jsx)(t.tbody,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`Space`}),(0,v.jsx)(t.td,{children:`Toggles the focused checkbox`})]})})]}),`
`,(0,v.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Do`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Phrase the label positively, so checked means yes: "Send me updates", not "Don't send me updates".`}),`
`,(0,v.jsx)(t.li,{children:`Stack several checkboxes vertically, one per line.`}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Don't`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`Don't use a checkbox for a setting that applies the moment it's clicked. Use `,(0,v.jsx)(t.code,{children:`Switch`}),`.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Switch`}),`, `,(0,v.jsx)(t.strong,{children:`RadioGroup`}),`, `,(0,v.jsx)(t.strong,{children:`Chip`}),`: other choice controls.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),l(),p()})))()}y();export{_ as default};