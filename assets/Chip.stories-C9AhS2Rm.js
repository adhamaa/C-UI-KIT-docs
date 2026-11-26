import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,o as a}from"./Choice-C3FQ9MW7.js";var o=t({Filters:()=>p,Playground:()=>d,Sizes:()=>m,States:()=>h,__namedExportsOrder:()=>g,default:()=>u}),s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a(),s=n(),c=r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Inputs/Chip`,component:i,tags:[`!autodocs`],parameters:{layout:`padded`},args:{children:`Overdue`,onChange:l()},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]}}},d={},f=[`Overdue`,`Night work`,`Lane closure`,`Awaiting claim`],p={render:e=>{let[t,n]=(0,s.useState)([`Overdue`]);return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,c.jsx)(`fieldset`,{"aria-label":`Filters`,style:{display:`flex`,gap:8,flexWrap:`wrap`,border:0,margin:0,padding:0},children:f.map(r=>(0,c.jsx)(i,{...e,checked:t.includes(r),onChange:e=>n(t=>e?[...t,r]:t.filter(e=>e!==r)),children:r},r))}),(0,c.jsxs)(`p`,{style:{margin:0},children:[`Active: `,t.join(`, `)||`none`]})]})}},m={render:e=>(0,c.jsx)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[`xs`,`sm`,`md`,`lg`].map(t=>(0,c.jsxs)(i,{...e,size:t,defaultChecked:!0,children:[`Size `,t]},t))})},h={render:e=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,c.jsx)(i,{...e,children:`Unchecked`}),(0,c.jsx)(i,{...e,defaultChecked:!0,children:`Checked`}),(0,c.jsx)(i,{...e,defaultChecked:!0,withoutIcon:!0,children:`No check mark`}),(0,c.jsx)(i,{...e,disabled:!0,children:`Disabled`})]})},g=[`Playground`,`Filters`,`Sizes`,`States`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = useState<string[]>(['Overdue']);
    return <div style={{
      display: 'grid',
      gap: 12
    }}>\r
        <fieldset aria-label="Filters" style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        border: 0,
        margin: 0,
        padding: 0
      }}>\r
          {filters.map(f => <Chip key={f} {...args} checked={active.includes(f)} onChange={on => setActive(a => on ? [...a, f] : a.filter(x => x !== f))}>\r
              {f}\r
            </Chip>)}\r
        </fieldset>\r
        <p style={{
        margin: 0
      }}>Active: {active.join(', ') || 'none'}</p>\r
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:`A row of chips as filters, with the checked ones in state.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>\r
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <Chip key={size} {...args} size={size} defaultChecked>\r
          Size {size}\r
        </Chip>)}\r
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 8
  }}>\r
      <Chip {...args}>Unchecked</Chip>\r
      <Chip {...args} defaultChecked>\r
        Checked\r
      </Chip>\r
      <Chip {...args} defaultChecked withoutIcon>\r
        No check mark\r
      </Chip>\r
      <Chip {...args} disabled>\r
        Disabled\r
      </Chip>\r
    </div>
}`,...h.parameters?.docs?.source}}}})))()}export{h as a,m as i,p as n,_ as o,d as r,o as t};