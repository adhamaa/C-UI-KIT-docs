import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,r as a}from"./DateTime-Cu9d8F0w.js";var o=t({Clocks:()=>f,Controlled:()=>p,Playground:()=>d,WorkingHours:()=>m,__namedExportsOrder:()=>h,default:()=>u}),s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{a(),s=n(),c=r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Dates/TimeInput`,component:i,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`Inspection time`,defaultValue:`09:30`,onChange:l()},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},hourCycle:{control:`inline-radio`,options:[12,24]},error:{control:`text`}},decorators:[e=>(0,c.jsx)(`div`,{style:{maxWidth:320},children:(0,c.jsx)(e,{})})]},d={},f={render:e=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,c.jsx)(i,{...e,label:`24-hour`,hourCycle:24}),(0,c.jsx)(i,{...e,label:`12-hour`,hourCycle:12}),(0,c.jsx)(i,{...e,label:`With seconds`,withSeconds:!0})]})},p={render:e=>{let[t,n]=(0,s.useState)(`14:30`);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{...e,hourCycle:12,value:t,onChange:n,defaultValue:void 0}),(0,c.jsxs)(`p`,{style:{marginTop:8},children:[`Value: `,String(t)]})]})}},m={args:{label:`Lane closure from`,min:`22:00`,max:`23:59`,defaultValue:`21:00`,description:`Night work: from 22:00`}},h=[`Playground`,`Clocks`,`Controlled`,`WorkingHours`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      <TimeInput {...args} label="24-hour" hourCycle={24} />\r
      <TimeInput {...args} label="12-hour" hourCycle={12} />\r
      <TimeInput {...args} label="With seconds" withSeconds />\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | null>('14:30');
    return <>\r
        <TimeInput {...args} hourCycle={12} value={value} onChange={setValue} defaultValue={undefined} />\r
        <p style={{
        marginTop: 8
      }}>Value: {String(value)}</p>\r
      </>;
  }
}`,...p.parameters?.docs?.source},description:{story:"The value is always 24-hour `HH:mm`, whatever clock is shown.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Lane closure from',
    min: '22:00',
    max: '23:59',
    defaultValue: '21:00',
    description: 'Night work: from 22:00'
  }
}`,...m.parameters?.docs?.source}}}})))()}export{m as a,o as i,p as n,g as o,d as r,f as t};