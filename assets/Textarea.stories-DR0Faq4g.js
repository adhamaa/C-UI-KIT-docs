import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Textarea-B-oCPOCU.js";var a=t({Autosize:()=>u,CharacterCount:()=>d,Playground:()=>l,States:()=>f,__namedExportsOrder:()=>p,default:()=>c}),o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Inputs/Textarea`,component:i,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`Remarks`,placeholder:`Anything the contractor should know`,onValueChange:s()},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},error:{control:`text`},classNames:{control:!1}},decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:420},children:(0,o.jsx)(e,{})})]},l={},u={args:{autosize:!0,minRows:2,maxRows:6}},d={args:{maxLength:280,showCount:!0,defaultValue:`Night work only.`}},f={render:e=>(0,o.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,o.jsx)(i,{...e,label:`With description`,description:`Shown on the work order.`}),(0,o.jsx)(i,{...e,label:`With error`,error:`Add a remark`,required:!0}),(0,o.jsx)(i,{...e,label:`Disabled`,disabled:!0,defaultValue:`Approved.`})]})},p=[`Playground`,`Autosize`,`CharacterCount`,`States`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    autosize: true,
    minRows: 2,
    maxRows: 6
  }
}`,...u.parameters?.docs?.source},description:{story:"Grows with the text between `minRows` and `maxRows`, then scrolls.",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    maxLength: 280,
    showCount: true,
    defaultValue: 'Night work only.'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      <Textarea {...args} label="With description" description="Shown on the work order." />\r
      <Textarea {...args} label="With error" error="Add a remark" required />\r
      <Textarea {...args} label="Disabled" disabled defaultValue="Approved." />\r
    </div>
}`,...f.parameters?.docs?.source}}}})))()}export{a,f as i,d as n,m as o,l as r,u as t};