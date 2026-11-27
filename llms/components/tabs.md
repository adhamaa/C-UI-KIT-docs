# Tabs

Import: `import { Tabs } from '@adhamaa/ui-kit'`

Switches between panels of related content on the same page, like a record's Summary, Routes and Documents.

```tsx
import { Tabs } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <Tabs
    aria-label="Package"
    tabs={[
      {
        value: 'summary',
        label: 'Summary',
        content: panel('Package summary, dates and value.'),
      },
      {
        value: 'routes',
        label: 'Routes',
        rightSection: <Badge size="xs">12</Badge>,
        content: panel('The 12 routes in this package.'),
      },
      {
        value: 'documents',
        label: 'Documents',
        content: panel('Contract, drawings and BQ.'),
      },
      {
        value: 'audit',
        label: 'Audit log',
        disabled: true,
        content: panel('Audit log'),
      },
    ]}
    defaultValue="summary"
    variant="line"
    orientation="horizontal"
    onChange={() => {}} />;
```

## Examples

### Tabs as data

Each tab is `{ value, label, content }`, plus optional `icon`, `rightSection` (like a count) and `disabled`. Use `defaultValue` to pick the first tab, or `value` and `onChange` to control it, for example to keep the tab in the URL.

```tsx
<Tabs
  aria-label="Package"
  value={searchParams.get('tab') ?? 'summary'}
  onChange={(tab) => setSearchParams({ tab })}
  tabs={[
    { value: 'summary', label: 'Summary', content: <Summary /> },
    { value: 'routes', label: 'Routes', rightSection: <Badge>12</Badge>, content: <Routes /> },
  ]}
/>
```

### Variants and orientation

`variant="pills"` fills the selected tab. `orientation="vertical"` stacks the tabs on the left. `grow` stretches them across the list.

```tsx
const Pills = () => <Tabs
    aria-label="Package"
    tabs={[
      {
        value: 'summary',
        label: 'Summary',
        content: panel('Package summary, dates and value.'),
      },
      {
        value: 'routes',
        label: 'Routes',
        rightSection: <Badge size="xs">12</Badge>,
        content: panel('The 12 routes in this package.'),
      },
      {
        value: 'documents',
        label: 'Documents',
        content: panel('Contract, drawings and BQ.'),
      },
      {
        value: 'audit',
        label: 'Audit log',
        disabled: true,
        content: panel('Audit log'),
      },
    ]}
    defaultValue="summary"
    variant="pills"
    orientation="horizontal"
    onChange={() => {}} />;
```
```tsx
const Vertical = () => <Tabs
    aria-label="Package"
    tabs={[
      {
        value: 'summary',
        label: 'Summary',
        content: panel('Package summary, dates and value.'),
      },
      {
        value: 'routes',
        label: 'Routes',
        rightSection: <Badge size="xs">12</Badge>,
        content: panel('The 12 routes in this package.'),
      },
      {
        value: 'documents',
        label: 'Documents',
        content: panel('Contract, drawings and BQ.'),
      },
      {
        value: 'audit',
        label: 'Audit log',
        disabled: true,
        content: panel('Audit log'),
      },
    ]}
    defaultValue="summary"
    variant="line"
    orientation="vertical"
    onChange={() => {}} />;
```
```tsx
const Grow = () => <Tabs
    aria-label="Package"
    tabs={[
      {
        value: 'summary',
        label: 'Summary',
        content: panel('Package summary, dates and value.'),
      },
      {
        value: 'routes',
        label: 'Routes',
        rightSection: <Badge size="xs">12</Badge>,
        content: panel('The 12 routes in this package.'),
      },
      {
        value: 'documents',
        label: 'Documents',
        content: panel('Contract, drawings and BQ.'),
      },
      {
        value: 'audit',
        label: 'Audit log',
        disabled: true,
        content: panel('Audit log'),
      },
    ]}
    defaultValue="summary"
    variant="line"
    orientation="horizontal"
    onChange={() => {}}
    grow />;
```

