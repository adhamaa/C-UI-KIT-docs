# MonthPicker

Import: `import { MonthPicker } from '@adhamaa/ui-kit'`

A month field for reports, claims and anything billed by the month. It opens a year switcher and a grid of months. The value is a `YYYY-MM` string.

```tsx
import { MonthPicker, toMonthString } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <MonthPicker label="Reporting month" defaultValue="2026-03" clearable onChange={() => {}} />;
```

## Examples

### Controlled

`onChange` receives `YYYY-MM`, or `null` when cleared. `value` also accepts a `Date`. `toMonthString(value)` converts a Date or ISO string for you.

```tsx
const Controlled = () => {
    const [month, setMonth] = useState<string | null>('2026-03')

    return (
        <MonthPicker
            label="Reporting month"
            clearable
            value={month}
            onChange={setMonth}
            defaultValue={undefined}
            description={month ? `Value: ${month}` : 'No month picked'} />
    );
};
```

### Range and format

`minMonth` and `maxMonth` limit which months can be picked. `monthFormat` shows "March 2026" (`long`, default) or "Mar 2026" (`short`).

### States

```tsx
const States = () => <div style={{ display: 'grid', gap: 16 }}>
    <MonthPicker
        clearable
        onChange={() => {}}
        label="Required"
        required
        defaultValue={null}
        error="Pick a month" />
    <MonthPicker
        defaultValue="2026-03"
        clearable
        onChange={() => {}}
        label="Disabled"
        disabled />
</div>;
```

## Use with react-hook-form

```tsx
import { RHFMonthPicker } from '@adhamaa/ui-kit/form'

<RHFMonthPicker name="reportMonth" label="Reporting month" rules={{ required: true }} />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` |  | The visible label. |
| `description` | `ReactNode` |  | Helper text under the control. |
| `error` | `ReactNode` |  | An error to show. A string or node shows that message; `true` marks the field invalid without a message; `false` or empty clears it. |
| `required` | `boolean` |  | Marks the field required: the browser blocks submit and the label shows an asterisk. |
| `withAsterisk` | `boolean` |  | Show the asterisk without making the control natively required. |
| `disabled` | `boolean` |  |  |
| `readOnly` | `boolean` |  |  |
| `size` | `enum` | `'md'` | Control height and text size. |
| `className` | `string` |  | Classes for the outer wrapper. |
| `classNames` | `Partial<Record<FieldPart, string>>` |  | Classes for each part: `root`, `label`, `description`, `error`, `control`. |
| `style` | `CSSProperties` |  |  |
| `name` | `string` |  | The name the control submits under. |
| `id` | `string` |  |  |
| `value` | `string \| Date \| null` |  | The month as `YYYY-MM`, or `null`. A `Date` is accepted and converted. |
| `defaultValue` | `string \| Date \| null` |  |  |
| `onChange` | `((value: string \| null) => void)` |  | Called with `YYYY-MM`, or `null` when cleared. |
| `onBlur` | `(() => void)` |  |  |
| `minMonth` | `string \| Date` |  | Earliest pickable month, `YYYY-MM`. |
| `maxMonth` | `string \| Date` |  | Latest pickable month, `YYYY-MM`. |
| `clearable` | `boolean` |  | Show a button that clears the month. |
| `placeholder` | `string` |  | Shown while no month is picked. |
| `leftSection` | `ReactNode` |  | Content inside the field, before the month, like a calendar icon. |
| `locale` | `string` | `the page's language` |  |
| `monthFormat` | `enum` | `'long'` | How the field shows the month: `long` is "March 2026", `short` "Mar 2026". |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-month__trigger` | The field, a button that opens the popup |
| `.kit-month__value` | The month shown in the field |
| `.kit-month__popup` | The popup |
| `.kit-month__header`, `.kit-month__year`, `.kit-month__nav` | The year switcher |
| `.kit-month__grid`, `.kit-month__cell` | The months |

## Accessibility

The kit builds this one on ui-sdk's popover. The field is a button named by its label that opens the popup, and focus moves to the chosen month (or the current one).

| Key | Does |
| --- | --- |
| Enter, Space | On the field, opens the popup. On a month, picks it |
| Arrow keys | Move between months |
| Page Up, Page Down | Previous or next year |
| Home, End | January or December |
| Escape | Closes the popup |

## Usage guidelines

**Do**

- Use it whenever the day doesn't matter, rather than a DatePicker with the day ignored.

## Related

- **DatePicker**: a full date.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-dates-monthpicker--docs
