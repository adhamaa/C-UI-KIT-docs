import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-D8m9WcGw.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./TextInput.stories-h6QpT7O4.js";function v(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a,{of:m}),`
`,(0,b.jsx)(t.h1,{id:`textinput`,children:`TextInput`}),`
`,(0,b.jsx)(t.p,{children:`A single-line text field with a label, description and error. Every kit form control shares the same field props, so what you learn here applies to the others.`}),`
`,(0,b.jsx)(o,{language:`tsx`,dark:!0,code:`import { TextInput } from '@adhamaa/ui-kit'`}),`
`,(0,b.jsx)(c,{of:h}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`You need`}),(0,b.jsx)(t.th,{children:`Use`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`One line of text`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`TextInput`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`A search box with a debounced callback`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`SearchInput`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`A password`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`PasswordInput`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`A number, money or a percentage`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`NumberInput`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`Several lines`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`Textarea`})})]})]})]}),`
`,(0,b.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(c,{of:p}),`
`,(0,b.jsx)(i,{of:p}),`
`,(0,b.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,b.jsx)(t.h3,{id:`field-states`,children:`Field states`}),`
`,(0,b.jsx)(t.p,{children:`These props are the same on every kit input, select and picker:`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.code,{children:`label`}),`, and `,(0,b.jsx)(t.code,{children:`description`}),` for helper text under the control.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.code,{children:`error`}),`: a message, or `,(0,b.jsx)(t.code,{children:`true`}),` to mark the field invalid without one.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.code,{children:`required`}),` makes the field natively required and adds an asterisk. `,(0,b.jsx)(t.code,{children:`withAsterisk`}),` adds only the asterisk.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.code,{children:`disabled`}),` and `,(0,b.jsx)(t.code,{children:`readOnly`}),`. A read-only field stays focusable and is submitted with the form. A disabled one is neither.`]}),`
`]}),`
`,(0,b.jsx)(c,{of:u}),`
`,(0,b.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`size`}),` sets the height from the `,(0,b.jsx)(t.code,{children:`--kit-h-*`}),` tokens, the same scale as buttons.`]}),`
`,(0,b.jsx)(c,{of:f}),`
`,(0,b.jsx)(t.h3,{id:`sections-and-clear-button`,children:`Sections and clear button`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`leftSection`}),` and `,(0,b.jsx)(t.code,{children:`rightSection`}),` sit inside the field, before and after the text: an icon, a prefix like `,(0,b.jsx)(t.code,{children:`https://`}),` or a unit. `,(0,b.jsx)(t.code,{children:`clearable`}),` adds a button that empties the field and shows only while there's text.`]}),`
`,(0,b.jsx)(c,{of:h}),`
`,(0,b.jsx)(t.h3,{id:`controlled`,children:`Controlled`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`onValueChange`}),` receives the new text after any change: typing, clearing or a form reset. `,(0,b.jsx)(t.code,{children:`onChange`}),` is the native change event, as on a plain `,(0,b.jsx)(t.code,{children:`<input>`}),`. Use `,(0,b.jsx)(t.code,{children:`defaultValue`}),` instead of `,(0,b.jsx)(t.code,{children:`value`}),` to leave the state to the input.`]}),`
`,(0,b.jsx)(c,{of:_}),`
`,(0,b.jsx)(t.h3,{id:`input-types`,children:`Input types`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`type`}),` and any other native input attribute (`,(0,b.jsx)(t.code,{children:`autoComplete`}),`, `,(0,b.jsx)(t.code,{children:`inputMode`}),`, `,(0,b.jsx)(t.code,{children:`pattern`}),`, `,(0,b.jsx)(t.code,{children:`maxLength`}),`…) pass through to the `,(0,b.jsx)(t.code,{children:`<input>`}),`.`]}),`
`,(0,b.jsx)(c,{of:g}),`
`,(0,b.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { RHFTextInput } from '@adhamaa/ui-kit/form'

<RHFTextInput name="packageName" label="Package name" rules={{ required: true }} />
`})}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`RHFTextInput`}),` takes the same props plus `,(0,b.jsx)(t.code,{children:`name`}),` and `,(0,b.jsx)(t.code,{children:`rules`}),`, and shows the field's error message for you. See `,(0,b.jsx)(t.strong,{children:`Forms with react-hook-form`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsx)(s,{of:m}),`
`,(0,b.jsxs)(t.p,{children:[`The ref goes to the `,(0,b.jsx)(t.code,{children:`<input>`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,b.jsx)(t.p,{children:`These classes are shared by every text-like field (TextInput, SearchInput, PasswordInput, NumberInput, Select…).`}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`Selector`}),(0,b.jsxs)(t.th,{children:[(0,b.jsx)(t.code,{children:`classNames`}),` key`]}),(0,b.jsx)(t.th,{children:`Part`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-field`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`root`})}),(0,b.jsx)(t.td,{children:`The wrapper around label, control and messages`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-field__label`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`label`})}),(0,b.jsx)(t.td,{children:`The label`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-field__asterisk`})}),(0,b.jsx)(t.td,{children:`—`}),(0,b.jsx)(t.td,{children:`The required asterisk`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-field__description`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`description`})}),(0,b.jsx)(t.td,{children:`The helper text`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-field__error`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`error`})}),(0,b.jsx)(t.td,{children:`The error message`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-input`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`control`})}),(0,b.jsx)(t.td,{children:`The box with the border`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-input__control`})}),(0,b.jsx)(t.td,{children:`—`}),(0,b.jsxs)(t.td,{children:[`The `,(0,b.jsx)(t.code,{children:`<input>`}),` itself`]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-input__section`})}),(0,b.jsx)(t.td,{children:`—`}),(0,b.jsx)(t.td,{children:`The left or right section`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`.kit-input__clear`})}),(0,b.jsx)(t.td,{children:`—`}),(0,b.jsx)(t.td,{children:`The clear button`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsxs)(t.td,{children:[(0,b.jsx)(t.code,{children:`[data-size]`}),`, `,(0,b.jsx)(t.code,{children:`[data-kind]`})]}),(0,b.jsx)(t.td,{children:`—`}),(0,b.jsxs)(t.td,{children:[`On `,(0,b.jsx)(t.code,{children:`.kit-field`}),`: the size, and which control it holds`]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsxs)(t.td,{children:[(0,b.jsx)(t.code,{children:`[data-invalid]`}),`, `,(0,b.jsx)(t.code,{children:`[data-disabled]`})]}),(0,b.jsx)(t.td,{children:`—`}),(0,b.jsx)(t.td,{children:`Invalid and disabled state (from ui-sdk)`})]})]})]}),`
`,(0,b.jsxs)(t.p,{children:[`Borders use the `,(0,b.jsx)(t.code,{children:`input`}),` token, the focus ring uses `,(0,b.jsx)(t.code,{children:`ring`}),` and `,(0,b.jsx)(t.code,{children:`ringBorder`}),`, and errors use `,(0,b.jsx)(t.code,{children:`destructive`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,b.jsxs)(t.p,{children:[`Built on `,(0,b.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/input`,rel:`nofollow`,children:`ui-sdk Input`}),` and `,(0,b.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/field`,rel:`nofollow`,children:`Field`}),`. The label names the input, the description and error describe it, and an invalid field gets `,(0,b.jsx)(t.code,{children:`aria-invalid`}),`. Clicking the label focuses the input. The input is a native `,(0,b.jsx)(t.code,{children:`<input>`}),`, so text editing, selection and autofill work as usual.`]}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[`Without a visible `,(0,b.jsx)(t.code,{children:`label`}),`, give the input an `,(0,b.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,b.jsx)(t.li,{children:`The clear button is named "Clear".`}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,b.jsx)(t.p,{children:(0,b.jsx)(t.strong,{children:`Do`})}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[`Always use a `,(0,b.jsx)(t.code,{children:`label`}),`. A placeholder isn't a label: it disappears as soon as someone types.`]}),`
`,(0,b.jsxs)(t.li,{children:[`Put format hints in `,(0,b.jsx)(t.code,{children:`description`}),`: "As written on the contract".`]}),`
`,(0,b.jsxs)(t.li,{children:[`Set `,(0,b.jsx)(t.code,{children:`type`}),` and `,(0,b.jsx)(t.code,{children:`autoComplete`}),` so phones show the right keyboard and browsers can autofill.`]}),`
`]}),`
`,(0,b.jsx)(t.p,{children:(0,b.jsx)(t.strong,{children:`Don't`})}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[`Don't use `,(0,b.jsx)(t.code,{children:`TextInput`}),` for numbers people do maths with. Use `,(0,b.jsx)(t.code,{children:`NumberInput`}),`.`]}),`
`,(0,b.jsx)(t.li,{children:`Don't show an error before the user has had a chance to fill the field.`}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`SearchInput`}),`, `,(0,b.jsx)(t.strong,{children:`PasswordInput`}),`, `,(0,b.jsx)(t.strong,{children:`NumberInput`}),`, `,(0,b.jsx)(t.strong,{children:`Textarea`}),`: specialised text fields.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Autocomplete`}),`: free text with suggestions.`]}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),r(),l(),d()})))()}x();export{y as default};