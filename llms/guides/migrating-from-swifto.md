# Migrating from SWIFTO's components

The kit started as SWIFTO's `src/components/ui`, rebuilt on ui-sdk instead of Mantine. Prop names were kept where they made sense, so most changes are a new import.

## Component map

| SWIFTO | Kit | Notes |
| --- | --- | --- |
| `AgGridTable` | `DataTable` (`/table`) | Same props. Set `tableSettings.autoFormatColumns` to keep the old column formatting by name, and pass `renderIcon` for Iconify string icons. |
| `swiftoAgGridTheme` | `createAgGridTheme()` | Follows the kit theme instead of fixed colours. |
| `Forms/RHFTextInput` … | `RHFTextInput` … (`/form`) | Same `name`, `rules`, `defaultValue`. |
| `RHFComboSelect` | `RHFSelect` with async props, or `RHFInfiniteSelect` | |
| `RHFComboMultiSelect`, `RHFMultiSelect` | `RHFMultiSelect` | `creatable` + `onCreateOption` kept. |
| `RHFDatePickerInput`, `RHFDateInput` | `RHFDatePicker` | Values are `YYYY-MM-DD` strings, as in Mantine 8; other date strings (like `Sat, 21 Nov 2026 06:21:58 GMT`) are read too. Mantine's `valueFormat="DD MMMM YYYY"` becomes `displayFormat={{ day: 'numeric', month: 'long', year: 'numeric' }}` with `locale="en-GB"`, which also makes the field a press-to-pick button like Mantine's. |
| Mantine `MonthPickerInput` | `MonthPicker` / `RHFMonthPicker` | Values are `YYYY-MM` strings; `toMonthString()` converts a `Date`. |
| Mantine `Menu` with `Menu.Label` sections | `ActionMenu` with `{ type: 'group', label, items }` | Items take `description` and `activeIcon`. |
| `RHFFieldDefaults` | `RHFFieldDefaults` | Unchanged. |
| `Modal.confirm` | `modals.confirm()` | |
| `Modal.form` | `openFormDialog()` / `FormDialog` | Field config is close; see below. |
| `Modal.table` | `modals.open({ children: <DataTable … /> })` | |
| `Modal.imagePreview` | `ImagePreviewer` | |
| `Modal.comingSoon`, `ComingSoon` | `EmptyState`, or `modals.open` with one | |
| `Toast.success/warning/error` | `toast.success/warning/error` | Also `info`, `loading`, actions and updates. |
| `Timeline`, `StatusTimeline`, `ActivityTimeline` | `Timeline` | `variant="status" \| "activity"`. For SWIFTO's look add `appearance="card"`, plus `alternating` for stages (SWIFTO's default). Events take `dateTime`/`time` instead of `timestamp`; `date`, `actor`, `department`, `stage`, `reason`, `sentFrom` and `metadata` keep their names. |
| `BreadcrumbsSection` | `Breadcrumb` | Pass `items` and `linkComponent={Link}`. Route-data logic stays in the app. |
| `StaggeredDotsLoader` | `Loader` | |
| `ColorSchemeSwitcher` | `ColorSchemeToggle` | |
| Mantine `AppShell` (`header`, `navbar`, `AppShell.Main`) | `AppShell` | Parts `Header`, `Sidebar`, `Main`, `Footer`. `navbar.width` becomes `sidebarWidth={{ full, mini }}`, `navbar.breakpoint` becomes `breakpoint`, and `layout="alt"` is the kit's default `layout="sidebar"`. The collapsed state is `sidebarState` (`full`, `mini`, `hidden`); save it yourself. Below the breakpoint the sidebar is a drawer that `AppShell.MenuButton` opens. |

**Not in the kit**, and they stay in the app: `Header`, `Navigation`, `UserButton`, `Logo`, `AppMain` (the frame itself is the kit's `AppShell`), domain icons, `ProcessStage`, `DetailHeaderActions`, `PublishedBadge`, `CoordinateInput*`, `GoogleMaps`, `RHFDropzoneWithPublishToAtm`, `SessionDebugger`, and the RHF-backed cell editors (`TextCellEditor`, `NumberCellEditor` and `ImageCellEditor` read and write form context by row uuid). The kit's own `TextCellEditor` and `NumberCellEditor` are plain AG Grid editors.

## Mantine props

| Mantine | Kit |
| --- | --- |
| `withAsterisk` | `withAsterisk`, or `required` |
| `error` | `error` |
| `leftSection` / `rightSection` | Same |
| `classNames={{ input }}` | `classNames={{ control }}` |
| `size="xs" … "xl"` | `xs` … `lg` |
| `data` on Select | Same shape: strings, `{ value, label }`, `{ group, items }` |
| `onChange(event)` on TextInput | Same, plus `onValueChange(value)` |
| `onChange(value)` on NumberInput | `onChange(number \| null)`. It never gives a string. |
| `autosize`, `minRows`, `maxRows` on Textarea | Same |
| `styles={…}` | Not supported. Use `className`/`classNames` or theme tokens. |
| `variant="filled"` etc. on Button | `filled`, `light`, `outline`, `subtle`, `default`, `danger` |

## Style overrides

SWIFTO overrides like `classNames={{ root: '!bg-[var(--color-swifto-brand-200)]' }}` exist to brand Mantine. With `swiftoTheme` applied the kit is already branded, so drop them rather than port them.

## Gradual migration

During the move, SWIFTO keeps `src/components/ui/*` as thin re-exports of the kit, so imports don't change all at once. Each later PR removes one folder's shim and points imports at the package directly.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/migrating-from-swifto--docs
