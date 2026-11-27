import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-BPgqBUap.js";import{a as u,i as d,n as f,r as p,t as m}from"./InfiniteSelect.stories-BZ0uPzfL.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.h1,{id:`infiniteselect`,children:`InfiniteSelect`}),`
`,(0,_.jsxs)(t.p,{children:[`A Select whose options come from a paged, searchable API. Give it one `,(0,_.jsx)(t.code,{children:`loadOptions`}),` function and it handles the rest: it waits for typing to pause, loads the next page as the list scrolls, cancels requests that a newer search made stale, and remembers the labels of chosen values. Add `,(0,_.jsx)(t.code,{children:`multiple`}),` for a MultiSelect.`]}),`
`,(0,_.jsx)(o,{language:`tsx`,dark:!0,code:`import { InfiniteSelect } from '@adhamaa/ui-kit'`}),`
`,(0,_.jsx)(c,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`loading-options`,children:`Loading options`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`loadOptions`}),` receives `,(0,_.jsx)(t.code,{children:`{ search, page, signal }`}),` and returns `,(0,_.jsx)(t.code,{children:`{ options, hasMore }`}),`. `,(0,_.jsx)(t.code,{children:`page`}),` starts at 0. Pass `,(0,_.jsx)(t.code,{children:`signal`}),` to `,(0,_.jsx)(t.code,{children:`fetch`}),`, so a stale request is cancelled. It works with any fetcher and has no data-library dependency.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`<InfiniteSelect
  label="Contractor"
  loadOptions={async ({ search, page, signal }) => {
    const res = await api.contractors({ search, page: page + 1, size: 20 }, { signal })
    return {
      options: res.data.map((c) => ({ value: c.uuid, label: c.name })),
      hasMore: res.meta.page < res.meta.last_page,
    }
  }}
/>
`})}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`debounceMs`}),` (300 by default) sets how long to wait after typing before searching.`]}),`
`,(0,_.jsx)(t.h3,{id:`multiple`,children:`Multiple`}),`
`,(0,_.jsx)(c,{of:p}),`
`,(0,_.jsx)(t.h3,{id:`editing-a-saved-value`,children:`Editing a saved value`}),`
`,(0,_.jsxs)(t.p,{children:[`When a form opens with a saved value, its option may be on a page that hasn't loaded yet. Pass it in `,(0,_.jsx)(t.code,{children:`initialOptions`}),` so the field shows its label straight away.`]}),`
`,(0,_.jsx)(c,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { RHFInfiniteSelect } from '@adhamaa/ui-kit/form'

<RHFInfiniteSelect name="contractorId" label="Contractor" loadOptions={loadContractors} />
`})}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsxs)(t.p,{children:[`Takes the props of `,(0,_.jsx)(t.strong,{children:`Select`}),` (or `,(0,_.jsx)(t.strong,{children:`MultiSelect`}),` with `,(0,_.jsx)(t.code,{children:`multiple`}),`), except `,(0,_.jsx)(t.code,{children:`data`}),` and the async props, which it manages. Plus:`]}),`
`,(0,_.jsx)(s,{of:f,include:[`loadOptions`,`initialOptions`,`debounceMs`,`multiple`]}),`
`,(0,_.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,_.jsxs)(t.p,{children:[`Same as `,(0,_.jsx)(t.strong,{children:`Select`}),`, or `,(0,_.jsx)(t.strong,{children:`MultiSelect`}),` with `,(0,_.jsx)(t.code,{children:`multiple`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`Same as `,(0,_.jsx)(t.strong,{children:`Select`}),` or `,(0,_.jsx)(t.strong,{children:`MultiSelect`}),`. Reaching the last option with the keyboard loads the next page, and a status in the list tells screen readers while it loads.`]}),`
`,(0,_.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Do`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Use it for lists that are too long to load at once: contractors, users, assets.`}),`
`,(0,_.jsx)(t.li,{children:`Return 20 or so options a page.`}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Don't`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`Don't use it for short, fixed lists. Use `,(0,_.jsx)(t.code,{children:`Select`}),`.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Select`}),` with the async props: if you'd rather manage paging yourself, for example with TanStack Query's `,(0,_.jsx)(t.code,{children:`useInfiniteQuery`}),`.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`MultiSelect`}),`: several values from a list you already have.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),l(),u()})))()}v();export{g as default};