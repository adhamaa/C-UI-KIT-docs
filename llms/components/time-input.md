# TimeInput

Import: `import { TimeInput } from '@adhamaa/ui-kit'`

A time-of-day field, typed segment by segment: hours, minutes and, on a 12-hour clock, AM or PM. The value is always 24-hour `HH:mm`.

```tsx
import { TimeInput } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <TimeInput label="Inspection time" defaultValue="09:30" onChange={() => {}} />;
```

## Examples

### Clocks

`hourCycle` shows a 12 or 24-hour clock, and defaults to the locale's. `withSeconds` adds a seconds segment.

```tsx
const Clocks = () => <div style={{ display: 'grid', gap: 16 }}>
    <TimeInput defaultValue="09:30" onChange={() => {}} label="24-hour" hourCycle={24} />
    <TimeInput defaultValue="09:30" onChange={() => {}} label="12-hour" hourCycle={12} />
    <TimeInput defaultValue="09:30" onChange={() => {}} label="With seconds" withSeconds />
</div>;
```

### Controlled

`onChange` receives `HH:mm` (or `HH:mm:ss` with seconds), or `null` while the time is incomplete or empty. That's true even when a 12-hour clock is shown.

```tsx
const Controlled = () => {
    const [value, setValue] = useState<string | null>('14:30')

    return (
        <>
            <TimeInput
                label="Inspection time"
                hourCycle={12}
                value={value}
                onChange={setValue}
                defaultValue={undefined} />
            <p style={{ marginTop: 8 }}>Value: {String(value)}</p>
        </>
    );
};
```

### Min and max

`min` and `max` take `HH:mm`. A time outside the range is marked invalid.

```tsx
const WorkingHours = () => <TimeInput
    label="Lane closure from"
    defaultValue="21:00"
    onChange={() => {}}
    min="22:00"
    max="23:59"
    description="Night work: from 22:00" />;
```

## Use with react-hook-form

```tsx
import { RHFTimeInput } from '@adhamaa/ui-kit/form'

<RHFTimeInput name="inspectionTime" label="Inspection time" rules={{ required: true }} />
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
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Control height and text size. |
| `className` | `string` |  | Classes for the outer wrapper. |
| `classNames` | `Partial<Record<FieldPart, string>>` |  | Classes for each part: `root`, `label`, `description`, `error`, `control`. |
| `style` | `CSSProperties` |  |  |
| `name` | `string` |  | The name the control submits under. |
| `id` | `string` |  |  |
| `value` | `string \| null` |  | The time as `HH:mm` (24-hour), or `null`. |
| `defaultValue` | `string \| null` |  |  |
| `onChange` | `((value: string \| null) => void)` |  |  |
| `onBlur` | `FocusEventHandler<HTMLElement>` |  |  |
| `withSeconds` | `boolean` |  | Show seconds as well. |
| `hourCycle` | `12 \| 24` | `the locale's` | Use a 12 or 24 hour clock. |
| `min` | `string` |  |  |
| `max` | `string` |  |  |

## Styling

The box uses the **TextInput** classes. The segments are inside `.kit-time__input`, and each has `[data-type]` (`hour`, `minute`, `second`, `dayPeriod`) from ui-sdk.

## Accessibility

Built on [ui-sdk Time Input](https://ui-sdk.dev/docs/react/components/time-input). The field is a group named by its label, and each segment is a spinbutton named by its unit.

| Key | Does |
| --- | --- |
| Digits | Fill the segment and move to the next |
| ArrowUp, ArrowDown | Step the segment, wrapping around |
| Page Up, Page Down | Bigger steps |
| ArrowLeft, ArrowRight | Move between segments |
| Backspace | Empties the segment, then moves back |

## Usage guidelines

**Do**

- Store and send the 24-hour value. Let the field show the user's clock.

**Don't**

- Don't use it for durations ("2 hours 30 minutes"). Use `NumberInput`.

## Related

- **DatePicker**: a date.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-dates-timeinput--docs
