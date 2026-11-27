# NumberInput

Import: `import { NumberInput } from '@adhamaa/ui-kit'`

A field for numbers. It parses what's typed, keeps the value between `min` and `max`, and formats it for display (`1,250,000.00`), while your value stays a plain `number`.

```tsx
import { NumberInput } from '@adhamaa/ui-kit'
```

```tsx
const Currency = () => <NumberInput
    label="Contract value"
    min={0}
    max={undefined}
    defaultValue={1250000}
    withControls={false}
    onChange={() => {}}
    onValueCommit={() => {}}
    prefix="RM"
    decimalScale={2}
    fixedDecimalScale />;
```

## Playground

```tsx
const Playground = () => <NumberInput
    label="Lanes"
    min={1}
    max={8}
    defaultValue={2}
    withControls
    onChange={() => {}}
    onValueCommit={() => {}} />;
```

## Examples

### Money

`prefix` and `suffix` show text beside the number. `decimalScale` sets the digits after the point, and `fixedDecimalScale` always shows them. Thousands are grouped unless you set `thousandSeparator={false}`.

```tsx
const Currency = () => <NumberInput
    label="Contract value"
    min={0}
    max={undefined}
    defaultValue={1250000}
    withControls={false}
    onChange={() => {}}
    onValueCommit={() => {}}
    prefix="RM"
    decimalScale={2}
    fixedDecimalScale />;
```

### Percentages and steps

`step` is how far the arrow keys and step buttons move the value. `withControls` shows the step buttons.

```tsx
const Percent = () => <NumberInput
    label="Progress"
    min={0}
    max={100}
    defaultValue={40}
    withControls
    onChange={() => {}}
    onValueCommit={() => {}}
    suffix="%"
    step={5} />;
```

### Other units

For anything the shorthands don't cover, pass `Intl.NumberFormat` options to `format`. They override `decimalScale`, `fixedDecimalScale` and `thousandSeparator`. `locale` defaults to the page's language.

```tsx
const Units = () => <NumberInput
    label="Road length"
    min={0}
    max={undefined}
    defaultValue={12.4}
    withControls={false}
    onChange={() => {}}
    onValueCommit={() => {}}
    format={{ style: 'unit', unit: 'kilometer', maximumFractionDigits: 1 }}
    step={0.1} />;
```

### Controlled

`onChange` receives a `number`, or `null` when the field is empty, as the user types or steps. `onValueCommit` runs once an edit is finished: on Enter, blur or a step. Use it to save, so you don't save on every key press.

```tsx
const Controlled = () => {
    const [value, setValue] = useState<number | null>(3)

    return (
        <>
            <NumberInput
                label="Lanes"
                min={1}
                max={8}
                withControls
                onValueCommit={() => {}}
                defaultValue={undefined}
                value={value}
                onChange={setValue} />
            <p style={{ marginTop: 8 }}>Value: {value === null ? 'null' : value}({typeof value})
                        </p>
        </>
    );
};
```

The form submits the plain number (`1250000`), not the formatted text.

### States

```tsx
const States = () => <div style={{ display: 'grid', gap: 16 }}>
    <NumberInput
        min={1}
        max={8}
        withControls
        onChange={() => {}}
        onValueCommit={() => {}}
        label="Required"
        required
        defaultValue={null} />
    <NumberInput
        min={1}
        max={8}
        defaultValue={2}
        withControls
        onChange={() => {}}
        onValueCommit={() => {}}
        label="With error"
        error="At most 8 lanes" />
    <NumberInput
        min={1}
        max={8}
        defaultValue={2}
        withControls
        onChange={() => {}}
        onValueCommit={() => {}}
        label="Disabled"
        disabled />
</div>;
```

## Use with react-hook-form

```tsx
import { RHFNumberInput } from '@adhamaa/ui-kit/form'

<RHFNumberInput name="contractValue" label="Contract value" prefix="RM" decimalScale={2} rules={{ required: true, min: 0 }} />
```

The form value is a `number` or `null`.

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
| `value` | `number \| null` |  | The number, or `null` when empty. |
| `defaultValue` | `number \| null` |  |  |
| `onChange` | `((value: number \| null) => void)` |  | Called with the number as the user types or steps, `null` when empty. |
| `onValueCommit` | `((value: number \| null) => void)` |  | Called once an edit is committed: on Enter, blur or a step. |
| `onBlur` | `FocusEventHandler<HTMLInputElement>` |  |  |
| `min` | `number` |  |  |
| `max` | `number` |  |  |
| `step` | `number` | `1` |  |
| `decimalScale` | `number` |  | Digits after the decimal point. Shorthand for `format.maximumFractionDigits`. |
| `fixedDecimalScale` | `boolean` |  | Always show `decimalScale` digits, like `1.50`. |
| `thousandSeparator` | `boolean` | `true` | Group thousands, like `12,500`. |
| `prefix` | `ReactNode` |  | Text before the number, like `RM `. Shown beside the field. |
| `suffix` | `ReactNode` |  | Text after the number, like `%`. |
| `format` | `NumberFormatOptions` |  | Full `Intl.NumberFormat` options; overrides the shorthands above. |
| `locale` | `string` | `the page's language` |  |
| `withControls` | `boolean` | `false` | Show step buttons. |
| `placeholder` | `string` |  |  |

## Styling

Uses the **TextInput** classes, plus:

| Selector | Part |
| --- | --- |
| `.kit-input__affix` | The prefix or suffix |
| `.kit-number__steppers` | The step buttons' column |
| `.kit-number__step` | One step button |

## Accessibility

Built on [ui-sdk Number Input](https://ui-sdk.dev/docs/react/components/number-input), which follows the keyboard model of the WAI-ARIA spinbutton pattern on a native text input, so normal text editing still works.

| Key | Does |
| --- | --- |
| ArrowUp, ArrowDown | Steps by `step` |
| Shift + arrow, Page Up, Page Down | Steps by ten steps |
| Alt (Option) + arrow | Steps by a tenth of a step |
| Home, End | Goes to `min` or `max`, when set |
| Enter | Commits the typed text |

The step buttons stay out of the Tab order, because the arrow keys do the same thing.

## Usage guidelines

**Do**

- Use it for values people calculate with: money, quantities, lengths, percentages.
- Set `min` and `max` when the value has real limits.
- Show the unit with `prefix`, `suffix` or `format`, not only in the label.

**Don't**

- Don't use it for numbers that are really codes: phone numbers, IC numbers, postcodes. Use `TextInput` with `inputMode="numeric"`.
- Don't add `withControls` for large values like money. Nobody steps to RM 1,250,000.

## Related

- **TextInput**: for numeric codes.
- **DataTable**: `NumberCellEditor` edits numbers inside a table.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-inputs-numberinput--docs
