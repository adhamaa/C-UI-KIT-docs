# SegmentedControl

Import: `import { SegmentedControl } from '@adhamaa/ui-kit'`

A row of options where exactly one is chosen, with an indicator that slides to the choice. Good for switching views or periods.

```tsx
import { SegmentedControl } from '@adhamaa/ui-kit'
```

```tsx
const SwitchViews = () => {
    const [view, setView] = useState('List')

    return (
        <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
            <SegmentedControl
                aria-label="View"
                data={['List', 'Map', 'Calendar']}
                defaultValue="List"
                value={view}
                onChange={setView} />
            <div
                style={{
                  padding: 16,
                  border: '1px dashed var(--ui-border)',
                  borderRadius: 'var(--ui-radius)',
                }}>
                {view}view of work orders
                        </div>
        </div>
    );
};
```

## Playground

```tsx
const Playground = () => <SegmentedControl
    aria-label="View"
    data={['List', 'Map', 'Calendar']}
    defaultValue="List"
    onChange={() => {}} />;
```

## Examples

### Switch views

`onChange` receives the new value. There's always a value: the user can't unselect.

```tsx
const SwitchViews = () => {
    const [view, setView] = useState('List')

    return (
        <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
            <SegmentedControl
                aria-label="View"
                data={['List', 'Map', 'Calendar']}
                defaultValue="List"
                value={view}
                onChange={setView} />
            <div
                style={{
                  padding: 16,
                  border: '1px dashed var(--ui-border)',
                  borderRadius: 'var(--ui-radius)',
                }}>
                {view}view of work orders
                        </div>
        </div>
    );
};
```

### With a label

Inside a form, give it a `label` like any other field. On its own, give it an `aria-label`.

```tsx
const WithLabel = () => <SegmentedControl
    aria-label={undefined}
    data={['Day', 'Week', 'Month', 'Year']}
    defaultValue="Month"
    onChange={() => {}}
    label="Period" />;
```

### Full width and disabled options

```tsx
const FullWidth = () => <SegmentedControl
    aria-label="View"
    data={['List', 'Map', 'Calendar']}
    defaultValue="List"
    onChange={() => {}}
    fullWidth />;
```
```tsx
const DisabledOption = () => <SegmentedControl
    aria-label="View"
    data={[
      { value: 'list', label: 'List' },
      { value: 'map', label: 'Map' },
      { value: 'gantt', label: 'Gantt', disabled: true },
    ]}
    defaultValue="list"
    onChange={() => {}} />;
```

## Use with react-hook-form

```tsx
import { RHFSegmentedControl } from '@adhamaa/ui-kit/form'

<RHFSegmentedControl name="period" label="Period" data={['Day', 'Week', 'Month']} />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` |  | The visible label. |
| `description` | `ReactNode` |  | Helper text under the control. |
| `error` | `ReactNode` |  | An error to show. A string or node shows that message; `true` marks the field invalid without a message; `false` or empty clears it. |
| `required` | `boolean` |  | Marks the field required: the browser blocks submit and the label shows an asterisk. |
| `disabled` | `boolean` |  |  |
| `readOnly` | `boolean` |  |  |
| `size` | `enum` | `'md'` | Control height and text size. |
| `className` | `string` |  | Classes for the outer wrapper. |
| `classNames` | `Partial<Record<FieldPart, string>>` |  | Classes for each part: `root`, `label`, `description`, `error`, `control`. |
| `style` | `CSSProperties` |  |  |
| `name` | `string` |  | The name the control submits under. |
| `id` | `string` |  |  |
| `data` (required) | `SelectData` |  |  |
| `value` | `string \| null` |  |  |
| `defaultValue` | `string \| null` |  |  |
| `onChange` | `((value: string) => void)` |  |  |
| `fullWidth` | `boolean` |  | Stretch to the container's width. |
| `aria-label` | `string` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-segmented` | The track |
| `.kit-segmented--full` | Added with `fullWidth` |
| `.kit-segmented__item` | One option |
| `.kit-segmented__indicator` | The sliding highlight |

## Accessibility

Built on [ui-sdk Segmented Control](https://ui-sdk.dev/docs/react/components/segmented-control). It works like a radio group: one Tab stop for the whole row, and the arrow keys move the choice.

| Key | Does |
| --- | --- |
| Tab | Moves onto the chosen option |
| Arrow keys | Choose the next or previous option |

## Usage guidelines

**Do**

- Use it for two to five short options.
- Use it to change what's shown on the page, not to submit data.

**Don't**

- Don't use it for navigation between pages. Use `Tabs`.
- Don't put long labels in it. It doesn't wrap.

## Related

- **RadioGroup**: the same choice, laid out as a list.
- **Tabs**: for switching between panels of content.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-inputs-segmentedcontrol--docs
