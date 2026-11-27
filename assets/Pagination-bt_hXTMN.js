import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-DItH5EBd.js";import{a as u,i as d,n as f,r as p,t as m}from"./Pagination.stories-BORwx6nW.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,_.jsx)(t.p,{children:`Page buttons with previous and next, for lists and tables split into pages.`}),`
`,(0,_.jsx)(o,{language:`tsx`,dark:!0,code:`import { Pagination } from '@adhamaa/ui-kit'`}),`
`,(0,_.jsx)(c,{of:p}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(i,{of:p}),`
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`controlled`,children:`Controlled`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`total`}),` is the number of pages. `,(0,_.jsx)(t.code,{children:`page`}),` and `,(0,_.jsx)(t.code,{children:`onChange`}),` use page numbers starting at 1.`]}),`
`,(0,_.jsx)(c,{of:m}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`const [page, setPage] = useState(1)
const query = useQuery({ queryKey: ['packages', page], queryFn: () => api.packages({ page }) })

<Pagination total={query.data?.meta.last_page ?? 1} page={page} onChange={setPage} />
`})}),`
`,(0,_.jsx)(t.h3,{id:`siblings-and-boundaries`,children:`Siblings and boundaries`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`siblings`}),` is how many pages show either side of the current one, and `,(0,_.jsx)(t.code,{children:`boundaries`}),` how many always show at each end. Gaps show as an ellipsis.`]}),`
`,(0,_.jsx)(c,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(s,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Selector`}),(0,_.jsx)(t.th,{children:`Part`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-pagination`})}),(0,_.jsxs)(t.td,{children:[`The `,(0,_.jsx)(t.code,{children:`<nav>`})]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-pagination__list`})}),(0,_.jsx)(t.td,{children:`The list of pages`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-pagination__link`})}),(0,_.jsxs)(t.td,{children:[`A page button (`,(0,_.jsx)(t.code,{children:`[aria-current]`}),` on the current page)`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-pagination__control`})}),(0,_.jsx)(t.td,{children:`Previous and next`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-pagination__ellipsis`})}),(0,_.jsx)(t.td,{children:`A gap`})]})]})]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`Built on `,(0,_.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/pagination`,rel:`nofollow`,children:`ui-sdk Pagination`}),`. It's a `,(0,_.jsx)(t.code,{children:`<nav>`}),` named "Pagination" (change it with `,(0,_.jsx)(t.code,{children:`aria-label`}),` when there's more than one). The current page has `,(0,_.jsx)(t.code,{children:`aria-current="page"`}),`, and the arrows are named "Previous page" and "Next page".`]}),`
`,(0,_.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`DataTable`}),`: has pagination built in.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),l(),u()})))()}v();export{g as default};