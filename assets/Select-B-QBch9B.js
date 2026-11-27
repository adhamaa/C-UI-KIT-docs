import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-BPgqBUap.js";import{a as u,c as d,d as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./Select.stories-BXZQbSb2.js";function x(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a,{of:g}),`
`,(0,C.jsx)(t.h1,{id:`select`,children:`Select`}),`
`,(0,C.jsxs)(t.p,{children:[`Picks one option from a list. Add `,(0,C.jsx)(t.code,{children:`searchable`}),` to filter the list, `,(0,C.jsx)(t.code,{children:`clearable`}),` to allow no value, and the async props to search and page through options on the server.`]}),`
`,(0,C.jsx)(o,{language:`tsx`,dark:!0,code:`import { Select } from '@adhamaa/ui-kit'`}),`
`,(0,C.jsx)(c,{of:u}),`
`,(0,C.jsx)(t.p,{children:(0,C.jsx)(t.strong,{children:`Pick the right list component:`})}),`
`,(0,C.jsxs)(t.table,{children:[(0,C.jsx)(t.thead,{children:(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.th,{children:`You need`}),(0,C.jsx)(t.th,{children:`Use`})]})}),(0,C.jsxs)(t.tbody,{children:[(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:`One value from a fixed list`}),(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`Select`})})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:`Several values, or values the user can create`}),(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`MultiSelect`})})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:`Free text with suggestions, where any text is allowed`}),(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`Autocomplete`})})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:`One value from a large remote list that loads page by page`}),(0,C.jsxs)(t.td,{children:[(0,C.jsx)(t.code,{children:`InfiniteSelect`}),`, or `,(0,C.jsx)(t.code,{children:`Select`}),` with the async props (below)`]})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:`Two to five options, all visible at once`}),(0,C.jsxs)(t.td,{children:[(0,C.jsx)(t.code,{children:`SegmentedControl`}),` or `,(0,C.jsx)(t.code,{children:`RadioGroup`})]})]})]})]}),`
`,(0,C.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,C.jsx)(c,{of:p}),`
`,(0,C.jsx)(i,{of:p}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`options`,children:`Options`}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.code,{children:`data`}),` takes three shapes, and you can mix them:`]}),`
`,(0,C.jsx)(t.pre,{children:(0,C.jsx)(t.code,{className:`language-tsx`,children:`// Strings: each one is both the value and the label.
data={['Draft', 'Published']}

// Objects: a separate value and label, and optionally disabled.
data={[{ value: 'draft', label: 'Draft' }, { value: 'archived', label: 'Archived', disabled: true }]}

// Groups: options under a heading.
data={[{ group: 'Pavement', items: ['Flexible', 'Rigid'] }]}
`})}),`
`,(0,C.jsx)(c,{of:_}),`
`,(0,C.jsx)(t.h3,{id:`groups`,children:`Groups`}),`
`,(0,C.jsx)(c,{of:h}),`
`,(0,C.jsx)(t.h3,{id:`controlled`,children:`Controlled`}),`
`,(0,C.jsxs)(t.p,{children:[`Pass `,(0,C.jsx)(t.code,{children:`value`}),` and `,(0,C.jsx)(t.code,{children:`onChange`}),` to own the state. `,(0,C.jsx)(t.code,{children:`onChange`}),` receives the value, or `,(0,C.jsx)(t.code,{children:`null`}),` when cleared, plus the whole option object. Use `,(0,C.jsx)(t.code,{children:`defaultValue`}),` instead to let the Select keep its own state.`]}),`
`,(0,C.jsx)(c,{of:y}),`
`,(0,C.jsx)(t.pre,{children:(0,C.jsx)(t.code,{className:`language-tsx`,children:`const [status, setStatus] = useState<string | null>(null)

<Select
  label="Status"
  data={statuses}
  value={status}
  onChange={(value, option) => setStatus(value)}
/>
`})}),`
`,(0,C.jsx)(t.h3,{id:`field-states`,children:`Field states`}),`
`,(0,C.jsxs)(t.p,{children:[`Select takes the same field props as every kit input: `,(0,C.jsx)(t.code,{children:`label`}),`, `,(0,C.jsx)(t.code,{children:`description`}),`, `,(0,C.jsx)(t.code,{children:`error`}),`, `,(0,C.jsx)(t.code,{children:`required`}),`, `,(0,C.jsx)(t.code,{children:`withAsterisk`}),`, `,(0,C.jsx)(t.code,{children:`disabled`}),` and `,(0,C.jsx)(t.code,{children:`readOnly`}),`. A read-only Select stays focusable and submits its value. A disabled one does neither.`]}),`
`,(0,C.jsx)(c,{of:m}),`
`,(0,C.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,C.jsx)(c,{of:d}),`
`,(0,C.jsx)(t.h3,{id:`left-section`,children:`Left section`}),`
`,(0,C.jsx)(c,{of:b}),`
`,(0,C.jsx)(t.h3,{id:`server-side-search-and-paging`,children:`Server-side search and paging`}),`
`,(0,C.jsx)(t.p,{children:`For a list too big to load at once, search and page on the server:`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.code,{children:`onSearchChange`}),` is called as the user types. Setting it turns off local filtering and shows the search field.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.code,{children:`loading`}),` shows a loader in the list.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.code,{children:`hasMore`}),` and `,(0,C.jsx)(t.code,{children:`onLoadMore`}),` load the next page when the list scrolls to the end.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.code,{children:`getOptionLabel`}),` gives the trigger a label for a selected value that isn't in the current page of `,(0,C.jsx)(t.code,{children:`data`}),`.`]}),`
`]}),`
`,(0,C.jsx)(c,{of:v}),`
`,(0,C.jsx)(t.pre,{children:(0,C.jsx)(t.code,{className:`language-tsx`,children:`const [search, setSearch] = useState('')
const query = useInfiniteQuery({ queryKey: ['contractors', search], … })

