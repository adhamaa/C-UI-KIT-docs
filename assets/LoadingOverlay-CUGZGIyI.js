import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-SWAFQvtI.js";import{i as u,n as d,r as f,t as p}from"./LoadingOverlay.stories-Br5epoJc.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`loadingoverlay`,children:`LoadingOverlay`}),`
`,(0,g.jsxs)(t.p,{children:[`Covers its parent with a translucent layer and a loader, so the content can't be used while it updates. The parent needs `,(0,g.jsx)(t.code,{children:`position: relative`}),`.`]}),`
`,(0,g.jsx)(o,{language:`tsx`,dark:!0,code:`import { LoadingOverlay } from '@adhamaa/ui-kit'`}),`
`,(0,g.jsx)(c,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,g.jsx)(t.h3,{id:`while-saving`,children:`While saving`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`<div style={{ position: 'relative' }}>
  <LoadingOverlay visible={mutation.isPending} label="Saving" />
  <PackageForm />
</div>
`})}),`
`,(0,g.jsx)(c,{of:f}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`blur`}),` (on by default) blurs the content underneath. Turn it off when people should still read the content while it refreshes.`]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsx)(s,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,g.jsxs)(t.p,{children:[`| Selector | Part |
| --- | --- |
| `,(0,g.jsx)(t.code,{children:`.kit-overlay`}),` | The layer (`,(0,g.jsx)(t.code,{children:`[data-blur]`}),` when blurred) |`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.p,{children:[`The loader inside has `,(0,g.jsx)(t.code,{children:`role="status"`}),` and is named by `,(0,g.jsx)(t.code,{children:`label`}),` ("Loading" by default), so screen readers announce it. The layer blocks pointer presses, but not the keyboard: disable the form's controls too if editing must stop.`]}),`
`,(0,g.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`Do`})}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Use it to cover one panel, table or form, not the whole page.`}),`
`]}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`Don't`})}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`Don't use it for the first load. Use `,(0,g.jsx)(t.code,{children:`Skeleton`}),`, which shows the layout.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Loader`}),`, `,(0,g.jsx)(t.strong,{children:`Skeleton`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`DataTable`}),`: has its own loading state.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),l(),u()})))()}_();export{h as default};