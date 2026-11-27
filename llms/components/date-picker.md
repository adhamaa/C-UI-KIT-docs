# DatePicker

Import: `import { DatePicker } from '@adhamaa/ui-kit'`

A date field: type the date, or pick it from a calendar. The value is always an ISO `YYYY-MM-DD` string, whatever the field shows.

```tsx
import { DatePicker, toDateString } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <DatePicker label="Start date" defaultValue="2026-11-17" clearable onChange={() => {}} />;
```

## Examples

### Values

`onChange` receives `YYYY-MM-DD`, or `null` when cleared. `value` and `defaultValue` also accept a `Date`, or any string `Date` can read, like the HTTP date format some APIs send. They are converted to the local calendar date.

```tsx
const ApiDates = () => {
    const [value, setValue] = useState<string | null>(null)

    return (
        <>
            <DatePicker
                clearable
                label="From an API"
                defaultValue="Sat, 21 Nov 2026 12:00:00 GMT"
                onChange={setValue} />
            <p style={{ marginTop: 8 }}>onChange value: {String(value)}</p>
        </>
    );
};
```

To convert a value yourself, use `toDateString(value)`.

### Min and max

`minDate` and `maxDate` limit which dates can be picked. Dates outside the range are disabled in the calendar.

```tsx
const MinAndMax = () => <DatePicker
    label="Due date"
    defaultValue={null}
    clearable
    onChange={() => {}}
    minDate="2026-11-01"
    maxDate="2026-12-31"
    description="November or December 2026" />;
```

### Written out

`displayFormat` takes `Intl.DateTimeFormat` options and shows the date written out, like "17 November 2026". The field then can't be typed in: pressing it opens the calendar. `locale` sets the language and defaults to the page's.

```tsx
const WrittenOut = () => <DatePicker
    label="Inspection date"
    defaultValue="2026-11-17"
    clearable
    onChange={() => {}}
    placeholder="Pick a date"
    locale="en-GB"
    displayFormat={{ day: 'numeric', month: 'long', year: 'numeric' }}
    leftSection={<icons.CalendarIcon />} />;
```

### States

```tsx
const States = () => <div style={{ display: 'grid', gap: 16 }}>
    <DatePicker
        clearable
        onChange={() => {}}
        label="Required"
        required
        defaultValue={null}
        error="Pick a start date" />
    <DatePicker
        defaultValue="2026-11-17"
        clearable
        onChange={() => {}}
        label="Disabled"
        disabled />
    <DatePicker
        defaultValue="2026-11-17"
        clearable
        onChange={() => {}}
        label="Read-only"
        readOnly />
</div>;
```

## Use with react-hook-form

```tsx
import { RHFDatePicker } from '@adhamaa/ui-kit/form'

<RHFDatePicker name="startDate" label="Start date" minDate="2026-01-01" rules={{ required: true }} />
```

The form value is a `YYYY-MM-DD` string or `null`.

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
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Control height and text size. |
| `className` | `string` |  | Classes for the outer wrapper. |
| `classNames` | `Partial<Record<FieldPart, string>>` |  | Classes for each part: `root`, `label`, `description`, `error`, `control`. |
| `style` | `CSSProperties` |  |  |
| `name` | `string` |  | The name the control submits under. |
| `id` | `string` |  |  |
| `value` | `string \| Date \| null` |  | The date as `YYYY-MM-DD`, or `null`. A `Date`, or any date string `Date` can read, is accepted and converted. |
| `defaultValue` | `string \| Date \| null` |  |  |
| `onChange` | `((value: string \| null) => void)` |  | Called with `YYYY-MM-DD`, or `null` when cleared. |
| `onBlur` | `(() => void)` |  |  |
| `minDate` | `string \| Date` |  | Earliest pickable date, `YYYY-MM-DD`. |
| `maxDate` | `string \| Date` |  | Latest pickable date, `YYYY-MM-DD`. |
| `clearable` | `boolean` |  | Show a button that clears the date. Hidden while disabled or read-only. |
| `placeholder` | `string` |  | Shown while the field is empty. |
| `displayFormat` | `DateTimeFormatOptions` |  | Show the date written out, like `{ day: 'numeric', month: 'long', year: 'numeric' }` for "21 May 2026", instead of a typed field. The field then opens the calendar when pressed, and can't be typed in. |
| `leftSection` | `ReactNode` |  | Content inside the field, before the date, like a calendar icon. |
| `locale` | `string` | `the page's language` |  |
| `triggerLabel` | `string` | `'Choose date'` | Label of the button that opens the calendar. |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-input.kit-date` | The field box |
| `.kit-date__input` | The typed input |
| `.kit-date__display` | The written-out date (with `displayFormat`) |
| `.kit-date__trigger` | The calendar button |
| `.kit-popover.kit-calendar` | The calendar popup |

## Accessibility

Built on [ui-sdk Date Picker](https://ui-sdk.dev/docs/react/components/date-picker), which follows the WAI-ARIA date picker dialog pattern: a plain text input, a button that opens a dialog, and a grid of days inside it. Focus moves into the grid when it opens and back to the button when a date is picked.

| Key | Where | Does |
| --- | --- | --- |
| Enter | Input | Commits the typed date |
| Alt + ArrowDown | Input | Opens the calendar |
| Enter, Space | Calendar button | Opens or closes the calendar |
| Arrow keys | Calendar | Move between days |
| Page Up, Page Down | Calendar | Previous or next month |
| Escape | Calendar | Closes it |

`triggerLabel` sets the calendar button's name ("Choose date" by default). Translate it for other languages.

## Usage guidelines

**Do**

- Set `minDate` and `maxDate` when only some dates make sense.
- Use `displayFormat` when the date is usually picked, not typed, and reading it matters, like on a summary form.

**Don't**

- Don't format the value yourself before saving. Send the ISO string to the API.

## Related

- **MonthPicker**: when only the month matters.
- **TimeInput**: a time of day.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-dates-datepicker--docs
