# DataTable

Import: `import { DataTable } from '@adhamaa/ui-kit/table'`

A data grid built on AG Grid Community, with a toolbar (title, search, buttons, refresh), row actions, number formatting, and client-side or server-side pagination. It follows the kit's theme, dark mode included.

```tsx
import { DataTable } from '@adhamaa/ui-kit/table'
```

`ag-grid-community` and `ag-grid-react` are optional peer dependencies of the kit. Install them in apps that use the `/table` entry.

```tsx
const ClientSide = () => <DataTable
    data={Array.from({ length: 57 }, (_, i) => ({
      uuid: `pkg-${i + 1}`,
      package_no: `PKG-${String(i + 1).padStart(3, '0')}`,
      name: `Road upgrade section ${i + 1}`,
      state: ['Selangor', 'Johor', 'Perak', 'Pahang'][i % 4],
      contract_amount: 150000 + i * 23750.5,
      progress_percentage: (i * 7) % 101,
      length_km: 2 + (i % 9) * 1.5,
      status: statuses[i % 4],
    }))}
    columns={[
      { field: 'package_no', headerName: 'Package No.' },
      { field: 'name', headerName: 'Name', minWidth: 220 },
      { field: 'state', headerName: 'State' },
      {
        field: 'contract_amount',
        headerName: 'Contract Amount',
        type: 'currency',
      },
      {
        field: 'progress_percentage',
        headerName: 'Progress',
        type: 'percentage',
      },
      { field: 'length_km', headerName: 'Length (km)', type: 'number' },
    ]}
    title="Packages"
    buttons={[
      {
        label: 'Add package',
        icon: <icons.PlusIcon />,
        onClick: () => toast('Add package'),
      },
    ]}
    refresh={{ onClick: () => {} }}
    rowActions={({ rowData }) => ({
      options: { type: 'tripleDot' },
      items: [
        { label: 'Open', onClick: () => toast(`Open ${rowData.package_no}`) },
        { label: 'Duplicate' },
        { label: 'Delete', danger: true },
      ],
    })}
    tableSettings={{ getRowId: (p) => p.data.uuid }} />;
```

## Examples

### Basic usage

`data` is the rows and `columns` is a list of AG Grid column definitions. Give rows a stable id with `tableSettings.getRowId`.

```tsx
type Pkg = { uuid: string; package_no: string; name: string; contract_amount: number }

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
```

### Toolbar

- `title` on the left.
- A search box (`hasFilters`, on by default) that filters every column on the client, or calls `onSearchChange` on the server.
- `buttons` on the right. Each is `{ label, onClick, icon, variant, disabled }`, or `{ type: 'custom', component }` for your own.
- `refresh`, a button that spins while `isFetching`, and `hasReport`, a print button.
- `createRowBtn`, a button under the grid for adding a row.

### Number formatting

Set `type` on a column to format it: `currency` (Malaysian ringgit by default), `percentage` or `number`. Set `numberFormatting` in `tableSettings` to change the locale or currency.

With `tableSettings.autoFormatColumns`, columns named like amounts, percentages or counts are formatted without a `type`, as SWIFTO did.

```tsx
const AutoFormattedColumns = () => <DataTable
    data={rows.slice(0, 10)}
    columns={[
      { field: 'package_no', headerName: 'Package No.' },
      { field: 'contract_amount', headerName: 'Contract Amount' },
      { field: 'progress_percentage', headerName: 'Progress %' },
      { field: 'length_km', headerName: 'Length km' },
    ]}
    title="Auto-formatted (SWIFTO behaviour)"
    hasFilters={false}
    tableSettings={{
      autoFormatColumns: true,
      pagination: false,
      tableContainerMaxHeight: false,
      height: 420,
    }} />;
```

### Row actions

`rowActions` returns, for each row, the items and how to show them: `type: 'tripleDot'` for a ⋮ menu, or `type: 'icon'` for one icon button per action. They sit in a column pinned to the right.

```tsx
const IconActions = () => <DataTable
    data={rows.slice(0, 8)}
    columns={[
      { field: 'package_no', headerName: 'Package No.' },
      { field: 'status', headerName: 'Status' },
    ]}
    hasFilters={false}
    rowActions={() => ({
      options: { type: 'icon' },
      items: [
        { label: 'Refresh row', icon: <icons.RefreshIcon /> },
        { label: 'Remove', icon: <icons.CloseIcon />, danger: true },
      ],
    })}
    tableSettings={{ pagination: false, height: 380 }} />;
```

