import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{a as r,t as i}from"./Feedback-DfE6PcV0.js";import{r as a}from"./images-DbTP2eaY.js";var o=t({Initials:()=>u,Playground:()=>l,Sizes:()=>d,Square:()=>f,__namedExportsOrder:()=>p,default:()=>c}),s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),s=n(),c={title:`Components/Data display/Avatar`,component:i,tags:[`!autodocs`],parameters:{layout:`padded`},args:{src:a(200),name:`Aisyah Rahman`,size:`md`,radius:`full`},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},radius:{control:`inline-radio`,options:[`full`,`md`]},fallback:{control:!1}}},l={},u={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,s.jsx)(i,{name:`Aisyah Rahman`}),(0,s.jsx)(i,{name:`Lim Wei Jie`}),(0,s.jsx)(i,{name:`Muthu`}),(0,s.jsx)(i,{src:`/missing.png`,name:`Broken Image`}),(0,s.jsx)(i,{})]})},d={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,s.jsx)(i,{...e,size:t},t)),(0,s.jsx)(i,{...e,size:80})]})},f={args:{radius:`md`,size:`lg`}},p=[`Playground`,`Initials`,`Sizes`,`Square`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>\r
      <Avatar name="Aisyah Rahman" />\r
      <Avatar name="Lim Wei Jie" />\r
      <Avatar name="Muthu" />\r
      <Avatar src="/missing.png" name="Broken Image" />\r
      <Avatar />\r
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Initials show while the image loads, if it fails, or when there's none.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>\r
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <Avatar key={size} {...args} size={size} />)}\r
      <Avatar {...args} size={80} />\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    radius: 'md',
    size: 'lg'
  }
}`,...f.parameters?.docs?.source}}}})))()}export{f as a,d as i,u as n,m as o,l as r,o as t};