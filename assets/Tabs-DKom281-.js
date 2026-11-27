import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-BPgqBUap.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./Tabs.stories-BN8GSTaU.js";function v(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a,{of:u}),`
`,(0,b.jsx)(t.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,b.jsx)(t.p,{children:`Switches between panels of related content on the same page, like a record's Summary, Routes and Documents.`}),`
`,(0,b.jsx)(o,{language:`tsx`,dark:!0,code:`import { Tabs } from '@adhamaa/ui-kit'`}),`
`,(0,b.jsx)(c,{of:h}),`
`,(0,b.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(i,{of:h}),`
`,(0,b.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,b.jsx)(t.h3,{id:`tabs-as-data`,children:`Tabs as data`}),`
`,(0,b.jsxs)(t.p,{children:[`Each tab is `,(0,b.jsx)(t.code,{children:`{ value, label, content }`}),`, plus optional `,(0,b.jsx)(t.code,{children:`icon`}),`, `,(0,b.jsx)(t.code,{children:`rightSection`}),` (like a count) and `,(0,b.jsx)(t.code,{children:`disabled`}),`. Use `,(0,b.jsx)(t.code,{children:`defaultValue`}),` to pick the first tab, or `,(0,b.jsx)(t.code,{children:`value`}),` and `,(0,b.jsx)(t.code,{children:`onChange`}),` to control it, for example to keep the tab in the URL.`]}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`<Tabs
  aria-label="Package"
  value={searchParams.get('tab') ?? 'summary'}
  onChange={(tab) => setSearchParams({ tab })}
  tabs={[
    { value: 'summary', label: 'Summary', content: <Summary /> },
    { value: 'routes', label: 'Routes', rightSection: <Badge>12</Badge>, content: <Routes /> },
  ]}
/>
`})}),`
`,(0,b.jsx)(t.h3,{id:`variants-and-orientation`,children:`Variants and orientation`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`variant="pills"`}),` fills the selected tab. `,(0,b.jsx)(t.code,{children:`orientation="vertical"`}),` stacks the tabs on the left. `,(0,b.jsx)(t.code,{children:`grow`}),` stretches them across the list.`]}),`
`,(0,b.jsx)(c,{of:p}),`
`,(0,b.jsx)(c,{of:m}),`
`,(0,b.jsx)(c,{of:_}),`
`,(0,b.jsx)(t.h3,{id:`icons-and-a-list-action`,children:`Icons and a list action`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`listRightSection`}),` puts content at the end of the tab list, like a New button.`]}),`
`,(0,b.jsx)(c,{of:g}),`
`,(0,b.jsx)(t.h3,{id:`tabs-that-only-switch-state`,children:`Tabs that only switch state`}),`
`,(0,b.jsxs)(t.p,{children:[`Leave out `,(0,b.jsx)(t.code,{children:`content`}),` and render what the tabs control yourself.`]}),`
`,(0,b.jsx)(c,{of:f}),`
`,(0,b.jsxs)(t.p,{children:[`Hidden panels unmount by default. Set `,(0,b.jsx)(t.code,{children:`keepMounted`}),` to keep their state, like a half-filled form, when switching.`]}),`
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsx)(s,{of:u}),`
`,(0,b.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`Selector`}),(0,b.jsxs)(t.th,{children:[(0,b.jsx)(t.code,{children:`classNames`}),` key`]}),(0,b.jsx)(t.th,{children:`Part`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-tabs`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`root`})}),(0,b.jsxs)(t.td,{children:[`The wrapper (`,(0,b.jsx)(t.code,{children:`[data-variant]`}),`, `,(0,b.jsx)(t.code,{children:`[data-orientation]`}),`)`]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-tabs__list`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`list`})}),(0,b.jsxs)(t.td,{children:[`The tab list (`,(0,b.jsx)(t.code,{children:`--grow`}),` with `,(0,b.jsx)(t.code,{children:`grow`}),`)`]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-tabs__tab`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`tab`})}),(0,b.jsx)(t.td,{children:`One tab`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-tabs__indicator`})}),(0,b.jsx)(t.td,{children:`—`}),(0,b.jsx)(t.td,{children:`The underline or pill that moves to the selected tab`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-tabs__panel`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`panel`})}),(0,b.jsx)(t.td,{children:`A panel`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`[data-selected]`})}),(0,b.jsx)(t.td,{children:`—`}),(0,b.jsx)(t.td,{children:`On the selected tab (from ui-sdk)`})]})]})]}),`
`,(0,b.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,b.jsxs)(t.p,{children:[`Built on `,(0,b.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/tabs`,rel:`nofollow`,children:`ui-sdk Tabs`}),`, which follows the WAI-ARIA tabs pattern. The list is a `,(0,b.jsx)(t.code,{children:`tablist`}),` named by `,(0,b.jsx)(t.code,{children:`aria-label`}),`, and each panel is labelled by its tab. The tab list is one Tab stop.`]}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`Key`}),(0,b.jsx)(t.th,{children:`Does`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`ArrowLeft, ArrowRight (ArrowUp, ArrowDown when vertical)`}),(0,b.jsx)(t.td,{children:`Move to the next or previous tab and show it`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`Home, End`}),(0,b.jsx)(t.td,{children:`First or last tab`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`Tab`}),(0,b.jsx)(t.td,{children:`Moves from the tab list into the panel`})]})]})]}),`
`,(0,b.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,b.jsx)(t.p,{children:(0,b.jsx)(t.strong,{children:`Do`})}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsx)(t.li,{children:`Keep labels short, and the number of tabs under about six.`}),`
`,(0,b.jsxs)(t.li,{children:[`Name the tab list with `,(0,b.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`]}),`
`,(0,b.jsx)(t.p,{children:(0,b.jsx)(t.strong,{children:`Don't`})}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsx)(t.li,{children:`Don't use tabs for steps that must be done in order. Use a stepper or separate pages.`}),`
`,(0,b.jsx)(t.li,{children:`Don't use tabs to navigate between pages of the app.`}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`SegmentedControl`}),`: switch a view without separate panels.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Accordion`}),`: when several sections can be open at once.`]}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),r(),l(),d()})))()}x();export{y as default};