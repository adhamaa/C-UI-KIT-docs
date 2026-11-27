import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-C0i7n7Fz.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./Toast.stories-IirwQwuE.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(t.h1,{id:`toast`,children:`Toast`}),`
`,(0,_.jsxs)(t.p,{children:[`Short messages that appear in a corner and go away on their own: "Package saved", "Upload failed". Call `,(0,_.jsx)(t.code,{children:`toast()`}),` from anywhere, including outside components, like in a mutation's `,(0,_.jsx)(t.code,{children:`onSuccess`}),`.`]}),`
`,(0,_.jsx)(a,{language:`tsx`,dark:!0,code:`import { toast } from '@adhamaa/ui-kit'`}),`
`,(0,_.jsx)(s,{of:m}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`UIKitProvider`}),` renders the `,(0,_.jsx)(t.code,{children:`Toaster`}),`, the place toasts appear, so `,(0,_.jsx)(t.code,{children:`toast()`}),` works with no setup.`]}),`
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`kinds`,children:`Kinds`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`toast(title)`}),` shows a plain message. `,(0,_.jsx)(t.code,{children:`toast.success`}),`, `,(0,_.jsx)(t.code,{children:`toast.error`}),`, `,(0,_.jsx)(t.code,{children:`toast.warning`}),` and `,(0,_.jsx)(t.code,{children:`toast.info`}),` add an icon and a colour. Each takes a second `,(0,_.jsx)(t.code,{children:`options`}),` argument with a `,(0,_.jsx)(t.code,{children:`description`}),`.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`toast.success('Package saved')
toast.error('Upload failed', { description: 'The file is over 10 MB.' })
`})}),`
`,(0,_.jsx)(t.h3,{id:`loading-then-the-result`,children:`Loading, then the result`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`toast.loading()`}),` shows a spinner and stays until updated. It returns an id: call another `,(0,_.jsx)(t.code,{children:`toast`}),` with the same `,(0,_.jsx)(t.code,{children:`id`}),` to replace it with the result.`]}),`
`,(0,_.jsx)(s,{of:d}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`const id = toast.loading('Exporting report…')
try {
  await api.exportReport()
  toast.success('Report ready', { id })
} catch {
  toast.error('Export failed', { id })
}
`})}),`
`,(0,_.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`action`}),` adds a button, like Undo.`]}),`
`,(0,_.jsx)(s,{of:l}),`
`,(0,_.jsx)(t.h3,{id:`duration-and-dismissing`,children:`Duration and dismissing`}),`
`,(0,_.jsxs)(t.p,{children:[`Toasts close after 4 seconds. Set `,(0,_.jsx)(t.code,{children:`duration`}),` in ms, or `,(0,_.jsx)(t.code,{children:`Infinity`}),` to keep one until it's dismissed. `,(0,_.jsx)(t.code,{children:`toast.dismiss(id)`}),` closes one, and `,(0,_.jsx)(t.code,{children:`toast.dismiss()`}),` closes them all. `,(0,_.jsx)(t.code,{children:`onDismiss`}),` runs when it closes.`]}),`
`,(0,_.jsx)(s,{of:p}),`
`,(0,_.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,_.jsx)(t.h3,{id:`toasttitle-options`,children:`toast(title, options?)`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Option`}),(0,_.jsx)(t.th,{children:`Type`}),(0,_.jsx)(t.th,{children:`Description`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`description`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`ReactNode`})}),(0,_.jsx)(t.td,{children:`A second line under the title`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`duration`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`number`})}),(0,_.jsxs)(t.td,{children:[`In ms. `,(0,_.jsx)(t.code,{children:`Infinity`}),` keeps it until dismissed. Default 4000`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`id`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`string`})}),(0,_.jsx)(t.td,{children:`Reuse an id to update a toast instead of adding another`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`action`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`{ label, onClick }`})}),(0,_.jsx)(t.td,{children:`A button in the toast`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`onDismiss`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`() => void`})}),(0,_.jsx)(t.td,{children:`Runs when it closes`})]})]})]}),`
`,(0,_.jsxs)(t.p,{children:[`Also `,(0,_.jsx)(t.code,{children:`toast.success`}),`, `,(0,_.jsx)(t.code,{children:`toast.error`}),`, `,(0,_.jsx)(t.code,{children:`toast.warning`}),`, `,(0,_.jsx)(t.code,{children:`toast.info`}),`, `,(0,_.jsx)(t.code,{children:`toast.loading`}),` (same arguments, each returns the id) and `,(0,_.jsx)(t.code,{children:`toast.dismiss(id?)`}),`.`]}),`
`,(0,_.jsx)(t.h3,{id:`toaster`,children:`Toaster`}),`
`,(0,_.jsxs)(t.p,{children:[`Render it yourself only if you set `,(0,_.jsx)(t.code,{children:`withToaster={false}`}),` on `,(0,_.jsx)(t.code,{children:`UIKitProvider`}),`, for example to change where toasts appear.`]}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Selector`}),(0,_.jsx)(t.th,{children:`Part`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-toaster`})}),(0,_.jsx)(t.td,{children:`The stack of toasts`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-toast`})}),(0,_.jsx)(t.td,{children:`One toast`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-toast__icon`})}),(0,_.jsxs)(t.td,{children:[`The icon (`,(0,_.jsx)(t.code,{children:`[data-type]`}),` is the kind: `,(0,_.jsx)(t.code,{children:`success`}),`, `,(0,_.jsx)(t.code,{children:`error`}),`…)`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`.kit-toast__title`}),`, `,(0,_.jsx)(t.code,{children:`.kit-toast__description`})]}),(0,_.jsx)(t.td,{children:`The text`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`.kit-toast__close`})}),(0,_.jsx)(t.td,{children:`The close button`})]})]})]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`Built on `,(0,_.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/toast`,rel:`nofollow`,children:`ui-sdk Toast`}),`. Toasts are announced by screen readers through a live region without moving focus. The timer pauses while the pointer is over a toast or focus is inside it, so people have time to read it and reach the action.`]}),`
`,(0,_.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Do`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Confirm actions people just took: saved, deleted, sent.`}),`
`,(0,_.jsxs)(t.li,{children:[`Keep the title short, and put details in `,(0,_.jsx)(t.code,{children:`description`}),`.`]}),`
`,(0,_.jsx)(t.li,{children:`Offer Undo instead of a confirmation dialog for actions that can be undone.`}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Don't`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Don't use a toast for errors people must fix in a form. Show them next to the field.`}),`
`,(0,_.jsx)(t.li,{children:`Don't put the only copy of important information in a toast. It disappears.`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`ConfirmDialog`}),`: for decisions before an action.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`UIKitProvider`}),`: renders the Toaster.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),c(),f()})))()}v();export{g as default};