<Select
  label="Contractor"
  data={query.data?.pages.flat().map((c) => ({ value: c.uuid, label: c.name }))}
  onSearchChange={setSearch}
  loading={query.isFetching}
  hasMore={query.hasNextPage}
  onLoadMore={query.fetchNextPage}
/>
`})}),`
`,(0,C.jsxs)(t.p,{children:[`If you'd rather pass a single `,(0,C.jsx)(t.code,{children:`loadOptions`}),` function and let the component handle paging, use `,(0,C.jsx)(t.code,{children:`InfiniteSelect`}),`.`]}),`
`,(0,C.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.code,{children:`RHFSelect`}),` from `,(0,C.jsx)(t.code,{children:`@adhamaa/ui-kit/form`}),` takes the same props plus `,(0,C.jsx)(t.code,{children:`name`}),`, and wires value, change, blur and the error message to the form.`]}),`
`,(0,C.jsx)(t.pre,{children:(0,C.jsx)(t.code,{className:`language-tsx`,children:`import { FormProvider, useForm } from 'react-hook-form'
import { RHFSelect } from '@adhamaa/ui-kit/form'

const form = useForm({ defaultValues: { state: null } })

<FormProvider {...form}>
  <RHFSelect name="state" label="State" data={states} rules={{ required: true }} />
