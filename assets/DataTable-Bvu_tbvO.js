import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-D8m9WcGw.js";import{a as l,c as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./DataTable.stories-D0fl4own.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{of:m}),`
`,(0,y.jsx)(t.h1,{id:`datatable`,children:`DataTable`}),`
`,(0,y.jsx)(t.p,{children:`A data grid built on AG Grid Community, with a toolbar (title, search, buttons, refresh), row actions, number formatting, and client-side or server-side pagination. It follows the kit's theme, dark mode included.`}),`
`,(0,y.jsx)(a,{language:`tsx`,dark:!0,code:`import { DataTable } from '@adhamaa/ui-kit/table'`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`ag-grid-community`}),` and `,(0,y.jsx)(t.code,{children:`ag-grid-react`}),` are optional peer dependencies of the kit. Install them in apps that use the `,(0,y.jsx)(t.code,{children:`/table`}),` entry.`]}),`
`,(0,y.jsx)(s,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,y.jsx)(t.h3,{id:`basic-usage`,children:`Basic usage`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`data`}),` is the rows and `,(0,y.jsx)(t.code,{children:`columns`}),` is a list of AG Grid column definitions. Give rows a stable id with `,(0,y.jsx)(t.code,{children:`tableSettings.getRowId`}),`.`]}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`type Pkg = { uuid: string; package_no: string; name: string; contract_amount: number }

<DataTable<Pkg>
  title="Packages"
  data={packages}
  columns={[
    { field: 'package_no', headerName: 'Package No.' },
    { field: 'name', headerName: 'Name', minWidth: 220 },
    { field: 'contract_amount', headerName: 'Contract Amount', type: 'currency' },
  ]}
  buttons={[{ label: 'Add package', icon: <PlusIcon />, onClick: openCreate }]}
  refresh={{ onClick: () => refetch(), isFetching }}
  tableSettings={{ getRowId: (p) => p.data.uuid }}
