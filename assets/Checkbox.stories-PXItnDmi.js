import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{o as i,t as a}from"./Choice-CeWoGWqA.js";var o=t({Playground:()=>d,SelectAll:()=>h,Sizes:()=>p,States:()=>f,__namedExportsOrder:()=>g,default:()=>u}),s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),s=n(),c=r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Inputs/Checkbox`,component:a,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`Publish to ATM`,onChange:l()},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},error:{control:`text`},classNames:{control:!1}}},d={},f={render:e=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,c.jsx)(a,{...e,label:`Unchecked`}),(0,c.jsx)(a,{...e,label:`Checked`,defaultChecked:!0}),(0,c.jsx)(a,{...e,label:`Indeterminate`,indeterminate:!0}),(0,c.jsx)(a,{...e,label:`With description`,description:`Contractors see it in their portal.`}),(0,c.jsx)(a,{...e,label:`I accept the terms`,required:!0,error:`Accept the terms to continue`}),(0,c.jsx)(a,{...e,label:`Disabled`,disabled:!0,defaultChecked:!0})]})},p={render:e=>(0,c.jsx)(`div`,{style:{display:`grid`,gap:12},children:[`xs`,`sm`,`md`,`lg`].map(t=>(0,c.jsx)(a,{...e,size:t,label:`Size ${t}`},t))})},m=[`Drainage`,`Lighting`,`Signage`],h={render:e=>{let[t,n]=(0,s.useState)([`Drainage`]),r=t.length===m.length;return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,c.jsx)(a,{...e,label:`All work types`,checked:r,indeterminate:t.length>0&&!r,onChange:e=>n(e?m:[])}),(0,c.jsx)(`div`,{style:{display:`grid`,gap:8,paddingInlineStart:28},children:m.map(r=>(0,c.jsx)(a,{...e,label:r,checked:t.includes(r),onChange:e=>n(t=>e?[...t,r]:t.filter(e=>e!==r))},r))})]})}},g=[`Playground`,`States`,`Sizes`,`SelectAll`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>\r
      <Checkbox {...args} label="Unchecked" />\r
      <Checkbox {...args} label="Checked" defaultChecked />\r
      <Checkbox {...args} label="Indeterminate" indeterminate />\r
      <Checkbox {...args} label="With description" description="Contractors see it in their portal." />\r
      <Checkbox {...args} label="I accept the terms" required error="Accept the terms to continue" />\r
      <Checkbox {...args} label="Disabled" disabled defaultChecked />\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>\r
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <Checkbox key={size} {...args} size={size} label={\`Size \${size}\`} />)}\r
    </div>
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState<string[]>(['Drainage']);
    const all = checked.length === items.length;
    return <div style={{
      display: 'grid',
      gap: 8
    }}>\r
        <Checkbox {...args} label="All work types" checked={all} indeterminate={checked.length > 0 && !all} onChange={next => setChecked(next ? items : [])} />\r
        <div style={{
        display: 'grid',
        gap: 8,
        paddingInlineStart: 28
      }}>\r
          {items.map(item => <Checkbox key={item} {...args} label={item} checked={checked.includes(item)} onChange={next => setChecked(c => next ? [...c, item] : c.filter(x => x !== item))} />)}\r
        </div>\r
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`A "select all" checkbox: indeterminate while only some items are checked.`,...h.parameters?.docs?.description}}}})))()}export{f as a,p as i,d as n,_ as o,h as r,o as t};