```tsx
rowActions={({ rowData }) => ({
  options: { type: 'tripleDot' },
  items: [
    { label: 'Open', onClick: () => navigate(`/packages/${rowData.uuid}`) },
    { label: 'Delete', danger: true, onClick: () => confirmDelete(rowData) },
  ],
})}
```

### Server-side paging and search

With `serverSide: true`, the table shows `data` as the current page and asks you for others:

- `totalRows`: the total on the server.
- `currentPage` and `onPageChange`: pages start at **0** here (unlike `Pagination`, which starts at 1).
- `onSearchChange`: the search text, debounced by `searchDebounceMs` (500 by default).

```tsx
const ServerSide = () => {
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')
  const filtered = useMemo(
    () =>
      rows.filter((r) => r.name.toLowerCase().includes(search.toLowerCase())),
    [search],
  )
  return (
    <DataTable<Pkg>
      title="Server-side paging"
      data={filtered.slice(page * 10, page * 10 + 10)}
      columns={[
        { field: 'package_no', headerName: 'Package No.' },
        { field: 'name', headerName: 'Name' },
        { field: 'contract_amount', headerName: 'Amount', type: 'currency' },
      ]}
      tableSettings={{
        serverSide: true,
        paginationPageSize: 10,
        totalRows: filtered.length,
        currentPage: page,
        onPageChange: setPage,
        onSearchChange: (value) => {
          setSearch(value)
          setPage(0)
        },
      }}
    />
  )
};
```

### Selection and totals

