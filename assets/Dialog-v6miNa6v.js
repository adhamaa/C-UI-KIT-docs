import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./ConfirmDialog-Dc51S3im.js";import{i,r as a}from"./react-DITjJg24.js";import{a as o,c as s,l as c,n as l,r as u,u as d}from"./blocks-D8m9WcGw.js";import{a as f,i as p,n as m,o as h,r as g,s as _,t as v}from"./Dialog.stories-DNpGqDk7.js";function y(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...i(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s,{of:m}),`
`,(0,x.jsx)(t.h1,{id:`dialog`,children:`Dialog`}),`
`,(0,x.jsx)(t.p,{children:`Opens a focused task over the page, like editing a record or filling in a short form. It has a title, an optional description, a body and a footer for actions. Focus moves into the dialog when it opens, stays inside while it's open, and returns to where it was when it closes.`}),`
`,(0,x.jsx)(t.p,{children:`The kit has three ways to open one:`}),`
`,(0,x.jsxs)(t.table,{children:[(0,x.jsx)(t.thead,{children:(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.th,{children:`You need`}),(0,x.jsx)(t.th,{children:`Use`})]})}),(0,x.jsxs)(t.tbody,{children:[(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:`A dialog with your own content and state`}),(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`Dialog`})})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:`A yes/no question before an action`}),(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`ConfirmDialog`})})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:`Either of those from an event handler, with no state to manage`}),(0,x.jsxs)(t.td,{children:[(0,x.jsx)(t.code,{children:`modals.open()`}),` / `,(0,x.jsx)(t.code,{children:`modals.confirm()`})]})]})]})]}),`
`,(0,x.jsx)(c,{language:`tsx`,dark:!0,code:`import { ConfirmDialog, Dialog, modals } from '@adhamaa/ui-kit'`}),`
`,(0,x.jsx)(u,{of:f}),`
`,(0,x.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,x.jsx)(o,{of:f}),`
`,(0,x.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(t.h3,{id:`basic-usage`,children:`Basic usage`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`Dialog`}),` is controlled: you keep `,(0,x.jsx)(t.code,{children:`opened`}),` in state and close it in `,(0,x.jsx)(t.code,{children:`onClose`}),`. `,(0,x.jsx)(t.code,{children:`onClose`}),` runs on Escape, a press on the backdrop, or the × button.`]}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-tsx`,children:`const [opened, setOpened] = useState(false)
const close = () => setOpened(false)

<Button onClick={() => setOpened(true)}>Edit package</Button>
<Dialog
  opened={opened}
  onClose={close}
  title="Edit package"
  description="Changes apply to every linked work order."
  footer={
    <>
      <Button variant="default" onClick={close}>Cancel</Button>
      <Button onClick={save}>Save</Button>
    </>
  }
>
  <TextInput label="Package name" />
</Dialog>
`})}),`
`,(0,x.jsx)(t.h3,{id:`composition`,children:`Composition`}),`
`,(0,x.jsx)(t.p,{children:`A Dialog is built from these parts, top to bottom. Every part except the body is optional.`}),`
`,(0,x.jsxs)(t.table,{children:[(0,x.jsx)(t.thead,{children:(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.th,{children:`Part`}),(0,x.jsx)(t.th,{children:`Prop`}),(0,x.jsx)(t.th,{children:`Notes`})]})}),(0,x.jsxs)(t.tbody,{children:[(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:`Header`}),(0,x.jsxs)(t.td,{children:[(0,x.jsx)(t.code,{children:`title`}),`, `,(0,x.jsx)(t.code,{children:`withCloseButton`})]}),(0,x.jsx)(t.td,{children:`The title names the dialog for screen readers. The × button shows by default.`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:`Description`}),(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`description`})}),(0,x.jsxs)(t.td,{children:[`Read out when the dialog opens. Text renders in a `,(0,x.jsx)(t.code,{children:`<p>`}),`, anything richer in a `,(0,x.jsx)(t.code,{children:`<div>`}),`.`]})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:`Body`}),(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`children`})}),(0,x.jsx)(t.td,{children:`Scrolls when the content is taller than the screen.`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:`Footer`}),(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`footer`})}),(0,x.jsx)(t.td,{children:`Actions, right-aligned. Put Cancel first and the primary action last.`})]})]})]}),`
`,(0,x.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`size`}),` takes a preset (`,(0,x.jsx)(t.code,{children:`xs`}),` 352px, `,(0,x.jsx)(t.code,{children:`sm`}),` 416px, `,(0,x.jsx)(t.code,{children:`md`}),` 512px, `,(0,x.jsx)(t.code,{children:`lg`}),` 720px, `,(0,x.jsx)(t.code,{children:`xl`}),` 960px, `,(0,x.jsx)(t.code,{children:`full`}),`), a number of pixels, or any CSS length. `,(0,x.jsx)(t.code,{children:`fullScreen`}),` fills the viewport.`]}),`
`,(0,x.jsx)(u,{of:h}),`
`,(0,x.jsx)(t.h3,{id:`required-decisions`,children:`Required decisions`}),`
`,(0,x.jsxs)(t.p,{children:[`Turn off `,(0,x.jsx)(t.code,{children:`withCloseButton`}),`, `,(0,x.jsx)(t.code,{children:`closeOnEscape`}),` and `,(0,x.jsx)(t.code,{children:`closeOnClickOutside`}),` when the user must pick an action in the footer. Keep this rare: a dialog people can't dismiss feels like a trap.`]}),`
`,(0,x.jsx)(u,{of:p}),`
`,(0,x.jsx)(t.h3,{id:`confirm-an-action`,children:`Confirm an action`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`ConfirmDialog`}),` asks a question and renders the Cancel and Confirm buttons for you. Return a Promise from `,(0,x.jsx)(t.code,{children:`onConfirm`}),` and the dialog stays open, with the confirm button pending, until it settles. It closes when the Promise resolves and stays open if it rejects, so you can show the error. Add `,(0,x.jsx)(t.code,{children:`danger`}),` for destructive actions.`]}),`
`,(0,x.jsx)(u,{of:v}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-tsx`,children:`<ConfirmDialog
  opened={opened}
  onClose={close}
  title="Delete route?"
  description="This can't be undone."
  confirmLabel="Delete"
  danger
  onConfirm={() => api.deleteRoute(id)}
/>
`})}),`
`,(0,x.jsx)(t.h3,{id:`open-from-anywhere`,children:`Open from anywhere`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`modals.open()`}),` and `,(0,x.jsx)(t.code,{children:`modals.confirm()`}),` open a dialog from any event handler, with no state or JSX of your own. They need `,(0,x.jsx)(t.code,{children:`UIKitProvider`}),` with `,(0,x.jsx)(t.code,{children:`withModals`}),` (on by default).`]}),`
`,(0,x.jsx)(u,{of:g}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-tsx`,children:`modals.confirm({
  title: 'Publish package?',
  description: 'It becomes visible to contractors.',
  confirmLabel: 'Publish',
  onConfirm: () => api.publish(id),
})
`})}),`
`,(0,x.jsxs)(t.p,{children:[`For a dialog that holds a react-hook-form form, use `,(0,x.jsx)(t.code,{children:`FormDialog`}),` or `,(0,x.jsx)(t.code,{children:`openFormDialog()`}),` from `,(0,x.jsx)(t.code,{children:`@adhamaa/ui-kit/form`}),`. See `,(0,x.jsx)(t.strong,{children:`Forms with react-hook-form`}),`.`]}),`
`,(0,x.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,x.jsx)(t.h3,{id:`dialog-1`,children:`Dialog`}),`
`,(0,x.jsx)(l,{of:m}),`
`,(0,x.jsx)(t.h3,{id:`confirmdialog`,children:`ConfirmDialog`}),`
`,(0,x.jsxs)(t.p,{children:[`Takes every Dialog prop except `,(0,x.jsx)(t.code,{children:`footer`}),`, plus these:`]}),`
`,(0,x.jsx)(l,{of:r,include:[`confirmLabel`,`cancelLabel`,`onConfirm`,`onCancel`,`danger`,`hideCancel`]}),`
`,(0,x.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,x.jsxs)(t.table,{children:[(0,x.jsx)(t.thead,{children:(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.th,{children:`Selector`}),(0,x.jsxs)(t.th,{children:[(0,x.jsx)(t.code,{children:`classNames`}),` key`]}),(0,x.jsx)(t.th,{children:`Part`})]})}),(0,x.jsxs)(t.tbody,{children:[(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-dialog__backdrop`})}),(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`backdrop`})}),(0,x.jsx)(t.td,{children:`The dimmed layer behind`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-dialog`})}),(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`content`})}),(0,x.jsx)(t.td,{children:`The dialog box`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-dialog__header`})}),(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`header`})}),(0,x.jsx)(t.td,{children:`Title and × button row`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-dialog__title`})}),(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`title`})}),(0,x.jsx)(t.td,{children:`The title`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-dialog__description`})}),(0,x.jsx)(t.td,{children:`—`}),(0,x.jsx)(t.td,{children:`The description`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-dialog__body`})}),(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`body`})}),(0,x.jsx)(t.td,{children:`Your content`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-dialog__footer`})}),(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`footer`})}),(0,x.jsx)(t.td,{children:`The actions row`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-dialog [aria-label="Close"]`})}),(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`close`})}),(0,x.jsx)(t.td,{children:`The × button`})]})]})]}),`
`,(0,x.jsxs)(t.table,{children:[(0,x.jsx)(t.thead,{children:(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.th,{children:`Attribute or variable`}),(0,x.jsx)(t.th,{children:`Means`})]})}),(0,x.jsxs)(t.tbody,{children:[(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`--kit-dialog-width`})}),(0,x.jsxs)(t.td,{children:[`The resolved width from `,(0,x.jsx)(t.code,{children:`size`})]})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`[data-centered]`})}),(0,x.jsxs)(t.td,{children:[`Present when `,(0,x.jsx)(t.code,{children:`centered`})]})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`[data-fullscreen]`})}),(0,x.jsxs)(t.td,{children:[`Present when `,(0,x.jsx)(t.code,{children:`fullScreen`})]})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsxs)(t.td,{children:[(0,x.jsx)(t.code,{children:`[data-open]`}),`, `,(0,x.jsx)(t.code,{children:`[data-starting-style]`}),`, `,(0,x.jsx)(t.code,{children:`[data-ending-style]`})]}),(0,x.jsx)(t.td,{children:`Open state and animation hooks (from ui-sdk)`})]})]})]}),`
`,(0,x.jsxs)(t.p,{children:[`The box uses the `,(0,x.jsx)(t.code,{children:`surfaceRaised`}),` token. The backdrop is a fixed 50% dark tint; override `,(0,x.jsx)(t.code,{children:`.kit-dialog__backdrop`}),` to change it.`]}),`
`,(0,x.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsxs)(t.p,{children:[`Built on `,(0,x.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/dialog`,rel:`nofollow`,children:`ui-sdk Dialog`}),`, which follows the WAI-ARIA modal dialog pattern. The dialog sets `,(0,x.jsx)(t.code,{children:`aria-modal`}),`, is labelled by its title, and is described by its description.`]}),`
`,(0,x.jsxs)(t.table,{children:[(0,x.jsx)(t.thead,{children:(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.th,{children:`Key`}),(0,x.jsx)(t.th,{children:`Does`})]})}),(0,x.jsxs)(t.tbody,{children:[(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:`Tab, Shift+Tab`}),(0,x.jsx)(t.td,{children:`Moves through the dialog's controls, staying inside`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:`Escape`}),(0,x.jsxs)(t.td,{children:[`Closes the topmost dialog and returns focus to the element that opened it (unless `,(0,x.jsx)(t.code,{children:`closeOnEscape`}),` is off)`]})]})]})]}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[`Always give a dialog a `,(0,x.jsx)(t.code,{children:`title`}),`. Without one, screen readers announce an unnamed dialog.`]}),`
`,(0,x.jsx)(t.li,{children:`Opening by touch focuses the dialog itself, so no on-screen keyboard appears.`}),`
`]}),`
`,(0,x.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(t.p,{children:(0,x.jsx)(t.strong,{children:`Do`})}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsx)(t.li,{children:`Keep dialogs for short, focused tasks. Use a page for anything long or multi-step.`}),`
`,(0,x.jsx)(t.li,{children:`Make the title a clear question or task: "Delete route?", "Edit package".`}),`
`,(0,x.jsx)(t.li,{children:`Name the confirm button after the action ("Delete", "Publish"), not "OK" or "Yes".`}),`
`]}),`
`,(0,x.jsx)(t.p,{children:(0,x.jsx)(t.strong,{children:`Don't`})}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsx)(t.li,{children:`Don't open a dialog from another dialog. Change the content of the open one instead.`}),`
`,(0,x.jsxs)(t.li,{children:[`Don't use a dialog for messages that need no decision. Use a `,(0,x.jsx)(t.code,{children:`toast`}),`.`]}),`
`,(0,x.jsxs)(t.li,{children:[`Don't use `,(0,x.jsx)(t.code,{children:`ConfirmDialog`}),` for actions that can be undone. Do the action and offer Undo in a toast.`]}),`
`]}),`
`,(0,x.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`ConfirmDialog`}),` and `,(0,x.jsx)(t.code,{children:`modals`}),`: shortcuts for common dialogs.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`FormDialog`}),`: a dialog with a react-hook-form form.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Popover`}),`: for small content next to its trigger, without blocking the page.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Toast`}),`: for messages that need no decision.`]}),`
`]})]})}function b(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=t(),a(),d(),n(),_()})))()}S();export{b as default};