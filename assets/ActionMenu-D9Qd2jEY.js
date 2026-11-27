import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-Spk4s02i.js";import{a as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./ActionMenu.stories-DX8S4DEr.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`actionmenu`,children:`ActionMenu`}),`
`,(0,y.jsx)(t.p,{children:`A button that opens a list of actions: the "⋮" menu on a table row, an Export menu, an account menu. Pass the items as data. They can be grouped under headings and carry a second line of description.`}),`
`,(0,y.jsx)(o,{language:`tsx`,dark:!0,code:`import { ActionMenu } from '@adhamaa/ui-kit'`}),`
`,(0,y.jsx)(c,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,y.jsx)(c,{of:d}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,y.jsx)(t.h3,{id:`items`,children:`Items`}),`
`,(0,y.jsxs)(t.p,{children:[`Each item is `,(0,y.jsx)(t.code,{children:`{ label, onClick }`}),`, plus optional `,(0,y.jsx)(t.code,{children:`icon`}),`, `,(0,y.jsx)(t.code,{children:`description`}),`, `,(0,y.jsx)(t.code,{children:`disabled`}),`, `,(0,y.jsx)(t.code,{children:`danger`}),` or `,(0,y.jsx)(t.code,{children:`href`}),` (which renders a link). Add `,(0,y.jsx)(t.code,{children:`{ type: 'separator' }`}),` for a line between items.`]}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`<ActionMenu
  aria-label="Actions for PKG-004"
  items={[
    { label: 'Edit', icon: <PencilIcon />, onClick: edit },
    { label: 'Duplicate', onClick: duplicate },
    { type: 'separator' },
    { label: 'Delete', danger: true, onClick: () => modals.confirm({ … }) },
  ]}
/>
`})}),`
`,(0,y.jsx)(t.h3,{id:`groups`,children:`Groups`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`{ type: 'group', label, items }`}),` puts items under a heading. Leave out `,(0,y.jsx)(t.code,{children:`label`}),` for an untitled group.`]}),`
`,(0,y.jsx)(c,{of:m}),`
`,(0,y.jsx)(t.h3,{id:`custom-trigger`,children:`Custom trigger`}),`
`,(0,y.jsxs)(t.p,{children:[`The trigger is a small, square `,(0,y.jsx)(t.code,{children:`subtle`}),` icon button showing a vertical three-dot icon, named "More actions" by default. Pass another icon as `,(0,y.jsx)(t.code,{children:`trigger`}),`, with an `,(0,y.jsx)(t.code,{children:`aria-label`}),` that names it.`]}),`
`,(0,y.jsx)(c,{of:f}),`
`,(0,y.jsx)(t.h3,{id:`header`,children:`Header`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`header`}),` shows content above the items that isn't an action, like the signed-in user.`]}),`
`,(0,y.jsx)(c,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(s,{of:g}),`
`,(0,y.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Selector`}),(0,y.jsx)(t.th,{children:`Part`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-button.kit-icon-button`})}),(0,y.jsxs)(t.td,{children:[`The trigger (`,(0,y.jsx)(t.code,{children:`className`}),` adds to it)`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-popover.kit-menu`})}),(0,y.jsxs)(t.td,{children:[`The popup (`,(0,y.jsx)(t.code,{children:`contentClassName`}),` adds to it)`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-menu__header`})}),(0,y.jsx)(t.td,{children:`The header`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`.kit-menu__group`}),`, `,(0,y.jsx)(t.code,{children:`.kit-menu__group-label`})]}),(0,y.jsx)(t.td,{children:`A group and its heading`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-menu__item`})}),(0,y.jsxs)(t.td,{children:[`One action (`,(0,y.jsx)(t.code,{children:`[data-danger]`}),` for danger items)`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-menu__icon`})}),(0,y.jsx)(t.td,{children:`The item's icon`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`.kit-menu__label`}),`, `,(0,y.jsx)(t.code,{children:`.kit-menu__description`})]}),(0,y.jsx)(t.td,{children:`The item's two lines`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-menu__separator`})}),(0,y.jsx)(t.td,{children:`A separator`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`[data-highlighted]`})}),(0,y.jsx)(t.td,{children:`The item under the keyboard or pointer (from ui-sdk)`})]})]})]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.p,{children:[`Built on `,(0,y.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/menu`,rel:`nofollow`,children:`ui-sdk Menu`}),`, which follows the WAI-ARIA menu button pattern. The trigger has `,(0,y.jsx)(t.code,{children:`aria-haspopup="menu"`}),`, and the items are `,(0,y.jsx)(t.code,{children:`menuitem`}),`s.`]}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Key`}),(0,y.jsx)(t.th,{children:`Does`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Enter, Space, ArrowDown`}),(0,y.jsx)(t.td,{children:`On the trigger, opens the menu on the first item`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`ArrowUp, ArrowDown`}),(0,y.jsx)(t.td,{children:`Move between items, skipping disabled ones`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Home, End`}),(0,y.jsx)(t.td,{children:`First or last item`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Typing`}),(0,y.jsx)(t.td,{children:`Jumps to the next item starting with the typed text`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Enter, Space`}),(0,y.jsx)(t.td,{children:`Runs the item and closes the menu`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`Escape`}),(0,y.jsx)(t.td,{children:`Closes the menu and returns focus to the trigger`})]})]})]}),`
`,(0,y.jsx)(t.p,{children:`On a table row, name each trigger after its row ("Actions for PKG-004"), so screen-reader users can tell the menus apart.`}),`
`,(0,y.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Do`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Keep the row's main action as a visible button, and put the rest in the menu.`}),`
`,(0,y.jsxs)(t.li,{children:[`Put destructive actions last, after a separator, with `,(0,y.jsx)(t.code,{children:`danger`}),`.`]}),`
`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Don't`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Don't hide the only way to do something in a menu.`}),`
`,(0,y.jsx)(t.li,{children:`Don't put more than about seven items in one menu. Group them, or rethink.`}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Popover`}),`: for content that isn't a list of actions.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`ConfirmDialog`}),`: confirm a destructive action from the menu.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`DataTable`}),`: has row actions built in.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),l(),h()})))()}b();export{v as default};