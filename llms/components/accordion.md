# Accordion

Import: `import { Accordion } from '@adhamaa/ui-kit'`

Sections that expand and collapse under their headings, like an FAQ or optional form sections.

```tsx
import { Accordion } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <Accordion
    items={[
      {
        value: 'submit',
        title: 'How do I submit a package?',
        content:
          'Open the package, check every tab is complete, then press Submit.',
      },
      {
        value: 'edit',
        title: 'Can I edit a package after submitting?',
        content:
          'Only while it is in review. Ask the reviewer to return it to you.',
      },
      {
        value: 'claims',
        title: 'When are claims paid?',
        content: 'Approved claims are paid at the end of the following month.',
      },
      {
        value: 'archived',
        title: 'Archived packages',
        content: '…',
        disabled: true,
      },
    ]}
    defaultValue={['submit']}
    multiple={false}
    variant="default"
    headingLevel={3}
    onChange={() => {}} />;
```

## Examples

### Items

Each item is `{ value, title, content }`, plus optional `icon` and `disabled`. `defaultValue` (or `value` with `onChange`) is the list of open items.

```tsx
<Accordion items={faqs.map((f) => ({ value: f.id, title: f.question, content: f.answer }))} />
```

### Separated

`variant="separated"` puts each item in its own card.

```tsx
const Separated = () => <Accordion
    items={[
      {
        value: 'submit',
        title: 'How do I submit a package?',
        content:
          'Open the package, check every tab is complete, then press Submit.',
      },
      {
        value: 'edit',
        title: 'Can I edit a package after submitting?',
        content:
          'Only while it is in review. Ask the reviewer to return it to you.',
      },
      {
        value: 'claims',
        title: 'When are claims paid?',
        content: 'Approved claims are paid at the end of the following month.',
      },
      {
        value: 'archived',
        title: 'Archived packages',
        content: '…',
        disabled: true,
      },
    ]}
    defaultValue={['submit']}
    multiple={false}
    variant="separated"
    headingLevel={3}
    onChange={() => {}} />;
```

### Several open

Only one item is open at a time unless you set `multiple`.

```tsx
const Multiple = () => <Accordion
    items={[
      {
        value: 'submit',
        title: 'How do I submit a package?',
        content:
          'Open the package, check every tab is complete, then press Submit.',
      },
      {
        value: 'edit',
        title: 'Can I edit a package after submitting?',
        content:
          'Only while it is in review. Ask the reviewer to return it to you.',
      },
      {
        value: 'claims',
        title: 'When are claims paid?',
        content: 'Approved claims are paid at the end of the following month.',
      },
      {
        value: 'archived',
        title: 'Archived packages',
        content: '…',
        disabled: true,
      },
    ]}
    defaultValue={['submit', 'claims']}
    multiple
    variant="default"
    headingLevel={3}
    onChange={() => {}} />;
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` (required) | `AccordionItemData[]` |  |  |
| `value` | `string[]` |  | Open items. |
| `defaultValue` | `string[]` |  |  |
| `onChange` | `((value: string[]) => void)` |  |  |
| `multiple` | `boolean` | `false` | Allow several open at once. |
| `variant` | `enum` | `default` | `separated`: each item in its own card. |
| `headingLevel` | `enum` | `3` | The heading level of each title, for the page outline. |
| `className` | `string` |  |  |
| `classNames` | `Partial<Record<AccordionPart, string>>` |  |  |

## Styling

| Selector | `classNames` key | Part |
| --- | --- | --- |
| `.kit-accordion` | `root` | The list |
| `.kit-accordion__item` | `item` | One section |
| `.kit-accordion__trigger` | `trigger` | The heading button |
| `.kit-accordion__chevron` | — | The arrow |
| `.kit-accordion__panel` | `panel` | The content |
| `[data-open]` | — | On an open item (from ui-sdk) |

## Accessibility

Built on [ui-sdk Accordion](https://ui-sdk.dev/docs/react/components/accordion), which follows the WAI-ARIA accordion pattern. Each title is a button inside a heading, with `aria-expanded`. Set `headingLevel` (3 by default) so the headings fit the page outline.

| Key | Does |
| --- | --- |
| Enter, Space | Opens or closes the focused item |
| ArrowDown, ArrowUp | Move between item headings |
| Home, End | First or last heading |

## Usage guidelines

**Do**

- Write titles that say what's inside, so people can scan them.

**Don't**

- Don't hide information everyone needs inside an accordion.

## Related

- **Tabs**: one panel at a time, with the labels in a row.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-navigation-accordion--docs