/>
`})}),`
`,(0,y.jsx)(t.h3,{id:`toolbar`,children:`Toolbar`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.code,{children:`title`}),` on the left.`]}),`
`,(0,y.jsxs)(t.li,{children:[`A search box (`,(0,y.jsx)(t.code,{children:`hasFilters`}),`, on by default) that filters every column on the client, or calls `,(0,y.jsx)(t.code,{children:`onSearchChange`}),` on the server.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.code,{children:`buttons`}),` on the right. Each is `,(0,y.jsx)(t.code,{children:`{ label, onClick, icon, variant, disabled }`}),`, or `,(0,y.jsx)(t.code,{children:`{ type: 'custom', component }`}),` for your own.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.code,{children:`refresh`}),`, a button that spins while `,(0,y.jsx)(t.code,{children:`isFetching`}),`, and `,(0,y.jsx)(t.code,{children:`hasReport`}),`, a print button.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.code,{children:`createRowBtn`}),`, a button under the grid for adding a row.`]}),`
`]}),`
`,(0,y.jsx)(t.h3,{id:`number-formatting`,children:`Number formatting`}),`
`,(0,y.jsxs)(t.p,{children:[`Set `,(0,y.jsx)(t.code,{children:`type`}),` on a column to format it: `,(0,y.jsx)(t.code,{children:`currency`}),` (Malaysian ringgit by default), `,(0,y.jsx)(t.code,{children:`percentage`}),` or `,(0,y.jsx)(t.code,{children:`number`}),`. Set `,(0,y.jsx)(t.code,{children:`numberFormatting`}),` in `,(0,y.jsx)(t.code,{children:`tableSettings`}),` to change the locale or currency.`]}),`
`,(0,y.jsxs)(t.p,{children:[`With `,(0,y.jsx)(t.code,{children:`tableSettings.autoFormatColumns`}),`, columns named like amounts, percentages or counts are formatted without a `,(0,y.jsx)(t.code,{children:`type`}),`, as SWIFTO did.`]}),`
`,(0,y.jsx)(s,{of:g}),`
`,(0,y.jsx)(t.h3,{id:`row-actions`,children:`Row actions`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`rowActions`}),` returns, for each row, the items and how to show them: `,(0,y.jsx)(t.code,{children:`type: 'tripleDot'`}),` for a ⋮ menu, or `,(0,y.jsx)(t.code,{children:`type: 'icon'`}),` for one icon button per action. They sit in a column pinned to the right.`]}),`
`,(0,y.jsx)(s,{of:d}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`rowActions={({ rowData }) => ({
  options: { type: 'tripleDot' },
  items: [
    { label: 'Open', onClick: () => navigate(\`/packages/\${rowData.uuid}\`) },
    { label: 'Delete', danger: true, onClick: () => confirmDelete(rowData) },
  ],
})}
`})}),`
`,(0,y.jsx)(t.h3,{id:`server-side-paging-and-search`,children:`Server-side paging and search`}),`
`,(0,y.jsxs)(t.p,{children:[`With `,(0,y.jsx)(t.code,{children:`serverSide: true`}),`, the table shows `,(0,y.jsx)(t.code,{children:`data`}),` as the current page and asks you for others:`]}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.code,{children:`totalRows`}),`: the total on the server.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.code,{children:`currentPage`}),` and `,(0,y.jsx)(t.code,{children:`onPageChange`}),`: pages start at `,(0,y.jsx)(t.strong,{children:`0`}),` here (unlike `,(0,y.jsx)(t.code,{children:`Pagination`}),`, which starts at 1).`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.code,{children:`onSearchChange`}),`: the search text, debounced by `,(0,y.jsx)(t.code,{children:`searchDebounceMs`}),` (500 by default).`]}),`
`]}),`
`,(0,y.jsx)(s,{of:h}),`
`,(0,y.jsx)(t.h3,{id:`selection-and-totals`,children:`Selection and totals`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`rowSelection`}),` (`,(0,y.jsx)(t.code,{children:`'single'`}),`, `,(0,y.jsx)(t.code,{children:`'multiple'`}),`, or AG Grid's options) adds checkboxes, and `,(0,y.jsx)(t.code,{children:`onSelectionChanged`}),` reports them. `,(0,y.jsx)(t.code,{children:`pinnedBottomRowData`}),` pins rows to the bottom, for totals.`]}),`
`,(0,y.jsx)(s,{of:p}),`
`,(0,y.jsx)(t.h3,{id:`size`,children:`Size`}),`
`,(0,y.jsxs)(t.p,{children:[`By default the grid is capped at 62% of the viewport height (`,(0,y.jsx)(t.code,{children:`tableContainerMaxHeight`}),`). Set `,(0,y.jsx)(t.code,{children:`height`}),` for a fixed height, or turn off `,(0,y.jsx)(t.code,{children:`pagination`}),` to show every row.`]}),`
`,(0,y.jsx)(t.h3,{id:`anything-else`,children:`Anything else`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`gridRef`}),` gives you the AG Grid API (`,(0,y.jsx)(t.code,{children:`gridRef.current.api`}),`). `,(0,y.jsx)(t.code,{children:`tableSettings.gridOptions`}),` passes any other AG Grid option, last, so it wins. For cell editing, see `,(0,y.jsx)(t.code,{children:`editType`}),`, `,(0,y.jsx)(t.code,{children:`onCellValueChanged`}),`, and the `,(0,y.jsx)(t.code,{children:`NumberCellEditor`}),` and `,(0,y.jsx)(t.code,{children:`TextCellEditor`}),` from `,(0,y.jsx)(t.code,{children:`@adhamaa/ui-kit/table`}),`.`]}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(o,{of:m}),`
`,(0,y.jsx)(t.h3,{id:`tablesettings`,children:`tableSettings`}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Setting`}),(0,y.jsx)(t.th,{children:`Default`}),(0,y.jsx)(t.th,{children:`Description`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`pagination`})}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`true`})}),(0,y.jsx)(t.td,{children:`Split rows into pages`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`paginationPageSize`})}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`20`})}),(0,y.jsx)(t.td,{children:`Rows a page`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`tableContainerMaxHeight`})}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`true`})}),(0,y.jsx)(t.td,{children:`Cap the grid at 62% of the viewport height`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`height`})}),(0,y.jsx)(t.td,{children:`—`}),(0,y.jsx)(t.td,{children:`Fixed grid height, any CSS length. Overrides the cap`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`getRowId`})}),(0,y.jsx)(t.td,{children:`—`}),(0,y.jsx)(t.td,{children:`Stable row ids, so updates keep selection and scroll`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`rowSelection`}),`, `,(0,y.jsx)(t.code,{children:`onSelectionChanged`})]}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`false`})}),(0,y.jsx)(t.td,{children:`Row selection`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`enableSorting`}),` / `,(0,y.jsx)(t.code,{children:`enableFiltering`})]}),(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`true`}),` / `,(0,y.jsx)(t.code,{children:`false`})]}),(0,y.jsx)(t.td,{children:`Column sorting and AG Grid column filters`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`showRowNumbers`})}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`true`})}),(0,y.jsx)(t.td,{children:`A "No." column with the row number`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`rowHeight`}),`, `,(0,y.jsx)(t.code,{children:`headerHeight`})]}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`45`})}),(0,y.jsx)(t.td,{children:`Heights in px`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`serverSide`}),`, `,(0,y.jsx)(t.code,{children:`totalRows`}),`, `,(0,y.jsx)(t.code,{children:`currentPage`}),`, `,(0,y.jsx)(t.code,{children:`onPageChange`})]}),(0,y.jsx)(t.td,{children:`—`}),(0,y.jsx)(t.td,{children:`Server-side paging (pages start at 0)`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`onSearchChange`}),`, `,(0,y.jsx)(t.code,{children:`searchDebounceMs`}),`, `,(0,y.jsx)(t.code,{children:`initialSearchValue`})]}),(0,y.jsxs)(t.td,{children:[`— / `,(0,y.jsx)(t.code,{children:`500`})]}),(0,y.jsx)(t.td,{children:`Search`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`pinnedBottomRowData`})}),(0,y.jsx)(t.td,{children:`—`}),(0,y.jsx)(t.td,{children:`Rows pinned to the bottom`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`autoFormatColumns`}),`, `,(0,y.jsx)(t.code,{children:`numberFormatting`})]}),(0,y.jsx)(t.td,{children:`—`}),(0,y.jsx)(t.td,{children:`Number formatting`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`editType`}),`, `,(0,y.jsx)(t.code,{children:`singleClickEdit`}),`, `,(0,y.jsx)(t.code,{children:`onCellValueChanged`}),`…`]}),(0,y.jsx)(t.td,{children:`—`}),(0,y.jsx)(t.td,{children:`Editing`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`gridOptions`})}),(0,y.jsx)(t.td,{children:`—`}),(0,y.jsx)(t.td,{children:`Any other AG Grid option`})]})]})]}),`
`,(0,y.jsx)(t.h2,{id:`theming-and-styling`,children:`Theming and styling`}),`
`,(0,y.jsxs)(t.p,{children:[`The grid uses an AG Grid theme built from the kit's CSS variables, so it follows the app's theme and colour scheme. Use `,(0,y.jsx)(t.code,{children:`createAgGridTheme()`}),` for your own variant, or pass AG Grid's own `,(0,y.jsx)(t.code,{children:`theme`}),`. The tokens `,(0,y.jsx)(t.code,{children:`tableHeader`}),`, `,(0,y.jsx)(t.code,{children:`tableHeaderForeground`}),` and `,(0,y.jsx)(t.code,{children:`tableRowHover`}),` style the header and row hover.`]}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`classNames`}),` adds classes to the toolbar's parts, and `,(0,y.jsx)(t.code,{children:`className`}),` to the wrapper.`]}),`
`,(0,y.jsx)(t.h2,{id:`translation`,children:`Translation`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`labels`}),` replaces the built-in text: `,(0,y.jsx)(t.code,{children:`search`}),`, `,(0,y.jsx)(t.code,{children:`clearSearch`}),`, `,(0,y.jsx)(t.code,{children:`refresh`}),`, `,(0,y.jsx)(t.code,{children:`report`}),`, `,(0,y.jsx)(t.code,{children:`rowNumber`}),`, `,(0,y.jsx)(t.code,{children:`rowActions`}),`, and `,(0,y.jsx)(t.code,{children:`records`}),`, a function that writes the record summary ("Record 1 to 20 out of 57" by default).`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.p,{children:[`AG Grid provides grid keyboard navigation (arrow keys between cells, Enter to edit) and ARIA grid roles. The kit's toolbar controls are named: the search box is "Search list", and the refresh and print buttons are named after what they do. Row action menus are named with `,(0,y.jsx)(t.code,{children:`labels.rowActions`}),`.`]}),`
`,(0,y.jsx)(s,{of:l}),`
`,(0,y.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Do`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Keep the row's main action obvious: make the key column a link, or put Open first in the row actions.`}),`
`,(0,y.jsx)(t.li,{children:`Use server-side paging for more than a few thousand rows.`}),`
`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Don't`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Don't show more than about eight columns. Hide the rest or put them on the detail page.`}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Pagination`}),`: for lists that aren't tables.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`EmptyState`}),`: for a table with no rows yet.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`ActionMenu`}),`: the row ⋮ menu.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),c(),u()})))()}b();export{v as default};