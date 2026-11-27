import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{r,t as i}from"./Button-CE4F-qeL.js";import{n as a,t as o}from"./Loader-CxMv2ubl.js";var s=t({InContext:()=>p,Playground:()=>u,Sizes:()=>f,Variants:()=>d,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),c=n(),l={title:`Components/Feedback/Loader`,component:o,tags:[`!autodocs`],parameters:{layout:`padded`},args:{variant:`dots`,size:`md`},argTypes:{variant:{control:`inline-radio`,options:[`dots`,`spinner`]},size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},color:{control:`color`}}},u={},d={render:e=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:32,alignItems:`center`},children:[(0,c.jsx)(o,{...e,variant:`dots`}),(0,c.jsx)(o,{...e,variant:`spinner`})]})},f={render:e=>(0,c.jsx)(`div`,{style:{display:`grid`,gap:16},children:[`dots`,`spinner`].map(t=>(0,c.jsx)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(n=>(0,c.jsx)(o,{...e,variant:t,size:n},n))},t))})},p={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,justifyItems:`center`,gap:12,padding:32,border:`1px dashed var(--ui-border)`,borderRadius:`var(--ui-radius)`,maxWidth:360},children:[(0,c.jsx)(o,{label:null}),(0,c.jsx)(`span`,{children:`Loading work orders…`}),(0,c.jsx)(i,{size:`sm`,loading:!0,children:`Buttons have their own`})]})},m=[`Playground`,`Variants`,`Sizes`,`InContext`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'center'
  }}>\r
      <Loader {...args} variant="dots" />\r
      <Loader {...args} variant="spinner" />\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      {(['dots', 'spinner'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      gap: 24,
      alignItems: 'center'
    }}>\r
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <Loader key={size} {...args} variant={variant} size={size} />)}\r
        </div>)}\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    justifyItems: 'center',
    gap: 12,
    padding: 32,
    border: '1px dashed var(--ui-border)',
    borderRadius: 'var(--ui-radius)',
    maxWidth: 360
  }}>\r
      <Loader label={null} />\r
      <span>Loading work orders…</span>\r
      <Button size="sm" loading>\r
        Buttons have their own\r
      </Button>\r
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Inside a panel while its data loads, with a line of text.`,...p.parameters?.docs?.description}}}})))()}export{d as a,f as i,s as n,h as o,u as r,p as t};