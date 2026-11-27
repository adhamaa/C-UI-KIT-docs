import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{r as i,t as a}from"./Button-B6ZSy2dN.js";import{a as o,r as s}from"./Display-D7mpfx8T.js";import{a as c,n as l}from"./Feedback-DfE6PcV0.js";import{n as u,r as d}from"./TextInput-BpKFdU5q.js";var f=t({Playground:()=>g,WhileSaving:()=>_,__namedExportsOrder:()=>v,default:()=>h}),p,m,h,g,_,v;function y(){return(y=e((()=>{i(),o(),c(),d(),p=n(),m=r(),h={title:`Components/Feedback/LoadingOverlay`,component:l,tags:[`!autodocs`],parameters:{layout:`padded`},args:{visible:!0,blur:!0,label:`Loading`},render:e=>(0,m.jsxs)(`div`,{style:{position:`relative`,maxWidth:360},children:[(0,m.jsx)(l,{...e}),(0,m.jsx)(s,{title:`Package details`,children:(0,m.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,m.jsx)(u,{label:`Package name`,defaultValue:`Road upgrade section 4`}),(0,m.jsx)(u,{label:`Package no.`,defaultValue:`PKG-004`})]})})]})},g={},_={render:()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(`div`,{style:{position:`relative`,maxWidth:360},children:[(0,m.jsx)(l,{visible:e,label:`Saving`}),(0,m.jsx)(s,{title:`Package details`,footer:(0,m.jsx)(a,{onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:`Save`}),children:(0,m.jsx)(u,{label:`Package name`,defaultValue:`Road upgrade section 4`})})]})}},v=[`Playground`,`WhileSaving`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [saving, setSaving] = useState(false);
    return <div style={{
      position: 'relative',
      maxWidth: 360
    }}>\r
        <LoadingOverlay visible={saving} label="Saving" />\r
        <Card title="Package details" footer={<Button onClick={() => {
        setSaving(true);
        setTimeout(() => setSaving(false), 1500);
      }}>\r
              Save\r
            </Button>}>\r
          <TextInput label="Package name" defaultValue="Road upgrade section 4" />\r
        </Card>\r
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:`Cover a form while it saves, so it can't be edited twice.`,..._.parameters?.docs?.description}}}})))()}export{y as i,g as n,_ as r,f as t};