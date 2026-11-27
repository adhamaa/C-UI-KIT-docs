import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-B-yuF967.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./Loader.stories-B5mKSScX.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:f}),`
`,(0,v.jsx)(t.h1,{id:`loader`,children:`Loader`}),`
`,(0,v.jsx)(t.p,{children:`Shows that something is loading: three staggered dots, or a spinning ring.`}),`
`,(0,v.jsx)(o,{language:`tsx`,dark:!0,code:`import { Loader } from '@adhamaa/ui-kit'`}),`
`,(0,v.jsx)(c,{of:u}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`You need`}),(0,v.jsx)(t.th,{children:`Use`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`A short wait with no layout to show`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`Loader`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`The shape of content that's coming`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`Skeleton`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`To block a panel or form while it works`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`LoadingOverlay`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:`A button that's working`}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`Button`}),` with `,(0,v.jsx)(t.code,{children:`loading`}),`, or an async `,(0,v.jsx)(t.code,{children:`onClick`})]})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,v.jsx)(c,{of:m}),`
`,(0,v.jsx)(i,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,v.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`size`}),` goes from `,(0,v.jsx)(t.code,{children:`xs`}),` to `,(0,v.jsx)(t.code,{children:`xl`}),`. `,(0,v.jsx)(t.code,{children:`color`}),` takes any CSS colour. It defaults to the `,(0,v.jsx)(t.code,{children:`primary`}),` token, and to the text colour inside a button.`]}),`
`,(0,v.jsx)(c,{of:d}),`
`,(0,v.jsx)(t.h3,{id:`in-context`,children:`In context`}),`
`,(0,v.jsxs)(t.p,{children:[`Pass `,(0,v.jsx)(t.code,{children:`label={null}`}),` when text nearby already says what's loading, so screen readers don't hear it twice.`]}),`
`,(0,v.jsx)(c,{of:h}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(s,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Selector`}),(0,v.jsx)(t.th,{children:`Part`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`.kit-loader`})}),(0,v.jsxs)(t.td,{children:[`The loader (`,(0,v.jsx)(t.code,{children:`[data-variant]`}),`, `,(0,v.jsx)(t.code,{children:`[data-size]`}),`)`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`.kit-loader__dot`})}),(0,v.jsx)(t.td,{children:`One dot`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`.kit-loader__ring`})}),(0,v.jsx)(t.td,{children:`The ring`})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.p,{children:[`The loader has `,(0,v.jsx)(t.code,{children:`role="status"`}),` and is named by `,(0,v.jsx)(t.code,{children:`label`}),` ("Loading" by default), so screen readers announce it. With `,(0,v.jsx)(t.code,{children:`label={null}`}),` it's hidden from assistive technology. The animation slows down for people who ask for reduced motion.`]}),`
`,(0,v.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Do`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Say what's loading when the wait may be long: "Loading work orders…".`}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Don't`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Don't show a loader for waits under about 300ms. It flickers.`}),`
`,(0,v.jsxs)(t.li,{children:[`Don't use a loader where the page layout is known. A `,(0,v.jsx)(t.code,{children:`Skeleton`}),` keeps the page from jumping.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Skeleton`}),`, `,(0,v.jsx)(t.strong,{children:`LoadingOverlay`}),`, `,(0,v.jsx)(t.strong,{children:`Button`}),`.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),l(),p()})))()}y();export{_ as default};