import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-C0i7n7Fz.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./Switch.stories-CyPb1P2z.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:u}),`
`,(0,v.jsx)(t.h1,{id:`switch`,children:`Switch`}),`
`,(0,v.jsx)(t.p,{children:`An on/off switch for settings that take effect straight away, like turning notifications on.`}),`
`,(0,v.jsx)(o,{language:`tsx`,dark:!0,code:`import { Switch } from '@adhamaa/ui-kit'`}),`
`,(0,v.jsx)(c,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,v.jsx)(c,{of:f}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,v.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`onChange`}),` receives `,(0,v.jsx)(t.code,{children:`true`}),` or `,(0,v.jsx)(t.code,{children:`false`}),`. Use `,(0,v.jsx)(t.code,{children:`checked`}),` or `,(0,v.jsx)(t.code,{children:`defaultChecked`}),`, as with Checkbox.`]}),`
`,(0,v.jsx)(c,{of:d}),`
`,(0,v.jsx)(t.h3,{id:`label-on-top`,children:`Label on top`}),`
`,(0,v.jsxs)(t.p,{children:[`By default the label sits beside the switch. `,(0,v.jsx)(t.code,{children:`labelPosition="top"`}),` puts it above, like a text field's label, so a switch lines up with the other fields in a form grid.`]}),`
`,(0,v.jsx)(c,{of:h}),`
`,(0,v.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,v.jsx)(c,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { RHFSwitch } from '@adhamaa/ui-kit/form'

<RHFSwitch name="active" label="Active" />
`})}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(s,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Selector`}),(0,v.jsx)(t.th,{children:`Part`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`.kit-switch`})}),(0,v.jsx)(t.td,{children:`The track`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`.kit-switch__thumb`})}),(0,v.jsx)(t.td,{children:`The moving knob`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`[data-checked]`})}),(0,v.jsx)(t.td,{children:`Present while on (from ui-sdk)`})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.p,{children:[`Built on `,(0,v.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/switch`,rel:`nofollow`,children:`ui-sdk Switch`}),`, which follows the WAI-ARIA switch pattern: the control has the `,(0,v.jsx)(t.code,{children:`switch`}),` role and reports `,(0,v.jsx)(t.code,{children:`aria-checked`}),`. The label names it, and clicking the label toggles it.`]}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Key`}),(0,v.jsx)(t.th,{children:`Does`})]})}),(0,v.jsx)(t.tbody,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`Space, Enter`}),(0,v.jsx)(t.td,{children:`Toggles the switch`})]})})]}),`
`,(0,v.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Do`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Use a switch when the change applies immediately, without a Save button.`}),`
`,(0,v.jsx)(t.li,{children:`Label the setting, not the state: "Email notifications", not "On".`}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Don't`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`Don't use a switch inside a form that needs submitting. Use `,(0,v.jsx)(t.code,{children:`Checkbox`}),`.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Checkbox`}),`: for choices that apply on submit.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),l(),p()})))()}y();export{_ as default};