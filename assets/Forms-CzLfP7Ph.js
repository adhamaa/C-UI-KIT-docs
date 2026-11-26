import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,u as a}from"./blocks-Df9VTtJH.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Forms with react-hook-form`}),`
`,(0,c.jsx)(t.h1,{id:`forms-with-react-hook-form`,children:`Forms with react-hook-form`}),`
`,(0,c.jsxs)(t.p,{children:[`Import from `,(0,c.jsx)(t.code,{children:`@adhamaa/ui-kit/form`}),`. Every kit field has an `,(0,c.jsx)(t.code,{children:`RHF`}),` version that takes the field's own props plus:`]}),`
`,(0,c.jsxs)(t.p,{children:[`| Prop | |
| --- | --- |
| `,(0,c.jsx)(t.code,{children:`name`}),` | The form field. Required. |
| `,(0,c.jsx)(t.code,{children:`rules`}),` | Validation rules, as in `,(0,c.jsx)(t.code,{children:`register`}),`. `,(0,c.jsx)(t.code,{children:`required`}),` also shows the asterisk. |
| `,(0,c.jsx)(t.code,{children:`defaultValue`}),` | The field's default, if the form has none. |
| `,(0,c.jsx)(t.code,{children:`control`}),` | Only when the field isn't inside `,(0,c.jsx)(t.code,{children:`<FormProvider>`}),`. |`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { useForm, FormProvider } from 'react-hook-form'
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
`})}),`
`,(0,c.jsx)(t.p,{children:`The kit doesn't depend on zod or any other schema library; use whichever resolver your app has.`}),`
`,(0,c.jsx)(t.h2,{id:`available-fields`,children:`Available fields`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`RHFTextInput`}),`, `,(0,c.jsx)(t.code,{children:`RHFPasswordInput`}),`, `,(0,c.jsx)(t.code,{children:`RHFTextarea`}),`, `,(0,c.jsx)(t.code,{children:`RHFNumberInput`}),`, `,(0,c.jsx)(t.code,{children:`RHFSelect`}),`, `,(0,c.jsx)(t.code,{children:`RHFMultiSelect`}),`, `,(0,c.jsx)(t.code,{children:`RHFAutocomplete`}),`, `,(0,c.jsx)(t.code,{children:`RHFInfiniteSelect`}),`, `,(0,c.jsx)(t.code,{children:`RHFCheckbox`}),`, `,(0,c.jsx)(t.code,{children:`RHFSwitch`}),`, `,(0,c.jsx)(t.code,{children:`RHFRadioGroup`}),`, `,(0,c.jsx)(t.code,{children:`RHFChip`}),`, `,(0,c.jsx)(t.code,{children:`RHFSegmentedControl`}),`, `,(0,c.jsx)(t.code,{children:`RHFDatePicker`}),`, `,(0,c.jsx)(t.code,{children:`RHFMonthPicker`}),`, `,(0,c.jsx)(t.code,{children:`RHFTimeInput`}),`, `,(0,c.jsx)(t.code,{children:`RHFFileInput`}),`, `,(0,c.jsx)(t.code,{children:`RHFColorInput`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`value-types`,children:`Value types`}),`
`,(0,c.jsxs)(t.p,{children:[`| Field | Value |
| --- | --- |
| Text, password, textarea, autocomplete | `,(0,c.jsx)(t.code,{children:`string`}),` |
| Number | `,(0,c.jsx)(t.code,{children:`number \\| null`}),` |
| Select, radio, segmented | `,(0,c.jsx)(t.code,{children:`string \\| null`}),` |
| Multi-select | `,(0,c.jsx)(t.code,{children:`string[]`}),` |
| Checkbox, switch, chip | `,(0,c.jsx)(t.code,{children:`boolean`}),` |
| Date | `,(0,c.jsx)(t.code,{children:`'YYYY-MM-DD' \\| null`}),` |
| Time | `,(0,c.jsx)(t.code,{children:`'HH:mm' \\| null`}),` |
| File | `,(0,c.jsx)(t.code,{children:`File \\| null`}),`, or `,(0,c.jsx)(t.code,{children:`File[]`}),` with `,(0,c.jsx)(t.code,{children:`multiple`}),` |
| Colour | CSS colour string |`]}),`
`,(0,c.jsx)(t.h2,{id:`error-messages`,children:`Error messages`}),`
`,(0,c.jsxs)(t.p,{children:[`A failed rule shows its own message (`,(0,c.jsx)(t.code,{children:`rules={{ required: 'Enter a name' }}`}),`). A rule without one shows the default, `,(0,c.jsx)(t.em,{children:`This field is required`}),`. Change the default for a whole subtree:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<RHFFieldDefaults requiredMessage="Wajib diisi">…</RHFFieldDefaults>
`})}),`
`,(0,c.jsx)(t.h2,{id:`infinite-and-server-searched-selects`,children:`Infinite and server-searched selects`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`InfiniteSelect`}),` and `,(0,c.jsx)(t.code,{children:`RHFInfiniteSelect`}),` take one function that fetches a page. They debounce search, load more on scroll, cancel stale requests and remember labels of selected values:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<RHFInfiniteSelect
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
`})}),`
`,(0,c.jsxs)(t.p,{children:[`It doesn't depend on TanStack Query. If your data already comes from `,(0,c.jsx)(t.code,{children:`useInfiniteQuery`}),`, pass it to a plain `,(0,c.jsx)(t.code,{children:`Select`}),` or `,(0,c.jsx)(t.code,{children:`MultiSelect`}),` with `,(0,c.jsx)(t.code,{children:`data`}),`, `,(0,c.jsx)(t.code,{children:`hasMore`}),`, `,(0,c.jsx)(t.code,{children:`onLoadMore`}),`, `,(0,c.jsx)(t.code,{children:`loading`}),` and `,(0,c.jsx)(t.code,{children:`onSearchChange`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`config-driven-forms`,children:`Config-driven forms`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`FormFields`}),` renders fields from an array, and `,(0,c.jsx)(t.code,{children:`FormDialog`}),` wraps that in a dialog with Cancel and Submit:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { FormDialog, openFormDialog } from '@adhamaa/ui-kit/form'

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
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Field `,(0,c.jsx)(t.code,{children:`type`}),`s: `,(0,c.jsx)(t.code,{children:`text`}),`, `,(0,c.jsx)(t.code,{children:`email`}),`, `,(0,c.jsx)(t.code,{children:`number`}),`, `,(0,c.jsx)(t.code,{children:`password`}),`, `,(0,c.jsx)(t.code,{children:`textarea`}),`, `,(0,c.jsx)(t.code,{children:`select`}),`, `,(0,c.jsx)(t.code,{children:`multiselect`}),`, `,(0,c.jsx)(t.code,{children:`radio`}),`, `,(0,c.jsx)(t.code,{children:`checkbox`}),`, `,(0,c.jsx)(t.code,{children:`switch`}),`, `,(0,c.jsx)(t.code,{children:`date`}),`, `,(0,c.jsx)(t.code,{children:`time`}),`, `,(0,c.jsx)(t.code,{children:`file`}),`, `,(0,c.jsx)(t.code,{children:`custom`}),`. Pass any other prop of the underlying component through `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`binding-your-own-component`,children:`Binding your own component`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { createRHFField } from '@adhamaa/ui-kit/form'

const RHFRating = createRHFField(Rating, ({ field }) => ({
  value: field.value ?? 0,
  onChange: field.onChange,
}))
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The component receives `,(0,c.jsx)(t.code,{children:`name`}),`, `,(0,c.jsx)(t.code,{children:`ref`}),`, `,(0,c.jsx)(t.code,{children:`error`}),` (the message) and `,(0,c.jsx)(t.code,{children:`withAsterisk`}),` automatically.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};