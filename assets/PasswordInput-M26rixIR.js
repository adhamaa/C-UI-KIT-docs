import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-7uT58uVX.js";import{a as u,i as d,n as f,r as p,t as m}from"./PasswordInput.stories-ByXta3hc.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.h1,{id:`passwordinput`,children:`PasswordInput`}),`
`,(0,_.jsx)(t.p,{children:`A password field with a button that shows or hides what's typed.`}),`
`,(0,_.jsx)(o,{language:`tsx`,dark:!0,code:`import { PasswordInput } from '@adhamaa/ui-kit'`}),`
`,(0,_.jsx)(c,{of:p}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(i,{of:p}),`
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`new-password`,children:`New password`}),`
`,(0,_.jsxs)(t.p,{children:[`Set `,(0,_.jsx)(t.code,{children:`autoComplete="new-password"`}),` on sign-up and change-password forms, so password managers offer to generate one. The default, `,(0,_.jsx)(t.code,{children:`current-password`}),`, is right for sign-in forms.`]}),`
`,(0,_.jsx)(c,{of:m}),`
`,(0,_.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,_.jsxs)(t.p,{children:[`PasswordInput takes the same field props as `,(0,_.jsx)(t.strong,{children:`TextInput`}),`.`]}),`
`,(0,_.jsx)(c,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { RHFPasswordInput } from '@adhamaa/ui-kit/form'

<RHFPasswordInput name="password" label="Password" rules={{ required: true, minLength: 8 }} />
`})}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(s,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,_.jsxs)(t.p,{children:[`Uses the `,(0,_.jsx)(t.strong,{children:`TextInput`}),` classes. The show/hide button is `,(0,_.jsx)(t.code,{children:`.kit-input__toggle`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`Built on `,(0,_.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/password-input`,rel:`nofollow`,children:`ui-sdk Password Input`}),`. The field stays a native password input. The toggle is a toggle button with `,(0,_.jsx)(t.code,{children:`aria-pressed`}),` and keeps the same name whether the password is shown or hidden.`]}),`
`,(0,_.jsx)(t.p,{children:`| Key | Does |
| --- | --- |
| Tab | Moves from the input to the toggle |
| Space, Enter | On the toggle, shows or hides the password |
| Enter | In the input, submits the form (it never presses the toggle) |`}),`
`,(0,_.jsx)(t.p,{children:`Clicking the toggle with the mouse keeps the caret in the input.`}),`
`,(0,_.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Do`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`List the password rules up front, and show which are met as the user types.`}),`
`,(0,_.jsxs)(t.li,{children:[`Let the browser autofill: always set `,(0,_.jsx)(t.code,{children:`autoComplete`}),`.`]}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Don't`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Don't block pasting. It breaks password managers.`}),`
`,(0,_.jsx)(t.li,{children:`Don't ask for the password twice. The show/hide toggle lets people check it.`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`TextInput`}),`: shares the field props and styling.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),l(),u()})))()}v();export{g as default};