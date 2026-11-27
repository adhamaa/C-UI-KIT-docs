# Forms with react-hook-form

Import from `@adhamaa/ui-kit/form`. Every kit field has an `RHF` version that takes the field's own props plus:

| Prop | |
| --- | --- |
| `name` | The form field. Required. |
| `rules` | Validation rules, as in `register`. `required` also shows the asterisk. |
| `defaultValue` | The field's default, if the form has none. |
| `control` | Only when the field isn't inside `<FormProvider>`. |

```tsx
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RHFTextInput, RHFSelect, RHFDatePicker } from '@adhamaa/ui-kit/form'

const methods = useForm({ resolver: zodResolver(schema) })

<FormProvider {...methods}>
  <form onSubmit={methods.handleSubmit(save)}>
    <RHFTextInput name="package_name" label="Package name" />
    <RHFSelect name="state" label="State" data={states} />
    <RHFDatePicker name="start_date" label="Start date" />
  </form>
</FormProvider>
```

The kit doesn't depend on zod or any other schema library; use whichever resolver your app has.

## Available fields

`RHFTextInput`, `RHFPasswordInput`, `RHFTextarea`, `RHFNumberInput`, `RHFSelect`, `RHFMultiSelect`, `RHFAutocomplete`, `RHFInfiniteSelect`, `RHFCheckbox`, `RHFSwitch`, `RHFRadioGroup`, `RHFChip`, `RHFSegmentedControl`, `RHFDatePicker`, `RHFMonthPicker`, `RHFTimeInput`, `RHFFileInput`, `RHFColorInput`.

## Value types

| Field | Value |
| --- | --- |
| Text, password, textarea, autocomplete | `string` |
| Number | `number \| null` |
| Select, radio, segmented | `string \| null` |
| Multi-select | `string[]` |
| Checkbox, switch, chip | `boolean` |
| Date | `'YYYY-MM-DD' \| null` |
| Time | `'HH:mm' \| null` |
| File | `File \| null`, or `File[]` with `multiple` |
| Colour | CSS colour string |

## Error messages

A failed rule shows its own message (`rules={{ required: 'Enter a name' }}`). A rule without one shows the default, *This field is required*. Change the default for a whole subtree:

```tsx
<RHFFieldDefaults requiredMessage="Wajib diisi">…</RHFFieldDefaults>
```

## Infinite and server-searched selects

`InfiniteSelect` and `RHFInfiniteSelect` take one function that fetches a page. They debounce search, load more on scroll, cancel stale requests and remember labels of selected values:

```tsx
<RHFInfiniteSelect
  name="contractor_uuid"
  label="Contractor"
  initialOptions={record ? [{ value: record.contractor_uuid, label: record.contractor_name }] : []}
  loadOptions={async ({ search, page, signal }) => {
    const res = await services.contractors.list({ search, page: page + 1, per_page: 20 }, { signal })
    return {
      options: res.data.map((c) => ({ value: c.uuid, label: c.name })),
      hasMore: res.meta.current_page < res.meta.last_page,
    }
  }}
/>
```

It doesn't depend on TanStack Query. If your data already comes from `useInfiniteQuery`, pass it to a plain `Select` or `MultiSelect` with `data`, `hasMore`, `onLoadMore`, `loading` and `onSearchChange`.

## Config-driven forms

`FormFields` renders fields from an array, and `FormDialog` wraps that in a dialog with Cancel and Submit:

```tsx
import { FormDialog, openFormDialog } from '@adhamaa/ui-kit/form'

openFormDialog({
  title: 'Add item',
  fields: [
    { name: 'item_name', label: 'Item name', type: 'text', required: true },
    { group: [
      { name: 'unit', label: 'Unit', type: 'select', options: ['m', 'm²'] },
      { name: 'rate', label: 'Rate', type: 'number' },
    ] },
    { name: 'photo', label: 'Photo', type: 'custom', render: () => <MyUploader /> },
  ],
  onSubmit: (values) => createItem.mutateAsync(values), // stays open, pending, until it resolves
})
```

Field `type`s: `text`, `email`, `number`, `password`, `textarea`, `select`, `multiselect`, `radio`, `checkbox`, `switch`, `date`, `time`, `file`, `custom`. Pass any other prop of the underlying component through `props`.

## Binding your own component

```tsx
import { createRHFField } from '@adhamaa/ui-kit/form'

const RHFRating = createRHFField(Rating, ({ field }) => ({
  value: field.value ?? 0,
  onChange: field.onChange,
}))
```

The component receives `name`, `ref`, `error` (the message) and `withAsterisk` automatically.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/forms-with-react-hook-form--docs
