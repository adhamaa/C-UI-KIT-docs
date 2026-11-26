import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-SWAFQvtI.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./Chip.stories-DBjA_F7-.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h1,{id:`chip`,children:`Chip`}),`
`,(0,v.jsx)(t.p,{children:`A pill that toggles on and off, for filters and tags. A checked chip shows a check mark.`}),`
`,(0,v.jsx)(o,{language:`tsx`,dark:!0,code:`import { Chip } from '@adhamaa/ui-kit'`}),`
`,(0,v.jsx)(c,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,v.jsx)(c,{of:m}),`
`,(0,v.jsx)(i,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,v.jsx)(t.h3,{id:`filters`,children:`Filters`}),`
`,(0,v.jsxs)(t.p,{children:[`Chips have no group of their own: keep the checked values in state and render one chip per option. Wrap them in a `,(0,v.jsx)(t.code,{children:`<fieldset>`}),` with an `,(0,v.jsx)(t.code,{children:`aria-label`}),` (or a `,(0,v.jsx)(t.code,{children:`<legend>`}),`) so screen readers know they belong together.`]}),`
`,(0,v.jsx)(c,{of:f}),`
`,(0,v.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`withoutIcon`}),` hides the check mark.`]}),`
`,(0,v.jsx)(c,{of:u}),`
`,(0,v.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,v.jsx)(c,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`RHFChip`}),` binds one chip to a boolean field:`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { RHFChip } from '@adhamaa/ui-kit/form'

<RHFChip name="urgent">Urgent</RHFChip>
`})}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(s,{of:h}),`
`,(0,v.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,v.jsxs)(t.p,{children:[`| Selector | Part |
| --- | --- |
| `,(0,v.jsx)(t.code,{children:`.kit-chip`}),` | The pill |
| `,(0,v.jsx)(t.code,{children:`.kit-chip__icon`}),` | The check mark |
| `,(0,v.jsx)(t.code,{children:`[data-pressed]`}),` | Present while checked (from ui-sdk) |`]}),`
`,(0,v.jsxs)(t.p,{children:[`A checked chip uses the `,(0,v.jsx)(t.code,{children:`primarySoft`}),` tokens.`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.p,{children:[`Built on `,(0,v.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/toggle`,rel:`nofollow`,children:`ui-sdk Toggle`}),`. Each chip is a toggle button with `,(0,v.jsx)(t.code,{children:`aria-pressed`}),`.`]}),`
`,(0,v.jsx)(t.p,{children:`| Key | Does |
| --- | --- |
| Space, Enter | Toggles the focused chip |`}),`
`,(0,v.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Do`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Keep chip labels to one or two words.`}),`
`,(0,v.jsx)(t.li,{children:`Show the result of the filter straight away.`}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Don't`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`Don't use chips for actions. Use `,(0,v.jsx)(t.code,{children:`Button`}),`.`]}),`
`,(0,v.jsx)(t.li,{children:`Don't use chips inside forms in place of checkboxes.`}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Checkbox`}),`: for choices inside a form.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Badge`}),`: a label that can't be toggled.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),l(),p()})))()}y();export{_ as default};