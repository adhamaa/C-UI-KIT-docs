import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-BPgqBUap.js";import{a as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./Tooltip.stories-DIf8S-Xj.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{of:u}),`
`,(0,y.jsx)(t.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,y.jsx)(t.p,{children:`A short hint that shows when the pointer rests on an element or it gets keyboard focus. On touch screens, pressing the element toggles it.`}),`
`,(0,y.jsx)(o,{language:`tsx`,dark:!0,code:`import { Tooltip } from '@adhamaa/ui-kit'`}),`
`,(0,y.jsx)(c,{of:g}),`
`,(0,y.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,y.jsx)(c,{of:m}),`
`,(0,y.jsx)(i,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,y.jsx)(t.h3,{id:`icon-buttons`,children:`Icon buttons`}),`
`,(0,y.jsxs)(t.p,{children:[`The most common use: an icon-only button names itself with `,(0,y.jsx)(t.code,{children:`aria-label`}),`, and the tooltip shows that name to sighted mouse users. The child must accept a ref and props, like a button, a link or a kit component.`]}),`
`,(0,y.jsx)(c,{of:g}),`
`,(0,y.jsx)(t.h3,{id:`arrow-and-long-text`,children:`Arrow and long text`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`withArrow`}),` draws an arrow at the trigger. Text wraps at `,(0,y.jsx)(t.code,{children:`maxWidth`}),` (20rem by default).`]}),`
`,(0,y.jsx)(c,{of:p}),`
`,(0,y.jsx)(c,{of:f}),`
`,(0,y.jsx)(t.h3,{id:`sides`,children:`Sides`}),`
`,(0,y.jsx)(c,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(s,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Selector`}),(0,y.jsx)(t.th,{children:`Part`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-tooltip`})}),(0,y.jsxs)(t.td,{children:[`The tooltip (`,(0,y.jsx)(t.code,{children:`className`}),` adds to it)`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-tooltip__arrow`})}),(0,y.jsx)(t.td,{children:`The arrow`})]})]})]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.p,{children:[`Built on `,(0,y.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/tooltip`,rel:`nofollow`,children:`ui-sdk Tooltip`}),`. By default (`,(0,y.jsx)(t.code,{children:`type="description"`}),`) the label is added to the trigger's description, so screen readers read it after the trigger's name. With `,(0,y.jsx)(t.code,{children:`type="label"`}),` it becomes the trigger's name instead, for an icon button that has no `,(0,y.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`It opens on keyboard focus as well as hover, after `,(0,y.jsx)(t.code,{children:`delay`}),` (300ms).`]}),`
`,(0,y.jsx)(t.li,{children:`Escape closes it.`}),`
`,(0,y.jsx)(t.li,{children:`Never put interactive content in a tooltip. It can't be reached with the keyboard.`}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Do`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Keep it to a few words: name the action, or add one fact.`}),`
`,(0,y.jsx)(t.li,{children:`Give every icon-only button a tooltip.`}),`
`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Don't`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Don't hide important information in a tooltip. People on touch screens rarely find it.`}),`
`,(0,y.jsx)(t.li,{children:`Don't add a tooltip that repeats a visible label.`}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`IconButton`}),`: the usual trigger.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Popover`}),`: for longer or interactive content.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),l(),h()})))()}b();export{v as default};