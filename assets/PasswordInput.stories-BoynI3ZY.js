import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,v as a}from"./icons-0fPVZlPW.js";import{n as o,t as s}from"./PasswordInput-DN3w_e6p.js";var c=t({NewPassword:()=>m,Playground:()=>f,States:()=>h,__namedExportsOrder:()=>g,default:()=>d}),l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a(),o(),l=n(),u=r(),d={title:`Components/Inputs/PasswordInput`,component:s,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`Password`},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},error:{control:`text`},leftSection:{control:!1}},decorators:[e=>(0,u.jsx)(`div`,{style:{maxWidth:360},children:(0,u.jsx)(e,{})})]},f={},p=[{label:`At least 8 characters`,test:e=>e.length>=8},{label:`A number`,test:e=>/\d/.test(e)},{label:`An uppercase and a lowercase letter`,test:e=>/[a-z]/.test(e)&&/[A-Z]/.test(e)}],m={render:e=>{let[t,n]=(0,l.useState)(``);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,u.jsx)(s,{...e,label:`Create a password`,autoComplete:`new-password`,required:!0,value:t,onValueChange:n}),(0,u.jsx)(`ul`,{"aria-label":`Password requirements`,style:{margin:0,paddingInlineStart:20,fontSize:13},children:p.map(e=>(0,u.jsxs)(`li`,{children:[e.test(t)?`✓ `:`✗ `,e.label]},e.label))})]})}},h={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,u.jsx)(s,{...e,label:`With error`,error:`Wrong password`}),(0,u.jsx)(s,{...e,label:`Disabled`,disabled:!0,defaultValue:`secret123`}),(0,u.jsx)(s,{...e,label:`With icon`,leftSection:(0,u.jsx)(i,{})})]})},g=[`Playground`,`NewPassword`,`States`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div style={{
      display: 'grid',
      gap: 8
    }}>\r
        <PasswordInput {...args} label="Create a password" autoComplete="new-password" required value={value} onValueChange={setValue} />\r
        <ul aria-label="Password requirements" style={{
        margin: 0,
        paddingInlineStart: 20,
        fontSize: 13
      }}>\r
          {rules.map(rule => <li key={rule.label}>\r
              {rule.test(value) ? '✓ ' : '✗ '}\r
              {rule.label}\r
            </li>)}\r
        </ul>\r
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:'A sign-up field: `autoComplete="new-password"` and live requirements.',...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      <PasswordInput {...args} label="With error" error="Wrong password" />\r
      <PasswordInput {...args} label="Disabled" disabled defaultValue="secret123" />\r
      <PasswordInput {...args} label="With icon" leftSection={<icons.CheckIcon />} />\r
    </div>
}`,...h.parameters?.docs?.source}}}})))()}export{_ as a,h as i,c as n,f as r,m as t};