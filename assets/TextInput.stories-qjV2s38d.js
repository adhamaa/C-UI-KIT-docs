import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{p as i,v as a}from"./icons-0fPVZlPW.js";import{n as o,r as s}from"./TextInput-CsZPX83_.js";var c=t({Controlled:()=>_,Playground:()=>p,Sections:()=>g,Sizes:()=>h,States:()=>m,Types:()=>v,__namedExportsOrder:()=>y,default:()=>f}),l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{a(),s(),l=n(),u=r(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Inputs/TextInput`,component:o,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`Package name`,placeholder:`PKG-001`,onValueChange:d()},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},error:{control:`text`},leftSection:{control:!1},rightSection:{control:!1},classNames:{control:!1}},decorators:[e=>(0,u.jsx)(`div`,{style:{maxWidth:360},children:(0,u.jsx)(e,{})})]},p={},m={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,u.jsx)(o,{...e,label:`With description`,description:`As written on the contract.`}),(0,u.jsx)(o,{...e,label:`Required`,required:!0}),(0,u.jsx)(o,{...e,label:`With error`,error:`Enter a package name`}),(0,u.jsx)(o,{...e,label:`Disabled`,disabled:!0,defaultValue:`PKG-014`}),(0,u.jsx)(o,{...e,label:`Read-only`,readOnly:!0,defaultValue:`PKG-014`})]})},h={render:e=>(0,u.jsx)(`div`,{style:{display:`grid`,gap:12},children:[`xs`,`sm`,`md`,`lg`].map(t=>(0,u.jsx)(o,{...e,size:t,label:`Size ${t}`},t))})},g={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,u.jsx)(o,{...e,label:`Website`,placeholder:`example.com`,leftSection:(0,u.jsx)(`span`,{children:`https://`})}),(0,u.jsx)(o,{...e,label:`Search`,placeholder:`Search packages`,leftSection:(0,u.jsx)(i,{}),clearable:!0,defaultValue:`Road upgrade`}),(0,u.jsx)(o,{...e,label:`Length`,placeholder:`0`,rightSection:(0,u.jsx)(`span`,{children:`km`})})]})},_={render:e=>{let[t,n]=(0,l.useState)(`Road upgrade section 4`);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{...e,clearable:!0,value:t,onValueChange:n}),(0,u.jsxs)(`p`,{style:{marginTop:8},children:[`Value: `,JSON.stringify(t)]})]})}},v={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,u.jsx)(o,{...e,label:`Email`,type:`email`,placeholder:`name@example.com`,autoComplete:`email`}),(0,u.jsx)(o,{...e,label:`Phone`,type:`tel`,placeholder:`012-345 6789`,autoComplete:`tel`}),(0,u.jsx)(o,{...e,label:`URL`,type:`url`,placeholder:`https://`})]})},y=[`Playground`,`States`,`Sizes`,`Sections`,`Controlled`,`Types`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      <TextInput {...args} label="With description" description="As written on the contract." />\r
      <TextInput {...args} label="Required" required />\r
      <TextInput {...args} label="With error" error="Enter a package name" />\r
      <TextInput {...args} label="Disabled" disabled defaultValue="PKG-014" />\r
      <TextInput {...args} label="Read-only" readOnly defaultValue="PKG-014" />\r
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>\r
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <TextInput key={size} {...args} size={size} label={\`Size \${size}\`} />)}\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      <TextInput {...args} label="Website" placeholder="example.com" leftSection={<span>https://</span>} />\r
      <TextInput {...args} label="Search" placeholder="Search packages" leftSection={<icons.SearchIcon />} clearable defaultValue="Road upgrade" />\r
      <TextInput {...args} label="Length" placeholder="0" rightSection={<span>km</span>} />\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('Road upgrade section 4');
    return <>\r
        <TextInput {...args} clearable value={value} onValueChange={setValue} />\r
        <p style={{
        marginTop: 8
      }}>Value: {JSON.stringify(value)}</p>\r
      </>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      <TextInput {...args} label="Email" type="email" placeholder="name@example.com" autoComplete="email" />\r
      <TextInput {...args} label="Phone" type="tel" placeholder="012-345 6789" autoComplete="tel" />\r
      <TextInput {...args} label="URL" type="url" placeholder="https://" />\r
    </div>
}`,...v.parameters?.docs?.source}}}})))()}export{m as a,b as c,h as i,p as n,c as o,g as r,v as s,_ as t};