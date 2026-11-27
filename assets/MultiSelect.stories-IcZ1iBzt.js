import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,t as i}from"./MultiSelect-CkiGXjq_.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{n as o,r as s}from"./data-CALuftHb.js";var c=t({Creatable:()=>h,Grouped:()=>g,MaxValues:()=>m,Playground:()=>p,States:()=>_,__namedExportsOrder:()=>v,default:()=>f}),l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),l=n(),o(),u=a(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Combobox/MultiSelect`,component:i,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`States`,data:s,placeholder:`Add states`,defaultValue:[`Johor`,`Selangor`],onChange:d()},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},error:{control:`text`},data:{control:!1}},decorators:[e=>(0,u.jsx)(`div`,{style:{maxWidth:380,minHeight:360},children:(0,u.jsx)(e,{})})]},p={},m={args:{maxValues:3,clearable:!0,description:`Up to 3 states`}},h={render:e=>{let[t,n]=(0,l.useState)([`urgent`]),[r,a]=(0,l.useState)([{value:`urgent`,label:`Urgent`},{value:`night-work`,label:`Night work`},{value:`lane-closure`,label:`Lane closure`}]);return(0,u.jsx)(i,{...e,label:`Tags`,placeholder:`Add or create tags`,data:r,value:t,onChange:n,creatable:!0,onCreateOption:e=>{let t={value:e.toLowerCase(),label:e};return a(e=>[...e,t]),t}})}},g={args:{label:`Assets`,placeholder:`Pick assets`,defaultValue:[],data:[{group:`Pavement`,items:[`Flexible`,`Rigid`]},{group:`Structures`,items:[`Bridge`,`Culvert`,`Tunnel`]}]}},_={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,u.jsx)(i,{...e,label:`Required`,required:!0,defaultValue:[],error:`Pick at least one state`}),(0,u.jsx)(i,{...e,label:`Disabled`,disabled:!0})]})},v=[`Playground`,`MaxValues`,`Creatable`,`Grouped`,`States`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    maxValues: 3,
    clearable: true,
    description: 'Up to 3 states'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(['urgent']);
    const [tags, setTags] = useState([{
      value: 'urgent',
      label: 'Urgent'
    }, {
      value: 'night-work',
      label: 'Night work'
    }, {
      value: 'lane-closure',
      label: 'Lane closure'
    }]);
    return <MultiSelect {...args} label="Tags" placeholder="Add or create tags" data={tags} value={value} onChange={setValue} creatable onCreateOption={query => {
      const option = {
        value: query.toLowerCase(),
        label: query
      };
      setTags(t => [...t, option]);
      return option;
    }} />;
  }
}`,...h.parameters?.docs?.source},description:{story:"`creatable` offers the typed text as a new option.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Assets',
    placeholder: 'Pick assets',
    defaultValue: [],
    data: [{
      group: 'Pavement',
      items: ['Flexible', 'Rigid']
    }, {
      group: 'Structures',
      items: ['Bridge', 'Culvert', 'Tunnel']
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      <MultiSelect {...args} label="Required" required defaultValue={[]} error="Pick at least one state" />\r
      <MultiSelect {...args} label="Disabled" disabled />\r
    </div>
}`,..._.parameters?.docs?.source}}}})))()}export{p as a,c as i,g as n,_ as o,m as r,y as s,h as t};