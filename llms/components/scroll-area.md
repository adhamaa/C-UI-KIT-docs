# ScrollArea

Import: `import { ScrollArea } from '@adhamaa/ui-kit'`

A scrollable box with slim scrollbars that match the theme. Scrolling stays native, so touchpads, wheels and keyboards work as usual.

```tsx
import { ScrollArea } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <ScrollArea height={240} type="hover" aria-label="Notifications">(<ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
      {notifications.map((n) => (
        <li
          key={n.id}
          style={{
            padding: '10px 12px',
            borderBottom: '1px solid var(--ui-border)',
          }}
        >
          {n.text}
        </li>
      ))}
    </ul>)</ScrollArea>;
```

## Examples

### Height

`height` fixes the box's height. `maxHeight` lets it grow with the content up to that height, then scroll.

```tsx
const MaxHeight = () => <ScrollArea
    height={undefined}
    type="always"
    aria-label="Notifications"
    maxHeight={200}
    offsetScrollbars>(<ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
      {notifications.map((n) => (
        <li
          key={n.id}
          style={{
            padding: '10px 12px',
            borderBottom: '1px solid var(--ui-border)',
          }}
        >
          {n.text}
        </li>
      ))}
    </ul>)</ScrollArea>;
```

### When scrollbars show

`type` sets when the scrollbars appear: on `hover` (default), `always`, while scrolling (`scroll`), or when the content overflows (`auto`). `offsetScrollbars` keeps space for the scrollbar so content doesn't sit under it.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `height` | `string \| number` |  | Fixed height, any CSS length. |
| `maxHeight` | `string \| number` |  | Grow with the content up to this height, then scroll. |
| `type` | `enum` | `hover` | When scrollbars show. |
| `offsetScrollbars` | `boolean` |  | Keep space for the scrollbar so content doesn't sit under it. |
| `aria-label` | `string` |  | Name the region when it holds meaningful content. |
| `className` | `string` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-scroll` | The box (`[data-offset]`) |
| `.kit-scroll__viewport` | The scrolling element |
| `.kit-scroll__content` | Your content |
| `.kit-scroll__bar`, `.kit-scroll__thumb` | A scrollbar and its handle |

## Accessibility

Built on [ui-sdk Scroll Area](https://ui-sdk.dev/docs/react/components/scroll-area). When the area holds meaningful content, give it an `aria-label`: the scrolling element then becomes a named region that screen-reader users can find.

## Usage guidelines

**Don't**

- Don't put scroll areas inside scroll areas.
- Don't make the main page content scroll inside a box. Let the page scroll.

## Related

- **Dialog**: its body already scrolls when content is tall.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-data-display-scrollarea--docs
