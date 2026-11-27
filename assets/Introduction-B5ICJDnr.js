import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,u as a}from"./blocks-TMb5GUqB.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Introduction`}),`
`,(0,c.jsx)(t.h1,{id:`infracivic-ui-kit`,children:`INFRACIVIC UI Kit`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@adhamaa/ui-kit`}),` is a set of basic React components shared by every INFRACIVIC app. It covers:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Form fields:`}),` text, number, password, textarea, select, multi-select, autocomplete, infinite select, checkbox, switch, radio, chip, segmented control, date, month, time, file and colour.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`react-hook-form bindings`}),` for every field, plus `,(0,c.jsx)(t.code,{children:`FormFields`}),` and `,(0,c.jsx)(t.code,{children:`FormDialog`}),` for config-driven forms.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`DataTable`}),`, built on AG Grid Community, with a toolbar, row actions, number formatting and client or server pagination.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Overlays:`}),` `,(0,c.jsx)(t.code,{children:`Dialog`}),`, `,(0,c.jsx)(t.code,{children:`ConfirmDialog`}),`, `,(0,c.jsx)(t.code,{children:`modals.open()`}),`, `,(0,c.jsx)(t.code,{children:`ActionMenu`}),` (flat, or grouped under headings with descriptions), `,(0,c.jsx)(t.code,{children:`Popover`}),`, `,(0,c.jsx)(t.code,{children:`toast()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Display:`}),` `,(0,c.jsx)(t.code,{children:`Badge`}),`, `,(0,c.jsx)(t.code,{children:`Card`}),`, `,(0,c.jsx)(t.code,{children:`Breadcrumb`}),`, `,(0,c.jsx)(t.code,{children:`EmptyState`}),`, `,(0,c.jsx)(t.code,{children:`Timeline`}),`, `,(0,c.jsx)(t.code,{children:`ImagePreviewer`}),`, `,(0,c.jsx)(t.code,{children:`Pagination`}),`, `,(0,c.jsx)(t.code,{children:`Loader`}),`, `,(0,c.jsx)(t.code,{children:`Avatar`}),`, `,(0,c.jsx)(t.code,{children:`Skeleton`}),`, `,(0,c.jsx)(t.code,{children:`LoadingOverlay`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Navigation and disclosure:`}),` `,(0,c.jsx)(t.code,{children:`Tabs`}),`, `,(0,c.jsx)(t.code,{children:`Accordion`}),`, `,(0,c.jsx)(t.code,{children:`Tooltip`}),`, `,(0,c.jsx)(t.code,{children:`ScrollArea`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The behaviour (keyboard handling, focus, ARIA) comes from `,(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@ui-sdk/react`,rel:`nofollow`,children:`ui-sdk`}),`. The kit adds a consistent look and simple, prop-based APIs on top.`]}),`
`,(0,c.jsx)(t.h2,{id:`built-to-be-themed`,children:`Built to be themed`}),`
`,(0,c.jsxs)(t.p,{children:[`Every colour, radius and font comes from CSS variables. Each app applies its own brand with `,(0,c.jsx)(t.code,{children:`defineTheme()`}),` or a few lines of CSS, and every component follows it, the data table included. Use the `,(0,c.jsx)(t.strong,{children:`Theme`}),` and `,(0,c.jsx)(t.strong,{children:`Scheme`}),` switches in the toolbar above to see the same components as SWIFTO, or in dark mode.`]}),`
`,(0,c.jsx)(t.h2,{id:`where-to-go-next`,children:`Where to go next`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Getting started:`}),` install the package, load the styles, add the provider.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Theming:`}),` brand colours, dark mode and the AG Grid theme.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Forms with react-hook-form:`}),` the `,(0,c.jsx)(t.code,{children:`RHF*`}),` fields and config-driven forms.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Migrating from SWIFTO:`}),` how the old Mantine components map onto the kit.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Components:`}),` every component, with live controls and a props table.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`requirements`,children:`Requirements`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`React 19 or newer (a ui-sdk requirement).`}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`react-hook-form`}),` 7.50 or newer, only for `,(0,c.jsx)(t.code,{children:`@adhamaa/ui-kit/form`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ag-grid-community`}),` and `,(0,c.jsx)(t.code,{children:`ag-grid-react`}),` 35 or 36, only for `,(0,c.jsx)(t.code,{children:`@adhamaa/ui-kit/table`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Any framework: Next.js (App or Pages router), Vite or anything else. Every component is a client component.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};