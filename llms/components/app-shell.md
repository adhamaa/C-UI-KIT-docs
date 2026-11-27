# AppShell

Import: `import { AppShell } from '@adhamaa/ui-kit'`

The page frame: a header, a sidebar, the main area and a footer. The sidebar can be full, a narrow rail or hidden, and below a breakpoint it becomes a drawer from the left. The kit handles the layout and behaviour; your app supplies the logo, the menu and the header, and keeps its own look.

```tsx
import { AppShell, useAppShell } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <SampleShell
    layout="sidebar"
    defaultSidebarState="full"
    collapsedState="mini"
    breakpoint="md"
    swipeToOpen={false}
    onSidebarStateChange={() => {}}
    onMobileOpenedChange={() => {}}>{null}</SampleShell>;
```

## Examples

### Sidebar beside the header

The default, `layout="sidebar"`: the sidebar runs the full height on the left, with the header, main area and footer beside it.

```tsx
<AppShell>
  <AppShell.Header>
    <AppShell.MenuButton />
    <AppShell.SidebarToggle />
    <PageTitle />
  </AppShell.Header>
  <AppShell.Sidebar>
    <Navigation />
  </AppShell.Sidebar>
  <AppShell.Main>{children}</AppShell.Main>
  <AppShell.Footer>© 2026 OWL.AI</AppShell.Footer>
</AppShell>
```

### Header across the top

`layout="header"` puts the header and footer across the whole page, with the sidebar between them.

```tsx
const HeaderLayout = () => <SampleShell
    layout="header"
    defaultSidebarState="full"
    collapsedState="hidden"
    breakpoint="md"
    swipeToOpen={false}
    onSidebarStateChange={() => {}}
    onMobileOpenedChange={() => {}}>{null}</SampleShell>;
```

### The mini rail

In the mini state the sidebar is `sidebarWidth.mini` wide (64px by default). Read `useAppShell().sidebarState` in your navigation to show icons only, with tooltips.

```tsx
const Mini = () => <SampleShell
    layout="sidebar"
    defaultSidebarState="mini"
    collapsedState="mini"
    breakpoint="md"
    swipeToOpen={false}
    onSidebarStateChange={() => {}}
    onMobileOpenedChange={() => {}}>{null}</SampleShell>;
```

### Saving the state

Pass `sidebarState` and `onSidebarStateChange` to control it, and keep it wherever your app keeps settings. The kit doesn't save anything itself.

```tsx
const [state, setState] = useLocalStorage<AppShellSidebarState>('nav-state', 'full')

<AppShell sidebarState={state} onSidebarStateChange={setState}>…</AppShell>
```

```tsx
const Controlled = () => {
    const [state, setState] = useState<AppShellSidebarState>('full')

    return (
        <div>
            <div style={{ display: 'flex', gap: 8, padding: 12 }}>
                {(['full', 'mini', 'hidden'] as const).map((s) => (
                  <Button
                    key={s}
                    size="sm"
                    variant={state === s ? 'filled' : 'default'}
                    onClick={() => setState(s)}
                  >
                    {s}
                  </Button>
                ))}
            </div>
            <SampleShell
                layout="sidebar"
                defaultSidebarState="full"
                collapsedState="mini"
                breakpoint="md"
                swipeToOpen={false}
                onMobileOpenedChange={() => {}}
                sidebarState={state}
                onSidebarStateChange={setState}>{null}</SampleShell>
        </div>
    );
};
```

### The toggle

`AppShell.SidebarToggle` switches between full and `collapsedState` (`"mini"`, or `"hidden"`). It sets `aria-expanded` and `aria-controls`, and its name says what it will do: "Collapse sidebar" or "Expand sidebar". Pass `icon` to show your own icon.

```tsx
const Toggle = () => <SampleShell
    layout="sidebar"
    defaultSidebarState="full"
    collapsedState="mini"
    breakpoint={false}
    swipeToOpen={false}
    onSidebarStateChange={() => {}}
    onMobileOpenedChange={() => {}}>{null}</SampleShell>;
```

### Compact screens

Below `breakpoint` (`"md"`, 62em, by default) the sidebar's children render in a drawer from the left instead. `AppShell.MenuButton` opens it, and it shows only on these screens; `SidebarToggle` hides. Inside the drawer, `useAppShell()` reads `sidebarState: "full"` and `inDrawer: true`. Call `closeMobile()` when a link is followed. `swipeToOpen` also opens it with a swipe from the left edge. `breakpoint={false}` keeps the sidebar beside the page at every width.

```tsx
const Compact = () => <SampleShell
    layout="sidebar"
    defaultSidebarState="full"
    collapsedState="mini"
    breakpoint="lg"
    swipeToOpen
    onSidebarStateChange={() => {}}
    onMobileOpenedChange={() => {}}>{null}</SampleShell>;
```

## Composition

