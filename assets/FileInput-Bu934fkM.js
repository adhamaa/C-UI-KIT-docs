import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,c as a,l as o,n as s,r as c,u as l}from"./blocks-C0i7n7Fz.js";import{a as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./FileInput.stories-uGLbK4w1.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{of:m}),`
`,(0,y.jsx)(t.h1,{id:`fileinput`,children:`FileInput`}),`
`,(0,y.jsx)(t.p,{children:`Picks or drops files, checks them against your limits, and lists what's chosen. It comes as a compact field with a Browse button, or a large dropzone.`}),`
`,(0,y.jsx)(o,{language:`tsx`,dark:!0,code:`import { FileInput } from '@adhamaa/ui-kit'`}),`
`,(0,y.jsx)(c,{of:g}),`
`,(0,y.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,y.jsx)(c,{of:u}),`
`,(0,y.jsx)(i,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,y.jsx)(t.h3,{id:`one-file-or-many`,children:`One file or many`}),`
`,(0,y.jsxs)(t.p,{children:[`Without `,(0,y.jsx)(t.code,{children:`multiple`}),`, the value is a `,(0,y.jsx)(t.code,{children:`File`}),` or `,(0,y.jsx)(t.code,{children:`null`}),`. With `,(0,y.jsx)(t.code,{children:`multiple`}),`, it's a `,(0,y.jsx)(t.code,{children:`File[]`}),`. A file with the same name and size as one already chosen is never added twice.`]}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`<FileInput label="Contract" accept=".pdf" onChange={(file) => setContract(file)} />
<FileInput label="Photos" multiple onChange={(files) => setPhotos(files)} />
`})}),`
`,(0,y.jsx)(t.h3,{id:`dropzone`,children:`Dropzone`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`variant="dropzone"`}),` shows a large area to drop files on. `,(0,y.jsx)(t.code,{children:`placeholder`}),` is its main text and `,(0,y.jsx)(t.code,{children:`hint`}),` the smaller text under it.`]}),`
`,(0,y.jsx)(c,{of:f}),`
`,(0,y.jsx)(t.h3,{id:`cards`,children:`Cards`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`preview="cards"`}),` shows each file as a card with a thumbnail (or a document icon), name and size. Inside a dropzone the cards fill the area, which still takes drops. To show files that are already saved, create `,(0,y.jsx)(t.code,{children:`File`}),` objects and pass them as `,(0,y.jsx)(t.code,{children:`value`}),`.`]}),`
`,(0,y.jsx)(c,{of:g}),`
`,(0,y.jsx)(t.h3,{id:`limits-and-rejections`,children:`Limits and rejections`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`accept`}),`, `,(0,y.jsx)(t.code,{children:`maxSize`}),` (bytes) and `,(0,y.jsx)(t.code,{children:`maxFiles`}),` limit what's accepted. Files that fail are listed under the field and passed to `,(0,y.jsx)(t.code,{children:`onReject`}),` with every reason: `,(0,y.jsx)(t.code,{children:`file-type`}),`, `,(0,y.jsx)(t.code,{children:`file-too-large`}),`, `,(0,y.jsx)(t.code,{children:`too-many-files`}),` or `,(0,y.jsx)(t.code,{children:`duplicate`}),`. Set `,(0,y.jsx)(t.code,{children:`showRejections={false}`}),` to hide the message, or pass a function to word it yourself.`]}),`
`,(0,y.jsx)(c,{of:d}),`
`,(0,y.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,y.jsx)(c,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`import { RHFFileInput } from '@adhamaa/ui-kit/form'

<RHFFileInput name="attachments" label="Attachments" multiple maxSize={10 * 1024 ** 2} />
`})}),`
`,(0,y.jsxs)(t.p,{children:[`The form value is a `,(0,y.jsx)(t.code,{children:`File`}),`, a `,(0,y.jsx)(t.code,{children:`File[]`}),` or `,(0,y.jsx)(t.code,{children:`null`}),`. Upload the files in your submit handler, for example with `,(0,y.jsx)(t.code,{children:`FormData`}),`.`]}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(s,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Selector`}),(0,y.jsx)(t.th,{children:`Part`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-file`})}),(0,y.jsx)(t.td,{children:`The wrapper`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-file__trigger`})}),(0,y.jsxs)(t.td,{children:[`The Browse button field (`,(0,y.jsx)(t.code,{children:`variant="button"`}),`)`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-file__dropzone`})}),(0,y.jsxs)(t.td,{children:[`The drop area (`,(0,y.jsx)(t.code,{children:`variant="dropzone"`}),`)`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`.kit-file__placeholder`}),`, `,(0,y.jsx)(t.code,{children:`.kit-file__hint`})]}),(0,y.jsx)(t.td,{children:`The dropzone's texts`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-file__list`})}),(0,y.jsxs)(t.td,{children:[`The chosen files (`,(0,y.jsx)(t.code,{children:`.kit-file__list--cards`}),` for cards)`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`.kit-file__item`}),`, `,(0,y.jsx)(t.code,{children:`.kit-file__card`})]}),(0,y.jsx)(t.td,{children:`One file as a row or a card`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`.kit-file__thumb`})}),(0,y.jsxs)(t.td,{children:[`A card's thumbnail (`,(0,y.jsx)(t.code,{children:`--doc`}),` for the document icon)`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`.kit-file__name`}),`, `,(0,y.jsx)(t.code,{children:`.kit-file__size`})]}),(0,y.jsx)(t.td,{children:`The file's name and size`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`.kit-file__remove`}),`, `,(0,y.jsx)(t.code,{children:`.kit-file__card-remove`})]}),(0,y.jsx)(t.td,{children:`The remove button`})]})]})]}),`
`,(0,y.jsxs)(t.p,{children:[`The dropzone uses the `,(0,y.jsx)(t.code,{children:`surface`}),` token.`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.p,{children:[`Built on `,(0,y.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/file-input`,rel:`nofollow`,children:`ui-sdk File Input`}),`. Files can always be chosen with the keyboard through the system file dialog, so nobody has to drag. The chosen files are a list named "Chosen files". Each remove button is named after its file.`]}),`
`,(0,y.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Do`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Say what's accepted and how big in `,(0,y.jsx)(t.code,{children:`description`}),` or `,(0,y.jsx)(t.code,{children:`hint`}),`: "PDF, up to 10 MB".`]}),`
`,(0,y.jsxs)(t.li,{children:[`Use `,(0,y.jsx)(t.code,{children:`preview="cards"`}),` for photos, so people can check they picked the right ones.`]}),`
`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Don't`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Don't upload on drop without showing progress. Upload on submit, or show a loader per file.`}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`ImagePreviewer`}),`: shows an uploaded image full screen.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),l(),h()})))()}b();export{v as default};