`rowSelection` (`'single'`, `'multiple'`, or AG Grid's options) adds checkboxes, and `onSelectionChanged` reports them. `pinnedBottomRowData` pins rows to the bottom, for totals.

```tsx
const SelectionAndTotals = () => <DataTable
    data={rows.slice(0, 6)}
    columns={[
      { field: 'package_no', headerName: 'Package No.' },
      { field: 'contract_amount', headerName: 'Amount', type: 'currency' },
    ]}
    title="Selection and pinned totals"
    hasFilters={false}
    tableSettings={{
      rowSelection: { mode: 'multiRow' },
      pagination: false,
      height: 360,
      pinnedBottomRowData: [
        {
          package_no: 'Total',
          contract_amount: rows
            .slice(0, 6)
            .reduce((s, r) => s + r.contract_amount, 0),
        } as Pkg,
      ],
    }} />;
```

### Size

By default the grid is capped at 62% of the viewport height (`tableContainerMaxHeight`). Set `height` for a fixed height, or turn off `pagination` to show every row.

### Anything else

`gridRef` gives you the AG Grid API (`gridRef.current.api`). `tableSettings.gridOptions` passes any other AG Grid option, last, so it wins. For cell editing, see `editType`, `onCellValueChanged`, and the `NumberCellEditor` and `TextCellEditor` from `@adhamaa/ui-kit/table`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` (required) | `TData[]` |  | The rows. |
| `columns` (required) | `(ColDef<TData, any> \| ColGroupDef<TData>)[]` |  | AG Grid column definitions. Set `type: 'currency' \| 'percentage' \| 'number'` to format a column. |
| `gridRef` | `RefObject<AgGridReact<TData> \| null>` |  | A ref to the AgGridReact instance, for `gridRef.current.api`. |
| `rowActions` | `((args: { rowData: TData; rowIndex: number; }) => RowActionConfig \| null)` |  | Actions for each row, shown in a pinned column on the right. |
| `title` | `ReactNode` |  |  |
| `buttons` | `ToolbarButton[] \| (() => ToolbarButton[])` |  | Buttons at the right of the toolbar. |
| `refresh` | `{ onClick: (event: MouseEvent<HTMLElement, MouseEvent>) => void; isFetching?: boolean; isLoading?: boolean; } \| undefined` |  | A refresh button; it spins while `isFetching`. |
| `hasReport` | `{ onClick: (event: MouseEvent<HTMLElement, MouseEvent>) => void; }` |  | A report/print button. |
| `hasFilters` | `boolean` | `true` | Show the search box. |
| `withDivider` | `boolean` | `true` | Draw a line under the toolbar. |
| `createRowBtn` | `{ label: string; onClick: () => void; leftSection?: ReactNode; className?: string; } \| null` |  | A button under the grid, for adding a row. |
| `tableSettings` | `DataTableSettings<TData>` |  |  |
| `theme` | `Theme` | `the kit theme, following the app's CSS variables` | The grid theme. |
| `renderIcon` | `((name: string, className?: string) => ReactNode)` |  | Turns string icons in row actions into nodes, like an Iconify name. |
| `labels` | `DataTableLabels` |  | Text for the built-in UI, for translation. |
| `icons` | `DataTableIcons` |  | Replace the built-in icons: the toolbar's refresh and report buttons, and the row menu trigger. |
| `classNames` | `Partial<Record<DataTablePart, string>>` |  | Classes for parts of the toolbar. |
| `className` | `string` |  |  |

### tableSettings

| Setting | Default | Description |
| --- | --- | --- |
| `pagination` | `true` | Split rows into pages |
| `paginationPageSize` | `20` | Rows a page |
| `tableContainerMaxHeight` | `true` | Cap the grid at 62% of the viewport height |
| `height` | — | Fixed grid height, any CSS length. Overrides the cap |
| `getRowId` | — | Stable row ids, so updates keep selection and scroll |
| `rowSelection`, `onSelectionChanged` | `false` | Row selection |
| `enableSorting` / `enableFiltering` | `true` / `false` | Column sorting and AG Grid column filters |
| `showRowNumbers` | `true` | A "No." column with the row number |
| `rowHeight`, `headerHeight` | `45` | Heights in px |
| `serverSide`, `totalRows`, `currentPage`, `onPageChange` | — | Server-side paging (pages start at 0) |
| `onSearchChange`, `searchDebounceMs`, `initialSearchValue` | — / `500` | Search |
| `pinnedBottomRowData` | — | Rows pinned to the bottom |
| `autoFormatColumns`, `numberFormatting` | — | Number formatting |
| `editType`, `singleClickEdit`, `onCellValueChanged`… | — | Editing |
| `gridOptions` | — | Any other AG Grid option |

## Theming and styling

The grid uses an AG Grid theme built from the kit's CSS variables, so it follows the app's theme and colour scheme. Use `createAgGridTheme()` for your own variant, or pass AG Grid's own `theme`. The tokens `tableHeader`, `tableHeaderForeground` and `tableRowHover` style the header and row hover.

`classNames` adds classes to the toolbar's parts, and `className` to the wrapper.

## Translation

`labels` replaces the built-in text: `search`, `clearSearch`, `refresh`, `report`, `rowNumber`, `rowActions`, and `records`, a function that writes the record summary ("Record 1 to 20 out of 57" by default).

## Accessibility

AG Grid provides grid keyboard navigation (arrow keys between cells, Enter to edit) and ARIA grid roles. The kit's toolbar controls are named: the search box is "Search list", and the refresh and print buttons are named after what they do. Row action menus are named with `labels.rowActions`.

```tsx
const SearchFilters = () => <DataTable
    data={Array.from({ length: 57 }, (_, i) => ({
      uuid: `pkg-${i + 1}`,
      package_no: `PKG-${String(i + 1).padStart(3, '0')}`,
      name: `Road upgrade section ${i + 1}`,
      state: ['Selangor', 'Johor', 'Perak', 'Pahang'][i % 4],
      contract_amount: 150000 + i * 23750.5,
      progress_percentage: (i * 7) % 101,
      length_km: 2 + (i % 9) * 1.5,
      status: statuses[i % 4],
    }))}
    columns={[
      { field: 'package_no', headerName: 'Package No.' },
      { field: 'name', headerName: 'Name', minWidth: 220 },
    ]}
    title="Packages"
    tableSettings={{ getRowId: (p) => p.data.uuid, height: 360 }} />;
```

## Usage guidelines

**Do**

- Keep the row's main action obvious: make the key column a link, or put Open first in the row actions.
- Use server-side paging for more than a few thousand rows.

**Don't**

- Don't show more than about eight columns. Hide the rest or put them on the detail page.

## Related

- **Pagination**: for lists that aren't tables.
- **EmptyState**: for a table with no rows yet.
- **ActionMenu**: the row ⋮ menu.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-table-datatable--docs
