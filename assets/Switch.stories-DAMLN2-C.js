import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{a as r,o as i}from"./Choice-ChJWBOZv.js";var a=t({LabelOnTop:()=>d,Playground:()=>l,Sizes:()=>f,States:()=>u,__namedExportsOrder:()=>p,default:()=>c}),o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{i(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Inputs/Switch`,component:r,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`Email notifications`,onChange:s()},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},labelPosition:{control:`inline-radio`,options:[`end`,`top`]},error:{control:`text`},classNames:{control:!1}}},l={},u={render:e=>(0,o.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,o.jsx)(r,{...e,label:`Off`}),(0,o.jsx)(r,{...e,label:`On`,defaultChecked:!0}),(0,o.jsx)(r,{...e,label:`With description`,description:`Get an email when a work order changes.`}),(0,o.jsx)(r,{...e,label:`Disabled`,disabled:!0,defaultChecked:!0})]})},d={args:{label:`DLP status`,labelPosition:`top`,defaultChecked:!0}},f={render:e=>(0,o.jsx)(`div`,{style:{display:`grid`,gap:12},children:[`xs`,`sm`,`md`,`lg`].map(t=>(0,o.jsx)(r,{...e,size:t,label:`Size ${t}`},t))})},p=[`Playground`,`States`,`LabelOnTop`,`Sizes`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>\r
      <Switch {...args} label="Off" />\r
      <Switch {...args} label="On" defaultChecked />\r
      <Switch {...args} label="With description" description="Get an email when a work order changes." />\r
      <Switch {...args} label="Disabled" disabled defaultChecked />\r
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'DLP status',
    labelPosition: 'top',
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source},description:{story:'`labelPosition="top"` lines a switch up with the other fields in a form.',...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>\r
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <Switch key={size} {...args} size={size} label={\`Size \${size}\`} />)}\r
    </div>
}`,...f.parameters?.docs?.source}}}})))()}export{a,u as i,l as n,m as o,f as r,d as t};