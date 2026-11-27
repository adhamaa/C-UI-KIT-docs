import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-B-yuF967.js";import{a as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./RadioGroup.stories-FVbCDW8b.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{of:u}),`
`,(0,y.jsx)(t.h1,{id:`radiogroup`,children:`RadioGroup`}),`
`,(0,y.jsxs)(t.p,{children:[`Picks one of a few options, all visible at once. Pass the options as `,(0,y.jsx)(t.code,{children:`data`}),` and the group renders the radios.`]}),`
`,(0,y.jsx)(o,{language:`tsx`,dark:!0,code:`import { RadioGroup } from '@adhamaa/ui-kit'`}),`
`,(0,y.jsx)(c,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,y.jsx)(c,{of:d}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,y.jsx)(t.h3,{id:`layout`,children:`Layout`}),`
`,(0,y.jsxs)(t.p,{children:[`Radios stack vertically by default. `,(0,y.jsx)(t.code,{children:`orientation="horizontal"`}),` puts them in a row, for two to four short options.`]}),`
`,(0,y.jsx)(c,{of:f}),`
`,(0,y.jsx)(t.h3,{id:`options`,children:`Options`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`data`}),` takes the same shapes as `,(0,y.jsx)(t.strong,{children:`Select`}),`: strings, or `,(0,y.jsx)(t.code,{children:`{ value, label, disabled }`}),` objects.`]}),`
`,(0,y.jsx)(c,{of:m}),`
`,(0,y.jsx)(t.h3,{id:`controlled`,children:`Controlled`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`onChange`}),` receives the chosen value.`]}),`
`,(0,y.jsx)(c,{of:g}),`
`,(0,y.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,y.jsxs)(t.p,{children:[`The group takes the field props. `,(0,y.jsx)(t.code,{children:`label`}),` names the whole group, and `,(0,y.jsx)(t.code,{children:`error`}),` and `,(0,y.jsx)(t.code,{children:`required`}),` apply to it.`]}),`
`,(0,y.jsx)(c,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`import { RHFRadioGroup } from '@adhamaa/ui-kit/form'

<RHFRadioGroup name="severity" label="Severity" data={['Low', 'Medium', 'High']} rules={{ required: true }} />
`})}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(s,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Selector`}),(0,y.jsx)(t.th,{children:`Part`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-radio-group`})}),(0,y.jsx)(t.td,{children:`The group`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-radio-group__option`})}),(0,y.jsx)(t.td,{children:`One radio with its label`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-radio`})}),(0,y.jsx)(t.td,{children:`The circle`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-radio__indicator`})}),(0,y.jsx)(t.td,{children:`The dot`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`[data-checked]`})}),(0,y.jsx)(t.td,{children:`On the chosen radio (from ui-sdk)`})]})]})]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.p,{children:[`Built on `,(0,y.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/radio`,rel:`nofollow`,children:`ui-sdk Radio`}),`, which follows the WAI-ARIA radio group pattern. The group has the `,(0,y.jsx)(t.code,{children:`radiogroup`}),` role and is named by `,(0,y.jsx)(t.code,{children:`label`}),`. The whole group is one Tab stop.`]}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Key`}),(0,y.jsx)(t.th,{children:`Does`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Tab`}),(0,y.jsx)(t.td,{children:`Moves into the group, onto the chosen radio (or the first)`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Arrow keys`}),(0,y.jsx)(t.td,{children:`Move to the next or previous radio and choose it`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Space`}),(0,y.jsx)(t.td,{children:`Chooses the focused radio`})]})]})]}),`
`,(0,y.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Do`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Use it for two to five options that people should compare.`}),`
`,(0,y.jsx)(t.li,{children:`Pick a sensible default when there is one.`}),`
`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Don't`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Don't use it for more than about five options. Use `,(0,y.jsx)(t.code,{children:`Select`}),`.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Don't use a single radio. Use `,(0,y.jsx)(t.code,{children:`Checkbox`}),`.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`SegmentedControl`}),`: a more compact way to pick one of a few options.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Select`}),`: for longer lists.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),l(),h()})))()}b();export{v as default};