import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,t as i}from"./NumberInput-B-IKCyHo.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";var o=t({Controlled:()=>h,Currency:()=>f,Percent:()=>p,Playground:()=>d,States:()=>g,Units:()=>m,__namedExportsOrder:()=>_,default:()=>u}),s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),s=n(),c=a(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Inputs/NumberInput`,component:i,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`Lanes`,min:1,max:8,defaultValue:2,withControls:!0,onChange:l(),onValueCommit:l()},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},error:{control:`text`},prefix:{control:`text`},suffix:{control:`text`},format:{control:!1}},decorators:[e=>(0,c.jsx)(`div`,{style:{maxWidth:360},children:(0,c.jsx)(e,{})})]},d={},f={args:{label:`Contract value`,prefix:`RM`,decimalScale:2,fixedDecimalScale:!0,defaultValue:125e4,withControls:!1,min:0,max:void 0}},p={args:{label:`Progress`,suffix:`%`,min:0,max:100,step:5,defaultValue:40}},m={args:{label:`Road length`,format:{style:`unit`,unit:`kilometer`,maximumFractionDigits:1},defaultValue:12.4,step:.1,min:0,max:void 0,withControls:!1}},h={render:e=>{let[t,n]=(0,s.useState)(3);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{...e,defaultValue:void 0,value:t,onChange:n}),(0,c.jsxs)(`p`,{style:{marginTop:8},children:[`Value: `,t===null?`null`:t,` (`,typeof t,`)`]})]})}},g={render:e=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,c.jsx)(i,{...e,label:`Required`,required:!0,defaultValue:null}),(0,c.jsx)(i,{...e,label:`With error`,error:`At most 8 lanes`}),(0,c.jsx)(i,{...e,label:`Disabled`,disabled:!0})]})},_=[`Playground`,`Currency`,`Percent`,`Units`,`Controlled`,`States`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Contract value',
    prefix: 'RM',
    decimalScale: 2,
    fixedDecimalScale: true,
    defaultValue: 1250000,
    withControls: false,
    min: 0,
    max: undefined
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Progress',
    suffix: '%',
    min: 0,
    max: 100,
    step: 5,
    defaultValue: 40
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Road length',
    format: {
      style: 'unit',
      unit: 'kilometer',
      maximumFractionDigits: 1
    },
    defaultValue: 12.4,
    step: 0.1,
    min: 0,
    max: undefined,
    withControls: false
  }
}`,...m.parameters?.docs?.source},description:{story:"Full `Intl.NumberFormat` options, for units the shorthands don't cover.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number | null>(3);
    return <>\r
        <NumberInput {...args} defaultValue={undefined} value={value} onChange={setValue} />\r
        <p style={{
        marginTop: 8
      }}>\r
          Value: {value === null ? 'null' : value} ({typeof value})\r
        </p>\r
      </>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      <NumberInput {...args} label="Required" required defaultValue={null} />\r
      <NumberInput {...args} label="With error" error="At most 8 lanes" />\r
      <NumberInput {...args} label="Disabled" disabled />\r
    </div>
}`,...g.parameters?.docs?.source}}}})))()}export{d as a,v as c,p as i,f as n,g as o,o as r,m as s,h as t};