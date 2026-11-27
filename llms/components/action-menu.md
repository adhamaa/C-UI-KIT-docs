# ActionMenu

Import: `import { ActionMenu } from '@adhamaa/ui-kit'`

A button that opens a list of actions: the "⋮" menu on a table row, an Export menu, an account menu. Pass the items as data. They can be grouped under headings and carry a second line of description.

```tsx
import { ActionMenu } from '@adhamaa/ui-kit'
```

```tsx
const RowActions = () => <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: 12,
      border: '1px solid var(--ui-border)',
      borderRadius: 'var(--ui-radius)',
      maxWidth: 480,
    }}>
    <span style={{ flex: 1 }}>PKG-004 · Road upgrade section 4</span>
    <Button size="sm" variant="light">Open
              </Button>
    <ActionMenu
        items={[
          { label: 'Edit', icon: <icons.PlusIcon />, onClick: () => toast('Edit') },
          { label: 'Duplicate', onClick: () => toast('Duplicate') },
          { label: 'Archive', disabled: true },
          { type: 'separator' },
          { label: 'Delete', danger: true, onClick: () => toast.error('Deleted') },
        ]}
        side="bottom"
        aria-label="Actions for PKG-004"
        align="end" />
</div>;
```

## Playground

```tsx
const Playground = () => <ActionMenu
    items={[
      { label: 'Edit', icon: <icons.PlusIcon />, onClick: () => toast('Edit') },
      { label: 'Duplicate', onClick: () => toast('Duplicate') },
      { label: 'Archive', disabled: true },
      { type: 'separator' },
      { label: 'Delete', danger: true, onClick: () => toast.error('Deleted') },
    ]}
    side="bottom"
    align="start" />;
```

## Examples

### Items

Each item is `{ label, onClick }`, plus optional `icon`, `description`, `disabled`, `danger` or `href` (which renders a link). Add `{ type: 'separator' }` for a line between items.

```tsx
<ActionMenu
  aria-label="Actions for PKG-004"
  items={[
    { label: 'Edit', icon: <PencilIcon />, onClick: edit },
    { label: 'Duplicate', onClick: duplicate },
    { type: 'separator' },
    { label: 'Delete', danger: true, onClick: () => modals.confirm({ … }) },
  ]}
/>
```

### Groups

`{ type: 'group', label, items }` puts items under a heading. Leave out `label` for an untitled group.

```tsx
const Grouped = () => <ActionMenu
    items={[
      {
        type: 'group',
        label: 'Personal settings',
        items: [
          {
            label: 'General',
            description: 'Language, time zone and profile.',
            onClick: () => toast('General'),
          },
          {
            label: 'Notifications',
            description: 'Email and in-app notifications.',
            disabled: true,
          },
        ],
      },
      {
        type: 'group',
        label: 'Admin settings',
        items: [
          {
            label: 'User management',
            description: 'Add users and manage access.',
            onClick: () => toast('User management'),
          },
        ],
      },
    ]}
    side="bottom"
    align="end"
    aria-label="Settings"
    width={340} />;
```

### Custom trigger

The trigger is a small, square `subtle` icon button showing a vertical three-dot icon, named "More actions" by default. Pass another icon as `trigger`, with an `aria-label` that names it.

```tsx
const CustomTrigger = () => <ActionMenu
    items={[
      { label: 'Excel (.xlsx)', onClick: () => toast('Excel') },
      { label: 'CSV', onClick: () => toast('CSV') },
      { label: 'PDF', onClick: () => toast('PDF') },
    ]}
    side="bottom"
    align="start"
    trigger={<icons.UploadIcon />}
    aria-label="Export" />;
```

### Header

`header` shows content above the items that isn't an action, like the signed-in user.

```tsx
const WithHeader = () => <ActionMenu
    items={[
      { label: 'Profile', href: '#profile' },
      { type: 'separator' },
      { label: 'Sign out', onClick: () => toast('Signed out') },
    ]}
    side="bottom"
    align="start"
    aria-label="Account"
    header={(<div>
      <strong>Aisyah Rahman</strong>
      <div style={{ fontSize: 12, opacity: 0.7 }}>Project engineer</div>
    </div>)} />;
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` (required) | `ActionMenuItem[]` |  |  |
| `trigger` | `ReactNode` | `a vertical three-dot icon` | The trigger's content. |
| `aria-label` | `string` | `'More actions'` | Accessible name of the trigger. |
| `className` | `string` |  | Classes for the trigger button. |
| `contentClassName` | `string` |  | Classes for the popup. |
| `header` | `ReactNode` |  | Content above the items that isn't an action, like the signed-in user's name. |
| `width` | `string \| number` | `fits the items` | Popup width, any CSS length. |
| `side` | `enum` | `bottom` | Which side of the trigger the popup opens on. |
| `align` | `enum` | `start` | How the popup lines up with the trigger. |
| `disabled` | `boolean` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-button.kit-icon-button` | The trigger (`className` adds to it) |
| `.kit-popover.kit-menu` | The popup (`contentClassName` adds to it) |
| `.kit-menu__header` | The header |
| `.kit-menu__group`, `.kit-menu__group-label` | A group and its heading |
| `.kit-menu__item` | One action (`[data-danger]` for danger items) |
| `.kit-menu__icon` | The item's icon |
| `.kit-menu__label`, `.kit-menu__description` | The item's two lines |
| `.kit-menu__separator` | A separator |
| `[data-highlighted]` | The item under the keyboard or pointer (from ui-sdk) |

## Accessibility

Built on [ui-sdk Menu](https://ui-sdk.dev/docs/react/components/menu), which follows the WAI-ARIA menu button pattern. The trigger has `aria-haspopup="menu"`, and the items are `menuitem`s.

| Key | Does |
| --- | --- |
| Enter, Space, ArrowDown | On the trigger, opens the menu on the first item |
| ArrowUp, ArrowDown | Move between items, skipping disabled ones |
| Home, End | First or last item |
| Typing | Jumps to the next item starting with the typed text |
| Enter, Space | Runs the item and closes the menu |
| Escape | Closes the menu and returns focus to the trigger |

On a table row, name each trigger after its row ("Actions for PKG-004"), so screen-reader users can tell the menus apart.

## Usage guidelines

**Do**

- Keep the row's main action as a visible button, and put the rest in the menu.
- Put destructive actions last, after a separator, with `danger`.

**Don't**

- Don't hide the only way to do something in a menu.
- Don't put more than about seven items in one menu. Group them, or rethink.

## Related

- **Popover**: for content that isn't a list of actions.
- **ConfirmDialog**: confirm a destructive action from the menu.
- **DataTable**: has row actions built in.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-overlays-actionmenu--docs
