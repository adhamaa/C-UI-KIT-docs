import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-SWAFQvtI.js";import{a as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./MultiSelect.stories-CK-mEz9d.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{of:d}),`
`,(0,y.jsx)(t.h1,{id:`multiselect`,children:`MultiSelect`}),`
`,(0,y.jsx)(t.p,{children:`Picks several options. Chosen values show as removable chips in the field, and typing filters the list. It can create options from the typed text, and search and page through options on the server.`}),`
`,(0,y.jsx)(o,{language:`tsx`,dark:!0,code:`import { MultiSelect } from '@adhamaa/ui-kit'`}),`
`,(0,y.jsx)(c,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,y.jsx)(i,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,y.jsx)(t.h3,{id:`limit-and-clear`,children:`Limit and clear`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`maxValues`}),` caps how many can be chosen: once reached, the other options are disabled. `,(0,y.jsx)(t.code,{children:`clearable`}),` adds a button that removes every value.`]}),`
`,(0,y.jsx)(c,{of:m}),`
`,(0,y.jsx)(t.h3,{id:`create-options`,children:`Create options`}),`
`,(0,y.jsxs)(t.p,{children:[`With `,(0,y.jsx)(t.code,{children:`creatable`}),`, the list offers the typed text as a new option. `,(0,y.jsx)(t.code,{children:`onCreateOption`}),` receives the text and returns the new option, or a Promise of it, for example after saving it on the server. The option is then selected. Add it to `,(0,y.jsx)(t.code,{children:`data`}),` as well, so it keeps its label.`]}),`
`,(0,y.jsx)(c,{of:g}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`<MultiSelect
  label="Tags"
  data={tags}
  creatable
  onCreateOption={async (query) => {
    const tag = await api.createTag(query)
    return { value: tag.id, label: tag.name }
  }}
/>
`})}),`
`,(0,y.jsx)(t.h3,{id:`groups`,children:`Groups`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`data`}),` takes the same shapes as `,(0,y.jsx)(t.strong,{children:`Select`}),`, including groups.`]}),`
`,(0,y.jsx)(c,{of:f}),`
`,(0,y.jsx)(t.h3,{id:`server-side-search-and-paging`,children:`Server-side search and paging`}),`
`,(0,y.jsxs)(t.p,{children:[`MultiSelect has the same async props as Select: `,(0,y.jsx)(t.code,{children:`onSearchChange`}),`, `,(0,y.jsx)(t.code,{children:`loading`}),`, `,(0,y.jsx)(t.code,{children:`hasMore`}),` and `,(0,y.jsx)(t.code,{children:`onLoadMore`}),`, plus `,(0,y.jsx)(t.code,{children:`getOptionLabel`}),` for chosen values that aren't in the current page. See `,(0,y.jsx)(t.strong,{children:`Select`}),` for an example, or use `,(0,y.jsx)(t.code,{children:`InfiniteSelect`}),` with `,(0,y.jsx)(t.code,{children:`multiple`}),`. `,(0,y.jsx)(t.code,{children:`keepSearchOnSelect`}),` keeps the typed text after each choice, so people can pick several matches in a row.`]}),`
`,(0,y.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,y.jsx)(c,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`import { RHFMultiSelect } from '@adhamaa/ui-kit/form'

<RHFMultiSelect name="states" label="States" data={states} rules={{ validate: (v) => v.length > 0 || 'Pick at least one' }} />
`})}),`
`,(0,y.jsxs)(t.p,{children:[`The form value is a `,(0,y.jsx)(t.code,{children:`string[]`}),`.`]}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(s,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,y.jsxs)(t.p,{children:[`| Selector | Part |
| --- | --- |
| `,(0,y.jsx)(t.code,{children:`.kit-input.kit-multiselect`}),` | The field box |
| `,(0,y.jsx)(t.code,{children:`.kit-multiselect__chips`}),` | The chips row |
| `,(0,y.jsx)(t.code,{children:`.kit-chip-tag`}),` | One chosen value |
| `,(0,y.jsx)(t.code,{children:`.kit-chip-tag__remove`}),` | A chip's remove button |
| `,(0,y.jsx)(t.code,{children:`.kit-multiselect__input`}),` | The search input |
| `,(0,y.jsx)(t.code,{children:`.kit-listbox__create`}),` | The "Create …" option |`]}),`
`,(0,y.jsxs)(t.p,{children:[`The popup list uses the same `,(0,y.jsx)(t.code,{children:`.kit-listbox*`}),` classes as `,(0,y.jsx)(t.strong,{children:`Select`}),`.`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.p,{children:[`Built on `,(0,y.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/combobox`,rel:`nofollow`,children:`ui-sdk Combobox`}),` with multiple selection. The input is a combobox named by the label. The chips are a toolbar named by the same label, and each remove button is named after its value.`]}),`
`,(0,y.jsx)(t.p,{children:`| Key | Does |
| --- | --- |
| Typing | Filters the options and opens the list |
| ArrowDown, ArrowUp | Opens the list, then moves the highlight |
| Enter | Chooses the highlighted option, or creates one |
| Escape | Closes the list |
| Backspace | In an empty input, removes the last chip |
| ArrowLeft, ArrowRight | Move between chips |`}),`
`,(0,y.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Do`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Use it when people need more than one value from a long list.`}),`
`,(0,y.jsxs)(t.li,{children:[`Set `,(0,y.jsx)(t.code,{children:`maxValues`}),` when there's a real limit, and say so in `,(0,y.jsx)(t.code,{children:`description`}),`.`]}),`
`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Don't`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Don't use it for fewer than about six options. Use checkboxes.`}),`
`,(0,y.jsxs)(t.li,{children:[`Don't allow `,(0,y.jsx)(t.code,{children:`creatable`}),` unless new values are really welcome. It invites typos and duplicates.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Select`}),`: one value.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`InfiniteSelect`}),`: the same with `,(0,y.jsx)(t.code,{children:`multiple`}),`, for large remote lists.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Chip`}),`: filters as toggles.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),l(),h()})))()}b();export{v as default};