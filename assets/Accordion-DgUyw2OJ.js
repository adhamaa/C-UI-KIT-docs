import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-7uT58uVX.js";import{a as u,i as d,n as f,r as p,t as m}from"./Accordion.stories-DiB_LNSa.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:m}),`
`,(0,_.jsx)(t.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,_.jsx)(t.p,{children:`Sections that expand and collapse under their headings, like an FAQ or optional form sections.`}),`
`,(0,_.jsx)(o,{language:`tsx`,dark:!0,code:`import { Accordion } from '@adhamaa/ui-kit'`}),`
`,(0,_.jsx)(c,{of:p}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(i,{of:p}),`
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`items`,children:`Items`}),`
`,(0,_.jsxs)(t.p,{children:[`Each item is `,(0,_.jsx)(t.code,{children:`{ value, title, content }`}),`, plus optional `,(0,_.jsx)(t.code,{children:`icon`}),` and `,(0,_.jsx)(t.code,{children:`disabled`}),`. `,(0,_.jsx)(t.code,{children:`defaultValue`}),` (or `,(0,_.jsx)(t.code,{children:`value`}),` with `,(0,_.jsx)(t.code,{children:`onChange`}),`) is the list of open items.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`<Accordion items={faqs.map((f) => ({ value: f.id, title: f.question, content: f.answer }))} />
`})}),`
`,(0,_.jsx)(t.h3,{id:`separated`,children:`Separated`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`variant="separated"`}),` puts each item in its own card.`]}),`
`,(0,_.jsx)(c,{of:d}),`
`,(0,_.jsx)(t.h3,{id:`several-open`,children:`Several open`}),`
`,(0,_.jsxs)(t.p,{children:[`Only one item is open at a time unless you set `,(0,_.jsx)(t.code,{children:`multiple`}),`.`]}),`
`,(0,_.jsx)(c,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(s,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,_.jsxs)(t.p,{children:[`| Selector | `,(0,_.jsx)(t.code,{children:`classNames`}),` key | Part |
| --- | --- | --- |
| `,(0,_.jsx)(t.code,{children:`.kit-accordion`}),` | `,(0,_.jsx)(t.code,{children:`root`}),` | The list |
| `,(0,_.jsx)(t.code,{children:`.kit-accordion__item`}),` | `,(0,_.jsx)(t.code,{children:`item`}),` | One section |
| `,(0,_.jsx)(t.code,{children:`.kit-accordion__trigger`}),` | `,(0,_.jsx)(t.code,{children:`trigger`}),` | The heading button |
| `,(0,_.jsx)(t.code,{children:`.kit-accordion__chevron`}),` | — | The arrow |
| `,(0,_.jsx)(t.code,{children:`.kit-accordion__panel`}),` | `,(0,_.jsx)(t.code,{children:`panel`}),` | The content |
| `,(0,_.jsx)(t.code,{children:`[data-open]`}),` | — | On an open item (from ui-sdk) |`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`Built on `,(0,_.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/accordion`,rel:`nofollow`,children:`ui-sdk Accordion`}),`, which follows the WAI-ARIA accordion pattern. Each title is a button inside a heading, with `,(0,_.jsx)(t.code,{children:`aria-expanded`}),`. Set `,(0,_.jsx)(t.code,{children:`headingLevel`}),` (3 by default) so the headings fit the page outline.`]}),`
`,(0,_.jsx)(t.p,{children:`| Key | Does |
| --- | --- |
| Enter, Space | Opens or closes the focused item |
| ArrowDown, ArrowUp | Move between item headings |
| Home, End | First or last heading |`}),`
`,(0,_.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Do`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Write titles that say what's inside, so people can scan them.`}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Don't`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Don't hide information everyone needs inside an accordion.`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Tabs`}),`: one panel at a time, with the labels in a row.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),l(),u()})))()}v();export{g as default};