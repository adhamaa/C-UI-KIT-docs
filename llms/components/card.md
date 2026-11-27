# Card

Import: `import { Card } from '@adhamaa/ui-kit'`

A surface that groups related content, with an optional header (title, description, actions) and footer.

```tsx
import { Card } from '@adhamaa/ui-kit'
```

```tsx
const WithActionsAndFooter = () => <Card
    title="Contract"
    description="Key dates and value"
    padding="md"
    withBorder
    actions={(<>
      <Badge color="success">Active</Badge>
      <ActionMenu
        aria-label="Contract actions"
        align="end"
        items={[{ label: 'Edit' }, { label: 'Download PDF' }]}
      />
    </>)}
    footer={(<div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
      <Button variant="default" size="sm">
        View history
      </Button>
      <Button size="sm">Open contract</Button>
    </div>)}>(<dl
      style={{
        margin: 0,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '6px 16px',
      }}
    >
      <dt>Value</dt>
      <dd style={{ margin: 0 }}>RM 1,250,000.00</dd>
      <dt>Start</dt>
      <dd style={{ margin: 0 }}>1 Dec 2026</dd>
      <dt>End</dt>
      <dd style={{ margin: 0 }}>30 Nov 2027</dd>
    </dl>)</Card>;
```

## Playground

```tsx
const Playground = () => <Card
    title="Contract"
    description="Key dates and value"
    padding="md"
    withBorder>(<dl
      style={{
        margin: 0,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '6px 16px',
      }}
    >
      <dt>Value</dt>
      <dd style={{ margin: 0 }}>RM 1,250,000.00</dd>
      <dt>Start</dt>
      <dd style={{ margin: 0 }}>1 Dec 2026</dd>
      <dt>End</dt>
      <dd style={{ margin: 0 }}>30 Nov 2027</dd>
    </dl>)</Card>;
```

## Examples

### Header and footer

`title` and `description` make the header. `actions` sit at its top right: buttons, a badge or an `ActionMenu`. `footer` runs along the bottom.

```tsx
const WithActionsAndFooter = () => <Card
    title="Contract"
    description="Key dates and value"
    padding="md"
    withBorder
    actions={(<>
      <Badge color="success">Active</Badge>
      <ActionMenu
        aria-label="Contract actions"
        align="end"
        items={[{ label: 'Edit' }, { label: 'Download PDF' }]}
      />
    </>)}
    footer={(<div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
      <Button variant="default" size="sm">
        View history
      </Button>
      <Button size="sm">Open contract</Button>
    </div>)}>(<dl
      style={{
        margin: 0,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '6px 16px',
      }}
    >
      <dt>Value</dt>
      <dd style={{ margin: 0 }}>RM 1,250,000.00</dd>
      <dt>Start</dt>
      <dd style={{ margin: 0 }}>1 Dec 2026</dd>
      <dt>End</dt>
      <dd style={{ margin: 0 }}>30 Nov 2027</dd>
    </dl>)</Card>;
```

### Plain surface

Leave out the header for a plain box. `padding` goes from `none` to `lg`, and `withBorder={false}` removes the border.

```tsx
const Plain = () => <Card title={undefined} description={undefined} padding="lg" withBorder>(<dl
      style={{
        margin: 0,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '6px 16px',
      }}
    >
      <dt>Value</dt>
      <dd style={{ margin: 0 }}>RM 1,250,000.00</dd>
      <dt>Start</dt>
      <dd style={{ margin: 0 }}>1 Dec 2026</dd>
      <dt>End</dt>
      <dd style={{ margin: 0 }}>30 Nov 2027</dd>
    </dl>)</Card>;
```

### Page sections

`component` renders a `section`, `article` or `aside` instead of a `div`. The title then labels the element, so it appears as a named region for screen readers.

```tsx
const AsSection = () => <Card
    title="Contract summary"
    description="Key dates and value"
    padding="md"
    withBorder
    component="section">(<dl
      style={{
        margin: 0,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '6px 16px',
      }}
    >
      <dt>Value</dt>
      <dd style={{ margin: 0 }}>RM 1,250,000.00</dd>
      <dt>Start</dt>
      <dd style={{ margin: 0 }}>1 Dec 2026</dd>
      <dt>End</dt>
      <dd style={{ margin: 0 }}>30 Nov 2027</dd>
    </dl>)</Card>;
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` |  |  |
| `description` | `ReactNode` |  |  |
| `actions` | `ReactNode` |  | Buttons or a menu at the top right. |
| `footer` | `ReactNode` |  | Content along the bottom. |
| `padding` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg'` | `md` | Inner padding. |
| `withBorder` | `boolean` | `true` | Draw a border. |
| `component` | `'article' \| 'aside' \| 'div' \| 'section'` | `div` | Render as another element, like `section` or `article`. |

Other HTML attributes pass through.

## Styling

| Selector | Part |
| --- | --- |
| `.kit-card` | The card (`[data-padding]`, `[data-border]`) |
| `.kit-card__header` | The header row |
| `.kit-card__title`, `.kit-card__description` | The header text |
| `.kit-card__actions` | The actions |
| `.kit-card__body` | The content |
| `.kit-card__footer` | The footer |

The card uses the `surfaceRaised`, `border` and `radiusLg` tokens.

## Accessibility

A `div` card is just a container. With `component="section"` (or `article`, `aside`) and a `title`, the element is labelled by the title, so screen-reader users can jump to it.

## Usage guidelines

**Do**

- Use cards to separate independent chunks: a summary, a related list, a chart.

**Don't**

- Don't nest cards inside cards.
- Don't make a whole card clickable and also put buttons in it.

## Related

- **EmptyState**: what a card shows when it has nothing yet.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-data-display-card--docs
