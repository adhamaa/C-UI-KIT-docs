import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-B-yuF967.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./AppShell.stories-Cv0G1G2o.js";function v(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a,{of:_}),`
`,(0,b.jsx)(t.h1,{id:`appshell`,children:`AppShell`}),`
`,(0,b.jsx)(t.p,{children:`The page frame: a header, a sidebar, the main area and a footer. The sidebar can be full, a narrow rail or hidden, and below a breakpoint it becomes a drawer from the left. The kit handles the layout and behaviour; your app supplies the logo, the menu and the header, and keeps its own look.`}),`
`,(0,b.jsx)(o,{language:`tsx`,dark:!0,code:`import { AppShell, useAppShell } from '@adhamaa/ui-kit'`}),`
`,(0,b.jsx)(c,{of:m}),`
`,(0,b.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(i,{of:m}),`
`,(0,b.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,b.jsx)(t.h3,{id:`sidebar-beside-the-header`,children:`Sidebar beside the header`}),`
`,(0,b.jsxs)(t.p,{children:[`The default, `,(0,b.jsx)(t.code,{children:`layout="sidebar"`}),`: the sidebar runs the full height on the left, with the header, main area and footer beside it.`]}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`<AppShell>
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
`})}),`
`,(0,b.jsx)(t.h3,{id:`header-across-the-top`,children:`Header across the top`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`layout="header"`}),` puts the header and footer across the whole page, with the sidebar between them.`]}),`
`,(0,b.jsx)(c,{of:f}),`
`,(0,b.jsx)(t.h3,{id:`the-mini-rail`,children:`The mini rail`}),`
`,(0,b.jsxs)(t.p,{children:[`In the mini state the sidebar is `,(0,b.jsx)(t.code,{children:`sidebarWidth.mini`}),` wide (64px by default). Read `,(0,b.jsx)(t.code,{children:`useAppShell().sidebarState`}),` in your navigation to show icons only, with tooltips.`]}),`
`,(0,b.jsx)(c,{of:u}),`
`,(0,b.jsx)(t.h3,{id:`saving-the-state`,children:`Saving the state`}),`
`,(0,b.jsxs)(t.p,{children:[`Pass `,(0,b.jsx)(t.code,{children:`sidebarState`}),` and `,(0,b.jsx)(t.code,{children:`onSidebarStateChange`}),` to control it, and keep it wherever your app keeps settings. The kit doesn't save anything itself.`]}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`const [state, setState] = useLocalStorage<AppShellSidebarState>('nav-state', 'full')

