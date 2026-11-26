import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-Df9VTtJH.js";import{a as u,i as d,n as f,r as p,t as m}from"./Autocomplete.stories-u78HU9xG.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:m}),`
`,(0,_.jsx)(t.h1,{id:`autocomplete`,children:`Autocomplete`}),`
`,(0,_.jsxs)(t.p,{children:[`A text field that suggests values as you type. Unlike `,(0,_.jsx)(t.strong,{children:`Select`}),`, any text is a valid value: the suggestions only help fill it in.`]}),`
`,(0,_.jsx)(o,{language:`tsx`,dark:!0,code:`import { Autocomplete } from '@adhamaa/ui-kit'`}),`
`,(0,_.jsx)(c,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`free-text`,children:`Free text`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`onChange`}),` receives the text, whether it was typed or picked from the suggestions.`]}),`
`,(0,_.jsx)(c,{of:f}),`
`,(0,_.jsx)(t.h3,{id:`no-match`,children:`No match`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`nothingFoundMessage`}),` shows while nothing matches. Leave it out to show nothing.`]}),`
`,(0,_.jsx)(c,{of:p}),`
`,(0,_.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { RHFAutocomplete } from '@adhamaa/ui-kit/form'

<RHFAutocomplete name="district" label="District" data={districts} />
`})}),`
`,(0,_.jsxs)(t.p,{children:[`The form value is a `,(0,_.jsx)(t.code,{children:`string`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(s,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,_.jsxs)(t.p,{children:[`The field uses the `,(0,_.jsx)(t.strong,{children:`TextInput`}),` classes and the suggestions use the `,(0,_.jsx)(t.strong,{children:`Select`}),` list classes (`,(0,_.jsx)(t.code,{children:`.kit-listbox*`}),`).`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`Built on `,(0,_.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/autocomplete`,rel:`nofollow`,children:`ui-sdk Autocomplete`}),`, which follows the WAI-ARIA combobox pattern with list autocomplete. Focus stays in the input while the arrow keys move the highlight.`]}),`
`,(0,_.jsx)(t.p,{children:`| Key | Does |
| --- | --- |
| Typing | Filters the suggestions and opens the list |
| ArrowDown, ArrowUp | Move the highlight |
| Enter | Fills in the highlighted suggestion and closes the list, without submitting |
| Escape | Closes the list and keeps the text |`}),`
`,(0,_.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Do`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Use it when most answers come from a known list, but others are allowed.`}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Don't`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`Don't use it when the value must come from the list. Use `,(0,_.jsx)(t.code,{children:`Select`}),` with `,(0,_.jsx)(t.code,{children:`searchable`}),`.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Select`}),`: when only listed values are allowed.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`SearchInput`}),`: a search box without suggestions.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),l(),u()})))()}v();export{g as default};