| Part | Renders | What it holds |
| --- | --- | --- |
| `AppShell` | `div.kit-shell` | The state, and the parts below |
| `AppShell.Header` | `<header>` | Title, menu button, toggle, user menu |
| `AppShell.Sidebar` | `<nav aria-label="Main">`, or a drawer | Your navigation |
| `AppShell.Main` | `<main>` | The page; it scrolls on its own |
| `AppShell.Footer` | `<footer>` | Copyright, version |
| `AppShell.SidebarToggle` | `<button>` | Full ⇄ collapsed, beside the page only |
| `AppShell.MenuButton` | `<button>` | Opens the drawer, compact screens only |

`useAppShell()` returns `sidebarState`, `setSidebarState`, `toggleSidebar`, `compact`, `mobileOpened`, `openMobile`, `closeMobile`, `inDrawer` and `sidebarId`. Use it anywhere inside the shell.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` (required) | `ReactNode` |  | `Header`, `Sidebar`, `Main` and `Footer` parts, in any order. |
| `layout` | `'header' \| 'sidebar'` | `'sidebar'` | Where the sidebar sits. |
| `sidebarState` | `'hidden' \| 'full' \| 'mini'` |  | The sidebar's state. Pass it with `onSidebarStateChange` to control it, for example to save it. |
| `defaultSidebarState` | `'hidden' \| 'full' \| 'mini'` | `'full'` | The state it starts in, when uncontrolled. |
| `onSidebarStateChange` | `((state: AppShellSidebarState) => void)` |  | Called when the sidebar's state changes. |
| `collapsedState` | `'hidden' \| 'mini'` | `'mini'` | What `SidebarToggle` collapses the sidebar to. |
| `sidebarWidth` | `{ full?: string \| number; mini?: string \| number; } \| undefined` | `{ full: 300, mini: 64 }` | The sidebar's width when full and when mini: pixels or any CSS length. |
| `breakpoint` | `false \| AppShellBreakpoint` | `'md'` | Below this width the sidebar becomes a drawer that `MenuButton` opens. `false` keeps it beside the page at every width. |
| `mobileOpened` | `boolean` |  | Whether the drawer is open. Pass it with `onMobileOpenedChange` to control it. |
| `onMobileOpenedChange` | `((opened: boolean) => void)` |  | Called when the drawer opens or closes. |
| `swipeToOpen` | `boolean` | `false` | On compact screens, a swipe from the left edge opens the drawer. |
| `className` | `string` |  |  |
| `style` | `CSSProperties` |  |  |

## Styling

The layout is CSS grid, switched by media queries, so the page doesn't jump while it loads. Set these on `.kit-shell` (or with `style`):

| Variable | Default | What it sets |
| --- | --- | --- |
| `--kit-shell-bg` | `--kit-surface` | The page background |
| `--kit-shell-sidebar-bg` | transparent | The sidebar and drawer background |
| `--kit-shell-sidebar-full` | `300px` | Width when full (or `sidebarWidth.full`) |
| `--kit-shell-sidebar-mini` | `64px` | Width when mini (or `sidebarWidth.mini`) |
| `--kit-shell-drawer-width` | `min(20rem, 85vw)` | The drawer's width |
| `--kit-shell-transition` | `200ms` | How fast the width changes; `0ms` with reduced motion |

Attributes to style against: `data-layout`, `data-sidebar-state` (on the root and the sidebar), `data-compact` on the root, and `data-in-drawer` on the sidebar inside the drawer. Classes: `kit-shell`, `kit-shell__header`, `__sidebar`, `__main`, `__footer`, `__drawer`, `__backdrop`, `__toggle`, `__menu-button`.

The kit adds no padding, borders or cards: put your app's look on the parts with `className`.

## Accessibility

The drawer is built on [ui-sdk Drawer](https://ui-sdk.dev/docs/react/components/drawer).

- The parts are landmarks: `banner`, `navigation` (named "Main"; change it with `aria-label`), `main` and `contentinfo`.
- Hidden, the sidebar stays in the page at zero width but out of reach of the keyboard and screen readers.
- The drawer is modal: focus moves in and stays there, the page behind is inert, and focus returns to the menu button when it closes. Its heading, "Menu" by default (`drawerTitle`), is read out when it opens.

| Key | Action |
| --- | --- |
| <kbd>Enter</kbd> / <kbd>Space</kbd> on the toggle | Switches the sidebar between full and collapsed |
| <kbd>Enter</kbd> / <kbd>Space</kbd> on the menu button | Opens the drawer |
| <kbd>Tab</kbd> | Moves through the drawer, staying inside it |
| <kbd>Esc</kbd> | Closes the drawer |

## Usage guidelines

- **Do** keep your menu, logo and header in your app and pass them in as children.
- **Do** close the drawer when a link is followed (`closeMobile()`).
- **Don't** pad or round the shell's parts in the kit's CSS; style them in your app.
- **Don't** save the sidebar state inside the kit; control it and save it yourself.

## Related

- [Tabs](?path=/docs/components-navigation-tabs--docs) for sections within a page.
- [ActionMenu](?path=/docs/components-overlays-actionmenu--docs) for header menus.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-navigation-appshell--docs
