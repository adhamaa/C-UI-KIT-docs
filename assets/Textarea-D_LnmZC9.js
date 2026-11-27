import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-7uT58uVX.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./Textarea.stories-CS3yJ83W.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:u}),`
`,(0,v.jsx)(t.h1,{id:`textarea`,children:`Textarea`}),`
`,(0,v.jsx)(t.p,{children:`A multi-line text field for remarks, descriptions and notes. It can grow with its text and show a character count.`}),`
`,(0,v.jsx)(o,{language:`tsx`,dark:!0,code:`import { Textarea } from '@adhamaa/ui-kit'`}),`
`,(0,v.jsx)(c,{of:h}),`
`,(0,v.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,v.jsx)(c,{of:m}),`
`,(0,v.jsx)(i,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,v.jsx)(t.h3,{id:`grow-with-the-text`,children:`Grow with the text`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`autosize`}),` makes the field grow and shrink with its content between `,(0,v.jsx)(t.code,{children:`minRows`}),` (3 by default) and `,(0,v.jsx)(t.code,{children:`maxRows`}),`, then scroll.`]}),`
`,(0,v.jsx)(c,{of:h}),`
`,(0,v.jsx)(t.h3,{id:`character-count`,children:`Character count`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`showCount`}),` shows "used / max" under the field when `,(0,v.jsx)(t.code,{children:`maxLength`}),` is set. The browser stops input at the limit.`]}),`
`,(0,v.jsx)(c,{of:f}),`
`,(0,v.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,v.jsxs)(t.p,{children:[`Textarea takes the same field props as `,(0,v.jsx)(t.strong,{children:`TextInput`}),`.`]}),`
`,(0,v.jsx)(c,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { RHFTextarea } from '@adhamaa/ui-kit/form'

<RHFTextarea name="remarks" label="Remarks" autosize maxLength={500} showCount />
`})}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(s,{of:u}),`
`,(0,v.jsxs)(t.p,{children:[`Native `,(0,v.jsx)(t.code,{children:`<textarea>`}),` attributes pass through. The ref goes to the `,(0,v.jsx)(t.code,{children:`<textarea>`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,v.jsxs)(t.p,{children:[`| Selector | `,(0,v.jsx)(t.code,{children:`classNames`}),` key | Part |
| --- | --- | --- |
| `,(0,v.jsx)(t.code,{children:`.kit-textarea`}),` | `,(0,v.jsx)(t.code,{children:`control`}),` | The `,(0,v.jsx)(t.code,{children:`<textarea>`}),` |
| `,(0,v.jsx)(t.code,{children:`.kit-field__count`}),` | — | The character count |`]}),`
`,(0,v.jsxs)(t.p,{children:[`The label, description and error use the `,(0,v.jsx)(t.strong,{children:`TextInput`}),` field classes.`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.p,{children:[`Built on `,(0,v.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/textarea`,rel:`nofollow`,children:`ui-sdk Textarea`}),`. It stays a native `,(0,v.jsx)(t.code,{children:`<textarea>`}),`, so editing, selection and spell checking work as usual. Enter adds a new line and never submits the form.`]}),`
`,(0,v.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Do`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`Size the field to the expected length: `,(0,v.jsx)(t.code,{children:`minRows={2}`}),` for a short note, more for a description.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Set `,(0,v.jsx)(t.code,{children:`maxLength`}),` when the server has a limit, and show the count.`]}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Don't`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`Don't use it for one-line values. Use `,(0,v.jsx)(t.code,{children:`TextInput`}),`.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`TextInput`}),`: one line of text.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),l(),p()})))()}y();export{_ as default};