### Icons and a list action

`listRightSection` puts content at the end of the tab list, like a New button.

```tsx
const WithIconsAndAction = () => <Tabs
    aria-label="Package"
    tabs={[
      {
        value: 'list',
        label: 'List',
        icon: <icons.FileTextIcon />,
        content: panel('List view'),
      },
      {
        value: 'calendar',
        label: 'Calendar',
        icon: <icons.CalendarIcon />,
        content: panel('Calendar view'),
      },
    ]}
    defaultValue="list"
    variant="line"
    orientation="horizontal"
    onChange={() => {}}
    listRightSection={(<Button size="xs" leftSection={<icons.PlusIcon />}>New
            </Button>)} />;
```

### Tabs that only switch state

Leave out `content` and render what the tabs control yourself.

```tsx
const StateOnly = () => {
    const [view, setView] = useState('open')

    return (
        <div style={{ display: 'grid', gap: 12 }}>
            <Tabs
                defaultValue="summary"
                orientation="horizontal"
                aria-label="Work orders"
                variant="pills"
                value={view}
                onChange={setView}
                tabs={[
                  { value: 'open', label: 'Open' },
                  { value: 'closed', label: 'Closed' },
                  { value: 'all', label: 'All' },
                ]} />
            <p style={{ margin: 0 }}>Showing {view}work orders.</p>
        </div>
    );
};
```

Hidden panels unmount by default. Set `keepMounted` to keep their state, like a half-filled form, when switching.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `tabs` (required) | `TabItem[]` |  |  |
| `value` | `string \| null` |  |  |
| `defaultValue` | `string \| null` |  |  |
| `onChange` | `((value: string) => void)` |  |  |
| `variant` | `'line' \| 'pills'` | `line` | `line`: an underline under the selected tab. `pills`: a filled pill. |
| `orientation` | `'vertical' \| 'horizontal'` | `horizontal` |  |
| `grow` | `boolean` |  | Stretch the tabs across the list. |
| `keepMounted` | `boolean` |  | Keep hidden panels mounted, so their state survives switching. |
| `aria-label` | `string` |  | Accessible name of the tab list. |
| `listRightSection` | `ReactNode` |  | Content at the end of the tab list, like a button. |
| `className` | `string` |  |  |
| `classNames` | `Partial<Record<TabsPart, string>>` |  |  |

## Styling

| Selector | `classNames` key | Part |
| --- | --- | --- |
| `.kit-tabs` | `root` | The wrapper (`[data-variant]`, `[data-orientation]`) |
| `.kit-tabs__list` | `list` | The tab list (`--grow` with `grow`) |
| `.kit-tabs__tab` | `tab` | One tab |
| `.kit-tabs__indicator` | — | The underline or pill that moves to the selected tab |
| `.kit-tabs__panel` | `panel` | A panel |
| `[data-selected]` | — | On the selected tab (from ui-sdk) |

## Accessibility

Built on [ui-sdk Tabs](https://ui-sdk.dev/docs/react/components/tabs), which follows the WAI-ARIA tabs pattern. The list is a `tablist` named by `aria-label`, and each panel is labelled by its tab. The tab list is one Tab stop.

| Key | Does |
| --- | --- |
| ArrowLeft, ArrowRight (ArrowUp, ArrowDown when vertical) | Move to the next or previous tab and show it |
| Home, End | First or last tab |
| Tab | Moves from the tab list into the panel |

## Usage guidelines

**Do**

- Keep labels short, and the number of tabs under about six.
- Name the tab list with `aria-label`.

**Don't**

- Don't use tabs for steps that must be done in order. Use a stepper or separate pages.
- Don't use tabs to navigate between pages of the app.

## Related

- **SegmentedControl**: switch a view without separate panels.
- **Accordion**: when several sections can be open at once.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-navigation-tabs--docs
