import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-C0i7n7Fz.js";import{a as u,i as d,n as f,r as p,t as m}from"./Skeleton.stories-ATdckw91.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:p}),`
`,(0,_.jsx)(t.h1,{id:`skeleton`,children:`Skeleton`}),`
`,(0,_.jsx)(t.p,{children:`A grey placeholder shape that stands in for content while it loads, so the page doesn't jump when the content arrives.`}),`
`,(0,_.jsx)(o,{language:`tsx`,dark:!0,code:`import { Skeleton } from '@adhamaa/ui-kit'`}),`
`,(0,_.jsx)(c,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(c,{of:f}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`shapes`,children:`Shapes`}),`
`,(0,_.jsxs)(t.p,{children:[`Set `,(0,_.jsx)(t.code,{children:`width`}),` and `,(0,_.jsx)(t.code,{children:`height`}),` (any CSS length, or pixels), `,(0,_.jsx)(t.code,{children:`circle`}),` for a circle of `,(0,_.jsx)(t.code,{children:`height`}),`, and `,(0,_.jsx)(t.code,{children:`radius`}),` for the corners. Build the same layout as the content that will load.`]}),`
`,(0,_.jsx)(c,{of:m}),`
`,(0,_.jsx)(t.h3,{id:`wrap-the-content`,children:`Wrap the content`}),`
`,(0,_.jsxs)(t.p,{children:[`Wrap the real content and pass `,(0,_.jsx)(t.code,{children:`visible`}),`: while `,(0,_.jsx)(t.code,{children:`true`}),`, the skeleton shows at the content's size. Once `,(0,_.jsx)(t.code,{children:`false`}),`, the content shows.`]}),`
`,(0,_.jsx)(c,{of:d}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`<Skeleton visible={query.isLoading}>
  <ContractSummary contract={query.data} />
</Skeleton>
`})}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(s,{of:p}),`
`,(0,_.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Selector`}),(0,_.jsx)(t.th,{children:`Part`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-skeleton`})}),(0,_.jsxs)(t.td,{children:[`The shape (`,(0,_.jsx)(t.code,{children:`[data-animate]`}),` while shimmering)`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-skeleton__ghost`})}),(0,_.jsx)(t.td,{children:`The hidden content inside, when wrapping`})]})]})]}),`
`,(0,_.jsxs)(t.p,{children:[`The shape uses the `,(0,_.jsx)(t.code,{children:`muted`}),` token.`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`Skeletons are hidden from screen readers (`,(0,_.jsx)(t.code,{children:`aria-hidden`}),`). Tell assistive technology that the region is loading another way, for example `,(0,_.jsx)(t.code,{children:`aria-busy`}),` on the container.`]}),`
`,(0,_.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Do`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Match the real layout closely: same number of lines, same avatar size.`}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Don't`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Don't use skeletons for content that loads in under 300ms.`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Loader`}),`, `,(0,_.jsx)(t.strong,{children:`LoadingOverlay`}),`.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),l(),u()})))()}v();export{g as default};