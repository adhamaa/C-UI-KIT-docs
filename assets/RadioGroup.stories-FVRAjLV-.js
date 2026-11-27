import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{o as i,r as a}from"./Choice-BQlTmvo6.js";var o=t({Controlled:()=>m,Horizontal:()=>f,OptionObjects:()=>p,Playground:()=>d,States:()=>h,__namedExportsOrder:()=>g,default:()=>u}),s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),s=n(),c=r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Inputs/RadioGroup`,component:a,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`Severity`,data:[`Low`,`Medium`,`High`],defaultValue:`Medium`,onChange:l()},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},error:{control:`text`},data:{control:!1}}},d={},f={args:{orientation:`horizontal`}},p={args:{label:`Payment`,defaultValue:`monthly`,data:[{value:`monthly`,label:`Monthly claim`},{value:`milestone`,label:`By milestone`},{value:`lump`,label:`Lump sum`,disabled:!0}]}},m={render:e=>{let[t,n]=(0,s.useState)(`High`);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{...e,value:t,onChange:n}),(0,c.jsxs)(`p`,{style:{marginTop:8},children:[`Value: `,String(t)]})]})}},h={render:e=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:24},children:[(0,c.jsx)(a,{...e,label:`With error`,defaultValue:null,required:!0,error:`Pick a severity`}),(0,c.jsx)(a,{...e,label:`Disabled`,disabled:!0})]})},g=[`Playground`,`Horizontal`,`OptionObjects`,`Controlled`,`States`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Payment',
    defaultValue: 'monthly',
    data: [{
      value: 'monthly',
      label: 'Monthly claim'
    }, {
      value: 'milestone',
      label: 'By milestone'
    }, {
      value: 'lump',
      label: 'Lump sum',
      disabled: true
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | null>('High');
    return <>\r
        <RadioGroup {...args} value={value} onChange={setValue} />\r
        <p style={{
        marginTop: 8
      }}>Value: {String(value)}</p>\r
      </>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 24
  }}>\r
      <RadioGroup {...args} label="With error" defaultValue={null} required error="Pick a severity" />\r
      <RadioGroup {...args} label="Disabled" disabled />\r
    </div>
}`,...h.parameters?.docs?.source}}}})))()}export{o as a,d as i,f as n,h as o,p as r,_ as s,m as t};