</FormProvider>
`})}),`
`,(0,C.jsxs)(t.p,{children:[`See `,(0,C.jsx)(t.strong,{children:`Forms with react-hook-form`}),` for config-driven forms.`]}),`
`,(0,C.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,C.jsx)(s,{of:g}),`
`,(0,C.jsx)(t.p,{children:`The ref goes to the trigger button.`}),`
`,(0,C.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,C.jsxs)(t.table,{children:[(0,C.jsx)(t.thead,{children:(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.th,{children:`Selector`}),(0,C.jsx)(t.th,{children:`Part`})]})}),(0,C.jsxs)(t.tbody,{children:[(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`.kit-input.kit-select`})}),(0,C.jsx)(t.td,{children:`The field box around the trigger`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`.kit-select__trigger`})}),(0,C.jsx)(t.td,{children:`The button that opens the list`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`.kit-select__value`})}),(0,C.jsx)(t.td,{children:`The selected label, or the placeholder`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`.kit-select__chevron`})}),(0,C.jsx)(t.td,{children:`The arrow on the right`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`.kit-input__clear`})}),(0,C.jsxs)(t.td,{children:[`The clear button (`,(0,C.jsx)(t.code,{children:`clearable`}),`)`]})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`.kit-listbox`})}),(0,C.jsx)(t.td,{children:`The popup list`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`.kit-listbox__search`})}),(0,C.jsx)(t.td,{children:`The search field in the list`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`.kit-listbox__item`})}),(0,C.jsx)(t.td,{children:`One option`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`.kit-listbox__group-label`})}),(0,C.jsx)(t.td,{children:`A group heading`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`.kit-listbox__empty`})}),(0,C.jsx)(t.td,{children:`The "Nothing found" message`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsxs)(t.td,{children:[(0,C.jsx)(t.code,{children:`[data-highlighted]`}),`, `,(0,C.jsx)(t.code,{children:`[data-selected]`})]}),(0,C.jsx)(t.td,{children:`On the item under the keyboard or pointer, and on the chosen item (from ui-sdk)`})]})]})]}),`
`,(0,C.jsxs)(t.p,{children:[`The `,(0,C.jsx)(t.code,{children:`classNames`}),` prop adds classes to the field parts: `,(0,C.jsx)(t.code,{children:`root`}),`, `,(0,C.jsx)(t.code,{children:`label`}),`, `,(0,C.jsx)(t.code,{children:`description`}),`, `,(0,C.jsx)(t.code,{children:`error`}),` and `,(0,C.jsx)(t.code,{children:`control`}),`. Selected options use the `,(0,C.jsx)(t.code,{children:`primarySoft`}),` token.`]}),`
`,(0,C.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(t.p,{children:[`Built on `,(0,C.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/select`,rel:`nofollow`,children:`ui-sdk Select`}),`, which follows the WAI-ARIA select-only combobox pattern. The trigger has the `,(0,C.jsx)(t.code,{children:`combobox`}),` role and the list is a `,(0,C.jsx)(t.code,{children:`listbox`}),`. The `,(0,C.jsx)(t.code,{children:`label`}),` names the trigger, and the description and error describe it.`]}),`
`,(0,C.jsxs)(t.table,{children:[(0,C.jsx)(t.thead,{children:(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.th,{children:`Key`}),(0,C.jsx)(t.th,{children:`Does`})]})}),(0,C.jsxs)(t.tbody,{children:[(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:`Enter, Space, ArrowDown`}),(0,C.jsx)(t.td,{children:`On the trigger, opens the list`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:`ArrowUp, ArrowDown`}),(0,C.jsx)(t.td,{children:`Moves through the options, skipping disabled ones`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:`Home, End`}),(0,C.jsx)(t.td,{children:`Goes to the first or last option`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:`Typing`}),(0,C.jsx)(t.td,{children:`Jumps to the next option that starts with the typed text`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:`Enter`}),(0,C.jsx)(t.td,{children:`Chooses the option, closes the list and returns focus to the trigger`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:`Escape`}),(0,C.jsx)(t.td,{children:`Closes without choosing and returns focus to the trigger`})]})]})]}),`
`,(0,C.jsxs)(t.p,{children:[`If a Select has no visible `,(0,C.jsx)(t.code,{children:`label`}),`, give it an `,(0,C.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,C.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(t.p,{children:(0,C.jsx)(t.strong,{children:`Do`})}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[`Always give it a `,(0,C.jsx)(t.code,{children:`label`}),`. The placeholder disappears once there's a value.`]}),`
`,(0,C.jsxs)(t.li,{children:[`Add `,(0,C.jsx)(t.code,{children:`searchable`}),` when there are more than about 10 options.`]}),`
`,(0,C.jsx)(t.li,{children:`Use option objects with stable IDs as values, so renaming a label doesn't break saved data.`}),`
`]}),`
`,(0,C.jsx)(t.p,{children:(0,C.jsx)(t.strong,{children:`Don't`})}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[`Don't use Select for two or three options. Show them all with `,(0,C.jsx)(t.code,{children:`SegmentedControl`}),` or `,(0,C.jsx)(t.code,{children:`RadioGroup`}),`.`]}),`
`,(0,C.jsxs)(t.li,{children:[`Don't load thousands of options at once. Use the server-side props or `,(0,C.jsx)(t.code,{children:`InfiniteSelect`}),`.`]}),`
`,(0,C.jsxs)(t.li,{children:[`Don't use the placeholder as a label or for instructions. Use `,(0,C.jsx)(t.code,{children:`description`}),`.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`MultiSelect`}),`, `,(0,C.jsx)(t.strong,{children:`Autocomplete`}),` and `,(0,C.jsx)(t.strong,{children:`InfiniteSelect`}),`: the rest of the combobox family.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`SegmentedControl`}),` and `,(0,C.jsx)(t.strong,{children:`RadioGroup`}),`: for a few options.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`RHFSelect`}),`: the react-hook-form version.`]}),`
`]})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=t(),r(),l(),f()})))()}w();export{S as default};