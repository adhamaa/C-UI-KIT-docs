# INFRACIVIC UI Kit

`@adhamaa/ui-kit` is a set of basic React components shared by every INFRACIVIC app. It covers:

- **Form fields:** text, number, password, textarea, select, multi-select, autocomplete, infinite select, checkbox, switch, radio, chip, segmented control, date, month, time, file and colour.
- **react-hook-form bindings** for every field, plus `FormFields` and `FormDialog` for config-driven forms.
- **DataTable**, built on AG Grid Community, with a toolbar, row actions, number formatting and client or server pagination.
- **Overlays:** `Dialog`, `ConfirmDialog`, `modals.open()`, `ActionMenu` (flat, or grouped under headings with descriptions), `Popover`, `toast()`.
- **Display:** `Badge`, `Card`, `Breadcrumb`, `EmptyState`, `Timeline`, `ImagePreviewer`, `Pagination`, `Loader`, `Avatar`, `Skeleton`, `LoadingOverlay`.
- **Navigation and disclosure:** `Tabs`, `Accordion`, `Tooltip`, `ScrollArea`.

The behaviour (keyboard handling, focus, ARIA) comes from [ui-sdk](https://www.npmjs.com/package/@ui-sdk/react). The kit adds a consistent look and simple, prop-based APIs on top.

## Built to be themed

Every colour, radius and font comes from CSS variables. Each app applies its own brand with `defineTheme()` or a few lines of CSS, and every component follows it, the data table included. Use the **Theme** and **Scheme** switches in the toolbar above to see the same components as SWIFTO, or in dark mode.

## Where to go next

- **Getting started:** install the package, load the styles, add the provider.
- **Theming:** brand colours, dark mode and the AG Grid theme.
- **Forms with react-hook-form:** the `RHF*` fields and config-driven forms.
- **Migrating from SWIFTO:** how the old Mantine components map onto the kit.
- **Components:** every component, with live controls and a props table.

## Requirements

- React 19 or newer (a ui-sdk requirement).
- `react-hook-form` 7.50 or newer, only for `@adhamaa/ui-kit/form`.
- `ag-grid-community` and `ag-grid-react` 35 or 36, only for `@adhamaa/ui-kit/table`.
- Any framework: Next.js (App or Pages router), Vite or anything else. Every component is a client component.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/introduction--docs
