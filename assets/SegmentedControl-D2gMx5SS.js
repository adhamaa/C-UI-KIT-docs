import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-B-yuF967.js";import{a as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./SegmentedControl.stories-BI3UtKOW.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{of:d}),`
`,(0,y.jsx)(t.h1,{id:`segmentedcontrol`,children:`SegmentedControl`}),`
`,(0,y.jsx)(t.p,{children:`A row of options where exactly one is chosen, with an indicator that slides to the choice. Good for switching views or periods.`}),`
`,(0,y.jsx)(o,{language:`tsx`,dark:!0,code:`import { SegmentedControl } from '@adhamaa/ui-kit'`}),`
`,(0,y.jsx)(c,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,y.jsx)(c,{of:m}),`
`,(0,y.jsx)(i,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,y.jsx)(t.h3,{id:`switch-views`,children:`Switch views`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`onChange`}),` receives the new value. There's always a value: the user can't unselect.`]}),`
`,(0,y.jsx)(c,{of:u}),`
`,(0,y.jsx)(t.h3,{id:`with-a-label`,children:`With a label`}),`
`,(0,y.jsxs)(t.p,{children:[`Inside a form, give it a `,(0,y.jsx)(t.code,{children:`label`}),` like any other field. On its own, give it an `,(0,y.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,y.jsx)(c,{of:p}),`
`,(0,y.jsx)(t.h3,{id:`full-width-and-disabled-options`,children:`Full width and disabled options`}),`
`,(0,y.jsx)(c,{of:f}),`
`,(0,y.jsx)(c,{of:g}),`
`,(0,y.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`import { RHFSegmentedControl } from '@adhamaa/ui-kit/form'

<RHFSegmentedControl name="period" label="Period" data={['Day', 'Week', 'Month']} />
`})}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(s,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Selector`}),(0,y.jsx)(t.th,{children:`Part`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-segmented`})}),(0,y.jsx)(t.td,{children:`The track`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-segmented--full`})}),(0,y.jsxs)(t.td,{children:[`Added with `,(0,y.jsx)(t.code,{children:`fullWidth`})]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-segmented__item`})}),(0,y.jsx)(t.td,{children:`One option`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-segmented__indicator`})}),(0,y.jsx)(t.td,{children:`The sliding highlight`})]})]})]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.p,{children:[`Built on `,(0,y.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/segmented-control`,rel:`nofollow`,children:`ui-sdk Segmented Control`}),`. It works like a radio group: one Tab stop for the whole row, and the arrow keys move the choice.`]}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Key`}),(0,y.jsx)(t.th,{children:`Does`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Tab`}),(0,y.jsx)(t.td,{children:`Moves onto the chosen option`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Arrow keys`}),(0,y.jsx)(t.td,{children:`Choose the next or previous option`})]})]})]}),`
`,(0,y.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Do`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Use it for two to five short options.`}),`
`,(0,y.jsx)(t.li,{children:`Use it to change what's shown on the page, not to submit data.`}),`
`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Don't`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Don't use it for navigation between pages. Use `,(0,y.jsx)(t.code,{children:`Tabs`}),`.`]}),`
`,(0,y.jsx)(t.li,{children:`Don't put long labels in it. It doesn't wrap.`}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`RadioGroup`}),`: the same choice, laid out as a list.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Tabs`}),`: for switching between panels of content.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),l(),h()})))()}b();export{v as default};