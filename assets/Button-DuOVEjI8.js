import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./Button-DPy_egTd.js";import{i,r as a}from"./react-DITjJg24.js";import{a as o,c as s,l as c,n as l,r as u,u as d}from"./blocks-SWAFQvtI.js";import{a as f,c as p,d as m,i as h,l as g,n as _,o as v,r as y,s as b,t as x,u as S}from"./Button.stories-son_9gDh.js";function C(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(s,{of:_}),`
`,(0,T.jsx)(t.h1,{id:`button`,children:`Button`}),`
`,(0,T.jsxs)(t.p,{children:[`Runs an action. It comes in six variants and four sizes, takes icons on either side, and stays pending while an async `,(0,T.jsx)(t.code,{children:`onClick`}),` runs, so a form can't be submitted twice.`]}),`
`,(0,T.jsx)(c,{language:`tsx`,dark:!0,code:`import { Button, IconButton } from '@adhamaa/ui-kit'`}),`
`,(0,T.jsx)(u,{of:g}),`
`,(0,T.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,T.jsx)(t.p,{children:`Change the props below to see every combination.`}),`
`,(0,T.jsx)(u,{of:b}),`
`,(0,T.jsx)(o,{of:b}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`variants`,children:`Variants`}),`
`,(0,T.jsxs)(t.p,{children:[`| Variant | Use it for |
| --- | --- |
| `,(0,T.jsx)(t.code,{children:`filled`}),` (default) | The main action on a page or in a dialog. Use one per view. |
| `,(0,T.jsx)(t.code,{children:`light`}),` | A secondary action that should still stand out. |
| `,(0,T.jsx)(t.code,{children:`outline`}),` | A secondary action next to a filled button. |
| `,(0,T.jsx)(t.code,{children:`subtle`}),` | Low-emphasis actions in toolbars, table rows and cards. |
| `,(0,T.jsx)(t.code,{children:`default`}),` | Neutral actions like Cancel or Back. |
| `,(0,T.jsx)(t.code,{children:`danger`}),` | Destructive actions like Delete. Pair it with a confirmation. |`]}),`
`,(0,T.jsx)(t.p,{children:`The preview at the top of the page shows all six.`}),`
`,(0,T.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.code,{children:`size`}),` sets the height from the `,(0,T.jsx)(t.code,{children:`--kit-h-*`}),` tokens: `,(0,T.jsx)(t.code,{children:`xs`}),` 28px, `,(0,T.jsx)(t.code,{children:`sm`}),` 32px, `,(0,T.jsx)(t.code,{children:`md`}),` 36px (default), `,(0,T.jsx)(t.code,{children:`lg`}),` 44px. Form fields use the same scale, so a button and a field of the same size line up.`]}),`
`,(0,T.jsx)(u,{of:p}),`
`,(0,T.jsx)(t.h3,{id:`with-icons`,children:`With icons`}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.code,{children:`leftSection`}),` and `,(0,T.jsx)(t.code,{children:`rightSection`}),` take any node, usually one of the kit's `,(0,T.jsx)(t.code,{children:`icons`}),`. Put a forward-pointing icon on the right and an add or action icon on the left.`]}),`
`,(0,T.jsx)(u,{of:S}),`
`,(0,T.jsx)(t.h3,{id:`icon-only`,children:`Icon only`}),`
`,(0,T.jsxs)(t.p,{children:[`Use `,(0,T.jsx)(t.code,{children:`IconButton`}),` for a button with no visible text. It is square, defaults to the `,(0,T.jsx)(t.code,{children:`subtle`}),` variant, and `,(0,T.jsxs)(t.strong,{children:[`requires `,(0,T.jsx)(t.code,{children:`aria-label`})]}),`, which TypeScript enforces.`]}),`
`,(0,T.jsx)(u,{of:f}),`
`,(0,T.jsx)(t.h3,{id:`loading`,children:`Loading`}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.code,{children:`loading`}),` shows a spinner in place of the left section and blocks presses. The button stays focusable, so keyboard users don't lose their place.`]}),`
`,(0,T.jsx)(u,{of:v}),`
`,(0,T.jsx)(t.h3,{id:`async-click`,children:`Async click`}),`
`,(0,T.jsxs)(t.p,{children:[`Return a Promise from `,(0,T.jsx)(t.code,{children:`onClick`}),` and the button becomes pending until it settles: it gets `,(0,T.jsx)(t.code,{children:`aria-busy`}),`, ignores more presses and, if the action takes longer than a second, tells screen readers it's loading. You don't need a `,(0,T.jsx)(t.code,{children:`loading`}),` state of your own for this.`]}),`
`,(0,T.jsx)(u,{of:x}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-tsx`,children:`<Button onClick={() => api.savePackage(values)}>Save</Button>
`})}),`
`,(0,T.jsxs)(t.p,{children:[`This tracks the Promise from the button's own `,(0,T.jsx)(t.code,{children:`onClick`}),`. For a form's async `,(0,T.jsx)(t.code,{children:`onSubmit`}),`, keep a pending flag and pass it to `,(0,T.jsx)(t.code,{children:`loading`}),` instead.`]}),`
`,(0,T.jsx)(t.h3,{id:`disabled-and-full-width`,children:`Disabled and full width`}),`
`,(0,T.jsx)(u,{of:y}),`
`,(0,T.jsx)(u,{of:h}),`
`,(0,T.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,T.jsx)(t.h3,{id:`button-1`,children:`Button`}),`
`,(0,T.jsx)(l,{of:_}),`
`,(0,T.jsxs)(t.p,{children:[`Button also accepts the props of ui-sdk's Button, such as `,(0,T.jsx)(t.code,{children:`type`}),`, `,(0,T.jsx)(t.code,{children:`onClick`}),` and `,(0,T.jsx)(t.code,{children:`focusableWhenDisabled`}),`. `,(0,T.jsx)(t.code,{children:`type`}),` defaults to `,(0,T.jsx)(t.code,{children:`'button'`}),`, so set `,(0,T.jsx)(t.code,{children:`type="submit"`}),` to submit a form.`]}),`
`,(0,T.jsx)(t.h3,{id:`iconbutton`,children:`IconButton`}),`
`,(0,T.jsx)(l,{of:n}),`
`,(0,T.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,T.jsxs)(t.p,{children:[`| Selector | Part |
| --- | --- |
| `,(0,T.jsx)(t.code,{children:`.kit-button`}),` | The button, for both Button and IconButton |
| `,(0,T.jsx)(t.code,{children:`.kit-icon-button`}),` | Added on IconButton |
| `,(0,T.jsx)(t.code,{children:`.kit-button--full`}),` | Added with `,(0,T.jsx)(t.code,{children:`fullWidth`}),` |
| `,(0,T.jsx)(t.code,{children:`.kit-button__section`}),` | The left or right section, and the loading spinner |
| `,(0,T.jsx)(t.code,{children:`.kit-button__label`}),` | The text |
| `,(0,T.jsx)(t.code,{children:`[data-variant]`}),`, `,(0,T.jsx)(t.code,{children:`[data-size]`}),` | The current variant and size |
| `,(0,T.jsx)(t.code,{children:`[data-loading]`}),` | Present while `,(0,T.jsx)(t.code,{children:`loading`}),` is set |
| `,(0,T.jsx)(t.code,{children:`[data-pending]`}),` | Present while an async `,(0,T.jsx)(t.code,{children:`onClick`}),` runs (from ui-sdk) |
| `,(0,T.jsx)(t.code,{children:`[data-disabled]`}),` | Present while disabled (from ui-sdk) |`]}),`
`,(0,T.jsxs)(t.p,{children:[`Colours come from the theme tokens: `,(0,T.jsx)(t.code,{children:`primary`}),` and `,(0,T.jsx)(t.code,{children:`primaryForeground`}),` for `,(0,T.jsx)(t.code,{children:`filled`}),`, `,(0,T.jsx)(t.code,{children:`primarySoft`}),` for `,(0,T.jsx)(t.code,{children:`light`}),`, `,(0,T.jsx)(t.code,{children:`destructive`}),` for `,(0,T.jsx)(t.code,{children:`danger`}),`. See `,(0,T.jsx)(t.strong,{children:`Tokens`}),` for the full list. To restyle one button, pass `,(0,T.jsx)(t.code,{children:`className`}),`. The kit's rules sit in `,(0,T.jsx)(t.code,{children:`@layer ui-kit`}),`, so your unlayered CSS wins without `,(0,T.jsx)(t.code,{children:`!important`}),`.`]}),`
`,(0,T.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsxs)(t.p,{children:[`Built on `,(0,T.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/button`,rel:`nofollow`,children:`ui-sdk Button`}),`, which renders a native `,(0,T.jsx)(t.code,{children:`<button>`}),`.`]}),`
`,(0,T.jsx)(t.p,{children:`| Key | Does |
| --- | --- |
| Enter, Space | Presses the focused button |`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsx)(t.li,{children:`Give every button a text label that says what it does: "Save package", not "OK".`}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.code,{children:`IconButton`}),` must have an `,(0,T.jsx)(t.code,{children:`aria-label`}),`. Add a `,(0,T.jsx)(t.code,{children:`Tooltip`}),` with the same text for sighted mouse users.`]}),`
`,(0,T.jsxs)(t.li,{children:[`While pending, the button sets `,(0,T.jsx)(t.code,{children:`aria-busy="true"`}),` and `,(0,T.jsx)(t.code,{children:`aria-disabled="true"`}),` and keeps focus.`]}),`
`,(0,T.jsxs)(t.li,{children:[`Use `,(0,T.jsx)(t.code,{children:`focusableWhenDisabled`}),` when a disabled button should still be reachable, for example to show a tooltip explaining why it's disabled.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(t.p,{children:(0,T.jsx)(t.strong,{children:`Do`})}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[`Keep one `,(0,T.jsx)(t.code,{children:`filled`}),` button per view, for the main action.`]}),`
`,(0,T.jsx)(t.li,{children:`Start labels with a verb: "Add package", "Export report".`}),`
`,(0,T.jsxs)(t.li,{children:[`Put Cancel (`,(0,T.jsx)(t.code,{children:`default`}),`) before the primary action in dialog footers.`]}),`
`]}),`
`,(0,T.jsx)(t.p,{children:(0,T.jsx)(t.strong,{children:`Don't`})}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsx)(t.li,{children:`Don't use a button to go to another page. Use a link.`}),`
`,(0,T.jsx)(t.li,{children:`Don't change the label to "Saving…" while pending. The spinner and the screen reader announcement already say it's working, and a changing label shifts the button's width.`}),`
`,(0,T.jsxs)(t.li,{children:[`Don't use `,(0,T.jsx)(t.code,{children:`danger`}),` for actions that can be undone.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`Dialog`}),` and `,(0,T.jsx)(t.strong,{children:`ConfirmDialog`}),`: footers built from buttons.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`Tooltip`}),`: names an `,(0,T.jsx)(t.code,{children:`IconButton`}),` for mouse users.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`ActionMenu`}),`: when a row has more actions than fit as buttons.`]}),`
`]})]})}function w(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=t(),a(),d(),r(),m()})))()}E();export{w as default};