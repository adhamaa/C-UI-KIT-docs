import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-DdMgE_eQ.js";import{a as u,i as d,n as f,r as p,t as m}from"./SearchInput.stories-C0cxgB04.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:p}),`
`,(0,_.jsx)(t.h1,{id:`searchinput`,children:`SearchInput`}),`
`,(0,_.jsxs)(t.p,{children:[`A text field for searching. It has a search icon and a clear button, and calls `,(0,_.jsx)(t.code,{children:`onSearch`}),` once the user stops typing, so you don't send a request on every key press.`]}),`
`,(0,_.jsx)(o,{language:`tsx`,dark:!0,code:`import { SearchInput } from '@adhamaa/ui-kit'`}),`
`,(0,_.jsx)(c,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(c,{of:f}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`debounced-search`,children:`Debounced search`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`onSearch`}),` runs `,(0,_.jsx)(t.code,{children:`debounceMs`}),` milliseconds (300 by default) after the last change, including a clear. Use it to filter a list or fetch results. `,(0,_.jsx)(t.code,{children:`onValueChange`}),` still runs on every change if you need the raw text.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`const [query, setQuery] = useState('')
const { data } = useQuery({ queryKey: ['packages', query], queryFn: () => api.search(query) })

<SearchInput placeholder="Search packages" onSearch={setQuery} />
`})}),`
`,(0,_.jsx)(t.h3,{id:`with-a-label`,children:`With a label`}),`
`,(0,_.jsxs)(t.p,{children:[`Without a `,(0,_.jsx)(t.code,{children:`label`}),`, the input is named "Search" for screen readers. Add a label when the search sits in a form or there's more than one on the page.`]}),`
`,(0,_.jsx)(c,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsxs)(t.p,{children:[`Takes every `,(0,_.jsx)(t.code,{children:`TextInput`}),` prop except `,(0,_.jsx)(t.code,{children:`type`}),`, plus:`]}),`
`,(0,_.jsx)(s,{of:p,include:[`onSearch`,`debounceMs`,`clearable`,`leftSection`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`clearable`}),` defaults to `,(0,_.jsx)(t.code,{children:`true`}),` and `,(0,_.jsx)(t.code,{children:`leftSection`}),` to the search icon. Pass your own to replace them.`]}),`
`,(0,_.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,_.jsxs)(t.p,{children:[`Uses the same classes as `,(0,_.jsx)(t.strong,{children:`TextInput`}),`. The `,(0,_.jsx)(t.code,{children:`<input>`}),` has `,(0,_.jsx)(t.code,{children:`type="search"`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`Built on `,(0,_.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/input`,rel:`nofollow`,children:`ui-sdk Input`}),`. The input has `,(0,_.jsx)(t.code,{children:`type="search"`}),`, so screen readers announce it as a search field, and it gets the accessible name "Search" unless you give it a `,(0,_.jsx)(t.code,{children:`label`}),` or `,(0,_.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Do`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Say what's being searched in the placeholder: "Search packages".`}),`
`,(0,_.jsx)(t.li,{children:`Keep the debounce at 300ms or more for server requests.`}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Don't`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Don't add a separate Search button that does the same thing as typing.`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`TextInput`}),`: the field it's built on.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Autocomplete`}),`: when the user should pick from suggestions.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`DataTable`}),`: has its own quick-filter search in the toolbar.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),l(),u()})))()}v();export{g as default};