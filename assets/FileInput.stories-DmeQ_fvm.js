import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,t as i}from"./FileInput-DygZ5D9X.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";var o=t({Cards:()=>m,Dropzone:()=>f,Limits:()=>h,Playground:()=>d,States:()=>g,__namedExportsOrder:()=>_,default:()=>u}),s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),s=n(),c=a(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Inputs/FileInput`,component:i,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`Contract (PDF)`,accept:`.pdf`,onReject:l()},argTypes:{variant:{control:`inline-radio`,options:[`button`,`dropzone`]},preview:{control:`inline-radio`,options:[`list`,`cards`]},size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},error:{control:`text`},showRejections:{control:`boolean`}},decorators:[e=>(0,c.jsx)(`div`,{style:{maxWidth:520},children:(0,c.jsx)(e,{})})]},d={},f={args:{label:`Site photos`,variant:`dropzone`,multiple:!0,accept:`image/*`,maxSize:5e6,description:`JPG or PNG, up to 5 MB each`}},p=(e,t,n)=>new File([new Uint8Array(t)],e,{type:n}),m={render:()=>{let[e,t]=(0,s.useState)([p(`contract-signed.pdf`,482e3,`application/pdf`),p(`site-plan.xlsx`,96e3,`application/vnd.ms-excel`)]);return(0,c.jsx)(i,{label:`Attachments`,variant:`dropzone`,preview:`cards`,multiple:!0,value:e,onChange:t,maxSize:100*1024**2,placeholder:`Drop your documents here`,hint:`Maximum upload file: 100 MB`})}},h={args:{label:`Up to 2 images, 1 MB each`,variant:`dropzone`,multiple:!0,accept:`image/*`,maxSize:1e6,maxFiles:2}},g={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,c.jsx)(i,{accept:`.pdf`,label:`Required`,required:!0}),(0,c.jsx)(i,{accept:`.pdf`,label:`With error`,error:`Attach the contract`}),(0,c.jsx)(i,{accept:`.pdf`,label:`Disabled`,disabled:!0})]})},_=[`Playground`,`Dropzone`,`Cards`,`Limits`,`States`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Site photos',
    variant: 'dropzone',
    multiple: true,
    accept: 'image/*',
    maxSize: 5_000_000,
    description: 'JPG or PNG, up to 5 MB each'
  }
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<File[]>([sampleFile('contract-signed.pdf', 482_000, 'application/pdf'), sampleFile('site-plan.xlsx', 96_000, 'application/vnd.ms-excel')]);
    return <FileInput label="Attachments" variant="dropzone" preview="cards" multiple value={files} onChange={setFiles} maxSize={100 * 1024 ** 2} placeholder="Drop your documents here" hint="Maximum upload file: 100 MB" />;
  }
}`,...m.parameters?.docs?.source},description:{story:"Cards inside the dropzone, starting with files already saved (as `File`\r\nobjects, the way an app loads saved attachments). Drop more on the cards.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Up to 2 images, 1 MB each',
    variant: 'dropzone',
    multiple: true,
    accept: 'image/*',
    maxSize: 1_000_000,
    maxFiles: 2
  }
}`,...h.parameters?.docs?.source},description:{story:"Files that fail `accept`, `maxSize` or `maxFiles` are listed under the field.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      <FileInput accept=".pdf" label="Required" required />\r
      <FileInput accept=".pdf" label="With error" error="Attach the contract" />\r
      <FileInput accept=".pdf" label="Disabled" disabled />\r
    </div>
}`,...g.parameters?.docs?.source}}}})))()}export{d as a,h as i,f as n,g as o,o as r,v as s,m as t};