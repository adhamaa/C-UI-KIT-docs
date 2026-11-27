import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-Spk4s02i.js";import{a as u,i as d,n as f,r as p,t as m}from"./Popover.stories-r6CiJ6C8.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:d}),`
`,(0,_.jsx)(t.h1,{id:`popover`,children:`Popover`}),`
`,(0,_.jsx)(t.p,{children:`A button that opens a floating panel of any content beside it: a notification list, a filter form, extra details. Escape and a press outside close it, and focus returns to the button. It doesn't block the page the way a Dialog does.`}),`
`,(0,_.jsx)(o,{language:`tsx`,dark:!0,code:`import { Popover } from '@adhamaa/ui-kit'`}),`
`,(0,_.jsx)(c,{of:p}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(i,{of:p}),`
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`trigger-and-title`,children:`Trigger and title`}),`
`,(0,_.jsxs)(t.p,{children:[`Popover renders its own trigger: a small, square `,(0,_.jsx)(t.code,{children:`subtle`}),` icon button. Pass an icon as `,(0,_.jsx)(t.code,{children:`trigger`}),`, not a `,(0,_.jsx)(t.code,{children:`<Button>`}),`, and name it with `,(0,_.jsx)(t.code,{children:`aria-label`}),`. `,(0,_.jsx)(t.code,{children:`title`}),` is a heading in the popup and also names it for screen readers. Without a title, use `,(0,_.jsx)(t.code,{children:`contentLabel`}),`.`]}),`
`,(0,_.jsx)(t.h3,{id:`a-form-inside`,children:`A form inside`}),`
`,(0,_.jsxs)(t.p,{children:[`Control it with `,(0,_.jsx)(t.code,{children:`opened`}),` and `,(0,_.jsx)(t.code,{children:`onOpenChange`}),` to close it from inside, for example on Apply.`]}),`
`,(0,_.jsx)(c,{of:m}),`
`,(0,_.jsx)(t.h3,{id:`placement`,children:`Placement`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`side`}),` picks the side of the trigger to open on, and `,(0,_.jsx)(t.code,{children:`align`}),` how the popup lines up with it. It flips to the other side when there isn't room.`]}),`
`,(0,_.jsx)(c,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(s,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Selector`}),(0,_.jsx)(t.th,{children:`Part`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-button.kit-icon-button`})}),(0,_.jsxs)(t.td,{children:[`The trigger (`,(0,_.jsx)(t.code,{children:`className`}),` adds to it)`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-popover.kit-popover-panel`})}),(0,_.jsxs)(t.td,{children:[`The popup (`,(0,_.jsx)(t.code,{children:`contentClassName`}),` adds to it)`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-popover-panel__title`})}),(0,_.jsx)(t.td,{children:`The title`})]})]})]}),`
`,(0,_.jsxs)(t.p,{children:[`The popup uses the `,(0,_.jsx)(t.code,{children:`surfaceRaised`}),`, `,(0,_.jsx)(t.code,{children:`radiusLg`}),` and `,(0,_.jsx)(t.code,{children:`shadowLg`}),` tokens.`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`Built on `,(0,_.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/popover`,rel:`nofollow`,children:`ui-sdk Popover`}),`. The trigger is a button with `,(0,_.jsx)(t.code,{children:`aria-expanded`}),` and the popup is a dialog named by `,(0,_.jsx)(t.code,{children:`title`}),` or `,(0,_.jsx)(t.code,{children:`contentLabel`}),`. Focus moves into the popup when it opens.`]}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Key`}),(0,_.jsx)(t.th,{children:`Does`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:`Enter, Space`}),(0,_.jsx)(t.td,{children:`On the trigger, opens or closes the popup`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:`Tab`}),(0,_.jsx)(t.td,{children:`Moves through the popup's content`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:`Escape`}),(0,_.jsx)(t.td,{children:`Closes it and returns focus to the trigger`})]})]})]}),`
`,(0,_.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Do`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Use it for content that relates to the trigger and can be dismissed without losing work.`}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Don't`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`Don't use it for a list of actions. Use `,(0,_.jsx)(t.code,{children:`ActionMenu`}),`, which has menu keyboard behaviour.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Don't put a long form in it. Use a `,(0,_.jsx)(t.code,{children:`Dialog`}),`.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Don't use it for a hint. Use `,(0,_.jsx)(t.code,{children:`Tooltip`}),`.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`ActionMenu`}),`: a list of actions from a button.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Tooltip`}),`: a short hint on hover.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Dialog`}),`: for tasks that need the user's full attention.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),l(),u()})))()}v();export{g as default};