<AppShell sidebarState={state} onSidebarStateChange={setState}>…</AppShell>
`})}),`
`,(0,b.jsx)(c,{of:h}),`
`,(0,b.jsx)(t.h3,{id:`the-toggle`,children:`The toggle`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`AppShell.SidebarToggle`}),` switches between full and `,(0,b.jsx)(t.code,{children:`collapsedState`}),` (`,(0,b.jsx)(t.code,{children:`"mini"`}),`, or `,(0,b.jsx)(t.code,{children:`"hidden"`}),`). It sets `,(0,b.jsx)(t.code,{children:`aria-expanded`}),` and `,(0,b.jsx)(t.code,{children:`aria-controls`}),`, and its name says what it will do: "Collapse sidebar" or "Expand sidebar". Pass `,(0,b.jsx)(t.code,{children:`icon`}),` to show your own icon.`]}),`
`,(0,b.jsx)(c,{of:g}),`
`,(0,b.jsx)(t.h3,{id:`compact-screens`,children:`Compact screens`}),`
`,(0,b.jsxs)(t.p,{children:[`Below `,(0,b.jsx)(t.code,{children:`breakpoint`}),` (`,(0,b.jsx)(t.code,{children:`"md"`}),`, 62em, by default) the sidebar's children render in a drawer from the left instead. `,(0,b.jsx)(t.code,{children:`AppShell.MenuButton`}),` opens it, and it shows only on these screens; `,(0,b.jsx)(t.code,{children:`SidebarToggle`}),` hides. Inside the drawer, `,(0,b.jsx)(t.code,{children:`useAppShell()`}),` reads `,(0,b.jsx)(t.code,{children:`sidebarState: "full"`}),` and `,(0,b.jsx)(t.code,{children:`inDrawer: true`}),`. Call `,(0,b.jsx)(t.code,{children:`closeMobile()`}),` when a link is followed. `,(0,b.jsx)(t.code,{children:`swipeToOpen`}),` also opens it with a swipe from the left edge. `,(0,b.jsx)(t.code,{children:`breakpoint={false}`}),` keeps the sidebar beside the page at every width.`]}),`
`,(0,b.jsx)(c,{of:p}),`
`,(0,b.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`Part`}),(0,b.jsx)(t.th,{children:`Renders`}),(0,b.jsx)(t.th,{children:`What it holds`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`AppShell`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`div.kit-shell`})}),(0,b.jsx)(t.td,{children:`The state, and the parts below`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`AppShell.Header`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`<header>`})}),(0,b.jsx)(t.td,{children:`Title, menu button, toggle, user menu`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`AppShell.Sidebar`})}),(0,b.jsxs)(t.td,{children:[(0,b.jsx)(t.code,{children:`<nav aria-label="Main">`}),`, or a drawer`]}),(0,b.jsx)(t.td,{children:`Your navigation`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`AppShell.Main`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`<main>`})}),(0,b.jsx)(t.td,{children:`The page; it scrolls on its own`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`AppShell.Footer`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`<footer>`})}),(0,b.jsx)(t.td,{children:`Copyright, version`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`AppShell.SidebarToggle`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`<button>`})}),(0,b.jsx)(t.td,{children:`Full ⇄ collapsed, beside the page only`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`AppShell.MenuButton`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`<button>`})}),(0,b.jsx)(t.td,{children:`Opens the drawer, compact screens only`})]})]})]}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`useAppShell()`}),` returns `,(0,b.jsx)(t.code,{children:`sidebarState`}),`, `,(0,b.jsx)(t.code,{children:`setSidebarState`}),`, `,(0,b.jsx)(t.code,{children:`toggleSidebar`}),`, `,(0,b.jsx)(t.code,{children:`compact`}),`, `,(0,b.jsx)(t.code,{children:`mobileOpened`}),`, `,(0,b.jsx)(t.code,{children:`openMobile`}),`, `,(0,b.jsx)(t.code,{children:`closeMobile`}),`, `,(0,b.jsx)(t.code,{children:`inDrawer`}),` and `,(0,b.jsx)(t.code,{children:`sidebarId`}),`. Use it anywhere inside the shell.`]}),`
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsx)(s,{of:_}),`
`,(0,b.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,b.jsxs)(t.p,{children:[`The layout is CSS grid, switched by media queries, so the page doesn't jump while it loads. Set these on `,(0,b.jsx)(t.code,{children:`.kit-shell`}),` (or with `,(0,b.jsx)(t.code,{children:`style`}),`):`]}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`Variable`}),(0,b.jsx)(t.th,{children:`Default`}),(0,b.jsx)(t.th,{children:`What it sets`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`--kit-shell-bg`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`--kit-surface`})}),(0,b.jsx)(t.td,{children:`The page background`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`--kit-shell-sidebar-bg`})}),(0,b.jsx)(t.td,{children:`transparent`}),(0,b.jsx)(t.td,{children:`The sidebar and drawer background`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`--kit-shell-sidebar-full`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`300px`})}),(0,b.jsxs)(t.td,{children:[`Width when full (or `,(0,b.jsx)(t.code,{children:`sidebarWidth.full`}),`)`]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`--kit-shell-sidebar-mini`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`64px`})}),(0,b.jsxs)(t.td,{children:[`Width when mini (or `,(0,b.jsx)(t.code,{children:`sidebarWidth.mini`}),`)`]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`--kit-shell-drawer-width`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`min(20rem, 85vw)`})}),(0,b.jsx)(t.td,{children:`The drawer's width`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`--kit-shell-transition`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`200ms`})}),(0,b.jsxs)(t.td,{children:[`How fast the width changes; `,(0,b.jsx)(t.code,{children:`0ms`}),` with reduced motion`]})]})]})]}),`
`,(0,b.jsxs)(t.p,{children:[`Attributes to style against: `,(0,b.jsx)(t.code,{children:`data-layout`}),`, `,(0,b.jsx)(t.code,{children:`data-sidebar-state`}),` (on the root and the sidebar), `,(0,b.jsx)(t.code,{children:`data-compact`}),` on the root, and `,(0,b.jsx)(t.code,{children:`data-in-drawer`}),` on the sidebar inside the drawer. Classes: `,(0,b.jsx)(t.code,{children:`kit-shell`}),`, `,(0,b.jsx)(t.code,{children:`kit-shell__header`}),`, `,(0,b.jsx)(t.code,{children:`__sidebar`}),`, `,(0,b.jsx)(t.code,{children:`__main`}),`, `,(0,b.jsx)(t.code,{children:`__footer`}),`, `,(0,b.jsx)(t.code,{children:`__drawer`}),`, `,(0,b.jsx)(t.code,{children:`__backdrop`}),`, `,(0,b.jsx)(t.code,{children:`__toggle`}),`, `,(0,b.jsx)(t.code,{children:`__menu-button`}),`.`]}),`
`,(0,b.jsxs)(t.p,{children:[`The kit adds no padding, borders or cards: put your app's look on the parts with `,(0,b.jsx)(t.code,{children:`className`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,b.jsxs)(t.p,{children:[`The drawer is built on `,(0,b.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/drawer`,rel:`nofollow`,children:`ui-sdk Drawer`}),`.`]}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[`The parts are landmarks: `,(0,b.jsx)(t.code,{children:`banner`}),`, `,(0,b.jsx)(t.code,{children:`navigation`}),` (named "Main"; change it with `,(0,b.jsx)(t.code,{children:`aria-label`}),`), `,(0,b.jsx)(t.code,{children:`main`}),` and `,(0,b.jsx)(t.code,{children:`contentinfo`}),`.`]}),`
`,(0,b.jsx)(t.li,{children:`Hidden, the sidebar stays in the page at zero width but out of reach of the keyboard and screen readers.`}),`
`,(0,b.jsxs)(t.li,{children:[`The drawer is modal: focus moves in and stays there, the page behind is inert, and focus returns to the menu button when it closes. Its heading, "Menu" by default (`,(0,b.jsx)(t.code,{children:`drawerTitle`}),`), is read out when it opens.`]}),`
`]}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`Key`}),(0,b.jsx)(t.th,{children:`Action`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsxs)(t.td,{children:[(0,b.jsx)(`kbd`,{children:`Enter`}),` / `,(0,b.jsx)(`kbd`,{children:`Space`}),` on the toggle`]}),(0,b.jsx)(t.td,{children:`Switches the sidebar between full and collapsed`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsxs)(t.td,{children:[(0,b.jsx)(`kbd`,{children:`Enter`}),` / `,(0,b.jsx)(`kbd`,{children:`Space`}),` on the menu button`]}),(0,b.jsx)(t.td,{children:`Opens the drawer`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(`kbd`,{children:`Tab`})}),(0,b.jsx)(t.td,{children:`Moves through the drawer, staying inside it`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(`kbd`,{children:`Esc`})}),(0,b.jsx)(t.td,{children:`Closes the drawer`})]})]})]}),`
`,(0,b.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Do`}),` keep your menu, logo and header in your app and pass them in as children.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Do`}),` close the drawer when a link is followed (`,(0,b.jsx)(t.code,{children:`closeMobile()`}),`).`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Don't`}),` pad or round the shell's parts in the kit's CSS; style them in your app.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Don't`}),` save the sidebar state inside the kit; control it and save it yourself.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.a,{href:`?path=/docs/components-navigation-tabs--docs`,children:`Tabs`}),` for sections within a page.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.a,{href:`?path=/docs/components-overlays-actionmenu--docs`,children:`ActionMenu`}),` for header menus.`]}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),r(),l(),d()})))()}x();export{y as default};